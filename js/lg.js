document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("language") || "en"; // Usa el idioma guardado o "en" por defecto
    i18next.changeLanguage(savedLang, updateContent);

    // Aplicar clase "colors" al botón seleccionado
    document.querySelectorAll(".lg").forEach(el => el.classList.remove("colors"));
    const selectedLangButton = document.querySelector(`[onclick="changeLanguage('${savedLang}', this)"]`);
    if (selectedLangButton) {
        selectedLangButton.classList.add("colors");
    }
});

i18next.init({
    lng: localStorage.getItem("language") || "en", 
    debug: true,
    resources: {
        en: {
            translation: {
                "HOME":"HOME",
                "BIO": "BIO",
                "TRABAJOS": "WORKS",
                "EXPERIMENTOS": "EXPERIMENTS",
                "CONTACTO": "CONTACT",
                "DESARROLLO": "DEVELOPment is",
                "LA": "THE",
                "RESPUESTA": "Answer",
                "CREANDO": "/CREATING",
                "developer": "I'm a frontend developer",
                "passion": "with a passion for crafting",
                "experiences": "seamless, interactive experiences.",
                "expertise": "My expertise goes beyond just the frontend—I have experience with",
                "api_dev": "API development, Node.js, and full-stack logic.",
                "allowing": "allowing me to build",
                "high_performance": "well-rounded, high-performance applications.",
                "foundation": "With a strong technical foundation, I make complex concepts accessible and engaging.",
                "love": "I love creating",
                "ui": "intuitive user interfaces,",
                "experimenting": "experimenting with",
                "animations": "animations,",
                "life": "and bringing digital experiences to life.",
                "more_than": "More than just building, I aim",
                "communities": "to foster great developer experiences and communities",
                "around": "around the tools I work with.",
                "data-exp": "Own projects where I explore new technologies, frameworks and concepts.",
                "data-work":"Latest Works",
                "scaling": "Scaling",
                "projects": "Projects",
                "for_impact": "for Impact.",
                "scaling_projects": "Scaling <em>Projects</em> for Impact.",
                "Enlances":"/Quick links"
            }
        },
        es: {
            translation: {
                "HOME":"INICIO",
                "BIO": "BIO",
                "TRABAJOS": "TRABAJOS",
                "EXPERIMENTOS": "EXPERIMENTOS",
                "CONTACTO": "CONTACTO",
                "DESARROLLO": "EL DESARROLLO",
                "LA": "ES LA",
                "RESPUESTA": "RESPUESTA",
                "CREANDO": "/CREANDO",
                "developer": "Soy un desarrollador frontend",
                "passion": "con pasión por crear",
                "experiences": "experiencias fluidas e interactivas.",
                "expertise": "Mi experiencia va más allá del frontend: tengo conocimientos en",
                "api_dev": "desarrollo de API, Node.js y lógica full-stack.",
                "allowing": "lo que me permite crear",
                "high_performance": "aplicaciones completas y de alto rendimiento.",
                "foundation": "Con una sólida base técnica, hago que los conceptos complejos sean accesibles y atractivos.",
                "love": "Me encanta crear",
                "ui": "interfaces de usuario intuitivas,",
                "experimenting": "experimentar con",
                "animations": "animaciones,",
                "life": "y dar vida a experiencias digitales.",
                "more_than": "Más que solo construir, mi objetivo es",
                "communities": "fomentar excelentes experiencias para desarrolladores y comunidades",
                "around": "en torno a las herramientas con las que trabajo.",
                "data-exp": "Proyectos propios donde exploro nuevas tecnologías, frameworks y conceptos.",
                "data-work":"Ultimos Trabajos",
                "scaling": "Escalando",
                "projects": "Proyectos",
                "for_impact": "para Generar Impacto.",
                 "scaling_projects": "Escalando <em>Proyectos</em> para Generar Impacto.",
                 "Enlances":"/Enlaces rápidos"
            }
        }
    }
}, function (err, t) {
    updateContent();
});

function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.innerHTML = i18next.t(element.getAttribute("data-i18n"));
    });
}

function changeLanguage(lng, element) {
    i18next.changeLanguage(lng, updateContent);
    localStorage.setItem("language", lng); // Guarda el idioma seleccionado

    document.querySelectorAll('.lg').forEach(el => el.classList.remove('colors'));
    if (element) {
        element.classList.add("colors");
    }
}
