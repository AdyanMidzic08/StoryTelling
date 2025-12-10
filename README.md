# 📜 Dynamic Scroll Storytelling - Pokémon Edition

Ein interaktives Storytelling-Erlebnis, das den Nutzer durch eine spannende Pokémon-Reise führt. Gesteuert durch Scroll-Bewegungen, untermalt mit dynamischen Audio-Effekten und professionellen GSAP-Animationen.

## 🔗 Links

- **Live Demo:** [HIER_WEBSITE_LINK_EINFÜGEN](https://deine-website.com)
- **Repository:** [HIER_REPO_LINK_EINFÜGEN](https://github.com/deinBenutzername/deinRepo)

## ✨ Features

- **🚀 GSAP ScrollTrigger Animationen:**

  - Weiche Ein- und Ausblendeffekte der Story-Karten.
  - Parallax-Scrolling und rotierende Elemente.
  - Scrub-Animationen, die direkt auf die Scroll-Geschwindigkeit reagieren.

- **🎵 Intelligentes Audio-System:**

  - **Hintergrundmusik:** Atmosphärischer Loop, der die Stimmung setzt.
  - **Story-Audio:** Spezifische Soundeffekte pro Karte, die automatisch starten, wenn die Karte in den Fokus gerät.
  - **Smart Mute:** Die Hintergrundmusik pausiert automatisch, wenn ein Story-Clip abgespielt wird, und blendet danach wieder ein.
  - **Global Mute:** Ein animierter Pokéball-Button schaltet alle Sounds stumm.

- **🎨 Dynamisches Design:**

  - **Adaptive Farben:** Jede Story-Box passt ihre Hintergrundfarbe automatisch an den Inhalt/das Bild an (definiert in JSON).
  - **Dekorationen:** Animierte GIFs (Pikachu, Mew, Trainer), die seitlich erscheinen.
  - **Visualizer:** Eine animierte Frequenz-Bar, die zur Musik pulsiert.

- **📄 JSON-Driven Content:**
  - Der gesamte Inhalt (Texte, Bilder, Audio-Pfade, Farben) ist modular in `JSON/storys.js` ausgelagert und kann leicht erweitert werden.

## 🛠️ Technologien

- **Frontend:** HTML5, CSS3 (Flexbox, Grid, Custom Properties)
- **Logic:** JavaScript (ES6+)
- **Libraries:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) + ScrollTrigger Plugin
- **Assets:** Pokémon Sprites (PokeAPI), Custom Fonts

## 📂 Projektstruktur

```text
Dynamic-Scroll/
├── index.html          # Hauptstruktur der Seite
├── script.js           # Core-Logik (Content-Gen, GSAP, Audio-Handling)
├── style.css           # Styling, Keyframe-Animationen, Responsive Design
├── JSON/
│   └── storys.js       # Daten-Array mit Story-Objekten
├── Audio/              # Soundeffekte (.wav) & Hintergrundmusik (.mp3)
├── Images/             # Story-Bilder, GIFs und Hintergründe
└── Fonts/              # Lokale Schriftarten (Pokemon Style)
```

## 🚀 Installation & Nutzung

1.  **Repository klonen:**

    ```bash
    git clone https://github.com/deinBenutzername/deinRepo.git
    ```

2.  **Projekt öffnen:**
    Öffne die `index.html` in deinem Browser.

    > **Tipp:** Für die beste Erfahrung (besonders Audio-Autoplay-Richtlinien) empfiehlt sich die Nutzung einer "Live Server" Extension in VS Code.

3.  **Steuerung:**
    - Wähle zu Beginn **"Music"**, um das volle Erlebnis zu starten.
    - Scrolle langsam nach unten, um die Geschichte zu enthüllen.
    - Nutze den **Pokéball** unten rechts, um den Ton an/auszuschalten.
    - Klicke auf **"Neustart ↻"**, um die Reise von vorne zu beginnen.

## 👨‍💻 Autor

Entwickelt von **Adyan Midzic** im Rahmen des Medientechnik-Unterrichts (2. Klasse).

---

_Gotta Catch 'Em All!_ 🔴⚪
