Rodar no terminal

```bash
npm install -D tailwindcss postcss autoprefixer
```

Rodar no terminal

```bash
npx tailwindcss init
```

Criar o arquivo `./postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

```
Criar o arquivo `./src/main.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Adicionar a seguinte linha no arquivo `tailwind.config.js`

```javascript
module.exports = {
  //...
  content: ["./src/**/*.{html,js,jsx}"],
  //...
}
```

Importar o css no `main.jsx`

```javascript
//...
import './main.css'
//...
```
