// Cookie Management
function acceptCookies() {
  localStorage.setItem("cookie-consent", "accepted")
  document.getElementById("cookieConsent").classList.remove("visible")
}

function rejectCookies() {
  localStorage.setItem("cookie-consent", "rejected")
  document.getElementById("cookieConsent").classList.remove("visible")
}

// Initialize Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
  const consent = localStorage.getItem("cookie-consent")
  if (!consent) {
    document.getElementById("cookieConsent").classList.add("visible")
  }
})

// Modal Management
function openContactModal() {
  document.getElementById("contactModal").classList.add("active")
}

function closeContactModal() {
  document.getElementById("contactModal").classList.remove("active")
}

// Handle Contact Form
function handleSubmit(e) {
  e.preventDefault()
  alert("Obrigado pelo contato! Em breve responderemos sua mensagem.")
  document.getElementById("contactForm").reset()
  closeContactModal()
}

// Close modal on backdrop click
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal")
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeContactModal()
    }
  })
})

// Mobile Menu Management
function toggleMobileMenu() {
  const menu = document.querySelector(".navbar-menu")
  menu.classList.toggle("mobile-open")
}

// Close mobile menu when link is clicked
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".navbar-menu")
      menu.classList.remove("mobile-open")
    })
  })
})


const counters = document.querySelectorAll(".result-number");
let started = false;

function animateCounters() {
if (started) return;
const section = document.querySelector("#results");
const sectionTop = section.getBoundingClientRect().top;

if (sectionTop < window.innerHeight - 100) {
  started = true;

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let value = 0;
    const speed = target / 80; // Ajusta a velocidade

    const update = () => {
      value += speed;
      counter.textContent = Math.floor(value);

      if (value < target) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };

    update();
  });
}
}

window.addEventListener("scroll", animateCounters);

async function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");

    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
    };

    try {
        const response = await fetch("https://n8n.konnectaai.com.br/webhook/site-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Erro ao enviar o formulário.");
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
        closeContactModal();

    } catch (err) {
        alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
        console.error(err);
    }
}
 

