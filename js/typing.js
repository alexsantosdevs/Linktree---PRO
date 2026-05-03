class TypingEffect {
    constructor(elementId, texts, options = {}) {
        this.element = document.getElementById(elementId);
        this.texts = texts;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = options.typeSpeed || 60;
        this.deleteSpeed = options.deleteSpeed || 30;
        this.pauseTime = options.pauseTime || 2000;
        this.startDelay = options.startDelay || 500;
        this.cursor = document.querySelector('.cursor-blink');
        this.timeout = null;
    }

    async start() {
        if (!this.element) return;
        await this.delay(this.startDelay);
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            this.isDeleting = true;
            if (this.cursor) this.cursor.classList.add('done');
            this.timeout = setTimeout(() => this.type(), this.pauseTime);
            return;
        }

        if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            if (this.cursor) this.cursor.classList.remove('done');
        }

        const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        this.timeout = setTimeout(() => this.type(), speed);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    destroy() {
        if (this.timeout) clearTimeout(this.timeout);
    }
}