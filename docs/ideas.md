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
