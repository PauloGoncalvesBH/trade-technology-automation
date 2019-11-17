const helper = require('protractor-helper');

const manipularJson = require('../utils/manipularJson');

const bttnAbaBestSellers = $('[href="#blockbestsellers"]');
const secaoBestSellers = $$('#blockbestsellers .right-block');
const secaoPopular = $$('#homefeatured .right-block');
const bttnContinueShopping = $('[title="Continue shopping"]');

function acessarAbaBestSellers() {
  helper.click(bttnAbaBestSellers);
}

const acessar = () => {
  browser.get('');
};

const adicionarTodosOsProdutosBestSellersNoCarrinho = () => {
  acessarAbaBestSellers();
  secaoBestSellers.each(bttnAddToCart => {
    helper.hoverAndClick(bttnAddToCart);
    helper.click(bttnContinueShopping);
    helper.waitForElementNotToBeVisible(bttnContinueShopping);
  });
};

const adicionarTodosOsProdutosPopularNoCarrinho = () => {
  secaoPopular.each(bttnAddToCart => {
    helper.hoverAndClick(bttnAddToCart);
    helper.click(bttnContinueShopping);
    helper.waitForElementNotToBeVisible(bttnContinueShopping);
  });
};

const exportarTodosOsProdutosBestSellersEmJson = () => {
  acessarAbaBestSellers();
  let jsonBestSellers = JSON.parse('{"produtosBestSellers": []}');
  const nomeDoArquivoJson = 'bestSellers';
  secaoBestSellers.each(produto => {
    produto
      .$('.product-name')
      .getText()
      .then(nome => {
        produto
          .$('.price.product-price')
          .getText()
          .then(preco => {
            produto
              .$('.button.lnk_view.btn.btn-default')
              .getAttribute('href')
              .then(url => {
                jsonBestSellers.produtosBestSellers.push({ nome: nome, preco: preco, url: url });
                manipularJson.gravarJson(nomeDoArquivoJson, jsonBestSellers);
              });
          });
      });
  });
};

module.exports = {
  acessar,
  adicionarTodosOsProdutosBestSellersNoCarrinho,
  adicionarTodosOsProdutosPopularNoCarrinho,
  exportarTodosOsProdutosBestSellersEmJson
};
