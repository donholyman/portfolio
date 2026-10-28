/* PERSONALIZE YOUR WEBSITE HERE. Edit the values below and save. */
const portfolio = {
  name: "Your Name",
  role: "Web Developer",
  description: "I'm a passionate developer and creative problem-solver building purposeful, beautiful, and intuitive digital products.",
  email: "hello@example.com", // Replace with your real email before publishing.
  github: "https://github.com/donholyman",
  linkedin: "https://www.linkedin.com/", // Replace with your LinkedIn profile link.
  profilePhoto: "assets/profile.svg", // Add your photo inside assets/, e.g. assets/me.jpg
  about1: "I'm a developer who loves transforming ideas into practical, elegant solutions. I care about clean interfaces, smooth experiences, and the little details that make products memorable.",
  about2: "Whether it's a learning platform, a business website, or a custom web application, my approach is simple: understand the problem, craft a thoughtful solution, and keep improving.",
  projects: [
    { number: "01", name: "Viva Learning Management System", type: "WEB APPLICATION", summary: "A learning management project designed to make education more organized, accessible, and interactive.", tags: ["PHP", "MySQL", "HTML / CSS"], theme: "violet", icon: "◈", link: "https://github.com/donholyman/viva-lms" },
    { number: "02", name: "Your Next Project", type: "FEATURED CONCEPT", summary: "Replace this card with another website, dashboard, mobile concept, or product you've built.", tags: ["Web Design", "Frontend"], theme: "blue", icon: "⌘", link: "" },
    { number: "03", name: "Something Remarkable", type: "PERSONAL EXPERIMENT", summary: "Showcase your creative experiments, school projects, or real client work here.", tags: ["Creative", "Development"], theme: "peach", icon: "✳", link: "" }
  ]
};
const byId = id => document.getElementById(id);
const setText = (id, text) => { const el = byId(id); if(el) el.textContent = text; };
setText("heroFirstName", portfolio.name.toUpperCase());
setText("profileRole", portfolio.role);
setText("heroDescription", portfolio.description);
setText("aboutParagraph1", portfolio.about1);
setText("aboutParagraph2", portfolio.about2);
setText("copyrightName", portfolio.name);
setText("year", new Date().getFullYear());
byId("profileImage").src = portfolio.profilePhoto;
byId("profileImage").alt = `Profile image for ${portfolio.name}`;
for (const id of ["githubLinkTop", "githubLinkWork", "githubLinkFooter"]) byId(id).href = portfolio.github;
for (const id of ["linkedinLinkTop", "linkedinLinkFooter"]) byId(id).href = portfolio.linkedin;
byId("emailButton").href = `mailto:${portfolio.email}?subject=${encodeURIComponent("Let's work together")}`;
byId("emailText").href = `mailto:${portfolio.email}`;
setText("emailText", portfolio.email);
const grid = byId("projectsGrid");
for (const p of portfolio.projects) {
  const card = document.createElement("article");
  card.className = `project-card theme-${p.theme}`;
  const safeTags = p.tags.map(t => `<span>${escapeHTML(t)}</span>`).join("");
  const link = p.link ? `<a href="${escapeAttribute(p.link)}" target="_blank" rel="noopener noreferrer" class="project-arrow" aria-label="View ${escapeAttribute(p.name)}">↗</a>` : `<span class="project-arrow muted-arrow" title="Add a project URL in script.js">↗</span>`;
  card.innerHTML = `<div class="project-art"><span class="art-number">${escapeHTML(p.number)} / 03</span><div class="art-decoration">${escapeHTML(p.icon)}</div><span class="art-caption">DESIGNED TO MAKE AN IMPACT</span></div><div class="project-bottom"><div class="project-type">${escapeHTML(p.type)}</div><div class="project-title-row"><h3>${escapeHTML(p.name)}</h3>${link}</div><p>${escapeHTML(p.summary)}</p><div class="chips">${safeTags}</div></div>`;
  grid.appendChild(card);
}
function escapeHTML(text) {return String(text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function escapeAttribute(text) {return escapeHTML(text);}
const menu = byId("menuToggle"), nav = byId("siteNav");
menu.addEventListener("click", () => { const opened = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(opened)); menu.setAttribute("aria-label", opened ? "Close navigation" : "Open navigation"); });
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false");}));
