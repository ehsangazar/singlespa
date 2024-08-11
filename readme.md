# Single-SPA Microfrontend Project

## Overview

This project utilizes [Single-SPA](https://single-spa.js.org/), a framework designed for building microfrontend applications. Single-SPA allows you to integrate multiple frontend applications into a single-page application (SPA) by enabling different frameworks or libraries within the same project.

## Single-SPA

Single-SPA (Single Single-Page Application) is a framework for creating microfrontend architectures. It enables the construction of a single-page application composed of multiple independent SPAs. Benefits include:

- **Modularity**: Each microfrontend can be developed, tested, and deployed independently.
- **Framework Agnostic**: Use different frameworks (React, Vue, Angular) in the same project.
- **Scalability**: Manage and scale large applications by dividing them into smaller, manageable pieces.

## Directory Structure

This repository includes the following microfrontends:

- **root-config**: Main configuration file for Single-SPA, handling routing and loading of microfrontends.
- **styleguide**: Microfrontend providing style guidelines and components.
- **navbar**: Microfrontend responsible for the navigation bar.
- **utilities**: Microfrontend with utility functions or services.
- **procurement**: Microfrontend for procurement-related functionality.

## Script Explanation

The provided script manages the development environment by:

1. **Killing Existing Processes**: Stops any processes running on ports 9000 through 9010 to prevent port conflicts.
2. **Installing Dependencies**: Installs necessary dependencies for each microfrontend using `pnpm`.
3. **Starting Services**: Starts each microfrontend service using `pnpm start`.
4. **Notification**: Prints a message with the URL to access the application.

## Using the Script

Follow these steps to use the script:

1. **Ensure `pnpm` is Installed**: Make sure `pnpm` is installed. If not, install it using:

```bash
npm install -g pnpm
```

2. Clone the Repository: Clone the repository to your local machine:

```bash
git clone https://your-repository-url.git
cd your-repository-directory
```

3. Make the Script Executable: Ensure the script has executable permissions:

```bash
chmod +x start-all.sh
```

4. Run the Script: Execute the script to install dependencies, start services, and clean up old processes:

```bash
./start-all.sh
```

5. Visit the Application: After the script completes, open your browser and navigate to:

```bash
http://localhost:9000
```

This URL will direct you to the main application integrating all microfrontends.
