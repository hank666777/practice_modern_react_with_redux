# class_10

* Routing Systems

> optional library
> * `classnames`
> * `tailwind`
> * `prop-types`
> * `tailwind-merge`

## Tailwind CSS，[link](https://tailwindcss.com/docs/guides/create-react-app)
* v3.4.3
1. install
```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. file `tailwind.config.js`, replacing `content`.
```js
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
```

4. create file `index.css`, pasting these.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. index.js
```js
import './index.css'
```