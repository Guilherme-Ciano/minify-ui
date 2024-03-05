export default function (
  /**
   * @type import ('plop').NodePlopAPI
   */
  plop
) {
  plop.setGenerator('Componente', {
    description: 'Generate the main base for a React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What will be your component name?',
        validate: (value) => {
          if (!value) {
            return 'Component name is required';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{titleCase name}}/{{titleCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/components/{{titleCase name}}/{{titleCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/components/{{titleCase name}}/Documentation.mdx',
        templateFile: 'templates/docs.mdx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/components/{{titleCase name}}/index.ts',
        templateFile: 'templates/exportation.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/components/{{titleCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
        skipIfExists: true,
      },
    ],
  });

  plop.setGenerator('Hook', {
    description: 'Generate the main base for a React Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual é o nome do seu hook?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/use{{titleCase name}}.tsx',
        templateFile: 'templates/hook.tsx.hbs',
        skipIfExists: true,
      },
    ],
  });
}
