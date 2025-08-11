# 🛠️ Local Development Editing Guide

Your portfolio is now complete and ready for local development! Here's everything you can safely edit to customize your portfolio.

## 📁 Safe Files to Edit

### ✅ **Always Safe to Edit**
- `App.tsx` - Main app structure and theme configuration
- `components/*.tsx` - All your components
- `styles/globals.css` - Global styles and theme colors
- `Guidelines.md` - Your project guidelines
- `package.json` - Dependencies and scripts
- `README.md` - Project documentation

### ⚠️ **Edit with Caution**
- `tailwind.config.js` - Tailwind configuration
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration

### ❌ **Don't Edit**
- `components/ui/*` - Shadcn components (use as-is)
- `components/figma/ImageWithFallback.tsx` - Protected system file

---

## 🎨 **Content & Information Updates**

### **Personal Information** (`/components/AboutSection.tsx`)

```typescript
// Lines 68-88 - Update your personal details
<motion.h2 className="...">
  Binay Paramanik  {/* ← Change your name */}
</motion.h2>

<motion.p className="...">
  Passionate Coder & Innovator  {/* ← Change your title */}
</motion.p>

// Lines 91-101 - Update contact info
<Phone className="w-4 h-4 flex-shrink-0" />
<span className="font-medium">8392042619</span>  {/* ← Your phone */}

<Mail className="w-4 h-4 flex-shrink-0" />
<span className="font-medium break-all">binayparamanik3@gmail.com</span>  {/* ← Your email */}

// Lines 103-109 - Update your bio
<motion.p className="...">
  Currently working on multiple exciting projects: ...  {/* ← Update your current work */}
</motion.p>

// Lines 113-119 - Update expertise areas
const expertiseAreas = [
  "MERN Stack Development",  {/* ← Add/remove your skills */}
  "AI/ML Projects", 
  "IoT & Smart Devices",
  "C++ & Data Structures",
  "Problem Solving & DSA",
  "Open Source Contributions"
]
```

### **Social Media Links** (`/components/AboutSection.tsx`)

```typescript
// Lines 44-66 - Update your social media
const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/binayparamanik",  {/* ← Your GitHub */}
    label: "GitHub",
    color: "hover:text-gray-300"
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/binay-paramanik",  {/* ← Your LinkedIn */}
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
  // ... add more social links
]
```

### **Projects** (`/components/PortfolioSection.tsx`)

```typescript
// Lines 51-85 - Update your projects
const projects = [
  {
    title: "Your Project Name",  {/* ← Project title */}
    description: "Project description...",  {/* ← Project description */}
    tech: ["React.js", "Node.js", "MongoDB"],  {/* ← Tech stack */}
    status: "In Development",  {/* ← Status: "Active", "In Development", "Completed" */}
    features: ["Feature 1", "Feature 2", "Feature 3"]  {/* ← Key features */}
  },
  // Add more projects...
]
```

### **Certificates** (`/components/PortfolioSection.tsx`)

```typescript
// Lines 87-118 - Update your certificates
const certifications = [
  {
    title: "Certificate Name",  {/* ← Certificate title */}
    issuer: "Platform Name",  {/* ← Issuing organization */}
    date: "2024",  {/* ← Year received */}
    description: "What you learned...",  {/* ← Description */}
    skills: ["Skill1", "Skill2"],  {/* ← Skills gained */}
    verifyLink: "https://verify-link.com",  {/* ← Verification URL */}
    certificateId: "certificate-id"  {/* ← Certificate ID */}
  },
  // Add more certificates...
]
```

### **Skills** (`/components/PortfolioSection.tsx`)

```typescript
// Lines 120-156 - Update your skills
const skills = [
  {
    category: "Frontend Development",  {/* ← Skill category */}
    items: [
      { name: "React.js", level: 85, color: "bg-blue-500" },  {/* ← Skill name, level (0-100), color */}
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      // Add more skills...
    ]
  },
  // Add more categories...
]
```

---

## 🎨 **Visual Customizations**

### **Theme Colors** (`/styles/globals.css`)

```css
/* Lines 29-60 - Add new themes or modify existing ones */
[data-theme="your-custom-theme"] {
  --theme-primary: #your-color;
  --theme-secondary: #your-color;
  --theme-accent: #your-color;
}
```

### **Theme Configuration** (`/App.tsx`)

```typescript
// Lines 18-65 - Add your custom theme
const getThemeColors = () => {
  switch (theme) {
    case 'your-custom-theme':  // ← Add new theme
      return {
        primary: 'rgba(your, colors, here, 0.3)',
        secondary: 'rgba(your, colors, here, 0.3)',
        accent: 'rgba(your, colors, here, 0.2)',
        solid: '#your-solid-color'
      }
    // ... other themes
  }
}
```

### **Add Theme to Switcher** (`/components/ThemeSwitcher.tsx`)

```typescript
// Add your new theme to the themes array
const themes = [
  { name: 'dark', icon: '🌙', colors: ['#8b5cf6', '#ec4899'] },
  { name: 'blue', icon: '💙', colors: ['#3b82f6', '#06b6d4'] },
  { name: 'your-theme', icon: '🎨', colors: ['#color1', '#color2'] },  // ← Add here
  // ... other themes
]
```

---

## 📱 **Layout & Design Changes**

### **Navigation** (`/components/Navigation.tsx`)

```typescript
// Update navigation links, logo, or add new menu items
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#your-section', label: 'Your Section' },  // ← Add new sections
]
```

### **Hero Section** (`/components/HeroSection.tsx`)

```typescript
// Update main headline, tagline, or call-to-action buttons
<h1 className="...">
  Your Name Here  {/* ← Update main title */}
</h1>

<p className="...">
  Your tagline or profession  {/* ← Update subtitle */}
</p>
```

### **About Card** (`/components/AboutCard.tsx`)

```typescript
// Update the about card content, stats, or links
// This component shows additional information about you
```

---

## 🚀 **Adding New Features**

### **Create New Components**

```bash
# Create a new component file
touch components/YourNewComponent.tsx
```

```typescript
// Template for new component
import { motion } from 'framer-motion'

export default function YourNewComponent() {
  return (
    <section id="your-section" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Your content here */}
      </div>
    </section>
  )
}
```

### **Add to Main App** (`/App.tsx`)

```typescript
// Import your new component
import YourNewComponent from './components/YourNewComponent'

// Add to main content (around line 150)
<main className="relative">
  <HeroSection />
  <PortfolioSection />
  <AboutSection />
  <YourNewComponent />  {/* ← Add here */}
  <AboutCard />
</main>
```

---

## 🖼️ **Image Management**

### **Profile Picture**

```bash
# 1. Put your image in the public folder
public/
├── binay.jpg  ← Your profile picture
├── project1.jpg  ← Project images
└── certificates/  ← Certificate images
```

### **Update Image Paths** (`/components/AboutSection.tsx`)

```typescript
// Line 188 - Update image source
<img 
  src="/binay.jpg"  {/* ← Change to your image filename */}
  alt="Your Name - Your Title" 
  className="w-full h-full object-cover rounded-full"
/>
```

---

## ⚡ **Performance & Mobile**

### **Mobile Optimization** (`/styles/globals.css`)

```css
/* Lines 120-140 - Customize mobile styles */
@media (max-width: 768px) {
  html {
    --font-size: 14px;  /* ← Adjust mobile font size */}
  }
  
  /* Add your mobile-specific styles */
}
```

### **Animation Settings** (`/App.tsx`)

```typescript
// Lines 95-120 - Adjust animation intensity for mobile
const [isMobile, setIsMobile] = useState(false)

// Reduce animations on mobile for better performance
{!isMobile && (
  // Desktop-only animations
)}

{isMobile && (
  // Mobile-optimized animations
)}
```

---

## 🔧 **Development Commands**

### **Local Development**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### **Adding New Dependencies**

```bash
# Add new packages
npm install package-name

# Add development dependencies
npm install -D package-name
```

---

## 📝 **Content Templates**

### **New Project Template**

```typescript
{
  title: "Project Name",
  description: "Brief description of what this project does and its purpose.",
  tech: ["Technology1", "Technology2", "Technology3"],
  status: "In Development", // "Active", "Completed", "Collaboration Seeking"
  features: ["Key Feature 1", "Key Feature 2", "Key Feature 3", "Key Feature 4"]
}
```

### **New Certificate Template**

```typescript
{
  title: "Certificate Name",
  issuer: "Issuing Organization",
  date: "2024",
  description: "What this certificate covers and what you learned from it.",
  skills: ["Skill1", "Skill2", "Skill3"],
  verifyLink: "https://verification-url.com",
  certificateId: "unique-certificate-id"
}
```

### **New Skill Category Template**

```typescript
{
  category: "Category Name",
  items: [
    { name: "Skill Name", level: 85, color: "bg-blue-500" },
    { name: "Another Skill", level: 90, color: "bg-green-500" }
  ]
}
```

---

## 🎯 **Quick Customization Checklist**

### **Essential Updates for Your Portfolio:**

- [ ] **Personal Info**: Name, title, contact details
- [ ] **Social Links**: Update all URLs to your profiles
- [ ] **Projects**: Add your actual projects
- [ ] **Certificates**: Add your real certificates with verification links
- [ ] **Skills**: Update skill levels and add new ones
- [ ] **Profile Picture**: Replace with your actual photo
- [ ] **Bio**: Update your current work and goals
- [ ] **Theme**: Choose or create your preferred color scheme

### **Optional Enhancements:**

- [ ] **New Sections**: Add blog, testimonials, or resume section
- [ ] **Custom Animations**: Modify motion effects
- [ ] **Mobile Optimizations**: Adjust for your target devices
- [ ] **SEO**: Update meta tags and descriptions
- [ ] **Analytics**: Add Google Analytics or similar

---

## 🚨 **Important Notes**

1. **Always backup** your changes before major modifications
2. **Test on mobile** after making changes - use browser dev tools
3. **Check all themes** work properly after color modifications
4. **Verify all links** work correctly, especially certificate verification links
5. **Optimize images** for web (compress to <500KB each)
6. **Keep file structure** intact - don't move component files around

---

## 🎉 **You're Ready!**

Your portfolio is fully functional and ready for customization. Start with updating your personal information and gradually add your own projects and achievements. The design system is flexible and will maintain its professional appearance as you make changes.

Happy coding! 🚀