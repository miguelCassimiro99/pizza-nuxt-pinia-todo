# Pizza Nuxt Pinia Pattern

💻 version: 1.0.0

The proposal of this project it’s to test how mature is Nuxt 3 to build simple apps with some other libs and features that comes with Vue 3 and the Nuxt itself.

How does it works 🔍

- The index page contains a little form to add a description to a new ToDo Item and it have a list with ToDo that are fetched on backend.
- You can simple add a new ToDo, delete, update and mark as finished. Beside that, you can add a project to a ToDo Item if you want to organize your list by projects or different contexts.

### Tools 🛠️

🌐 [Nuxt](https://v3.nuxtjs.org/)

🌐 [Tailwind](https://tailwindcss.com/)

🌐 [Typescript](https://www.typescriptlang.org/)

🌐 [Pinia](https://pinia.vuejs.org/)

🌐 [Json Server](https://github.com/typicode/json-server)

🌐 [Vite](https://vitejs.dev/)

🌐 [Vitest](https://vitest.dev/)

---

## Features 📜

- [x]  ToDo List
- [x]  ToDo - CRUD
- [x]  State Management with Pinia
- [x]  Transitions
- [x]  Tests
- [x]  Reusable Components
- [x]  Backend Integration

---

## Setup 🏗️

## Installation

```
$ yarn
```

<aside>
💡 If you haven’t installed the json-server you need to install it using ‘npm install -g json-server’

</aside>

## Running the app

At this stage you need to set the .env variables (In this case it’s only the API route).

After that:

```bash

# run the frontend environment
yarn dev

# start the backend
yarn backend
```

## Test

```
# unit tests
$ yarn test

```
