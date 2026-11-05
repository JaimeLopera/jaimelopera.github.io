// Lógica de la web personal de Jaime Lopera

document.addEventListener("DOMContentLoaded", () => {

    // 1. Menú hamburguesa en móvil
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open");
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

                    if (filterValue === "all" || categories.includes(filterValue)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    // 3. Formulario de contacto (contacto.html): se envía con Formspree
    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector("button[type='submit']");
            submitBtn.innerText = "Enviando...";
            submitBtn.disabled = true;

            try {
                const respuesta = await fetch("https://formspree.io/f/xgaaddbl", {
                    method: "POST",
                    headers: { "Accept": "application/json" },
                    body: new FormData(contactForm)
                });

                if (respuesta.ok) {
                    contactForm.style.display = "none";
                    if (formSuccess) {
                        formSuccess.style.display = "block";
                    }
                } else {
                    throw new Error("Error en el envío");
                }
            } catch (error) {
                submitBtn.innerText = "Enviar mensaje 🚀";
                submitBtn.disabled = false;
                alert("No se ha podido enviar. Escríbeme directamente a loperavelazquezjaime@gmail.com");
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

    // 5. Animaciones: navbar con sombra, barra de progreso y aparición al hacer scroll
    const navbar = document.querySelector(".navbar");
    const barra = document.createElement("div");
    barra.className = "barra-progreso";

    if (navbar) {
        navbar.appendChild(barra);
    }

    const alHacerScroll = () => {
        const scrollActual = window.scrollY;
        const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

        if (navbar) {
            navbar.classList.toggle("scrolled", scrollActual > 10);
        }

        barra.style.width = (alturaTotal > 0 ? (scrollActual / alturaTotal) * 100 : 0) + "%";
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
        el.style.setProperty("--delay", (Math.min(posicion, 4) * 0.1) + "s");
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
});
