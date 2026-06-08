# FleetLedger — Setup Guide

## Files in this package
- `index.html` — The entire app (open this in your browser)
- `manifest.json` — PWA manifest (install on phone)
- `sw.js` — Service worker (offline support)

---

## Step 1 — Get your Firebase config

1. Go to https://console.firebase.google.com
2. Create a new project (or use existing)
3. Click **"Add app"** → choose **Web (</>)**
4. Register the app, then copy the `firebaseConfig` object

It looks like:
```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc..."
};
```

## Step 2 — Add config to the app

**Option A (easiest): In-app Settings**
- Open `index.html` in browser
- Go to **Settings** in the sidebar
- Paste each value into the fields
- Click **Save & Reconnect**

**Option B (permanent): Edit the file**
- Open `index.html` in any text editor
- Find `window.FIREBASE_CONFIG = {` near the top
- Paste your values

## Step 3 — Enable Firestore

1. In Firebase Console → **Firestore Database**
2. Click **Create Database**
3. Choose **Start in test mode** (you can add security rules later)
4. Select a region close to you (e.g., asia-south1 for Pakistan)

## Step 4 — Install on your phone (PWA)

**iPhone/Safari:**
- Open the app URL in Safari
- Tap the Share button → "Add to Home Screen"

**Android/Chrome:**
- Open in Chrome
- Tap menu (⋮) → "Add to Home Screen" or "Install App"

## Step 5 — Host it (so all devices can access it)

Free options:
- **Firebase Hosting**: `firebase deploy` after installing Firebase CLI
- **Netlify**: Drag & drop the folder at netlify.com/drop
- **GitHub Pages**: Push to a repo and enable Pages

---

## Firestore Collections used

| Collection | What's stored |
|---|---|
| `cars` | Car details, purchase price, installment info |
| `fuelLogs` | Every fill-up entry |
| `serviceLogs` | Service records & due dates |
| `fuelPrices` | Pakistan fuel price history |

All collections sync in real-time across all devices automatically.
