# Relink UI

## Project Overview
**Relink UI** is a React-based front-end application designed to simplify the process of creating and managing shortened links. The application allows users to input a long URL, transform it into a short link through a back-end API, and retrieve the generated link to share with others.

The project leverages modern web technologies like React, TypeScript, and Vite, offering a high-performance and developer-friendly environment.

---

## Features
- **Short Link Generation**: Quickly transform long URLs into short, shareable links.
- **Dynamic Routing**: Support for redirecting users based on short links.
- **Interactive UI**: A visually intuitive interface with seamless user experience.
- **Efficient Development**: Modern tools like TypeScript and Vite ensure improved code quality and performance.
- **API Integration**: Communicates with a back-end API to provide core URL shortening functionality.

---

## Prerequisites
Ensure your system has the following installed before running the project:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Getting Started

1. Clone the repository to your local machine:
```shell script
git clone <repository_url>
   cd relink-ui
```


2. Install required dependencies:
```shell script
npm install
```


3. Start the development server:
```shell script
npm run dev
```

The development server will run the application on `http://localhost:5173` by default.

4. Ensure the back-end API is running on `http://localhost:8080` to allow URL shortening functionality.

---

## File Structure
The project files are organized as follows:

```
relink-ui/
├── src/                    # Core source code
│   ├── assets/             # Static assets such as images or fonts
│   ├── App.tsx             # Main React component to bootstrap the application
│   ├── App.css             # Styling for the main React component
│   ├── main.tsx            # Entry point for rendering the root application
│   ├── CreateShortLinkPage.tsx # Component for the URL creation page
│   ├── RedirectShortLinkPage.tsx # Component for handling short link redirection
│   ├── index.css           # Global styles for the application
│   ├── vite-env.d.ts       # Vite environment types
├── public/                 # Static public assets
├── package.json            # Project configuration and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration file
```


### Notable Files:
- **`CreateShortLinkPage.tsx`**: Define the user interface and logic for creating shortened links.
- **`RedirectShortLinkPage.tsx`**: A page dedicated to handling short link-specific redirects.
- **`App.tsx` & `main.tsx`**: Bootstrap the application and handle routing.

---

## Running in Production
To create a production-ready build of the project, run:
```shell script
npm run build
```

The optimized files will be output in the `dist/` directory. These can be deployed to any static hosting provider.

---

## Linting the Code
To maintain code quality and adhere to coding standards, lint the project using:
```shell script
npm run lint
```


---

## API Integration
The app interacts with a back-end URL shortening API. Ensure the API is available at `http://localhost:8080` for the app to function correctly.

### API Endpoint:
- **POST** `/relink/api/short-links`
    - **Request Body**: `{ "url": "your-long-url" }`
    - **Response**: `{ "hash": "generated-short-link-hash" }`

The generated short links are structured as `http://localhost:5173/<hash>`.

---

## Key Dependencies
- **React 19.1.0**: Core framework for building UI components.
- **TypeScript 5.8.3**: Adds type safety and enhances developer experience.
- **React Router DOM 7.6.3**: Enables navigational routing across the application.
- **Vite 7.0.4**: A lightweight development server and bundler.
- **ESLint**: Helps maintain consistent code quality.

For a full list of project dependencies, refer to the `package.json` file.

---

## Contribution Guidelines
We welcome contributions! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and submit a pull request with a clear description of your changes.

---

## License
This project is licensed under the **MIT License**. For more details, please see the `LICENSE` file.

---

## Acknowledgments
- Gratitude to the developers of the tools and libraries used in this project.
- This project reflects best practices in modern web application development.

Feel free to enhance, extend, or share **Relink UI** as you see fit! 😊
