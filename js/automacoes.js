const templates = [
  {
    id: "email-marketing",
    title: "Email Marketing Automático",
    description: "Envie campanhas de email segmentadas baseadas no comportamento e histórico do cliente.",
    icon: "📧",
    category: "Marketing",
    difficulty: "Fácil",
    timeToImplement: "30 min",
    benefits: [
      "Aumento de 45% em taxa de conversão",
      "Redução de 60% no tempo de marketing",
      "Engajamento personalizado em escala",
    ],
    features: [
      "Segmentação automática",
      "Templates responsivos",
      "Análise de desempenho em tempo real",
      "A/B testing integrado",
      "Integração com CRM",
    ],
  },
  {
    id: "pedidos-ecommerce",
    title: "Processamento de Pedidos E-commerce",
    description: "Automatize todo o ciclo de pedidos: confirmação, pagamento, estoque e envio.",
    icon: "🛒",
    category: "E-commerce",
    difficulty: "Intermediário",
    timeToImplement: "2 horas",
    benefits: ["Processamento 10x mais rápido", "Redução de erros em 95%", "Rastreamento automático de estoque"],
    features: [
      "Validação automática de pedidos",
      "Atualização de estoque em tempo real",
      "Geração de NF eletrônica",
      "Integração com transportadoras",
      "Notificações ao cliente",
    ],
  },
  {
    id: "onboarding-clientes",
    title: "Onboarding de Clientes",
    description: "Fluxo completo de boas-vindas com documentação, treinamento e suporte inicial.",
    icon: "👥",
    category: "Operações",
    difficulty: "Intermediário",
    timeToImplement: "90 min",
    benefits: [
      "Redução de 50% no tempo de onboarding",
      "Aumento de satisfação de clientes",
      "Menos carga no time de suporte",
    ],
    features: [
      "Email de boas-vindas personalizado",
      "Compartilhamento automático de documentos",
      "Agendamento de chamadas",
      "Checklist interativo",
      "Feedback automático",
    ],
  },
  {
    id: "relatorios-financeiros",
    title: "Relatórios Financeiros Automáticos",
    description: "Gere relatórios detalhados consolidando dados de múltiplas fontes automaticamente.",
    icon: "📊",
    category: "Financeiro",
    difficulty: "Avançado",
    timeToImplement: "4 horas",
    benefits: [
      "Elimina trabalho manual de 20 horas/semana",
      "Reduz erros de consolidação em 99%",
      "Insights financeiros em tempo real",
    ],
    features: [
      "Consolidação de múltiplas fontes",
      "Cálculos complexos automáticos",
      "Geração de PDFs formatados",
      "Envio agendado para stakeholders",
      "Análise preditiva incluída",
    ],
  },
  {
    id: "atendimento-chatbot",
    title: "Chatbot de Atendimento 24/7",
    description: "Atenda clientes automaticamente com IA, escalando para humanos quando necessário.",
    icon: "💬",
    category: "Suporte",
    difficulty: "Avançado",
    timeToImplement: "3 horas",
    benefits: [
      "Atendimento disponível 24/7",
      "Redução de 70% em tickets simples",
      "Satisfação de cliente acima de 92%",
    ],
    features: [
      "IA com aprendizado contínuo",
      "Suporte multiidioma",
      "Escalação inteligente",
      "Histórico de conversa persistente",
      "Integração com help desk",
    ],
  },
  {
    id: "dashboard-vendas",
    title: "Dashboard de Vendas em Tempo Real",
    description: "Monitore KPIs de vendas com visualizações atualizadas automaticamente.",
    icon: "📈",
    category: "Analytics",
    difficulty: "Fácil",
    timeToImplement: "45 min",
    benefits: ["Visibilidade total do pipeline", "Decisões baseadas em dados", "Identificação de oportunidades"],
    features: [
      "Sincronização automática com CRM",
      "Gráficos interativos",
      "Alertas de anomalias",
      "Comparação período a período",
      "Previsões de vendas",
    ],
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("automationsContainer")

  templates.forEach((template) => {
    const card = document.createElement("div")
    card.className = "template-card"

    const difficultyColor =
      template.difficulty === "Fácil" ? "#22c55e" : template.difficulty === "Intermediário" ? "#eab308" : "#ef4444"

    card.innerHTML = `
      <button onclick="toggleTemplate('${template.id}')">
        <div class="template-info">
          <div class="template-icon">${template.icon}</div>
          <div class="template-header">
            <h3>${template.title}</h3>
            <div class="template-meta">
              <span class="badge-tag">${template.category}</span>
              <span class="badge-tag" style="border: 1px solid ${difficultyColor}; background: transparent; color: ${difficultyColor};">${template.difficulty}</span>
            </div>
            <p class="template-description">${template.description}</p>
          </div>
        </div>
        <span style="color: #64748b; transition: transform 0.3s;" class="chevron-${template.id}">▼</span>
      </button>
      <div class="template-expanded" id="expanded-${template.id}">
        <h4>✨ Benefícios Principais</h4>
        <div class="template-benefits">
          ${template.benefits.map((b) => `<div class="benefit-item">✓ ${b}</div>`).join("")}
        </div>
        
        <h4>🔧 Recursos Inclusos</h4>
        <div class="template-features">
          <div class="features-list">
            ${template.features.map((f) => `<div class="feature-item">• ${f}</div>`).join("")}
          </div>
        </div>
        
        <div style="display: flex; gap: 12px; margin-top: 24px;">
          <button class="apply-btn" onclick="openContactModal()">Solicitar Demo</button>
        </div>
      </div>
    `

    container.appendChild(card)
  })
})

function toggleTemplate(id) {
  const expanded = document.getElementById(`expanded-${id}`)
  const chevron = document.querySelector(`.chevron-${id}`)

  expanded.classList.toggle("active")
  if (expanded.classList.contains("active")) {
    chevron.style.transform = "rotate(180deg)"
  } else {
    chevron.style.transform = "rotate(0)"
  }
}
