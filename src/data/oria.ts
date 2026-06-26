// Conteúdo Oria Partners, versões PT e EN

import { useLang, type Lang } from "@/i18n/LanguageContext";

export type NavLink = { href: string; label: string; external?: boolean };

// ============ NAV ============
const NAV_PT: NavLink[] = [
  { href: "/#sobre", label: "Quem Somos" },
  { href: "/atuacao", label: "Atuação", external: true },
  { href: "/casos", label: "Casos", external: true },
  { href: "/socios", label: "Sócios", external: true },
  { href: "/noticias", label: "Notícias", external: true },
];
const NAV_EN: NavLink[] = [
  { href: "/#sobre", label: "Who We Are" },
  { href: "/atuacao", label: "Services", external: true },
  { href: "/casos", label: "Case Studies", external: true },
  { href: "/socios", label: "Partners", external: true },
  { href: "/noticias", label: "News", external: true },
];

// ============ NÚMEROS ============
const NUMEROS_PT = [
  { prefix: "", value: 38, suffix: "+", label: "Anos de experiência acumulada pelos sócios" },
  { prefix: "R$ ", value: 7, suffix: "Bi +", label: "Em transações e reestruturações conduzidas" },
  { prefix: "", value: 40, suffix: "+", label: "Grupos econômicos atendidos" },
];
const NUMEROS_EN = [
  { prefix: "", value: 38, suffix: "+", label: "Years of experience accumulated by the partners" },
  { prefix: "R$ ", value: 7, suffix: "Bn +", label: "In transactions and restructurings advised" },
  { prefix: "", value: 40, suffix: "+", label: "Economic groups advised" },
];

// ============ SOBRE ============
const SOBRE_PT = {
  eyebrow: "Quem somos",
  heading: "",
  paragraphs: [
    "A Oria Partners é uma boutique independente especializada em reestruturação financeira, turnaround e situações especiais. Assessoramos empresas de middle e corporate e instituições financeiras em contextos de alta complexidade, conduzindo diagnósticos verificáveis, construindo consenso entre stakeholders e estruturando soluções viáveis para estabilização, liquidez e recuperação de valor.",
    "Atuamos em renegociação de passivos, reestruturações financeiras e operacionais, captação de liquidez e venda de ativos, com track record de casos complexos de grande sucesso reconhecidos como referências de mercado em recuperação de valor e coordenação entre credores e acionistas.",
    "Nossa abordagem combina profundidade técnica, visão estratégica e histórico comprovado de resultados na condução de processos complexos, com foco em execução, preservação de valor e tomada de decisão baseada em análise independente.",
  ],
};
const SOBRE_EN = {
  eyebrow: "Who we are",
  heading: "",
  paragraphs: [
    "Oria Partners is an independent boutique specialized in financial restructuring, turnaround and special situations. We advise middle-market and corporate companies and financial institutions in highly complex contexts, delivering verifiable diagnoses, building consensus among stakeholders and structuring viable solutions for stabilization, liquidity and value recovery.",
    "We act in liability renegotiation, financial and operational restructurings, liquidity raises and asset sales, with a track record of highly successful complex cases recognized as market references in value recovery and coordination among creditors and shareholders.",
    "Our approach combines technical depth, strategic vision and a proven track record of results in conducting complex processes, focused on execution, value preservation and decision-making based on independent analysis.",
  ],
};

// ============ GATILHOS ============
const GATILHOS_PT = [
  {
    title: "Deterioração sem diagnóstico claro",
    desc: "Os números pioram e a causa real ainda não está clara.",
  },
  {
    title: "Pressão por parte dos credores",
    desc: "A relação com o crédito chega ao limite e o tempo trabalha contra.",
  },
  {
    title: "Transações sob pressão de liquidez",
    desc: "A janela para agir é curta e errar tem custo irreversível.",
  },
];
const GATILHOS_EN = [
  {
    title: "Deterioration without a clear diagnosis",
    desc: "The numbers worsen and the real cause is not yet clear.",
  },
  {
    title: "Pressure from creditors",
    desc: "The credit relationship reaches its limit and time works against you.",
  },
  {
    title: "Transactions under liquidity pressure",
    desc: "The window to act is short and getting it wrong has irreversible cost.",
  },
];
const PILARES_PT = [
  {
    num: "I",
    title: "Resultados comprovados via negociações de boa fé",
    desc: "De empresas listadas à capital fechado, a Oria Partners possui um histórico de reestruturações que são referencias de mercado. Atuando sempre através de negociações responsáveis e de boa fé, nossa filosofia de trabalho envolve disciplina, construção de confiança e priorização de esforços.",
  },
  {
    num: "II",
    title: "Coordenação disciplinada",
    desc: "Situações complexas com múltiplos stakeholders exigem método, cadência e clareza na condução do processo. Estruturamos negociações e tomadas de decisão com disciplina operacional, comunicação transparente e alinhamento contínuo entre as partes, mesmo em contextos de alta pressão e urgência, reduzindo ruídos, evitando decisões reativas e preservando a capacidade de execução.",
  },
  {
    num: "III",
    title: "Clareza antes da narrativa",
    desc: "Nosso trabalho é construir uma visão objetiva, verificável e tecnicamente consistente da situação. Não conduzimos processos a partir de otimismo artificial nem de narrativas alarmistas, mas da compreensão precisa dos fatos, riscos e alternativas, base necessária para decisões complexas e alinhamento entre stakeholders.",
  },
  {
    num: "IV",
    title: "Profundidade técnica na prática",
    desc: "A experiência da Oria Partners foi construída em operações reais, envolvendo diferentes setores, estruturas de capital e níveis de complexidade financeira. Essa vivência permite identificar padrões, antecipar riscos e calibrar cada processo com precisão técnica desde os primeiros diagnósticos.",
  },
  {
    num: "V",
    title: "Da operação à negociação",
    desc: "Toda reestruturação sustentável começa pela compreensão real da operação. A Oria Partners atua a partir da dinâmica do negócio, identificando a origem dos problemas e estruturando soluções compatíveis com a realidade operacional da empresa, e não com modelos pré-formatados. A negociação só se sustenta no longo prazo quando a operação também é sustentável.",
  },
  {
    num: "VI",
    title: "Viabilidade com senso de urgência",
    desc: "Em situações de estresse, o tempo é parte central da solução. Atuamos com a profundidade técnica necessária para evitar decisões frágeis, mas sempre respeitando o timing crítico de cada processo. Nosso papel é equilibrar análise, velocidade e capacidade de execução, construindo caminhos viáveis sem perder a urgência que a situação exige.",
  },
];
const PILARES_EN = [
  {
    num: "I",
    title: "Proven results through good-faith negotiations",
    desc: "From listed companies to privately held ones, Oria Partners has a track record of restructurings recognized as market references. Always working through responsible, good-faith negotiations, our philosophy combines discipline, trust-building and prioritization of efforts.",
  },
  {
    num: "II",
    title: "Disciplined coordination",
    desc: "Complex situations with multiple stakeholders require method, cadence and clarity throughout the process. We structure negotiations and decision-making with operational discipline, transparent communication and continuous alignment among the parties, even under high pressure and urgency, reducing noise, preventing reactive decisions and preserving execution capacity.",
  },
  {
    num: "III",
    title: "Clarity before narrative",
    desc: "Our job is to build an objective, verifiable and technically consistent view of the situation. We do not run processes on artificial optimism nor on alarmist narratives, but on a precise understanding of facts, risks and alternatives, the necessary foundation for complex decisions and stakeholder alignment.",
  },
  {
    num: "IV",
    title: "Technical depth in practice",
    desc: "Oria Partners' experience has been built on real transactions across different industries, capital structures and levels of financial complexity. That track record allows us to recognize patterns, anticipate risks and calibrate each process with technical precision from the very first diagnosis.",
  },
  {
    num: "V",
    title: "From operations to negotiation",
    desc: "Every sustainable restructuring begins with a real understanding of the business. Oria Partners works from the operational dynamics, identifying the root causes of problems and structuring solutions that fit the company's actual operational reality, not pre-formatted templates. A negotiation only holds over the long term when the operation is also sustainable.",
  },
  {
    num: "VI",
    title: "Feasibility with a sense of urgency",
    desc: "In distressed situations, time is a central part of the solution. We bring the technical depth needed to avoid fragile decisions, while always respecting the critical timing of each process. Our role is to balance analysis, speed and execution capacity, building viable paths without losing the urgency the situation demands.",
  },
];

// ============ INEGOCIÁVEIS ============
const INEGOCIAVEIS_PT = [
  {
    title: "Atalhos sem fundamento",
    desc: "Não aceleramos diagnósticos para acomodar agendas políticas. Se o processo exige tempo, comunicamos isso. Velocidade sem fundamento produz decisões imprecisas que abrem brechas para erros.",
  },
  {
    title: "Soluções milagrosas",
    desc: "Não prometemos resultados que dependem de condições que não controlamos. Realismo não é pessimismo, é respeito pelas restrições que existem.",
  },
  {
    title: "Narrativas enviesadas",
    desc: "Não construímos histórias que favorecem uma parte em detrimento de outra. Nossa utilidade vem de sermos confiáveis, não convenientes.",
  },
];
const INEGOCIAVEIS_EN = [
  {
    title: "Unfounded shortcuts",
    desc: "We do not rush diagnoses to accommodate political agendas. If the process requires time, we say so. Speed without substance produces imprecise decisions that create room for error.",
  },
  {
    title: "Miracle solutions",
    desc: "We do not promise outcomes that depend on conditions we cannot control. Realism is not pessimism, it is respect for the constraints that actually exist.",
  },
  {
    title: "Biased narratives",
    desc: "We do not build stories that favor one party at the expense of another. Our usefulness comes from being trustworthy, not convenient.",
  },
];

// ============ FRENTES ============
const FRENTES_PT = [
  {
    num: "01",
    title: "Diagnóstico independente",
    bold: "Analisamos demonstrações financeiras, estrutura de capital, geração de caixa, contratos, garantias e dinâmica operacional para reconstruir uma visão técnica integrada da companhia.",
    desc: "Mais do que entender os números, buscamos compreender a lógica econômica do negócio, a origem das pressões financeiras e a viabilidade da tese operacional da empresa. O resultado é uma leitura independente, verificável e capaz de servir como base comum para credores, acionistas e gestão na tomada de decisões críticas.",
  },
  {
    num: "02",
    title: "Gestão de liquidez e estrutura de capital",
    bold: "Estruturamos projeções de caixa por cenário, análises de necessidade de capital de giro e planos de estabilização financeira para preservar a continuidade operacional e recuperar previsibilidade de liquidez.",
    desc: "Atuamos na renegociação de passivos, alongamento de prazos, readequação do serviço da dívida e revisão de covenants e restrições contratuais, buscando compatibilizar a estrutura de capital com a real capacidade de geração de caixa da empresa.",
  },
  {
    num: "03",
    title: "Reestruturação financeira e operacional",
    bold: "Conduzimos processos de reestruturação envolvendo múltiplos credores, acionistas, fornecedores e demais stakeholders, estruturando soluções capazes de estabilizar a operação e restaurar a sustentabilidade financeira da companhia.",
    desc: "Nossa atuação combina renegociação coordenada de passivos com revisão operacional, ajustes de governança, reorganização de fluxos críticos e fortalecimento da capacidade de execução da empresa.",
  },
  {
    num: "04",
    title: "Transações em situação especial",
    bold: "Compra e venda de ativos, desinvestimentos, captação de recursos e operações estruturadas em contextos complexos",
    desc: "Quando a situação já se encontra suficientemente legível, estabilizada e preparada para uma transação, a Oria Partners atua em processos de compra e venda de ativos, desinvestimentos, entrada de investidores e captação de recursos por meio de dívida, equity ou estruturas híbridas. Nossa atuação envolve a coordenação integral do processo, incluindo avaliação econômico-financeira, estruturação da transação, preparação de materiais, prospecção de potenciais investidores ou compradores e condução das negociações com os parceiros estratégicos necessários.",
  },
];
const FRENTES_EN = [
  {
    num: "01",
    title: "Independent diagnosis",
    bold: "We analyze financial statements, capital structure, cash generation, contracts, collateral and operational dynamics to rebuild an integrated technical view of the company.",
    desc: "Beyond reading the numbers, we seek to understand the economic logic of the business, the origin of the financial pressures and the viability of its operating thesis. The output is an independent, verifiable assessment that can serve as a common basis for creditors, shareholders and management in critical decisions.",
  },
  {
    num: "02",
    title: "Liquidity management and capital structure",
    bold: "We build scenario-based cash flow projections, working capital analyses and financial stabilization plans to preserve operating continuity and restore liquidity predictability.",
    desc: "We act on liability renegotiation, debt extension, restructuring of debt service and the review of covenants and contractual restrictions, seeking to align the capital structure with the company's real cash generation capacity.",
  },
  {
    num: "03",
    title: "Financial and operational restructuring",
    bold: "We lead restructuring processes involving multiple creditors, shareholders, suppliers and other stakeholders, structuring solutions that stabilize operations and restore the company's financial sustainability.",
    desc: "Our work combines coordinated liability renegotiation with operational review, governance adjustments, reorganization of critical workflows and strengthening of the company's execution capacity.",
  },
  {
    num: "04",
    title: "Special situations transactions",
    bold: "Asset purchases and sales, divestitures, capital raises and structured transactions in complex contexts",
    desc: "Once the situation is sufficiently legible, stabilized and ready for a transaction, Oria Partners advises on asset purchases and sales, divestitures, investor onboarding and capital raises through debt, equity or hybrid structures. Our work covers the full coordination of the process, including economic and financial valuation, transaction structuring, materials preparation, sourcing of potential investors or buyers and the conduct of negotiations with the relevant strategic counterparties.",
  },
];

// ============ MÉTODO ============
const METODO_PT = [
  {
    num: "I",
    title: "Base informacional única",
    desc: "Uma versão dos fatos auditável por todas as partes. Premissas e dados transparentes. Discordâncias são bem-vindas, desde que ancoradas em evidência.",
  },
  {
    num: "II",
    title: "Diagnóstico antes de solução",
    desc: "Não propomos caminho antes de entender a situação. Solução prematura resolve o problema errado e compromete tudo o que vem depois.",
  },
  {
    num: "III",
    title: "Coordenação disciplinada",
    desc: "Sequência clara, prazos definidos, comunicação estruturada com cada stakeholder. Sem improviso e sem mudar de direção a cada nova informação.",
  },
  {
    num: "IV",
    title: "Monitoramento contínuo",
    desc: "Mercado e premissas mudam. Acompanhamos a evolução e ajustamos quando há razão objetiva, nunca por ansiedade ou pressão pontual.",
  },
];
const METODO_EN = [
  {
    num: "I",
    title: "Single information base",
    desc: "One version of the facts, auditable by every party. Transparent assumptions and data. Disagreements are welcome, as long as they are anchored in evidence.",
  },
  {
    num: "II",
    title: "Diagnosis before solution",
    desc: "We do not propose a path before understanding the situation. A premature solution solves the wrong problem and undermines everything that follows.",
  },
  {
    num: "III",
    title: "Disciplined coordination",
    desc: "Clear sequencing, defined deadlines, structured communication with each stakeholder. No improvisation and no shifting direction with every new piece of information.",
  },
  {
    num: "IV",
    title: "Continuous monitoring",
    desc: "Markets and assumptions change. We track the evolution and adjust when there is objective reason to do so, never out of anxiety or short-term pressure.",
  },
];

// ============ CASOS ============
const CASOS_PT = [
  {
    tag: "Reestruturação",
    title: "Reestruturação financeira e operacional com gestão interina",
    empresa: "Metalfrio",
    setor: "Indústria multinacional de bens de capital",
    porte: "Faturamento anual ~R$ 2 bilhões",
    contexto: "Grupo industrial multinacional com décadas de operação, alavancagem elevada e múltiplos credores financeiros e operacionais. Crédito mais restritivo somado a decisões passadas geraram forte constrição de liquidez.",
    desafio: "Risco real de execuções descoordenadas e desalinhamento entre as partes bloqueando desempenho organizacional. Diversas paradas fabris ocorreram por falta de caixa.",
    atuacao: "Gestão interina com diagnóstico verificável compartilhado com todos os credores, estabilização de caixa e governança temporária com reporte estruturado. Amplo processo de reestruturação (Sistemas, TI, Financeiro, etc.). Renegociação financeira com foco em adesão ampla.",
    resultado: "Processo judicial evitado preservando a operação e valor da companhia. Estabilização de caixa em 8 meses. Empresa retomou previsibilidade operacional e credores passaram a operar com clareza sobre alternativas. Ao término do 2º ano da reestruturação a companhia bateu 2 recordes consecutivos de resultado.",
  },
  {
    tag: "Reestruturação",
    title: "Reestruturação financeira de grupo industrial nacional",
    empresa: "Globalpack",
    setor: "Indústria nacional — top 3 do segmento",
    porte: "Faturamento anual R$ 800 milhões",
    contexto: "Indústria com endividamento elevado, margens reduzidas, restrições operacionais e de crédito e necessidade de desalavancagem para viabilizar alternativas estratégicas de recuperação econômica.",
    desafio: "Dívida vencida relevante, 4 execuções de dívida em curso e necessidade clara de melhorar o desempenho operacional e viabilizar alavancas de valor.",
    atuacao: "Atuação direta na renegociação de passivos e na captação de novos recursos. Reestruturação de uma nova governança que permitisse a retomada e o acesso a credores de primeira linha. Identificação e viabilização de movimentos estratégicos que permitiram a melhoria significativa das margens operacionais.",
    resultado: "Desempenho operacional e previsibilidade recuperados em 4 trimestres. Aquisição de ativos que incorporassem margem ao resultado e quitação de 80% do endividamento em 12 meses. Crescimento de receita de R$ 45 milhões/mês para R$ 75 milhões/mês pós reconquista da credibilidade junto a clientes.",
  },
  {
    tag: "Reestruturação",
    title: "Estabilização e desalavancagem de rede varejista",
    empresa: "Enxuto",
    setor: "Varejo alimentício",
    porte: "Faturamento anual R$ 600 milhões",
    contexto: "Rede varejista com severa constrição de caixa, falta de itens essenciais no ponto de venda, briga societária em controle difuso, sem acesso a novas alternativas de financiamento e em fase inicial de execução de dívida. 13x Dív. Líq. / EBITDA.",
    desafio: "Reestabelecer prazo para correção com credores, identificar alternativas de desalavancagem e obter fontes de financiamento no curtíssimo prazo.",
    atuacao: "Estabilização das operações, obtenção de novos financiamentos de curto prazo, enxugamento dos canais deficitários de venda e venda de um ativo estratégico de menor relevância (utilizando credor parceiro).",
    resultado: "Empresa com reperfilamento da dívida. Pós venda do ativo, alavancagem reduzida para 3,5x Dív. Líquida / EBITDA. O quadro societário foi reajustado pós estabilização, eliminando conflitos de gestão.",
  },
  {
    tag: "Desinvestimento",
    title: "Liquidação de holding familiar com ativo ilíquido",
    empresa: "Baixa Augusta",
    setor: "Holding familiar",
    porte: "—",
    contexto: "Holding familiar com alto endividamento junto a instituições financeiras e ativos ilíquidos.",
    desafio: "Identificar alternativas de geração de valor, viabilizar processo de venda e assegurar ao credor a liquidação necessária pós processo de dação.",
    atuacao: "Mapeamento de potenciais interessados, obtenção de financiamentos junto a instituições financeiras, obtenção de propostas de compra do ativo e viabilização da entrega do mesmo ao credor (R$ 70 milhões).",
    resultado: "Quitação do saldo devedor e eliminação da despesa financeira ao devedor. Reversão e recuperação da posição ativa do banco. Destravamento do ativo não operacional à sua natureza econômica.",
  },
];
const CASOS_EN = [
  {
    tag: "Restructuring",
    title: "Financial and operational restructuring with interim management",
    empresa: "Metalfrio",
    setor: "Multinational capital goods industry",
    porte: "Annual revenue ~R$ 2 billion",
    contexto: "Multinational industrial group with decades of operations, high leverage and multiple financial and operational creditors. Tighter credit conditions combined with past decisions generated severe liquidity constraints.",
    desafio: "Real risk of uncoordinated enforcement actions and stakeholder misalignment blocking organizational performance. Several plant stoppages occurred due to lack of cash.",
    atuacao: "Interim management with verifiable diagnosis shared with all creditors, cash stabilization and temporary governance with structured reporting. Broad restructuring process (Systems, IT, Finance, etc.). Financial renegotiation focused on broad creditor adherence.",
    resultado: "Judicial proceedings avoided, preserving the operation and value of the company. Cash stabilized within 8 months. The company regained operating predictability and creditors gained clarity on alternatives. By the end of the 2nd year of the restructuring the company hit 2 consecutive record results.",
  },
  {
    tag: "Restructuring",
    title: "Financial restructuring of a domestic industrial group",
    empresa: "Globalpack",
    setor: "Domestic industry — top 3 in its segment",
    porte: "Annual revenue R$ 800 million",
    contexto: "Industry player with high indebtedness, reduced margins, operating and credit constraints, and the need to deleverage in order to enable strategic alternatives for economic recovery.",
    desafio: "Material overdue debt, 4 ongoing debt enforcement actions and a clear need to improve operating performance and unlock value levers.",
    atuacao: "Direct action on liability renegotiation and raising of new funding. Structuring of a new governance enabling the recovery and access to top-tier creditors. Identification and execution of strategic moves that significantly improved operating margins.",
    resultado: "Operating performance and predictability recovered within 4 quarters. Acquisition of assets that added margin to results and repayment of 80% of indebtedness within 12 months. Revenue grew from R$ 45 million/month to R$ 75 million/month after regaining credibility with clients.",
  },
  {
    tag: "Restructuring",
    title: "Stabilization and deleveraging of a retail chain",
    empresa: "Enxuto",
    setor: "Food retail",
    porte: "Annual revenue R$ 600 million",
    contexto: "Retail chain with severe cash constraints, lack of essential items on the shelves, shareholder dispute under diffuse control, no access to new funding alternatives and in the early stages of debt enforcement. 13x Net Debt / EBITDA.",
    desafio: "Re-establish a runway with creditors, identify deleveraging alternatives and secure short-term funding sources immediately.",
    atuacao: "Stabilization of operations, securing new short-term funding, streamlining of loss-making sales channels and sale of a strategic asset of lesser relevance (using a partner creditor).",
    resultado: "Debt re-profiled. After the asset sale, leverage reduced to 3.5x Net Debt / EBITDA. The shareholder structure was rebalanced after stabilization, eliminating management conflicts.",
  },
  {
    tag: "Divestiture",
    title: "Liquidation of a family holding with an illiquid asset",
    empresa: "Baixa Augusta",
    setor: "Family holding",
    porte: "—",
    contexto: "Family holding with high indebtedness to financial institutions and illiquid assets.",
    desafio: "Identify value-creation alternatives, enable a sale process and secure for the creditor the necessary liquidation following the dação process.",
    atuacao: "Mapping of potential interested parties, securing financing from financial institutions, obtaining purchase proposals for the asset and enabling its delivery to the creditor (R$ 70 million).",
    resultado: "Outstanding debt fully settled and elimination of financial expenses for the debtor. Reversal and recovery of the bank's asset position. Unlocking of the non-operational asset to its economic nature.",
  },
];

const TRACK_RECORD_PT =
  "Décadas combinadas em reestruturação, M&A e mercado de capitais, com passagens por bancos de investimento, áreas de crédito estruturado, financiamento a projetos e assessoria financeira. Operações de complexidade relevante em indústria, varejo, infraestrutura e serviços.";
const TRACK_RECORD_EN =
  "Decades of combined experience in restructuring, M&A and capital markets, including stints at investment banks, structured credit desks and financial advisory firms. Transactions of significant complexity across industrial, retail, infrastructure and services sectors.";

// ============ SOCIOS ============
const SOCIOS_PT = [
  {
    initials: "EP",
    name: "Enzo Pierobom",
    role: "Sócio-Fundador & CEO",
    photo: "enzo",
    linkedin: "https://www.linkedin.com/in/enzo-pierobom/",
    highlights: [
      "Engenheiro de Produção (USP), MBA Fundação Dom Cabral, conselheiro pelo IBGC",
      "18+ anos no mercado financeiro, passagens por ABN AMRO Real e Santander",
      "Gestor de reestruturações financeiras e operacionais (2021–2026)",
    ],
    bio: [
      "Enzo Pierobom atuou em crédito corporativo, operações sindicalizadas, financiamento à projetos, mercado de capitais, M&A, tesouraria e reestruturação de dívidas, trabalhando de forma próxima a credores, acionistas e equipes executivas em diferentes setores. Migrou posteriormente para o mercado de reestruturação empresarial, com destaque para a atuação como gestor estatutário da **Metalfrio** durante seu processo de reestruturação operacional entre 2021 e 2022. É sócio fundador da Oria Partners, onde lidera os mandatos, a relação com stakeholders financeiros e a condução estratégica de processos complexos de reestruturação e coordenação decisória.",
    ],
  },
  {
    initials: "GG",
    name: "Gustavo Gregori",
    role: "Sócio-fundador & COO",
    photo: "gustavo",
    linkedin: "https://www.linkedin.com/in/gustavogregori/",
    highlights: [
      "20+ anos em mercados financeiros, com trajetória integrada entre sell-side e buy-side",
      "Passagens por PIMCO, Bradesco, HSBC, Deutsche Bank, Santander e Morgan Stanley",
      "Atuação em research, gestão e estruturação",
    ],
    bio: [
      "A atuação de Gustavo Gregori combina vinte anos de experiência em research, gestão e estruturação de operações, com cobertura de crédito corporativo em mercados emergentes e EUA, investment grade, high yield, loans e private credit. Sua trajetória, construída em casas de referência no Brasil e no exterior, consolidou uma leitura disciplinada de risco e profundo conhecimento da lógica de decisão dos credores institucionais.",
      "É sócio-fundador da Oria Partners, onde conduz mandatos e a interface com credores e clientes. Sua atuação parte da disciplina analítica de quem avaliou crédito do lado do investidor, com leitura objetiva dos riscos e foco na preservação do valor recuperável ao longo do processo de reestruturação.",
    ],
  },
];
const SOCIOS_EN = [
  {
    initials: "EP",
    name: "Enzo Pierobom",
    role: "Founding Partner & CEO",
    photo: "enzo",
    linkedin: "https://www.linkedin.com/in/enzo-pierobom/",
    highlights: [
      "Production Engineer (USP), MBA at Fundação Dom Cabral, board member certified by IBGC",
      "18+ years in financial markets, previously at ABN AMRO Real and Santander",
      "Manager of financial and operational restructurings (2021–2026)",
    ],
    bio: [
      "Enzo Pierobom worked across corporate credit, syndicated lending, infrastructure project finance, capital markets, M&A, treasury and debt restructuring, operating closely with creditors, shareholders and executive teams across different industries. He later moved into corporate restructuring, notably serving as interim statutory officer at **Metalfrio** during its operational restructuring between 2021 and 2022. He is a founding partner of Oria Partners, where he leads engagements, the relationship with financial stakeholders and the strategic conduct of complex restructuring and decision-coordination processes.",
    ],
  },
  {
    initials: "GG",
    name: "Gustavo Gregori",
    role: "Founding Partner & COO",
    photo: "gustavo",
    linkedin: "https://www.linkedin.com/in/gustavogregori/",
    highlights: [
      "20+ years in financial markets, with an integrated trajectory across sell-side and buy-side",
      "Previously at PIMCO, Bradesco, HSBC, Deutsche Bank, Santander and Morgan Stanley",
      "Experience in research, portfolio management and deal structuring",
    ],
    bio: [
      "Gustavo Gregori's work combines twenty years of experience in research, portfolio management and deal structuring, with coverage of corporate credit in emerging markets and the US, investment grade, high yield, loans and private credit. His career, built at leading institutions in Brazil and abroad, has consolidated a disciplined approach to risk assessment and deep knowledge of institutional creditors' decision-making logic.",
      "He is a founding partner of Oria Partners, where he leads engagements and the interface with creditors and clients. His approach draws on the analytical discipline of having evaluated credit from the investor side, with an objective reading of risks and a focus on preserving recoverable value throughout the restructuring process.",
    ],
  },
];

const CONTATO_INFO_BASE = {
  email: "comercial@oriapartners.com",
  telefone: "+55 11 99250-0682",
};

const CONTATO_INFO_PT = {
  ...CONTATO_INFO_BASE,
  endereco: "Rua do Rocio, 288, Edifício Liebherr Brasil, 6° andar, São Paulo/SP, CEP 04552-010",
};
const CONTATO_INFO_EN = {
  ...CONTATO_INFO_BASE,
  endereco: "Rua do Rocio, 288, Liebherr Brasil Building, 6th floor, São Paulo/SP, ZIP 04552-010",
};

// ============ UI STRINGS ============
export const UI = {
  pt: {
    hero: {
      eyebrow: "assessoria financeira independente · portfólio de soluções verticalizado",
      h1a: "Especialistas em Reestruturação Corporativa, contemplando reorganização administrativa, financeira, operacional ou societária de empresas",
      h1b: "",
      h1Lines: [
        { text: "Especialistas em Reestruturação\nCorporativa, contemplando\n" },
        { text: "reorganização administrativa,\nfinanceira, operacional\u00a0ou societária\u00a0\nde empresas\u00a0", italic: true },
      ],
      lead: "assessoria financeira independente · portfólio de soluções verticalizado",
      cta: "Conversar com um sócio",
      ctaSecondary: "Ver casos",
      note: "Discrição e confidencialidade.",
    },
    numeros: { label: "Nossos números" },
    sobre: { num: "" },
    quandoBuscar: {
      num: "Quando buscar",
      headingA: "O momento de agir quase nunca parece óbvio",
      headingB: "– até ser tarde demais",
      intro: "",
      quoteA: "",
      quoteB: "",
      closingP1: "",
      closingP2: "",
      closingItalic: "",
      cta: "Conversar com um sócio",
    },
    diferenciais: {
      num: "O que estrutura nossa atuação",
      headingA: "O que estrutura nossa atuação",
      headingB: "",
      intro: "A retomada da credibilidade é o que viabiliza qualquer solução. Por isso atuamos com independência técnica, imparcialidade e análises verificáveis por todas as partes. Credibilidade é o nosso principal ativo.",
      inegociaveis: "Princípios inegociáveis",
    },
    atuacao: {
      num: "§ 01, ATUAÇÃO",
      headingA: "Frentes integradas e acionadas conforme a ",
      headingB: "situação exige.",
      intro: "A atuação da Oria não segue um cardápio de serviços. Cada mandato é estruturado a partir do que a situação exige, com as frentes acionadas na sequência que o contexto permite e de forma que possa ser sustentada de maneira responsável.",
      pageNum: "§ ATUAÇÃO",
      frenteLabel: "FRENTE",
      metodoNum: "§ MÉTODO",
      metodoHeadingA: "Quatro etapas. Aplicadas com ",
      metodoHeadingB: "disciplina mesmo sob pressão.",
    },
    contato: {
      label: "Contato",
      headingA: "Situações complexas exigem priorização, estabilização e ",
      headingB: "planejamento.",
      lead: "Décadas combinadas em reestruturação, M&A e mercado de capitais, com passagens por bancos de investimento, áreas de crédito estruturado, financiamento a projetos e assessoria financeira. Operações de complexidade relevante em indústria, varejo, infraestrutura e serviços.",
      note: "Todas as conversas e materiais compartilhados são tratados com absoluta confidencialidade.",
      mapTitle: "Mapa Oria Partners",
      email: "E-mail",
      phone: "Telefone / WhatsApp",
      office: "Escritório",
      addrLine1: "Rua do Rocio, 288",
      addrLine2: "Edifício Liebherr Brasil | 6° andar",
      addrLine3: "São Paulo/SP, CEP 04552-010",
      name: "Nome",
      company: "Empresa",
      phoneOpt: "Telefone (opcional)",
      message: "Mensagem",
      placeholderName: "Seu nome",
      placeholderCompany: "Empresa",
      placeholderEmail: "voce@empresa.com",
      placeholderPhone: "+55 (11) 9XXXX-XXXX",
      placeholderMessage: "Descreva brevemente a situação.",
      submit: "Falar com a Oria",
      errName: "Informe seu nome",
      errCompany: "Informe a empresa",
      errEmail: "E-mail inválido",
      errMessage: "Descreva brevemente a situação",
      toastTitle: "Mensagem pronta para envio",
      toastDesc: "Abrimos seu cliente de e-mail com o conteúdo preenchido.",
      mailSubject: "Contato — ",
      mailNome: "Nome",
      mailEmpresa: "Empresa",
      mailEmail: "E-mail",
      mailTelefone: "Telefone",
    },
    footer: { rights: "Todos os direitos reservados.", privacy: "Política de Privacidade" },
    cookies: {
      dialogAria: "Consentimento de cookies",
      message: "Utilizamos cookies para analisar o tráfego e melhorar a experiência do site. Você pode aceitar ou recusar o uso de cookies não essenciais.",
      privacyLink: "Política de Privacidade",
      accept: "Aceitar",
      decline: "Recusar",
    },
    privacidade: {
      title: "Política de Privacidade",
      intro1:
        "Bem-vindo à Oria Partners, inscrita no CNPJ 30.036.963/0001-06, com sede na Rua do Rocio, 288 - Vila Olimpia, São Paulo, São Paulo. Nosso compromisso é com a integridade e a segurança dos dados pessoais dos nossos usuários e clientes. Esta Política de Privacidade aplica-se a todas as interações digitais realizadas em nosso site oriapartners.com, serviços associados, aplicativos móveis e outras plataformas digitais sob nosso controle.",
      intro2:
        "Ao acessar e utilizar nossas plataformas, você reconhece e concorda com as práticas descritas nesta política. Nós tratamos a proteção de seus dados pessoais com a máxima seriedade e nos comprometemos a processá-los de forma responsável, transparente e segura.",
      sections: [
        {
          title: "Definições",
          items: [
            "Dados Pessoais são informações que identificam ou podem identificar uma pessoa natural.",
            "Dados Pessoais Sensíveis são informações que revelam características pessoais íntimas, como origem racial, convicções religiosas, opiniões políticas, dados genéticos ou biométricos.",
            "Tratamento de Dados Pessoais abrange qualquer operação com Dados Pessoais, como coleta, registro, armazenamento, uso, compartilhamento ou destruição.",
            "Leis de Proteção de Dados são todas as leis que regulamentam o Tratamento de Dados Pessoais, incluindo a LGPD (Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/18).",
          ],
        },
        {
          title: "Dados Coletados e Motivos da Coleta",
          paragraphs: ["Nós coletamos e processamos os seguintes tipos de dados pessoais:"],
          items: [
            "Informações Fornecidas por Você: Isso inclui nome, empresa, endereço de e-mail, telefone e mensagem, fornecidos voluntariamente por meio do formulário de contato disponível no site.",
            "Informações Coletadas Automaticamente: Quando você visita nosso site, coletamos automaticamente informações sobre seu dispositivo e sua interação com nosso site. Isso pode incluir dados como seu endereço IP, tipo de navegador, detalhes do dispositivo, fuso horário, páginas visitadas, produtos visualizados, sites ou termos de busca que o direcionaram ao nosso site, e informações sobre como você interage com nosso site.",
          ],
        },
        {
          title: "Uso de Cookies e Tecnologias de Rastreamento",
          paragraphs: [
            "A Oria Partners utiliza cookies, que são pequenos arquivos de texto armazenados no seu dispositivo, e outras tecnologias de rastreamento para melhorar a experiência do usuário em nosso site oriapartners.com, entender como nossos serviços são utilizados e otimizar nossas estratégias de marketing.",
          ],
          items: [
            "Cookies Essenciais: Essenciais para o funcionamento do site, permitindo que você navegue e use suas funcionalidades. Sem esses cookies, recursos básicos de navegação e preferências do usuário não podem ser mantidos.",
            "Cookies de Desempenho e Analíticos: Coletam informações sobre como os visitantes usam o nosso site, quais páginas são visitadas com mais frequência e se eles recebem mensagens de erro. Esses cookies são usados apenas para melhorar o desempenho e a experiência do usuário no site.",
            "Cookies de Funcionalidade: Permitem que o site lembre de escolhas que você faz (como seu nome de usuário, idioma ou a região em que você está) e forneça recursos aprimorados e mais pessoais.",
            "Cookies de Publicidade e Redes Sociais: Poderão ser utilizados, mediante consentimento explícito, para análise de campanhas e mensuração de audiência. Esses cookies só serão ativados após aceite no banner de consentimento exibido na primeira visita ao site.",
          ],
        },
        {
          title: "Finalidades do Processamento de Dados",
          paragraphs: [
            "Os dados coletados são utilizados para as seguintes finalidades, com as respectivas bases legais previstas no Art. 7º da Lei nº 13.709/2018 (LGPD):",
          ],
          items: [
            "Responder ao contato realizado via formulário, base legal: consentimento do titular (Art. 7º, I);",
            "Analisar o tráfego e o comportamento de navegação no site, mediante consentimento para cookies analíticos, base legal: consentimento do titular (Art. 7º, I);",
            "Melhorar os serviços e a experiência do usuário no site, base legal: legítimo interesse (Art. 7º, IX);",
            "Cumprir obrigações legais e regulatórias aplicáveis, base legal: cumprimento de obrigação legal (Art. 7º, II).",
          ],
        },
        {
          title: "Compartilhamento e Transferência de Dados Pessoais",
          paragraphs: ["Nós podemos compartilhar seus dados pessoais com terceiros nas seguintes circunstâncias:"],
          items: [
            "Com fornecedores de serviços e parceiros que nos auxiliam nas operações de negócio, desde que estes atuem em conformidade com nossas diretrizes de proteção de dados e com a legislação aplicável;",
            "Para cumprir com obrigações legais, responder a processos judiciais, ou proteger nossos direitos e propriedades, bem como a segurança de nossos clientes e do público;",
            "Em caso de reestruturação corporativa, venda, fusão ou outra transferência de ativos, garantindo que a entidade receptora concorde em respeitar a privacidade de seus dados de acordo com uma política equivalente à nossa.",
          ],
        },
        {
          title: "Links para outros sites e redes sociais",
          paragraphs: [
            "Nossa plataforma pode incluir links para sites externos de parceiros, anunciantes e fornecedores. Clicar nesses links implica que você será direcionado para fora do nosso site, entrando em domínios que seguem suas próprias políticas de privacidade, pelas quais não somos responsáveis.",
            "Recomendamos a leitura atenta dessas políticas antes de fornecer qualquer dado pessoal. Da mesma forma, não assumimos responsabilidade pelas práticas de privacidade de terceiros como Facebook, Apple, Google e Microsoft. Aconselhamos você a se informar sobre as políticas de privacidade dessas entidades ao utilizar seus serviços ou aplicativos.",
          ],
        },
        {
          title: "Direitos dos Titulares dos Dados",
          paragraphs: ["Você possui diversos direitos em relação aos seus dados pessoais, incluindo:"],
          items: [
            "O direito de acesso, retificação ou exclusão de seus dados pessoais sob nossa posse;",
            "O direito de limitar ou se opor ao nosso processamento de seus dados;",
            "O direito à portabilidade de dados;",
            "O direito de retirar seu consentimento a qualquer momento, quando o processamento for baseado em consentimento.",
          ],
          note: "Para exercer esses direitos, entre em contato conosco através de contato@oriapartners.com.",
        },
        {
          title: "Segurança dos Dados",
          paragraphs: [
            "Implementamos medidas de segurança técnica e organizacional para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, é importante notar que nenhum sistema é completamente seguro. Nos comprometemos a notificar você e qualquer autoridade aplicável de quaisquer brechas de segurança de acordo com a legislação vigente.",
          ],
        },
        {
          title: "Alterações na Política de Privacidade",
          paragraphs: [
            "Nossa Política de Privacidade pode ser atualizada periodicamente. A versão mais atual será sempre publicada em nosso site, indicando a data da última revisão. Encorajamos você a revisar regularmente nossa política para estar sempre informado sobre como estamos protegendo seus dados.",
          ],
        },
        {
          title: "Contato",
          paragraphs: [
            "Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou práticas de dados, por favor, não hesite em nos contatar em contato@oriapartners.com. Estamos comprometidos em resolver quaisquer questões relacionadas à privacidade de nossos usuários e clientes.",
          ],
        },
      ],
    },
    nav: {
      menu: "Navegação",
      logoAria: "Ir para a página inicial",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    socios: {
      num: "§ SÓCIOS",
      headingA: "Sócios com experiência direta em reestruturação, crédito e ",
      headingB: "decisões operacionais sob pressão.",
      intro: "A Oria Partners é liderada por profissionais com experiência direta em reestruturação, novas captações e decisões estratégicas sob pressão. Nosso trabalho depende de julgamento disciplinado em ambientes onde a informação é incompleta, os incentivos estão desalinhados e as consequências são relevantes. Atuamos de forma direta e discreta, assumindo a coordenação quando a clareza se deteriora e a confiança entre stakeholders se fragiliza.",
      linkedinAria: "LinkedIn de",
    },
    casos: {
      num: "§ CASOS",
      headingA: "Situações reais em que recolocamos credores, acionistas e gestão ",
      headingB: "na mesma página.",
      intro: "Casos anonimizados para preservar confidencialidade. Contexto, desafio, atuação e resultado mantidos como ocorreram.",
      collapse: "Recolher —",
      expand: "Ler caso +",
      labels: { empresa: "Empresa", setor: "Setor", porte: "Porte", contexto: "Contexto", desafio: "Desafio", atuacao: "Atuação", resultado: "Resultado" },
      track: "Track record",
    },
  },
  en: {
    hero: {
      eyebrow: "independent financial advisory · vertically integrated portfolio of solutions",
      h1a: "Specialists in Corporate Restructuring, covering administrative, financial, operational or corporate reorganization of companies",
      h1b: "",
      h1Lines: [
        { text: "Specialists in Corporate Restructuring, covering " },
        { text: "administrative, financial, operational or corporate reorganization of companies", italic: true },
      ],
      lead: "independent financial advisory · vertically integrated portfolio of solutions",
      cta: "Speak with a partner",
      ctaSecondary: "View case studies",
      note: "Discretion and confidentiality.",
    },
    numeros: { label: "Our numbers" },
    sobre: { num: "" },
    quandoBuscar: {
      num: "When to engage",
      headingA: "The right time to act rarely feels obvious",
      headingB: "– until it is too late",
      intro: "",
      quoteA: "",
      quoteB: "",
      closingP1: "",
      closingP2: "",
      closingItalic: "",
      cta: "Speak with a partner",
    },
    diferenciais: {
      num: "What structures our work",
      headingA: "What structures our work",
      headingB: "",
      intro: "Restoring credibility is what makes any solution viable. We work with technical independence, impartiality and analyses every party can verify. Credibility is our main asset.",
      inegociaveis: "Non-negotiable principles",
    },
    atuacao: {
      num: "§ 01, SERVICES",
      headingA: "Integrated workstreams, activated as the ",
      headingB: "situation requires.",
      intro: "Oria's work does not follow a menu of services. Each engagement is structured around what the situation actually requires, with workstreams activated in the sequence the context allows and in a way that can be sustained responsibly.",
      pageNum: "§ SERVICES",
      frenteLabel: "WORKSTREAM",
      metodoNum: "§ METHOD",
      metodoHeadingA: "Four stages. Applied with ",
      metodoHeadingB: "discipline, even under pressure.",
    },
    contato: {
      label: "Contact",
      headingA: "Complex situations require prioritization, stabilization and ",
      headingB: "planning.",
      lead: "Decades of combined experience in restructuring, M&A and capital markets, including stints at investment banks, structured credit desks, project finance and financial advisory. Transactions of significant complexity across industrial, retail, infrastructure and services sectors.",
      note: "All conversations and materials shared are treated with absolute confidentiality.",
      mapTitle: "Oria Partners map",
      email: "E-mail",
      phone: "Phone / WhatsApp",
      office: "Office",
      addrLine1: "Rua do Rocio, 288",
      addrLine2: "Liebherr Brasil Building | 6th floor",
      addrLine3: "São Paulo/SP, ZIP 04552-010",
      name: "Name",
      company: "Company",
      phoneOpt: "Phone (optional)",
      message: "Message",
      placeholderName: "Your name",
      placeholderCompany: "Company",
      placeholderEmail: "you@company.com",
      placeholderPhone: "+1 (XXX) XXX-XXXX",
      placeholderMessage: "Briefly describe the situation.",
      submit: "Reach out to Oria",
      errName: "Please provide your name",
      errCompany: "Please provide the company",
      errEmail: "Invalid e-mail",
      errMessage: "Please briefly describe the situation",
      toastTitle: "Message ready to send",
      toastDesc: "We have opened your e-mail client with the message prefilled.",
      mailSubject: "Contact — ",
      mailNome: "Name",
      mailEmpresa: "Company",
      mailEmail: "E-mail",
      mailTelefone: "Phone",
    },
    footer: { rights: "All rights reserved.", privacy: "Privacy Policy" },
    cookies: {
      dialogAria: "Cookie consent",
      message: "We use cookies to analyze traffic and improve the site experience. You can accept or decline non-essential cookies.",
      privacyLink: "Privacy Policy",
      accept: "Accept",
      decline: "Decline",
    },
    privacidade: {
      title: "Privacy Policy",
      intro1:
        "Welcome to Oria Partners, registered under CNPJ 30.036.963/0001-06, with headquarters at Rua do Rocio, 288 - Vila Olimpia, São Paulo, São Paulo. We are committed to the integrity and security of the personal data of our users and clients. This Privacy Policy applies to all digital interactions on our website oriapartners.com, associated services, mobile applications and other digital platforms under our control.",
      intro2:
        "By accessing and using our platforms, you acknowledge and agree to the practices described in this policy. We treat the protection of your personal data with the utmost seriousness and are committed to processing it in a responsible, transparent and secure manner.",
      sections: [
        {
          title: "Definitions",
          items: [
            "Personal Data is information that identifies or may identify a natural person.",
            "Sensitive Personal Data is information that reveals intimate personal characteristics, such as racial origin, religious convictions, political opinions, genetic or biometric data.",
            "Processing of Personal Data covers any operation involving Personal Data, such as collection, recording, storage, use, sharing or destruction.",
            "Data Protection Laws are all laws governing the Processing of Personal Data, including the LGPD (Brazilian General Data Protection Law, Law No. 13,709/18).",
          ],
        },
        {
          title: "Data Collected and Reasons for Collection",
          paragraphs: ["We collect and process the following types of personal data:"],
          items: [
            "Information Provided by You: This includes name, company, email address, phone number and message, voluntarily provided through the contact form available on the website.",
            "Information Collected Automatically: When you visit our website, we automatically collect information about your device and your interaction with our website. This may include data such as your IP address, browser type, device details, time zone, pages visited, products viewed, websites or search terms that referred you to our site, and information about how you interact with our website.",
          ],
        },
        {
          title: "Use of Cookies and Tracking Technologies",
          paragraphs: [
            "Oria Partners uses cookies, which are small text files stored on your device, and other tracking technologies to improve the user experience on our website oriapartners.com, understand how our services are used and optimize our marketing strategies.",
          ],
          items: [
            "Essential Cookies: Essential for the operation of the website, allowing you to navigate and use its features. Without these cookies, basic navigation features and user preferences cannot be maintained.",
            "Performance and Analytics Cookies: Collect information about how visitors use our website, which pages are visited most often and whether they receive error messages. These cookies are used only to improve the performance and user experience of the site.",
            "Functionality Cookies: Allow the site to remember choices you make (such as your username, language or the region you are in) and provide enhanced and more personal features.",
            "Advertising and Social Media Cookies: May be used, with explicit consent, for campaign analysis and audience measurement. These cookies will only be activated after acceptance in the consent banner displayed on the first visit to the site.",
          ],
        },
        {
          title: "Purposes of Data Processing",
          paragraphs: [
            "The data collected is used for the following purposes, with the respective legal bases provided for in Art. 7 of Law No. 13,709/2018 (LGPD):",
          ],
          items: [
            "Responding to contact made via the form, legal basis: consent of the data subject (Art. 7, I);",
            "Analyzing traffic and browsing behavior on the site, subject to consent for analytics cookies, legal basis: consent of the data subject (Art. 7, I);",
            "Improving services and user experience on the site, legal basis: legitimate interest (Art. 7, IX);",
            "Complying with applicable legal and regulatory obligations, legal basis: compliance with a legal obligation (Art. 7, II).",
          ],
        },
        {
          title: "Sharing and Transfer of Personal Data",
          paragraphs: ["We may share your personal data with third parties in the following circumstances:"],
          items: [
            "With service providers and partners who assist us in business operations, provided they act in accordance with our data protection guidelines and applicable law;",
            "To comply with legal obligations, respond to judicial proceedings, or protect our rights and property, as well as the safety of our clients and the public;",
            "In the event of corporate restructuring, sale, merger or other transfer of assets, ensuring that the receiving entity agrees to respect the privacy of your data in accordance with a policy equivalent to ours.",
          ],
        },
        {
          title: "Links to other sites and social networks",
          paragraphs: [
            "Our platform may include links to external sites of partners, advertisers and suppliers. Clicking these links means you will be directed away from our site, entering domains that follow their own privacy policies, for which we are not responsible.",
            "We recommend reading these policies carefully before providing any personal data. Likewise, we do not assume responsibility for the privacy practices of third parties such as Facebook, Apple, Google and Microsoft. We advise you to inform yourself about the privacy policies of these entities when using their services or applications.",
          ],
        },
        {
          title: "Rights of Data Subjects",
          paragraphs: ["You have several rights in relation to your personal data, including:"],
          items: [
            "The right to access, rectify or delete your personal data in our possession;",
            "The right to limit or object to our processing of your data;",
            "The right to data portability;",
            "The right to withdraw your consent at any time, when processing is based on consent.",
          ],
          note: "To exercise these rights, please contact us at contato@oriapartners.com.",
        },
        {
          title: "Data Security",
          paragraphs: [
            "We implement technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure or destruction. However, it is important to note that no system is completely secure. We commit to notifying you and any applicable authority of any security breaches in accordance with current legislation.",
          ],
        },
        {
          title: "Changes to the Privacy Policy",
          paragraphs: [
            "Our Privacy Policy may be updated periodically. The most current version will always be published on our website, indicating the date of the last revision. We encourage you to review our policy regularly to stay informed about how we are protecting your data.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "If you have questions or concerns about our Privacy Policy or data practices, please do not hesitate to contact us at contato@oriapartners.com. We are committed to resolving any matters related to the privacy of our users and clients.",
          ],
        },
      ],
    },
    nav: {
      menu: "Navigation",
      logoAria: "Go to homepage",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    socios: {
      num: "§ PARTNERS",
      headingA: "Partners with direct experience in restructuring, credit and ",
      headingB: "operational decisions under pressure.",
      intro: "Oria Partners is led by professionals with direct experience in restructuring, new fundraising and strategic decisions under pressure. Our work depends on disciplined judgment in environments where information is incomplete, incentives are misaligned and consequences are material. We work directly and discreetly, taking on coordination when clarity deteriorates and trust among stakeholders weakens.",
      linkedinAria: "LinkedIn of",
    },
    casos: {
      num: "§ CASE STUDIES",
      headingA: "Real situations where we brought creditors, shareholders and management ",
      headingB: "back onto the same page.",
      intro: "Cases anonymized to preserve confidentiality. Context, challenge, action and outcome kept as they occurred.",
      collapse: "Collapse —",
      expand: "Read case +",
      labels: { empresa: "Company", setor: "Sector", porte: "Size", contexto: "Context", desafio: "Challenge", atuacao: "Action", resultado: "Outcome" },
      track: "Track record",
    },
  },
} as const;

// ============ HOOKS ============
export const useContent = () => {
  const { lang } = useLang();
  return {
    lang,
    NAV_LINKS: lang === "en" ? NAV_EN : NAV_PT,
    NUMEROS: lang === "en" ? NUMEROS_EN : NUMEROS_PT,
    SOBRE: lang === "en" ? SOBRE_EN : SOBRE_PT,
    GATILHOS: lang === "en" ? GATILHOS_EN : GATILHOS_PT,
    PILARES: lang === "en" ? PILARES_EN : PILARES_PT,
    INEGOCIAVEIS: lang === "en" ? INEGOCIAVEIS_EN : INEGOCIAVEIS_PT,
    FRENTES: lang === "en" ? FRENTES_EN : FRENTES_PT,
    METODO: lang === "en" ? METODO_EN : METODO_PT,
    CASOS: lang === "en" ? CASOS_EN : CASOS_PT,
    SOCIOS: lang === "en" ? SOCIOS_EN : SOCIOS_PT,
    TRACK_RECORD: lang === "en" ? TRACK_RECORD_EN : TRACK_RECORD_PT,
    CONTATO_INFO: lang === "en" ? CONTATO_INFO_EN : CONTATO_INFO_PT,
    UI: UI[lang],
  };
};

// Backward-compatible exports (default to PT), kept so any leftover imports do not break
export const NAV_LINKS = NAV_PT;
export const NUMEROS = NUMEROS_PT;
export const SOBRE = SOBRE_PT;
export const GATILHOS = GATILHOS_PT;
export const PILARES = PILARES_PT;
export const INEGOCIAVEIS = INEGOCIAVEIS_PT;
export const FRENTES = FRENTES_PT;
export const METODO = METODO_PT;
export const CASOS = CASOS_PT;
export const TRACK_RECORD = TRACK_RECORD_PT;
export const SOCIOS = SOCIOS_PT;
export const CONTATO_INFO = CONTATO_INFO_PT;
