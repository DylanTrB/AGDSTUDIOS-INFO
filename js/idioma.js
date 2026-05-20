const translations = {
  es: {
    // Traduccion Index Html
    "nav-home": "Inicio",
    "nav-login": "Login",
    "nav-services": "Servicios",
    "nav-about": "Sobre Nosotros",
    "nav-contact": "Contacto",

    "hero-title": "Creación Profesional de Servidores FiveM GTA 5 Roleplay",
    "hero-text": "Configuramos, optimizamos y lanzamos tu servidor RP listo para jugar.",
    "hero-btn": "Empezar Ahora",

    "fivem-title": "¿Qué es FiveM?",
    "fivem-p1": "FiveM es una plataforma de modificación multijugador para Grand Theft Auto V que permite crear servidores completamente personalizados.",
    "fivem-p2": "A diferencia del modo online oficial, FiveM no utiliza los servidores de Rockstar, sino que funciona mediante servidores independientes creados por la comunidad.",
    "fivem-p3": "Esto permite instalar scripts, mods, vehículos personalizados, mapas, sistemas de economía y experiencias de roleplay más avanzadas.",
    "fivem-p4": "Además, ofrece gran libertad a los desarrolladores, ya que se pueden programar sistemas propios usando lenguajes como Lua, JavaScript o C#.",
    "fivem-p5": "Gracias a su flexibilidad, FiveM se ha convertido en una de las plataformas más populares para crear comunidades de rol dentro de GTA V.",

    "descarga-texto": "Descargar",
    
    
    // Traduccion Servicios Html
    "service": "Servicio",
    "Instalacion-text": "Instalación de Servidores",
    "Instalacion-text1": "Montamos tu servidor FiveM desde cero con configuración optimizada.",
    "Instalacion-text2": "Scripts Personalizados",
    "Instalacion-text3": "Desarrollo e instalación de scripts para mejorar la experiencia roleplay.",
    "Instalacion-text4": "Optimización",
    "Instalacion-text5": "Mejoramos rendimiento y estabilidad para evitar lag y problemas.",
    
    "footer-text": "© 2026 AGD - Servidores FiveM GTA5 Roleplay"

     // Traduccion login Html


  },

  en: {
    "nav-home": "Home",
    "nav-login": "Login",
    "nav-services": "Services",
    "nav-about": "About Us",
    "nav-contact": "Contact",

    "hero-title": "Professional Creation of FiveM GTA 5 Roleplay Servers",
    "hero-text": "We configure, optimize and launch your RP server ready to play.",
    "hero-btn": "Start Now",

    "fivem-title": "What is FiveM?",
    "fivem-p1": "FiveM is a multiplayer modification platform for Grand Theft Auto V that allows fully customized servers.",
    "fivem-p2": "Unlike the official online mode, FiveM does not use Rockstar servers but independent community servers.",
    "fivem-p3": "This allows installing scripts, mods, custom vehicles, maps, economy systems and advanced roleplay experiences.",
    "fivem-p4": "It also offers great freedom to developers, allowing custom systems using Lua, JavaScript or C#.",
    "fivem-p5": "Thanks to its flexibility, FiveM has become one of the most popular platforms for GTA V roleplay communities.",

    "descarga-texto": "Download",


   // Traduccion Servicios Html

    "service": "Service",
    "Instalacion-text": "Server Installation",
    "Instalacion-text1": "We set up your FiveM server from scratch with optimized configuration.",
    "Instalacion-text2": "Custom Scripts",
    "Instalacion-text3": "Development and installation of scripts to improve the roleplay experience.",
    "Instalacion-text4": "Optimization",
    "Instalacion-text5": "We improve performance and stability to avoid lag and issues.",


    "footer-text": "© 2026 AGD - FiveM GTA5 Roleplay Servers"
  }
};

function changeLanguage(lang) {
  Object.keys(translations[lang]).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = translations[lang][id];
    }
  });

  localStorage.setItem("lang", lang);
}

window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "es";
  changeLanguage(savedLang);
};