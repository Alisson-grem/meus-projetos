// O dicionário mágico da Sipah!
const translations = {
    pt: {
        role: "Desenvolvedor Front-end & Criador de Ferramentas",
        projectsTitle: "Meus Projetos",
        proj1Desc: "Aplicativo gamificado para rastreamento de hábitos e missões de guilda, com timers e títulos de recompensa.",
        proj2Desc: "Ferramenta digital de combate para RPG de mesa, controle de HP, efeitos de status e rolagem de dados.",
        proj3Desc: "Extensão de navegador para extrair, formatar e destacar links da web diretamente em Markdown.",
        viewProject: "Explorar Projeto",
        supportTitle: "Apoie meu trabalho",
        emailCopied: "Email copiado! Nyeh!",
        copyPixSuccess: "Chave Pix copiada!"
    },
    en: {
        role: "Front-end Developer & Tool Creator",
        projectsTitle: "My Projects",
        proj1Desc: "Gamified app for habit tracking and guild missions, with timers and reward titles.",
        proj2Desc: "Digital combat tool for tabletop RPG, HP tracking, status effects, and dice rolling.",
        proj3Desc: "Browser extension to extract, format, and highlight web links directly in Markdown.",
        viewProject: "Explore Project",
        supportTitle: "Support my work",
        emailCopied: "Email copied! Nyeh!",
        copyPixSuccess: "Pix Key copied!"
    }
};

let currentLang = 'pt';

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Magia de Idiomas ---
    const langBtns = document.querySelectorAll('.lang-btn');
    const supportPt = document.getElementById('support-pt');
    const supportEn = document.getElementById('support-en');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.lang-btn.active').classList.remove('active');
            btn.classList.add('active');
            
            currentLang = btn.getAttribute('data-lang');
            
            // Troca os textos normais
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerText = translations[currentLang][key];
                }
            });

            // Lógica de esconder/mostrar os botões de pagamento
            if (currentLang === 'pt') {
                supportPt.classList.remove('hidden');
                supportEn.classList.add('hidden');
            } else {
                supportPt.classList.add('hidden');
                supportEn.classList.remove('hidden');
            }
        });
    });

    // --- Magia do Email Principal ---
    const emailText = document.getElementById('user-email');
    emailText.addEventListener('click', () => {
        const email = "siteforgeagp@gmail.com"; 
        navigator.clipboard.writeText(email).then(() => {
            const originalText = emailText.innerText;
            emailText.innerText = translations[currentLang].emailCopied;
            emailText.style.color = "#bb86fc";
            
            setTimeout(() => {
                emailText.innerText = email;
                emailText.style.color = "#03dac6";
            }, 2000);
        }).catch(err => console.error('Falha ao copiar:', err));
    });

    // --- Magia de Abrir a Gaveta do Pix ---
    const pixBtn = document.getElementById('pix-btn');
    const pixDetails = document.getElementById('pix-details');
    
    pixBtn.addEventListener('click', () => {
        // Tira ou bota a classe hidden na gaveta
        pixDetails.classList.toggle('hidden');
    });

    // --- Magia de Copiar a Chave Pix ---
    const copyPixBtn = document.getElementById('copy-pix-btn');
    const pixKey = document.getElementById('pix-key').innerText;

    copyPixBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            const originalText = copyPixBtn.innerText;
            copyPixBtn.innerText = translations[currentLang].copyPixSuccess;
            copyPixBtn.style.backgroundColor = "#bb86fc";
            copyPixBtn.style.color = "#121212";

            setTimeout(() => {
                copyPixBtn.innerText = originalText;
                copyPixBtn.style.backgroundColor = "#333";
                copyPixBtn.style.color = "#bb86fc";
            }, 2000);
        }).catch(err => console.error('Falha ao copiar Pix:', err));
    });
});