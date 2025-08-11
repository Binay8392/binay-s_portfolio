# 🚀 GitHub Pages Deployment Instructions

## Current Repository: https://github.com/Binay8392/portfolio

---

## ⚠️ STEP 1: Clean Up File Structure

You currently have **duplicate files** that will cause deployment issues. Run these commands in your terminal:

```bash
# Remove duplicate files (keep only the root versions for now)
rm -rf src/
rm -rf workflows/
rm settings.json
rm extensions.json

# Keep these files:
# ✅ /App.tsx (updated with CSS import)
# ✅ /components/ (all your components)
# ✅ /styles/globals.css
# ✅ /.github/workflows/deploy.yml
```

---

## 🔧 STEP 2: Install Dependencies

```bash
# Make sure you're in your project directory
cd /path/to/your/portfolio

# Install all dependencies
npm install
```

---

## 🧪 STEP 3: Test Locally

```bash
# Start development server
npm run dev

# Open browser and verify:
# ✅ Site loads at localhost:3000
# ✅ All sections work properly
# ✅ Theme switcher works
# ✅ No console errors
```

---

## 🌐 STEP 4: Push to GitHub

```bash
# Stage all changes
git add .

# Commit changes
git commit -m "Fix deployment configuration and file structure"

# Push to GitHub
git push origin main
```

---

## 📄 STEP 5: Enable GitHub Pages

1. **Go to your repository**: https://github.com/Binay8392/portfolio
2. **Click "Settings"** tab
3. **Scroll to "Pages"** in the left sidebar
4. **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
5. **Save** the changes

---

## ⏳ STEP 6: Wait for Deployment

1. **Go to "Actions" tab** in your repository
2. **Watch the deployment process** - it should start automatically
3. **Wait for green checkmark** ✅
4. **Your site will be live at**: https://binay8392.github.io/portfolio

---

## 🎯 Configuration Details

Your files have been configured with:

- **Repository**: `Binay8392/portfolio`
- **Homepage URL**: `https://binay8392.github.io/portfolio`
- **Base Path**: `/portfolio/`
- **Node Version**: `18`
- **Build Command**: `npm run build`

---

## 🐛 Troubleshooting

### Build Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Actions Fails:
- Check the "Actions" tab for specific error messages
- Ensure all files are committed and pushed
- Verify the repository is **public**

### Page Shows 404:
- Wait 5-10 minutes after first deployment
- Check if GitHub Pages is enabled with "GitHub Actions" source
- Verify the base path in `vite.config.ts` matches `/portfolio/`

### Images Not Loading:
- Put images in the `public/` folder
- Use paths like `/image.jpg` (with leading slash)
- Ensure images are committed to git

---

## 📱 Adding Your Profile Picture

1. **Add your photo** to the `public/` folder: `public/binay.jpg`
2. **The code is already configured** to use `/binay.jpg`
3. **Commit and push** the image:

```bash
# Add your image file
cp /path/to/your/photo.jpg public/binay.jpg

# Commit the change
git add public/binay.jpg
git commit -m "Add profile picture"
git push origin main
```

---

## ✅ Final Checklist

- [ ] Cleaned up duplicate files
- [ ] Dependencies installed (`npm install` successful)
- [ ] Local testing works (`npm run dev`)
- [ ] Changes committed and pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] First deployment completed (green checkmark in Actions)
- [ ] Site accessible at https://binay8392.github.io/portfolio
- [ ] Profile picture added (optional)

---

## 🎉 Success!

Once all steps are complete, your portfolio will be:
- ✅ **Live at**: https://binay8392.github.io/portfolio
- ✅ **Auto-deploys** on every push to main branch
- ✅ **Mobile responsive** and fast loading
- ✅ **Professional** portfolio showcase

## 🔄 Future Updates

To update your portfolio:

1. **Make changes** to your files locally
2. **Test locally**: `npm run dev`
3. **Commit and push**:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
4. **GitHub Actions automatically deploys** your changes

---

**Need help?** Check the Actions tab in your GitHub repository for deployment logs and error messages.

Your portfolio is ready to go live! 🚀