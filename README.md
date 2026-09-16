## Daniel Marketing | Especialista em Marketing Digital

Daniel Marketing é especialista em marketing digital, com foco em estratégias de crescimento para empresas e empreendedores. Com uma abordagem personalizada, ele ajuda seus clientes a alcançar seus objetivos de negócios através de campanhas eficazes e inovadoras. Detalhes sobre os serviços oferecidos, portfólio de projetos anteriores e informações de contato podem ser encontrados neste site.

## Detalhes do Projeto

- **Nome do Projeto:** Daniel Marketing LP
- **Descrição:** Site de apresentação do Daniel Marketing, com informações sobre os serviços, portfólio e contato.
- **Tecnologias Utilizadas:** Next.js, React, Tailwind CSS, Prismic, Framer Motion, Swiper.js, TypeScript, Vercel.

## Estrutura do Projeto

- **Páginas Principais:**
  - `index.tsx`: Página inicial com informações sobre os serviços e portfólio.
  - `servicos.tsx`: Página detalhando os serviços oferecidos.
  - `projetos.tsx`: Página mostrando projetos anteriores com modal de visualização.
  - `contato.tsx`: Página com formulário de contato.
- **Componentes:**
  - `header`: Componente de cabeçalho com menu hamburguer.
  - `footer`: Componente de rodapé.
  - `projetos/modal.tsx`: Componente modal para visualização de projetos.
- **Hooks:**
  - `useNav`: Hook para navegação entre seções da página.
  - `useScroll`: Hook para detectar o scroll da página e alterar o estilo do cabeçalho.

## Arquitetura do Projeto

- O projeto segue a arquitetura de componentes do React, com separação clara entre páginas e componentes reutilizáveis. A estilização é feita utilizando Tailwind CSS, permitindo uma abordagem responsiva e moderna. A navegação entre seções é facilitada pelo hook `useNav`, enquanto o hook `useScroll` melhora a experiência do usuário ao alterar o estilo do cabeçalho com base na rolagem da página.

## Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Instale as dependências:
   ```bash
   cd <NOME_DO_PROJETO>
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm run dev
   ```
