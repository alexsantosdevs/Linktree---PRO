class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById('themeToggle');
        this.html = document.documentElement;
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('linktree-pro-theme') || 'dark';
        this.html.setAttribute('data-theme', savedTheme);
        this.updateMetaThemeColor(savedTheme);
        this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        const currentTheme = this.html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.html.setAttribute('data-theme', newTheme);
        localStorage.setItem('linktree-pro-theme', newTheme);
        this.updateMetaThemeColor(newTheme);
        this.animateToggle();
    }

    updateMetaThemeColor(theme) {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.content = theme === 'dark' ? '#0a0a0a' : '#f8fafc';
        }
    }

    animateToggle() {
        this.toggleBtn.style.transform = 'scale(0.85)';
        setTimeout(() => {
            this.toggleBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.toggleBtn.style.transform = 'scale(1)';
            }, 150);
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});