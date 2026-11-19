function Header({
  title = "Support Overview",
  subtitle = "Vellion Group — Read-Only Customer Support Shadow Dashboard",
}) {
  return (
    <header className="header">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="admin-profile">
        <div className="profile-icon">S</div>
        <div>
          <strong>Support Agent</strong>
          <span>Vellion Group • Read-Only</span>
        </div>
      </div>
    </header>
  );
}

export default Header;