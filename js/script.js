const projects = [
   {
    id: "PriorityTask",
    index: "02",
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
    demo: "https://prioritytask.onrender.com/"
  },
  {
    id: "nautilomation",
    index: "02",
    title: "Nautilomation",
    tagline: "Scalable discord automation tool",
    shortDescription: "A cloud hosted automation tool for discord. Built for reliability and convenience.",
    description: "This project is a lightweight, time-saving automation engine built on Node.js that eliminates manual, repetitive communication by automatically sending scheduled messages and monitoring Discord channels. Deployed on a Google Cloud Platform (GCP) Compute Engine VM to ensure 24/7 reliability, the system interacts directly with the Discord REST API using Axios to bypass heavy client libraries and keep hosting overhead minimal. Users can easily customize message payloads, target specific channels, and set precise delivery intervals. Additionally, the service features a response-detection system that listens for incoming chat triggers and automates follow-up workflows, saving server administrators hours of manual supervision.",
    features: [
      "Fully scalar and code free control panel",
      "Send different automatic messages in any discord channel",
      "Set different delays and autoresponse messages",
      "Custom whitelist for security" 
    ],
    technologies: ["JavaScript", "Node.js", "Axios API", "Discord REST API"],
    image: "./assets/projects/NM1.png",
    github: "https://github.com/nautilodaunt/Nautilomation/tree/main",
    demo: "https://discord.gg/xcQhbdkVJp"
  },
  
  {
    id: "Mining Simulator",
    index: "03",
    title: "Mining Simulator",
    tagline: "Mine ores and collect rare crystals.",
    shortDescription: "Game about progressing and mining rare materials in caves while avoiding monsters.",
    description: "WIP heres an example of the mining VFX",
    features: [
     "Amazing mining VFX",
     "Linear progression system that invokes satisfaction",
     "Novel exploration experience"
    ],
    technologies: ["Lua", "Roblox Studio", "Blender", "Remote Events"],
    image: [ "./assets/projects/MG2C.gif"],
    github: "",
    demo: "https://discord.gg/xcQhbdkVJp"
  }

 
];

// art prtflio
const artProjects = artworks.map((art, index) => ({
  ...art,
  id: `art-${index}`,
  index: String(index + 1).padStart(2, "0"),
  features: art.notes || [],
  technologies: art.tools || []
}));

// rendering funcs
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
              View Details <span class="link-arrow" aria-hidden="true">→</span>
            </button>
            ${item.github ? `
              <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="btn-text-link" aria-label="Source repository for ${escapeHtml(item.title)}">
                Code <span class="link-arrow" aria-hidden="true">↗</span>
              </a>
            ` : ""}
            ${item.demo ? `
              <a href="${item.demo}" target="_blank" rel="noopener noreferrer" class="btn-text-link" aria-label="Live demo for ${escapeHtml(item.title)}">
                Demo <span class="link-arrow" aria-hidden="true">↗</span>
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

function renderProjects() {
  renderPortfolio("projects-container", projects);
}

function renderArtPortfolio() {
  const gallery = document.getElementById("art-container");
  if (!gallery) return;
  const count = artProjects.length;
  document.getElementById("art-count").textContent = `${String(count).padStart(2, "0")} SELECTED WORKS`;
  if (!count) {
    gallery.hidden = true;
    document.querySelector(".art-gallery-footer").hidden = true;
    return;
  }

  // Each of three identical runs fills at least a viewport, even with one artwork.
  const repeats = Math.max(1, Math.ceil(4 / count));
  const run = Array.from({ length: repeats }, () => artProjects).flat();
  gallery.innerHTML = Array.from({ length: 3 }, (_, copy) => run.map((art, index) => `
    <button class="art-piece" type="button" data-art-index="${index % count}"
      ${copy === 1 && index < count ? "" : 'tabindex="-1" aria-hidden="true"'}
      aria-label="View details for ${escapeHtml(art.title)}" aria-haspopup="dialog">
      <img src="${escapeHtml(art.image)}" alt="${escapeHtml(art.alt || art.title)}" decoding="async" />
    </button>
  `).join("")).join("");

  const pieces = [...gallery.querySelectorAll(".art-piece")];
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let touching = false;
  let visible = false;
  let step = 0;
  let runWidth = 0;
  let lastTime = 0;
  let remainder = 0;
  let resumeAt = 0;
  const cruiseSpeed = 0.028; 
  let scrollDirection = 1;
  let speed = cruiseSpeed;
  let boostRemaining = 0;

  const measure = () => {
    step = pieces[1].getBoundingClientRect().left - pieces[0].getBoundingClientRect().left;
    runWidth = step * run.length;
    gallery.scrollLeft = runWidth;
  };
  const updatePosition = () => {

    if (gallery.scrollLeft < runWidth) gallery.scrollLeft += runWidth;
    else if (gallery.scrollLeft >= runWidth * 2) gallery.scrollLeft -= runWidth;
  };
  pieces.forEach(piece => piece.addEventListener("click", () => {
    openProjectModal(artProjects[Number(piece.dataset.artIndex)].id, piece);
  }));

  const move = (direction) => {
    resumeAt = performance.now() + 400;
    gallery.scrollLeft = (Math.round(gallery.scrollLeft / step) + direction) * step;
    updatePosition();
  };
  const accelerate = (direction) => {
    if (motion.matches) {
      move(direction);
      return;
    }
    scrollDirection = direction;
    boostRemaining = 1300;
    resumeAt = 0;
  };
  document.getElementById("art-prev").addEventListener("click", () => accelerate(-1));
  document.getElementById("art-next").addEventListener("click", () => accelerate(1));
  gallery.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home" || event.key === "End") {
      gallery.scrollLeft = runWidth + (event.key === "End" ? count - 1 : 0) * step;
      updatePosition();
    } else move(event.key === "ArrowRight" ? 1 : -1);
    if (event.target.matches(".art-piece")) {
      const index = Math.round((gallery.scrollLeft - runWidth) / step) % count;
      pieces[run.length + (index + count) % count].focus({ preventScroll: true });
    }
  });
  gallery.addEventListener("pointerdown", () => { touching = true; });
  window.addEventListener("pointerup", () => { touching = false; resumeAt = performance.now() + 400; });
  window.addEventListener("pointercancel", () => { touching = false; });
  gallery.addEventListener("wheel", () => { resumeAt = performance.now() + 400; }, { passive: true });
  gallery.addEventListener("scroll", updatePosition, { passive: true });
  new ResizeObserver(() => { measure(); updatePosition(); }).observe(gallery);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(gallery);

  const tick = (time) => {
    const elapsed = Math.min(time - lastTime, 50);
    lastTime = time;
    if (visible && !document.hidden && !motion.matches && !touching && time > resumeAt &&
        !gallery.querySelector(":focus-visible") && !gallery.matches(":focus-visible") && !document.getElementById("project-modal").open) {
      const boost = Math.min(1, boostRemaining / 900);
      const targetSpeed = scrollDirection * (cruiseSpeed + 0.48 * boost * boost);
      speed += (targetSpeed - speed) * (1 - Math.exp(-elapsed / 140));
      boostRemaining = Math.max(0, boostRemaining - elapsed);
      remainder += elapsed * speed;
      const pixels = Math.trunc(remainder);
      remainder -= pixels;
      gallery.scrollLeft += pixels;
    }
    requestAnimationFrame(tick);
  };
  measure();
  updatePosition();
  requestAnimationFrame(tick);
}

//modals
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
  activeModalTrigger = sourceItem?.matches(".art-piece") ? sourceItem : document.activeElement;
  const isArt = artProjects.includes(project);
  modal.classList.toggle("art-detail", isArt);
  document.getElementById("modal-features-title").textContent = isArt ? "Piece notes" : "Key Architectural Features";
  document.getElementById("modal-tools-title").textContent = isArt ? "Tools & medium" : "Technologies";
  document.getElementById("modal-close-btn").setAttribute("aria-label", isArt ? "Close artwork details" : "Close project details");

  document.getElementById("modal-index").textContent = `${project.index} // ARCHIVE`;
  document.getElementById("modal-title").textContent = project.title;
  
  const modalImg = document.getElementById("modal-image");
  const imageSrc = Array.isArray(project.image) ? project.image[0] : project.image;
  const imagesData = Array.isArray(project.image) ? JSON.stringify(project.image) : JSON.stringify([project.image]);
  
  modalImg.src = imageSrc;
  modalImg.alt = isArt ? project.title : `${project.title} screenshot`;
  modalImg.setAttribute('data-images', imagesData);
  modalImg.setAttribute('data-current-index', '0');
  modalImg.classList.add('gif-cycle');
  
  document.getElementById("modal-description").textContent = project.description;

  const featuresContainer = document.getElementById("modal-features");
  featuresContainer.parentElement.hidden = !project.features.length;
  featuresContainer.innerHTML = project.features.map(f => `
    <div class="modal-feature-item">
      <span class="modal-feature-bullet"></span>
      <span>${escapeHtml(f)}</span>
    </div>
  `).join("");

  const techContainer = document.getElementById("modal-tech-list");
  techContainer.parentElement.hidden = !project.technologies.length;
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

  const source = isArt ? sourceItem : sourceItem?.querySelector(".project-image-container");
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

//nav scroll anims etc
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  
  const progressBar = document.getElementById("scroll-progress-bar");
  const heroSpiral = document.querySelector(".hero-deco-spiral");
  const portraitFade = document.querySelector(".intro-portrait-fade");

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroSpiral.style.transform = "translate(-50%, -50%)";
      return;
    }
    if (window.scrollY < window.innerHeight * 1.6) {
      const rot = window.scrollY * 0.07;
      const yShift = Math.min(24, window.scrollY * 0.04);
      const scale = Math.max(0.88, 1 - (window.scrollY * 0.00025));
      heroSpiral.style.transform = `translate(-50%, calc(-50% + ${yShift}px)) rotate(${rot}deg) scale(${scale})`;
    }
  };

  const updatePortraitFade = () => {
    if (!portraitFade) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      portraitFade.style.opacity = "";
      return;
    }

    const bottom = portraitFade.getBoundingClientRect().bottom;
    const fadeStart = window.innerHeight * 0.55;
    const fadeDistance = window.innerHeight * 0.4;
    const progress = Math.min(1, Math.max(0, (fadeStart - bottom) / fadeDistance));
    portraitFade.style.opacity = String(1 - progress);
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
        updatePortraitFade();
        updateScrollParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });
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
//load all

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderArtPortfolio();
  initNavigation();
  initModal();
  initScrollAnimations();
  initBackToTop();
  initGifCycling();
});
