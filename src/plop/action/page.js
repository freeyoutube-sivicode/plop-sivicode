const PAGE_PATH = "src/pages";
const TEMPLATE_PATH = "src/plop/templates";

exports.generatorPage = {
  description: "Create a page",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your page name?",
    },
  ],
  actions: [
    {
      type: "add",
      path: `${PAGE_PATH}/{{ properCase name }}/index.js`,
      templateFile: `${TEMPLATE_PATH}/index.js.hbs`,
    },
    {
      type: "add",
      path: `${PAGE_PATH}/{{ properCase name }}/style.scss`,
      templateFile: `${TEMPLATE_PATH}/style.js.hbs`,
    },
  ],
};
