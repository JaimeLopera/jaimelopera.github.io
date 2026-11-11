"use strict";

/* ==========================================================
   Cambio de idioma ES / EN
   - Español es el idioma "original" del HTML.
   - Cada clave de abajo es el texto exacto en español y su
     valor es la traducción al inglés.
   - Si cambias un texto en español en el HTML, cambia también
     la clave aquí (si no, esa frase se quedará en español).
   ========================================================== */

const CLAVE_IDIOMA = "idioma";

const traducciones = {
    /* ---------- Común: navbar, footer, títulos ---------- */
    "Inicio": "Home",
    "Experiencia": "Experience",
    "Proyectos": "Projects",
    "Sobre mí": "About me",
    "Contacto": "Contact",
    "Desarrollo web | Granada": "Web development | Granada",
    "Privacidad": "Privacy",
    "Jaime Lopera | Desarrollo web": "Jaime Lopera | Web development",
    "Experiencia y formación — Jaime Lopera": "Experience and education — Jaime Lopera",
    "Contacto — Jaime Lopera": "Contact — Jaime Lopera",
    "Privacidad — Jaime Lopera": "Privacy — Jaime Lopera",
    "Proyectos — Jaime Lopera": "Projects — Jaime Lopera",
    "Sobre mí — Jaime Lopera": "About me — Jaime Lopera",

    /* ---------- index.html ---------- */
    "Estudiante de DAW · Desarrollo web": "DAW student · Web development",
    "Descargar CV": "Download CV",
    "Estoy haciendo el ciclo de": "I'm doing the",
    "Desarrollo de Aplicaciones Web (DAW) bilingüe": "bilingual Web Application Development (DAW)",
    "en Granada. Me gusta entender cómo funcionan las cosas y dejar el código ordenado. Ahora busco unas prácticas en un equipo real, donde pueda aportar y aprender de gente con más experiencia.":
        "programme in Granada. I like understanding how things work and keeping my code tidy. Now I'm looking for an internship with a real team, where I can contribute and learn from more experienced people.",
    "Buscando prácticas": "Looking for an internship",
    "Ver mis proyectos": "See my projects",
    "Escríbeme": "Get in touch",
    "2º DAW": "2nd-year DAW",
    "Inglés": "English",
    "Lo que he ido aprendiendo en clase y por mi cuenta.": "What I've been learning in class and on my own.",
    "Programación web": "Web programming",
    "Maqueto con HTML y CSS, actualmente formándome en JavaScript, PHP y SQL. También he usado Python.":
        "I build layouts with HTML and CSS, and I'm currently training in JavaScript, PHP and SQL. I've also used Python.",
    "Ver proyectos →": "See projects →",
    "Diseño de interfaces": "Interface design",
    "Antes de programar una web suelo diseñarla en Figma. Así veo antes los problemas y el resultado queda más cuidado.":
        "Before coding a website I usually design it in Figma. That way I spot problems earlier and the result is more polished.",
    "Ver el microsite →": "See the microsite →",
    "Documento lo que aprendo": "I document what I learn",
    "Llevo mis propias notas de desarrollo web organizadas por lenguaje y herramienta en":
        "I keep my own web development notes, organised by language and tool, in",
    "Visualizar →": "View →",
    "Con qué trabajo": "What I work with",
    "¿Buscas un Desarrollador Junior?": "Looking for a Junior Developer?",
    "Si tu empresa acepta alumnos en prácticas, me encantaría hablar contigo. Con un correo es suficiente para empezar.":
        "If your company takes on interns, I'd love to talk to you. An email is enough to get started.",

    /* ---------- experiencia.html ---------- */
    "Experiencia y formación": "Experience and education",
    "Dónde he trabajado y qué he estudiado hasta ahora.": "Where I've worked and what I've studied so far.",
    "Mayo 2026": "May 2026",
    "Diseñador web — Kliché Marketing y Publicidad": "Web designer — Kliché Marketing y Publicidad",
    "Granada | Prácticas de Grado": "Granada | Degree work placement",
    "Trabajé en la maquetación de páginas web dentro de una agencia de marketing.":
        "I worked on building web page layouts at a marketing agency.",
    "Formación": "Education",
    "DAW bilingüe (Grado Superior)": "Bilingual DAW (Higher Vocational Degree)",
    "Aquí aprendo desarrollo front-end y back-end, bases de datos y sistemas. Parte de las asignaturas se dan en inglés.":
        "Here I learn front-end and back-end development, databases and systems. Some of the subjects are taught in English.",
    "Bachillerato Tecnológico": "Technological Baccalaureate",
    "Me dio buena base en matemáticas y física, y me ayudó a pensar los problemas con más lógica.":
        "It gave me a solid base in maths and physics, and helped me approach problems more logically.",
    "Cursos y programas": "Courses and programmes",
    "Usos profesionales de la IA generativa": "Professional uses of generative AI",
    "Curso sobre cómo usar herramientas de IA en el trabajo y en programación, y sobre todo cuándo no fiarse de ellas.":
        "A course on how to use AI tools at work and when programming, and above all when not to trust them.",
    "Intercambio juvenil sobre bienestar y salud mental, donde trabajé con gente de otros países.":
        "A youth exchange on wellbeing and mental health, where I worked with people from other countries.",

    /* ---------- proyectos.html ---------- */
    "Mis proyectos": "My projects",
    "Trabajos de clase y proyectos propios. Estoy preparando nuevos proyectos.":
        "Class assignments and personal projects. I'm working on new ones.",
    "Trabajo de clase": "Class assignment",
    "Proyecto propio": "Personal project",
    "Portfolio de un artista": "An artist's portfolio",
    "Práctica de Diseño de Interfaces Web. Primero hice el mockup en Figma y luego lo pasé a código, intentando que se viera igual que el diseño.":
        "Assignment for Web Interface Design. I first made the mockup in Figma and then turned it into code, trying to make it look just like the design.",
    "Visitar ↗": "Visit ↗",
    "Ver en Github ↗": "View on GitHub ↗",

    /* ---------- sobre-mi.html ---------- */
    "Un poco sobre mí": "A little about me",
    "Quién soy, cómo trabajo y con qué herramientas.": "Who I am, how I work and what tools I use.",
    "Hola, soy Jaime": "Hi, I'm Jaime",
    "Vivo en Granada y estudio el grado superior de": "I live in Granada and I'm studying the higher vocational degree in",
    "DAW bilingüe": "bilingual DAW",
    ". Además, fuera de clase, sigo aprendiendo por mi cuenta: hago mis propios proyectos y voy apuntando todo lo que aprendo en mis notas.":
        ". On top of that, outside class I keep learning on my own: I build my own projects and write down everything I learn in my notes.",
    "He trabajado atendiendo al público y con grupos de gente, y eso me ha enseñado a ser cercano, a escuchar y a organizarme cuando hay prisa. Creo que en un equipo importa tanto saber programar como saber explicar lo que haces.":
        "I've worked serving the public and with groups of people, and that has taught me to be approachable, to listen and to organise myself when things get rushed. I think that in a team, knowing how to code matters as much as knowing how to explain what you do.",
    "Quién soy":
        "Who I am",
    "Soy Jaime, vivo en Granada y estudio el grado superior de Desarrollo de Aplicaciones Web (DAW) en modalidad bilingüe. Lo que más me gusta de esta profesión es poder construir cosas que funcionen de principio a fin: desde la idea y el diseño hasta tenerlas publicadas y a la vista de cualquiera.":
        "I'm Jaime, I live in Granada and I'm studying the higher vocational degree in Web Application Development (DAW), bilingual track. What I like most about this profession is being able to build things that work from start to finish: from the idea and the design to having them published and visible to anyone.",
    "Fuera de clase sigo aprendiendo por mi cuenta. Desarrollo mis propios proyectos, pruebo herramientas nuevas y voy documentando todo lo que aprendo en una base de conocimiento personal, así tengo siempre a mano lo que he visto y puedo repasarlo o compartirlo cuando hace falta.":
        "Outside class I keep learning on my own. I build my own projects, try out new tools and document everything I learn in a personal knowledge base, so I always have what I've seen at hand and can review it or share it when needed.",
    "Antes de dedicarme al desarrollo he trabajado de cara al público y con grupos grandes de personas. Esa experiencia me enseñó a ser cercano, a escuchar de verdad y a mantener la calma y organizarme cuando hay prisa, cosas que ahora aplico al trabajo en equipo.":
        "Before getting into development I worked serving the public and with large groups of people. That experience taught me to be approachable, to really listen, and to stay calm and organised when things get rushed, which I now apply to teamwork.",
    "Creo que en un equipo importa tanto saber programar como saber explicar lo que haces, y por eso cuido tanto el código como la forma de comunicarlo. Busco un lugar donde seguir creciendo, aportar desde el primer día y aprender de gente con más experiencia.":
        "I think that in a team, knowing how to code matters as much as knowing how to explain what you do, which is why I care as much about my code as about how I communicate it. I'm looking for a place where I can keep growing, contribute from day one and learn from more experienced people.",
    "Cómo trabajo": "How I work",
    "Aprendo rápido:": "I learn fast:",
    "si no sé algo, lo busco, lo pruebo y lo pregunto.": "if I don't know something, I look it up, try it out and ask.",
    "Código ordenado:": "Tidy code:",
    "prefiero algo sencillo que se entienda a algo \"listo\" que nadie pueda tocar.":
        "I prefer something simple that can be understood over something \"clever\" that nobody can touch.",
    "Hablo claro:": "I communicate clearly:",
    "aviso pronto si algo no va a llegar a tiempo.": "I give early warning if something isn't going to be ready on time.",
    "Tecnologías": "Technologies",
    "Con las que trabajo más": "The ones I use most",
    "Herramientas": "Tools",
    "Idiomas": "Languages",
    "Español": "Spanish",
    "Nativo": "Native",
    "Parte del ciclo lo cursé en inglés, así que estoy acostumbrado a leer documentación y trabajar en ese idioma.":
        "Part of my course was taught in English, so I'm used to reading documentation and working in that language.",

    /* ---------- contacto.html ---------- */
    "Hablemos": "Let's talk",
    "Para unas prácticas, una duda sobre algún proyecto o simplemente para saludar.":
        "About an internship, a question about a project, or just to say hi.",
    "Cómo contactarme": "How to reach me",
    "El correo y LinkedIn son lo que más miro. Suelo contestar el mismo día.":
        "Email and LinkedIn are what I check most. I usually reply the same day.",
    "Ubicación": "Location",
    "Granada, España": "Granada, Spain",
    "Correo": "Email",
    "Escribir correo": "Write an email",
    "Copiar correo": "Copy email",
    "Envíame un mensaje": "Send me a message",
    "Nombre *": "Name *",
    "Tu correo *": "Your email *",
    "Asunto": "Subject",
    "Mensaje *": "Message *",
    "He leído y acepto la": "I have read and accept the",
    "política de privacidad": "privacy policy",
    "Enviar mensaje": "Send message",
    "Página no encontrada — Jaime Lopera": "Page not found — Jaime Lopera",
    "404 · Página no encontrada": "404 · Page not found",
    "Esta dirección no existe o ha cambiado de sitio.": "This address doesn't exist or has moved.",
    "Volver al inicio": "Back to home",
    "No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por correo.": "The message could not be sent. Please try again or email me.",
    "Currículum": "Résumé",
    "Descargar CV en PDF": "Download résumé (PDF)",
    "¡Gracias! He recibido tu mensaje y te responderé pronto.": "Thanks! I've received your message and I'll reply soon.",

    /* ---------- privacidad.html ---------- */
    "Política de privacidad": "Privacy policy",
    "Qué datos recojo con el formulario de contacto y qué hago con ellos.":
        "What data I collect with the contact form and what I do with it.",
    "Responsable": "Data controller",
    "Jaime Lopera Velázquez. Puedes escribirme a": "Jaime Lopera Velázquez. You can write to me at",
    "Qué datos recojo": "What data I collect",
    "Solo los que escribes tú en el formulario de contacto:": "Only what you type into the contact form:",
    "Nombre": "Name",
    "Correo electrónico": "Email address",
    "Asunto (si lo rellenas)": "Subject (if you fill it in)",
    "Mensaje": "Message",
    "Para qué los uso": "What I use it for",
    "Únicamente para leer tu mensaje y responderte. No los uso para publicidad, no los vendo y no los cedo a nadie con otros fines.":
        "Only to read your message and reply to you. I don't use it for advertising, I don't sell it and I don't pass it on to anyone for other purposes.",
    "Base legal": "Legal basis",
    "Tu consentimiento, que das al marcar la casilla de aceptación y enviar el formulario.":
        "Your consent, which you give by ticking the acceptance box and submitting the form.",
    "Formspree: el servicio que envía el formulario": "Formspree: the service that sends the form",
    "Esta web no tiene servidor propio, así que el formulario se gestiona con":
        "This website has no server of its own, so the form is handled by",
    "), un servicio externo con sede en Estados Unidos.": "), an external service based in the United States.",
    "Cuando pulsas \"Enviar mensaje\", tus datos pasan por los servidores de Formspree, que me los reenvía por correo. Esto implica una transferencia de datos fuera de la Unión Europea.":
        "When you press \"Send message\", your data goes through Formspree's servers, which forward it to me by email. This involves a transfer of data outside the European Union.",
    "Formspree tiene su propia política de privacidad, que puedes consultar en su web.":
        "Formspree has its own privacy policy, which you can read on its website.",
    "Cuánto tiempo los conservo": "How long I keep it",
    "El tiempo necesario para atender tu mensaje. Después los elimino de mi correo y del panel de Formspree.":
        "Only as long as needed to deal with your message. After that I delete it from my email and from the Formspree dashboard.",
    "Tus derechos": "Your rights",
    "Puedes pedirme acceso, rectificación o eliminación de tus datos escribiéndome al correo de arriba. Si consideras que no los trato bien, puedes reclamar ante la":
        "You can ask me for access to, correction of or deletion of your data by writing to the email address above. If you think I'm not handling it properly, you can lodge a complaint with the",
    "Agencia Española de Protección de Datos": "Spanish Data Protection Agency (AEPD)",

    /* ---------- Atributos (placeholder, alt, aria-label) ---------- */
    "Tu nombre": "Your name",
    "tu@correo.com": "you@email.com",
    "Prácticas, proyecto, saludo...": "Internship, project, hello...",
    "Cuéntame...": "Tell me...",
    "Captura del microsite de Bad Bunny": "Screenshot of the Bad Bunny microsite",
    "Abrir menú": "Open menu",
    "Cambiar a modo oscuro": "Switch to dark mode",
    "Cambiar a modo claro": "Switch to light mode"
};

/* ---------- Utilidades ---------- */

// Quita el selector de emoji (\uFE0F), colapsa espacios y recorta
function normalizar(texto) {
    return texto.replace(/\uFE0F/g, "").replace(/\s+/g, " ").trim();
}

// Diccionario con las claves ya normalizadas
const diccionario = new Map(
    Object.entries(traducciones).map(([es, en]) => [normalizar(es), en])
);

const ATRIBUTOS_TRADUCIBLES = ["placeholder", "alt", "aria-label"];
const originalesTexto = new WeakMap(); // nodo de texto -> texto original en español
let idiomaActual = "es";

/* ---------- Obtener y aplicar Traducciones ---------- */

function obtenerNodosDeTexto() {
    const recorrido = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
        acceptNode(nodo) {
            const padre = nodo.parentElement;
            if (!padre || padre.tagName === "SCRIPT" || padre.tagName === "STYLE") {
                return NodeFilter.FILTER_REJECT;
            }
            return nodo.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });

    const nodos = [];
    while (recorrido.nextNode()) nodos.push(recorrido.currentNode);
    return nodos;
}

function traducirTextos(idioma) {
    obtenerNodosDeTexto().forEach((nodo) => {
        if (!originalesTexto.has(nodo)) originalesTexto.set(nodo, nodo.nodeValue);
        const original = originalesTexto.get(nodo);

        const traduccion = idioma === "en" ? diccionario.get(normalizar(original)) : null;
        if (traduccion) {
            // Mantenemos los espacios de los extremos (importante junto a <strong>, <a>...)
            const inicio = original.match(/^\s*/)[0];
            const fin = original.match(/\s*$/)[0];
            nodo.nodeValue = inicio + traduccion + fin;
        } else {
            nodo.nodeValue = original;
        }
    });
}

function traducirAtributos(idioma) {
    document.querySelectorAll("[placeholder], [alt], [aria-label]").forEach((elemento) => {
        // Evitamos sobreescribir el aria-label dinámico del nuevo botón
        if (elemento.id === "lang-toggle") return;

        ATRIBUTOS_TRADUCIBLES.forEach((atributo) => {
            if (!elemento.hasAttribute(atributo)) return;

            const guardado = "data-es-" + atributo;
            if (!elemento.hasAttribute(guardado)) {
                elemento.setAttribute(guardado, elemento.getAttribute(atributo));
            }

            const original = elemento.getAttribute(guardado);
            const traduccion = idioma === "en" ? diccionario.get(normalizar(original)) : null;
            elemento.setAttribute(atributo, traduccion || original);
        });
    });
}

function aplicarIdioma(idioma) {
    idiomaActual = idioma;
    traducirTextos(idioma);
    traducirAtributos(idioma);
    document.documentElement.lang = idioma; // Actualiza el lang del HTML para accesibilidad y SEO
}

/* ---------- Inicialización y Lógica del Botón Animado ---------- */

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    
    // Si no existe el botón en la página (por algún motivo), solo traducimos
    if (!langToggle) {
        let guardado = "es";
        try { guardado = localStorage.getItem(CLAVE_IDIOMA) === "en" ? "en" : "es"; } catch (e) {}
        aplicarIdioma(guardado);
        return;
    }

    const labelEs = document.querySelector('.lang-label.es');
    const labelEn = document.querySelector('.lang-label.en');
    
    // 1. Lee el idioma actual desde localStorage
    let guardado = "es";
    try {
        guardado = localStorage.getItem(CLAVE_IDIOMA) === "en" ? "en" : "es";
    } catch (error) {
        guardado = "es";
    }

    // 2. Ajusta la animación al cargar la página para que coincida con el idioma guardado
    if (guardado === 'en') {
        langToggle.classList.add('is-en');
        labelEs.classList.remove('active');
        labelEn.classList.add('active');
        langToggle.setAttribute("aria-label", "Cambiar a español");
    } else {
        langToggle.setAttribute("aria-label", "Switch to English");
    }

    // 3. Traduce la página por primera vez
    aplicarIdioma(guardado);

    // 4. Configura el evento click
    langToggle.addEventListener('click', () => {
        langToggle.classList.toggle('is-en');
        
        let nuevoIdioma;
        if (langToggle.classList.contains('is-en')) {
            labelEs.classList.remove('active');
            labelEn.classList.add('active');
            langToggle.setAttribute("aria-label", "Cambiar a español");
            nuevoIdioma = 'en';
        } else {
            labelEn.classList.remove('active');
            labelEs.classList.add('active');
            langToggle.setAttribute("aria-label", "Switch to English");
            nuevoIdioma = 'es';
        }

        // Ejecuta la función de traducción
        aplicarIdioma(nuevoIdioma);
        
        // Guarda la preferencia
        try {
            localStorage.setItem(CLAVE_IDIOMA, nuevoIdioma);
        } catch (error) {
            console.warn("No se pudo guardar el idioma en localStorage");
        }
    });
});