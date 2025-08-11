# 📸 How to Add Your Profile Picture

There are multiple ways to add your profile picture. Here's the easiest method:

## Method 1: Using Public Folder (Recommended)

### Step 1: Add Your Image
1. **Create a `public` folder** in your project root (if it doesn't exist)
2. **Copy your profile picture** into the `public` folder
3. **Rename it** to something simple like `profile.jpg` or `profile.png`

Your folder structure should look like:
```
binay-portfolio/
├── public/
│   └── profile.jpg  ← Your image here
├── components/
├── App.tsx
└── ...
```

### Step 2: Update AboutSection.tsx
Replace the placeholder "B" with your actual image.

**Find this section in `/components/AboutSection.tsx`:**
```jsx
<div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
  <div className="text-white text-6xl sm:text-7xl md:text-8xl font-bold">
    B
  </div>
</div>
```

**Replace it with:**
```jsx
<div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
  <img 
    src="/profile.jpg" 
    alt="Binay Paramanik" 
    className="w-full h-full object-cover"
    onError={(e) => {
      // Fallback if image fails to load
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextElementSibling.style.display = 'flex';
    }}
  />
  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center" style={{display: 'none'}}>
    <div className="text-white text-6xl sm:text-7xl md:text-8xl font-bold">
      B
    </div>
  </div>
</div>
```

## Method 2: Using ImageWithFallback Component (Better Error Handling)

If you want better error handling and loading states, use the ImageWithFallback component:

```jsx
import { ImageWithFallback } from './figma/ImageWithFallback'

// Then replace the placeholder section with:
<div className="w-full h-full rounded-full overflow-hidden">
  <ImageWithFallback
    src="/profile.jpg"
    alt="Binay Paramanik"
    className="w-full h-full object-cover"
    fallback={
      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
        <div className="text-white text-6xl sm:text-7xl md:text-8xl font-bold">
          B
        </div>
      </div>
    }
  />
</div>
```

## Method 3: Import as Module (Advanced)

If you want to import the image as a module:

1. **Put your image in `src/assets/`** (create this folder)
2. **Import it at the top** of `AboutSection.tsx`:
   ```jsx
   import profileImage from '../src/assets/profile.jpg'
   ```
3. **Use it in the component**:
   ```jsx
   <img src={profileImage} alt="Binay Paramanik" className="w-full h-full object-cover" />
   ```

## Image Optimization Tips

### Best Practices:
- **Format**: Use `.jpg` for photos, `.png` for graphics with transparency
- **Size**: Optimize to 500-800px width (the component will resize it)
- **File size**: Keep under 500KB for fast loading
- **Quality**: 80-85% quality is usually perfect

### Online Tools for Optimization:
- **TinyPNG** (tinypng.com) - Compress images
- **Squoosh** (squoosh.app) - Google's image optimizer
- **Canva** - Resize and crop images

### Perfect Size for This Portfolio:
- **Dimensions**: 400x400px (square)
- **Format**: JPG or PNG
- **File size**: Under 200KB

## Testing Your Image

1. **Save the changes** to `AboutSection.tsx`
2. **Refresh your browser** (`Ctrl+R` or `Cmd+R`)
3. **Check the About section** - your image should appear in the circular frame
4. **Test fallback** - temporarily rename your image file to see if the "B" fallback appears

## Troubleshooting

### Image Not Showing?
- ✅ Check file path: `/profile.jpg` (must start with `/`)
- ✅ Check file name matches exactly (case-sensitive)
- ✅ Check file is in the `public` folder
- ✅ Refresh browser with `Ctrl+Shift+R` (hard refresh)

### Image Looks Distorted?
- ✅ Use `object-cover` class for cropping
- ✅ Use `object-contain` if you want to see the whole image
- ✅ Make sure your image is square (1:1 aspect ratio)

### Image Too Large/Small?
The component automatically sizes the image, but you can adjust:
- Change `w-64 h-64` to `w-80 h-80` for larger
- Change `w-64 h-64` to `w-48 h-48` for smaller

## Example File Structure After Adding Image:

```
binay-portfolio/
├── public/
│   ├── profile.jpg        ← Your profile picture
│   ├── favicon.ico
│   └── ...
├── components/
│   ├── AboutSection.tsx   ← Updated with your image
│   └── ...
├── App.tsx
└── ...
```

That's it! Your profile picture should now appear in the portfolio with a nice circular frame and gradient border.