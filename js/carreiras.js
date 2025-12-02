const jobs = [
  {
    id: 1,
    title: "Desenvolvedor n8n",
    department: "Automações",
    level: "Junior",
    location: "Aracaju, SE",
    type: "Remoto",
    description:
      "Procuramos um Desenvolvedor n8n com experiência em automações e arquitetura de sistemas. Você será responsável por liderar projetos de automação e integração.",
    requirements: ["1+ anos de experiência", "n8n, Make, Zapier ou relacionados", "Html, Css e Javascript", "Experiência com APIs REST"],
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("jobsContainer")

  jobs.forEach((job) => {
    const card = document.createElement("div")
    card.className = "job-card"

    card.innerHTML = `
      <button onclick="toggleJob(${job.id})">
        <div class="job-header">
          <h3>${job.title}</h3>
          <div class="job-tags">
            <span class="job-tag">${job.department}</span>
            <span class="job-tag">${job.level}</span>
            <span class="job-tag">${job.location}</span>
            <span class="job-tag" style="border: 1px solid var(--ring); background: transparent; color: var(--ring);">${job.type}</span>
          </div>
        </div>
        <span style="color: #64748b; transition: transform 0.3s;" class="job-chevron-${job.id}">▼</span>
      </button>
      <div class="job-expanded" id="job-expanded-${job.id}">
        <h4>Sobre a vaga</h4>
        <p>${job.description}</p>
        
        <h4>Requisitos</h4>
        <ul class="job-requirements">
          ${job.requirements.map((req) => `<li>• ${req}</li>`).join("")}
        </ul>
        
        <button class="apply-btn" onclick="openContactModal()">Candidatar-se</button>
      </div>
    `

    container.appendChild(card)
  })
})

function toggleJob(id) {
  const expanded = document.getElementById(`job-expanded-${id}`)
  const chevron = document.querySelector(`.job-chevron-${id}`)

  expanded.classList.toggle("active")
  if (expanded.classList.contains("active")) {
    chevron.style.transform = "rotate(180deg)"
  } else {
    chevron.style.transform = "rotate(0)"
  }
}
