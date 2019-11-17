const writeFile = require('fs').writeFile;

const gravarJson = (nomeDoArquivoJson, json) => {
  writeFile(`json/${nomeDoArquivoJson}.json`, JSON.stringify(json, null, 2), 'utf-8', err => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
  });
};

module.exports = { gravarJson };
