/*
    Nexora Digital
    Main JavaScript file

    Features:
    1. Mobile hamburger menu
    2. Automatic menu closing
    3. Scroll reveal animations
    4. Contact form validation/demo response
*/


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector("#nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navLinks.classList.toggle("open");


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        }
    );


    /* Close menu after clicking a link */

    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }
            );

        });

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector("#contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const message =
                document.querySelector(
                    "#form-message"
                );


            message.textContent =
                "Thank you! Your message has been received. We'll get back to you soon.";


            contactForm.reset();

        }
    );

}