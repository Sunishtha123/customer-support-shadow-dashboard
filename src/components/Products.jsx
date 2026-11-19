import { useState } from "react";

const INITIAL_PLANS = [
  {
    id: "PLAN-STR",
    name: "Starter",
    category: "Self-Serve & Email",
    billing: "₹999 / month",
    sla: "24h response",
    status: "Active",
  },
  {
    id: "PLAN-PRO",
    name: "Pro",
    category: "Priority Support",
    billing: "₹2,999 / month",
    sla: "6h response",
    status: "Active",
  },
  {
    id: "PLAN-ENT",
    name: "Enterprise",
    category: "Dedicated Queue & SLA",
    billing: "Custom",
    sla: "1h response",
    status: "Active",
  },
  {
    id: "PLAN-LEG",
    name: "Legacy Trial",
    category: "Standard",
    billing: "₹0",
    sla: "48h response",
    status: "Pending",
  },
];

function Products() {
  const [plans] = useState(INITIAL_PLANS);
  const [tierFilter, setTierFilter] = useState("");

  const visiblePlans = tierFilter
    ? plans.filter((p) => p.status === tierFilter)
    : plans;

  return (
    <div className="page products-page">
      <div className="page-header">
        <div>
          <h1>Plans & Service Tiers</h1>
          <p>
            Read-only reference of Vellion Group customer plans and support
            response targets.
          </p>
        </div>

        <select
          value={tierFilter}
          onChange={(e) => setTierFilter(e.target.value)}
          aria-label="Filter plans by status"
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            backgroundColor: "white",
            fontSize: "14px",
          }}
        >
          <option value="">All Plan Statuses</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div className="users-table-container">
        <table>
          <thead>
            <tr>
              <th>Plan Code</th>
              <th>Plan Tier</th>
              <th>Support Scope</th>
              <th>Billing</th>
              <th>Target SLA</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {visiblePlans.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.id}</td>
                <td>
                  <strong>{plan.name}</strong>
                </td>
                <td>{plan.category}</td>
                <td>{plan.billing}</td>
                <td>{plan.sla}</td>
                <td>
                  <span
                    className={`status ${
                      plan.status === "Active" ? "active" : "pending"
                    }`}
                  >
                    {plan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;