# Shopping Cart Application

A React + Vite e-commerce frontend built to demonstrate more than UI assembly.
This project showcases how I structure a frontend application around clear feature boundaries, business rules, and maintainable architecture.

## What it does

* Browse a product catalog
* Add, remove, and update cart items
* Review cart totals
* Complete a checkout flow
* View order confirmation

## Why this project matters

This project was built as a portfolio piece to show that I can:

* build React applications with a clear architecture
* separate UI concerns from business logic
* model domain concepts explicitly
* organize code for scalability and maintainability
* write frontend code that is easier to extend and refactor

## Architecture highlights

The codebase is organized by feature and layered to keep responsibilities clear:

* Domain: business rules and value objects
* Application: use cases and workflows
* Infrastructure: persistence and external details
* UI: React components, context, hooks, and pages

This keeps business behavior out of components and makes the system easier to evolve.

## Tech stack

* React
* Vite
* React Router
* JavaScript
* CSS
* ESLint

## What this demonstrates

* feature-based frontend architecture
* Clean Architecture / DDD-inspired thinking
* use-case-driven design
* reusable UI building blocks
* repository pattern and dependency injection
* separation of concerns in a React application

## Project structure

```text
my-e-commerce-app/
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
├── README.md
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── application/
│   │   ├── composition/          # Dependency injection
│   │   │   ├── catalog.js
│   │   │   ├── cart.js
│   │   │   ├── checkout.js
│   │   │   ├── order.js
│   │   │   └── dependencies.js
│   │   ├── layout/               # App layout & navbar
│   │   └── routes/               # Pages & routing
│   │       ├── router.jsx
│   │       └── *Page.jsx files
│   ├── features/
│   │   ├── _shared/
│   │   │   └── domain/           # Shared utilities (Result, Money, etc.)
│   │   ├── catalog/              # Product browsing
│   │   │   ├── catalogFeature.md
│   │   │   ├── domain/           # Product entity + value objects
│   │   │   ├── application/      # GetProductsUseCase
│   │   │   ├── infrastructure/   # FakeStore API integration
│   │   │   └── ui/              # Context + Components
│   │   ├── cart/                 # Shopping cart
│   │   │   ├── cartFeature.md
│   │   │   ├── domain/          # Cart + CartLine entities
│   │   │   ├── application/     # Add/Remove/Update use cases
│   │   │   ├── infrastructure/  # LocalStorage repository
│   │   │   └── ui/             # Context + hooks
│   │   ├── checkout/            # Checkout process
│   │   │   ├── checkoutFeature.md
│   │   │   ├── domain/         # CheckoutDraft entity
│   │   │   ├── application/    # Shipping/Payment/Submit use cases
│   │   │   ├── infrastructure/ # LocalStorage repository  
│   │   │   └── ui/            # Context + hooks
│   │   └── order/             # Order management
│   │       ├── orderFeature.md
│   │       ├── domain/        # Order + OrderLine entities
│   │       ├── application/   # Create/Get/Cancel use cases
│   │       └── infrastructure/ # LocalStorage repository
│   ├── shared/                # Reusable UI components
│   ├── styles/                # Global CSS
```

Each feature owns its own domain, application, infrastructure, and UI code.

## Next improvements

* automated tests
* improved accessibility
* stronger error handling
* TypeScript migration

## Summary

This project reflects how I want to contribute on a professional team:
by building frontend systems that are not only functional, but also well-structured, scalable, and easier to maintain.
