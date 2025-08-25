const i18n = {
  en:{
    nav:{work:"Work",services:"Services",about:"About",contact:"Contact"},
    hero:{title:"Bold imagination. <span class='grad'>Premium execution.</span>",sub:"AI-powered campaigns, videos and design — faster, smarter and unforgettable."},
    cta:{start:"Start your project",work:"See work"},
    work:{title:"Work that makes people say: “How did they even think of that?”",item1:"Spec Film — “New Era”",item2:"Brand Identity — Flux Roasters",item3:"Motion Graphics — Aurora Labs"},
    services:{title:"All the creative firepower you need — powered by AI, directed by humans.",
      s1:{title:"AI Video & Animation",copy:"From commercials to 3D worlds, we bring stories to life."},
      s2:{title:"Branding & Design",copy:"Logos, campaigns and content people remember."},
      s3:{title:"Story & Strategy",copy:"Scripts, storyboards and big ideas — crafted with precision."},
      s4:{title:"Games & Interactive",copy:"From board games to digital experiences — we create play."}
    },
    about:{title:"We’re humans + AI, working in perfect synergy.",copy:"We blend human imagination with AI speed to deliver work that feels fresh, bold and a little bit magical."},
    values:{fast:"Fast",creative:"Imaginative",premium:"Premium",human:"Human"},
    edge:{title:"Why Zyera",i1:{t:"Speed",c:"Days, not months."},i2:{t:"Creativity",c:"Ideas that wow."},i3:{t:"Human Direction",c:"Always on-brand."},i4:{t:"Fun",c:"We love the craft."}},
    cta2:{title:"Ready to create something awesome?",btn:"Start your project"},
    contact:{title:"Start your project",sub:"Tell us about your idea. We’ll reply within 24 hours."},
    form:{name:"Your name",email:"Email",type:"Project type",msg:"What do you want to create?",send:"Send",opt:{video:"Video",branding:"Branding",animation:"Animation",other:"Other"}},
    footer:{copy:"Made with imagination + AI in Honduras 🌎 shared with the world."}
  },
  es:{
    nav:{work:"Trabajo",services:"Servicios",about:"Nosotros",contact:"Contacto"},
    hero:{title:"Imaginación audaz. <span class='grad'>Ejecución premium.</span>",sub:"Campañas, videos y diseño con IA — más rápidos, más inteligentes e inolvidables."},
    cta:{start:"Inicia tu proyecto",work:"Ver trabajo"},
    work:{title:"Trabajos que te hacen decir: “¿Cómo se les ocurrió eso?”",item1:"Corto publicitario — “Nueva Era”",item2:"Identidad — Flux Roasters",item3:"Motion Graphics — Aurora Labs"},
    services:{title:"Todo el poder creativo que necesitas — con IA y dirección humana.",
      s1:{title:"Video y Animación con IA",copy:"De comerciales a mundos 3D: damos vida a historias."},
      s2:{title:"Branding y Diseño",copy:"Logos, campañas y contenido que se recuerda."},
      s3:{title:"Historia y Estrategia",copy:"Guiones, storyboards e ideas grandes — con precisión."},
      s4:{title:"Juegos e Interactivos",copy:"De juegos de mesa a experiencias digitales — creamos juego."}
    },
    about:{title:"Humanos + IA, en perfecta sinergia.",copy:"Unimos imaginación humana con velocidad de IA para entregar trabajo fresco, audaz y un poco mágico."},
    values:{fast:"Rápidos",creative:"Imaginativos",premium:"Premium",human:"Humanos"},
    edge:{title:"Por qué Zyera",i1:{t:"Velocidad",c:"Días, no meses."},i2:{t:"Creatividad",c:"Ideas que sorprenden."},i3:{t:"Dirección Humana",c:"Siempre on‑brand."},i4:{t:"Diversión",c:"Amamos el oficio."}},
    cta2:{title:"¿Listo para crear algo increíble?",btn:"Inicia tu proyecto"},
    contact:{title:"Inicia tu proyecto",sub:"Cuéntanos tu idea. Respondemos en 24 horas."},
    form:{name:"Tu nombre",email:"Email",type:"Tipo de proyecto",msg:"¿Qué quieres crear?",send:"Enviar",opt:{video:"Video",branding:"Branding",animation:"Animación",other:"Otro"}},
    footer:{copy:"Hecho con imaginación + IA en Honduras 🌎 y compartido con el mundo."}
  },
  de:{
    nav:{work:"Arbeiten",services:"Leistungen",about:"Über uns",contact:"Kontakt"},
    hero:{title:"Kühnste Vorstellungskraft. <span class='grad'>Premium‑Ausführung.</span>",sub:"KI‑gestützte Kampagnen, Videos und Design — schneller, smarter, unvergesslich."},
    cta:{start:"Projekt starten",work:"Arbeiten ansehen"},
    work:{title:"Arbeiten, bei denen man denkt: „Wie sind sie darauf gekommen?“",item1:"Werbefilm — „New Era“",item2:"Brand Identity — Flux Roasters",item3:"Motion Graphics — Aurora Labs"},
    services:{title:"Alle kreative Power, die du brauchst — mit KI, geführt von Menschen.",
      s1:{title:"KI‑Video & Animation",copy:"Von Werbespots bis 3D‑Welten — wir erwecken Geschichten."},
      s2:{title:"Branding & Design",copy:"Logos, Kampagnen und Content, der bleibt."},
      s3:{title:"Story & Strategie",copy:"Drehbücher, Storyboards und große Ideen — präzise umgesetzt."},
      s4:{title:"Games & Interaktiv",copy:"Von Brettspielen bis digitalen Erlebnissen — wir schaffen Spielwelten."}
    },
    about:{title:"Menschen + KI in perfekter Synergie.",copy:"Wir verbinden menschliche Vorstellungskraft mit KI‑Geschwindigkeit für frische, kühne, magische Ergebnisse."},
    values:{fast:"Schnell",creative:"Kreativ",premium:"Premium",human:"Menschlich"},
    edge:{title:"Warum Zyera",i1:{t:"Speed",c:"Tage, nicht Monate."},i2:{t:"Kreativität",c:"Ideen mit Wow."},i3:{t:"Human Direction",c:"Immer on‑brand."},i4:{t:"Spaß",c:"Wir lieben das Handwerk."}},
    cta2:{title:"Bereit, etwas Großartiges zu erschaffen?",btn:"Projekt starten"},
    contact:{title:"Projekt starten",sub:"Erzähl uns deine Idee. Antwort in 24 Stunden."},
    form:{name:"Dein Name",email:"E‑Mail",type:"Projekttyp",msg:"Was möchtest du erschaffen?",send:"Senden",opt:{video:"Video",branding:"Branding",animation:"Animation",other:"Sonstiges"}},
    footer:{copy:"Mit Vorstellungskraft + KI in Honduras 🌎 erschaffen und mit der Welt geteilt."}
  }
};

function applyLang(lang){
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const path = el.getAttribute("data-i18n").split(".");
    let val = dict;
    path.forEach(k=>{ if(val) val = val[k]; });
    if(typeof val === "string"){ el.innerHTML = val; }
  });
  // placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const path = el.getAttribute("data-i18n-ph").split(".");
    let val = dict;
    path.forEach(k=>{ if(val) val = val[k]; });
    if(typeof val === "string"){ el.setAttribute("placeholder", val); }
  });
  // select options
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    if(el.tagName === "OPTION"){
      const path = el.getAttribute("data-i18n").split(".");
      let val = dict;
      path.forEach(k=>{ if(val) val = val[k]; });
      if(typeof val === "string"){ el.textContent = val; }
    }
  });
  localStorage.setItem("zyera_lang", lang);
}

document.getElementById("lang-switch").addEventListener("change", (e)=> applyLang(e.target.value));

// init
const saved = localStorage.getItem("zyera_lang") || "en";
document.getElementById("lang-switch").value = saved;
applyLang(saved);
