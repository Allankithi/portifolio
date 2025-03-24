// Floating words generator
const floatingWords = () => {
    const words = ["Data", "Analysis", "Python", "SPSS", "Stata", "Econometrics", "Research", "Visualization"];
    const container = document.querySelector('.floating-words');
    
    words.forEach(word => {
        const element = document.createElement('span');
        element.className = 'floating-word';
        element.textContent = word;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDuration = `${10 + Math.random() * 20}s`;
        container.appendChild(element);
    });
};

// Scroll progress indicator
const scrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPx / winHeightPx) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
};

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    floatingWords();
    scrollProgress();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Animate progress bars when section comes into view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = `${width}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', animateProgressBars);
document.querySelectorAll('.button-container').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.querySelector('.button-block').style.transform = 'translate(5px, -5px)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.querySelector('.button-block').style.transform = 'translate(0, 0)';
    });
  });