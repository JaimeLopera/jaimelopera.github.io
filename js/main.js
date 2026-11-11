// Lógica de la web personal de Jaime Lopera

document.addEventListener("DOMContentLoaded", () => {

    // 1. Menú hamburguesa en móvil
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const abierto = navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open", abierto);
            menuToggle.setAttribute("aria-expanded", abierto);
        });
    }

    // 2. Filtro de proyectos (proyectos.html)
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                projectCards.forEach(card => {
                    const categories = card.getAttribute("data-category").split(" ");
                    card.hidden = !(filterValue === "all" || categories.includes(filterValue));
                });
            });
        });
    }

    // 3. Formulario de contacto (contacto.html): se envía con Formspree
    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");
    const formError = document.getElementById("formError");

if (contactForm) {
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const textoOriginal = submitBtn.textContent;

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        submitBtn.textContent = "Enviando...";
        submitBtn.disabled = true;
        formError.hidden = true;

        try {
            const respuesta = await fetch("https://formspree.io/f/xgaaddbl", {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: new FormData(contactForm)
            });

            if (!respuesta.ok) {
                throw new Error("Error en el envío");
            }

            contactForm.style.display = "none";
            formSuccess.style.display = "block";
        } catch (error) {
            formError.hidden = false;
            submitBtn.textContent = textoOriginal;
            submitBtn.disabled = false;
        }
    });
}

    // 4. Botón para copiar el correo
    const btnCopiar = document.getElementById("copiarCorreo");

    if (btnCopiar) {
        btnCopiar.addEventListener("click", () => {
            const correo = "loperavelazquezjaime@gmail.com";

            navigator.clipboard.writeText(correo)
                .then(() => {
                    btnCopiar.innerText = "¡Copiado!";
                    setTimeout(() => {
                        btnCopiar.innerText = "Copiar correo";
                    }, 2000);
                })
                .catch(() => {
                    btnCopiar.innerText = "No se pudo copiar";
                });
        });
    }

    // 5. Animaciones: navbar con sombra y aparición al hacer scroll
    const navbar = document.querySelector(".navbar");

    const alHacerScroll = () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 10);
        }
    };

    window.addEventListener("scroll", alHacerScroll, { passive: true });
    alHacerScroll();

    const selectoresReveal = [
        ".section-title",
        ".section-container > h2",
        ".filter-buttons",
        ".feature-card",
        ".info-card",
        ".cert-card",
        ".project-card",
        ".timeline-item",
        ".about-text",
        ".about-card-box",
        ".skills-block",
        ".contact-info",
        ".contact-form-wrapper",
        ".legal-block",
        ".cta-container"
    ].join(", ");

    const elementosReveal = document.querySelectorAll(selectoresReveal);

    elementosReveal.forEach(el => el.classList.add("reveal"));

    elementosReveal.forEach(el => {
        const hermanos = Array.from(el.parentElement.children).filter(h => h.classList.contains("reveal"));
        const posicion = hermanos.indexOf(el);
        el.style.setProperty("--delay", (Math.min(posicion, 4) * 0.06) + "s");
    });

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

        elementosReveal.forEach(el => observador.observe(el));
    } else {
        elementosReveal.forEach(el => el.classList.add("visible"));
    }

    // 6. Indicador deslizante del menú (solo escritorio)
    const enlacesMenu = navLinks ? navLinks.querySelectorAll("a:not(.btn-primary-sm)") : [];

    if (enlacesMenu.length > 0) {
        const indicador = document.createElement("span");
        indicador.className = "nav-indicador";
        navLinks.appendChild(indicador);

        const activo = navLinks.querySelector("a.active:not(.btn-primary-sm)");

        const moverA = (enlace) => {
            if (!enlace) {
                indicador.style.opacity = "0";
                return;
            }

            indicador.style.top = (enlace.offsetTop + enlace.offsetHeight + 2) + "px";
            indicador.style.width = enlace.offsetWidth + "px";
            indicador.style.transform = "translateX(" + enlace.offsetLeft + "px)";
            indicador.style.opacity = "1";
        };

        indicador.style.transition = "none";
        moverA(activo);
        indicador.offsetWidth;
        indicador.style.transition = "";

        enlacesMenu.forEach(enlace => {
            enlace.addEventListener("mouseenter", () => moverA(enlace));
            enlace.addEventListener("focus", () => moverA(enlace));
        });

        navLinks.addEventListener("mouseleave", () => moverA(activo));
        window.addEventListener("resize", () => moverA(activo));
        window.addEventListener("load", () => moverA(activo));
    }
});
