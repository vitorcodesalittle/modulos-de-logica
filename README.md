## Configurar ambiente:
- Instalar node e npm (eles vem juntos) https://nodejs.org/en/download/ 
- Colocar executáveis do node como variáveis de ambiente do sistema. https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm
- Abrir cmd ou bash no diretório raiz e instalar dependências.
```bash
cd modulos-de-logica
npm install .
```
- Ainda no diretório raiz, executar npm start
```bash
npm start
```
> PS: os comandos que começam com npm só vão funcionar se npm estiver corretamente no PATH do seu sistema

## Escrevendo testes:
- Na pasta do módulo que vc quer testar crie um arquivo de testes, onde ficarão seus testes
```bash
<nome-do-modulo>.test.js
```
- Crie um teste
```js
import Modulo from "./modulo";
describe("Modulo", () => {
  test("Modulo faz tal coisa...", () => {
    let a = Modulo.talCoisa();
    expect(a).toBeTruthy()
  })
})
```
> Documentação do expect: https://jestjs.io/docs/en/expect
## Rodando os testes:
```bash
npm run test
a # para rodar todos os testes
```

# O restante do markdown veio do create-react-app, e fica aí como referência.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
