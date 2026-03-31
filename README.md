# Alife Knowledge Portal v2 — Firebase Live Sync

Admin changes now sync across ALL devices in real time.

---

## SETUP (One-Time — ~10 Minutes)

### Step 1: Create a Firebase Project

1. Go to **https://console.firebase.google.com**
2. Click **"Create a project"** (or "Add project")
3. Name it **alife-portal**
4. Google Analytics: you can turn this OFF (not needed) → click **Continue**
5. Wait for the project to create, then click **Continue**

### Step 2: Create the Database

1. In the left sidebar, click **"Build"** → **"Firestore Database"**
2. Click **"Create database"**
3. Select a location (choose **nam5 (us-central)** for Houston)
4. Select **"Start in test mode"** → click **Create**

⚠️ **Important:** Test mode allows open access for 30 days. That's fine for now — I can help you add security rules later.

### Step 3: Register Your Web App

1. Click the **gear icon** (⚙️) next to "Project Overview" in the top-left
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **web icon** (looks like `</>`)
5. Give it a nickname: **alife-portal**
6. Do NOT check "Firebase Hosting" — we're using Vercel
7. Click **"Register app"**
8. You'll see a code block with your Firebase config — it looks like this:

```
apiKey: "AIzaSyB1234567890abcdefg..."
authDomain: "alife-portal-xxxxx.firebaseapp.com"
projectId: "alife-portal-xxxxx"
storageBucket: "alife-portal-xxxxx.firebasestorage.app"
messagingSenderId: "123456789"
appId: "1:123456789:web:abcdef123456"
```

9. Copy each of those values.

### Step 4: Paste Your Config

1. Open the file **`src/firebase.js`** in this project
2. Replace each `"PASTE_YOUR_..._HERE"` with YOUR values from Step 3
3. Save the file

Example of what it should look like when done:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB1234567890abcdefg",
  authDomain: "alife-portal-abc12.firebaseapp.com",
  projectId: "alife-portal-abc12",
  storageBucket: "alife-portal-abc12.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

### Step 5: Upload to GitHub & Deploy on Vercel

1. Go to your existing **alife-portal** repo on GitHub
2. Delete all old files (select all → click the trash icon → commit)
3. Upload ALL files from this new folder (drag them in → commit)
4. Vercel will auto-redeploy within ~60 seconds

That's it. The portal is now live with real-time sync.

---

## How It Works Now

- When an admin adds, edits, or deletes a document → it saves to Firebase
- ALL staff on ALL devices see the change **instantly** (no refresh needed)
- The first time the portal loads on a fresh database, it auto-seeds all 22 documents
- Admin password: **AlifeHG2026** (change in `src/App.jsx`)

---

## Changing the Admin Password

Open `src/App.jsx`, find this line near the top:
```javascript
const ADMIN_PASSWORD = "AlifeHG2026";
```
Change it, commit to GitHub, Vercel auto-redeploys.

---

## 30-Day Security Reminder

Firebase test mode expires after 30 days. When that happens, go to:
**Firebase Console → Firestore → Rules** and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /documents/{docId} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

This keeps it open for your use case (no user accounts needed). Click **Publish**.
