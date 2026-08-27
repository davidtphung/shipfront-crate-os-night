# CRATE OS NIGHT

Night sibling of [crate-os](https://davidtphung.github.io/shipfront-crate-os/). Same Shipfront copy and order-flow / network IA, recut to true black, white type, and Terminal orange.

Live: [https://davidtphung.github.io/shipfront-crate-os-night/](https://davidtphung.github.io/shipfront-crate-os-night/)

## Paint

| Token | Value | Use |
| --- | --- | --- |
| Ground | `#000000` | Page, true black |
| Type | `#FFFFFF` | Headings and primary copy |
| Type soft | `#E8E8E8` | Body |
| Accent | `#FF6A00` | Cube, CTAs, eyebrows only |
| CTA | black on `#FF6A00` | Never white on orange |

Display type is Space Grotesk. Nav lockup is the 1A EVEN orange wire cube (`M7 9 L12 6`) plus bold **SHIPFRONT**. No product subtitle.

## Pages

- `/` Home
- `/get-a-quote/` and `/quote/` Get a Quote
- `/contact/` Contact

## Stills

Pinned from the sibling set. Do not recode JPEG bytes.

| File | Use | Bytes | sha1 |
| --- | --- | --- | --- |
| `public/media/procurement.jpg` | Warehousing (Area pick floor) | 288810 | `af399d3ccae1fe6beadca14f3bb22e62f4d9d7e2` |
| `public/media/logistics-usa.jpg` | Freight / location (USA truck) | 376501 | `01268520751d59bf9762d2d7d7c3e1555ba60c8d` |
| `public/media/fulfillment.jpg` | Fulfillment | 236192 | `238ec32fdede338cdcbf1a80750df501ba47afff` |
| `public/media/integration.jpg` | Integrations | 198616 | `dcb6b57acc3b0a95f2db3c33d66d56e7fa672c6b` |

## Run locally

```bash
npm install
npm run dev -- --port 43147
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147).

## GitHub Pages

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/shipfront-crate-os-night npm run build
```

The static export is written to `out/`, copied to the `gh-pages` branch, and also offered to GitHub Actions Pages.

Cards keep Venice motion: ken-burns on the still, 220ms hover scale on the photo only, 80ms stagger dissolve, press `scale(0.97)`, interruptible. Type stays put while the still moves. `prefers-reduced-motion` flattens. Order-flow and network graph stay in motion on black.

Copy is held from crate-os / [myshipfront.com](https://www.myshipfront.com/). Footer: Built by David T Phung.
