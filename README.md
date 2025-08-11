# 🚀 Binay Paramanik's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and multiple themes.

## 🌟 Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive**: Smooth animations powered by Framer Motion
- **Multi-Theme**: 6 different color themes to choose from
- **Dynamic Content**: Projects, certifications, and skills showcase
- **Contact Integration**: Direct email and social media links
- **Certificate Verification**: Links to verify real certificates
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Built With

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/binayparamanik/binay-portfolio.git
cd binay-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser:**
Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 🎨 Customization

### Update Personal Information

**Contact Details** (`src/components/AboutSection.tsx`):
```typescript
// Update your phone and email
<span className="font-medium">YOUR_PHONE</span>
<span className="font-medium">YOUR_EMAIL</span>
```

**Social Links** (`src/components/AboutSection.tsx`):
```typescript
const socialLinks = [
  { href: "https://github.com/yourusername", ... },
  { href: "https://linkedin.com/in/yourusername", ... },
  // Add more social links
]
```

**Projects** (`src/components/PortfolioSection.tsx`):
```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["React", "Node.js"],
    status: "Active",
    features: ["Feature 1", "Feature 2"]
  }
]
```

### Add Your Photo

1. Put your image in the `public` folder: `public/your-photo.jpg`
2. Update the image path in `src/components/AboutSection.tsx`:
```typescript
<img src="/your-photo.jpg" alt="Your Name" />
```

### Change Colors

Modify theme colors in `src/styles/globals.css`:
```css
[data-theme="your-theme"] {
  --theme-primary: #your-color;
  --theme-secondary: #your-color;
  --theme-accent: #your-color;
}
```

## 📁 Project Structure

```
binay-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── AboutSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ThemeContext.tsx
│   ├── styles/
│   │   └── globals.css     # Global styles and themes
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                 # Static assets
├── .github/workflows/     # GitHub Actions for deployment
├── dist/                  # Built files (generated)
└── package.json           # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌈 Themes

The portfolio includes 6 built-in themes:
- 🌙 **Dark** (default) - Purple & Pink gradient
- 💙 **Blue** - Blue & Cyan gradient  
- 💚 **Green** - Emerald & Teal gradient
- 🧡 **Orange** - Orange & Red gradient
- 💜 **Purple** - Purple & Violet gradient
- ❤️ **Red** - Red & Pink gradient

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px  
- **Desktop**: 1025px+

Optimized layouts and interactions for each breakpoint.

## ⚡ Performance

- **Fast Loading**: Optimized assets and code splitting
- **Mobile Optimized**: Reduced animations on mobile devices
- **Accessibility**: WCAG compliant with proper focus management
- **SEO Ready**: Meta tags and semantic HTML structure

## 🐛 Troubleshooting

### Common Issues

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Images not showing:**
- Ensure images are in the `public` folder
- Use paths with leading slash: `/image.jpg`
- Check that files are committed to git

**GitHub Pages not updating:**
- Wait 5-10 minutes after deployment
- Check Actions tab for deployment status
- Verify repository settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Binay Paramanik**
- Email: binayparamanik3@gmail.com
- LinkedIn: [binay-paramanik](https://linkedin.com/in/binay-paramanik)
- GitHub: [binayparamanik](https://github.com/binayparamanik)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for components
- [Lucide](https://lucide.dev/) for icons

---

⭐ **Star this repository if it helped you!**

Made with ❤️ by [Binay Paramanik](https://github.com/binayparamanik)