# Zen UI

## Prerequisites

Ensure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [pnpm](https://pnpm.io/) (Version: 9.15.4 or later)

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/AdityaPatil22/

   zen-ui.git

   cd zen-ui
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

```env
# Example environment variables
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=<your_jwt_secret>
NEXTAUTH_URL=http://localhost:3000
```

## Development Server

To start the development server, run:

```sh
npm run dev
```

This will launch the application in development mode at `http://localhost:3000`.

## Building for Production

To build the project, use:

```sh
npm run build
```

## Linting & Formatting

- Run ESLint to check for issues:
  ```sh
  npm run lint
  ```
- Format the code using Prettier:
  ```sh
  npm run format
  ```

## Tailwind CSS

Tailwind is included in the project. If you need to configure it, update the `tailwind.config.js` file.

## Dependencies Overview

- **Next.js** for server-side rendering and frontend framework.
- **React & React DOM** for UI components.
- **NextAuth.js** for authentication.
- **Mongoose** for MongoDB integration.
- **bcrypt & jsonwebtoken** for authentication and security.
- **dotenv** for managing environment variables.
- **Tailwind CSS** for styling.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## Creating a UI Component in the NPM Package

The project includes an NPM package (`zenkit-ui`) for reusable UI components. Components are built using [Lit](https://lit.dev/).

### Creating a New Component

1. Navigate to the package directory:
   ```sh
   cd zen-ui/ui-components
   ```
2. Create a new component file , e.g., `Button.js`:

   ```ts
   import { LitElement, html, css } from 'lit';

   class MyButton extends LitElement {
     static styles = css`
       button {
         background: blue;
         color: white;
         padding: 10px;
         border: none;
         cursor: pointer;
       }
     `;

     render() {
       return html`<button><slot></slot></button>`;
     }
   }

   customElements.define('Button', MyButton);
   ```

3. Export the component in `index.ts`:
   ```ts
   export * from './my-button';
   ```

### Building the Package

To build the package, run:

```sh
rm -rf dist

npm run build
```

This will generate the `dist` folder containing the bundled components.

### Publishing to NPM

1. Ensure you are logged into NPM:
   ```sh
   npm login
   ```
2. Publish the package:
   ```sh
   npm publish --access public
   ```
