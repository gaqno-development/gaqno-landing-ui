export type Dictionary = {
  navbar: {
    items: {
      start: {
        label: string
        home: string
        products: string
        custos: string
        dev: string
      }
      projects: string
      dev: string
    }
  }
  platform: {
    navbar: {
      main: Array<{ label: string; href: string }>
    }
    banner: {
      cta_talk: string
      cta_start: string
    }
    hero: {
      tagline: string
      title: string
      description: string
      cta_primary: string
      cta_secondary: string
      cta_products?: string
      cta_pricing?: string
      badges: string[]
    }
    products: {
      title: string
      description: string
      usage_examples_label?: string
      testimonials_label?: string
      items: Record<
        string,
        {
          description: string
          features: string[]
          usageExamples?: string[]
          testimonials?: Array<{
            quote: string
            author: string
            role?: string
          }>
        }
      >
    }
    social_proof: {
      title: string
      subline?: string
    }
    cta: {
      title: string
      description: string
      cta_pricing: string
      cta_contact?: string
    }
    cta_banner: {
      title: string
      description: string
      cta_primary: string
      cta_secondary: string
    }
    cta_final: {
      title: string
      description: string
      cta_pricing: string
      cta_contact: string
    }
    carousel: {
      title?: string
      items: Array<{ quote: string; author?: string; role?: string }>
    }
    contact: {
      tagline: string
      title: string
      description: string
      cta_email: string
      cta_whatsapp: string
      footer_note: string
    }
    footer: {
      tagline: string
      title: string
      description: string
      quick_links: {
        title: string
        items: Array<{ label: string; href: string }>
      }
      contact_info: {
        title: string
        email: string
        phone: string
      }
      social: {
        title: string
      }
      copyright: string
    }
  }
  landing: {
    hero: {
      tagline: string
      title: string
      description: string
      cta_work: string
      cta_process: string
      available: string
      profile: {
        title: string
        name: string
        role: string
        experience: string
        stack: string
        skills: string
      }
    }
    about: {
      tagline: string
      title: string
      description: string
      background: {
        title: string
        content: string
      }
      presentation: {
        title: string
        description: string
        date: string
      }
      education: {
        title: string
        items: Array<{
          institution: string
          degree: string
          period: string
        }>
      }
      achievements: {
        title: string
        items: Array<{
          title: string
          description: string
        }>
      }
    }
    experience: {
      tagline: string
      title: string
      description: string
      labels: {
        responsibilities: string
        technologies: string
      }
      items: Array<{
        company: string
        role: string
        period: string
        location: string
        description: string
        responsibilities: string[]
        technologies: string[]
      }>
    }
    expertise: {
      tagline: string
      title: string
      description: string
      capabilities: Array<{
        title: string
        description: string
      }>
    }
    approach: {
      title: string
      items: Array<{
        title: string
        description: string
        highlight: string
      }>
    }
    work: {
      title: string
      description: string
      details_title: string
      items: {
        lenin: { description: string }
        atech: { description: string }
        newcore: { description: string }
        ffid: { description: string }
        rede_ancora: { description: string }
        ambev: { description: string }
      }
    }
    credentials: {
      tagline: string
      title: string
      description: string
      cta_efset: string
    }
    contact: {
      tagline: string
      title: string
      description: string
      cta_email: string
      cta_whatsapp: string
      footer_note: string
    }
    footer: {
      tagline: string
      title: string
      description: string
      quick_links: {
        title: string
        items: Array<{ label: string; href: string }>
      }
      contact_info: {
        title: string
        email: string
        phone: string
      }
      social: {
        title: string
      }
      copyright: string
    }
  }
}
