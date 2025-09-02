# Deployment Guide

This guide covers multiple deployment options for your Figma-based React portfolio.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended)

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Deploy via Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag the `build` folder to the deploy area
4. Your site will be live instantly!

**Step 3: Connect Git (Optional)**
1. Click "New site from Git"
2. Choose your repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### 2. Vercel

**One-Command Deploy:**
```bash
npm install -g vercel
vercel
```

**Or via GitHub:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects React and deploys

### 3. GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/figma-portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

## 🔧 Pre-Deployment Checklist

- [ ] Update personal information in components
- [ ] Replace placeholder content with real data
- [ ] Add your actual projects and testimonials
- [ ] Update social media links
- [ ] Test all interactive features
- [ ] Verify responsive design on all devices
- [ ] Check accessibility with screen readers
- [ ] Optimize images and assets
- [ ] Test performance with Lighthouse

## 🌍 Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions

### Vercel
1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS records

### GitHub Pages
1. Add CNAME file to public folder with your domain
2. Configure DNS A records or CNAME

## 📊 Performance Optimization

```bash
# Analyze bundle size
npm run build
npx serve -s build

# Check with Lighthouse
# Open DevTools → Lighthouse → Generate report
```

## 🔒 Security Headers

Add these to your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
```

## 🚨 Troubleshooting

**Build Fails:**
- Check Node.js version (14+ required)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for console errors

**Routing Issues:**
- Add `_redirects` file for Netlify: `/* /index.html 200`
- Add `vercel.json` for Vercel with rewrites

**Font Loading Issues:**
- Verify Google Fonts URLs are correct
- Check Content Security Policy settings

**Mobile Display Issues:**
- Test responsive breakpoints
- Verify touch interactions work
- Check viewport meta tag

## 📱 PWA (Optional)

To make your portfolio a Progressive Web App:

1. Update `public/manifest.json` with your details
2. Add service worker (optional for static sites)
3. Ensure HTTPS deployment
4. Test with Lighthouse PWA audit

## 🔄 Continuous Deployment

Set up automatic deployments:

**Netlify/Vercel:** Auto-deploy on git push (configure in dashboard)

**GitHub Actions Example:**
```yaml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install
    - run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 📈 Analytics Setup

Add analytics to track your portfolio performance:

### Google Analytics 4
1. Create GA4 property
2. Add tracking code to `public/index.html`
3. Set up conversion goals

### Vercel Analytics
1. Install: `npm install @vercel/analytics`
2. Add to your app: Import and use the Analytics component

## 🎯 SEO Optimization

- [ ] Update meta descriptions in `public/index.html`
- [ ] Add structured data markup
- [ ] Create XML sitemap
- [ ] Add Open Graph images
- [ ] Optimize page titles
- [ ] Add alt text to images

---

Need help? Create an issue in the repository or contact support.