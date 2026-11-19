# Customer Support Shadow Dashboard

A responsive React frontend built as part of a summer internship project at **Vellion Group**. It gives support agents a read-only view to look up customer information, filter records, and check support status figures without writing manual database queries.

## Features

- **Support Overview & Live Status Metrics:** Summary metric cards and recent customer/ticket snapshots.
- **Customer Search & Shadow Inspection:** Search by ID, name, email, or phone, combined with status, plan, and join-date filters.
- **Sorting & Pagination:** Sortable table columns and page navigation across customer records.
- **Read-Only Shadow Detail View:** Customer profile, related support tickets, and recent activity logs.
- **Plans & Service Tiers:** Read-only reference view of subscription tiers and response targets.
- **Agent Preferences:** Local workspace settings, alert toggles, and session password validation.
- **Responsive Layout:** Sidebar navigation and adaptable grid/table layouts.

## Technologies Used

- React (with Vite)
- JavaScript (ES6+)
- HTML5 & CSS3

## How to Run Locally

1. Clone the repository and open the folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```

The production files are generated in the `dist/` folder.