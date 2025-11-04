# Environment Variables Checklist for Vercel Deployment

## Required Environment Variables

Set these in **Vercel Dashboard → Project Settings → Environment Variables**

### 🔴 Critical (Required for App to Work)

#### Database
- [ ] `MONGO_URI` - Your MongoDB connection string
  - Example: `mongodb+srv://username:password@cluster.mongodb.net`
  - ⚠️ Make sure to include credentials in the connection string

- [ ] `MONGO_DB_NAME` - Your MongoDB database name
  - Example: `farmers-market`

#### Authentication & Security (JWT Tokens)
- [ ] `ACCESS_TOKEN_SECRET` - Secret key for access token signing
  - Generate a strong random string (at least 32 characters)
  - Example: `your-super-secret-access-token-key-min-32-chars`
  
- [ ] `REFRESH_TOKEN_SECRET` - Secret key for refresh token signing
  - Generate a strong random string (at least 32 characters)
  - Example: `your-super-secret-refresh-token-key-min-32-chars`
  
- [ ] `ACCESS_TOKEN_EXPIRY` - Access token expiration time
  - Example: `1d` (1 day)
  
- [ ] `REFRESH_TOKEN_EXPIRY` - Refresh token expiration time
  - Example: `7d` (7 days)

- [ ] `CORS_ORIGIN` - Frontend URL for CORS
  - **After deployment**: Set this to your Vercel frontend URL
  - Example: `https://your-project-name.vercel.app`
  - For local development: `http://localhost:5173` (or your Vite port)

#### Google Maps API
- [ ] `GOOGLE_MAPS_API_KEY` - Google Maps API key for backend (directions API)
  - Get from: https://console.cloud.google.com/
  - Enable: Routes API, Directions API
  
- [ ] `VITE_GOOGLE_MAPS_API_KEY` - Google Maps API key for frontend
  - **MUST start with VITE_ prefix** (for frontend access)
  - Can be the same value as `GOOGLE_MAPS_API_KEY`
  - Enable: Maps JavaScript API, Places API (for frontend)

### 🟡 Important (Required for Specific Features)

#### Payment Gateway (Razorpay)
- [ ] `RAZORPAY_PAY_ID` - Razorpay Key ID
- [ ] `RAZORPAY_PAY_SECRET` - Razorpay Key Secret

#### AWS S3 (File Uploads)
- [ ] `AWS_REGION` - AWS region where your S3 bucket is located
  - Example: `us-east-1`, `ap-south-1`
- [ ] `AWS_ACCESS_KEY_ID` - AWS access key ID
- [ ] `AWS_SECRET_ACCESS_KEY` - AWS secret access key
- [ ] `AWS_BUCKET_NAME` - S3 bucket name

#### Email (Nodemailer - if used)
- [ ] `EMAIL_HOST` - SMTP host
- [ ] `EMAIL_PORT` - SMTP port
- [ ] `EMAIL_USER` - Email username
- [ ] `EMAIL_PASS` - Email password

### 🟢 Optional

#### Port (Not needed on Vercel)
- [ ] `PORT` - Server port (Vercel handles this automatically)
  - ⚠️ Not required on Vercel, but won't hurt if set

#### Frontend API URL (Optional)
- [ ] `VITE_API_URL` - Custom API URL (leave empty to use relative URLs)
  - Only set if you want to override the default behavior
  - If empty, frontend will use relative URLs (same domain)

## How to Set Environment Variables in Vercel

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Name**: Variable name (e.g., `MONGO_URI`)
   - **Value**: Variable value
   - **Environment**: Select where to apply:
     - ✅ Production
     - ✅ Preview
     - ✅ Development (optional)
5. Click **Save**
6. **Redeploy** your project after adding/changing variables

## Verification Steps

After setting all variables:

1. ✅ Deploy to Vercel
2. ✅ Check build logs for any missing variables
3. ✅ Test API endpoints:
   - `https://your-project.vercel.app/api/v1/auth/login`
   - `https://your-project.vercel.app/api/v1/product`
4. ✅ Check browser console for CORS errors
5. ✅ Verify database connection in serverless function logs

## Common Issues

### ❌ "MongoDB connection failed"
- Check `MONGO_URI` is correct
- Verify network access (IP whitelist in MongoDB Atlas)
- Check `MONGO_DB_NAME` is correct

### ❌ "CORS error"
- Set `CORS_ORIGIN` to your exact frontend URL
- Include protocol: `https://your-project.vercel.app`
- No trailing slash

### ❌ "JWT secret missing" or "Token verification failed"
- Set `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` to secure random strings
- Minimum 32 characters recommended
- Make sure they are different values

### ❌ "File upload not working"
- Verify all AWS S3 credentials are set
- Check S3 bucket permissions
- Verify bucket name is correct

## Security Best Practices

1. 🔒 Never commit `.env` files to Git
2. 🔒 Use strong, random values for secrets
3. 🔒 Rotate secrets regularly
4. 🔒 Use different values for production and development
5. 🔒 Review Vercel environment variable access logs

