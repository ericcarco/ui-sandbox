# Eric UI

A personal library of independent React components. Components live in `src/components/`; the demo is a separate consumer in `demo/`. Start with the **Animated Project Grid**, inspired by [Motion’s App Store example](https://motion.dev/examples/vue-animate-view-app-store).

## Run locally

Requires Node.js 20.19+ or 22.12+ (validated with Node 24), npm, and a modern browser with native `<dialog>` support.

```sh
npm ci
npm run dev
```

The demo runs on Vite's reported development address. It contains sample copy, not actual portfolio case studies. Reference photographs are loaded from `examples.motion.dev`; Internet access to that host is required for the demo artwork. Replace them with your own images before publishing. The library itself has no image-host or network dependency.

```sh
npm run typecheck
npm run build       # ESM component library + CSS + TypeScript declarations
npm run build:demo  # static demo in demo-dist/
npm run preview    # serves the built demo
```

## Reuse in Lovable or another React app

### Copy a component (simplest)

1. Copy `src/components/animated-project-grid/` into the receiving app, for example `src/components/animated-project-grid/` in your Lovable project.
2. Install Motion: `npm install motion`. React and React DOM are normally already installed in a Lovable React project.
3. Import the component directly. Its CSS is imported by the component; no app-wide styles, providers, routing, aliases, or Tailwind setup are needed.

```tsx
import {
  AnimatedProjectGrid,
  type ProjectGridItem,
} from './components/animated-project-grid/AnimatedProjectGrid';

const projects: ProjectGridItem[] = [
  {
    id: 'my-project',
    title: 'A better way to explore',
    category: 'Product design',
    meta: 'Research · UX · 2026',
    image: {
      src: '/images/my-project.jpg',
      alt: 'The project’s redesigned discovery screen',
      position: '50% 50%',
    },
    theme: 'light', // white text; 'dark' uses dark text
    description: 'A brief introduction to the problem and outcome.',
    content: (
      <>
        <h3>The challenge</h3>
        <p>Your case study goes here.</p>
        <a href="/work/my-project">Read the full case study</a>
      </>
    ),
  },
];

export function Work() {
  return <AnimatedProjectGrid items={projects} label="Selected work" />;
}
```

### Use the built library

The package remains private to prevent accidental npm publication. You can still create and install a local tarball:

```sh
# In ui-sandbox
npm run build
npm pack

# In the receiving project, using the actual path to that tarball
npm install /path/to/ericcarco-ui-sandbox-0.1.0.tgz
npm install motion
```

```tsx
import { AnimatedProjectGrid, type ProjectGridItem } from '@ericcarco/ui-sandbox';
import '@ericcarco/ui-sandbox/styles.css';
```

React 18.2+ or 19, React DOM, and Motion 12 are peer dependencies; the build keeps them external to avoid bundling a second React runtime. This is a React component, so plain HTML, Vue, Webflow, or other hosts require a React mount or a separately built adapter. No cross-framework adapter is included yet.

## Component API

| Prop | Purpose |
| --- | --- |
| `items` | Readonly array of project data. Use unique, stable `id` values within a grid. |
| `label` | Accessible section label; defaults to `Projects`. |
| `className`, `style` | Scope layout or theme adjustments to this instance. |
| `onActiveChange` | Called with a project ID on open and `null` on close. |
| `emptyContent` | Content shown when `items` is empty. |

Each item has `id`, `title`, `category`, `image: { src, alt, position? }`, and `content: ReactNode`. Optional fields: `description`, `meta`, `theme` (`light` means light text, `dark` means dark text). Content uses React elements, not injected HTML. Prefer small thumbnails for the grid and meaningful image alt text. Choose the text theme to keep contrast sufficient for your images; the component does not automatically analyze image contrast.

```tsx
<AnimatedProjectGrid
  items={projects}
  className="portfolio-work"
  onActiveChange={(id) => console.log('Active project:', id)}
/>
```

```css
.portfolio-work {
  --epg-gap: 24px;
  --epg-radius: 24px;
  --epg-card-height: 440px;
  --epg-surface: #fff;
  --epg-text: #202321;
  --epg-accent: #285b42;
}
```

Desktop columns alternate 60/40 then 40/60, accounting for the gap. At 800px the grid becomes two equal columns, and at 520px it becomes one. Component styles are prefixed `epg`; demo styles are not included in the library build.

## Interaction and accessibility

- Shared card/image transitions use Motion layout IDs scoped to each grid instance.
- A native modal dialog makes the background inert and traps keyboard focus.
- Enter/Space opens cards; Escape, the backdrop, close button, and “Back to projects” close the dialog.
- Opening moves focus to the close button; closing restores the triggering card and body scrolling.
- Long case studies scroll inside the dialog.
- Reduced-motion preferences disable transition durations.
- Component unmount restores the body scroll state.

## Tests

```sh
npx playwright install chromium
npm test
```

On a machine with an existing Chromium installation, skip the download:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test
```

The browser suite checks all four cards, focus placement and restoration, keyboard trapping, all close paths, body scroll locking, desktop/tablet/mobile layout, reduced motion, and repeated open/close cycles. It does not assert that remotely hosted reference photographs loaded. See `design-qa.md` for the visual verification boundary.

## Adding the next component

Give every component its own folder, exported prop types, prefixed stylesheet, usage example, and behavior checks. Keep demo content outside component code. Export reusable components from `src/index.ts`. Avoid adding app-specific routing, analytics, data fetching, or portfolio content to library components.

## GitHub and Lovable

This checkout is `ericcarco/ui-sandbox`. Copy a component into a Lovable project's connected GitHub repository, or install the tarball there. Lovable does not automatically consume this separate repository. No npm publication, GitHub push, or deployment happens as part of the build commands.

## Attribution

The interaction is based on Motion’s App Store example; the demo references the same externally hosted photographs described as Unsplash photography in the supplied example. Those photographs are not bundled in this package. Use your own cleared assets for production. All displayed project titles and case-study descriptions here are illustrative sample content.
