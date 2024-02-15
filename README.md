# Minify UI

minify-ui is a minimalist and customizable component library designed to simplify front-end development. With a focus on simplicity and ease of customization, minify-ui provides a set of essential UI components to help you build beautiful and responsive web applications with minimal effort.

## Features

- **Minimalist Design:** minify-ui follows a minimalist design philosophy, offering clean and simple UI components that integrate seamlessly into any project.
- **Easy Customization:** Customize and extend components effortlessly to match your project's unique design requirements.
- **Responsive Layouts:** Build responsive web applications with ease using minify-ui's responsive layout components.
- **Lightweight:** Designed to be lightweight and performant, minify-ui ensures fast load times and smooth user experiences.

## Installation

You can install minify-ui via npm:

```bash
npm install minify-ui
```

## Usage

Import and use components from minify-ui in your React project:

```jsx
/* main.tsx */

import "minify-ui/src/utils/globalStyles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```jsx
/* App.tsx */

import React from 'react';
import { Button, Input } from 'minify-ui/index';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input type="text" placeholder="Enter your name" />
    </div>
  );
}

export default App;
```

## Documentation

For detailed documentation and usage examples, we will later on build a documentation properly.

## Contributing

We welcome contributions from the community! If you find any bugs, have feature requests, or want to contribute improvements, please [submit an issue](https://github.com/Guilherme-Ciano/minify-ui/issues) or [create a pull request](https://github.com/your-username/minify-ui/pulls) on GitHub.

## License

minify-ui is licensed under the MIT License. See the [LICENSE](https://github.com/your-username/minify-ui/blob/main/LICENSE) file for details.
