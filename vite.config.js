import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function ensureImages() {
  const artifactDir = 'C:/Users/Naveen S/.gemini/antigravity-ide/brain/fb929536-5ce2-4059-9950-5b246d2657ac'
  const destDir = path.resolve(__dirname, 'public')

  try {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true })
    }

    const baseImg = path.join(destDir, 'uploaded-hero-bg.png')

    const filesMap = [
      {
        src: path.join(artifactDir, 'uploaded-hero-bg.png'),
        srcAlt: path.join(artifactDir, 'media__1786435286440.png'),
        dest: path.join(destDir, 'home-pg.png')
      },
      {
        src: path.join(artifactDir, 'uploaded_media_1786503405829.img'),
        srcAlt: path.join(artifactDir, 'media__1786503143092.png'),
        dest: path.join(destDir, 'service-pg.png')
      },
      {
        src: path.join(artifactDir, 'uploaded_media_1786504273426.img'),
        srcAlt: path.join(artifactDir, 'media__1786504273426.png'),
        dest: path.join(destDir, 'product-pg.png')
      },
      {
        src: path.join(artifactDir, 'uploaded_media_1786505695972.img'),
        srcAlt: path.join(artifactDir, 'media__1786504614765.png'),
        dest: path.join(destDir, 'project-pg.png')
      }
    ]

    filesMap.forEach(({ src, srcAlt, dest }) => {
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest)
      } else if (fs.existsSync(srcAlt)) {
        fs.copyFileSync(srcAlt, dest)
      } else if (fs.existsSync(baseImg)) {
        fs.copyFileSync(baseImg, dest)
      }
    })
  } catch (err) {
    console.error('[Image Setup Error]', err)
  }
}

// Execute immediately on config load
ensureImages()

function copyUploadedHeroImagePlugin() {
  return {
    name: 'copy-uploaded-hero-images',
    buildStart() {
      ensureImages()
    },
    configureServer() {
      ensureImages()
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyUploadedHeroImagePlugin()],
  server: {
    port: 5173,
    host: true
  },
  base: '/'
})
