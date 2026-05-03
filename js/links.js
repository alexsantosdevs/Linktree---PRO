class LinksManager {
    constructor() {
        this.linksContainer = document.getElementById('linksContainer');
        this.socialContainer = document.getElementById('socialContainer');
        this.linkCountEl = document.getElementById('linkCount');
        this.links = [];
        this.socialLinks = [];
        this.linkIcons = {
            portfolio: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><circle cx="12" cy="14" r="2"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/></svg>`,
            github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
            youtube: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 11.75a29.94 29.94 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.94 29.94 0 0 0 .46-5.25 29.94 29.94 0 0 0-.46-5.33z"/></svg>`,
            newsletter: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/><line x1="6" y1="13" x2="6" y2="17"/><line x1="10" y1="13" x2="10" y2="17"/><line x1="14" y1="13" x2="16" y2="17"/></svg>`,
            course: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 1.8 3 6 3s6-1.9 6-3v-5"/></svg>`
        };
        this.socialIcons = {
            instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
            linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
            twitter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4"/></svg>`,
            discord: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"/><path d="M7 16.5c3.5 1 5.5 1 9 0"/><path d="M15.5 17c0 1 -1 3 -3.5 3s-3.5 -2 -3.5 -3"/><path d="M8.5 7c0 -1 1 -3 3.5 -3s3.5 2 3.5 3"/><path d="M5 6.5c-1.5 2 -2 5 -2 8c0 3 1 4 2 4"/><path d="M19 6.5c1.5 2 2 5 2 8c0 3 -1 4 -2 4"/></svg>`,
            email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>`
        };
    }

    async loadLinks() {
        try {
            const [linksRes, socialRes] = await Promise.all([
                fetch('data/links.json'),
                fetch('data/social.json')
            ]);
            const linksData = await linksRes.json();
            const socialData = await socialRes.json();
            this.links = linksData.links || [];
            this.socialLinks = socialData.social || [];
        } catch (error) {
            console.error('Erro ao carregar links:', error);
            this.links = [];
            this.socialLinks = [];
        }
    }

    renderLinks() {
        if (!this.linksContainer) return;
        this.linksContainer.innerHTML = '';

        if (this.links.length === 0) {
            this.linksContainer.innerHTML = `
                <div class="link-card" style="justify-content: center; cursor: default;">
                    <span style="color: var(--color-text-tertiary);">Nenhum link disponível</span>
                </div>`;
            if (this.linkCountEl) this.linkCountEl.textContent = '0';
            return;
        }

        this.links.forEach((link, index) => {
            const card = this.createLinkCard(link, index);
            this.linksContainer.appendChild(card);
        });

        if (this.linkCountEl) {
            this.linkCountEl.textContent = this.links.length;
        }
    }

    createLinkCard(link, index) {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'link-card fade-in-up';
        a.style.animationDelay = `${index * 0.05}s`;
        a.setAttribute('data-link-id', link.id || index);

        const iconSvg = this.linkIcons[link.icon] || link.icon || this.linkIcons['portfolio'];

        const thumbContent = link.thumbnail
            ? `<img src="${link.thumbnail}" alt="${link.title}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'link-thumb-icon\\'>${iconSvg.replace(/'/g, "\\'")}</span>'">`
            : `<span class="link-thumb-icon">${iconSvg}</span>`;

        a.innerHTML = `
            <div class="link-thumb">${thumbContent}</div>
            <div class="link-info">
                <div class="link-title">
                    ${link.title}
                    ${link.badge ? `<span class="link-badge">${link.badge}</span>` : ''}
                </div>
                ${link.description ? `<div class="link-description">${link.description}</div>` : ''}
            </div>
            <div class="link-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </div>
        `;

        a.addEventListener('click', (e) => {
            this.handleLinkClick(link, e);
        });

        return a;
    }

    renderSocialLinks() {
        if (!this.socialContainer) return;
        this.socialContainer.innerHTML = '';

        if (this.socialLinks.length === 0) return;

        this.socialLinks.forEach((social, index) => {
            const a = document.createElement('a');
            a.href = social.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'social-link fade-in-up';
            a.style.animationDelay = `${0.3 + index * 0.05}s`;
            a.setAttribute('aria-label', social.name);
            a.title = social.name;
            a.innerHTML = this.socialIcons[social.icon] || social.icon || '🔗';

            a.addEventListener('click', (e) => {
                this.handleSocialClick(social, e);
            });

            this.socialContainer.appendChild(a);
        });
    }

    handleLinkClick(link, event) {
        const now = Date.now();
        const lastClick = parseInt(sessionStorage.getItem(`click_${link.id}`) || '0');

        if (now - lastClick < 2000) return;

        sessionStorage.setItem(`click_${link.id}`, now.toString());

        if (window.Analytics) {
            window.Analytics.trackClick(link.id, link.title);
        }

        this.showClickRipple(event);
        this.showToast(`Abrindo ${link.title}...`);
    }

    handleSocialClick(social, event) {
        if (window.Analytics) {
            window.Analytics.trackSocialClick(social.name);
        }
    }

    showClickRipple(event) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--color-accent);
            opacity: 0.6;
            pointer-events: none;
            z-index: 9999;
            left: ${event.clientX - 10}px;
            top: ${event.clientY - 10}px;
            animation: fadeInScale 0.4s ease forwards, fadeInUp 0.6s ease forwards;
        `;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    }

    showToast(message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 300);
        }, 1500);
    }
}