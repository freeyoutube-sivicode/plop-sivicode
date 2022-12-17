const { generatorPage } = require("./src/plop/action");

module.exports = (plop) => {
  plop.setGenerator("page", generatorPage);
};
