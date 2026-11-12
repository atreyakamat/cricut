# cricut

> The same sheet maker now also lives inside [CutDesk](https://github.com/atreyakamat/cutdesk) at `/sheets`. This repo stays as the tiny offline nginx version.

Pack outlined stickers onto Cricut **A4 Print Then Cut** sheets. Runs entirely in the browser, so it works offline (for example at a stall with no signal) and nothing is uploaded anywhere.

Ported from the shop admin's `/admin/sheets` page in [`stixnvibes-nv`](https://github.com/atreyakamat/stixnvibes-nv), without the shop login, database or product picker.

## What it does

- Drop in your sticker PNGs (or JPG/WebP), set how many of each and their size in cm.
- Stickers are turned and packed by their real shape on Cricut's A4 template: no overlaps, a gap between them, clear of the corner marks. It spills onto more sheets as needed.
- Download each sheet as a transparent 300 DPI PNG, then follow the on-page steps for Design Space.

## Run it

```sh
npm install
npm run dev          # http://localhost:3100
npm run check        # lint, typecheck, tests
```

### Always-on Docker container

```sh
docker compose up -d --build     # http://<server>:8300
```

- nginx serves the static build; the image is a few MB and uses well under 64 MB of memory.
- `GET /health` returns `{"ok":true,"service":"cricut"}` for Docker and Uptime Kuma.
- To open it inside the House of Stix control room, set `CONTROL_ROOM_ORIGIN` to the control room's address (default `http://localhost:8200`, the control room's port). This sets the `frame-ancestors` header so the browser allows the window.

## Layout

| Path | What |
| --- | --- |
| `src/components/sheet-maker.tsx` | The UI and canvas work |
| `src/lib/nest.ts` | Shape-aware packer |
| `src/lib/sheet-layout.ts` | Cricut A4 template, sizes, PNG DPI stamp |
| `tests/unit/cricut.test.ts` | Packer and template tests |
