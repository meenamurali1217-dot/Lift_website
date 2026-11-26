import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '../database/submissions.json');

// Ensure database directory and file exist
function initDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    const initialData = {
      quotes: [],
      contacts: [],
      metadata: {
        createdAt: new Date().toISOString(),
        version: "1.0.0"
      }
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
  }
}

export function readDb() {
  initDb();
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading database file:', err);
    return { quotes: [], contacts: [] };
  }
}

export function writeDb(data) {
  initDb();
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing to database:', err);
    return false;
  }
}

export function addQuote(quoteData) {
  const db = readDb();
  const id = `BSL-QT-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
  const record = {
    id,
    ...quoteData,
    status: 'Pending Review',
    createdAt: new Date().toISOString()
  };
  db.quotes.unshift(record);
  writeDb(db);
  return record;
}

export function addContact(contactData) {
  const db = readDb();
  const id = `BSL-INQ-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
  const record = {
    id,
    ...contactData,
    status: 'New',
    createdAt: new Date().toISOString()
  };
  db.contacts.unshift(record);
  writeDb(db);
  return record;
}

export function getQuotes() {
  const db = readDb();
  return db.quotes;
}

export function getContacts() {
  const db = readDb();
  return db.contacts;
}
