# Deck Paranormal

Um aplicativo web para criar e gerenciar cartas de rituais do RPG Ordem Paranormal.

## 📋 Sobre o Projeto

Este projeto permite que jogadores e mestres de Ordem Paranormal criem, salvem e visualizem cartas de rituais personalizadas. As cartas são armazenadas localmente no navegador, permitindo acesso offline aos seus rituais criados.

## ✨ Funcionalidades

- **Criar Rituais**: Interface completa para criar cartas de rituais com todos os atributos
- **Visualizar Cartas**: Grid responsivo com todas as cartas criadas
- **Detalhes do Ritual**: Página dedicada para cada ritual com informações completas
- **Busca**: Sistema de busca para encontrar rituais rapidamente
- **Armazenamento Local**: Todos os dados são salvos no localStorage do navegador
- **Responsivo**: Layout adaptável para desktop, tablet e mobile

## 🎴 Atributos dos Rituais

Cada carta de ritual inclui:

- **Nome e Elemento**: Identificação e elemento paranormal
- **Círculo**: Nível do ritual (1ª a 4ª)
- **Estatísticas**: Execução, Alcance, Área, Duração, Resistência e Alvo
- **Descrição**: Detalhes sobre o funcionamento do ritual
- **Formas Avançadas**: 
  - Discente (custo PE, pré-requisitos e descrição)
  - Verdadeira (custo PE, pré-requisitos e descrição)
- **Fonte**: Referência da origem do ritual

## 🛠️ Tecnologias

- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Shadcn UI](https://www.shadcn-vue.com/)** - Componentes de UI
- **[TailwindCSS v4](https://tailwindcss.com/)** - Estilização
- **[Pinia](https://pinia.vuejs.org/)** - Gerenciamento de estado
- **[Lucide Icons](https://lucide.dev/)** - Ícones
- **[Vue Sonner](https://vue-sonner.vercel.app/)** - Notificações toast

## 🚀 Como Usar

Acesse: 

### Criando um Ritual

1. Clique no botão **+** no canto inferior direito
2. Preencha os campos do formulário:
   - Selecione uma imagem de referência
   - Escolha o elemento
   - Defina o nome e círculo
   - Configure as estatísticas (execução, alcance, etc)
   - Adicione a descrição
   - Configure as formas Discente e Verdadeira
   - Informe a fonte
3. Clique em **Confirmar** para salvar

### Visualizando Rituais

- Na página inicial, veja todos os rituais em um grid
- Clique em uma carta para ver os detalhes completos
- Use a barra de busca para filtrar rituais

## 📁 Estrutura do Projeto

```
├── components/
│   ├── ui/          # Componentes Shadcn UI
│   ├── Search.vue   # Componente de busca
│   └── form/        # Componentes de formulário
├── pages/
│   ├── index.vue    # Página inicial (lista de cartas)
│   ├── add.vue      # Página de criação de ritual
│   └── ritual/
│       └── [slug].vue  # Página de detalhes do ritual
├── stores/
│   └── cards.ts     # Store Pinia para gerenciar rituais
├── shared/
│   └── constants.ts # Constantes (elementos, ações, etc)
└── public/
    └── images/      # Imagens de referência e elementos
```

## 💾 Armazenamento

Os dados são salvos automaticamente no localStorage do navegador. Isso significa que:

- ✅ Seus rituais ficam salvos mesmo fechando o navegador
- ✅ Funciona offline após o primeiro acesso
- ⚠️ Os dados são específicos por navegador/dispositivo
- ⚠️ Limpar dados do navegador apagará seus rituais

## 🎨 Elementos Disponíveis

- Sangue
- Morte
- Conhecimento
- Energia
- Medo

## 📖 Referências de Imagens

- Absorver
- Acelerar
- Aprisionar
- Criar
- Libertar
- Transformar

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este é um projeto de fã não oficial para Ordem Paranormal. Todos os direitos sobre o sistema Ordem Paranormal pertencem aos seus criadores.

---

Desenvolvido com ❤️ para a comunidade de Ordem Paranormal