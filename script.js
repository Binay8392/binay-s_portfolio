// Portfolio JavaScript - All Interactive Functionality

class Portfolio {
    constructor() {
        this.currentTheme = 'dark';
        this.isMobile = window.innerWidth <= 768;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.initializeTabs();
        this.initializeAnimations();
        this.initializeLucideIcons();
        this.handleResize();
        
        // Initialize after DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.updateThemeColors();
            this.animateSkillBars();
        });
    }

    setupEventListeners() {
        // Theme switcher
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-btn')) {
                const theme = e.target.closest('.theme-btn').dataset.theme;
                this.switchTheme(theme);
            }
        });

        // Portfolio tabs
        document.addEventListener('click', (e) => {
            if (e.target.closest('.tab-btn')) {
                e.preventDefault();
                const tab = e.target.closest('.tab-btn').dataset.tab;
                this.switchTab(tab);
            }
        });

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Smooth scrolling for navigation
        document.addEventListener('click', (e) => {
            if (e.target.closest('.nav-link')) {
                e.preventDefault();
                const href = e.target.closest('.nav-link').getAttribute('href');
                if (href.startsWith('#')) {
                    this.scrollToSection(href.substring(1));
                }
            }
        });

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                this.handleFormSubmit(e);
            });
        }

        // Window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Scroll events for navigation
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    initializeLucideIcons() {
        // Initialize Lucide icons after they're loaded
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        } else {
            // Retry after a short delay if Lucide isn't loaded yet
            setTimeout(() => {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 100);
        }
    }

    initializeTheme() {
        // Get saved theme or default to 'dark'
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.switchTheme(savedTheme);
    }

    switchTheme(theme) {
        this.currentTheme = theme;
        document.body.setAttribute('data-theme', theme);
        
        // Update active theme button
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            }
        });

        // Save theme preference
        localStorage.setItem('portfolio-theme', theme);
        
        // Update theme colors
        this.updateThemeColors();
    }

    updateThemeColors() {
        const themes = {
            dark: {
                primary: '#8b5cf6',
                secondary: '#ec4899',
                accent: '#a855f7'
            },
            blue: {
                primary: '#3b82f6',
                secondary: '#06b6d4',
                accent: '#1d4ed8'
            },
            green: {
                primary: '#10b981',
                secondary: '#059669',
                accent: '#047857'
            },
            orange: {
                primary: '#f97316',
                secondary: '#dc2626',
                accent: '#ea580c'
            },
            purple: {
                primary: '#8b5cf6',
                secondary: '#a855f7',
                accent: '#7c3aed'
            },
            red: {
                primary: '#ef4444',
                secondary: '#ec4899',
                accent: '#dc2626'
            }
        };

        const themeColors = themes[this.currentTheme] || themes.dark;
        
        // Update CSS custom properties
        document.documentElement.style.setProperty('--theme-primary', themeColors.primary);
        document.documentElement.style.setProperty('--theme-secondary', themeColors.secondary);
        document.documentElement.style.setProperty('--theme-accent', themeColors.accent);

        // Update animated background
        this.updateAnimatedBackground(themeColors);
    }

    updateAnimatedBackground(colors) {
        const animatedBg = document.getElementById('animatedBg');
        const mobileAccent = document.getElementById('mobileAccent');
        const bgPattern = document.getElementById('bgPattern');
        
        if (this.isMobile) {
            if (mobileAccent) {
                mobileAccent.style.background = `radial-gradient(circle at 50% 50%, ${colors.primary}66 0%, transparent 70%)`;
            }
        } else {
            if (animatedBg) {
                const primaryRgba = this.hexToRgba(colors.primary, 0.3);
                const secondaryRgba = this.hexToRgba(colors.secondary, 0.3);
                const accentRgba = this.hexToRgba(colors.accent, 0.2);
                
                animatedBg.style.background = `
                    radial-gradient(circle at 20% 80%, ${primaryRgba} 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, ${secondaryRgba} 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, ${accentRgba} 0%, transparent 50%)
                `;
            }
        }
        
        if (bgPattern) {
            bgPattern.style.backgroundImage = `
                radial-gradient(circle at 25% 25%, ${colors.primary} 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, ${colors.primary} 1px, transparent 1px)
            `;
        }

        // Update floating orbs
        this.updateFloatingOrbs(colors);
    }

    updateFloatingOrbs(colors) {
        const orb1 = document.getElementById('floatingOrb1');
        const orb2 = document.getElementById('floatingOrb2');
        
        if (orb1) {
            const primaryRgba = this.hexToRgba(colors.primary, 0.3);
            orb1.style.background = `radial-gradient(circle, ${primaryRgba} 0%, transparent 70%)`;
        }
        
        if (orb2) {
            const secondaryRgba = this.hexToRgba(colors.secondary, 0.3);
            orb2.style.background = `radial-gradient(circle, ${secondaryRgba} 0%, transparent 70%)`;
        }

        // Update mobile particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.backgroundColor = colors.primary;
        });
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    initializeTabs() {
        // Set first tab as active by default
        const firstTab = document.querySelector('.tab-btn');
        const firstContent = document.querySelector('.tab-content');
        
        if (firstTab && firstContent) {
            firstTab.classList.add('active');
            firstContent.classList.add('active');
        }
    }

    switchTab(tabName) {
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to selected tab and content
        const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
        const selectedContent = document.getElementById(tabName);
        
        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
            
            // Animate skill bars if skills tab is selected
            if (tabName === 'skills') {
                setTimeout(() => this.animateSkillBars(), 100);
            }
        }
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.animation = 'none';
                bar.offsetHeight; // Trigger reflow
                bar.style.animation = 'skillBarFill 2s ease-out forwards';
            }, index * 100);
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 80; // Account for fixed navigation
            const elementPosition = section.offsetTop - offset;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }

    toggleMobileMenu() {
        const navLinks = document.getElementById('navLinks');
        const menuBtn = document.getElementById('mobileMenuBtn');
        
        if (navLinks && menuBtn) {
            const isOpen = navLinks.style.display === 'flex';
            
            if (isOpen) {
                navLinks.style.display = 'none';
                menuBtn.innerHTML = '<i data-lucide="menu"></i>';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
                navLinks.style.padding = '1rem';
                navLinks.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
                menuBtn.innerHTML = '<i data-lucide="x"></i>';
            }
            
            // Re-initialize icons after DOM change
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }

    handleResize() {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= 768;
        
        // Update elements visibility based on screen size
        if (wasMobile !== this.isMobile) {
            this.updateThemeColors();
            
            // Reset mobile menu if switching to desktop
            if (!this.isMobile) {
                const navLinks = document.getElementById('navLinks');
                if (navLinks) {
                    navLinks.style.display = '';
                    navLinks.style.flexDirection = '';
                    navLinks.style.position = '';
                    navLinks.style.top = '';
                    navLinks.style.left = '';
                    navLinks.style.right = '';
                    navLinks.style.background = '';
                    navLinks.style.padding = '';
                    navLinks.style.borderTop = '';
                }
            }
        }
    }

    handleScroll() {
        const navigation = document.getElementById('navigation');
        if (navigation) {
            if (window.scrollY > 50) {
                navigation.style.background = 'rgba(15, 23, 42, 0.9)';
            } else {
                navigation.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        }

        // Update active navigation link based on scroll position
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = ['home', 'portfolio', 'about', 'contact'];
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = sectionId;
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.message) {
            this.showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!this.isValidEmail(data.email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (replace with actual form handling)
        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        
        // In a real implementation, you would send the data to your server:
        // this.submitForm(data);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            color: 'white',
            fontWeight: '500',
            zIndex: '9999',
            maxWidth: '400px',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });

        // Set background color based on type
        if (type === 'success') {
            notification.style.background = 'linear-gradient(to right, #22c55e, #16a34a)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(to right, #ef4444, #dc2626)';
        } else {
            notification.style.background = 'linear-gradient(to right, var(--theme-primary), var(--theme-secondary))';
        }

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    initializeAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Observe cards and other animated elements
        document.querySelectorAll('.project-card, .cert-card, .skill-category').forEach(element => {
            observer.observe(element);
        });
    }
}

// Global functions for button clicks
window.scrollToSection = function(sectionId) {
    if (window.portfolioApp) {
        window.portfolioApp.scrollToSection(sectionId);
    }
};

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new Portfolio();
});

// Backup initialization in case DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!window.portfolioApp) {
            window.portfolioApp = new Portfolio();
        }
    });
} else {
    window.portfolioApp = new Portfolio();
}

// Additional CSS for scroll animations
const animationStyles = `
    .animate-in {
        animation: slideUp 0.6s ease-out forwards;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .project-card,
    .cert-card,
    .skill-category {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }

    .project-card.animate-in,
    .cert-card.animate-in,
    .skill-category.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

//web3
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.innerText = 'Sending...';

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Clear the form fields
      form.reset();
      showMessage('Your message was sent successfully!', 'success');
    } else {
      showMessage('There was a problem sending your message. Please try again later.', 'error');
    }
  } catch (error) {
    showMessage('Your message was sent successfully!');
  }

  submitButton.disabled = false;
  submitButton.innerHTML = '<i data-lucide="send"></i> Send Message';
});

function showMessage(message, type) {
  let messageDiv = document.getElementById('formMessage');
  if (!messageDiv) {
    messageDiv = document.createElement('div');
    messageDiv.id = 'formMessage';
    messageDiv.style.marginTop = '1em';
    messageDiv.style.padding = '10px';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.fontWeight = '600';
    document.querySelector('.contact-form').appendChild(messageDiv);
  }
  messageDiv.textContent = message;
  if (type === 'success') {
    messageDiv.style.backgroundColor = '#d4edda';
    messageDiv.style.color = '#155724';
    messageDiv.style.border = '1px solid #c3e6cb';
  } else if (type === 'error') {
    messageDiv.style.backgroundColor = '#f8d7da';
    messageDiv.style.color = '#721c24';
    messageDiv.style.border = '1px solid #f5c6cb';
  }
  
}
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.innerText = 'Sending...';

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      showMessage('Your message was sent successfully!', 'success');
    } else {
      showMessage('There was a problem sending your message. Please try again later.', 'error');
    }
  } catch (error) {
    showMessage('Your message was sent successfully!', 'success');
  }

  submitButton.disabled = false;
  submitButton.innerHTML = '<i data-lucide="send"></i> Send Message';
});

function showMessage(message, type) {
  let messageDiv = document.getElementById('formMessage');
  if (!messageDiv) {
    messageDiv = document.createElement('div');
    messageDiv.id = 'formMessage';
    messageDiv.style.marginTop = '1em';
    messageDiv.style.padding = '10px';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.fontWeight = '600';
    document.querySelector('.contact-form').appendChild(messageDiv);
  }
  messageDiv.textContent = message;
  if (type === 'success') {
    messageDiv.style.backgroundColor = '#d4edda';
    messageDiv.style.color = '#155724';
    messageDiv.style.border = '1px solid #c3e6cb';
  } else if (type === 'error') {
    messageDiv.style.backgroundColor = '#f8d7da';
    messageDiv.style.color = '#721c24';
    messageDiv.style.border = '1px solid #f5c6cb';
  }
}

