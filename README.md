# Grocery List App

A responsive grocery-list application built with React and Vite. Users can add items, mark them as purchased, delete them, and keep their list between browser sessions.

## Project summary

This project demonstrates the fundamentals of building an interactive, component-based React application. The interface is divided into focused components for the header, item form, list content, list rendering, and footer. The main application component coordinates state and passes data and event handlers through props.

The grocery list is saved to the browser's `localStorage`, so changes remain available after the page is refreshed or reopened. Each entry receives a unique ID through the browser's `crypto.randomUUID()` API, allowing items to be updated and removed reliably.

## Features

- Add grocery items through a controlled form
- Mark items as purchased or unpurchased
- Delete individual items
- Persist list data in browser storage
- Display a live item count
- Show an empty-state message when the list has no items
- Present longer lists in a responsive, scrollable layout
- Provide accessible labels and keyboard-focusable controls

## Skills demonstrated

This application showcases practical experience with:

- React functional components and JSX
- State management with `useState`
- DOM references and focus handling with `useRef`
- Controlled inputs and form submission
- Component composition and separation of concerns
- Parent-to-child communication through props
- Immutable array operations using `map`, `filter`, and spread syntax
- Conditional rendering and dynamic styling
- Browser APIs including `localStorage`, `crypto.randomUUID()`, and JSON serialization
- Semantic HTML and basic accessibility practices
- Responsive layout with Flexbox and CSS
- Icon integration with React Icons
- Development tooling with Vite and ESLint

## Component structure

```text
App
├── Header
├── AddItem
├── Content
│   └── ItemList
└── Footer
```

`App` owns the grocery-list state and persistence logic. Its child components remain focused on presentation and user interaction, making the code easier to understand, maintain, and extend.

## Technologies

- React 19
- JavaScript (ES modules)
- HTML5 and CSS3
- Vite
- ESLint
- React Icons

## Run locally

### Prerequisites

Install a current version of Node.js that is compatible with Vite 8.

### Installation

```bash
git clone <repository-url>
cd my-app
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Check the code with ESLint
```

## Potential next steps

- Add search and filtering
- Support editing existing items
- Add automated component and interaction tests
- Improve keyboard interaction for the delete control
- Synchronize lists through an API and user accounts
