# E-Commerce App Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is optimized for Next.js and Vite apps. It offers instant deployments and automatic optimizations.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add E-Commerce App"
   git push origin feat/assignment-6
   ```

2. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

3. **Deploy**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

4. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

**Expected Build Time:** 1-2 minutes
**Free Tier:** Includes 100GB bandwidth/month

---

### Option 2: Netlify

Netlify provides excellent performance and automatic CI/CD from Git.

#### Steps:

1. **Push to GitHub** (same as above)

2. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub

3. **Deploy**
   - Click "New site from Git"
   - Select GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Custom Domain**
   - In Netlify, go to Domain management
   - Add custom domain
   - Update DNS records

**Expected Build Time:** 2-3 minutes
**Free Tier:** Includes 100GB/month bandwidth

---

### Option 3: GitHub Pages

Free hosting directly from GitHub, though with some limitations.

#### Steps:

1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/Upzenix/',
     // ... rest of config
   })
   ```

2. Push to GitHub

3. Go to Repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save

**Note:** This method has path prefix requirements

---

## 📊 Performance Comparison

| Platform | Uptime | CDN | CI/CD | Cost |
|----------|--------|-----|-------|------|
| Vercel   | 99.95% | Yes | Auto  | Free |
| Netlify  | 99.9%  | Yes | Auto  | Free |
| GitHub   | 99.9%  | No  | Manual| Free |

---

## ✅ Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] App builds without errors (`npm run build`)
- [ ] No console errors when testing locally (`npm run dev`)
- [ ] Environment variables set (if any)
- [ ] Code committed to Git
- [ ] README updated with deployment info

---

## 🔍 Testing Before Deployment

```bash
# Test build
npm run build

# Preview build locally
npm run preview

# This runs the built app at http://localhost:4173
```

---

## 🌐 Post-Deployment Steps

1. **Test in Production**
   - Visit deployed URL
   - Test all features:
     - Product search/filter
     - Add to cart
     - Checkout form
     - Theme toggle

2. **Monitor Performance**
   - Check page load times
   - Monitor API calls
   - Check for console errors

3. **Set Up Analytics** (Optional)
   - Vercel Analytics: Built-in
   - Google Analytics: Add tracking ID

---

## 🆘 Troubleshooting

**Build fails on platform but works locally:**
- Check Node version matches (18+)
- Verify all dependencies in package.json
- Clear cache and rebuild

**Routes not working after deployment:**
- Ensure SPA routing is configured
- Vercel/Netlify handle this automatically for Vite

**Styles not loading:**
- TailwindCSS is bundled into CSS file
- Clear browser cache

**API calls failing:**
- FakeStore API is public, should work everywhere
- Check browser Network tab for 404/500 errors

---

## 📱 Live URLs (After Deployment)

Update these with your actual deployed URLs:

- **Vercel:** https://ecommerce-app-[your-name].vercel.app
- **Netlify:** https://ecommerce-app-[your-name].netlify.app
- **Custom Domain:** https://yourdomain.com

---

## 🔄 Automatic Redeployment

Both Vercel and Netlify automatically redeploy when you:
- Push to main branch
- Merge a pull request
- Update deployment settings

---

## 📞 Support

- Vercel Support: https://vercel.com/support
- Netlify Support: https://docs.netlify.com
- Vite Docs: https://vitejs.dev
- React Router Docs: https://reactrouter.com

