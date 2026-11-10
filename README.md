# Endloops — Website Assignment

A responsive single-page website for the Endloops UI/UX and Full-Stack Engineering internship assignment.

## Technology
- React 18 + Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally
1. Install Node.js (LTS).
2. Extract the project ZIP and open the `endloops-project` folder in VS Code.
3. Open a terminal in that folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to Vercel
1. Push the project to a GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy.

## Design and implementation notes
- The supplied Endloops logo is used without recolouring or distortion.
- The About section capability cards use a regular two-column CSS grid with equal minimum heights and a consistent gap. Offset margins that caused the original overlap have been removed.
- The end-to-end solutions section includes all five items in the assignment: Budget Review, Escrow Audit, Financial Audit, Interim Audit and Budget Preparation for Property Management Companies.
- All six standalone tools are included.
- The dashboard numbers and document names are illustrative UI mockup content, not claims about live Endloops product performance.
- The contact form validates inputs locally but does not transmit or store submissions. Connect a backend or form service before using it to receive enquiries.
- Product descriptions are intentionally conservative and based on the supplied assignment brief.
