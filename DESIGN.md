---
name: Anyone I Know
description: Porch Light, the default theme. Warm paper, navy ink, amber lamps.
colors:
  primary: "#24336a"
  accent: "#eba43c"
  lit-face: "#f6c46e"
  accent-ink: "#835405"
  hold-bg: "#fbe6c0"
  hold-ink: "#6e4604"
  bg: "#f3eee5"
  surface: "#fcfaf5"
  surface2: "#ffffff"
  sunk: "#eee7da"
  btn-bg: "#ece6da"
  hair: "#e4dbcc"
  ink: "#1b2340"
  ink2: "#4e5572"
typography:
  setup-title:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(30px, 4.2vw, 46px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  card-title:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  step-title:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  brand:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.015em"
  column-head:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.25
  lede:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.45
  button:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
  small:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
  hint:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.45
  tag:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
    lineHeight: 1
  mono:
    fontFamily: "'Atkinson Hyperlegible Mono Variable', ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.45
rounded:
  r-in: "10px"
  r: "16px"
  r-dusk: "20px"
  r-btn: "999px"
  r-sm: "999px"
spacing:
  tight: "6px"
  row: "10px"
  gutter-phone: "12px"
  card-y: "14px"
  card-x: "16px"
  gutter: "20px"
  modal: "22px"
  setup: "24px"
  split: "26px"
  section: "30px"
components:
  button:
    backgroundColor: "{colors.btn-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.r-btn}"
    padding: "7px 18px"
    height: "44px"
  button-solid:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.r-btn}"
    padding: "7px 18px"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.r-btn}"
    padding: "7px 18px"
    height: "44px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.r-sm}"
    padding: "4px 9px"
  tag-fill:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.r-sm}"
    padding: "4px 9px"
  tag-faint:
    backgroundColor: "transparent"
    textColor: "{colors.ink2}"
    typography: "{typography.tag}"
    rounded: "{rounded.r-sm}"
    padding: "4px 9px"
  tag-pick:
    backgroundColor: "{colors.hold-bg}"
    textColor: "{colors.hold-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.r-sm}"
    padding: "4px 9px"
  box:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r}"
    padding: "14px 16px"
  dusk:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.r-dusk}"
    padding: "24px"
  step-lamp:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink2}"
    typography: "{typography.mono}"
    rounded: "{rounded.r-btn}"
    size: "32px"
  step-lamp-now:
    backgroundColor: "{colors.lit-face}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.r-btn}"
    size: "32px"
  step-lamp-done:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r-btn}"
    size: "32px"
---

# Design System: Anyone I Know

## Overview

**Creative North Star: "The Porch Light"**

The system is a porch in the early evening. Pages are warm paper, the writing is navy ink, and the only bright thing is lamplight: amber dots that glow where something is lit. A lamp is lit for a step that is done, the lamp of the step you are on breathes, and a string between lamps fills as you go. Everything else stays quiet so the light can say where you are.

Surfaces are soft. Panels are cream paper lifted off the page by a low navy shadow, with no drawn outline; controls are pills; headings are set in a book serif at a calm medium weight over a highly legible sans for everything you read or press. Density is comfortable, not sparse: 14.5px body, 44px controls, panels padded 14 to 24px.

This record covers Porch Light as shipped on the setup step "Ask LinkedIn for your connections". The source in `ds/aik/` also carries four other themes (Night, Index, Switchboard, Classic) that swap colours, radii, faces and timing through the same tokens. They are not shipped here and are not recorded; their devices do not belong on a Porch Light screen.

**Key Characteristics:**
- Warm paper page, cream panels, navy ink; amber appears only as light.
- Lamps carry state: unlit, breathing (current), lit (done), joined by a string that fills.
- Panels have shadow and no stroke; controls and tags are full pills.
- Newsreader for headings at weight 500, Atkinson Hyperlegible Next for body and controls, Atkinson Hyperlegible Mono for numerals and file names.
- One solid navy button per view; one dark dusk panel per screen.
- Slow, settling motion (280 / 420 / 700ms on a long ease-out) that collapses under reduced motion.

## Colors

A two-hue palette: warm paper neutrals and navy ink, with amber reserved for lamplight and the things it touches.

### Primary
- **Porch Navy** (`primary`, #24336a): the solid button, the chosen radio dot, and the middle ring of the focus indicator. Text on it uses `surface`.

### Secondary
- **Lamp Amber** (`accent`, #eba43c): light itself. Lit lamps, the string between them, the brand dot, the ring on a picked tag, stroke icons on the dusk panel, and link underlines at 70% strength. Never text on paper.
- **Lamp Face** (`lit-face`, #f6c46e): the paler amber of a lamp that is currently lit and breathing. Text on it is `ink`.
- **Held Amber** (`hold-bg`, #fbe6c0) with **Held Ink** (`hold-ink`, #6e4604): the pair for "this is the one to pick" (the picked tag). Amber as a readable surface.
- **Amber Ink** (`accent-ink`, #835405): amber dark enough to read on paper. Shipped use is the text caret; it is the system's ink for amber-coloured text.

### Neutral
- **Porch Paper** (`bg`, #f3eee5): the page.
- **Cream Card** (`surface`, #fcfaf5): panels, and the text colour on navy.
- **White Leaf** (`surface2`, #ffffff): the brightest layer, used for small fields and the skip link.
- **Sunk Paper** (`sunk`, #eee7da): recessed areas: filled tags, unlit step numbers, inline code, the pane of a drawing.
- **Button Paper** (`btn-bg`, #ece6da): the resting fill of a default button, one step darker than the page.
- **Hairline** (`hair`, #e4dbcc): dividers, inset rings on outlined tags and ghost buttons, unlit lamp rims and unlit string.
- **Navy Ink** (`ink`, #1b2340): all primary text; also the fill of the dusk panel.
- **Slate Ink** (`ink2`, #4e5572): secondary text: ledes, step paragraphs, hints, faint tags.

`ds/aik/tokens.css` also defines status pairs for this theme (`ok-bg`/`ok-ink`, `int-bg`/`int-ink`, `rej-bg`/`rej-ink`) and a `scrim`. The shipped page does not use them; take them from that file when a screen needs them.

### Named Rules
**The Lamplight Rule.** Bright amber (`accent`, `lit-face`) is light, not ink. It fills lamps, strings, rings and icon strokes. Amber words on paper use `hold-ink` or `accent-ink`.

**The Tokens Only Rule.** Component rules read semantic tokens (`--bg`, `--ink`, `--accent`), never raw hex and never the primitive scale (`--paper-100`, `--amber-400`). That is what lets one stylesheet serve every theme.

## Typography

**Display Font:** Newsreader Variable (with Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next Variable (with system-ui, sans-serif)
**Label/Mono Font:** Atkinson Hyperlegible Mono Variable (with ui-monospace, monospace)

**Character:** A book serif speaking in a level voice over a sans built for legibility. The serif is never bold and never uppercase; hierarchy comes from size and from the change of face, not from weight.

### Hierarchy
- **Setup title** (500, clamp(30px, 4.2vw, 46px), 1.08, -0.015em): the one page title. Balanced wrap, held to 21ch.
- **Card title** (500, 22px, 1.2, -0.015em): the heading of a panel such as the dusk panel.
- **Step title** (500, 21px, 1.2, -0.015em): the heading of each step in a path.
- **Brand** (500, 19px, 1): the wordmark beside the lamp dot.
- **Column head** (500, 17px, 1.25): the heading of a small side note.
- **Lede** (400, 15.5px, 1.45): the paragraph under the title, in `ink2`, max 64ch.
- **Body** (400, 14.5px, 1.45): step paragraphs, max 62ch; emphasis inside is weight 650 in `ink`.
- **Button** (600, 14px, 1.2): control labels inside setup. The base button outside setup is 13px.
- **Small** (400, 13px) and **Hint** (400, 12.5px): panel copy and captions, in `ink2`; the rail label is hint size, 700 when current.
- **Tag** (600, 11.5px, line-height 1): tags; 700 when filled, 12.5px when a tag carries a fact with an icon.
- **Mono** (600, 13px, tabular numerals): step numbers and inline file names.

### Named Rules
**The Level Voice Rule.** Serif headings stay at weight 500 with -0.015em tracking, sentence case. No bold serif, no uppercase, no tracking-out.

**The Two Faces Rule.** Serif is for headings and the brand only. Anything pressed, scanned or measured (buttons, tags, labels, numbers) is the sans or the mono.

## Layout

A single centred column: the shell has a 20px gutter (12px at 640px and below) and the setup column is capped at 1060px. A setup screen stacks top to bottom as brand row, progress rail in its own panel, title and lede, then a two-column body (steps at 1.55fr, aside at 1fr, 18px gap), then the foot.

At 820px and below the two columns become one. At 640px and below the rail spreads full width and keeps only the current label, step lamps shrink from 32px to 28px, the foot stops sticking, and its primary button takes the full row.

Rhythm inside panels is 10 to 12px between related lines, 18 to 22px between steps, 24 to 30px between blocks. The spacing tokens name these steps (`row` 10px, `setup` 24px, `split` 26px, `section` 30px); the stylesheets apply the values as literals.

Text never runs the full panel width: 21ch for the title, 64ch for the lede, 62ch for step paragraphs.

## Elevation & Depth

Depth is paper on paper. Three tones stack (page, cream panel, white leaf) with a fourth sunk below the panel, and panels are lifted by one soft, low, navy-tinted shadow. There are no strokes around surfaces. Glow is a separate thing from elevation: it means lit, not raised.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 1px rgba(27,35,64,.05), 0 12px 30px -16px rgba(27,35,64,.28)`): every resting panel.
- **Lift** (`box-shadow: 0 1px 1px rgba(27,35,64,.06), 0 22px 40px -18px rgba(27,35,64,.4)`): the dusk panel, and anything floating above the page.
- **Primary button** (`box-shadow: 0 6px 14px -8px rgba(36,51,106,.8)`): a tight navy shadow under the solid button only.
- **Glow** (`box-shadow: 0 0 0 2px #fcfaf5, 0 0 0 3.5px #eba43c, 0 0 16px 5px rgba(235,164,60,.55)`): a lit lamp. A cream gap, an amber ring, an amber haze.
- **Focus** (`box-shadow: 0 0 0 2px #fcfaf5, 0 0 0 4px #24336A, 0 0 0 8px rgba(235,164,60,.35)`): the keyboard focus ring on every focusable element: cream gap, navy ring, amber halo.

### Named Rules
**The No Stroke Rule.** In Porch Light the border width token is 0 and the line colour is clear. A surface gets its edge from shadow and tone. Hairlines exist only as dividers between rows and as inset rings on tags and ghost buttons.

**The Lit Means Lit Rule.** Glow marks state (a lamp that is done or current). It is never a hover effect, a card decoration or a substitute for elevation.

## Shapes

Two radii and a circle. Panels are generously rounded (16px), and the dusk panel a little more (20px). Insets inside a panel (the pane of a drawing, the skip link, form fields) use 10px. Everything pressable or label-like is a full pill (999px): buttons, tags, the mock button. Lamps, step numbers, radio dots and the brand dot are circles. Strings and connectors are 2px lines with rounded ends.

Icons are inline SVG outlines drawn in the current text colour: 2px stroke (2.2 to 2.4px at 11 to 14px sizes), round caps and joins, no fill, 14 to 15px beside text.

## Components

### Buttons
Soft pills that sit in the paper until one of them is the next thing to do.
- **Shape:** full pill (999px), no border, 44px minimum height inside setup, 18px side padding, 7px gap to an icon. Icons trail the label.
- **Default:** `btn-bg` fill with `ink` label, weight 600.
- **Solid:** `primary` fill with `surface` label and the primary button shadow. This is the single next action.
- **Ghost:** transparent with a 1.5px inset `hair` ring. Used for a secondary action inside a panel, and for a solid button after its job is done.
- **Hover / Active / Focus:** hover dims the fill (brightness .96; solid brightens to 1.12); active drops 1px; focus-visible shows the focus ring. Transitions run 280ms on the system ease.
- **Link button:** underlined 13px `ink2` text with an amber underline, darkening to `ink` on hover, padded to a 44px target inside setup. For ways out ("Finish later", "I already have the file").

### Tags
Small facts and names, never controls.
- **Outline (default):** transparent, `ink` label, 1.3px inset `hair` ring, pill, 4px 9px.
- **Fill:** `sunk` fill, no ring, weight 700. Names something that exists elsewhere (a menu item on another site).
- **Faint:** outline with `ink2` label. The options that are not the one to choose.
- **Pick:** `hold-bg` fill, `hold-ink` label, 1.3px inset `accent` ring, with an optional small tick. The one to choose. It does not glow; glow stays with the lamps.
- **Fact:** an outline tag with a 14px outline icon, 12.5px weight 500 `ink2` label and 7px 12px padding, in a wrapping row under the lede.
- **Breadcrumb row:** tags joined by small chevrons drawn in `ink2`, wrapping as a unit.

### Cards / Containers
- **Box:** `surface` fill, 16px radius, panel shadow, no border, 14px 16px padding by default. A box that holds a step path sets its own padding (10px 26px; 6px 16px on a phone).
- **Dusk panel:** the screen's one dark surface. `ink` fill, `bg` text, 20px radius, 24px padding, lift shadow, 12px gap. Body copy inside is the page colour mixed 78% toward ink; icons and ticks are stroked in `accent`. Because it is ink on paper inverted, it follows the theme.

### Setup Rail
Progress as string lights. A row of 17px lamps with labels beneath (12.5px, `ink2`; `ink` at 700 when current), joined by 34px strings.
- **Unlit:** `surface` fill with a 1.5px inset `hair` rim.
- **Current:** `lit-face` fill, breathing: the amber halo swells and settles on a 3.2s loop.
- **Done:** `accent` fill with glow and a small navy tick; the string after it fills with amber from the left over 700ms.
- On this screen the rail reports progress and is not a control. On a phone only the current label shows.

### Step Path
The signature pattern: instructions as one lit path instead of separate cards. A numbered list inside a single box with no dividers between steps.
- **Lamp:** a 32px circle (28px on a phone) in the left column carrying the step number in mono. Unlit is `sunk` with an `ink2` numeral; current is `lit-face` with an `ink` numeral, breathing like the rail; done is solid `accent` with a navy tick that pops in.
- **String:** a 2px `hair` line from under each lamp to the next, which fills top-down with `accent` over 700ms when its step is done. The next lamp waits 420ms before it lights, so the light travels.
- **Body:** step title, then `ink2` copy, 12px apart. A step may split into copy and a figure side by side, wrapping below 230px columns.
- Only one step is current at a time.

### Drawings of other products
When a step shows what to choose on someone else's page, it is drawn, not imitated: a `sunk` pane with 10px radius holding plain radio marks, tags and a small `ink` pill, exposed as a single image with a text alternative, not selectable, with a hint-size caption under it. The thing to choose uses the pick tag and weight 650.

### Setup Foot
Back on the left, "Step n of 4" in 12px `ink2` in the middle, ways forward on the right, above a 1px `hair` rule. On desktop it sticks to the bottom of the viewport on the page colour so the next action stays in reach; on a phone it sits in the flow and the forward button fills the row.

### Motion
Three durations (280ms for control states, 420ms for small entrances, 700ms for light and for the screen settling in) on one long ease-out, `cubic-bezier(.16,1,.3,1)`. A screen rises 6px as it mounts. Under reduced motion every animation collapses to 1ms and a breathing lamp becomes a steady glow.

## Do's and Don'ts

### Do:
- **Do** read semantic tokens from `ds/aik/tokens.css` for every colour, shadow and radius, and build on the classes in `ds/aik/components/bundle.css` before adding page rules.
- **Do** show progress with lamps: unlit, breathing for current, lit for done, with a string that fills between them.
- **Do** keep exactly one solid navy button in view, and move it when the next action changes (after the user returns from LinkedIn, the opened link becomes a ghost and "I've requested it" becomes solid).
- **Do** give every control inside setup a 44px minimum height and the focus ring from the `--focus` token.
- **Do** draw icons as inline SVG outlines in the current colour with round caps and joins.
- **Do** hold line lengths: 21ch for the title, 64ch for the lede, 62ch for step copy.
- **Do** replace a breathing lamp with a steady glow under `prefers-reduced-motion`.

### Don't:
- **Don't** draw a stroke around a panel. Porch Light surfaces have shadow and tone, no border.
- **Don't** set text in bright amber on paper. Use `hold-ink` or `accent-ink` for amber words.
- **Don't** use glow for hover, emphasis or decoration. Glow means a lamp is lit.
- **Don't** put a second dusk panel on a screen.
- **Don't** bold, uppercase or letter-space the serif.
- **Don't** make a drawing of another product's interface look operable: no hover states, no focus stops, no real form controls.
- **Don't** bring the other themes' devices into Porch Light: hard offset shadows, drawn borders, uppercase mono tags and square corners belong to Index, Switchboard and Classic.
