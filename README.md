# React @testing-library/react-hooks

Esse projeto foi criado para mostrar como podemos desenvolver uma aplicação em React voltando para os testes unitários. Você pode conferir na [documentação](https://github.com/testing-library/react-hooks-testing-library) para mais detalhes.

## Acessando o projeto

- como o projeto foi criado pelo codesandbox e pode ser [acessado pela url](https://codesandbox.io/s/github/geprojetos/react-test).

## Entendendo a separação de pastas

```
components/
├── counter/
│   ├── hooks/useCounter
│   ├──── index.test.ts
│   ├──── index.ts
│   ├─── index.ts
│   ├── views/
│   ├──── index.tsx
│   └─── index.ts

```

- o arquivo `views/index.tsx` é componente que estamos exibindo em tela. Reparece que o componente não possui nenhuma lógica dentro dele, apenas as informações necessárias para que ele possa ser exibido em tela.
- o arquivo `hooks/useCounter/index.ts` é onde colocando toda lógica necessária para que o componente possa ser utilizado e no final exportamos as informações que será utilizada por ele.
- o arquivo `hooks/useCounter/index.test.ts` é onde realizamos todos os testes do nosso arquivo de hooks. Note que não estamos realizando a renderização no componente, apenas as funções utilizadas por ele. Desta forma conseguimos ter um teste voltado somente para a lógica do componente.

Essa é uma abordagem onde temos cada parte do componente separada facilitando o teste unitário no front-end.

Deixo aqui mais uma vez o link da [documentação oficial](https://github.com/testing-library/react-hooks-testing-library).
