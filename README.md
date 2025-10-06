# SSR Playground

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.1 with Server-Side Rendering (SSR) support.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

Install the project dependencies:

```bash
npm install
```

## Development

### Development Server

To start a local development server, run:

```bash
npm start
```
or
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building and Running the Application

### Building for Production

To build the project for production with SSR support, run:

```bash
npm run build
```
or
```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory, including both client and server bundles optimized for performance.

### Running the SSR Application

After building the project, you can run the SSR server:

```bash
npm run serve:ssr:ssr-playground
```

This will start the server-side rendered application. The server will typically run on `http://localhost:4000/` (or another available port).

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
