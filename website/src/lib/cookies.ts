export const COOKIE_CONSENT_KEY = 'habu-cookie-consent';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as CookiePreferences;
  } catch {
    return null;
  }
}

export function setCookiePreferences(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
}

export function hasConsentedToCookies(): boolean {
  return getCookiePreferences() !== null;
}
