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
        ".cifra",
        ".pill",
        ".about-card-box li",
        ".tesela",
        ".proceso-paso",
        ".contact-card-item",
        ".cta-container"
    ].join(", ");

    const elementosReveal = document.querySelectorAll(selectoresReveal);

    elementosReveal.forEach(el => el.classList.add("reveal"));

    elementosReveal.forEach(el => {
        const hermanos = Array.from(el.parentElement.children).filter(h => h.classList.contains("reveal"));
        const posicion = hermanos.indexOf(el);
        el.style.setProperty("--delay", (Math.min(posicion, 6) * 0.05) + "s");
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

    // ==========================================================
    // Efectos estilo Apple
    // ==========================================================
    const raiz = document.documentElement;
    const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conRaton = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const limitar = (valor, min, max) => Math.min(Math.max(valor, min), max);

    // 7. Efectos ligados al scroll: texto que se ilumina, zoom de la
    //    pantalla del dashboard y línea del timeline
    const textosLuz = reducirMovimiento ? [] : document.querySelectorAll(".texto-luz-relleno");
    const dispositivo = reducirMovimiento ? null : document.querySelector(".dispositivo");
    const timelines = document.querySelectorAll(".timeline");
    const cabecera = reducirMovimiento ? null : document.querySelector(".page-header");
    const piezasCabecera = cabecera ? cabecera.querySelectorAll("h1, p") : [];

    if (textosLuz.length > 0) raiz.classList.add("js-luz");

    const lineasTimeline = [];
    timelines.forEach(timeline => {
        const linea = document.createElement("span");
        linea.className = "timeline-progreso";
        timeline.appendChild(linea);
        lineasTimeline.push({ timeline, linea, items: timeline.querySelectorAll(".timeline-item") });
    });
    if (lineasTimeline.length > 0) raiz.classList.add("js-timeline");

    let esperandoFrame = false;

    const actualizarScroll = () => {
        esperandoFrame = false;
        const alto = window.innerHeight;

        textosLuz.forEach(texto => {
            const caja = texto.parentElement.getBoundingClientRect();
            const progreso = limitar((alto * 0.85 - caja.top) / (caja.height + alto * 0.35), 0, 1);
            texto.style.backgroundSize = (progreso * 100) + "% 100%";
        });

        if (cabecera) {
            const progreso = limitar(window.scrollY / cabecera.offsetHeight, 0, 1);
            piezasCabecera.forEach((pieza, i) => {
                pieza.style.translate = "0 " + (progreso * (i === 0 ? 60 : 36)).toFixed(1) + "px";
                pieza.style.scale = (1 - progreso * 0.06).toFixed(3);
                pieza.style.opacity = (1 - progreso * 0.9).toFixed(3);
            });
        }

        if (dispositivo) {
            const caja = dispositivo.parentElement.parentElement.getBoundingClientRect();
            const progreso = limitar((alto - caja.top) / (alto * 0.7), 0, 1);
            dispositivo.style.transform = "scale(" + (0.88 + 0.12 * progreso) + ")";
        }

        lineasTimeline.forEach(({ timeline, linea, items }) => {
            const caja = timeline.getBoundingClientRect();
            const progreso = limitar((alto * 0.6 - caja.top) / caja.height, 0, 1);
            linea.style.transform = "scaleY(" + progreso + ")";
            items.forEach(item => {
                item.classList.toggle("alcanzado", item.getBoundingClientRect().top < alto * 0.6);
            });
        });
    };

    const pedirFrame = () => {
        if (!esperandoFrame) {
            esperandoFrame = true;
            requestAnimationFrame(actualizarScroll);
        }
    };

    if (textosLuz.length > 0 || dispositivo || cabecera || lineasTimeline.length > 0) {
        window.addEventListener("scroll", pedirFrame, { passive: true });
        window.addEventListener("resize", pedirFrame);
        actualizarScroll();
    }

    // 7b. Títulos que se descubren de abajo arriba al aparecer
    const titulos = reducirMovimiento ? [] : document.querySelectorAll(
        ".section-title h2, .capitulos-fijo h2, .timeline-title, .about-text h2, .contact-info h2, .contact-form-wrapper h2, .sidebar-block h3, .about-card-box h3"
    );

    if (titulos.length > 0 && "IntersectionObserver" in window) {
        raiz.classList.add("js-titulos");
        titulos.forEach(titulo => titulo.classList.add("titulo-revelar"));

        // Se observa el padre: el título recortado no cuenta como visible
        titulos.forEach(titulo => {
            const padre = titulo.parentElement;
            const vigilar = new IntersectionObserver((entradas) => {
                if (entradas[0].isIntersecting) {
                    titulo.classList.add("revelado");
                    vigilar.disconnect();
                }
            }, { rootMargin: "0px 0px -60px 0px" });
            vigilar.observe(padre);
        });
    }

    // 8. Historia fija: el paso que cruza el centro de la pantalla manda
    const pasos = document.querySelectorAll(".paso");
    const capturas = document.querySelectorAll(".captura");

    if (pasos.length > 0 && "IntersectionObserver" in window) {
        const observadorPasos = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (!entrada.isIntersecting) return;
                const numero = entrada.target.dataset.paso;
                pasos.forEach(paso => paso.classList.toggle("activo", paso === entrada.target));
                capturas.forEach(captura => captura.classList.toggle("activa", captura.dataset.paso === numero));
            });
        }, { rootMargin: "-50% 0px -50% 0px" });

        pasos.forEach(paso => observadorPasos.observe(paso));
    }

    // 8b. Capítulos de "Quién soy": se enciende el que cruza el centro
    const capitulos = document.querySelectorAll(".capitulo");
    const puntosCapitulo = document.querySelectorAll(".capitulos-puntos span");

    if (capitulos.length > 0 && "IntersectionObserver" in window) {
        const observadorCapitulos = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (!entrada.isIntersecting) return;
                const indice = Array.from(capitulos).indexOf(entrada.target);
                capitulos.forEach((c, i) => c.classList.toggle("activo", i === indice));
                puntosCapitulo.forEach((p, i) => p.classList.toggle("activo", i === indice));
            });
        }, { rootMargin: "-45% 0px -45% 0px" });

        capitulos.forEach(c => observadorCapitulos.observe(c));
    }

    // 8c. La línea del proceso se dibuja al aparecer
    const procesos = document.querySelectorAll(".proceso-lista");

    if (procesos.length > 0 && "IntersectionObserver" in window) {
        const observadorProceso = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("dibujada");
                    observadorProceso.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.4 });

        procesos.forEach(lista => observadorProceso.observe(lista));
    } else {
        procesos.forEach(lista => lista.classList.add("dibujada"));
    }

    // 9. Contadores que suben al aparecer
    const contadores = document.querySelectorAll("[data-contar]");

    if (contadores.length > 0 && !reducirMovimiento && "IntersectionObserver" in window) {
        const contar = (elemento) => {
            const final = Number(elemento.dataset.contar);
            const duracion = 900;
            let inicio = null;

            const paso = (tiempo) => {
                if (inicio === null) inicio = tiempo;
                const t = limitar((tiempo - inicio) / duracion, 0, 1);
                const suavizado = 1 - Math.pow(1 - t, 3);
                elemento.textContent = Math.round(final * suavizado);
                if (t < 1) requestAnimationFrame(paso);
            };

            elemento.textContent = "0";
            requestAnimationFrame(paso);
        };

        const observadorCifras = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    contar(entrada.target);
                    observadorCifras.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.6 });

        contadores.forEach(contador => observadorCifras.observe(contador));
    }

    // 10. Tarjetas con inclinación 3D y brillo que sigue al ratón
    if (conRaton && !reducirMovimiento) {
        document.querySelectorAll(".feature-card, .project-card, .tesela, .info-card, .cert-card, .timeline-card, .about-card-box, .sidebar-block, .contact-card-item").forEach(tarjeta => {
            tarjeta.classList.add("inclinable");

            tarjeta.addEventListener("pointermove", (e) => {
                const caja = tarjeta.getBoundingClientRect();
                const x = (e.clientX - caja.left) / caja.width;
                const y = (e.clientY - caja.top) / caja.height;

                tarjeta.classList.add("inclinando");
                tarjeta.style.transform =
                    "perspective(900px) rotateX(" + ((0.5 - y) * 7).toFixed(2) + "deg) rotateY(" +
                    ((x - 0.5) * 7).toFixed(2) + "deg) translateY(-4px)";
                tarjeta.style.setProperty("--brillo-x", (x * 100).toFixed(1) + "%");
                tarjeta.style.setProperty("--brillo-y", (y * 100).toFixed(1) + "%");
            });

            tarjeta.addEventListener("pointerleave", () => {
                tarjeta.classList.remove("inclinando");
                tarjeta.style.transform = "";
            });
        });
    }

    // 11. Botones magnéticos: se acercan un poco al cursor
    if (conRaton && !reducirMovimiento) {
        document.querySelectorAll(".magnetico, main .btn-primary:not(.btn-full), main .btn-secondary").forEach(boton => {
            boton.classList.add("magnetico");
            boton.addEventListener("pointermove", (e) => {
                const caja = boton.getBoundingClientRect();
                const x = limitar((e.clientX - caja.left - caja.width / 2) * 0.3, -10, 10);
                const y = limitar((e.clientY - caja.top - caja.height / 2) * 0.4, -8, 8);
                boton.classList.add("atraido");
                boton.style.translate = x.toFixed(1) + "px " + y.toFixed(1) + "px";
            });

            boton.addEventListener("pointerleave", () => {
                boton.classList.remove("atraido");
                boton.style.translate = "";
            });
        });
    }

    // 12. Imágenes de proyectos que se descubren al entrar en pantalla
    const imagenesProyecto = document.querySelectorAll(".project-img");

    if (imagenesProyecto.length > 0 && !reducirMovimiento && "IntersectionObserver" in window) {
        raiz.classList.add("js-recorte");

        const observadorImagenes = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.querySelector(".project-img").classList.add("descubierta");
                    observadorImagenes.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.15 });

        // Se observa la tarjeta: la imagen recortada no cuenta como visible
        imagenesProyecto.forEach(imagen => observadorImagenes.observe(imagen.closest(".project-card") || imagen));
    }

    // 13. Caso de estudio: la miniatura se convierte en la portada (App Store)
    document.querySelectorAll(".abrir-caso").forEach(boton => {
        const dialogo = document.getElementById(boton.dataset.dialogo);
        if (!dialogo) return;

        const miniatura = boton.closest(".project-card").querySelector(".caso-miniatura");
        const portada = dialogo.querySelector(".caso-portada img");
        const conTransicion = () => Boolean(document.startViewTransition) && !reducirMovimiento && miniatura && portada;

        const mostrar = () => {
            dialogo.showModal();
            raiz.classList.add("caso-abierto");
        };

        const ocultar = () => {
            dialogo.close();
            raiz.classList.remove("caso-abierto");
        };

        const abrir = () => {
            if (!conTransicion()) {
                mostrar();
                return;
            }

            raiz.classList.add("caso-vt");
            dialogo.style.transition = "none";
            miniatura.style.viewTransitionName = "caso-imagen";

            const transicion = document.startViewTransition(() => {
                miniatura.style.viewTransitionName = "";
                portada.style.viewTransitionName = "caso-imagen";
                mostrar();
            });

            transicion.finished.finally(() => {
                portada.style.viewTransitionName = "";
                dialogo.style.transition = "";
                raiz.classList.remove("caso-vt");
            });
        };

        const cerrar = () => {
            if (!conTransicion()) {
                ocultar();
                boton.focus();
                return;
            }

            raiz.classList.add("caso-vt");
            portada.style.viewTransitionName = "caso-imagen";

            const transicion = document.startViewTransition(() => {
                portada.style.viewTransitionName = "";
                miniatura.style.viewTransitionName = "caso-imagen";
                ocultar();
            });

            transicion.finished.finally(() => {
                miniatura.style.viewTransitionName = "";
                raiz.classList.remove("caso-vt");
                boton.focus();
            });
        };

        boton.addEventListener("click", abrir);
        dialogo.querySelector(".caso-cerrar").addEventListener("click", cerrar);

        // Esc y clic fuera de la ficha cierran con la misma animación
        dialogo.addEventListener("cancel", (e) => {
            e.preventDefault();
            cerrar();
        });

        dialogo.addEventListener("click", (e) => {
            if (e.target === dialogo) cerrar();
        });

        // Si se llega con proyectos.html#caso-dashboard, se abre directamente
        const tarjeta = boton.closest(".project-card");
        if (tarjeta && tarjeta.id && window.location.hash === "#" + tarjeta.id) {
            setTimeout(mostrar, 450);
        }
    });

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
