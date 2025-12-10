// Sistema de carga de fondos desde JSON
class BackgroundLoader {
    constructor() {
        this.config = null;
    }

    async loadConfig() {
        try {
            const response = await fetch('/public/config-fondos-completo.json');
            this.config = await response.json();
            console.log('✅ Configuración de fondos cargada');
            return this.config;
        } catch (error) {
            console.warn('⚠️ No se pudo cargar config-fondos-completo.json');
            return null;
        }
    }

    applyBackground(element, config) {
        if (!config || !element) return;

        switch (config.type) {
            case 'gradient':
                element.style.background = config.gradient;
                break;
            
            case 'color':
                element.style.backgroundColor = config.color;
                break;
            
            case 'image':
                if (config.image) {
                    element.style.backgroundImage = `url('${config.image}')`;
                    element.style.backgroundSize = 'cover';
                    element.style.backgroundPosition = 'center';
                    element.style.backgroundRepeat = 'no-repeat';
                }
                break;
            
            case 'video':
                if (config.video) {
                    element.style.position = 'relative';
                    const video = document.createElement('video');
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;
                    video.playsInline = true;
                    video.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        z-index: -1;
                    `;
                    video.innerHTML = `<source src="${config.video}" type="video/mp4">`;
                    element.appendChild(video);
                }
                break;
        }
    }

    async applyToPage(pageName, selectors) {
        await this.loadConfig();
        if (!this.config || !this.config[pageName]) return;

        const pageConfig = this.config[pageName];

        for (const [key, selector] of Object.entries(selectors)) {
            const element = document.querySelector(selector);
            if (element && pageConfig[key]) {
                this.applyBackground(element, pageConfig[key]);
            }
        }
    }
}

// Instancia global
window.bgLoader = new BackgroundLoader();