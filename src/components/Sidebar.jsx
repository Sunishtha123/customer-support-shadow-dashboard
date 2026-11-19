function Sidebar({ setActivePage, activePage }) {
  return (
    <div className="sidebar">
      <h2>Shadow Dashboard</h2>
      <p className="sidebar-brand">Vellion Group</p>

      <ul>
        <li
          className={activePage === "Dashboard" ? "active-menu" : ""}
          onClick={() => setActivePage("Dashboard")}
        >
          Dashboard
        </li>

        <li
          className={activePage === "Users" ? "active-menu" : ""}
          onClick={() => setActivePage("Users")}
        >
          Customer Search
        </li>

        <li
          className={activePage === "Products" ? "active-menu" : ""}
          onClick={() => setActivePage("Products")}
        >
          Plans & Tiers
        </li>

        <li
          className={activePage === "Settings" ? "active-menu" : ""}
          onClick={() => setActivePage("Settings")}
        >
          Preferences
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;