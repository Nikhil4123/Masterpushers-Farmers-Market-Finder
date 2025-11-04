# How to Add Environment Variables in Vercel - Step by Step Guide

## 📝 Important Note About Frontend vs Backend Variables

In Vercel, **all environment variables are set at the project level** (not separately for frontend/backend). However:

- **Frontend variables** MUST start with `VITE_` prefix to be accessible in the frontend code
- **Backend variables** can have any name (no prefix needed)
- Both are set in the same place in Vercel dashboard

---

## 🚀 Step-by-Step: Adding Environment Variables in Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Login to your account

2. **Select Your Project**
   - Click on your project name (or create a new project if you haven't deployed yet)

3. **Navigate to Settings**
   - Click on **Settings** tab (top navigation)
   - Click on **Environment Variables** in the left sidebar

4. **Add Each Variable**
   For each variable:
   - Click **"Add New"** or **"Add"** button
   - Enter the **Name** (exactly as shown below)
   - Enter the **Value** (your actual value)
   - Select **Environment**:
     - ✅ **Production** (for production deployments)
     - ✅ **Preview** (for preview deployments)
     - ✅ **Development** (optional, for local dev with `vercel dev`)
   - Click **Save**

5. **Redeploy After Adding Variables**
   - After adding/changing variables, you need to redeploy
   - Go to **Deployments** tab
   - Click **"Redeploy"** on the latest deployment
   - Or push a new commit to trigger a new deployment

---

## 📋 Complete List of Environment Variables

### 🔴 CRITICAL - Backend Variables (No VITE_ prefix)

#### Database
```
Name: MONGO_URI
Value: mongodb+srv://username:password@cluster.mongodb.net
Environment: Production, Preview

Name: MONGO_DB_NAME
Value: your-database-name
Environment: Production, Preview
```

#### Authentication (JWT Tokens)
```
Name: ACCESS_TOKEN_SECRET
Value: your-super-secret-access-token-key-minimum-32-chars
Environment: Production, Preview

Name: REFRESH_TOKEN_SECRET
Value: your-super-secret-refresh-token-key-minimum-32-chars
Environment: Production, Preview

Name: ACCESS_TOKEN_EXPIRY
Value: 1d
Environment: Production, Preview

Name: REFRESH_TOKEN_EXPIRY
Value: 7d
Environment: Production, Preview
```

#### CORS & API
```
Name: CORS_ORIGIN
Value: https://your-project-name.vercel.app
Note: Set this AFTER your first deployment with your actual Vercel URL
Environment: Production, Preview

Name: GOOGLE_MAPS_API_KEY
Value: your-google-maps-api-key
Environment: Production, Preview
```

### 🟡 OPTIONAL - Backend Variables (If using these features)

#### Payment Gateway (Razorpay)
```
Name: RAZORPAY_PAY_ID
Value: your-razorpay-key-id
Environment: Production, Preview

Name: RAZORPAY_PAY_SECRET
Value: your-razorpay-secret-key
Environment: Production, Preview
```

#### AWS S3 (File Uploads)
```
Name: AWS_REGION
Value: ap-south-1
Environment: Production, Preview

Name: AWS_ACCESS_KEY_ID
Value: your-aws-access-key
Environment: Production, Preview

Name: AWS_SECRET_ACCESS_KEY
Value: your-aws-secret-key
Environment: Production, Preview

Name: AWS_BUCKET_NAME
Value: your-s3-bucket-name
Environment: Production, Preview
```

#### Server Port (Optional - Vercel handles this automatically)
```
Name: PORT
Value: 3000
Environment: Production, Preview
Note: Not required on Vercel, but won't hurt if set
```

---

### 🟢 FRONTEND Variables (MUST start with VITE_)

#### Google Maps API (Frontend)
```
Name: VITE_GOOGLE_MAPS_API_KEY
Value: your-google-maps-api-key
Environment: Production, Preview
Note: Can be same as backend GOOGLE_MAPS_API_KEY
```

#### API URL (Optional)
```
Name: VITE_API_URL
Value: (leave empty or set to https://your-project.vercel.app/api)
Environment: Production, Preview
Note: If empty, frontend uses relative URLs (recommended)
```

---

## 📸 Visual Guide - What It Looks Like in Vercel

When you're in the Environment Variables section, you'll see:

```
┌─────────────────────────────────────────────────────────┐
│ Environment Variables                                    │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Name                  Value         Production Preview  │
│  ────────────────────────────────────────────────────── │
│  MONGO_URI            [●●●●●●●●]     ✓        ✓        │
│  MONGO_DB_NAME        [●●●●●●●●]     ✓        ✓        │
│  ACCESS_TOKEN_SECRET  [●●●●●●●●]     ✓        ✓        │
│  CORS_ORIGIN          [●●●●●●●●]     ✓        ✓        │
│  VITE_GOOGLE_MAPS...  [●●●●●●●●]     ✓        ✓        │
│                                                           │
│  [+ Add New]                                             │
└─────────────────────────────────────────────────────────┘
```

---

## ⚡ Quick Copy-Paste Template

Copy this and fill in your values:

### Backend Variables
```bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net
MONGO_DB_NAME=your-database-name
ACCESS_TOKEN_SECRET=your-access-token-secret-min-32-chars
REFRESH_TOKEN_SECRET=your-refresh-token-secret-min-32-chars
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=7d
CORS_ORIGIN=https://your-project.vercel.app
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### Frontend Variables
```bash
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
VITE_API_URL=
```

### Optional (If using)
```bash
RAZORPAY_PAY_ID=your-razorpay-key-id
RAZORPAY_PAY_SECRET=your-razorpay-secret
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_BUCKET_NAME=your-bucket-name
```

---

## 🔍 Method 2: Via Vercel CLI (Alternative)

You can also add variables via CLI:

```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Login
vercel login

# Link your project
vercel link

# Add environment variables
vercel env add MONGO_URI production
# Enter the value when prompted

# Add multiple at once
vercel env add MONGO_DB_NAME production
vercel env add ACCESS_TOKEN_SECRET production
# ... etc
```

---

## ✅ Verification Checklist

After adding all variables:

- [ ] All backend variables added (no VITE_ prefix)
- [ ] All frontend variables added (with VITE_ prefix)
- [ ] Selected "Production" and "Preview" environments
- [ ] Saved all variables
- [ ] Redeployed the project
- [ ] Tested API endpoints
- [ ] Checked browser console for errors
- [ ] Verified CORS_ORIGIN matches your Vercel URL

---

## 🚨 Common Mistakes to Avoid

1. ❌ **Forgetting VITE_ prefix for frontend variables**
   - Frontend variables MUST start with `VITE_`
   - Example: `VITE_GOOGLE_MAPS_API_KEY` ✅ (not `GOOGLE_MAPS_API_KEY`)

2. ❌ **Typo in variable names**
   - Variable names are case-sensitive
   - Must match exactly: `ACCESS_TOKEN_SECRET` (not `ACCESS_TOKEN` or `JWT_SECRET`)

3. ❌ **Not selecting Production environment**
   - Make sure to check "Production" checkbox
   - Otherwise variables won't be available in production

4. ❌ **Not redeploying after adding variables**
   - Changes to env vars require a redeploy
   - Go to Deployments → Redeploy

5. ❌ **CORS_ORIGIN with trailing slash**
   - Use: `https://your-project.vercel.app` ✅
   - Not: `https://your-project.vercel.app/` ❌

---

## 💡 Tips

1. **Use the same Google Maps API key for both:**
   - `GOOGLE_MAPS_API_KEY` (backend)
   - `VITE_GOOGLE_MAPS_API_KEY` (frontend)

2. **After first deployment:**
   - Copy your Vercel URL
   - Update `CORS_ORIGIN` with that URL
   - Redeploy

3. **For sensitive values:**
   - Vercel hides variable values (shows ●●●●●●●●)
   - You can update them but not view them later
   - Keep a backup of your values securely

4. **Test in Preview:**
   - Add variables to "Preview" environment
   - Test on preview deployments before production

---

## 🆘 Need Help?

If something doesn't work:
1. Check Vercel deployment logs
2. Verify variable names match exactly
3. Ensure you selected correct environments
4. Redeploy after adding variables
5. Check browser console for frontend errors

Good luck! 🚀

