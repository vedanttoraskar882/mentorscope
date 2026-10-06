import type { PilotSubmission } from '../types';

export const STORAGE_KEY = 'mentorscopePilotRequests';

export interface StorageResult {
  success: boolean;
  message?: string;
  error?: string;
  data?: PilotSubmission[];
}

/**
 * Safely reads all existing pilot requests from localStorage.
 * Throws or returns an error if malformed or non-array data exists, preserving raw data.
 */
export function getSavedPilotSubmissions(): { submissions: PilotSubmission[]; error?: string } {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {
      submissions: [],
      error: 'Browser local storage is not available in this environment.',
    };
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    return { submissions: [] };
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return {
        submissions: [],
        error:
          'Existing saved data in browser storage is corrupted (expected an array). Existing storage data has been preserved without modification.',
      };
    }
    return { submissions: parsed as PilotSubmission[] };
  } catch (err) {
    return {
      submissions: [],
      error: `Failed to parse saved pilot enquiries: ${(err as Error).message}. Existing storage content was left intact.`,
    };
  }
}

/**
 * Saves a new pilot enquiry to localStorage by appending it to existing records.
 * Follows strict safety rules:
 * - Does not overwrite existing records.
 * - Does not silently erase malformed data.
 * - Confirms array validity before appending.
 */
export function savePilotSubmission(newRecord: Omit<PilotSubmission, 'id' | 'submittedAt'>): StorageResult {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {
      success: false,
      error: 'Browser local storage is unavailable in your browser or privacy mode is blocking access.',
    };
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  let currentList: PilotSubmission[] = [];

  if (raw !== null) {
    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return {
          success: false,
          error:
            'Existing local storage record is not a valid list. To protect your existing data, the new submission was not saved. Please inspect local storage.',
        };
      }
      currentList = parsed;
    } catch (parseError) {
      return {
        success: false,
        error: `Could not read existing local storage records (${(parseError as Error).message}). To prevent data loss, the new entry was not written.`,
      };
    }
  }

  const id = typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `pilot_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  const fullRecord: PilotSubmission = {
    id,
    fullName: newRecord.fullName.trim(),
    phoneNumber: newRecord.phoneNumber.trim(),
    emailAddress: newRecord.emailAddress.trim(),
    organisationName: newRecord.organisationName.trim(),
    submittedAt: new Date().toISOString(),
  };

  const updatedList = [...currentList, fullRecord];

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    return {
      success: true,
      message: 'Your pilot enquiry has been saved in this browser.',
      data: updatedList,
    };
  } catch (writeError) {
    return {
      success: false,
      error: `Unable to write to browser local storage (${(writeError as Error).message}). Your input has been preserved.`,
    };
  }
}
