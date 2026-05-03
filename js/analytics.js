class Analytics {
    constructor() {
        this.sessionId = this.getSessionId();
        this.clicks = [];
        this.init();
    }

    getSessionId() {
        let id = sessionStorage.getItem('analytics_session');
        if (!id) {
            id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            sessionStorage.setItem('analytics_session', id);
        }
        return id;
    }

    init() {
        this.trackPageView();
        this.updateViewCount();
    }

    trackPageView() {
        const data = {
            sessionId: this.sessionId,
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
            referrer: document.referrer || 'direct',
            theme: document.documentElement.getAttribute('data-theme'),
            screenSize: `${window.innerWidth}x${window.innerHeight}`
        };

        const existing = JSON.parse(localStorage.getItem('linktree_pageviews') || '[]');
        existing.push(data);
        if (existing.length > 100) existing.shift();
        localStorage.setItem('linktree_pageviews', JSON.stringify(existing));
    }

    trackClick(linkId, linkTitle) {
        const data = {
            sessionId: this.sessionId,
            linkId,
            linkTitle,
            timestamp: new Date().toISOString()
        };

        this.clicks.push(data);
        const existing = JSON.parse(localStorage.getItem('linktree_clicks') || '[]');
        existing.push(data);
        if (existing.length > 500) existing.shift();
        localStorage.setItem('linktree_clicks', JSON.stringify(existing));

        this.updateClickCount();
    }

    trackSocialClick(socialName) {
        const data = {
            sessionId: this.sessionId,
            socialName,
            timestamp: new Date().toISOString()
        };

        const existing = JSON.parse(localStorage.getItem('linktree_social_clicks') || '[]');
        existing.push(data);
        localStorage.setItem('linktree_social_clicks', JSON.stringify(existing));
    }

    updateViewCount() {
        const views = JSON.parse(localStorage.getItem('linktree_pageviews') || '[]');
        const uniqueSessions = new Set(views.map(v => v.sessionId)).size;
        const viewCountEl = document.getElementById('viewCount');
        if (viewCountEl) {
            viewCountEl.textContent = this.formatNumber(uniqueSessions || 1);
        }
    }

    updateClickCount() {
        const clicks = JSON.parse(localStorage.getItem('linktree_clicks') || '[]');
        const clickCountEl = document.getElementById('clickCount');
        if (clickCountEl) {
            clickCountEl.textContent = this.formatNumber(clicks.length || 0);
        }
    }

    formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    }
}