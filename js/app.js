/**
 * Claude Code Tutorial — App Logic
 * Hash router, i18n, content renderer, cookie consent, search
 */
(function () {
  'use strict';

  const SITE_NAME = 'Claude Code Tutorial';
  const DEFAULT_LANG = 'en';
  const SUPPORTED_LANGS = ['en', 'zh'];

  // ——— Language ——————————————————————————————————

  function getLang() {
    var stored = localStorage.getItem('claude-tutorial-lang');
    if (stored && SUPPORTED_LANGS.indexOf(stored) !== -1) return stored;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem('claude-tutorial-lang', lang);
    applyLang(lang);
    renderPage();
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.setAttribute('data-lang', lang);

    // Update lang switcher
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      var val = opt.getAttribute('data-lang-val');
      opt.classList.toggle('lang-active', val === lang);
    });

    // Update all [data-i18n] elements in UI chrome
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        if (I18N[lang][key].indexOf('<') !== -1) {
          el.innerHTML = I18N[lang][key];
        } else {
          el.textContent = I18N[lang][key];
        }
      }
    });

    // Update meta tags
    if (I18N[lang]) {
      document.title = I18N[lang].site_name + ' — ' + I18N[lang].site_tagline;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && I18N[lang].meta_description) {
        metaDesc.setAttribute('content', I18N[lang].meta_description);
      }
    }
  }

  // Lang switcher click
  document.getElementById('langSwitch').addEventListener('click', function () {
    var current = getLang();
    var next = current === 'en' ? 'zh' : 'en';
    setLang(next);
  });

  // ——— Hash Router ———————————————————————————————

  function getHash() {
    var hash = window.location.hash;
    if (!hash) return '';
    return hash.replace('#', '').split('?')[0];
  }

  function navigateTo(hash) {
    window.location.hash = hash;
  }

  function getContentBySlug(slug) {
    for (var i = 0; i < CONTENT.length; i++) {
      if (CONTENT[i].slug === slug) return CONTENT[i];
    }
    return null;
  }

  function getCategoryBySlug(slug) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].slug === slug) return CATEGORIES[i];
    }
    return null;
  }

  function getContentIndex(slug) {
    for (var i = 0; i < CONTENT.length; i++) {
      if (CONTENT[i].slug === slug) return i;
    }
    return -1;
  }

  // ——— Render ——————————————————————————————————————

  var appEl = document.getElementById('app');

  function renderPage() {
    var hash = getHash();
    var lang = getLang();

    if (!hash) {
      renderHome(lang);
    } else if (hash === 'about') {
      window.location.href = 'about.html';
    } else if (hash === 'privacy') {
      window.location.href = 'privacy.html';
    } else if (hash === 'terms') {
      window.location.href = 'terms.html';
    } else if (hash.indexOf('category-') === 0) {
      var catSlug = hash.replace('category-', '');
      renderCategory(catSlug, lang);
    } else if (hash === 'all-lessons') {
      renderHome(lang);
      scrollToAnchor('all-lessons');
    } else {
      renderContent(hash, lang);
    }
  }

  function scrollToAnchor(id) {
    setTimeout(function () {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function renderHome(lang) {
    var t = I18N[lang];

    // Build category section
    var catCards = '';
    CATEGORIES.forEach(function (cat) {
      var catName = lang === 'zh' ? cat.zh : cat.en;
      var count = 0;
      CONTENT.forEach(function (c) {
        if (c.category === cat.slug) count++;
      });

      catCards += '' +
        '<a href="#category-' + cat.slug + '" class="category-card" onclick="event.preventDefault();document.querySelector(\'#app\').setAttribute(\'data-nav\',\'category-' + cat.slug + '\');window.location.hash=\'category-' + cat.slug + '\';">' +
        '  <div class="category-card-icon">' + cat.icon + '</div>' +
        '  <h3>' + catName + '</h3>' +
        '  <p>' + count + ' ' + (lang === 'zh' ? '节课程' : 'lessons') + '</p>' +
        '</a>';
    });

    // Build all content cards
    var allCards = '';
    CONTENT.forEach(function (page) {
      var p = lang === 'zh' ? page.zh : page.en;
      var cat = getCategoryBySlug(page.category);
      var catName = lang === 'zh' ? cat.zh : cat.en;

      allCards += '' +
        '<a href="#' + page.slug + '" class="content-card" data-category="' + page.category + '" data-search="' + escAttr(p.title + ' ' + p.summary + ' ' + catName) + '">' +
        '  <div class="content-card-category">' + catName + '</div>' +
        '  <h3>' + p.title + '</h3>' +
        '  <p>' + p.summary + '</p>' +
        '</a>';
    });

    appEl.innerHTML = '' +
      // Hero
      '<header class="hero" id="hero">' +
      '  <div class="hero-badge" data-i18n="hero_badge">' + t.hero_badge + '</div>' +
      '  <h1 data-i18n="hero_title">' + t.hero_title + '</h1>' +
      '  <p class="hero-subtitle" data-i18n="hero_subtitle">' + t.hero_subtitle + '</p>' +
      '  <div class="hero-buttons">' +
      '    <a href="#category-getting-started" class="btn btn-primary" data-i18n="hero_cta">' + t.hero_cta + '</a>' +
      '    <a href="#all-lessons" class="btn btn-secondary" data-i18n="hero_browse">' + t.hero_browse + '</a>' +
      '  </div>' +
      '  <div class="hero-stats">' +
      '    <div class="hero-stat"><strong>32</strong><span>' + t.hero_stat1_label + '</span></div>' +
      '    <div class="hero-stat"><strong>' + t.hero_stat2_label + '</strong><span>No Sign-up</span></div>' +
      '    <div class="hero-stat"><strong>' + t.hero_stat3_label + '</strong><span>' + t.hero_stat4_label + '</span></div>' +
      '  </div>' +
      '</header>' +

      // Categories
      '<section class="section" id="all-lessons">' +
      '  <div class="container">' +
      '    <h2 class="section-title" data-i18n="home_categories_title">' + t.home_categories_title + '</h2>' +
      '    <p class="section-lead" data-i18n="home_categories_lead">' + t.home_categories_lead + '</p>' +
      '    <div class="category-grid">' + catCards + '</div>' +
      '  </div>' +
      '</section>' +

      // All lessons with search
      '<section class="section">' +
      '  <div class="container">' +
      '    <h2 class="section-title" data-i18n="home_all_title">' + t.home_all_title + '</h2>' +
      '    <p class="section-lead" data-i18n="home_all_lead">' + t.home_all_lead + '</p>' +
      '    <div class="search-wrap">' +
      '      <input type="text" class="search-input" id="searchInput" placeholder="' + t.search_placeholder + '" autocomplete="off">' +
      '    </div>' +
      '    <div class="content-grid" id="contentGrid">' + allCards + '</div>' +
      '    <p style="display:none;text-align:center;color:var(--text-muted);margin-top:32px" id="noResults" data-i18n="search_no_results">' + t.search_no_results + '</p>' +
      '  </div>' +
      '</section>';

    // Bind search
    bindSearch(lang);
  }

  function renderCategory(catSlug, lang) {
    var cat = getCategoryBySlug(catSlug);
    var t = I18N[lang];

    if (!cat) {
      renderHome(lang);
      return;
    }

    var catName = lang === 'zh' ? cat.zh : cat.en;
    var pages = [];
    CONTENT.forEach(function (p) {
      if (p.category === catSlug) pages.push(p);
    });

    var cards = '';
    pages.forEach(function (page) {
      var p = lang === 'zh' ? page.zh : page.en;
      cards += '' +
        '<a href="#' + page.slug + '" class="content-card">' +
        '  <div class="content-card-category">' + catName + '</div>' +
        '  <h3>' + p.title + '</h3>' +
        '  <p>' + p.summary + '</p>' +
        '</a>';
    });

    appEl.innerHTML = '' +
      '<section class="section" style="padding-top:120px">' +
      '  <div class="container">' +
      '    <h2 class="section-title">' + cat.icon + ' ' + catName + '</h2>' +
      '    <p class="section-lead">' + pages.length + ' ' + (lang === 'zh' ? '节课程' : 'lessons') + '</p>' +
      '    <p style="text-align:center;margin-bottom:32px"><a href="#" class="btn btn-secondary btn-sm" onclick="window.location.hash=\'\';return false">' + t.back_to_lessons + '</a></p>' +
      '    <div class="content-grid">' + cards + '</div>' +
      '  </div>' +
      '</section>';
  }

  function renderContent(slug, lang) {
    var page = getContentBySlug(slug);
    var t = I18N[lang];

    if (!page) {
      renderHome(lang);
      return;
    }

    var p = lang === 'zh' ? page.zh : page.en;
    var cat = getCategoryBySlug(page.category);
    var catName = cat ? (lang === 'zh' ? cat.zh : cat.en) : '';
    var idx = getContentIndex(slug);

    // Prev/Next
    var prevLink = '';
    var nextLink = '';
    if (idx > 0) {
      var prev = CONTENT[idx - 1];
      var prevTitle = lang === 'zh' ? prev.zh.title : prev.en.title;
      prevLink = '<a href="#' + prev.slug + '">' + t.prev_lesson + ': ' + prevTitle + '</a>';
    }
    if (idx < CONTENT.length - 1) {
      var next = CONTENT[idx + 1];
      var nextTitle = lang === 'zh' ? next.zh.title : next.en.title;
      nextLink = '<a href="#' + next.slug + '">' + t.next_lesson + ': ' + nextTitle + '</a>';
    }

    // Related lessons
    var relatedHtml = '';
    if (page.related && page.related.length > 0) {
      var relatedCards = '';
      page.related.forEach(function (relSlug) {
        var rel = getContentBySlug(relSlug);
        if (rel) {
          var relTitle = lang === 'zh' ? rel.zh.title : rel.en.title;
          relatedCards += '<a href="#' + relSlug + '" class="related-card">' + relTitle + '</a>';
        }
      });
      if (relatedCards) {
        relatedHtml = '' +
          '<div class="related-section">' +
          '  <h3>' + t.related_lessons + '</h3>' +
          '  <div class="related-grid">' + relatedCards + '</div>' +
          '</div>';
      }
    }

    // Update meta
    document.title = p.title + ' — ' + SITE_NAME;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', p.summary);

    appEl.innerHTML = '' +
      '<article class="content-page">' +
      '  <nav class="breadcrumb">' +
      '    <a href="#">' + t.breadcrumb_home + '</a> / ' +
      '    <a href="#category-' + page.category + '">' + catName + '</a> / ' +
      '    ' + p.title +
      '  </nav>' +
      '  <h1>' + p.title + '</h1>' +
      '  <p class="content-page-summary">' + p.summary + '</p>' +
      '  <div class="content-body">' + p.body + '</div>' +
      '  <div class="content-nav">' +
      '    <div>' + prevLink + '</div>' +
      '    <div>' + nextLink + '</div>' +
      '  </div>' +
      '  ' + relatedHtml +
      '</article>';

    // Scroll to top
    window.scrollTo(0, 0);
  }

  // ——— Search ——————————————————————————————————————

  function bindSearch(lang) {
    var input = document.getElementById('searchInput');
    if (!input) return;

    input.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      var cards = document.querySelectorAll('.content-card');
      var noResults = document.getElementById('noResults');
      var visible = 0;

      cards.forEach(function (card) {
        var searchData = (card.getAttribute('data-search') || '').toLowerCase();
        if (!query || searchData.indexOf(query) !== -1) {
          card.style.display = '';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults) {
        noResults.style.display = (query && visible === 0) ? 'block' : 'none';
      }
    });
  }

  // ——— Cookie Consent ———————————————————————————————

  function initCookieConsent() {
    if (localStorage.getItem('cookie-consent')) return;

    var banner = document.getElementById('cookie-consent');
    if (!banner) return;

    banner.classList.add('visible');

    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem('cookie-consent', '1');
      banner.classList.remove('visible');
    });
  }

  // ——— Mobile Menu ——————————————————————————————————

  function initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && e.target !== hamburger && !hamburger.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ——— Hash Change Listener ——————————————————————————

  window.addEventListener('hashchange', function () {
    renderPage();
  });

  // ——— Init ——————————————————————————————————————————

  function init() {
    applyLang(getLang());
    renderPage();
    initCookieConsent();
    initMobileMenu();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// Helper: escape HTML attribute
function escAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
