'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  CookiePreferences,
  defaultPreferences,
  getCookiePreferences,
  setCookiePreferences,
} from '@/lib/cookies';

export interface UseCookieConsent {
  preferences: CookiePreferences;
  hasConsented: boolean;
  showBanner: boolean;
  isModalOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openModal: () => void;
  closeModal: () => void;
}

export function useCookieConsent(): UseCookieConsent {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(true); // Default to true to avoid flash
  const [showBanner, setShowBanner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const stored = getCookiePreferences();
    if (stored) {
      setPreferences(stored);
      setHasConsented(true);
      setShowBanner(false);
    } else {
      setHasConsented(false);
      setShowBanner(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setCookiePreferences(allAccepted);
    setPreferences(allAccepted);
    setHasConsented(true);
    setShowBanner(false);
    setIsModalOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setCookiePreferences(onlyNecessary);
    setPreferences(onlyNecessary);
    setHasConsented(true);
    setShowBanner(false);
    setIsModalOpen(false);
  }, []);

  const savePreferences = useCallback((prefs: CookiePreferences) => {
    const withNecessary = { ...prefs, necessary: true };
    setCookiePreferences(withNecessary);
    setPreferences(withNecessary);
    setHasConsented(true);
    setShowBanner(false);
    setIsModalOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    preferences,
    hasConsented,
    showBanner,
    isModalOpen,
    acceptAll,
    rejectAll,
    savePreferences,
    openModal,
    closeModal,
  };
}
