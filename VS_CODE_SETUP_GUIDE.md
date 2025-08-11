# 🚀 VS Code Setup & GitHub Deployment Guide

## 🧹 STEP 1: Clean Up Your File Structure

You currently have duplicate files that will cause issues. Follow these steps to clean up:

### **Delete These Files/Folders:**

```bash
# Delete root-level duplicates (keep only src/ versions)
rm App.tsx
rm -rf components/
rm -rf styles/
rm -rf workflows/
```

### **Keep Only These Locations:**
- ✅ `src/App.tsx`
- ✅ `src/components/`
- ✅ `src/styles/`
- ✅ `.github/workflows/`

---

## 🔧 STEP 2: VS Code Setup

### **Install Required Extensions:**

Open VS Code and install these extensions:

1. **Tailwind CSS IntelliSense** - `bradlc.vscode-tailwindcss`
2. **Prettier** - `esbenp.prettier-vscode`
3. **ESLint** - `dbaeumer.vscode-eslint`
4. **TypeScript** - `ms-vscode.vscode-typescript-next`
5. **Auto Rename Tag** - `formulahendry.auto-rename-tag`
6. **Path Intellisense** - `christian-kohler.path-intellisense`
7. **Error Lens** - `usernamehw.errorlens`

### **Configure VS Code Settings:**

The `.vscode/settings.json` file has been created with optimal settings for React + TypeScript + Tailwind development.

---

## 📦 STEP 3: Project Setup

### **1. Open Terminal in VS Code:**
```bash
# Make sure you're in the project root directory
pwd
# Should show: /path/to/your/portfolio-project
```

### **2. Install Dependencies:**
```bash
npm install
```

### **3. Start Development Server:**
```bash
npm run dev
```

### **4. Open Browser:**
Navigate to `http://localhost:3000`

---

## 🌐 STEP 4: GitHub Repository Setup

### **1. Create GitHub Repository:**

1. Go to [GitHub.com](https://github.com)
2. Click "New Repository" (green button)
3. Repository name: `binay-portfolio` (or your choice)
4. Make it **Public** ✅
5. **Don't** check "Add a README file"
6. Click "Create repository"

### **2. Update Configuration Files:**

**A. Update `vite.config.ts` (line 6):**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // ← Replace with actual repo name
  // ... rest of config
})
```

**B. Update `package.json` (lines 6-9):**
```json
{
  "name": "your-repo-name",
  "homepage": "https://yourusername.github.io/your-repo-name",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo-name.git"
  }
}
```

---

## 🚀 STEP 5: Deploy to GitHub

### **1. Initialize Git Repository:**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add remote origin (replace with your actual GitHub URL)
git remote add origin https://github.com/YOURUSERNAME/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### **2. Enable GitHub Pages:**

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in left sidebar
4. **Source:** Select **"GitHub Actions"**
5. Click **"Save"**

### **3. Wait for Deployment:**
- Go to **"Actions"** tab to see deployment progress
- Wait for green checkmark ✅
- Your site will be live at: `https://yourusername.github.io/your-repo-name`

---

## 🎯 STEP 6: Verification Checklist

### **Local Development:**
- [ ] `npm run dev` works without errors
- [ ] Site opens at `localhost:3000`
- [ ] All sections load properly
- [ ] Theme switcher works
- [ ] Mobile responsive design works

### **GitHub Deployment:**
- [ ] Repository created and configured
- [ ] Code pushed to GitHub successfully
- [ ] GitHub Actions workflow runs successfully
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] All images and assets load correctly

---

## 🎨 STEP 7: Customization

### **Add Your Profile Picture:**
```bash
# Put your image in the public folder
cp /path/to/your-photo.jpg public/binay.jpg
```

### **Update Personal Information:**

**Contact Details** (`src/components/AboutSection.tsx`):
```typescript
// Lines 95-105 - Update your info
<span className="font-medium">YOUR_PHONE_NUMBER</span>
<span className="font-medium">your.email@example.com</span>
```

**Social Media Links** (`src/components/AboutSection.tsx`):
```typescript
// Lines 44-66 - Update URLs
const socialLinks = [
  { href: "https://github.com/yourusername", ... },
  { href: "https://linkedin.com/in/yourusername", ... },
  // ... more links
]
```

**Projects** (`src/components/PortfolioSection.tsx`):
```typescript
// Lines 51+ - Add your real projects
const projects = [
  {
    title: "Your Project Name",
    description: "What your project does...",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Active",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
]
```

---

## ⚡ STEP 8: Development Workflow

### **Daily Development:**
```bash
# Start development
npm run dev

# Make changes to your files
# Browser will auto-refresh with changes

# When ready to deploy:
git add .
git commit -m "Update portfolio content"
git push origin main

# GitHub Actions will auto-deploy your changes
```

### **Available Scripts:**
- `npm run dev` - Development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code quality

---

## 🐛 Troubleshooting

### **Common Issues & Solutions:**

**Error: "Cannot find module"**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Fails:**
```bash
# Check for TypeScript errors
npm run build
# Fix any errors shown
```

**GitHub Pages shows 404:**
- Verify `vite.config.ts` base path matches repo name
- Wait 5-10 minutes after deployment
- Check Actions tab for deployment errors

**Images not loading:**
- Ensure images are in `public/` folder
- Use paths like `/image.jpg` (with leading slash)
- Verify images are committed to git

**VS Code not showing Tailwind autocomplete:**
- Install Tailwind CSS IntelliSense extension
- Reload VS Code window (Cmd/Ctrl + Shift + P → "Reload Window")

---

## 🎉 Success!

Once completed, your portfolio will be:
- ✅ **Locally editable** in VS Code with full IntelliSense
- ✅ **Auto-deployed** on every git push
- ✅ **Live on GitHub Pages** with custom domain support
- ✅ **Mobile responsive** and performant
- ✅ **SEO optimized** for professional presentation

## 📞 Need Help?

If you encounter issues:
1. Check VS Code Problems panel (Ctrl/Cmd + Shift + M)
2. Review GitHub Actions logs in your repository
3. Ensure all file paths use `src/` structure
4. Verify no duplicate files exist in root directory

Your portfolio is now ready for professional development! 🚀