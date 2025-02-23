document.addEventListener('DOMContentLoaded', function() {
    // Quote Slider Functionality
    const quotes = document.querySelectorAll('.quote');
    let currentQuote = 0;
    let intervalId;

    function showNextQuote() {
        quotes[currentQuote].classList.remove('active');
        quotes[currentQuote].classList.add('inactive');
        
        currentQuote = (currentQuote + 1) % quotes.length;
        
        quotes[currentQuote].classList.remove('inactive');
        quotes[currentQuote].classList.add('active');
    }

    function startInterval() {
        intervalId = setInterval(showNextQuote, 10000); // Change quote every 10 seconds
    }

    function stopInterval() {
        clearInterval(intervalId);
    }

    quotes[currentQuote].classList.add('active'); // Show the first quote initially
    startInterval();

    const quoteSection = document.querySelector('.quote-section');
    quoteSection.addEventListener('mouseover', stopInterval);
    quoteSection.addEventListener('mouseout', startInterval);

    // Centered Scrolling Functionality
    const links = document.querySelectorAll('nav a, .Team a'); // Include the Team icon link
    const navbarHeight = document.querySelector('nav').offsetHeight; // Get the navbar height

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the top for "Home"
            if (targetId === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // Calculate the offset position with navbar height
            const offsetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Ensure images start with opacity set to 0
    const images = document.querySelectorAll('.about-image img');
    images.forEach(img => {
        img.style.opacity = 0;
    });

    // Blend-in Effect for Images in the About Us Section
    window.addEventListener('scroll', function() {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                img.style.opacity = 1;
            } else {
                img.style.opacity = 0;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the body
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            setTimeout(() => {
                sidebar.style.display = 'none';
            }, 300); // Match the transition duration
        } else {
            sidebar.style.display = 'flex';
            setTimeout(() => {
                sidebar.classList.add('active');
            }, 10); // Small delay to allow display change
        }
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove('active');
            setTimeout(() => {
                sidebar.style.display = 'none';
            }, 300); // Match the transition duration
        }
    });
});















