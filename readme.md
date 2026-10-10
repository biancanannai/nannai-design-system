# NANNAI Design System

NANNAI is a Brazilian brand (nannai.com.br) whose identity is **understated luxury, timeless elegance, warmth, sophistication and effortless simplicity**. This system covers NANNAI's marketing-web (MKT WEB) surfaces: CRM dashboards, performance reports, business presentations and strategic materials.

## Sources
Provided by the user (no codebase, Figma or product screens were supplied):
- `uploads/NANNAI.png`, `uploads/NANNAI-BEGE.png`, `uploads/NANNAI-BRANCA.png` — wordmark in burgundy, sand and white (2696×576, transparent PNG) → copied to `assets/logo/`.
- `uploads/JuliusSansOne-Regular.ttf` — original display face; **retired** (replaced by Chap Light).
- `uploads/Chap-Light.ttf`, `uploads/Chap-Regular.ttf` — heading typeface → `fonts/`.
- `uploads/nannai-noronha.png`, `uploads/nannai-muro-alto.png`, `uploads/1773341960946-nnicon3.png` (Milagres, white, 180×80), `uploads/CASA NANNAI TRANCOSO.pdf` — property lockups → `assets/logo/properties/` (trimmed; recoloured to burgundy / white / sand).
- `uploads/TEMPLETE APRESENTAÇÃO INSTITUCIONAL.pdf` — institutional deck template; photos extracted to `assets/imagery/`.
- Written brand brief: official palette, CSS tokens, design guidelines and mandatory rules (reproduced in tokens + this file).

## Index
- `styles.css` — entry point (imports only). Link this one file.
- `tokens/` — `colors.css`, `fonts.css`, `typography.css`, `spacing.css` (incl. logo sizing), `effects.css`, `base.css`.
- `fonts/` — Chap Light, Chap Regular.
- `assets/logo/` — master wordmark `nannai-burgundy.png`, `nannai-sand.png`, `nannai-white.png`.
- `assets/imagery/` — photos from the institutional template.
- `assets/logo/properties/` — `nannai-{noronha|muro-alto|milagres|trancoso}-{burgundy|white|sand}.png`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (see below), one `@dsCard` per folder.
- `ui_kits/crm/` — CRM dashboard click-through (Visão geral, Clientes, Campanhas).
- `SKILL.md` — Agent Skill wrapper.

## Components
- **actions/** — `Button` (primary · secondary · soft · ghost · link), `IconButton` (ghost · outline · soft · primary)
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **display/** — `Card` (surface · sunken · block · block-alt · inverse; `accent` square), `KpiCard` (`highlight` block), `Badge`, `Tag`, `Icon`
- **navigation/** — `Tabs`
- **feedback/** — `Dialog`, `Toast`, `Tooltip`

### Intentional additions
No source component inventory existed, so the standard set was authored. Additions beyond it:
- `KpiCard` — KPIs are the core of NANNAI CRM dashboards per the brief.
- `Icon` — wrapper for the CDN Lucide set (no brand icons supplied).

## CONTENT FUNDAMENTALS
- **Language:** Brazilian Portuguese (pt-BR) for product UI and materials. Number format `R$ 482.910`, `12,4%`, dates `05 out`.
- **Tone:** calm, warm, assured — a trusted consultant, never a salesperson. Short sentences. No exclamation marks, no hype ("incrível", "imperdível"), no urgency tricks.
- **Address:** *você* (informal-respectful) to the reader; the brand speaks as *nós* sparingly. Customers are *clientes* — feminine forms are natural where the clientele is (e.g. "Nova cliente", "Ficha da cliente").
- **Casing:** sentence case in source text. Display headlines, overlines and button labels are uppercased **by CSS**, never typed in caps.
- **Labels:** verbs for actions ("Salvar", "Agendar visita", "Exportar"); nouns for sections ("Visão geral", "Campanhas").
- **Emoji:** never. Unicode symbols: only `·` as a separator and `—` for empty values.
- **Examples:** "Peças atemporais, pensadas para acompanhar você com leveza." · "Clientes para acompanhar" · "Nenhum cliente com estes filtros." · "Atualizado há 12 minutos".

## VISUAL FOUNDATIONS
Reference: the institutional presentation template (`uploads/TEMPLETE APRESENTAÇÃO INSTITUCIONAL.pdf`) — cream page, warm photography, square flat colour blocks with a small accent square, a thin rule with theme + date, a small logo.

### Colour (`tokens/colors.css`) — light only
Four groups. Pick a colour by its function, not by taste.
- **Brand:** #381416 headings, primary button, selected state · #764141 hover, support · #CDA787 comparisons, details.
- **Surface:** #FFFFFF page and cards (white dominates) · #FAF6EB sidebar and subtle areas · #ECE6DA dividers · #222222 text · #495D64 secondary text.
- **Data:** default #381416, #CDA787, #545933, #415062. Extension #97C0CE, #D7B761, #D194A5 only with 5+ categories. Time comparisons: current period always #381416, previous always #CDA787. Indicator colour follows meaning, not direction: good #545933, bad #764141 (falling churn = good). Dashboard chart types: bars + previous-period line, line, donut (≤4), ranking bars, goal progress, 100% stacked (extension colours).
- **Semantic (status):** soft background + coloured text + icon, contrast ≥ 5:1 — Ativo #EDF1CF/#545933 · Pendente #F2E8CC/#6E613C · Inativo #F3E4E1/#764141 · Em análise #DEEBEF/#415062 · Rascunho #F1E6DD/#635548.
- **Restricted:** #C8D268 occasional indicators · #DB8920 specific alerts. Consolidated: #747C32 → #545933, #163A5B → #415062.
- **Proportion (guide, not rule):** 60% light surfaces · 25% identity (#381416 + text) · 10% highlights (#545933 / #415062 strategic cards) · 5% accents (data, status, #D7B761 square).
- #381416 as a large flat surface only for header/footer.
- Colour blocks (#545933 / #415062 with accent square, `KpiCard highlight`, `Card variant="block"`) are for presentations and compositions only — dashboards stay white with #ECE6DA borders.

### Type
**Chap** for headings (Regular 400, sentence case) and display (Light 300, uppercase, tracked — `.nn-display`). KPI numerals in Chap Light. **Manrope** for body and UI. Size tokens are `--fs-*`: body 14 · UI 13 · small 12.5 · caption 11.5; headings 26/19/16; KPI 32. Overlines and buttons: Manrope 600, uppercase, tracked.

### Shape, lines, elevation
- **Corners:** 0 for photos and colour blocks · 2px for buttons, inputs, cards, chips · 4px dialogs · round only for switch and avatars.
- **Lines:** 1px #ECE6DA by default; #CDA787 for emphasis. Thin #222222 rule (35%) with theme + date opens a page.
- **Accent square:** 14–16px #D7B761 square in the bottom-right corner of a colour block (`Card accent`, `KpiCard highlight`).
- **Shadows:** low, warm; dialogs, toasts and drawers only.

### Imagery
Warm, low-light photography of architecture, wood, craft objects and tropical nature (`assets/imagery/`, extracted from the template). Full-bleed or square-cropped, never rounded, no filters or overlays.

### Spacing & layout
4px base; 24px card padding and gutter, 48px page margins. Fixed white sidebar (248px) + fluid content up to 1280px. Generous whitespace; few elements per view.

### Interaction
Hover: #381416 → #222222 on primary; cream fill on secondary/rows; underline #CDA787 → #381416 on links. Press `scale(.985)`. Focus: #381416 border + soft halo. Motion 140/220/360ms ease, fades only.

## ICONOGRAPHY
- No brand icon set was supplied. **Substitution:** [Lucide](https://lucide.dev) via CDN (`lucide-static@0.460.0`), rendered through the `Icon` component as a `currentColor` mask — thin, rounded, line-only, which suits the brand's restraint.
- Sizes: 16px in small controls, 18px default, 20px nav. Colour: burgundy, black, slate or sand; tertiary colours only as status ink.
- No emoji, no icon fonts, no filled/duotone icons. The wordmark is never used as an icon; there is no standalone monogram in the supplied files.

## Logo usage
- **Architecture:** master NANNAI for group/institutional material; property lockups (NANNAI + location) for one-house material — Noronha, Muro Alto, Milagres, Casa Nannai Trancoso. In multi-property material use the master mark and name houses in type.
- **Sizing — always by wordmark height H** (the NANNAI letters), never by image width, so every lockup shows an identical wordmark: `height: calc(var(--logo-h-md) * var(--logo-k-<house>))`. H tokens: 22 / 30 / 48px. Ratios: master 1 · noronha 1.555 · muro-alto 1.556 · milagres 1.615 · trancoso 1.594. All logo files are trimmed to their artwork.
- **Colour:** #381416 on #FFFFFF/#FAF6EB (default); white on #381416, #545933 or photography; sand #CDA787 on #381416 or #222222. Clearspace ≥ ½ H. Min H 16px.
- Milagres source is low-res (180×80) — replace with a vector/large PNG before print.
