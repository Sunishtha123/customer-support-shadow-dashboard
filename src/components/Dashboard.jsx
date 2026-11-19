function Dashboard() {
  const recentCustomers = [
    {
      id: "CUST-101",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      plan: "Pro",
      status: "Active",
    },
    {
      id: "CUST-102",
      name: "Priya Singh",
      email: "priya@gmail.com",
      plan: "Enterprise",
      status: "Active",
    },
    {
      id: "CUST-103",
      name: "Aman Verma",
      email: "aman@gmail.com",
      plan: "Starter",
      status: "Pending",
    },
    {
      id: "CUST-104",
      name: "Neha Gupta",
      email: "neha@gmail.com",
      plan: "Pro",
      status: "Active",
    },
  ];

  const recentTickets = [
    {
      ticketId: "TCK-501",
      customer: "Rahul Sharma",
      issue: "Invoice & billing status check",
      status: "Completed",
    },
    {
      ticketId: "TCK-502",
      customer: "Priya Singh",
      issue: "SSO login & workspace access",
      status: "Pending",
    },
    {
      ticketId: "TCK-503",
      customer: "Aman Verma",
      issue: "Account verification pending",
      status: "Completed",
    },
    {
      ticketId: "TCK-504",
      customer: "Neha Gupta",
      issue: "Plan upgrade confirmation",
      status: "Completed",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Customer Support Shadow Dashboard</h1>
          <p>
            Vellion Group internal read-only view for customer lookup and live
            support status metrics.
          </p>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total Customers</h3>
          <p>120</p>
          <span>Indexed customer profiles</span>
        </div>

        <div className="card">
          <h3>Active Accounts</h3>
          <p>98</p>
          <span>Healthy & verified status</span>
        </div>

        <div className="card">
          <h3>Open Support Items</h3>
          <p>14</p>
          <span>Awaiting agent review</span>
        </div>

        <div className="card">
          <h3>Read-Only Mode</h3>
          <p>ON</p>
          <span>Safe shadow inspection</span>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section">
          <h2>Recent Customers</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Plan</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>
                    <div>{customer.name}</div>
                    <small style={{ color: "#64748b" }}>{customer.email}</small>
                  </td>
                  <td>{customer.plan}</td>
                  <td>
                    <span
                      className={`status ${customer.status.toLowerCase()}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2>Recent Support Tickets</h2>

          <table>
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Customer</th>
                <th>Issue</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentTickets.map((ticket) => (
                <tr key={ticket.ticketId}>
                  <td>{ticket.ticketId}</td>
                  <td>{ticket.customer}</td>
                  <td>{ticket.issue}</td>
                  <td>
                    <span
                      className={`status ${ticket.status.toLowerCase()}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;