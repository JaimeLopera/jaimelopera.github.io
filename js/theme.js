(function () {
    var guardado = null;

    try {
        guardado = localStorage.getItem("tema");
    } catch (e) {}

    var oscuroSistema = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var tema = guardado || (oscuroSistema ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", tema);

    document.addEventListener("DOMContentLoaded", function () {
        var boton = document.getElementById("themeToggle");
        var raiz = document.documentElement;

        if (!boton) {
            return;
        }

        function actualizarEtiqueta() {
            var esOscuro = raiz.getAttribute("data-theme") === "dark";
            boton.setAttribute("aria-label", esOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
        }

        function aplicar(nuevo) {
            raiz.setAttribute("data-theme", nuevo);

            try {
                localStorage.setItem("tema", nuevo);
            } catch (e) {}

            actualizarEtiqueta();
        }

        actualizarEtiqueta();

        boton.addEventListener("click", function () {
            var esOscuro = raiz.getAttribute("data-theme") === "dark";
            var nuevo = esOscuro ? "light" : "dark";
            var reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (!document.startViewTransition || reducir) {
                raiz.classList.add("tema-transicion");
                aplicar(nuevo);

                window.setTimeout(function () {
                    raiz.classList.remove("tema-transicion");
                }, 600);

                return;
            }

            var caja = boton.getBoundingClientRect();
            var x = caja.left + caja.width / 2;
            var y = caja.top + caja.height / 2;
            var radio = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

            raiz.classList.add("tema-vt");

            var transicion = document.startViewTransition(function () {
                aplicar(nuevo);
            });

            transicion.finished.finally(function () {
                raiz.classList.remove("tema-vt");
            });

            transicion.ready.then(function () {
                raiz.animate(
                    {
                        clipPath: [
                            "circle(0px at " + x + "px " + y + "px)",
                            "circle(" + radio + "px at " + x + "px " + y + "px)"
                        ]
                    },
                    {
                        duration: 650,
                        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
                        pseudoElement: "::view-transition-new(root)"
                    }
                );
            });
        });
    });
})();
