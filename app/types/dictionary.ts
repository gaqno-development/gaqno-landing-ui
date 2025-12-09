export type Dictionary = {
  navbar: {
    items: {
      start: {
        label: string
        who_am_i: string
        techs: string
        projects: string
        path: string
        contact: string
      }
      projects: string
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
  }
}
