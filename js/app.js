/**
 * Claude Code Tutorial — App Logic
 * Language switching, tabs, copy, FAQ accordion
 */
(function () {
    'use strict';

    const DEFAULT_LANG = 'en';
    const SUPPORTED_LANGS = ['en', 'zh'];

    // ——— Language ——————————————————————————————————

    function getLang() {
        const stored = localStorage.getItem('claude-tutorial-lang');
        if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
        return DEFAULT_LANG;
    }

    function setLang(lang) {
        localStorage.setItem('claude-tutorial-lang', lang);
        applyLang(lang);
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('data-lang', lang);

        const t = translations[lang];
        if (!t) return;

        // Update all [data-i18n] elements
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                // For keys that contain HTML (hero_title has <span>), use innerHTML
                if (t[key].includes('<')) {
                    el.innerHTML = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });

        // Update document title
        document.title = t.title;

        // Update lang switcher active state
        document.querySelectorAll('.lang-option').forEach(function (opt) {
            const val = opt.getAttribute('data-lang-val');
            opt.classList.toggle('lang-active', val === lang);
        });
    }

    // Lang switcher click
    document.getElementById('langSwitch').addEventListener('click', function () {
        const current = getLang();
        const next = current === 'en' ? 'zh' : 'en';
        setLang(next);
    });

    // ——— Installation Tabs ——————————————————————————

    document.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const tab = this.getAttribute('data-tab');

            // Update active button
            document.querySelectorAll('.tab-btn').forEach(function (b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            // Update active content
            document.querySelectorAll('.tab-content').forEach(function (content) {
                content.classList.remove('active');
            });
            var target = document.querySelector('[data-tab-content="' + tab + '"]');
            if (target) target.classList.add('active');
        });
    });

    // ——— Copy to Clipboard ——————————————————————————

    document.querySelectorAll('.copy-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var text = this.getAttribute('data-copy');
            var btnEl = this;

            // Use Clipboard API if available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function () {
                    showCopied(btnEl);
                });
            } else {
                // Fallback
                var textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    showCopied(btnEl);
                } catch (e) {
                    // silently fail
                }
                document.body.removeChild(textarea);
            }
        });
    });

    function showCopied(btn) {
        var lang = getLang();
        var originalText = btn.textContent;
        btn.textContent = lang === 'zh' ? '已复制!' : 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 1800);
    }

    // ——— FAQ Accordion ————————————————————————————————

    document.querySelectorAll('.faq-question').forEach(function (question) {
        question.addEventListener('click', function () {
            var item = this.parentElement;
            var isOpen = item.hasAttribute('open');

            // Close all others
            document.querySelectorAll('.faq-item').forEach(function (faq) {
                faq.removeAttribute('open');
            });

            // Toggle current
            if (!isOpen) {
                item.setAttribute('open', '');
                this.setAttribute('aria-expanded', 'true');
            } else {
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // ——— Smooth scroll for nav links ——————————————————

    document.querySelectorAll('.nav-link, .btn[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ——— Highlight active nav on scroll ——————————————

    var sections = [];
    var navLinks = document.querySelectorAll('.nav-link');

    function updateSections() {
        sections = [];
        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                var target = document.querySelector(href);
                if (target) {
                    sections.push({ link: link, target: target });
                }
            }
        });
    }

    updateSections();

    function onScroll() {
        var scrollY = window.scrollY + 100;
        var activeLink = null;

        sections.forEach(function (s) {
            if (s.target.offsetTop <= scrollY) {
                activeLink = s.link;
            }
        });

        navLinks.forEach(function (link) {
            link.style.color = '';
        });

        if (activeLink) {
            activeLink.style.color = 'var(--accent-2)';
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ——— Init ——————————————————————————————————————————

    applyLang(getLang());
})();
