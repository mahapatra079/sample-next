"use client";

import { useSyncExternalStore } from "react";
import AccountNav from "../components/account-nav";

type Preferences = {
  productUpdates: boolean;
  accountAlerts: boolean;
};

const defaultPreferences: Preferences = {
  productUpdates: false,
  accountAlerts: true,
};

const storageKey = "mysite-preferences";
const changeEvent = "mysite-preferences-change";

function getStoredPreferences() {
  return window.localStorage.getItem(storageKey);
}

function subscribeToPreferences(onChange: () => void) {
  window.addEventListener(changeEvent, onChange);
  return () => window.removeEventListener(changeEvent, onChange);
}

function parsePreferences(value: string | null): Preferences {
  if (!value) return defaultPreferences;

  try {
    const parsed = JSON.parse(value);
    return {
      productUpdates: typeof parsed.productUpdates === "boolean" ? parsed.productUpdates : defaultPreferences.productUpdates,
      accountAlerts: typeof parsed.accountAlerts === "boolean" ? parsed.accountAlerts : defaultPreferences.accountAlerts,
    };
  } catch {
    return defaultPreferences;
  }
}

export default function SettingsPage() {
  const storedPreferences = useSyncExternalStore(
    subscribeToPreferences,
    getStoredPreferences,
    () => null,
  );
  const preferences = parsePreferences(storedPreferences);

  function togglePreference(name: keyof Preferences) {
    const updated = { ...preferences, [name]: !preferences[name] };
    window.localStorage.setItem(storageKey, JSON.stringify(updated));
    window.dispatchEvent(new Event(changeEvent));
  }

  return (
    <section className="py-6 sm:py-10">
      <AccountNav current="/settings" />
      <div>
        <p className="text-sm font-semibold uppercase text-emerald-800">Your account</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">Choose how and when MySite contacts you.</p>
      </div>

      <div className="mt-8 max-w-2xl rounded-md border border-gray-200 bg-white">
        <fieldset>
          <legend className="w-full border-b border-gray-200 px-5 py-4 font-semibold text-gray-900 sm:px-6">
            Notifications
          </legend>
          <div className="divide-y divide-gray-100 px-5 sm:px-6">
            <label className="flex cursor-pointer items-start justify-between gap-5 py-5">
              <span>
                <span className="block text-sm font-medium text-gray-900">Account alerts</span>
                <span className="mt-1 block text-sm leading-5 text-gray-600">
                  Important messages about your account and security.
                </span>
              </span>
              <input
                type="checkbox"
                checked={preferences.accountAlerts}
                onChange={() => togglePreference("accountAlerts")}
                className="mt-1 size-4 shrink-0 accent-emerald-800"
              />
            </label>
            <label className="flex cursor-pointer items-start justify-between gap-5 py-5">
              <span>
                <span className="block text-sm font-medium text-gray-900">Product updates</span>
                <span className="mt-1 block text-sm leading-5 text-gray-600">
                  News about features and improvements.
                </span>
              </span>
              <input
                type="checkbox"
                checked={preferences.productUpdates}
                onChange={() => togglePreference("productUpdates")}
                className="mt-1 size-4 shrink-0 accent-emerald-800"
              />
            </label>
          </div>
        </fieldset>
        <div className="border-t border-gray-200 px-5 py-4 sm:px-6">
          <p role="status" className="text-sm text-gray-600">Changes are saved automatically in this browser.</p>
        </div>
      </div>
    </section>
  );
}