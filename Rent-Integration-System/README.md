RentFlow – Rent Integration System

RentFlow is a frontend React application for managing rental operations. It provides a clean interface to handle properties, tenants, payments, and maintenance using simulated data.

This project showcases a structured React setup with reusable components and page-based routing.

Features
Authentication

User registration and login

Form validation

Auth state stored in browser local storage

Redirects after successful login or signup

Dashboard

Summary cards

Activity and payment charts

Responsive layout

Property Management

View all properties

Add new properties

View property details

Tenant Management

View tenants

Add tenants

View tenant details

Payments

Payment list

Invoices

Payment detail pages

Maintenance

Maintenance request list

Maintenance request details

Demo Credentials

Email: admin@rentflow.com

Password: RentFlow2024!

Project Structure
src/
├── assets/        # Images and static assets
├── components/    # Reusable components
│   ├── dashboard
│   ├── layout
│   ├── payments
│   └── ui
├── pages/         # Application pages
│   ├── auth
│   ├── payments
│   ├── properties
│   ├── tenants
│   ├── maintenance
│   └── DashboardPage.jsx
├── utils/         # Helpers and mock data
├── App.jsx        # Root component
└── main.jsx       # Entry point

Tech Stack

React

JavaScript (ES6)

React Router

Local Storage (simulated persistence)

How It Works

Authentication is fully frontend-based

User and session data are stored in the browser

Routing is handled client-side

Mock data replaces backend services

Limitations

No backend or database

No real authentication or security

Data is browser-specific and not shared

Future Improvements

Backend integration

Secure authentication

Role-based access control

Real-time data updates

Getting Started

Install dependencies:

npm install


Start the development server:

npm run dev