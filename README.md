# 🔗 LinkTree PRO

**Agregador de Links Profissional Premium**

Um agregador de links moderno e elegante, alternativa superior ao Linktree tradicional. Desenvolvido com design Glassmorphism, animações fluidas e suporte a temas claro/escuro.

---

## ✨ Funcionalidades

- 🎨 **Design Glassmorphism** - Visual premium com efeitos de vidro e blur
- 🌓 **Tema Claro/Escuro** - Alternância suave com persistência local
- ⌨️ **Typing Effect** - Bio animada com efeito de digitação
- 🔗 **Preview em Miniatura** - Ícones e thumbnails para cada link
- 📊 **Analytics Integrado** - Contagem de visualizações e cliques
- 📱 **Totalmente Responsivo** - Adaptação perfeita para qualquer dispositivo
- ⚡ **Performance Otimizada** - Carregamento instantâneo sem dependências
- 🎯 **Dados via JSON** - Fácil manutenção sem editar código
- 🔔 **Toasts Interativos** - Feedback visual ao clicar nos links
- 🌐 **SEO Otimizado** - Meta tags e dados estruturados

---

## 🛠 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Glassmorphism, animações, variáveis, flexbox/grid
- **JavaScript (ES6+)** - Classes, async/await, módulos
- **JSON** - Dados dinâmicos
- **LocalStorage/SessionStorage** - Persistência e analytics

---

## 🚀 Instalação

```
git clone https://github.com/seu-usuario/linktree-pro.git
cd linktree-pro
npx serve .
````
Ou simplesmente abra o arquivo ````index.html```` no navegador.

📝 Personalização
Alterar Perfil
Edite ````data/profile.json:````
````
{
  "name": "Seu Nome",
  "avatar": "assets/images/sua-foto.jpg",
  "bioTexts": ["Sua bio 1", "Sua bio 2"]
}
````
Adicionar Links
Edite ````data/links.json````:
````bash
{
  "links": [
    {
      "id": "meu-link",
      "title": "Título",
      "description": "Descrição",
      "url": "https://...",
      "icon": "🚀",
      "badge": "NOVO"
    }
  ]
}
````
Redes Sociais
Edite ````data/social.json````:
````
{
  "social": [
    {
      "name": "Rede",
      "url": "https://...",
      "icon": "📷"
    }
  ]
}
````
📁 Estrutura do Projeto
````
linktree-pro/
├── assets/
│   ├── images/
│   │   └── avatar.jpg
│   └── icons/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── animations.css
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── theme.js
│   ├── typing.js
│   ├── links.js
│   ├── analytics.js
│   └── app.js
├── data/
│   ├── profile.json
│   ├── links.json
│   └── social.json
├── index.html
├── README.md
└── .gitignore
````
🌐 Deploy
GitHub Pages (Grátis)
````bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/linktree-pro.git
git push -u origin main
````
No GitHub: Settings → Pages → Source: ````main```` → Save

🎯 Roadmap
Integração com APIs de redes sociais

Página de admin para editar links

Templates customizáveis

Short URLs personalizados

Dashboard de analytics avançado

<br> <br><div align="center"> <table> <tr> <td align="center" valign="middle"> <span style="font-size: 14px; color: #888; font-weight: 400;">Desenvolvido por</span> <br> <strong style="font-size: 20px; background: linear-gradient(135deg, #8b5cf6, #a855f7, #7c3aed, #6d28d9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 800; letter-spacing: -0.02em;">Alex Santos</strong> </td> <td align="center" valign="middle" width="60"> <img src="assets/images/logo.png" alt="Logo" width="40" height="40" style="display: block; margin: 0 auto;" onerror="this.style.display='none'"> </td> </tr> </table> </div><br>





