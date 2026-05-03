class App {
    constructor() {
        this.linksManager = new LinksManager();
        this.typingEffect = null;
        this.init();
    }

    async init() {
        try {
            const profileRes = await fetch('data/profile.json');
            const profileData = await profileRes.json();
            this.loadProfile(profileData);
        } catch (error) {
            console.error('Erro ao carregar perfil:', error);
            this.loadFallbackProfile();
        }

        await this.linksManager.loadLinks();
        this.linksManager.renderLinks();
        this.linksManager.renderSocialLinks();

        window.Analytics = new Analytics();
        this.initTypingEffect();
    }

    loadProfile(data) {
        const nameEl = document.querySelector('.profile-name');
        if (nameEl && data.name) nameEl.textContent = data.name;

        const locationEl = document.getElementById('profileLocation');
        const companyEl = document.getElementById('profileCompany');
        const metaDivider = document.querySelector('.meta-divider');

        if (locationEl) {
            if (data.location) {
                locationEl.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${data.location}
                `;
                locationEl.style.display = 'inline-flex';
            } else {
                locationEl.style.display = 'none';
            }
        }

        if (companyEl) {
            if (data.company) {
                companyEl.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    </svg>
                    ${data.company}
                `;
                companyEl.style.display = 'inline-flex';
            } else {
                companyEl.style.display = 'none';
            }
        }

        if (metaDivider) {
            const hasLocation = data.location && data.location.trim() !== '';
            const hasCompany = data.company && data.company.trim() !== '';
            metaDivider.style.display = (hasLocation && hasCompany) ? 'inline' : 'none';
        }

        const avatarImg = document.querySelector('.avatar');
        const avatarFallback = document.querySelector('.avatar-fallback');
        const avatarInitials = document.querySelector('.avatar-initials');

        if (avatarImg && data.avatar) {
            avatarImg.src = data.avatar;
            avatarImg.onerror = () => {
                avatarImg.style.display = 'none';
                if (avatarFallback) {
                    avatarFallback.style.display = 'flex';
                    if (avatarInitials && data.name) {
                        avatarInitials.textContent = this.getInitials(data.name);
                    }
                }
            };
        } else if (avatarFallback && data.name) {
            if (avatarImg) avatarImg.style.display = 'none';
            avatarFallback.style.display = 'flex';
            if (avatarInitials) {
                avatarInitials.textContent = this.getInitials(data.name);
            }
        }

        this.typingTexts = data.bioTexts && data.bioTexts.length > 0
            ? data.bioTexts
            : (data.bio ? [data.bio] : ['Bem-vindo ao meu LinkTree PRO']);
    }

    loadFallbackProfile() {
        const nameEl = document.querySelector('.profile-name');
        if (nameEl) nameEl.textContent = 'LinkTree PRO';

        const locationEl = document.getElementById('profileLocation');
        if (locationEl) locationEl.style.display = 'none';

        const companyEl = document.getElementById('profileCompany');
        if (companyEl) companyEl.style.display = 'none';

        const metaDivider = document.querySelector('.meta-divider');
        if (metaDivider) metaDivider.style.display = 'none';

        const avatarFallback = document.querySelector('.avatar-fallback');
        const avatarImg = document.querySelector('.avatar');
        if (avatarImg) avatarImg.style.display = 'none';
        if (avatarFallback) {
            avatarFallback.style.display = 'flex';
            const initials = document.querySelector('.avatar-initials');
            if (initials) initials.textContent = 'LP';
        }

        this.typingTexts = ['Bem-vindo ao meu LinkTree PRO'];
    }

    getInitials(name) {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .slice(0, 2)
            .join('')
            .toUpperCase();
    }

    initTypingEffect() {
        if (this.typingTexts && this.typingTexts.length > 0) {
            this.typingEffect = new TypingEffect('typingBio', this.typingTexts, {
                typeSpeed: 50,
                deleteSpeed: 25,
                pauseTime: 3000,
                startDelay: 800
            });
            this.typingEffect.start();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});