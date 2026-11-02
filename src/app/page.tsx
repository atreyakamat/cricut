import { SheetMaker } from "@/components/sheet-maker";

/** Print Then Cut sheets from local sticker files. Nothing is uploaded anywhere. */
export default function Page() {
  return (
    <main className="mx-auto max-w-[90rem] space-y-6 px-4 py-8 sm:px-8">
      <div>
        <h1 className="display text-5xl">Cricut sheets</h1>
        <p className="mt-2 max-w-2xl text-sm text-mute">
          Drop in your outlined stickers and say how many of each. The sheet maker turns and packs them by their real shape on Cricut&apos;s A4 Print Then Cut
          template, with no overlaps, spills onto more sheets as needed, and gives you transparent PNGs with no background.
        </p>
      </div>
      <SheetMaker />
    </main>
  );
}
