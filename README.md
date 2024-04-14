<!-- @format -->



## Weather Finder Website

Welcome to Weather Finder built using Next.js, Tailwind CSS, React-Query and Axios.

## Live Demo

Check out the live demo of the website: https://weather-find3er.netlify.app/

## Technologies Used

```bash
Next.js: Next.js is a powerful React framework that allows for server-side rendering and easy creation of fast and scalable web applications.

Tailwind CSS: Tailwind CSS is a utility-first CSS framework that helps in rapid UI development. It provides a set of utility classes that allow for easy styling and customization.

React Query: React Query has an impressive list of features (which helps to minimize resource consumption):

Axios: A simple library for API calls and integration.
```

## Getting Started

Follow the steps below to set up the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/castelstack/weather-finder.git

cd project
```

2. Install dependencies:

```bash
yarn install
```

1. Set environment variables:

Create a .env file in the root of the project and add the following:

```bash
NEXT_PUBLIC_APP_ID="your_app_id"
```

1. Run the development server:

```bash
yarn dev
```

Open your browser and navigate to http://localhost:3000 to see the Weather Finder website.

Project Structure

```bash
|  |-- app/
|   |-- pages.tsx
|   |-- globals.css
|   |-- ...tsx
    |-- components/
       |-- Button.tsx
       |-- Input.tsx
       |-- ...tsx
    |-- hooks/
       |-- ...tsx
    |-- services/
       |-- ...tsx
    |-- types/
       |-- index.ts
|-- public/
|   |-- images/
...
```


Happy coding! 🚀