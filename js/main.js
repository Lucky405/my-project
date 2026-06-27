/* ===========================================================
   MAIN.JS — site behavior. You shouldn't need to edit this
   file; update js/content.js instead to change your content.
   =========================================================== */

(function () {
  "use strict";

  const c = window.SITE_CONTENT || {};

  /* ---------- inject identity / hero text ---------- */
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  document.title = `Signal — ${c.name || "Portfolio"}`;
  setText("siteName", c.name);
  setText("footerName", c.name);
  setText("metaFocus", c.focusArea);
  setText("metaLocation", c.location);
  setText("heroSub", c.heroIntro);

  const brandTag = document.querySelector(".brand__tag");
  if (brandTag && c.tagline) brandTag.textContent = c.tagline;

  const linkEmail = document.getElementById("linkEmail");
  if (linkEmail && c.email) linkEmail.href = `mailto:${c.email}`;
  const linkGithub = document.getElementById("linkGithub");
  if (linkGithub && c.github) linkGithub.href = c.github;
  const linkLinkedin = document.getElementById("linkLinkedin");
  if (linkLinkedin && c.linkedin) linkLinkedin.href = c.linkedin;

  const lastUpdated = document.getElementById("lastUpdated");
  if (lastUpdated) {
    lastUpdated.textContent = new Date().toLocaleDateString(undefined, {
      year: "numeric", month: "short", day: "numeric"
    });
  }

  /* ---------- ABOUT ---------- */
  if (c.about) {
    const aboutContent = document.getElementById("aboutContent");
    if (aboutContent && Array.isArray(c.about.paragraphs)) {
      aboutContent.innerHTML = c.about.paragraphs.map(p => `<p>${p}</p>`).join("");
    }
    const skillList = document.querySelector("#skillStrip .skill-list");
    if (skillList && Array.isArray(c.about.skills)) {
      skillList.innerHTML = c.about.skills.map(s => `<li>${escapeHtml(s)}</li>`).join("");
    }
  }

  /* ---------- ACTIVITIES (grouped by category) & AWARDS (grouped by tier) ---------- */
  function entryCardHTML(item) {
    return `
      <article class="entry-card">
        <h3 class="entry-card__title">${escapeHtml(item.title || "")}</h3>
        ${item.period ? `<span class="entry-card__period">${escapeHtml(item.period)}</span>` : ""}
        ${item.org ? `<p class="entry-card__org">${escapeHtml(item.org)}</p>` : ""}
        ${item.description ? `<p class="entry-card__desc">${escapeHtml(item.description)}</p>` : ""}
        ${Array.isArray(item.tags) && item.tags.length
          ? `<div class="entry-card__tags">${item.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>`
          : ""}
      </article>
    `;
  }

  function renderCategoryGroups(containerId, groups) {
    const el = document.getElementById(containerId);
    if (!el || !Array.isArray(groups)) return;
    el.innerHTML = groups.map(group => `
      <div class="category-group">
        <div class="category-group__head">
          <span class="category-group__label">${escapeHtml(group.label || "")}</span>
          <span class="category-group__rule"></span>
        </div>
        <div class="entry-list">
          ${(group.items || []).map(entryCardHTML).join("")}
        </div>
      </div>
    `).join("");
  }
  renderCategoryGroups("activitiesList", c.activityCategories);
  renderCategoryGroups("awardsList", c.awardTiers);

  /* ---------- AWARD STATS STRIP ---------- */
  const awardStatsEl = document.getElementById("awardStats");
  if (awardStatsEl && Array.isArray(c.awardStats)) {
    awardStatsEl.innerHTML = c.awardStats.map(s => `
      <div class="stat-card">
        <span class="stat-card__value">${escapeHtml(s.value)}</span>
        <span class="stat-card__label">${escapeHtml(s.label)}</span>
      </div>
    `).join("");
  }

  /* ---------- RESEARCH ---------- */
  const researchEl = document.getElementById("researchList");
  if (researchEl && Array.isArray(c.research)) {
    researchEl.innerHTML = c.research.map(r => `
      <article class="research-card">
        <div class="research-card__top">
          <h3 class="research-card__title">${escapeHtml(r.title || "")}</h3>
          ${r.status ? `<span class="research-card__status${r.status === "Ongoing" ? " research-card__status--ongoing" : ""}">${escapeHtml(r.status)}</span>` : ""}
        </div>
        ${r.org ? `<p class="research-card__meta">${escapeHtml(r.org)}</p>` : ""}
        <p class="research-card__role">${escapeHtml([r.role, r.period].filter(Boolean).join(" · "))}</p>
        ${r.summary ? `<p class="research-card__summary">${escapeHtml(r.summary)}</p>` : ""}
        ${Array.isArray(r.details) && r.details.length
          ? `<ul class="research-card__details">${r.details.map(d => `<li>${escapeHtml(d)}</li>`).join("")}</ul>`
          : ""}
        ${Array.isArray(r.tags) && r.tags.length
          ? `<div class="research-card__tags">${r.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>`
          : ""}
      </article>
    `).join("");
  }


  /* ---------- EDUCATION (timeline renderer) ---------- */
  function renderTimeline(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el || !Array.isArray(items)) return;
    el.innerHTML = items.map(item => `
      <div class="timeline-item">
        ${item.period ? `<div class="timeline-item__period">${escapeHtml(item.period)}</div>` : ""}
        <h3 class="timeline-item__title">${escapeHtml(item.title || "")}</h3>
        ${item.org ? `<p class="timeline-item__org">${escapeHtml(item.org)}</p>` : ""}
        ${item.description ? `<p class="timeline-item__desc">${escapeHtml(item.description)}</p>` : ""}
        ${Array.isArray(item.courses) && item.courses.length
          ? `<div class="timeline-item__courses">${item.courses.map(x => `<span>${escapeHtml(x)}</span>`).join("")}</div>`
          : ""}
      </div>
    `).join("");
  }
  renderTimeline("educationList", c.education);

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* ---------- TAB SWITCHING ---------- */
  const tabButtons = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  function activateTab(name, opts) {
    opts = opts || {};
    tabButtons.forEach(btn => {
      const isActive = btn.dataset.tab === name;
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    panels.forEach(panel => {
      const isActive = panel.dataset.panel === name;
      panel.classList.toggle("panel--hidden", !isActive);
      if (isActive) {
        panel.style.animation = "none";
        requestAnimationFrame(() => { panel.style.animation = ""; });
      }
    });
    if (!opts.skipHash) {
      history.replaceState(null, "", `#${name}`);
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      activateTab(btn.dataset.tab);
      if (btn.dataset.tab === "blog") {
        document.dispatchEvent(new CustomEvent("blog:show-list"));
      }
    });
  });

  // Deep-link support: visiting site#awards opens that tab directly.
  const initialHash = window.location.hash.replace("#", "");
  const validTabs = Array.from(tabButtons).map(b => b.dataset.tab);
  if (validTabs.includes(initialHash)) {
    activateTab(initialHash, { skipHash: true });
  }

  /* ---------- BLOG SYSTEM (posts.js-backed, code-generating editor) ---------- */
  (function initBlog() {
    const blogList = document.getElementById("blogList");
    const blogReader = document.getElementById("blogReader");
    const blogEditor = document.getElementById("blogEditor");
    const blogCodeOut = document.getElementById("blogCodeOut");
    const blogReaderArticle = document.getElementById("blogReaderArticle");
    const newPostBtn = document.getElementById("newPostBtn");
    const editorTitle = document.getElementById("editorTitle");
    const editorDeck = document.getElementById("editorDeck");
    const editorBody = document.getElementById("editorBody");
    const fontSelect = document.getElementById("fontSelect");
    const publishBtn = document.getElementById("publishBtn"); // now "Generate Code"
    const editorCancelBtn = document.getElementById("editorCancelBtn");
    const blogBackBtn = document.getElementById("blogBackBtn");
    const codeOutBackBtn = document.getElementById("codeOutBackBtn");
    const codeOutBlock = document.getElementById("codeOutBlock");
    const copyCodeBtn = document.getElementById("copyCodeBtn");
    const formatBar = document.querySelector(".blog-editor__formatbar");

    if (!blogList) return; // blog markup not present

    function getPosts() {
      return Array.isArray(window.SITE_POSTS) ? window.SITE_POSTS : [];
    }
    function formatDate(iso) {
      return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    }
    function excerptFrom(html) {
      const tmp = document.createElement("div");
      tmp.innerHTML = html;
      return (tmp.textContent || "").trim().slice(0, 160);
    }

    const ALL_VIEWS = [blogList, blogReader, blogEditor, blogCodeOut];
    function showView(view) {
      ALL_VIEWS.forEach(el => el && el.classList.add("panel--hidden"));
      const toolbar = document.querySelector(".blog-toolbar");
      if (toolbar) toolbar.style.display = view === "list" ? "flex" : "none";
      if (view === "list" && blogList) blogList.classList.remove("panel--hidden");
      if (view === "reader" && blogReader) blogReader.classList.remove("panel--hidden");
      if (view === "editor" && blogEditor) blogEditor.classList.remove("panel--hidden");
      if (view === "codeout" && blogCodeOut) blogCodeOut.classList.remove("panel--hidden");
    }

    function renderList() {
      const posts = getPosts().slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      if (!posts.length) {
        blogList.innerHTML = `
          <div class="blog-empty">
            <p>No posts yet. Your first entry is one click away.</p>
            <button class="btn-primary" id="emptyNewPostBtn">+ Write your first post</button>
          </div>`;
        const btn = document.getElementById("emptyNewPostBtn");
        if (btn) btn.addEventListener("click", openEditor);
        return;
      }
      blogList.innerHTML = posts.map(p => `
        <article class="post-card" data-id="${p.id}">
          <span class="post-card__date">${formatDate(p.date)}</span>
          <h3 class="post-card__title">${escapeHtml(p.title)}</h3>
          ${p.deck ? `<p class="post-card__deck">${escapeHtml(p.deck)}</p>` : ""}
          <p class="post-card__excerpt">${escapeHtml(excerptFrom(p.body))}</p>
        </article>
      `).join("");
    }

    function openReader(id) {
      const post = getPosts().find(p => p.id === id);
      if (!post) return;
      blogReaderArticle.innerHTML = `
        <h1 class="post-title">${escapeHtml(post.title)}</h1>
        ${post.deck ? `<p class="post-deck">${escapeHtml(post.deck)}</p>` : ""}
        <span class="post-date">${formatDate(post.date)}</span>
        <div class="post-body ${post.font || "font-serif"}">${post.body}</div>
      `;
      showView("reader");
    }

    function openEditor() {
      editorTitle.value = "";
      editorDeck.value = "";
      editorBody.innerHTML = "";
      fontSelect.value = "font-serif";
      editorBody.className = "blog-editor__body font-serif";
      showView("editor");
      editorTitle.focus();
    }

    // Turns the current editor contents into a paste-ready JS object
    // literal for js/posts.js. This is the "publish" step now — the
    // user copies this and commits it themselves.
    function buildPostCodeBlock() {
      const title = editorTitle.value.trim();
      const deck = editorDeck.value.trim();
      const body = editorBody.innerHTML.trim();
      const font = fontSelect.value;
      const id = "post_" + Date.now();
      const nowIso = new Date().toISOString();

      // JSON.stringify safely escapes quotes/newlines/HTML for us.
      const block =
`  {
    id: ${JSON.stringify(id)},
    title: ${JSON.stringify(title)},
    deck: ${JSON.stringify(deck)},
    date: ${JSON.stringify(nowIso)},
    font: ${JSON.stringify(font)},
    body: ${JSON.stringify(body)}
  },`;
      return block;
    }

    blogList.addEventListener("click", (e) => {
      const card = e.target.closest(".post-card");
      if (card) openReader(card.dataset.id);
    });

    if (newPostBtn) newPostBtn.addEventListener("click", openEditor);
    if (blogBackBtn) blogBackBtn.addEventListener("click", () => { renderList(); showView("list"); });
    if (editorCancelBtn) editorCancelBtn.addEventListener("click", () => { renderList(); showView("list"); });
    if (codeOutBackBtn) codeOutBackBtn.addEventListener("click", () => showView("editor"));

    if (fontSelect) {
      fontSelect.addEventListener("change", () => {
        editorBody.className = "blog-editor__body " + fontSelect.value;
      });
    }

    if (formatBar) {
      formatBar.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-cmd]");
        if (!btn) return;
        editorBody.focus();
        const cmd = btn.dataset.cmd;
        const val = btn.dataset.value || null;
        document.execCommand(cmd, false, val);
      });
    }

    if (publishBtn) {
      publishBtn.addEventListener("click", () => {
        const title = editorTitle.value.trim();
        const body = editorBody.innerHTML.trim();
        if (!title || !body) {
          editorTitle.focus();
          return;
        }
        codeOutBlock.textContent = buildPostCodeBlock();
        showView("codeout");
      });
    }

    if (copyCodeBtn) {
      copyCodeBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(codeOutBlock.textContent);
          copyCodeBtn.textContent = "Copied!";
          setTimeout(() => { copyCodeBtn.textContent = "Copy"; }, 1800);
        } catch (e) {
          // Clipboard API unavailable (e.g. insecure context) — select text as fallback.
          const range = document.createRange();
          range.selectNodeContents(codeOutBlock);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      });
    }

    document.addEventListener("blog:show-list", () => { renderList(); showView("list"); });

    renderList();
    showView("list");
  })();

  const themeToggle = document.getElementById("themeToggle");
  const STORAGE_KEY = "signal-theme";

  function applyTheme(mode) {
    document.body.classList.toggle("mode-light", mode === "light");
  }
  const savedTheme = window.localStorage ? localStorage.getItem(STORAGE_KEY) : null;
  if (savedTheme) applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.body.classList.contains("mode-light") ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage unavailable */ }
    });
  }

  /* ---------- HERO GRAPHIC: animated molecular / graph network ---------- */
  const heroGraphic = document.getElementById("heroGraphic");
  if (heroGraphic) {
    // Stylized node-graph: reads as both a molecule and a neural network —
    // ties directly to the GNN / molecular-binding research subject matter.
    const nodes = [
      { x: 100, y: 40,  r: 7,  cls: "" },
      { x: 165, y: 75,  r: 9,  cls: "graph-node--active" },
      { x: 60,  y: 90,  r: 6,  cls: "" },
      { x: 130, y: 130, r: 11, cls: "graph-node--active" },
      { x: 195, y: 150, r: 6,  cls: "" },
      { x: 55,  y: 165, r: 7,  cls: "graph-node--alert" },
      { x: 110, y: 200, r: 6,  cls: "" },
      { x: 175, y: 215, r: 8,  cls: "graph-node--active" },
      { x: 35,  y: 230, r: 5,  cls: "" }
    ];
    const edges = [
      [0,1,true],[0,2,false],[1,3,true],[2,3,false],[3,4,true],
      [3,5,false],[4,7,true],[5,6,false],[6,7,true],[6,8,false],[1,4,false]
    ];
    const edgeLines = edges.map(([a,b,live]) => {
      const n1 = nodes[a], n2 = nodes[b];
      return `<line class="graph-edge${live ? " graph-edge--live" : ""}" x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" />`;
    }).join("");
    const nodeCircles = nodes.map(n =>
      `<circle class="graph-node ${n.cls}" cx="${n.x}" cy="${n.y}" r="${n.r}" />`
    ).join("");
    const pulses = [
      `<circle class="graph-pulse" cx="165" cy="75" r="20" />`,
      `<circle class="graph-pulse delay-1" cx="130" cy="130" r="22" />`,
      `<circle class="graph-pulse delay-2" cx="175" cy="215" r="18" />`
    ].join("");

    heroGraphic.innerHTML = `
      <svg viewBox="0 0 230 250" xmlns="http://www.w3.org/2000/svg">
        ${edgeLines}
        ${pulses}
        ${nodeCircles}
        <text class="graph-label" x="100" y="22">BINDING AFFINITY MODEL</text>
      </svg>
    `;
  }

  /* ---------- HERO WAVEFORM DRAW-IN ---------- */
  const bgPath = document.querySelector(".bg-trace__path");
  if (bgPath && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const len = bgPath.getTotalLength();
    bgPath.style.strokeDasharray = `${len}`;
    bgPath.style.strokeDashoffset = `${len}`;
    bgPath.style.transition = "stroke-dashoffset 2.4s ease-out";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { bgPath.style.strokeDashoffset = "0"; });
    });
  }
})();
