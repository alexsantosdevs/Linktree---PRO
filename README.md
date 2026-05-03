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

```bash
git clone https://github.com/seu-usuario/linktree-pro.git
cd linktree-pro
npx serve .
Ou simplesmente abra o arquivo index.html no navegador.

📝 Personalização
Alterar Perfil
Edite data/profile.json:

{
  "name": "Seu Nome",
  "avatar": "assets/images/sua-foto.jpg",
  "bioTexts": ["Sua bio 1", "Sua bio 2"]
}
Adicionar Links
Edite data/links.json:

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
Redes Sociais
Edite data/social.json:
{
  "social": [
    {
      "name": "Rede",
      "url": "https://...",
      "icon": "📷"
    }
  ]
}
