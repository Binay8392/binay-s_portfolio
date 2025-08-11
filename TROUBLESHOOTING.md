# 🔧 Troubleshooting Guide - Portfolio Not Working

If navigation, themes, and animations aren't working, follow these steps:

## Step 1: Install Dependencies 

Run these commands in VS Code terminal:

```bash
# Delete existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Install dependencies
npm install

# If you get errors, try:
npm install --legacy-peer-deps
```

## Step 2: Check for Console Errors

1. Open browser (Chrome/Firefox)
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Look for red error messages
5. If you see import errors, continue to Step 3

## Step 3: Fix Import Issues

Check if these files exist and have correct content:

### `/components/ui/utils.ts` should contain:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `/components/figma/ImageWithFallback.tsx` should exist (see previous messages)

## Step 4: Restart Development Server

```bash
# Stop the server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## Step 5: Check Browser Network Tab

1. Open Developer Tools (`F12`)
2. Go to **Network** tab
3. Refresh page (`Ctrl+R`)
4. Look for any red/failed requests
5. If CSS files are failing to load, check file paths

## Step 6: Force Refresh Browser

```bash
# Hard refresh (clears cache)
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

## Common Error Messages & Solutions:

### "Cannot resolve module 'clsx'" or "Cannot resolve module 'tailwind-merge'"
```bash
npm install clsx tailwind-merge class-variance-authority
```

### "Cannot resolve module 'framer-motion'"
```bash
npm install framer-motion
```

### "Cannot resolve module 'lucide-react'"
```bash
npm install lucide-react
```

### Tailwind classes not working
```bash
# Make sure these files exist:
# - tailwind.config.js
# - postcss.config.js
# - styles/globals.css

# Restart dev server
npm run dev
```

### TypeScript errors
```bash
# Install TypeScript
npm install -g typescript

# Check tsconfig.json exists
# Restart VS Code: Ctrl+Shift+P → "Developer: Reload Window"
```

## Step 7: Check File Structure

Your project should look like this:
```
binay-portfolio/
├── App.tsx
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── PortfolioSection.tsx
│   ├── AboutSection.tsx
│   ├── AboutCard.tsx
│   ├── ThemeContext.tsx
│   ├── ThemeSwitcher.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   └── utils.ts
│   └── figma/
│       └── ImageWithFallback.tsx
├── src/
│   └── main.tsx
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Step 8: Test Individual Features

After fixing imports, test each feature:

1. **Navigation**: Click menu items - should scroll smoothly
2. **Theme Switcher**: Click palette icon (top-right) - should change colors
3. **Animations**: Scroll page - elements should animate
4. **Mobile**: Resize browser window - should be responsive

## Emergency Reset

If nothing works, create a fresh project:

```bash
# Create new directory
mkdir binay-portfolio-fresh
cd binay-portfolio-fresh

# Copy all files from previous setup
# Run:
npm install
npm run dev
```

## Get Help

If still not working:
1. Check browser console for specific error messages
2. Make sure all files are saved
3. Try in different browser
4. Check if port 3000 is available: `lsof -i :3000` (Mac/Linux) or `netstat -ano | findstr :3000` (Windows)
```

The most common issue is usually missing dependencies. Run the install commands first!