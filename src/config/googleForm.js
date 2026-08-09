export const GOOGLE_FORM_CONFIG = {
  formResponseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdEcdBqIZpxiZor7_-8Gt5DBBjjWKlgjCjtlg3P9Fn_s9UZEA/formResponse",
  entryName: "entry.113127413",
  entryMessage: "entry.610963671",
  sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRDtoY2STm9X8qNYeXutCfK3mh1fZ5YsrTYj_D277gKjizOAB1VGIdtksa5SmLyjZOw-V1kaQ9_Bd1/pub?output=csv"
};

// Zero hardcoded sample/placeholder wishes. ONLY real submitted responses will be loaded from Google Sheet!
export const INITIAL_WISHES = [];

/**
 * Robust CSV parser that correctly handles quoted strings, commas, and newlines.
 */
export function parseGoogleSheetCsv(csvText) {
  if (!csvText || typeof csvText !== 'string') return [];

  const lines = [];
  let currentLine = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentLine.push(currentField.trim());
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentLine.push(currentField.trim());
      if (currentLine.some(field => field.length > 0)) {
        lines.push(currentLine);
      }
      currentLine = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  if (currentField || currentLine.length > 0) {
    currentLine.push(currentField.trim());
    lines.push(currentLine);
  }

  // Header row is expected to be [Timestamp, Name, Message] or similar
  if (lines.length <= 1) return [];

  // Map rows starting from index 1 (ignoring headers)
  const results = [];
  for (let i = lines.length - 1; i >= 1; i--) {
    const row = lines[i];
    if (row.length >= 2) {
      // In typical Google Forms sheets: [Timestamp, Name, Message]
      const name = row[1] || row[0];
      const message = row[2] || row[1];
      if (name && message) {
        results.push({ name, message });
      }
    }
  }
  return results;
}
