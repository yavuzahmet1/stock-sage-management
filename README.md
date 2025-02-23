#Stock Sage Management 🚀

Stock Sage Management is a modern web application designed to help businesses easily manage stock, purchases, sales, and firm operations. This application allows businesses to track their inventory, manage purchase and sales transactions, and generate reports. With its user-friendly interface and powerful features, it streamlines your business processes.

#Features ✨
- Stock Management: Easily add, update, and track your products.
- Purchase and Sales Management: Manage purchase and sales transactions and view historical data.
- Firm and Brand Management: Add, edit, and delete firm and brand information.
- Dashboard and Reporting: Visualize real-time data with charts and KPI cards to track business performance.
- User Management: Secure login and registration system to manage users.
- Toast Notifications: Receive instant notifications for your actions.
- Responsive Design: User-friendly interface that works seamlessly on mobile and desktop devices.

📦stock-sage-management
├── 📂public
│   ├── 📂assets
│   │   └── 📂navbar
│   │       └── 🖼️logo-sage.png
├── 📂src
│   ├── 📂app
│   │   └── 📄store.jsx
│   ├── 📂assets
│   │   ├── 🖼️hero.png
│   │   ├── 🖼️loading.gif
│   │   ├── 🖼️logo-sage.png
│   │   ├── 🖼️register.jpg
│   │   └── 🖼️register_.jpg
│   ├── 📂components
│   │   ├── 📂Modal
│   │   │   ├── 📄BrandModal.jsx
│   │   │   ├── 📄FirmModal.jsx
│   │   │   ├── 📄ProductModal.jsx
│   │   │   ├── 📄PurchasesModal.jsx
│   │   │   └── 📄SalesModal.jsx
│   │   ├── 📂Table
│   │   │   ├── 📄ProductsTable.jsx
│   │   │   ├── 📄PurchasesTable.jsx
│   │   │   └── 📄SalesTable.jsx
│   │   ├── 📄AuthHeader.jsx
│   │   ├── 📄AuthImage.jsx
│   │   ├── 📄Charts.jsx
│   │   ├── 📄ErrorBoundary.jsx
│   │   ├── 📄KpiCards.jsx
│   │   ├── 📄LoginForm.jsx
│   │   └── 📄RegisterForm.jsx
│   ├── 📂features
│   │   ├── 📄authSlice.jsx
│   │   └── 📄stockSlice.jsx
│   ├── 📂helper
│   │   └── 📄ToastNotify.js
│   ├── 📂hook
│   │   ├── 📄useAuthCall.jsx
│   │   ├── 📄useAxios.jsx
│   │   └── 📄useStockCall.jsx
│   ├── 📂pages
│   │   ├── 📄Brands.jsx
│   │   ├── 📄Dashboard.jsx
│   │   ├── 📄Firms.jsx
│   │   ├── 📄Home.jsx
│   │   ├── 📄Login.jsx
│   │   ├── 📄Products.jsx
│   │   ├── 📄Purchases.jsx
│   │   ├── 📄Register.jsx
│   │   └── 📄Sales.jsx
│   ├── 📂router
│   │   ├── 📄AppRouter.jsx
│   │   └── 📄PrivateRouter.jsx
│   ├── 📄App.jsx
│   ├── 📄main.jsx
│   ├── 📄tailwind.config.js
├── 📄.env
├── 📄.gitignore
├── 📄.gitignore copy
├── 📄LICENSE
├── 📄README.md
├── 📄app.css
├── 📄index.css
├── 📄index.html
├── 📄package.json
├── 📄pnpm-lock.yaml
├── 📄postcss.config.js
├── 📄tailwind.config.js
└── 📄vite.config.js

Technologies Used 🛠️
    React 19: Used to build modern and fast user interfaces.
    Material UI 6: Utilized for professional and sleek design components.
    Redux Toolkit: Managed global state efficiently with Redux Toolkit.
    Axios: Handled API requests and server communication.
    Formik & Yup: Integrated for form management and validation.
    React Router: Implemented for page navigation and routing.
    React Toastify: Provided instant user notifications.
    Recharts: Used for data visualization with charts.
    Vite 6: Built the project with Vite 6 for a fast and optimized development environment.