const data = window.PORTFOLIO_DATA;
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const externalAttrs = 'target="_blank" rel="noopener noreferrer"';
const isMail = (url) => url.startsWith("mailto:");
const linkAttrs = (url) => isMail(url) ? "" : externalAttrs;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function iconFor(label) {
  const key = label.toLowerCase();
  if (key.includes("email") || key.includes("reference")) return "✉";
  if (key.includes("linkedin")) return "in";
  if (key.includes("github")) return "GH";
  if (key.includes("orcid")) return "iD";
  if (key.includes("researchgate")) return "RG";
  return "↗";
}

function renderSocials() {
  const hero = document.getElementById("hero-socials");
  const contact = document.getElementById("contact-links");
  const items = data.socials.map((item) => `
    <a class="social-chip" href="${escapeHtml(item.url)}" ${linkAttrs(item.url)} aria-label="${escapeHtml(item.label)}">
      <span>${escapeHtml(iconFor(item.label))}</span>${escapeHtml(item.label)}
    </a>
  `).join("");
  hero.innerHTML = items;
  contact.innerHTML = items;
}

function renderStats() {
  const mini = document.getElementById("mini-stats");
  const quick = document.getElementById("quick-stats");
  const html = data.stats.map((stat) => `
    <div class="stat-card">
      <strong>${escapeHtml(stat.value)}</strong>
      <span>${escapeHtml(stat.label)}</span>
    </div>
  `).join("");
  mini.innerHTML = html;
  quick.innerHTML = html;
}

function renderAbout() {
  document.getElementById("about-text").textContent = data.about;
  document.getElementById("research-interests").innerHTML = data.researchInterests.map((item) => `
    <span class="pill">${escapeHtml(item)}</span>
  `).join("");
}

function renderExperience() {
  document.getElementById("experience-list").innerHTML = data.experience.map((item) => `
    <article class="timeline-item reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="item-header">
          <div>
            <h3>${escapeHtml(item.role)}</h3>
            <p>${escapeHtml(item.company)}</p>
          </div>
          <span>${escapeHtml(item.period)}</span>
        </div>
        <ul>${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function renderActiveResearch() {
  document.getElementById("active-research").innerHTML = data.activeResearch.map((item) => `
    <article class="feature-card">
      <div class="status-badge">${escapeHtml(item.status)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <span class="note">${escapeHtml(item.note)}</span>
    </article>
  `).join("");
}

function renderPublications() {
  document.getElementById("publication-list").innerHTML = data.publications.map((item) => `
    <article class="work-card reveal">
      <div class="card-meta"><span>${escapeHtml(item.type)}</span><span>${escapeHtml(item.date)}</span></div>
      <h3>${escapeHtml(item.title)}</h3>
      <a class="text-link" href="${escapeHtml(item.url)}" ${linkAttrs(item.url)}>View publication ↗</a>
    </article>
  `).join("");
}

function renderProjects() {
  document.getElementById("project-list").innerHTML = data.projects.map((project) => `
    <article class="work-card reveal">
      <div class="card-meta"><span>${escapeHtml(project.meta)}</span></div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="tag-row">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderSkills() {
  document.getElementById("skill-groups").innerHTML = data.skills.map((group) => `
    <article class="skill-group">
      <h3>${escapeHtml(group.group)}</h3>
      <div class="pill-grid">${group.items.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderCertifications() {
  document.getElementById("certification-list").innerHTML = data.certifications.map((cert, index) => `
    <article class="cert-item reveal">
      <span class="cert-number">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${escapeHtml(cert.title)}</h3>
        <p>${escapeHtml(cert.provider)}</p>
      </div>
      <a class="btn small" href="${escapeHtml(cert.url)}" ${linkAttrs(cert.url)}>Verify Certificate ↗</a>
    </article>
  `).join("");
}

function renderAwards() {
  document.getElementById("award-list").innerHTML = data.awards.map((award) => `
    <article class="award-card reveal">
      <h3>${escapeHtml(award.title)}</h3>
      <p>${escapeHtml(award.description)}</p>
      <span>${escapeHtml(award.organization)} • ${escapeHtml(award.date)}</span>
    </article>
  `).join("");
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderSocials();
renderStats();
renderAbout();
renderExperience();
renderActiveResearch();
renderPublications();
renderProjects();
renderSkills();
renderCertifications();
renderAwards();
setupNav();
setupReveal();
