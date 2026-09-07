# CHAMNAB MEY - Professional Portfolio & Digital Marketing Agency Website

Official portfolio and client acquisition website for **CHAMNAB MEY** – Senior Digital Marketing Strategist, Performance Ad Specialist, and Web Developer based in Phnom Penh, Cambodia.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and integrated with **Google Cloud Firestore** for automated client consultation lead capture. Designed for automated zero-config continuous deployment on **Vercel** via **GitHub**.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 1. Deploying Automatically to Vercel via GitHub

Follow these simple steps to host your website with automatic builds every time you make changes:

### Step 1: Initialize Git & Push to Your GitHub Account
Open PowerShell or your terminal in this project folder (`d:\Github\chamnabmey.com`):

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit your initial website
git commit -m "Initial commit: Chamnab Mey portfolio with Google Firebase & Vercel CI/CD"

# 4. Create a new repository on GitHub (e.g. named 'chamnabmey.com' or 'portfolio')
# 5. Link your local repo to GitHub (replace with your GitHub username)
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/chamnabmey.com.git

# 6. Push to GitHub
git push -u origin main
```

### Step 2: Connect GitHub to Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Locate your `chamnabmey.com` repository and click **"Import"**.
4. Keep the default settings (Framework Preset: **Next.js**).
5. Click **"Deploy"**.

Your website will be live in ~60 seconds with a free `.vercel.app` domain (or your custom domain `chamnabmey.com`). Every time you push a commit to GitHub, Vercel will automatically re-build and deploy your site!

---

## 🗄️ 2. Setting Up Google Cloud Database (Firebase Firestore)

Your website is pre-configured to store client consultation inquiries directly in Google Cloud Firestore.

### Step 1: Create a Free Firebase Project
1. Go to the [Google Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** and name it (e.g., `chamnabmey-portfolio`).
3. Turn on or off Google Analytics as you prefer and click **"Create Project"**.

### Step 2: Create Firestore Database
1. In the left menu of Firebase Console, click **"Firestore Database"** (or Build → Firestore Database).
2. Click **"Create database"**.
3. Choose a location closest to your clients (e.g., `asia-southeast1` Singapore or `asia-east1` Taiwan).
4. Start in **Production mode** (or test mode for testing).
5. Click **"Create"**.

### Step 3: Security Rules for Firestore
In Firestore Database → **Rules** tab, ensure your rules allow leads to be submitted:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      // Allow anyone to create an inquiry, but only authenticated admin can read
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```
Click **"Publish"**.

### Step 4: Obtain Your Firebase Web Credentials
1. In Firebase Console, click the **Gear icon (Project settings)** ⚙️ next to Project Overview.
2. Under **"Your apps"**, click the **Web icon (`</>`)**.
3. Register your app (e.g. `chamnabmey-web`).
4. Firebase will display your config keys:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

### Step 5: Add Keys to Vercel & Local `.env.local`

#### For Local Development:
Create a file named `.env.local` in this folder with:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

#### For Vercel Production:
1. Go to your project dashboard on **Vercel**.
2. Go to **Settings** → **Environment Variables**.
3. Add the exact same 6 variables above.
4. Click **Redeploy** on Vercel.

*Note: The website features an intelligent built-in fallback mode, so if the database keys are not yet configured, the website will still run and display a helpful demo confirmation notice rather than crashing.*

---

## 📂 Project Structure

```
chamnabmey.com/
├── public/
│   └── Resume-CHAMNAB-MEY.pdf     # Downloadable PDF resume
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts     # Server API endpoint for consultation submissions
│   │   ├── globals.css            # Tailwind styling & animations
│   │   ├── layout.tsx             # Root layout & SEO meta tags
│   │   └── page.tsx               # Main landing page
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navigation with resume & booking CTA
│   │   ├── Hero.tsx               # High-converting hero section with stats
│   │   ├── About.tsx              # Career timeline, Setec/IU education & philosophy
│   │   ├── Services.tsx           # 6 core high-value service offerings
│   │   ├── CaseStudies.tsx        # Solis Cambodia, KHB Media & Riich Me case studies
│   │   ├── SkillsMatrix.tsx       # Tech stack, ads & infrastructure matrix
│   │   ├── Testimonials.tsx       # Executive endorsements (Mr. Tim Vutha, etc.)
│   │   ├── ContactForm.tsx        # Consultation lead form connected to Google Firestore
│   │   └── Footer.tsx             # Contact details, address, copyright
│   └── lib/
│       └── firebase.ts            # Google Cloud Firestore SDK setup & lead submission
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.mjs
```

---

## 👤 About CHAMNAB MEY
- **Phone / Telegram**: +855 15 705 703
- **Email**: admin@chamnabmey.com / chamnabmey.info@gmail.com
- **LinkedIn**: [linkedin.com/in/chamnabmey](https://www.linkedin.com/in/chamnabmey)
- **Location**: #75, Toulsambo, Prey Veng, Dongkor, 12000 Phnom Penh, Cambodia
