/**
 * Captures viewport screenshots of each product app (shell routes).
 * Run with the shell dev server up: npm run dev (from root) or shell on http://localhost:3000.
 * Usage: from gaqno-landing: node scripts/capture-product-screenshots.mjs
 * Env: SHELL_URL (default http://localhost:3000), OUT_DIR (default public/img/products)
 */

import { chromium } from 'playwright'
import { mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const landingRoot = join(__dirname, '..')
const baseUrl = process.env.SHELL_URL || 'http://localhost:3000'
const outDir = process.env.OUT_DIR
  ? join(landingRoot, process.env.OUT_DIR)
  : join(landingRoot, 'public', 'img', 'products')

const productRoutes = {
  crm: '/crm',
  erp: '/erp',
  ia: '/ai',
  finance: '/finance',
  pdv: '/pdv',
  rpg: '/rpg',
  omnichannel: '/omnichannel',
}

async function main() {
  if (!existsSync(dirname(outDir))) {
    console.error('Parent of OUT_DIR does not exist:', dirname(outDir))
    process.exit(1)
  }
  mkdirSync(outDir, { recursive: true })
  console.log('Screenshots will be saved to', outDir)
  console.log('Base URL:', baseUrl)

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  })

  for (const [id, path] of Object.entries(productRoutes)) {
    const url = `${baseUrl}${path}`
    console.log(`Capturing ${id} (${url})...`)
    try {
      const page = await context.newPage()
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      })
      await page.waitForTimeout(2000)
      const filePath = join(outDir, `${id}.png`)
      await page.screenshot({
        path: filePath,
        type: 'png',
      })
      await page.close()
      console.log(`  -> ${filePath}`)
    } catch (err) {
      console.error(`  Failed ${id}:`, err.message)
    }
  }

  await context.close()
  await browser.close()
  console.log('Done. Add image: `/img/products/{id}.png` to PLATFORM_PRODUCTS in app/constants/products.ts to use these screenshots.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
