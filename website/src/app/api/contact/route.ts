import { Resend } from 'resend';

const INTEREST_LABELS: Record<string, string> = {
  'private-office': 'Privatni ured',
  'meeting-room': 'Sobe za sastanke',
  'event-space': 'Event prostor',
  'hot-desk': 'Dnevni najam ureda',
  'virtual-office': 'Virtualni ured',
  other: 'Ostalo',
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Neispravan zahtjev.' }, { status: 400 });
  }

  const field = (key: string) => (typeof body[key] === 'string' ? (body[key] as string).trim() : '');

  const name = field('name');
  const email = field('email');
  const company = field('company');
  const phone = field('phone');
  const interest = field('interest');
  const message = field('message');

  // Honeypot: real users leave this empty
  if (field('website') !== '') {
    return Response.json({ ok: true });
  }

  if (!name || !email || !interest) {
    return Response.json({ error: 'Ime, email i interes su obavezni.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return Response.json({ error: 'Neispravna email adresa.' }, { status: 400 });
  }
  if ([name, company, phone].some((v) => v.length > 200) || message.length > 5000) {
    return Response.json({ error: 'Poruka je predugačka.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return Response.json(
      { error: 'Slanje trenutno nije dostupno. Kontaktirajte nas na info@habu.hr.' },
      { status: 500 }
    );
  }

  const interestLabel = INTEREST_LABELS[interest] ?? interest;
  const rows: [string, string][] = [
    ['Ime i prezime', name],
    ['Email', email],
    ['Tvrtka', company || '—'],
    ['Telefon', phone || '—'],
    ['Interes', interestLabel],
  ];

  const html = `
    <h2>Novi upit s habu.hr</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="color:#737373">${label}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`
        )
        .join('')}
    </table>
    <h3>Poruka</h3>
    <p>${escapeHtml(message || '—').replace(/\n/g, '<br />')}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? 'Habu web <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? 'info@habu.hr',
    replyTo: email,
    subject: `Upit s weba: ${interestLabel} — ${name}`,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return Response.json(
      { error: 'Slanje nije uspjelo. Pokušajte ponovno ili nas nazovite.' },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
