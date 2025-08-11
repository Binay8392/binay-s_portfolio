# 🚀 GitHub Pages Deployment Guide

Follow these exact steps to deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## 🛠️ Setup Instructions

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New Repository"** (green button)
3. **Repository Name**: `binay-portfolio` (or your preferred name)
4. **Make it Public** ✅
5. **Don't check** "Add a README file" (we have one)
6. **Click "Create repository"**

### Step 2: Update Configuration

**IMPORTANT**: Update the repository name in these files:

**1. Update `vite.config.ts` (line 6):**
```typescript
base: '/your-repo-name/', // Replace with your actual repository name
```

**2. Update `package.json` (line 6):**
```json
"homepage": "https://yourusername.github.io/your-repo-name",
```

**3. Update `package.json` (line 9):**
```json
"url": "https://github.com/yourusername/your-repo-name.git"
```

### Step 3: Upload Code to GitHub

**Open terminal/command prompt in your project folder:**

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOURUSERNAME/YOURREPONAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub.com
2. **Click "Settings"** tab
3. **Scroll to "Pages"** in the left sidebar
4. **Source**: Select "GitHub Actions"
5. **Click "Save"**

### Step 5: Wait for Deployment

- The deployment process will start automatically
- Go to **"Actions"** tab to see progress
- Wait for green checkmark ✅
- Your site will be available at: `https://yourusername.github.io/your-repo-name`

---

## 🔧 Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🎨 Customization

### Update Personal Information

**1. Contact Details** (`src/components/AboutSection.tsx`):
```typescript
// Lines 95-105 - Update your contact info
<span className="font-medium">YOUR_PHONE</span>
<span className="font-medium">YOUR_EMAIL</span>
```

**2. Social Media Links** (`src/components/AboutSection.tsx`):
```typescript
// Lines 44-66 - Update your social media URLs
const socialLinks = [
  { href: "https://github.com/yourusername", ... },
  { href: "https://linkedin.com/in/yourusername", ... },
  // ... more links
]
```

**3. Projects** (`src/components/PortfolioSection.tsx`):
```typescript
// Lines 51+ - Add your projects
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Active",
    features: ["Feature 1", "Feature 2"]
  }
]
```

**4. Certificates** (`src/components/PortfolioSection.tsx`):
```typescript
// Lines 87+ - Add your certificates
const certifications = [
  {
    title: "Certificate Name",
    issuer: "Platform",
    date: "2024",
    verifyLink: "https://verify-link.com",
    // ... more details
  }
]
```

### Add Profile Picture

1. **Put your image** in the `public` folder: `public/your-photo.jpg`
2. **Update image path** in `src/components/AboutSection.tsx`:
```typescript
<img src="/your-photo.jpg" alt="Your Name" />
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Page Shows 404
- Check if repository name matches `vite.config.ts` base path
- Ensure GitHub Pages is enabled in repository settings
- Wait 5-10 minutes after pushing changes

### Images Not Loading
- Put images in `public` folder
- Use paths like `/image.jpg` (with leading slash)
- Ensure image files are committed to git

### GitHub Actions Failing
- Check Actions tab for error details
- Ensure all files are committed and pushed
- Check if Node.js version is compatible (use Node 18+)

---

## 🔄 Making Updates

### To Update Your Portfolio:

1. **Make changes** to your files locally
2. **Test changes**: `npm run dev`
3. **Commit and push**:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
4. **GitHub Actions will auto-deploy** your changes

---

## 📁 Project Structure

```
binay-portfolio/
├── src/
│   ├── components/          # React components
│   ├── styles/             # CSS files
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                 # Static files (images, etc.)
├── .github/workflows/     # GitHub Actions
├── dist/                  # Built files (auto-generated)
├── package.json           # Dependencies
└── vite.config.ts         # Build configuration
```

---

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Updated `vite.config.ts` with correct base path
- [ ] Updated `package.json` with correct URLs
- [ ] All files committed and pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Deployment action completed successfully
- [ ] Website accessible at GitHub Pages URL
- [ ] Profile picture added (optional)
- [ ] Personal information updated
- [ ] Projects and certificates added

---

## 🎉 Success!

Your portfolio should now be live at:
`https://yourusername.github.io/your-repo-name`

Share this link on your resume, LinkedIn, and with potential employers!

## 📞 Need Help?

If you encounter issues:
1. Check the **Actions** tab for deployment errors
2. Verify all file paths and configurations
3. Ensure your repository is public
4. Wait a few minutes after changes (deployment takes time)

Your portfolio is now ready to showcase your skills to the world! 🚀