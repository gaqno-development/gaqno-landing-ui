export type CrmPlan = {
    id: string;
    name: string;
    subtitle: string;
    price_monthly: number;
    price_annual: number;
    annual_savings: number;
    revenue_limit: string;
    features: string[];
    highlight_features: string[];
    ads_limit: string;
    data_history: string;
    pix_transfer: string;
    envios_credit: string;
    link_payment_rate: string;
    mobile_payment_rate: string;
    boleto_fee: string;
    pix_fee: string;
};

export type Dictionary = {
    navbar: {
        items: {
            start: {
                label: string;
                home: string;
                products: string;
                custos: string;
                dev: string;
                crm?: string;
                omnichannel?: string;
            };
            projects: string;
            dev: string;
        };
    };
    platform: {
        navbar: {
            main: Array<{ label: string; href: string }>;
        };
        banner: {
            cta_talk: string;
            cta_start: string;
        };
        hero: {
            tagline: string;
            title: string;
            description: string;
            cta_primary: string;
            cta_secondary: string;
            cta_products?: string;
            cta_pricing?: string;
            badges: string[];
        };
        products: {
            title: string;
            description: string;
            usage_examples_label?: string;
            testimonials_label?: string;
            items: Record<
                string,
                {
                    description: string;
                    features: string[];
                    usageExamples?: string[];
                    testimonials?: Array<{
                        quote: string;
                        author: string;
                        role?: string;
                    }>;
                }
            >;
        };
        social_proof: {
            title: string;
            subline?: string;
        };
        cta: {
            title: string;
            description: string;
            cta_pricing: string;
            cta_contact?: string;
        };
        cta_banner: {
            title: string;
            description: string;
            cta_primary: string;
            cta_secondary: string;
        };
        cta_final: {
            title: string;
            description: string;
            cta_pricing: string;
            cta_contact: string;
        };
        carousel: {
            title?: string;
            items: Array<{ quote: string; author?: string; role?: string }>;
        };
        contact: {
            tagline: string;
            title: string;
            description: string;
            cta_email: string;
            cta_whatsapp: string;
            footer_note: string;
        };
        footer: {
            tagline: string;
            title: string;
            description: string;
            quick_links: {
                title: string;
                items: Array<{ label: string; href: string }>;
            };
            contact_info: {
                title: string;
                email: string;
                phone: string;
            };
            social: {
                title: string;
            };
            copyright: string;
        };
    };
    omnichannel?: {
        hero: {
            tagline: string;
            title: string;
            description: string;
            trial_badge: string;
            cta_primary: string;
            cta_secondary: string;
        };
        form: {
            coupon_label: string;
            coupon_placeholder: string;
            name_label: string;
            name_placeholder: string;
            email_label: string;
            email_placeholder: string;
            phone_label: string;
            phone_placeholder: string;
            company_label: string;
            company_placeholder: string;
            password_label: string;
            password_placeholder: string;
            submit: string;
            email_optin: string;
            whatsapp_optin: string;
            consent: string;
        };
        channels: {
            title: string;
            subtitle: string;
            items: Array<{ icon: string; label: string; color?: string }>;
        };
        features: {
            title: string;
            subtitle: string;
            cta: string;
            items: Array<{ icon: string; title: string; description: string }>;
        };
        how_it_works: {
            title: string;
            subtitle: string;
            steps: Array<{ number: string; title: string; description: string }>;
        };
        pricing: {
            title: string;
            subtitle: string;
            plan_cta: string;
            enterprise_cta: string;
        };
        testimonials: {
            title: string;
            cta: string;
            items: Array<{ quote: string; author: string; role: string }>;
        };
        footer: {
            privacy_policy: string;
            terms_of_use: string;
            copyright: string;
        };
    };
    crm?: {
        hero: {
            tagline: string;
            title: string;
            description: string;
            trial_badge: string;
            cta_primary: string;
        };
        form: {
            coupon_label: string;
            coupon_placeholder: string;
            name_label: string;
            name_placeholder: string;
            email_label: string;
            email_placeholder: string;
            phone_label: string;
            phone_placeholder: string;
            cnpj_label: string;
            cnpj_placeholder: string;
            password_label: string;
            password_placeholder: string;
            submit: string;
            email_optin: string;
            whatsapp_optin: string;
            consent: string;
        };
        features: {
            title: string;
            cta: string;
            items: Array<{ icon: string; label: string }>;
        };
        channels: {
            title: string;
            cta: string;
            items: Array<{ icon: string; title: string; description: string }>;
        };
        ecosystem: {
            tagline: string;
            title: string;
            description: string;
            cta: string;
            items: Array<{ icon: string; title: string; description: string }>;
        };
        pricing: {
            title: string;
            subtitle: string;
            toggle_monthly: string;
            toggle_annual: string;
            annual_badge: string;
            plan_cta: string;
            plans: CrmPlan[];
        };
        testimonials: {
            title: string;
            cta: string;
            items: Array<{ quote: string; author: string; role: string }>;
        };
        footer: {
            privacy_policy: string;
            terms_of_use: string;
            copyright: string;
        };
    };
    landing: {
        hero: {
            tagline: string;
            title: string;
            description: string;
            cta_work: string;
            cta_process: string;
            available: string;
            profile: {
                title: string;
                name: string;
                role: string;
                experience: string;
                stack: string;
                skills: string;
            };
        };
        about: {
            tagline: string;
            title: string;
            description: string;
            background: {
                title: string;
                content: string;
            };
            presentation: {
                title: string;
                description: string;
                date: string;
            };
            education: {
                title: string;
                items: Array<{
                    institution: string;
                    degree: string;
                    period: string;
                }>;
            };
            achievements: {
                title: string;
                items: Array<{
                    title: string;
                    description: string;
                }>;
            };
        };
        experience: {
            tagline: string;
            title: string;
            description: string;
            labels: {
                responsibilities: string;
                technologies: string;
            };
            items: Array<{
                company: string;
                role: string;
                period: string;
                location: string;
                description: string;
                responsibilities: string[];
                technologies: string[];
            }>;
        };
        expertise: {
            tagline: string;
            title: string;
            description: string;
            capabilities: Array<{
                title: string;
                description: string;
            }>;
        };
        approach: {
            title: string;
            items: Array<{
                title: string;
                description: string;
                highlight: string;
            }>;
        };
        work: {
            title: string;
            description: string;
            details_title: string;
            items: {
                lenin: { description: string };
                atech: { description: string };
                newcore: { description: string };
                ffid: { description: string };
                rede_ancora: { description: string };
                ambev: { description: string };
            };
        };
        credentials: {
            tagline: string;
            title: string;
            description: string;
            cta_efset: string;
        };
        contact: {
            tagline: string;
            title: string;
            description: string;
            cta_email: string;
            cta_whatsapp: string;
            footer_note: string;
        };
        footer: {
            tagline: string;
            title: string;
            description: string;
            quick_links: {
                title: string;
                items: Array<{ label: string; href: string }>;
            };
            contact_info: {
                title: string;
                email: string;
                phone: string;
            };
            social: {
                title: string;
            };
            copyright: string;
        };
    };
};
