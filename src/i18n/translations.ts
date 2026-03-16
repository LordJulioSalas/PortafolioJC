export const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      howItWorks: "Cómo Funciona",
      pricing: "Paquetes",
      portfolio: "Portafolio",
      contact: "Contactar"
    },
    hero: {
      badge: "Ingeniero de Sistemas | Soporte TI | Ciberseguridad",
      titleLine1: "Soluciones tecnológicas",
      titleLine2: "seguras y escalables",
      subtitle: "Hola, soy Julio Salas. Especialista en desarrollo de software, ciberseguridad, análisis de datos y soporte técnico corporativo.",
      btnProjects: "Ver proyectos",
      btnContact: "Agendar consulta"
    },
    about: {
      title: "Sobre",
      titleHighlight: "Mí",
      p1: "Soy Julio Salas, Ingeniero de Sistemas (próximo a titularme en marzo de 2026 en la UCO) con experiencia sólida en entornos corporativos internacionales.",
      p2: "Me destaco como Asistente de Área IT en S&S Construction Engineering, brindando soporte técnico, garantizando la continuidad operativa y participando en el desarrollo de software, ciberseguridad y análisis de datos."
    },
    experience: {
      title: "Mi",
      titleHighlight: "Experiencia",
      subtitle: "Trayectoria profesional y formación académica.",
      exp1: {
        title: "Asistente de Área IT",
        company: "S&S Construction Engineering / S&S Distribution",
        location: "Entorno Internacional",
        period: "Presente",
        description: "Soporte técnico y gestión del área de TI asegurando la continuidad operativa de los sistemas en un entorno empresarial internacional.",
        points: [
          "Soporte técnico y resolución de problemas de TI.",
          "Gestión y mantenimiento de infraestructura tecnológica.",
          "Aseguramiento de la continuidad operativa de los sistemas."
        ]
      },
      exp2: {
        title: "Ingeniero de Sistemas (Candidato)",
        company: "Universidad Católica de Oriente (UCO)",
        location: "Antioquia, Colombia",
        period: "Grado previsto: Marzo 2026",
        description: "Formación académica finalizada con enfoque en desarrollo de software, ciberseguridad y análisis de datos.",
        points: [
          "Desarrollo de Software y Arquitectura de Sistemas.",
          "Fundamentos y prácticas de Ciberseguridad.",
          "Análisis de Datos y Soporte TI."
        ]
      }
    },
    howItWorks: {
      title: "Cómo",
      titleHighlight: "Trabajo",
      subtitle: "Un proceso estructurado para garantizar resultados óptimos en cada proyecto.",
      steps: [
        { title: "Descubrimiento", desc: "Análisis profundo de requerimientos corporativos." },
        { title: "Arquitectura", desc: "Diseño de soluciones escalables y seguras." },
        { title: "Desarrollo", desc: "Implementación ágil con las mejores prácticas." },
        { title: "Despliegue", desc: "Puesta en producción y soporte continuo." }
      ]
    },
    pricing: {
      title: "Paquetes &",
      titleHighlight: "Precios",
      subtitle: "Elige el plan que más se ajuste a tu negocio. Precios pensados para que todos puedan tener su página web.",
      plans: {
        web: {
          name: "Sitio Básico",
          desc: "Ideal para quienes quieren tener presencia en internet de forma rápida y sencilla.",
          features: ["Página principal (Landing page)", "Sección de contacto", "Apariencia profesional", "Correos automáticos básicos", "Publicación incluida"]
        },
        security: {
          name: "Sitio con Panel",
          desc: "Para quienes necesitan administrar su contenido y recibir mensajes o reservas.",
          features: ["Todo lo del plan básico", "Panel de administración simple", "Formularios personalizados", "Optimización para buscadores (SEO)", "1 mes de soporte"]
        },
        data: {
          name: "Solución a Medida",
          desc: "Si tienes una idea especial o un negocio que necesita algo único, este plan es para ti.",
          features: ["Asesoría personalizada", "Desarrollo a tu medida", "Integraciones especiales", "Escalabilidad", "3 meses de soporte"]
        }
      },
      btnText: "Elegir Plan"
    },
    portfolio: {
      title: "Caso de",
      titleHighlight: "Éxito & Portafolio",
      subtitle: "Explora algunos de los sistemas desarrollados y lanzados a producción.",
      btnDemo: "Ver Proyecto en Vivo",
      btnCode: "Código",
      items: [
        { 
          title: "PetCare System", 
          desc: "Sistema de agendamiento de citas veterinarias con portal administrativo en tiempo real.",
          tags: ["Node.js", "MongoDB", "React", "Next.js"]
        },
        { 
          title: "¿Tu proyecto aquí?", 
          desc: "¿Quieres ver tu idea hecha realidad y publicada aquí? Contáctame y tu proyecto puede ser el próximo caso de éxito.",
          tags: ["A tu medida", "Soporte", "Asesoría"]
        },
        { 
          title: "Próximamente", 
          desc: "Estamos trabajando en nuevos desarrollos para mostrar más casos reales. ¡Muy pronto más ejemplos aquí!",
          tags: ["En desarrollo"]
        }
      ]
    },
    testimonials: {
      title: "Entorno",
      titleHighlight: "Laboral",
      subtitle: "Habilidades blandas y metodologías aplicadas en mi día a día.",
      items: [
        { name: "Proactividad", role: "Resolución Eficaz", text: "Enfocado en identificar problemas antes de que impacten la continuidad del negocio y en buscar siempre la eficiencia del sistema." },
        { name: "Trabajo en Equipo", role: "Comunicación Clara", text: "Colaboración directa con personal técnico y reportes gerenciales en S&S Construction Engineering." },
        { name: "Adaptabilidad", role: "Entornos Internacionales", text: "Experiencia desenvolviéndome fluidamente en un entorno internacional, interactuando con personas de diversas culturas empresariales." }
      ]
    },
    technologies: {
      title: "Core",
      titleHighlight: "Skills",
      subtitle: "Competencias técnicas y áreas de especialización.",
      skills: ["Desarrollo Web", "Ciberseguridad", "Soporte TI", "Análisis de Datos", "Node.js", "React", "Bases de Datos", "Python"]
    },
    faq: {
      title: "Preguntas",
      titleHighlight: "Frecuentes",
      subtitle: "Respuestas directas sobre mi disponibilidad y forma de trabajo.",
      questions: [
        { q: "¿En qué etapa de tus estudios te encuentras?", a: "Estoy próximo a graduarme de la carrera de Ingeniería de Sistemas en la Universidad Católica de Oriente (UCO), con fecha estimada para Marzo de 2026. Ya he completado todo mi ciclo formativo." },
        { q: "¿Tienes experiencia real en empresas?", a: "Sí, actualmente soy Asistente de Área IT en S&S Construction Engineering y S&S Distribution, brindando soporte y garantizando la operatividad tecnológica a nivel internacional." },
        { q: "¿Cuáles son tus áreas fuertes?", a: "Me destaco en Desarrollo de Software (Full-stack), implementación de prácticas de Ciberseguridad, Soporte Técnico Corporativo y Análisis de Datos." },
        { q: "¿Estás disponible para reubicación o remoto?", a: "Estoy abierto a discutir formatos de trabajo remoto, híbrido o presencial, dependiendo del alcance y ubicación del proyecto/empresa." }
      ]
    },
    contact: {
      title: "Contacto",
      titleHighlight: "Directo",
      subtitle: "¿Tienes un reto tecnológico? Escríbeme y lo solucionamos juntos.",
      form: {
        name: "Nombre Completo",
        email: "Correo Corporativo",
        message: "Describe tu requerimiento",
        btnSend: "Enviar mensaje",
        sending: "Enviando..."
      }
    },
    footer: {
      text: "Portfolio Julio Salas. Ingeniero de Sistemas."
    }
  },
  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      howItWorks: "How It Works",
      pricing: "Pricing",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      badge: "Systems Engineer | IT Support | Cybersecurity",
      titleLine1: "Secure and scalable",
      titleLine2: "tech solutions",
      subtitle: "Hi, I'm Julio Salas. Specialist in software development, cybersecurity, data analysis, and corporate IT support.",
      btnProjects: "View projects",
      btnContact: "Book a consultation"
    },
    about: {
      title: "About",
      titleHighlight: "Me",
      p1: "I am Julio Salas, a Systems Engineer (graduating in March 2026 from UCO) with solid experience in international corporate environments.",
      p2: "I currently work as an IT Area Assistant at S&S Construction Engineering, providing technical support, ensuring operational continuity, and engaging in software development, cybersecurity, and data analysis."
    },
    experience: {
      title: "My",
      titleHighlight: "Experience",
      subtitle: "Professional footprint and academic background.",
      exp1: {
        title: "IT Area Assistant",
        company: "S&S Construction Engineering / S&S Distribution",
        location: "International Environment",
        period: "Present",
        description: "Technical support and IT area management ensuring the operational continuity of systems in an international business environment.",
        points: [
          "Technical support and IT issue resolution.",
          "Management and maintenance of technological infrastructure.",
          "Ensuring the operational continuity of systems."
        ]
      },
      exp2: {
        title: "Systems Engineer (Candidate)",
        company: "Universidad Católica de Oriente (UCO)",
        location: "Antioquia, Colombia",
        period: "Expected graduation: March 2026",
        description: "Completed academic training with a focus on software development, cybersecurity, and data analysis.",
        points: [
          "Software Development and Systems Architecture.",
          "Fundamentals and practices of Cybersecurity.",
          "Data Analysis and IT Support."
        ]
      }
    },
    howItWorks: {
      title: "How I",
      titleHighlight: "Work",
      subtitle: "A structured process to ensure optimal results in every project.",
      steps: [
        { title: "Discovery", desc: "In-depth analysis of corporate requirements." },
        { title: "Architecture", desc: "Design of scalable and secure solutions." },
        { title: "Development", desc: "Agile implementation using best practices." },
        { title: "Deployment", desc: "Production rollout and ongoing support." }
      ]
    },
    pricing: {
      title: "Packages &",
      titleHighlight: "Pricing",
      subtitle: "Scalable solutions tailored to your needs, with no hidden costs.",
      plans: {
        web: {
          name: "Quick Template",
          desc: "Perfect for businesses that need immediate online presence.",
          features: ["Landing page", "Login portal", "Database", "Automated emails", "Deployment included"]
        },
        security: {
          name: "Advanced Customization",
          desc: "Complete solution with integrations and an administrative panel.",
          features: ["Everything in Basic", "External API integrations", "Interactive dashboards", "SEO Optimization", "1 month of support"]
        },
        data: {
          name: "Full Custom",
          desc: "Tailor-made development for enterprise requirements.",
          features: ["Technical consulting", "100% custom development", "Complex integrations", "Scalable architecture", "3 months of support"]
        }
      },
      btnText: "Choose Plan"
    },
    portfolio: {
      title: "Success Stories",
      titleHighlight: "& Portfolio",
      subtitle: "Explore some of the systems developed and launched into production.",
      btnDemo: "Live Project",
      btnCode: "Source Code",
      items: [
        { 
          title: "PetCare System", 
          desc: "Veterinary appointment scheduling system with a real-time administrative portal.",
          tags: ["Node.js", "MongoDB", "React", "Next.js"]
        },
        { 
          title: "Your project here?", 
          desc: "Want to see your idea come to life and published here? Contact me and your project could be the next success story.",
          tags: ["Custom-made", "Support", "Consulting"]
        },
        { 
          title: "Coming Soon", 
          desc: "We're working on new developments to showcase more real cases. More examples coming soon!",
          tags: ["In development"]
        }
      ]
    },
    testimonials: {
      title: "Work",
      titleHighlight: "Environment",
      subtitle: "Soft skills and methodologies applied in my day-to-day.",
      items: [
        { name: "Proactivity", role: "Effective Resolution", text: "Focused on identifying problems before they impact business continuity and always seeking system efficiency." },
        { name: "Teamwork", role: "Clear Communication", text: "Direct collaboration with technical staff and management reporting at S&S Construction Engineering." },
        { name: "Adaptability", role: "International Environments", text: "Experience operating fluently in an international environment, interacting with people from diverse business cultures." }
      ]
    },
    technologies: {
      title: "Core",
      titleHighlight: "Skills",
      subtitle: "Technical competencies and areas of expertise.",
      skills: ["Web Development", "Cybersecurity", "IT Support", "Data Analysis", "Node.js", "React", "Databases", "Python"]
    },
    faq: {
      title: "Frequently Asked",
      titleHighlight: "Questions",
      subtitle: "Direct answers about my availability and workflow.",
      questions: [
        { q: "What is your current academic status?", a: "I am about to graduate with a Systems Engineering degree from Universidad Católica de Oriente (UCO), estimated for March 2026. I have completed all coursework." },
        { q: "Do you have real corporate experience?", a: "Yes, I am currently the IT Area Assistant at S&S Construction Engineering and S&S Distribution, providing support and ensuring technological continuity at an international level." },
        { q: "What are your main areas of strength?", a: "I excel in Software Development (Full-stack), Cybersecurity principles, Corporate Tech Support, and Data Analysis." },
        { q: "Are you available for remote work or relocation?", a: "I am open to discussing remote, hybrid, or on-site arrangements, depending on the scope and location of the project or company." }
      ]
    },
    contact: {
      title: "Direct",
      titleHighlight: "Contact",
      subtitle: "Got a tech challenge? Reach out and we'll solve it together.",
      form: {
        name: "Full Name",
        email: "Corporate Email",
        message: "Describe your requirements",
        btnSend: "Send Message",
        sending: "Sending..."
      }
    },
    footer: {
      text: "Julio Salas Portfolio. Systems Engineer."
    }
  }
};

export type Language = 'es' | 'en';