# Images Directory

This directory contains all images used in the RatIT website.

## Directory Structure

```
public/images/
├── about/          # Images for About section
├── hero/           # Hero section images
├── logo/           # Company logos and branding
├── portfolio/      # Portfolio/project images
└── team/           # Team member photos
```

## Image Guidelines

### Supported Formats
- **JPG/JPEG** - For photographs and complex images
- **PNG** - For images with transparency
- **SVG** - For logos and icons
- **WebP** - For optimized web images

### Recommended Sizes

#### Team Photos
- **Size**: 400x400px
- **Format**: JPG or PNG
- **Aspect Ratio**: 1:1 (square)

#### Portfolio Images
- **Size**: 800x600px
- **Format**: JPG or PNG
- **Aspect Ratio**: 4:3

#### Hero Images
- **Size**: 1920x1080px
- **Format**: JPG or WebP
- **Aspect Ratio**: 16:9

#### Logo
- **Size**: 200x200px (max)
- **Format**: SVG or PNG with transparency
- **Aspect Ratio**: Flexible

### File Naming Convention

Use descriptive, lowercase names with hyphens:
- `team-member-1.jpg`
- `ecommerce-project.jpg`
- `hero-background.jpg`
- `company-logo.svg`

### Usage in Components

To use images in Vue components:

```vue
<template>
  <!-- Team member photo -->
  <img src="/images/team/team-member-1.jpg" alt="Team Member Name" />
  
  <!-- Portfolio project -->
  <img src="/images/portfolio/ecommerce-project.jpg" alt="E-commerce Project" />
  
  <!-- Logo -->
  <img src="/images/logo/company-logo.svg" alt="RatIT Logo" />
</template>
```

### Optimization Tips

1. **Compress images** before uploading
2. **Use WebP format** when possible for better performance
3. **Provide alt text** for accessibility
4. **Consider lazy loading** for large images
5. **Use appropriate sizes** for different screen resolutions

## Upload Instructions

1. Choose the appropriate subdirectory for your image
2. Use the recommended naming convention
3. Ensure the image meets size and format requirements
4. Test the image displays correctly on the website
