# App para gerenciamento de tarefas

Este projeto foi desenvolvido para cumprir com a atividade proposta pelo curso da EBAC.

Funcionalidades:

- Adicioanr novo contato
- Editar contato
- Excluir contato
- Ordenar contatos em ordem alfabética
- Persistência dos dados de contato no localstorage do navegador

Ele está disponivel em: [list-contacts](https://list-contacts-orpin.vercel.app/)

Link para o layout da aplicação no figma: [list-contacts-layout](https://www.figma.com/file/VGDJRczzPDU0BPyi5IEjFg/contatos?type=design&node-id=115%3A883&mode=design&t=95NM0Ad5HpReuprM-1)

## Execução

1. Criar um clone ou baixar o repositório
2. Baixar as dependências com `npm i`
3. Iniciar o servidor vite com `npm run dev`

## Comandos adicionais

- Para iniciar o storybook: `npm run storybook`
- Para iniciar testes com vitest: `npm run test`
- Para obter relatórios de teste com vitest: `npm run coverage`
- Para iniciar testes e2e com cypress: `npm run cypress open`

## Tecnologias utilizadas

- _React.js_:
  React.js é uma biblioteca JavaScript amplamente utilizada para construir interfaces de usuário interativas e reativas. Desenvolvida pelo Facebook, ela permite a criação de componentes reutilizáveis que atualizam automaticamente quando os dados subjacentes mudam, tornando o desenvolvimento de aplicativos web eficiente e escalável.

- _React Hooks_:
  React Hooks é uma característica introduzida no React que permite aos desenvolvedores gerenciar o estado e os efeitos colaterais em componentes funcionais. Isso torna o código mais legível e evita a necessidade de criar classes para componentes.

- _React Router_:
  React Router DOM é uma biblioteca que ajuda a gerenciar a navegação em aplicativos React. Ela permite a criação de rotas e a navegação entre diferentes partes de um aplicativo da web e vinculá-las a componentes específicos através de URLs. Isso facilita a criação de aplicativos de página única (SPA) e a organização da lógica de navegação, tornando a experiência do usuário mais fluida e responsiva.

- _Typescript_:
  TypeScript é uma extensão tipada do JavaScript que adiciona recursos de tipagem estática ao código. Isso ajuda a pegar erros de programação em tempo de compilação e fornece informações mais claras sobre a estrutura e os tipos de dados em um projeto, tornando-o mais robusto e fácil de manter.

- _Redux_:
  Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, comumente usada com o React. Ele ajuda a centralizar e controlar o estado do aplicativo, tornando mais fácil o compartilhamento de dados entre componentes e mantendo um histórico claro das ações do usuário.

- _Styled-Components_:
  Styled-Components é uma biblioteca para estilizar componentes React usando estilos CSS-in-JS. Ela permite que você defina estilos diretamente nos componentes, tornando o código mais coeso e evitando conflitos de estilo.

- _Figma_:
  Figma é uma ferramenta de design de interface de usuário baseada na web. Ela é usada para criar e colaborar em projetos de design, prototipagem e desenvolvimento de interfaces de usuário.

- _Ypu_:
  Yup é uma biblioteca JavaScript usada para validação de dados no lado do cliente. Ela permite definir esquemas de validação de dados de forma declarativa e poderosa.

- _Formik_:
  Formik é uma biblioteca para o gerenciamento de formulários em aplicativos React. Ela simplifica o processo de criação, validação e manipulação de formulários em aplicações React.

- _Storybook_:
  O Storybook é uma ferramenta de desenvolvimento que simplifica a criação, documentação e teste de componentes de interface do usuário em ambientes de JavaScript. Ele oferece um ambiente isolado para desenvolver e visualizar componentes de forma interativa, permitindo aos desenvolvedores criar e manter uma biblioteca de componentes coesa e reutilizável.

- _Cypress_:
  O Cypress é uma ferramenta de automação de testes E2E projetada para simplificar e otimizar o processo de teste de aplicações web. Com uma arquitetura amigável ao desenvolvedor, destaca-se pela execução em tempo real, permitindo a visualização instantânea dos testes enquanto são executados.

- _Vitest_:
  O Vitest é uma estrutura de teste nativa do Vite, projetada para oferecer uma experiência de teste simples e eficaz para aplicações Vite. Baseado no ecossistema Jest, o Vitest simplifica a escrita e execução de testes unitários e de integração, proporcionando uma abordagem amigável ao desenvolvedor.

- _Vite_:
  O Vite é uma poderosa ferramenta de construção de aplicações web, projetada para oferecer um desenvolvimento rápido e eficiente. Diferentemente das tradicionais ferramentas de construção, o Vite adota uma abordagem inovadora baseada em ESM (ECMAScript Modules) e serve como um construtor de módulos para projetos Vue.js e React.

### Status

Concluido

### Futuras implementações

- Possibilidade de login
- Persistência de dados em um banco de dados
- Integração da palicação com API back end
