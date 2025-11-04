# 🚀 Quick Guide: Add Environment Variables in Vercel

## ⚡ Quick Steps

1. **Go to**: https://vercel.com/dashboard
2. **Click** your project → **Settings** → **Environment Variables**
3. **Click** "Add New"
4. **Enter** Name and Value
5. **Select** ✅ Production and ✅ Preview
6. **Click** Save
7. **Redeploy** your project

---

## 📋 All Variables You Need to Add

### Backend Variables (No prefix needed)

```
MONGO_URI
MONGO_DB_NAME
ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET
ACCESS_TOKEN_EXPIRY
REFRESH_TOKEN_EXPIRY
CORS_ORIGIN
GOOGLE_MAPS_API_KEY
```

### Frontend Variables (Must start with VITE_)

```
VITE_GOOGLE_MAPS_API_KEY
VITE_API_URL (optional - leave empty)
```

### Optional (If using these features)

```
RAZORPAY_PAY_ID
RAZORPAY_PAY_SECRET
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_BUCKET_NAME
```

---

## 🎯 Example Values

```
MONGO_URI = mongodb+srv://user:pass@cluster.mongodb.net
MONGO_DB_NAME = farmersmarket
ACCESS_TOKEN_SECRET = your-super-secret-key-min-32-chars-long
REFRESH_TOKEN_SECRET = your-refresh-secret-key-min-32-chars-long
ACCESS_TOKEN_EXPIRY = 1d
REFRESH_TOKEN_EXPIRY = 7d
CORS_ORIGIN = https://your-project.vercel.app
GOOGLE_MAPS_API_KEY = AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_GOOGLE_MAPS_API_KEY = AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## ⚠️ Important Notes

1. **Frontend variables MUST start with `VITE_`**
   - ✅ `VITE_GOOGLE_MAPS_API_KEY` 
   - ❌ `GOOGLE_MAPS_API_KEY` (won't work in frontend)

2. **Backend variables NO prefix needed**
   - ✅ `MONGO_URI`
   - ✅ `ACCESS_TOKEN_SECRET`

3. **Set CORS_ORIGIN after first deployment**
   - Deploy once → Copy your Vercel URL → Update CORS_ORIGIN → Redeploy

4. **Select both Production and Preview**
   - Check both checkboxes when adding variables

5. **Redeploy after adding variables**
   - Variables only take effect after redeployment

---

## 📸 Visual Example

```
┌──────────────────────────────────────────────┐
│ Add Environment Variable                     │
├──────────────────────────────────────────────┤
│                                               │
│ Name: [MONGO_URI                    ]        │
│                                               │
│ Value: [mongodb+srv://...         ]          │
│                                               │
│ Environment:                                  │
│ ☑ Production                                 │
│ ☑ Preview                                    │
│ ☐ Development                                │
│                                               │
│ [Cancel]  [Save]                             │
└──────────────────────────────────────────────┘
```

---

For detailed instructions, see: `HOW_TO_ADD_ENV_VARS_VERCEL.md`

