# Ideas

Future improvements and features to consider for the personal site.

## Entrance Animations

Add staggered entrance animations to section content as users scroll into view.

### Concept
- Elements fade in and slide up as they enter the viewport
- Staggered timing for multiple items (e.g., experience cards, skill badges)
- Use `IntersectionObserver` to trigger animations
- Subtle, not distracting - quick transitions (200-300ms)

### Implementation Options

1. **tw-animate-css (already installed)**
   - Use `animate-in fade-in slide-in-from-bottom-4` classes
   - Add `fill-mode-backwards` and stagger with `delay-*` utilities

2. **Framer Motion**
   - More control over animation timing and stagger
   - `AnimatePresence` for exit animations
   - Heavier dependency

3. **Custom IntersectionObserver hook**
   - Lightweight, no dependencies
   - Add `opacity-0` by default, toggle to `opacity-100` when in view
   - Use CSS transitions for smooth effect

### Priority
Low - Nice to have, not essential for MVP

---

## Blog / Writing Section

Add a blog or writing section to showcase technical articles, tutorials, and thoughts.

### Concept
- Dedicated `/blog` route with list of posts
- Individual post pages at `/blog/:slug`
- Markdown-based content (MDX for interactive components)
- Categories/tags for filtering
- Reading time estimates

### Implementation Options

1. **MDX with file-based routing**
   - Store posts as `.mdx` files in `src/content/blog/`
   - Use frontmatter for metadata (title, date, tags, description)
   - Build-time compilation for performance

2. **Headless CMS (Contentlayer, Sanity, etc.)**
   - More flexibility for content management
   - Preview drafts before publishing
   - Overkill for a personal blog

3. **Simple Markdown + custom parser**
   - Lightweight, full control
   - Manual setup for syntax highlighting, etc.

### Features to Consider
- Syntax highlighting for code blocks (Shiki or Prism)
- Table of contents for longer posts
- Related posts suggestions
- RSS feed for subscribers
- Search functionality

### Priority
Medium - Great for showcasing expertise, but requires content to be valuable
