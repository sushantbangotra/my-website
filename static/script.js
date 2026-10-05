/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
    .querySelectorAll("#navLinks a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                document
                    .getElementById("navLinks")
                    .classList
                    .remove("active");

            }
        );

    });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        "#navLinks a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 170;


            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active-link"
            );


            if (
                link.getAttribute("href")
                ===
                "#" + current
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        });

    }
);



/* =====================================================
   SCROLL TO TOP
===================================================== */

const topButton =
    document.getElementById(
        "topButton"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topButton.style.display =
                "block";

        }

        else {

            topButton.style.display =
                "none";

        }

    }
);


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}