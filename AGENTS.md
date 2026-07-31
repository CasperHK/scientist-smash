# 🤖 Agent Instructions: Scientist Smash Core

Welcome to the **Scientist Smash (科學家大亂鬥)** game core repository. This project is a high-performance 2D game library built with **PixiJS** for WebGL rendering, **GSAP** for animations, and bundled via **Rslib** as a modern ESM library with full TypeScript support.

---

## 🏗️ Architecture & Core Philosophy
- **Framework Agnostic Core:** The core library should remain completely decoupled from specific frontend frameworks (like Qwik, React, or Vue). It accepts a standard DOM `HTMLElement` container and a `PlayerSession` object to initialize.
- **Rendering:** All game entities, animations, and graphics must run via **PixiJS (^8.x)** hardware-accelerated canvas.
- **Modularity:** Keep game loops, asset loaders, physics/collisions, and UI overlays modular inside the `src/` directory.

---

## 📂 Project Structure
```text
scientist-smash-core/
├── dist/              # Build output (ESM bundles & TypeScript declaration files)
├── src/               # Source code directory
│   ├── frontend/      # Main entry point (exports ScientistSmashGame and types)
│   ├── backend/       # Core game loop, scene manager, and asset loader
│   └── game-core/     # Character, particle, and stage components
└── start-dev.bat      # Start the development servers
```