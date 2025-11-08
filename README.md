# MagicKAI - Sistema de Filtros de Cartas

Um sistema web para filtrar cartas baseado em categoria e preço máximo, desenvolvido com HTML, CSS e JavaScript.

## 📋 Sobre o Projeto

O MagicKAI é uma aplicação web que permite aos usuários filtrar uma coleção de cartas utilizando critérios de categoria e preço máximo. O projeto foi desenvolvido com foco em simplicidade e performance, utilizando apenas tecnologias web nativas.
<img width="870" height="935" alt="Screenshot_1" src="https://github.com/user-attachments/assets/72b3ed38-6850-4810-86d6-01814bd6868f" />

## ✨ Funcionalidades

- 🔍 **Filtro por Categoria**: Filtre cartas por categoria específica
- 💰 **Filtro por Preço**: Defina um preço máximo para filtrar as cartas
- 🎯 **Filtros Combinados**: Use ambos os filtros simultaneamente
- 📱 **Interface Responsiva**: Funciona em desktop e dispositivos móveis
- ⚡ **Performance Otimizada**: Filtragem em tempo real sem recarregamento da página

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Lógica de filtragem e interatividade

## 📁 Estrutura do Projeto

```
projeto-magickai/
├── src/
│   ├── js/
│   │   └── index.js          # Lógica principal de filtragem
│   ├── css/
│   │   └── styles.css        # Estilos da aplicação
│   └── index.html            # Página principal
├── assets/                   # Imagens e recursos
└── README.md
```

## 🎮 Como Usar

1. **Visualizar Cartas**: Todas as cartas são exibidas por padrão
2. **Filtrar por Categoria**: 
   - Selecione uma categoria no dropdown
   - Clique em "Aplicar Filtros"
3. **Filtrar por Preço**:
   - Digite o preço máximo desejado
   - Clique em "Aplicar Filtros"
4. **Combinar Filtros**: Use ambos os filtros para uma busca mais específica
5. **Limpar Filtros**: Deixe os campos vazios e clique em "Aplicar Filtros"

## 🏗️ Estrutura do Código

### JavaScript Principal (`src/js/index.js`)

```javascript
// Principais funcionalidades:
- Event listener para o botão de filtros
- Captura de valores dos campos de entrada
- Lógica de filtragem por categoria e preço
- Manipulação de classes CSS para mostrar/esconder cartas
```

### Atributos de Dados HTML

As cartas devem conter os seguintes atributos `data-*`:
- `data-categoria`: Categoria da carta
- `data-preco`: Preço da carta (formato numérico)

## 📝 Roadmap

- [ ] Adicionar mais filtros (raridade, tipo, etc.)
- [ ] Implementar busca por nome
- [ ] Adicionar ordenação (preço, nome, categoria)
- [ ] Melhorar a interface visual
- [ ] Adicionar animações de transição
- [ ] Implementar modo escuro

## 👨‍💻 Autor

- GitHub: [@josealbertodeev](https://github.com/josealbertodeev)
- LinkedIn: [José Alberto B Farias
](https://www.linkedin.com/in/josealbertofarias/)

## Acesse o site por aqui 👉 [Link](https://magick-ai-phi.vercel.app)

## 🙏 Agradecimentos

-  DevQuest

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!


