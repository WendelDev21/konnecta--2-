const templates = [
  {
    id: "email-marketing",
    title: "Email Marketing Automático",
    description: "Envie campanhas de email segmentadas baseadas no comportamento e histórico do cliente.",
    icon: "📧",
    category: "Marketing",
    difficulty: "Fácil",
    benefits: [
      "Aumento de 45% em taxa de conversão",
      "Redução de 60% no tempo de marketing",
      "Engajamento personalizado em escala",
    ],
  },
  {
    id: "pedidos-ecommerce",
    title: "Integração com CRM",
    description: "A automação do CRM organiza todos os seus leads e clientes de forma automática",
    icon: "🚀",
    category: "CRM",
    difficulty: "Intermediário",
    benefits: [
      "Respostas mais rápidas e atendimento consistente", 
      "Zero tarefas repetitivas", 
      "Leads organizados automaticamente"
    ],
  },
  {
    id: "onboarding-clientes",
    title: "Onboarding de Clientes",
    description: "Fluxo completo de boas-vindas com documentação, treinamento e suporte inicial.",
    icon: "👥",
    category: "Operações",
    difficulty: "Intermediário",
    benefits: [
      "Redução de 50% no tempo de onboarding",
      "Aumento de satisfação de clientes",
      "Menos carga no time de suporte",
    ],
  },
  {
    id: "relatorios-financeiros",
    title: "Relatórios Financeiros Automáticos",
    description: "Gere relatórios detalhados consolidando dados de múltiplas fontes automaticamente.",
    icon: "📊",
    category: "Financeiro",
    difficulty: "Avançado",
    benefits: [
      "Elimina trabalho manual de 20 horas/semana",
      "Reduz erros de consolidação em 99%",
      "Insights financeiros em tempo real",
    ],
  },
  {
    id: "atendimento-chatbot",
    title: "Chatbot de Atendimento 24/7",
    description: "Atenda clientes automaticamente com IA, escalando para humanos quando necessário.",
    icon: "💬",
    category: "Suporte",
    difficulty: "Avançado",
    benefits: [
      "Atendimento disponível 24/7",
      "Redução de 70% em tickets simples",
      "Satisfação de cliente acima de 92%",
    ],
  },
  {
    id: "dashboard-vendas",
    title: "Dashboard de Vendas em Tempo Real",
    description: "Monitore KPIs de vendas com visualizações atualizadas automaticamente.",
    icon: "📈",
    category: "Analytics",
    difficulty: "Fácil",
    benefits: ["Visibilidade total do pipeline", "Decisões baseadas em dados", "Identificação de oportunidades"],
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
        <!-- <div style="display: flex; gap: 12px; margin-top: 24px;">
          <button class="apply-btn" onclick="openContactModal()">Solicitar Demo</button>
        </div> -->
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
