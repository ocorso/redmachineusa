# Red Machine USA (`redmachineusa.com`)

Official web platform, Electronic Press Kit (EPK), and original music archive for **Red Machine USA** — a New Jersey 5-piece classic blues, indie, and gritty rock & roll band fronted by Owen "O Red" Corso — alongside Owen Corso's solo acoustic performances.

🌐 **Live Site:** [https://redmachineusa.com](https://redmachineusa.com)

---

## Project Roadmap & Features

* **Phase 1 — Live Performance EPK & Booking (Live):** Turnkey booking portal comparing the **Full 5-Piece Electric Band** and **Solo Acoustic** formats, stage/PA specifications, band biography (`/bio`), and a direct booking inquiry system.
* **Phase 2 — Original Music Catalogue (In Progress):** Relational archive spanning multiple bands and eras (*Red Machine*, *Ocelot Red*, *The Good News Band*) with lyrics, release histories, and liner notes.
* **Phase 3 — "AI Twin" Interactive Chat (Planned):** Conversational AI bandmate trained on the complete musical catalogue, song histories, and band lore.
* **Phase 4 — Rehearsal Audio Vault (Planned):** On-demand streaming of studio and rehearsal recordings synced from Google Drive.

---

## Tech Stack

* **Frontend:** [Next.js](https://nextjs.org/) (App Router, TypeScript, Static Export via `output: 'export'`)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Google Fonts (`Oswald`, `Geist`)
* **Backend API:** Lightweight stateless PHP endpoints (`/api/book.php`) + MySQL/MariaDB via PDO
* **Infrastructure:** Apache Virtual Hosts on Google Cloud Platform (GCP Compute Engine)

---

## Local Development

1. **Install dependencies:**
   `npm install`

2. **Run the Next.js development server:**
   `npm run dev`
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build the static production export:**
   `npm run build`
   Compiled static assets are generated in the `out/` directory for Apache deployment.

---

## Security & Environment Configuration

Database credentials, API keys, and server environment variables are strictly excluded from version control via `.gitignore` and loaded at runtime via server-side environment configurations.

---

## Connect

* **Booking & Inquiries:** [redmachineusa@gmail.com](mailto:redmachineusa@gmail.com)
* **YouTube:** [bit.ly/RMonYT](https://bit.ly/RMonYT)
* **SoundCloud:** [soundcloud.com/redmachineusa](https://soundcloud.com/redmachineusa)
* **Instagram:** [@redmachineusa](https://instagram.com/redmachineusa)
* **Facebook:** [facebook.com/redmachineusa](https://facebook.com/redmachineusa)
* **X / Twitter:** [@redmachineusa](https://twitter.com/redmachineusa)
* **More Projects:** [ORed.net](https://ored.net)
