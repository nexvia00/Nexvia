import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const STORAGE_KEY = "nexvia-lang";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        solutions: "Soluciones",
        contact: "Contacto",
        cta: "Ver Soluciones",
        skip: "Saltar al contenido",
        menu: "Menú",
      },
      hero: {
        eyebrow: "Tecnología local · Yucatán",
        title: "Somos el nexo hacia una nueva vía.",
        sub: "Si hay que explicarlo mucho, no está bien hecho. Sistemas, sitios web y tecnología diseñada para negocios reales en Yucatán. Sin complicaciones, sin tecnicismos.",
        ctaPrimary: "Ver Soluciones",
        ctaSecondary: "Hablar por WhatsApp",
        scroll: "Desplázate",
      },
      why: {
        eyebrow: "Por qué existimos",
        statement:
          "Muchos negocios aquí en Yucatán siguen con cuaderno y calculadora — no porque quieran, sino porque llevan años vendiéndoles tecnología que no entienden, a precios que no se pueden pagar, con soporte que nunca llega. Nexvia existe para cambiar esto.",
        pills: [
          "Mejora la gestión de tu negocio",
          "Aplica soluciones de reingeniería",
          "Reduce costos de tus operaciones",
          "Trabaja de forma eficiente",
          "Expande tu mercado y marca",
        ],
      },
      products: {
        eyebrow: "Nuestros productos",
        title: "Dos soluciones, hechas para tu negocio.",
        site: {
          name: "Nexvia Site",
          tagline: "Presencia Digital y Ventas en Línea",
          desc: "Sitios web rápidos y modernos que convierten visitas en clientes — sin tecnicismos.",
          slogan: "Presencia digital que funciona desde el primer día.",
          from: "desde $1,475 MXN",
          placeholder: "Tu sitio web, listo en días",
        },
        pos: {
          name: "Nexvia POS",
          tagline: "Punto de Venta para Cocinas y Tiendas",
          desc: "Sistemas de venta hechos para la realidad del negocio. Fáciles de usar.",
          slogan: "El sistema se adapta a tu negocio — no al revés.",
          from: "desde $1,200 MXN",
        },
        cta: "Ver planes y precios",
      },
      diff: {
        eyebrow: "Por qué Nexvia",
        title: "Las razones que nos hacen diferentes.",
        items: [
          {
            title: "Somos locales",
            desc: "Tenemos oficina en Hunucmá, Yucatán. No eres un ticket de soporte — eres un vecino.",
          },
          {
            title: "Propuesta",
            desc: "Trabajamos con negocios como el tuyo para demostrar lo que vales.",
          },
          {
            title: "Sin tecnicismos",
            desc: "Explicamos todo en términos que cualquier dueño de negocio entiende.",
          },
          {
            title: "Tú tienes el control",
            desc: "Los sistemas son tuyos. Puedes operarlos y personalizarlos a tus necesidades.",
          },
        ],
      },
      faq: {
        eyebrow: "Preguntas frecuentes",
        title: "Lo que más nos preguntan.",
        items: [
          {
            q: "¿Tengo que saber de tecnología para usar sus sistemas?",
            a: "No. Diseñamos todo pensando en personas que nunca han usado un sistema. Si tu madre puede usar WhatsApp, puede usar Nexvia.",
          },
          {
            q: "¿Cuánto tiempo tarda en estar listo?",
            a: "Un sitio básico puede estar en línea en 5 a 7 días. Los sistemas POS toman entre 10 y 20 días según el tamaño del negocio.",
          },
          {
            q: "¿Qué pasa si algo deja de funcionar?",
            a: "Estamos aquí mismo. Atendemos por WhatsApp, llamadas o en persona. Sin tickets, sin bots, sin esperas largas.",
          },
          {
            q: "¿El sistema es mío o lo rento?",
            a: "Es tuyo. Pagas una vez por la implementación y tú decides qué hacer con él. Sin candados, sin sorpresas.",
          },
          {
            q: "¿Los precios cambian conforme pasa el tiempo?",
            a: "No, los clientes actuales conservan su tarifa. Siempre.",
          },
          {
            q: "¿Necesito internet para que funcione el POS?",
            a: "Sí, porque tus servidores e infraestructura utilizan servicios en línea.",
          },
          {
            q: "¿Puedo ver mis ventas desde el celular?",
            a: "Sí puedes. Solo hace falta un teléfono conectado a internet para que las ventas nunca paren.",
          },
          {
            q: "¿Cómo se cobra NEXVIA POS?",
            a: "El pago es anual. Incluye el sistema completo, actualizaciones y soporte. Sin mensualidades sorpresa.",
          },
          {
            q: "¿Puedo personalizar el sistema para mi negocio?",
            a: "Sí. Cada instalación de NEXVIA se configura específicamente para tu negocio. Si necesitas algo que no está en el plan estándar, lo conversamos.",
          },
          {
            q: "¿El pago es mensual o anual?",
            a: "El pago es anual. Incluye sistema completo, actualizaciones y soporte local. Sin mensualidades sorpresa.",
          },
        ],
      },
      finalCta: {
        title: "Nosotros tenemos la respuesta.",
        sub: "Cuéntame de tu negocio y nosotros creamos exactamente lo que necesitas.",
        whatsapp: "Hablar por WhatsApp",
        email: "Enviar correo",
      },
      process: {
        eyebrow: "Cómo trabajamos",
        title: "Del primer mensaje al sistema funcionando.",
        steps: [
          "Nos escribes",
          "Agendamos una plática",
          "Presentamos la propuesta",
          "Diseñamos y desarrollamos",
          "Instalamos",
          "Capacitamos",
        ],
      },
      footer: {
        tagline: "El nexo hacia una nueva vía.",
        quickLinks: "Enlaces rápidos",
        productsCol: "Productos",
        contactCol: "Contacto",
        address: "Calle 27 x 36 y 38 #223b, Col. Santa Rosa, Hunucmá, Yucatán CP 97350",
        rights: "Todos los derechos reservados.",
      },
      solutions: {
        title: "Nuestras Soluciones",
        sub: "Planes claros, precios honestos, entrega rápida. Elige el que mejor se adapta a tu negocio.",
        tabSite: "Nexvia Site",
        tabPos: "Nexvia POS",
        delivery: "Entrega",
        days: "días",
        quote: "Cotizar",
        from: "desde",
        perMonth: "/mes",
        monthlyLabel: "de renta",
        mostPopular: "Más popular",
        wantPlan: "Quiero este plan",
        valueLine: "El sistema se adapta a tu negocio — no al revés. Cada instalación es personalizada.",
        subnav: {
          site: "Nexvia Site",
          tienda: "POS Tienda",
          cocina: "POS Cocina",
        },
        showcase: {
          site: {
            headline: "Tu negocio en línea, listo para vender",
            sub: "Un sitio web profesional que tus clientes encuentran, entienden y desde donde te contactan.",
          },
          tienda: {
            headline: "Tu caja, tu catálogo, tu control",
            sub: "Vende más rápido, conoce tu inventario en tiempo real y cierra el día con números claros.",
            pills: ["Hasta 500 productos", "Cobro en efectivo, tarjeta o mixto", "Corte de caja automático"],
          },
          cocina: {
            headline: "De la comanda a la mesa, sin papel y sin errores",
            sub: "Tu cocina recibe los pedidos en pantalla al instante. Sin gritos, sin pérdidas, sin confusiones.",
            pills: ["Comandas digitales en tiempo real", "KDS para cocina", "Reportes por turno"],
            note: "POS Cocina incluye todo lo de POS Esencial + módulo de cocina",
          },
        },
        posValue: {
          title: "Hecho para tu negocio, no para todos los negocios",
          body: "NEXVIA POS no es un sistema genérico. Cada instalación se configura a las necesidades específicas de tu negocio — tus productos, tus procesos, tu forma de trabajar. Si algo no encaja, lo adaptamos.",
          pills: ["Personalizable", "Sin límites de productos", "Soporte local"],
        },
        included: "Incluido en todos los paquetes",
        inclusions: [
          "Capacitación al equipo",
          "Soporte local en Yucatán",
          "Garantía de implementación",
          "Documentación clara",
          "Atención por WhatsApp",
        ],
        site: {
          basic: {
            name: "Básico",
            price: "$1,475 MXN",
            monthly: "$200",
            tag: "Para negocios que hoy no existen en Google.",
            features: [
              "Sitio de 1 página optimizado",
              "Diseño responsive",
              "Conexión con WhatsApp",
              "Google Maps y SEO básico",
              "Hosting el primer año",
            ],
            delivery: 7,
          },
          comercial: {
            name: "Comercial",
            price: "$2,750 MXN",
            monthly: "$500",
            tag: "Para negocios que quieren vender en línea. Tu catálogo abierto las 24 horas.",
            features: [
              "Sitio de hasta 5 secciones",
              "Catálogo de productos",
              "Formulario de pedidos",
              "Integración con redes sociales",
              "SEO local avanzado",
              "Capacitación de uso",
            ],
            delivery: 14,
          },
          pro: {
            name: "Pro",
            price: "$4,750 MXN",
            monthly: "$700",
            tag: "Tu tienda física y digital, trabajando juntas.",
            features: [
              "Sitio completo personalizado",
              "Tienda en línea con pagos",
              "Conexión con tu POS",
              "Panel para administrar productos",
              "Reportes de visitas y ventas",
              "Soporte prioritario 6 meses",
            ],
            delivery: 21,
          },
        },
        pos: {
          esencial: {
            name: "Esencial",
            price: "$1,200 MXN",
            monthly: "$300",
            tag: "Para tiendas, abarrotes y cualquier tipo de negocio. Cobra más rápido, pierde menos tiempo.",
            features: [
              "Ventas y cobro rápido",
              "Control de inventario",
              "Tickets imprimibles",
              "Reportes diarios",
              "1 punto de venta",
            ],
            delivery: 10,
          },
          cocina: {
            name: "Cocina",
            price: "$2,275 MXN",
            monthly: "$600",
            tag: "La comanda llega a cocina sola — tú solo atiende.",
            features: [
              "Comandas a cocina",
              "Mesas y cuentas separadas",
              "Modificadores de platillos",
              "Control de meseros",
              "Reportes de platillos más vendidos",
            ],
            delivery: 15,
          },
          full: {
            name: "Full",
            price: "$3,128 MXN",
            monthly: "$900",
            tag: "Controla todo desde un solo lugar.",
            features: [
              "Múltiples puntos de venta",
              "Inventario por sucursal",
              "Roles y permisos por usuario",
              "Reportes consolidados",
              "Integración con Nexvia Site",
              "Soporte prioritario 12 meses",
            ],
            delivery: 20,
          },
        },
      },
      contact: {
        title: "Hablemos.",
        sub: "Cuéntanos de tu negocio. Respondemos en menos de 24 horas — usualmente mucho antes.",
        form: {
          name: "Nombre",
          email: "Correo",
          whatsapp: "WhatsApp",
          business: "Negocio",
          plan: "Plan de interés",
          planNone: "No estoy seguro aún",
          message: "Mensaje",
          submit: "Enviar mensaje",
          success: "¡Mensaje listo! Se abrirá tu correo.",
        },
        card: {
          title: "Otros canales",
          whatsapp: "WhatsApp",
          email: "Correo",
          address: "Dirección",
          hours: "Horario",
          hoursValue: "Lun–Vie 9:00–18:00 · Sáb 10:00–14:00",
          mapLabel: "Mapa de nuestra ubicación en Hunucmá",
        },
      },
      common: {
        toggleTheme: "Cambiar tema",
        toggleLang: "Cambiar idioma",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        solutions: "Solutions",
        contact: "Contact",
        cta: "See Solutions",
        skip: "Skip to content",
        menu: "Menu",
      },
      hero: {
        eyebrow: "Local technology · Yucatán",
        title: "We are the link to a new path.",
        sub: "If it needs too much explaining, it isn't done right. Systems, websites, and technology built for real businesses in Yucatán. No complications, no jargon.",
        ctaPrimary: "See Solutions",
        ctaSecondary: "Chat on WhatsApp",
        scroll: "Scroll",
      },
      why: {
        eyebrow: "Why we exist",
        statement:
          "Many businesses in Yucatán still use paper and a calculator — not because they want to, but because they've spent years being sold technology they don't understand, at prices they can't afford, with support that never arrives. Nexvia exists to change this.",
        pills: [
          "Improve your business management",
          "Apply reengineering solutions",
          "Reduce operational costs",
          "Work more efficiently",
          "Expand your market and brand",
        ],
      },
      products: {
        eyebrow: "Our products",
        title: "Two solutions, made for your business.",
        site: {
          name: "Nexvia Site",
          tagline: "Digital Presence and Online Sales",
          desc: "Fast, modern websites that turn visitors into customers — no jargon.",
          slogan: "A digital presence that works from day one.",
          from: "from $1,475 MXN",
          placeholder: "Your website, ready in days",
        },
        pos: {
          name: "Nexvia POS",
          tagline: "Point of Sale for Kitchens and Stores",
          desc: "Sales systems built for the reality of local businesses. Easy to use.",
          slogan: "The system adapts to your business — not the other way around.",
          from: "from $1,200 MXN",
        },
        cta: "See plans & pricing",
      },
      diff: {
        eyebrow: "Why Nexvia",
        title: "The reasons we're different.",
        items: [
          {
            title: "We're local",
            desc: "We have an office in Hunucmá, Yucatán. You're not a support ticket — you're a neighbor.",
          },
          {
            title: "Proposal",
            desc: "We work with businesses like yours to prove what you're worth.",
          },
          {
            title: "No jargon",
            desc: "We explain everything in plain words any business owner understands.",
          },
          {
            title: "You're in control",
            desc: "The systems are yours. You can run and customize them to your needs.",
          },
        ],
      },
      faq: {
        eyebrow: "Frequent questions",
        title: "What people ask us most.",
        items: [
          {
            q: "Do I need to know tech to use your systems?",
            a: "No. We design everything for people who have never used a system. If your mother can use WhatsApp, she can use Nexvia.",
          },
          {
            q: "How long does it take to be ready?",
            a: "A basic site can be live in 5 to 7 days. POS systems take 10 to 20 days depending on the size of the business.",
          },
          {
            q: "What if something stops working?",
            a: "We're right here. We answer by WhatsApp, calls, or in person. No tickets, no bots, no long waits.",
          },
          {
            q: "Is the system mine or do I rent it?",
            a: "It's yours. You pay once for the setup and decide what to do with it. No locks, no surprises.",
          },
          {
            q: "Do prices change over time?",
            a: "No, current clients keep their rate. Always.",
          },
          {
            q: "Do I need internet for the POS to work?",
            a: "Yes, because your servers and infrastructure use online services.",
          },
          {
            q: "Can I see my sales from my phone?",
            a: "Yes you can. You only need a phone connected to the internet so sales never stop.",
          },
          {
            q: "How is NEXVIA POS billed?",
            a: "Payment is annual. It includes the full system, updates and support. No surprise monthly fees.",
          },
          {
            q: "Can I customize the system for my business?",
            a: "Yes. Every NEXVIA installation is configured specifically for your business. If you need something outside the standard plan, we'll talk it through.",
          },
          {
            q: "Is payment monthly or annual?",
            a: "Payment is annual. It includes the full system, updates and local support. No surprise monthly fees.",
          },
        ],
      },
      finalCta: {
        title: "We have the answer.",
        sub: "Tell us about your business and we'll build exactly what you need.",
        whatsapp: "Chat on WhatsApp",
        email: "Send email",
      },
      process: {
        eyebrow: "How we work",
        title: "From first message to working system.",
        steps: [
          "You message us",
          "We schedule a chat",
          "We present the proposal",
          "We design and develop",
          "We install",
          "We train",
        ],
      },
      footer: {
        tagline: "The link to a new path.",
        quickLinks: "Quick links",
        productsCol: "Products",
        contactCol: "Contact",
        address: "Calle 27 x 36 y 38 #223b, Col. Santa Rosa, Hunucmá, Yucatán CP 97350",
        rights: "All rights reserved.",
      },
      solutions: {
        title: "Our Solutions",
        sub: "Clear plans, honest pricing, fast delivery. Pick the one that fits your business.",
        tabSite: "Nexvia Site",
        tabPos: "Nexvia POS",
        delivery: "Delivery",
        days: "days",
        quote: "Get a quote",
        from: "from",
        perMonth: "/mo",
        monthlyLabel: "rent",
        mostPopular: "Most popular",
        wantPlan: "I want this plan",
        valueLine: "The system adapts to your business — not the other way around. Every installation is personalized.",
        subnav: {
          site: "Nexvia Site",
          tienda: "POS Store",
          cocina: "POS Kitchen",
        },
        showcase: {
          site: {
            headline: "Your business online, ready to sell",
            sub: "A professional website your customers find, understand, and reach you from.",
          },
          tienda: {
            headline: "Your register, your catalog, your control",
            sub: "Sell faster, know your inventory in real time and close the day with clear numbers.",
            pills: ["Up to 500 products", "Cash, card or mixed payment", "Automatic cash close"],
          },
          cocina: {
            headline: "From order to table, no paper and no mistakes",
            sub: "Your kitchen receives orders on screen instantly. No shouting, no losses, no confusion.",
            pills: ["Real-time digital orders", "KDS for the kitchen", "Reports by shift"],
            note: "POS Kitchen includes everything in POS Essential + kitchen module",
          },
        },
        posValue: {
          title: "Built for your business, not for every business",
          body: "NEXVIA POS is not a generic system. Every installation is configured to your business's specific needs — your products, your processes, your way of working. If something doesn't fit, we adapt it.",
          pills: ["Customizable", "No product limits", "Local support"],
        },
        included: "Included in every plan",
        inclusions: [
          "Team training",
          "Local support in Yucatán",
          "Setup guarantee",
          "Clear documentation",
          "WhatsApp support",
        ],
        site: {
          basic: {
            name: "Basic",
            price: "$1,475 MXN",
            monthly: "$200",
            tag: "For businesses that don't yet exist on Google.",
            features: [
              "Optimized 1-page site",
              "Responsive design",
              "WhatsApp integration",
              "Google Maps + basic SEO",
              "First year of hosting",
            ],
            delivery: 7,
          },
          comercial: {
            name: "Commercial",
            price: "$2,750 MXN",
            monthly: "$500",
            tag: "For businesses that want to sell online. Your catalog open 24 hours.",
            features: [
              "Site with up to 5 sections",
              "Product catalog",
              "Order form",
              "Social media integration",
              "Advanced local SEO",
              "Usage training",
            ],
            delivery: 14,
          },
          pro: {
            name: "Pro",
            price: "$4,750 MXN",
            monthly: "$700",
            tag: "Your physical and digital store, working together.",
            features: [
              "Fully custom website",
              "Online store with payments",
              "POS connection",
              "Product admin panel",
              "Visit & sales reports",
              "6-month priority support",
            ],
            delivery: 21,
          },
        },
        pos: {
          esencial: {
            name: "Essential",
            price: "$1,200 MXN",
            monthly: "$300",
            tag: "For shops, grocery stores and any kind of business. Charge faster, lose less time.",
            features: [
              "Fast sales and checkout",
              "Inventory control",
              "Printable tickets",
              "Daily reports",
              "1 sales point",
            ],
            delivery: 10,
          },
          cocina: {
            name: "Kitchen",
            price: "$2,275 MXN",
            monthly: "$600",
            tag: "Orders reach the kitchen on their own — you just serve.",
            features: [
              "Orders sent to kitchen",
              "Tables and split bills",
              "Dish modifiers",
              "Server management",
              "Top-selling dish reports",
            ],
            delivery: 15,
          },
          full: {
            name: "Full",
            price: "$3,128 MXN",
            monthly: "$900",
            tag: "Control everything from one single place.",
            features: [
              "Multiple sales points",
              "Inventory by branch",
              "User roles and permissions",
              "Consolidated reports",
              "Nexvia Site integration",
              "12-month priority support",
            ],
            delivery: 20,
          },
        },
      },
      contact: {
        title: "Let's talk.",
        sub: "Tell us about your business. We respond in less than 24 hours — usually much sooner.",
        form: {
          name: "Name",
          email: "Email",
          whatsapp: "WhatsApp",
          business: "Business",
          plan: "Plan of interest",
          planNone: "Not sure yet",
          message: "Message",
          submit: "Send message",
          success: "Message ready! Your email client will open.",
        },
        card: {
          title: "Other channels",
          whatsapp: "WhatsApp",
          email: "Email",
          address: "Address",
          hours: "Hours",
          hoursValue: "Mon–Fri 9:00–18:00 · Sat 10:00–14:00",
          mapLabel: "Map of our location in Hunucmá",
        },
      },
      common: {
        toggleTheme: "Toggle theme",
        toggleLang: "Toggle language",
      },
    },
  },
} as const;

const getInitialLang = (): string => {
  if (typeof window === "undefined") return "es";
  try {
    return localStorage.getItem(STORAGE_KEY) || "es";
  } catch {
    return "es";
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLang(),
  fallbackLng: "es",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    try {
      localStorage.setItem(STORAGE_KEY, lng);
      document.documentElement.lang = lng;
    } catch {}
  });
  document.documentElement.lang = i18n.language;
}

export default i18n;
