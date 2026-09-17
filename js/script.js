/**
 * NAUTILODAUNT — PORTFOLIO SCRIPT & DATA ARCHITECTURE
 * Fully static, zero dependencies, GitHub Pages compatible.
 */

/* ==========================================================================
   PROJECT DATA STORE
   Easily add, modify, or reorder projects here.
   ========================================================================== */
const projects = [
  {
    id: "aetheria",
    index: "01",
    title: "Aetheria",
    tagline: "Local-First Markdown & Spatial Thought Canvas",
    shortDescription: "A minimalist, low-latency markdown editor and spatial thought canvas designed for deep work and research note synthesis.",
    description: "Aetheria is an editorial note-taking app and node-based thinking environment engineered for developers, researchers, and writers. Built around an ultra-responsive local-first architecture with sub-10ms input latency, bi-directional hyperlinking, and a distraction-free cream interface.",
    features: [
      "Bi-directional wiki-style linking with real-time visual graph topologies",
      "Local-first SQLite & IndexedDB persistence with zero cloud lock-in",
      "Custom markdown syntax highlighter with instant typographic preview",
      "Clean export pipeline supporting publication-ready PDF, Markdown, and LaTeX"
    ],
    technologies: ["JavaScript", "Canvas API", "IndexedDB", "CSS3"],
    image: "./assets/projects/aetheria.svg",
    github: "https://github.com/nautilodaunt/aetheria",
    demo: "https://nautilodaunt.github.io/aetheria"
  },
  {
    id: "nautilus",
    index: "02",
    title: "Nautilus Engine",
    tagline: "Algorithmic Procedural Terrain & Logarithmic Spirals",
    shortDescription: "A WebGL procedural geometry engine generating elevation contours, hydraulic erosion, and nautilus shell growth simulations.",
    description: "Nautilus Engine explores algorithmic surface modeling inspired by biological growth patterns and logarithmic spirals. It features custom multi-octave Simplex noise generators, real-time GPU hydraulic sediment transport simulation, and interactive isometric wireframe rendering.",
    features: [
      "Over 1,000,000 instanced triangles rendered at a locked 60 FPS in WebGL",
      "Dynamic hydraulic erosion simulating water flow, sediment carry, and evaporation",
      "Fibonacci logarithmic spiral growth algorithms with customizable phyllotaxis ratios",
      "Exportable vector contour maps (SVG) and heightmaps (16-bit PNG)"
    ],
    technologies: ["JavaScript", "WebGL 2", "GLSL", "Linear Algebra"],
    image: "./assets/projects/nautilus.svg",
    github: "https://github.com/nautilodaunt/nautilus-engine",
    demo: "https://nautilodaunt.github.io/nautilus-engine"
  },
  {
    id: "vespera",
    index: "03",
    title: "Vespera",
    tagline: "Circadian Sound Engine & Ambient Focus Synthesizer",
    shortDescription: "An ambient soundscape generator and Pomodoro timer tuned to natural circadian frequencies and analog acoustics.",
    description: "Vespera is an acoustic environment crafted to promote prolonged focus without cognitive fatigue. It synthesizes real-time binaural beats, procedural rainfall, tape flutter, and forest acoustics entirely using the Web Audio API without relying on pre-recorded audio loops.",
    features: [
      "Procedural pink, brown, and white noise synthesis using custom audio nodes",
      "Circadian session planner synchronizing focus intervals with ultradian rhythm cycles",
      "Interactive radial time dial with keyboard shortcut controls",
      "100% offline functionality with minimal memory footprint (< 15MB)"
    ],
    technologies: ["JavaScript", "Web Audio API", "HTML5", "CSS Custom Properties"],
    image: "./assets/projects/vespera.svg",
    github: "https://github.com/nautilodaunt/vespera",
    demo: "https://nautilodaunt.github.io/vespera"
  },
  {
    id: "chroma",
    index: "04",
    title: "Chroma DB Explorer",
    tagline: "High-Dimensional Vector Embedding Visualizer",
    shortDescription: "An interactive visual inspection tool for vector embeddings, cosine distance clustering, and semantic search manifolds.",
    description: "Chroma DB Explorer translates complex high-dimensional semantic spaces into navigable 2D/3D projections. Built for developers fine-tuning retrieval-augmented generation (RAG) pipelines and inspecting semantic similarity metrics across dense document corpora.",
    features: [
      "Client-side UMAP and t-SNE dimensionality reduction for up to 10,000 vectors",
      "Interactive cosine distance neighborhood inspection with instant query matching",
      "Real-time cluster isolation and semantic cluster naming heuristics",
      "Direct integration with JSON and CSV embedding vectors"
    ],
    technologies: ["JavaScript", "Canvas 2D", "APIs", "Node.js"],
    image: "./assets/projects/chroma.svg",
    github: "https://github.com/nautilodaunt/chroma-explorer",
    demo: "https://nautilodaunt.github.io/chroma-explorer"
  },
  {
    id: "monolith",
    index: "05",
    title: "Monolith",
    tagline: "Microservice Orchestration CLI & Telemetry Daemon",
    shortDescription: "A lightweight terminal visualizer and orchestration tool for inspecting distributed service health, latency, and mesh topology.",
    description: "Monolith simplifies local and cloud-native microservice management. It aggregates live stdout streams, probes gRPC/HTTP health endpoints, displays real-time p99 latency heatmaps, and automatically maps dependency graphs within an elegant terminal interface.",
    features: [
      "Sub-millisecond p99 latency telemetry aggregation across distributed instances",
      "Zero-configuration service discovery using multicast DNS and Docker sockets",
      "Interactive terminal UI with keyboard-driven filtering and log drill-down",
      "Resilient mTLS verification with automated local certificate rotation"
    ],
    technologies: ["Node.js", "Express", "Bash", "Linux", "APIs"],
    image: "./assets/projects/monolith.svg",
    github: "https://github.com/nautilodaunt/monolith",
    demo: ""
  },
  {
    id: "komorebi",
    index: "06",
    title: "Komorebi",
    tagline: "Distraction-Free Technical Document & Whitepaper Reader",
    shortDescription: "An editorial reading environment crafted for deep research whitepapers, mathematical notation, and scholarly marginalia.",
    description: "Komorebi brings the warmth of Swiss typography and traditional book design to digital technical papers. It features dual-column layouts with dedicated side marginalia, native LaTeX equation rendering, customizable reading rulers, and distraction-free typography.",
    features: [
      "High-fidelity mathematical typesetting with inline and display formula support",
      "Side marginalia system preserving scholarly annotations beside corresponding paragraphs",
      "Reading progress estimation and persistent scroll state across browser sessions",
      "Accessible high-contrast cream theme exceeding WCAG AAA standards"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Typography"],
    image: "./assets/projects/komorebi.svg",
    github: "https://github.com/nautilodaunt/komorebi",
    demo: "https://nautilodaunt.github.io/komorebi"
  }
];

/* ==========================================================================
   APP CONTROLLER & DOM INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNavigation();
  initModal();
  initScrollAnimations();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   PROJECT RENDERING
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map((project, idx) => {
    const techTags = project.technologies
      .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
      .join("");

    return `
      <article class="project-item reveal" data-project-id="${project.id}">
        <div class="project-image-container" tabindex="0" role="button" aria-label="View details for ${escapeHtml(project.title)}">
          <div class="project-image-wrapper">
            <img src="${project.image}" alt="${escapeHtml(project.title)} screenshot preview" class="project-image" loading="lazy" />
          </div>
          <span class="project-preview-badge">EXPAND DETAILS ↗</span>
        </div>

        <div class="project-text-container">
          <span class="project-number reveal" data-delay="1">${project.index} // PORTFOLIO</span>
          <h3 class="project-title reveal" data-delay="2">${escapeHtml(project.title)}</h3>
          <p class="project-tagline reveal" data-delay="3">${escapeHtml(project.tagline)}</p>
          <p class="project-description reveal" data-delay="4">${escapeHtml(project.shortDescription)}</p>
          
          <div class="project-tech-list reveal" data-delay="5">
            ${techTags}
          </div>

          <div class="project-actions reveal" data-delay="6">
            <button class="btn-text-link view-project-btn" data-project-id="${project.id}" type="button">
              View Project <span class="link-arrow">→</span>
            </button>
            ${project.github ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-text-link" aria-label="GitHub repository for ${escapeHtml(project.title)}">
                Code <span class="link-arrow">↗</span>
              </a>
            ` : ""}
          </div>
        </div>
      </article>
    `;

  }).join("");

  // Attach click events to project cards and buttons
  container.querySelectorAll(".project-item").forEach(item => {
    const projectId = item.getAttribute("data-project-id");
    const imageContainer = item.querySelector(".project-image-container");
    const viewBtn = item.querySelector(".view-project-btn");

    const openHandler = () => openProjectModal(projectId);

    if (imageContainer) {
      imageContainer.addEventListener("click", openHandler);
      imageContainer.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHandler();
        }
      });
    }

    if (viewBtn) {
      viewBtn.addEventListener("click", openHandler);
    }
  });
}

/* --------------------------------------------------------------------------
   PROJECT DETAIL MODAL
   -------------------------------------------------------------------------- */
let activeModalTrigger = null;

function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal());
  }

  // Close when clicking modal backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Handle Escape key
  modal.addEventListener("cancel", () => {
    document.body.style.overflow = "";
    if (activeModalTrigger) {
      activeModalTrigger.focus();
    }
  });
}

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  const modal = document.getElementById("project-modal");
  if (!project || !modal) return;

  // Save current active element to restore focus on close
  activeModalTrigger = document.activeElement;

  // Populate modal contents
  document.getElementById("modal-index").textContent = `${project.index} // ARCHIVE`;
  document.getElementById("modal-title").textContent = project.title;
  
  const modalImg = document.getElementById("modal-image");
  modalImg.src = project.image;
  modalImg.alt = `${project.title} screenshot`;

  document.getElementById("modal-description").textContent = project.description;

  // Features list
  const featuresContainer = document.getElementById("modal-features");
  featuresContainer.innerHTML = project.features.map(f => `
    <div class="modal-feature-item">
      <span class="modal-feature-bullet">✦</span>
      <span>${escapeHtml(f)}</span>
    </div>
  `).join("");

  // Tech list
  const techContainer = document.getElementById("modal-tech-list");
  techContainer.innerHTML = project.technologies.map(t => `
    <span class="tech-tag">${escapeHtml(t)}</span>
  `).join("");

  // Action links
  const actionsContainer = document.getElementById("modal-actions");
  let actionButtonsHtml = "";

  if (project.demo) {
    actionButtonsHtml += `
      <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
        Live Demo <span class="btn-arrow btn-arrow--diagonal">↗</span>
      </a>
    `;
  }

  if (project.github) {
    actionButtonsHtml += `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">
        Source Code <span class="btn-arrow btn-arrow--diagonal">↗</span>
      </a>
    `;
  }

  actionsContainer.innerHTML = actionButtonsHtml;

  // Show modal with native dialog API
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "true");
  }

  document.body.style.overflow = "hidden";
  
  // Focus close button for accessibility
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.focus();
  }
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }

  document.body.style.overflow = "";

  if (activeModalTrigger) {
    activeModalTrigger.focus();
  }
}

/* --------------------------------------------------------------------------
   NAVIGATION & SCROLL INTERACTIONS
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  const progressBar = document.getElementById("scroll-progress-bar");
  const heroSpiral = document.querySelector(".hero-deco-spiral");

  // Sticky header border, reading progress, and dark tan theme transition on scroll
  const updateHeaderTheme = () => {
    const contactSec = document.getElementById("contact");
    if (!contactSec || !header) return;
    const rect = contactSec.getBoundingClientRect();
    if (rect.top <= header.offsetHeight + 10 && rect.bottom > 0) {
      header.classList.add("is-dark");
    } else {
      header.classList.remove("is-dark");
    }
  };

  const updateProgressBar = () => {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const pct = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
    progressBar.style.width = `${pct}%`;
  };

  const updateHeroParallax = () => {
    if (!heroSpiral) return;
    if (window.scrollY < window.innerHeight * 1.6) {
      const rot = window.scrollY * 0.07;
      const yShift = window.scrollY * 0.12;
      const scale = Math.max(0.88, 1 - (window.scrollY * 0.00025));
      heroSpiral.style.transform = `translateY(calc(-50% + ${yShift}px)) rotate(${rot}deg) scale(${scale})`;
    }
  };

  const updateScrollParallax = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const vh = window.innerHeight;

    // Interactive zoom & shift on project images as they pass through viewport
    const projectImages = document.querySelectorAll(".project-item.is-revealed .project-image");
    projectImages.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= vh) {
        const centerOffset = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
        const scale = 1 + Math.min(0.045, Math.abs(centerOffset) * 0.035);
        const yShift = centerOffset * 12;
        img.style.transform = `scale(${scale.toFixed(3)}) translateY(${yShift.toFixed(1)}px)`;
      }
    });

    // Interactive zoom on About portrait
    const aboutImg = document.querySelector(".about-visual-col.is-revealed .about-image-wrapper img");
    if (aboutImg) {
      const rect = aboutImg.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= vh) {
        const centerOffset = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
        const scale = 1 + Math.min(0.045, Math.abs(centerOffset) * 0.035);
        const yShift = centerOffset * 10;
        aboutImg.style.transform = `scale(${scale.toFixed(3)}) translateY(${yShift.toFixed(1)}px)`;
      }
    }
  };

  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          header?.classList.add("is-scrolled");
        } else {
          header?.classList.remove("is-scrolled");
        }
        updateHeaderTheme();
        updateProgressBar();
        updateHeroParallax();
        updateScrollParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenu.classList.toggle("is-open", !isExpanded);
    });

    // Close mobile menu when clicking nav link
    mobileMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("is-open");
      });
    });
  }

  // Active link highlighter via IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else if (href && href.startsWith("#")) {
              link.classList.remove("active");
            }
          });
        }
      });
    }, {
      rootMargin: "-20% 0px -60% 0px"
    });

    sections.forEach(sec => observer.observe(sec));
  }
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL ANIMATIONS — INSTAGRAM STYLE
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const allRevealable = document.querySelectorAll(
    ".reveal, .skill-category-card, .project-item, .about-visual-col, .about-content, .contact-links-grid, .about-image-wrapper"
  );

  if (reducedMotion || !("IntersectionObserver" in window)) {
    allRevealable.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  // ---- Per-child stagger helper ----
  // When a container reveals, stagger its direct animate-able children
  const addChildStagger = (container) => {
    const children = container.querySelectorAll(".reveal, .contact-link-card, .pillar-item, .about-stat");
    children.forEach((child, i) => {
      if (!child.hasAttribute("data-delay")) {
        child.setAttribute("data-delay", String(i));
      }
    });
  };

  // ---- Main reveal observer ----
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add("is-revealed");
        // Stagger children inside
        addChildStagger(el);
        obs.unobserve(el);
      }
    });
  }, {
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.06
  });

  allRevealable.forEach(el => {
    // Add .reveal class if not already present (for .skill-category-card, .about-content etc.)
    if (!el.classList.contains("reveal") &&
        !el.classList.contains("project-item") &&
        !el.classList.contains("about-visual-col") &&
        !el.classList.contains("contact-links-grid") &&
        !el.classList.contains("about-image-wrapper")) {
      el.classList.add("reveal");
    }
    revealObserver.observe(el);
  });

  // ---- Nested reveal elements inside project cards ----
  // These are injected by renderProjects() with data-delay already set
  setTimeout(() => {
    document.querySelectorAll(".project-text-container .reveal").forEach(child => {
      revealObserver.observe(child);
    });
  }, 80);
}

/* --------------------------------------------------------------------------
   BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* --------------------------------------------------------------------------
   UTILITY HELPERS
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

