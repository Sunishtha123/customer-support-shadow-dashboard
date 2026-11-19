import { useMemo, useState } from "react";

const INITIAL_CUSTOMERS = [
  {
    id: "CUST-101",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 98111 22334",
    plan: "Pro",
    status: "Active",
    joinedAt: "2026-07-04",
    openTickets: 1,
    tickets: [
      { id: "TCK-501", subject: "Billing cycle clarification", status: "Resolved", updatedAt: "2026-07-12" },
    ],
    activityLogs: [
      { id: "LOG-1", event: "Logged into customer portal", timestamp: "2026-07-18 10:15 AM" },
      { id: "LOG-2", event: "Downloaded monthly invoice", timestamp: "2026-07-12 04:40 PM" },
    ],
  },
  {
    id: "CUST-102",
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "+91 98222 33445",
    plan: "Enterprise",
    status: "Active",
    joinedAt: "2026-07-09",
    openTickets: 2,
    tickets: [
      { id: "TCK-502", subject: "SSO token refresh delay", status: "Open", updatedAt: "2026-07-20" },
      { id: "TCK-509", subject: "Team seat allocation check", status: "In Progress", updatedAt: "2026-07-19" },
    ],
    activityLogs: [
      { id: "LOG-3", event: "API key rotation requested", timestamp: "2026-07-20 02:10 PM" },
    ],
  },
  {
    id: "CUST-103",
    name: "Aman Verma",
    email: "aman@gmail.com",
    phone: "+91 98333 44556",
    plan: "Starter",
    status: "Pending",
    joinedAt: "2026-07-15",
    openTickets: 1,
    tickets: [
      { id: "TCK-503", subject: "Email verification pending", status: "Open", updatedAt: "2026-07-21" },
    ],
    activityLogs: [
      { id: "LOG-4", event: "Account created via web signup", timestamp: "2026-07-15 09:05 AM" },
    ],
  },
  {
    id: "CUST-104",
    name: "Neha Gupta",
    email: "neha@gmail.com",
    phone: "+91 98444 55667",
    plan: "Pro",
    status: "Active",
    joinedAt: "2026-07-18",
    openTickets: 0,
    tickets: [
      { id: "TCK-504", subject: "Plan upgrade confirmation", status: "Resolved", updatedAt: "2026-07-19" },
    ],
    activityLogs: [
      { id: "LOG-5", event: "Upgraded subscription to Pro", timestamp: "2026-07-19 01:25 PM" },
    ],
  },
  {
    id: "CUST-105",
    name: "Vikram Nair",
    email: "vikram@gmail.com",
    phone: "+91 98555 66778",
    plan: "Enterprise",
    status: "Active",
    joinedAt: "2026-07-22",
    openTickets: 1,
    tickets: [
      { id: "TCK-506", subject: "Webhook delivery retry check", status: "In Progress", updatedAt: "2026-07-24" },
    ],
    activityLogs: [
      { id: "LOG-6", event: "Updated webhook endpoint URL", timestamp: "2026-07-24 11:50 AM" },
    ],
  },
  {
    id: "CUST-106",
    name: "Ananya Rao",
    email: "ananya@gmail.com",
    phone: "+91 98666 77889",
    plan: "Starter",
    status: "Pending",
    joinedAt: "2026-07-27",
    openTickets: 1,
    tickets: [
      { id: "TCK-508", subject: "Payment gateway pending check", status: "Open", updatedAt: "2026-07-28" },
    ],
    activityLogs: [
      { id: "LOG-7", event: "Submitted onboarding profile", timestamp: "2026-07-27 05:18 PM" },
    ],
  },
];

const PAGE_SIZE = 4;

function Users() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [planFilter, setPlanFilter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [selectedCustomerId, setSelectedCustomerId] = useState(
    INITIAL_CUSTOMERS[0].id
  );

  const filteredAndSorted = useMemo(() => {
    const q = search.trim().toLowerCase();

    const filtered = INITIAL_CUSTOMERS.filter((c) => {
      const matchesSearch =
        !q ||
        c.id.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q);

      const matchesStatus = !statusFilter || c.status === statusFilter;
      const matchesPlan = !planFilter || c.plan === planFilter;
      const matchesFrom = !fromDate || c.joinedAt >= fromDate;
      const matchesTo = !toDate || c.joinedAt <= toDate;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPlan &&
        matchesFrom &&
        matchesTo
      );
    });

    return [...filtered].sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
      return sortOrder === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [search, statusFilter, planFilter, fromDate, toDate, sortBy, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginatedCustomers = filteredAndSorted.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const selectedCustomer =
    INITIAL_CUSTOMERS.find((c) => c.id === selectedCustomerId) ||
    paginatedCustomers[0] ||
    null;

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
    setPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("");
    setPlanFilter("");
    setFromDate("");
    setToDate("");
    setSortBy("name");
    setSortOrder("asc");
    setPage(1);
  };

  return (
    <div className="page users-page">
      <div className="page-header">
        <div>
          <h1>Customer Search & Shadow Inspection</h1>
          <p>
            Read-only lookup across customer profiles, tickets, and activity
            logs ({filteredAndSorted.length} matches).
          </p>
        </div>

        <button type="button" className="add-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {/* Multi-factor filter bar */}
      <div className="user-form" role="region" aria-label="Customer Filters">
        <input
          type="text"
          placeholder="Search ID, name, email, phone..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
        </select>

        <select
          value={planFilter}
          onChange={(e) => {
            setPlanFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Plans</option>
          <option value="Starter">Starter</option>
          <option value="Pro">Pro</option>
          <option value="Enterprise">Enterprise</option>
        </select>

        <input
          type="date"
          aria-label="Joined from date"
          value={fromDate}
          onChange={(e) => {
            setFromDate(e.target.value);
            setPage(1);
          }}
        />

        <input
          type="date"
          aria-label="Joined to date"
          value={toDate}
          onChange={(e) => {
            setToDate(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Results Table */}
      <div className="users-table-container">
        <table>
          <thead>
            <tr>
              <th className="sortable-th" onClick={() => handleSort("id")}>
                ID {sortBy === "id" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="sortable-th" onClick={() => handleSort("name")}>
                Customer {sortBy === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="sortable-th" onClick={() => handleSort("plan")}>
                Plan {sortBy === "plan" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="sortable-th" onClick={() => handleSort("joinedAt")}>
                Joined {sortBy === "joinedAt" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="sortable-th" onClick={() => handleSort("openTickets")}>
                Open Tickets {sortBy === "openTickets" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedCustomers.length > 0 ? (
              paginatedCustomers.map((customer) => {
                const isSelected = selectedCustomer?.id === customer.id;
                return (
                  <tr
                    key={customer.id}
                    onClick={() => setSelectedCustomerId(customer.id)}
                    className={isSelected ? "selected-row" : "clickable-row"}
                  >
                    <td>{customer.id}</td>
                    <td>
                      <strong>{customer.name}</strong>
                      <div style={{ fontSize: "12px", color: "#64748b" }}>
                        {customer.email}
                      </div>
                    </td>
                    <td>{customer.plan}</td>
                    <td>{customer.joinedAt}</td>
                    <td>{customer.openTickets}</td>
                    <td>
                      <span
                        className={`status ${customer.status.toLowerCase()}`}
                      >
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", color: "#64748b" }}>
                  No matching customers found for the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination-bar">
          <span>
            Page {safePage} of {totalPages}
          </span>
          <div className="pagination-actions">
            <button
              type="button"
              className="page-btn"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </button>
            <button
              type="button"
              className="page-btn"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Read-Only Shadow Customer Detail View */}
      {selectedCustomer && (
        <div className="shadow-detail-card">
          <div className="shadow-detail-header">
            <div>
              <h2>Read-Only Shadow View: {selectedCustomer.name}</h2>
              <p>
                {selectedCustomer.id} • {selectedCustomer.email} •{" "}
                {selectedCustomer.phone}
              </p>
            </div>
            <span className="readonly-badge">Read-Only</span>
          </div>

          <div className="shadow-detail-grid">
            <div>
              <h3>Support Tickets</h3>
              <ul className="detail-list">
                {selectedCustomer.tickets.map((t) => (
                  <li key={t.id}>
                    <strong>{t.id}</strong>: {t.subject} — <em>{t.status}</em>{" "}
                    <span>({t.updatedAt})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Recent Activity Logs</h3>
              <ul className="detail-list">
                {selectedCustomer.activityLogs.map((log) => (
                  <li key={log.id}>
                    <strong>{log.event}</strong> <span>({log.timestamp})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;