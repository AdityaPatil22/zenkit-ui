# Zenkit UI Components

A modern, lightweight UI component library built with Lit Elements.

## Features

- 🚀 Built with Lit Elements
- 📦 Tree-shakeable
- 🎨 Customizable through CSS Custom Properties
- 🔥 Type-safe with TypeScript
- 📝 Documented with Storybook
- ✅ Tested with Vitest

## Installation

```bash
npm install zenkit-ui
```

## Usage

```javascript
// Import the component
import 'zenkit-ui';

// Use in HTML
<zen-button variant="primary">Click me</zen-button>
```

## Available Components

### Button
A versatile button component with multiple variants and sizes.

```html
<zen-button variant="primary" size="medium">Click me</zen-button>
```

#### Properties
- variant: 'primary' | 'secondary' | 'outline'
- size: 'small' | 'medium' | 'large'
- disabled: boolean

## Development

1. Install dependencies
```bash
npm install
```

2. Start Storybook
```bash
npm run storybook
```

3. Run tests
```bash
npm test
```

4. Build the library
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
