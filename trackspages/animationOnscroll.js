function animateOnScroll() {
const observer = new IntersectionObserver(
    (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); 
        }
    });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => observer.observe(element));
}


document.addEventListener("DOMContentLoaded", animateOnScroll);



function animateOnScrollx() {
const observer = new IntersectionObserver(
    (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animatex");
            observer.unobserve(entry.target); 
        }
    });
    },
    {
        threshold: 0.1, 
    }
);

    const elements = document.querySelectorAll(".animate-on-scrollx");
    elements.forEach((element) => observer.observe(element));
}


document.addEventListener("DOMContentLoaded", animateOnScrollx);