export interface Plan {
    id: string;
    name: string;
    tagline: string;
    price: string;
    users: string;
    interactionz: string;
    total: string;
    totalNote: string;
    cta: string;
    description: string;
    highlighted?: boolean;
}

export const PLANS: Plan[] = [
    {
        id: "avance",
        name: "AVANCE",
        tagline: "Portal Completo",
        price: "R$ 149/mês",
        users: "3 usuários",
        interactionz: "500 Interactionz",
        total: "R$ 149/mês",
        totalNote: "CRM + ERP + PDV + Omnichannel + AI Studio",
        cta: "Começar agora",
        description:
            "Para quem está começando a digitalizar. Todos os módulos inclusos.",
    },
    {
        id: "construa",
        name: "CONSTRUA",
        tagline: "Portal Completo",
        price: "R$ 349/mês",
        users: "10 usuários",
        interactionz: "2.000 Interactionz",
        total: "R$ 349/mês",
        totalNote: "CRM + ERP + PDV + Omnichannel + AI Studio",
        cta: "Pilar de Escala",
        description:
            "Para empresas consolidando a operação. Multiempresa e relatórios avançados.",
        highlighted: true,
    },
    {
        id: "impulsione",
        name: "IMPULSIONE",
        tagline: "Portal Completo",
        price: "R$ 649/mês",
        users: "25 usuários",
        interactionz: "5.000 Interactionz",
        total: "R$ 649/mês",
        totalNote: "CRM + ERP + PDV + Omnichannel + AI Studio",
        cta: "Escalar operação",
        description:
            "Para operações em crescimento acelerado. Gestor dedicado e marketplaces.",
    },
    {
        id: "domine",
        name: "DOMINE",
        tagline: "Portal Completo",
        price: "R$ 899/mês",
        users: "Usuários ilimitados",
        interactionz: "10.000 Interactionz",
        total: "R$ 899/mês",
        totalNote: "CRM + ERP + PDV + Omnichannel + AI Studio",
        cta: "Margem e Retenção",
        description:
            "Isolamento de dados e volumes massivos. SLA premium e suporte 24/7.",
    },
];

export interface ComparisonRow {
    category?: string;
    name: string;
    avance: string;
    construa: string;
    impulsione: string;
    domine: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
    {
        category: "Resumo",
        name: "Mensalidade",
        avance: "R$ 149",
        construa: "R$ 349",
        impulsione: "R$ 649",
        domine: "R$ 899",
    },
    {
        name: "Usuários",
        avance: "3",
        construa: "10",
        impulsione: "25",
        domine: "Ilimitados",
    },
    {
        name: "Interactionz inclusos",
        avance: "500",
        construa: "2.000",
        impulsione: "5.000",
        domine: "10.000",
    },
    {
        name: "Módulos inclusos",
        avance: "CRM + ERP + PDV + Omnichannel + AI",
        construa: "CRM + ERP + PDV + Omnichannel + AI",
        impulsione: "CRM + ERP + PDV + Omnichannel + AI",
        domine: "CRM + ERP + PDV + Omnichannel + AI",
    },
    {
        category: "Infraestrutura",
        name: "Servidor",
        avance: "VPS Partilhada",
        construa: "VPS Partilhada",
        impulsione: "VPS Dedicada",
        domine: "VPS Dedicada",
    },
    {
        name: "vCPU / RAM",
        avance: "1 vCPU / 4GB",
        construa: "2 vCPU / 8GB",
        impulsione: "4 vCPU / 16GB",
        domine: "8 vCPU / 32GB",
    },
    {
        name: "Isolamento de dados",
        avance: "—",
        construa: "—",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "Omnichannel",
        name: "Canais WhatsApp",
        avance: "1 canal",
        construa: "3 canais",
        impulsione: "5 canais",
        domine: "Ilimitados",
    },
    {
        name: "Envio de mensagem em massa",
        avance: "✓",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Converse com seus leads",
        avance: "WhatsApp + Webchat",
        construa: "+ Instagram, E-mail",
        impulsione: "+ Instagram, E-mail",
        domine: "Todos os canais",
    },
    {
        name: "Escrita Inteligente",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "Chatbots",
        name: "Chatbots IA ativos",
        avance: "Até 3",
        construa: "Até 10",
        impulsione: "Até 50",
        domine: "Ilimitados",
    },
    {
        name: "Resposta inteligente usando IA Generativa",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Bot com documentos (RAG)",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "CRM",
        name: "Pipeline de vendas",
        avance: "✓",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Scoring de leads por IA",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Gestão do time de vendas",
        avance: "✓",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "ERP & Fiscal",
        name: "Emissão NF-e / NFC-e / NFS-e",
        avance: "✓",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Gestão de estoque",
        avance: "✓",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Multiempresa",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Conciliação bancária",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "PDV",
        name: "Ponto de venda integrado",
        avance: "✓",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Sugestão de venda cruzada (IA)",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "AI Studio",
        name: "Modelos disponíveis",
        avance: "Texto + Imagem",
        construa: "Texto + Imagem",
        impulsione: "Todos (incl. Vídeo)",
        domine: "Todos (incl. Vídeo)",
    },
    {
        name: "API de IA",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "Dashboards & Relatórios",
        name: "Dashboards de análise",
        avance: "Atualização: 24h",
        construa: "Atualização: 24h",
        impulsione: "Tempo real",
        domine: "Tempo real",
    },
    {
        name: "Geração de Insights por IA",
        avance: "—",
        construa: "✓",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Relatórios avançados",
        avance: "Pré-configurados",
        construa: "Pré-configurados",
        impulsione: "Personalizáveis",
        domine: "Personalizáveis",
    },
    {
        category: "APIs & Integrações",
        name: "Acesso às APIs",
        avance: "Envio de mensagens",
        construa: "Envio de mensagens",
        impulsione: "Completa",
        domine: "Completa",
    },
    {
        name: "Limite de requisições",
        avance: "Até 10/s",
        construa: "Até 10/s",
        impulsione: "Até 20/s",
        domine: "Consulte",
    },
    {
        name: "Integração com marketplaces",
        avance: "—",
        construa: "—",
        impulsione: "✓",
        domine: "✓",
    },
    {
        category: "Governança",
        name: "Retenção de dados",
        avance: "3 meses",
        construa: "6 meses",
        impulsione: "6 meses",
        domine: "12 meses",
    },
    {
        name: "Armazenamento",
        avance: "500MB",
        construa: "2GB",
        impulsione: "5GB",
        domine: "20GB",
    },
    {
        name: "Automações simultâneas",
        avance: "Até 3",
        construa: "Até 10",
        impulsione: "Até 50",
        domine: "Ilimitadas",
    },
    {
        category: "Suporte",
        name: "SLA primeira resposta",
        avance: "Até 4h",
        construa: "Até 2h",
        impulsione: "Até 1h",
        domine: "Até 30min",
    },
    {
        name: "Account manager",
        avance: "—",
        construa: "—",
        impulsione: "✓",
        domine: "✓",
    },
    {
        name: "Suporte prioritário 24/7",
        avance: "—",
        construa: "—",
        impulsione: "—",
        domine: "✓",
    },
    {
        category: "Financeiro",
        name: "Pix automático",
        avance: "1,49%",
        construa: "1,19%",
        impulsione: "0,99%",
        domine: "0,99%",
    },
    {
        name: "Cartão de crédito",
        avance: "4,49%",
        construa: "3,99%",
        impulsione: "3,49%",
        domine: "3,49%",
    },
];
