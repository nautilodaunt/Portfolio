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
    id: "PriorityTask",
    index: "06",
    title: "PriorityTask",
    tagline: "Distraction free planner",
    shortDescription: "A visual task board app that combines smart sorting with actionable analytics to help you optimize your workflow.",
    description: "LearnBoard is a task management web application designed to help users organize and prioritize their work. It supports drag-and-drop task organization, deadlines, priority levels, browser-based persistence, a built-in Pomodoro timer and automated scheduling based on user-defined constraints.",
    features: [
      "JavaScript frontend with a Node.js and Express backend",
      "OpenRouter API integration for AI-powered task prioritization",
      "Structured JSON parsing to automatically update task priorities",
      "Browser-based persistence and constraint-driven scheduling logic"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Express.js", "Openrouter API"],
    image: [
      "./assets/projects/PT1.gif",
      "./assets/projects/PT2.gif",
      "./assets/projects/PT3.gif",
      "./assets/projects/PT4.gif"
    ],
    github: "https://github.com/nautilodaunt/prioritytask",
    demo: "https://github.com/nautilodaunt/PriorityTask/"
  }
];

// ---------------------------------------------------------------------------
// New Art Portfolio Data
// ---------------------------------------------------------------------------
const artProjects = [
  {
    id: "digital-sketches",
    index: "01",
    title: "Digital Sketches",
    tagline: "Explorations in line, form, and color",
    shortDescription: "A collection of hand‑drawn digital sketches created with Procreate.",
    description: "These sketches explore the interplay of light, shadow, and texture in everyday objects. Each piece is built from a single brushstroke workflow, emphasizing spontaneity and expressive line work.",
    features: [
      "High‑resolution PNG exports (300 dpi)",
      "Layered PSD files for remixing",
      "Limited color palette for visual cohesion"
    ],
    technologies: ["Procreate", "Adobe Photoshop"],
    image: "./assets/profile/DUBMAHH CATS.png",
    github: "",
    demo: ""
  },
  {
    id: "3d-models",
    index: "02",
    title: "3D Models",
    tagline: "Low‑poly assets for games and visualizations",
    shortDescription: "A series of stylized low‑poly models crafted in Blender.",
    description: "These models are designed for real‑time rendering, featuring clean topology, UV‑unwrapped textures, and PBR material setups. Ideal for indie games, AR experiences, and rapid prototyping.",
    features: [
      "OBJ & GLTF export formats",
      "PBR‑ready material library",
      "Optimized for < 10 k triangles per model"
    ],
    technologies: ["Blender", "Substance Painter"],
    image: "./assets/profile/DUBMAHH CATS1.png",
    github: "",
    demo: ""
  },
  {
    id: "illustration-series",
    index: "03",
    title: "Illustration Series",
    tagline: "Narrative illustrations inspired by marine biology",
    shortDescription: "A series of detailed illustrations blending scientific accuracy with artistic flair.",
    description: "Each illustration combines meticulous research on marine organisms with a stylized visual language, aiming to educate and inspire curiosity about ocean life.",
    features: [
      "Print‑ready PDF (CMYK, 300 dpi)",
      "Accompanying research notes",
      "Limited edition signed prints"
    ],
    technologies: ["Clip Studio Paint", "Adobe Illustrator"],
    image: "./assets/profile/nautilodaunt1.png",
    github: "",
    demo: ""
  }
];

// ---------------------------------------------------------------------------
// Rendering Functions
// ---------------------------------------------------------------------------

function renderPortfolio(containerId, dataArray) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = dataArray.map((item) => {
    const techTags = item.technologies
      .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
      .join("");

    const imageSrc = Array.isArray(item.image) ? item.image[0] : item.image;
    const imagesData = Array.isArray(item.image) ? JSON.stringify(item.image) : JSON.stringify([item.image]);

    return `
      <article class="project-item reveal" data-project-id="${item.id}">
        <div class="project-image-container" tabindex="0" role="button" aria-label="View details for ${escapeHtml(item.title)}">
          <div class="project-image-wrapper">
            <img src="${imageSrc}" data-images='${imagesData}' data-current-index="0" alt="${escapeHtml(item.title)} screenshot preview" class="project-image gif-cycle" loading="lazy" />
          </div>
          <span class="project-preview-badge">EXPAND DETAILS</span>
        </div>

        <div class="project-text-container">
          <span class="project-number reveal" data-delay="1">${item.index} // PORTFOLIO</span>
          <h3 class="project-title reveal" data-delay="2">${escapeHtml(item.title)}</h3>
          <p class="project-tagline reveal" data-delay="3">${escapeHtml(item.tagline)}</p>
          <p class="project-description reveal" data-delay="4">${escapeHtml(item.shortDescription)}</p>
          <div class="project-tech-list reveal" data-delay="5">
            ${techTags}
          </div>

          <div class="project-actions reveal" data-delay="6">
            <button class="btn-text-link view-project-btn" data-project-id="${item.id}" type="button">
              View Details <span></span>
            </button>
            ${item.github ? `
              <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="btn-text-link" aria-label="Source repository for ${escapeHtml(item.title)}">
                Code <span></span>
              </a>
            ` : ""}
            ${item.demo ? `
              <a href="${item.demo}" target="_blank" rel="noopener noreferrer" class="btn-text-link" aria-label="Live demo for ${escapeHtml(item.title)}">
                Demo <span></span>
              </a>
            ` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach event listeners for opening the modal
  container.querySelectorAll(".project-item").forEach(item => {
    const projectId = item.getAttribute("data-project-id");
    const imageContainer = item.querySelector(".project-image-container");
    const viewBtn = item.querySelector(".view-project-btn");

    const openHandler = () => openProjectModal(projectId, item);

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

// Specific wrappers for readability
function renderProjects() {
  renderPortfolio("projects-container", projects);
}

function renderArtPortfolio() {
  renderPortfolio("art-container", artProjects);
}

// ---------------------------------------------------------------------------
// Modal Logic (unchanged, but now works for both projects and art)
// ---------------------------------------------------------------------------

let activeModalTrigger = null;

function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  modal.addEventListener("cancel", (e) => {
    e.preventDefault(); 
    closeModal();
  });
}

function openProjectModal(projectId, sourceItem = null) {
  const project = projects.concat(artProjects).find(p => p.id === projectId);
  const modal = document.getElementById("project-modal");
  if (!project || !modal) return;
  activeModalTrigger = document.activeElement;

  document.getElementById("modal-index").textContent = `${project.index} // ARCHIVE`;
  document.getElementById("modal-title").textContent = project.title;
  
  const modalImg = document.getElementById("modal-image");
  const imageSrc = Array.isArray(project.image) ? project.image[0] : project.image;
  const imagesData = Array.isArray(project.image) ? JSON.stringify(project.image) : JSON.stringify([project.image]);
  
  modalImg.src = imageSrc;
  modalImg.alt = `${project.title} screenshot`;
  modalImg.setAttribute('data-images', imagesData);
  modalImg.setAttribute('data-current-index', '0');
  modalImg.classList.add('gif-cycle');
  
  document.getElementById("modal-description").textContent = project.description;

  const featuresContainer = document.getElementById("modal-features");
  featuresContainer.innerHTML = project.features.map(f => `
    <div class="modal-feature-item">
      <span class="modal-feature-bullet"></span>
      <span>${escapeHtml(f)}</span>
    </div>
  `).join("");

  const techContainer = document.getElementById("modal-tech-list");
  techContainer.innerHTML = project.technologies.map(t => `
    <span class="tech-tag">${escapeHtml(t)}</span>
  `).join("");

  const actionsContainer = document.getElementById("modal-actions");
  let actionButtonsHtml = "";
  if (project.demo) {
    actionButtonsHtml += `
      <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
        Live Demo <span class="btn-arrow btn-arrow--diagonal"></span>
      </a>
    `;
  }
  if (project.github) {
    actionButtonsHtml += `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">
        Source Code <span class="btn-arrow btn-arrow--diagonal"></span>
      </a>
    `;
  }
  actionsContainer.innerHTML = actionButtonsHtml;

  const source = sourceItem?.querySelector(".project-image-container");
  const sourceRect = source?.getBoundingClientRect();

  modal.showModal();
  document.body.style.overflow = "hidden";

  const modalBody = modal.querySelector(".modal-body");
  if (modalBody) {
    modalBody.scrollTop = 0;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !sourceRect) {
    document.getElementById("modal-close-btn")?.focus();
    return;
  }

  const modalRect = modal.getBoundingClientRect();
  const sourceCenterX = sourceRect.left + sourceRect.width / 2;
  const sourceCenterY = sourceRect.top + sourceRect.height / 2;
  const modalCenterX = modalRect.left + modalRect.width / 2;
  const modalCenterY = modalRect.top + modalRect.height / 2;
  const moveX = sourceCenterX - modalCenterX;
  const moveY = sourceCenterY - modalCenterY;

  const startScale = Math.max(0.35, Math.min(0.85, sourceRect.width / modalRect.width));

  modal.classList.add("is-opening");
  const animation = modal.animate([
    {
      opacity: 0,
      transform: `translate(${moveX}px, ${moveY}px) scale(${startScale})`
    },
    {
      opacity: 1,
      transform: "translate(0, 0) scale(1)"
    }
  ], {
    duration: 500, 
    easing: "cubic-bezier(0.16, 1, 0.3, 1)"
  });

  animation.finished
    .catch(() => {})
    .finally(() => {
      animation.cancel(); 
      modal.classList.remove("is-opening");
      document.getElementById("modal-close-btn")?.focus();
    });
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal || !modal.open) return;
  if (modal.classList.contains("is-closing")) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const finishClose = () => {
    modal.close();
    modal.classList.remove("is-closing", "is-opening");
    document.body.style.overflow = "";
    if (activeModalTrigger) {
      activeModalTrigger.focus();
    }
  };

  if (reducedMotion) {
    finishClose();
    return;
  }

  modal.classList.add("is-closing");
  const animation = modal.animate([
    {
      opacity: 1,
      transform: "translateY(0) scale(1)"
    },
    {
      opacity: 0,
      transform: "translateY(18px) scale(0.96)"
    }
  ], {
    duration: 250,
    easing: "cubic-bezier(0.4, 0, 1, 1)"
  });

  animation.finished
    .catch(() => {})
    .finally(() => {
      finishClose(); 
      animation.cancel(); 
    });
}

// ---------------------------------------------------------------------------
// Remaining initialization (navigation, scroll animations, etc.)
// ---------------------------------------------------------------------------

function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  
  const progressBar = document.getElementById("scroll-progress-bar");
  const heroSpiral = document.querySelector(".hero-deco-spiral");

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

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenu.classList.toggle("is-open", !isExpanded);
    });

    mobileMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("is-open");
      });
    });
  }

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

function initScrollAnimations() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const allRevealable = document.querySelectorAll(
    ".reveal, .skill-category-card, .project-item, .about-visual-col, .about-content, .contact-links-grid, .about-image-wrapper"
  );

  if (reducedMotion || !("IntersectionObserver" in window)) {
    allRevealable.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const addChildStagger = (container) => {
    const children = container.querySelectorAll(".reveal, .contact-link-card, .pillar-item, .about-stat");
    children.forEach((child, i) => {
      if (!child.hasAttribute("data-delay")) {
        child.setAttribute("data-delay", String(i));
      }
    });
  };

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        } else {
          entry.target.classList.remove("is-revealed");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -5% 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  allRevealable.forEach(el => {
    if (!el.classList.contains("reveal") &&
        !el.classList.contains("project-item") &&
        !el.classList.contains("about-visual-col") &&
        !el.classList.contains("contact-links-grid") &&
        !el.classList.contains("about-image-wrapper")) {
      el.classList.add("reveal");
    }
    revealObserver.observe(el);
  });

  setTimeout(() => {
    document.querySelectorAll(".project-text-container .reveal").forEach(child => {
      revealObserver.observe(child);
    });
  }, 80);
}

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

function initGifCycling() {
  setInterval(() => {
    document.querySelectorAll('.gif-cycle').forEach(img => {
      const images = JSON.parse(img.getAttribute('data-images') || '[]');
      if (images.length > 1) {
        let idx = parseInt(img.getAttribute('data-current-index') || '0');
        idx = (idx + 1) % images.length;
        img.setAttribute('data-current-index', idx);
        img.src = images[idx];
      }
    });
  }, 3000);
}

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------------------------
// DOMContentLoaded – initialize everything
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderArtPortfolio();
  initNavigation();
  initModal();
  initScrollAnimations();
  initBackToTop();
  initGifCycling();
});
