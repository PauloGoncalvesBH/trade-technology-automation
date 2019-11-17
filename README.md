# Trade Technology Automation
[![E2E library: protractor](https://img.shields.io/badge/e2e%20library-protractor-blue)](https://www.npmjs.com/package/protractor)
[![library: protractor-helper](https://img.shields.io/badge/library-protractor--helper-blue.svg)](https://www.npmjs.com/package/protractor-helper)

---

## Execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Instalando as dependências e executando os testes

Todos os comandos abaixos são executados no _prompt de comando_.

**1** - Clone o repositório e acesse o diretório criado:

```sh
git clone https://github.com/PauloGoncalvesBH/trade-technology-automation.git && cd trade-technology-automation
```

**2** - Instale as dependências necessárias para rodar os testes:

```sh
npm install --production
```

**3** - E finalmente, execute os testes:

```sh
npm test
```

## Sobre o projeto

### Casos de teste

**1.** Adiciona todos os produtos 'Best Sellers', realiza todo o fluxo de compra e exporta informações dos produtos em json [nesse diretório](/json).

**2.** Adiciona todos os produtos 'Popular' e realiza todo o fluxo de compra. Esse não será executado por questão de tempo de execução e ser quase igual ao anterior.


### Padronização

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
* Toda mensagem de commit é verificada se está de acordo com a convenção de boa prática de commit. _Para saber mais, [clique aqui](https://github.com/conventional-changelog/commitlint#what-is-commitlint) e [aqui](https://commitlint.js.org/#/concepts-commit-conventions)._
* Antes de cada `git commit` o [prettier](https://github.com/prettier/prettier) entra em ação garantindo que todos os arquivos `js` e `json` estão em um estilo consistente.
* Antes de cada `git push` os testes são executados através do comando `npm test`.

> Caso ocorra algum problema em alguma dessas etapas, o comando é abortado, impedindo de que mensagem fora do padrão, código fora do padrão e/ou que está resultando em quebra dos testes seja enviado ao repositório central.

---

[Licença MIT](/LICENSE)