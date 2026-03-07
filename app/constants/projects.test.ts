import { describe, it, expect } from 'vitest'
import { PROJECTS, PROJECT_THUMBNAILS } from './projects'

describe('projects', () => {
  it('exports PROJECTS with id, title, link, thumbnail', () => {
    expect(PROJECTS).toBeInstanceOf(Array)
    PROJECTS.forEach((p) => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('title')
      expect(p).toHaveProperty('link')
      expect(p).toHaveProperty('thumbnail')
      expect(p).toHaveProperty('href')
    })
  })

  it('exports PROJECT_THUMBNAILS as record', () => {
    expect(typeof PROJECT_THUMBNAILS).toBe('object')
    expect(PROJECT_THUMBNAILS).not.toBeNull()
  })
})
