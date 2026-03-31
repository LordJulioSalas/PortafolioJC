export const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      howItWorks: "Cómo Funciona",
      pricing: "Servicios",
      portfolio: "Portafolio",
      contact: "Contactar",
      subtitle: "Desarrollador"
    },
    hero: {
      badge: "Ingeniero de Sistemas | Soporte TI | Ciberseguridad",
      titleLine1: "Soluciones tecnológicas",
      titleLine2: "seguras y escalables",
      subtitle: "Hola, soy Julio Salas. especialista en desarrollo web, ciberseguridad y soporte corporativo.",
      btnProjects: "Ver proyectos",
      btnContact: "Conóceme"
    },
    about: {
      title: "Sobre",
      titleHighlight: "Mí",
      p1: "Soy Julio Salas, Ingeniero de Sistemas graduado en marzo de 2026 en la UCO con experiencia sólida en entornos corporativos internacionales.",
      p2: "Me destaco como Asistente de Área IT en S&S Construction Engineering, brindando soporte técnico, garantizando la continuidad operativa y participando en el desarrollo de software, ciberseguridad y análisis de datos.",
      p3: "Mi enfoque es conectar a empresas con soluciones TI escalables: no vendo productos, ofrezco colaboración estratégica.",
      profile: {
        name: "Julio Salas",
        caption: "Ingeniero de Sistemas | Asistente de Área IT | Especialista en Ciberseguridad y Análisis de Datos",
        button: "Explora experiencia"
      }
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
        title: "Ingeniero de Sistemas",
        company: "Universidad Católica de Oriente (UCO)",
        location: "Antioquia, Colombia",
        period: "Graduado Marzo 2026",
        description: "Formación académica completada con enfoque en desarrollo de software, ciberseguridad y análisis de datos.",
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
      title: "Servicios &",
      titleHighlight: "Consultoría",
      subtitle: "Soluciones personalizadas para empresas. Los costos se ajustan según el alcance del proyecto.",
      timeLabel: "Tiempo:",
      noPrice: "A convenir",
      noTime: "Acorde al alcance",
      recommendedBadge: "Recomendado",
      btnText: "Contactar",
      plans: {
        web: {
          name: "Presencia Corporativa",
          desc: "Presencia web corporativa con branding profesional y comunicación moderna.",
          features: ["Diseño profesional", "Integración de marca", "Sección de contacto", "SEO básico", "Soporte inicial"],
          example: "Ej: presencia web corporativa, portafolio B2B"
        },
        security: {
          name: "Sistemas Internos",
          desc: "Configuración de paneles internos seguros y sistemas administrativos para equipos corporativos.",
          features: ["Dashboards interactivos", "Integraciones API", "Roles y permisos", "Soporte preferencial", "Alta disponibilidad"],
          example: "Ej: sistemas internos seguros, autorizaciones y control de acceso"
        },
        data: {
          name: "Arquitectura de Datos",
          desc: "Canalizaciones de datos y analytics para inteligencia de negocio y toma de decisiones.",
          features: ["Modelado de datos", "ETL/ELT", "Visualizaciones avanzadas", "Escalabilidad", "Monitoreo continuo"],
          example: "Ej: BI empresarial, dashboards y alertas de indicadores clave"
        }
      }
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
        { q: "¿En qué etapa de tus estudios te encuentras?", a: "Me gradué de Ingeniería de Sistemas en la Universidad Católica de Oriente (UCO) en marzo de 2026. Ya he completado todo mi ciclo formativo." },
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
        namePlaceholder: "Tu nombre",
        email: "Correo Corporativo",
        emailPlaceholder: "tu@email.com",
        phone: "Teléfono (Opcional)",
        projectType: "Tipo de Proyecto *",
        projectTypePlaceholder: "Selecciona una opción",
        requirement: "Describe tu requerimiento",
        requirementPlaceholder: "Cuéntame sobre tu idea o requerimientos...",
        optionWeb: "Desarrollo de Sitio Web",
        optionEcommerce: "E-commerce / Tienda Online",
        optionApp: "Aplicación Web",
        optionConsulting: "Consultoría Técnica",
        optionOpportunity: "Oportunidad Laboral",
        optionCollaboration: "Colaboración / Partnership",
        optionOther: "Otro Asunto",
        btnSend: "Enviar mensaje",
        sending: "Enviando...",
        successTitle: "¡Mensaje Enviado!",
        successText: "Gracias por contactarme. Me pondré en contacto contigo muy pronto.",
        successButton: "Enviar otro mensaje",
        errorText: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo."
      }
    },
    footer: {
      navigation: "Navegación",
      contact: "Contacto",
      social: "Redes Sociales",
      rights: "Ingeniero de Sistemas.",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad"
    }
  },
  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      howItWorks: "How It Works",
      pricing: "Pricing",
      portfolio: "Portfolio",
      contact: "Contact",
      subtitle: "Developer"
    },
    hero: {
      badge: "Systems Engineer | IT Support | Cybersecurity",
      titleLine1: "Secure and scalable",
      titleLine2: "tech solutions",
      subtitle: "Hi, I’m Julio Salas. Specialist in web development, cybersecurity, and corporate IT support.",
      btnProjects: "View projects",
      btnContact: "Know me"
    },
    about: {
      title: "About",
      titleHighlight: "Me",
      p1: "I am Julio Salas, a Systems Engineer graduated in March 2026 from UCO with solid experience in international corporate environments.",
      p2: "I currently work as an IT Area Assistant at S&S Construction Engineering, providing technical support, ensuring operational continuity, and engaging in software development, cybersecurity, and data analysis.",
      p3: "My focus is connecting companies with scalable IT solutions: I do not sell products, I offer strategic collaboration.",
      profile: {
        name: "Julio Salas",
        caption: "Systems Engineer | IT Area Assistant | Cybersecurity and Data Analysis Specialist",
        button: "Explore experience"
      }
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
        title: "Systems Engineer",
        company: "Universidad Católica de Oriente (UCO)",
        location: "Antioquia, Colombia",
        period: "Graduated March 2026",
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
      title: "Services &",
      titleHighlight: "Consulting",
      subtitle: "Personalized enterprise solutions. Costs are tailored to project scope.",
      timeLabel: "Time:",
      noPrice: "To be agreed",
      noTime: "Based on scope",
      recommendedBadge: "Recommended",
      btnText: "Contact",
      plans: {
        web: {
          name: "Corporate Presence",
          desc: "Corporate web presence with professional branding and communication.",
          features: ["Professional design", "Brand identity integration", "Contact section", "Basic SEO", "Initial support"],
          example: "Ex: corporate website, B2B portfolio"
        },
        security: {
          name: "Internal Systems",
          desc: "Setup of secure admin panels and internal systems for corporate teams.",
          features: ["Interactive dashboards", "API integrations", "Role-based access", "Dedicated support", "High availability"],
          example: "Ex: secure internal systems, access control"
        },
        data: {
          name: "Data Architecture",
          desc: "Data pipelines and analytics for business intelligence and informed decision-making.",
          features: ["Data modeling", "ETL/ELT", "Advanced visualizations", "Scalability", "Continuous monitoring"],
          example: "Ex: enterprise BI, dashboards, KPI alerts"
        }
      }
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
        { q: "What is your current academic status?", a: "I graduated with a Systems Engineering degree from Universidad Católica de Oriente (UCO) in March 2026. I have completed all coursework." },
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
        namePlaceholder: "Your name",
        email: "Corporate Email",
        emailPlaceholder: "you@company.com",
        phone: "Phone (Optional)",
        projectType: "Project Type *",
        projectTypePlaceholder: "Select an option",
        requirement: "Describe your requirements",
        requirementPlaceholder: "Tell me about your idea or requirements...",
        optionWeb: "Website Development",
        optionEcommerce: "E-commerce / Online Store",
        optionApp: "Web Application",
        optionConsulting: "Technical Consulting",
        optionOpportunity: "Job Opportunity",
        optionCollaboration: "Collaboration / Partnership",
        optionOther: "Other Topic",
        btnSend: "Send Message",
        sending: "Sending...",
        successTitle: "Message Sent!",
        successText: "Thanks for reaching out. I will get back to you shortly.",
        successButton: "Send another message",
        errorText: "There was an error sending your message. Please try again."
      }
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      social: "Social Media",
      rights: "Systems Engineer.",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  }
};

export type Language = 'es' | 'en';