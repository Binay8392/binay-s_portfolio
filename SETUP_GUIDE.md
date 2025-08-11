# 🚀 Complete Setup Guide - Binay Portfolio

This guide will walk you through setting up and running the Binay Portfolio project locally on your machine.

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your computer:

### 1. **Node.js** (Required)
- **Download**: Visit [nodejs.org](https://nodejs.org/)
- **Version**: Install the LTS (Long Term Support) version (v18.x or higher)
- **Verify Installation**: Open terminal/command prompt and run:
  ```bash
  node --version
  npm --version
  ```

### 2. **Visual Studio Code** (Recommended)
- **Download**: Visit [code.visualstudio.com](https://code.visualstudio.com/)
- **Extensions** (Install these for better experience):
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - Auto Rename Tag

### 3. **Git** (Optional but recommended)
- **Download**: Visit [git-scm.com](https://git-scm.com/)
- **Verify**: `git --version`

## 📁 Step 1: Create Project Structure

### Option A: Manual Setup (Recommended)

1. **Create a new folder** for your project:
   ```bash
   mkdir binay-portfolio
   cd binay-portfolio
   ```

2. **Create the following folder structure**:
   ```
   binay-portfolio/
   ├── components/
   │   ├── ui/
   │   └── figma/
   ├── src/
   ├── styles/
   └── (root files)
   ```

3. **Copy all files** from our conversation into the correct folders:
   - Copy `App.tsx` to the root
   - Copy all component files to `components/`
   - Copy UI components to `components/ui/`
   - Copy `main.tsx` to `src/`
   - Copy `globals.css` to `styles/`
   - Copy configuration files (`package.json`, `vite.config.ts`, etc.) to root

## 📦 Step 2: Install Dependencies

1. **Open VS Code**:
   ```bash
   code .
   ```
   (Or open VS Code and select "Open Folder" → choose your project folder)

2. **Open VS Code Terminal**:
   - Press `Ctrl+`` (backtick) or `View → Terminal`

3. **Install all dependencies**:
   ```bash
   npm install
   ```

   This will install all packages listed in `package.json`:
   - React & React DOM
   - TypeScript
   - Vite (build tool)
   - Tailwind CSS
   - Framer Motion (animations)
   - Lucide React (icons)
   - And more...

4. **Wait for installation** (may take 2-5 minutes)

## 🎯 Step 3: Fix Import Issues

Some imports might need adjustment for local development:

1. **Check** `components/ui/button.tsx` has the correct import:
   ```typescript
   import { cn } from "./utils"
   ```

2. **Ensure** `components/figma/ImageWithFallback.tsx` exists (create if missing):
   ```typescript
   interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
     src: string;
     alt: string;
   }

   export function ImageWithFallback({ src, alt, ...props }: ImageWithFallbackProps) {
     return <img src={src} alt={alt} {...props} />
   }
   ```

## 🚀 Step 4: Start Development Server

1. **In VS Code terminal**, run:
   ```bash
   npm run dev
   ```

2. **Look for output** similar to:
   ```
   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

4. **Portfolio should load** with:
   - Dark theme with purple/pink gradients
   - Animated navigation
   - Hero section with Binay's information
   - Portfolio showcase with tabs
   - About section
   - Contact card
   - Theme switcher (top-right)

## 🎨 Step 5: Test Features

Verify these features work:

- ✅ **Navigation**: Smooth scrolling between sections
- ✅ **Theme Switcher**: Click palette icon (top-right) to change themes
- ✅ **Responsive Design**: Resize browser window / test on mobile
- ✅ **Animations**: Elements should animate on scroll
- ✅ **Portfolio Tabs**: Click Projects/Certifications/Skills tabs
- ✅ **Social Links**: Click to open (GitHub, LinkedIn, etc.)
- ✅ **Contact Buttons**: Email and phone links

## 🔧 Troubleshooting

### Common Issues & Solutions:

#### **Issue**: `npm install` fails
**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and try again
rm -rf node_modules package-lock.json
npm install
```

#### **Issue**: TypeScript errors
**Solution**:
```bash
# Install TypeScript globally
npm install -g typescript

# Check tsconfig.json is present
```

#### **Issue**: Imports not working
**Solution**:
- Check file paths are correct
- Ensure all files exist in the right folders
- Restart VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"

#### **Issue**: Styles not loading
**Solution**:
- Check `styles/globals.css` exists
- Verify import in `src/main.tsx`:
  ```typescript
  import '../styles/globals.css'
  ```

#### **Issue**: Port 3000 already in use
**Solution**:
```bash
# Use different port
npm run dev -- --port 3001
```

#### **Issue**: Animations not working
**Solution**:
- Check framer-motion is installed: `npm list framer-motion`
- Clear browser cache: `Ctrl+Shift+R` (hard refresh)

## 📱 Mobile Testing

Test responsive design:

1. **Browser DevTools**:
   - Press `F12`
   - Click device icon (mobile view)
   - Test different screen sizes

2. **Real Device**:
   - Find your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
   - Access `http://YOUR_IP:3000` from phone

## 🚀 Production Build

When ready to deploy:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Add Your Own Photo:
1. Add image to `public/` folder (e.g., `public/profile.jpg`)
2. Update `AboutSection.tsx`:
   ```typescript
   <img src="/profile.jpg" alt="Your Name" />
   ```

### Change Content:
- Edit component files in `components/`
- Update social links in `AboutSection.tsx`
- Modify projects in `PortfolioSection.tsx`

### Add New Themes:
1. Update `components/ThemeContext.tsx`
2. Add CSS variables in `styles/globals.css`

## 🆘 Getting Help

If you encounter issues:

1. **Check console**: `F12` → Console tab for error messages
2. **Restart everything**:
   ```bash
   # Stop server: Ctrl+C
   # Restart: npm run dev
   ```
3. **Clear everything**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

## ✅ Success Checklist

- [ ] Node.js installed (v18+)
- [ ] VS Code installed with extensions
- [ ] Project folder created with correct structure
- [ ] All files copied to correct locations
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Website loads at `http://localhost:3000`
- [ ] All features working (navigation, themes, animations)
- [ ] Mobile responsive design tested

## 🎉 You're Ready!

Your Binay portfolio should now be running locally! The portfolio features:

- **Modern Design**: Dark theme with gradient animations
- **Responsive**: Works on all devices
- **Interactive**: Smooth animations and transitions
- **Multi-theme**: 6 different color schemes
- **Professional**: Ready for showcasing projects and skills

Happy coding! 🚀