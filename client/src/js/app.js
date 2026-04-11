import Alpine from 'alpinejs'
import '../css/app.css'

// DarkMode Store
document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
        init() {
            const saved = localStorage.getItem('theme');
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (saved === 'dark' || (!saved && systemDark)) {
                this.on = true;
                document.documentElement.classList.add('dark');
            } else {
                this.on = false;
                document.documentElement.classList.remove('dark');
            }
        },
        
        on: false,
        
        toggle() {
            this.on = !this.on;
            if (this.on) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }
    });
});

window.Alpine = Alpine;
Alpine.start();