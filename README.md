# Iathon Angular App

A basic Angular application with GitHub Actions CI/CD pipeline.

## Features

- Angular 17 with standalone components
- TypeScript support
- GitHub Actions for continuous integration
- Automated build and deployment workflow

## Getting Started

### Prerequisites

- Node.js (v18 or v20)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## GitHub Actions

The project includes a GitHub Actions workflow that:

1. Runs on push and pull requests to `main`/`master` branches
2. Tests the build on Node.js versions 18.x and 20.x
3. Creates build artifacts
4. Optionally deploys to GitHub Pages (can be configured)

## Project Structure

```
├── .github/
│   └── workflows/
│       └── angular.yml       # GitHub Actions workflow
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

## License

MIT
