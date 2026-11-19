import { useState } from "react";

function Settings() {
  const [name, setName] = useState("Support Agent");
  const [email, setEmail] = useState("support@velliongroup.in");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleSaveChanges = (e) => {
    e.preventDefault();

    setProfileMessage("Agent preferences saved locally!");

    setTimeout(() => {
      setProfileMessage("");
    }, 3000);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    if (currentPassword === "" || newPassword === "") {
      setPasswordMessage("Please enter both passwords.");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordMessage("New password must be at least 6 characters.");
      return;
    }

    setPasswordMessage("Session password updated locally!");

    setCurrentPassword("");
    setNewPassword("");

    setTimeout(() => {
      setPasswordMessage("");
    }, 3000);
  };

  return (
    <div className="page settings-page">
      <div className="page-header">
        <div>
          <h1>Agent Preferences</h1>
          <p>
            Manage your Vellion Group support workspace and notification
            preferences.
          </p>
        </div>
      </div>

      <div className="settings-container">
        {/* Agent Profile */}
        <div className="settings-card">
          <h2>Agent Profile</h2>

          <form onSubmit={handleSaveChanges}>
            <div className="form-group">
              <label>Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Work Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="save-button">
              Save Preferences
            </button>

            {profileMessage && (
              <p className="success-message">{profileMessage}</p>
            )}
          </form>
        </div>

        {/* Support Alerts */}
        <div className="settings-card">
          <h2>Support Alerts</h2>

          <div className="setting-option">
            <div>
              <strong>High-Priority Ticket Alerts</strong>
              <p>Highlight customers with open tickets in shadow view.</p>
            </div>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-option">
            <div>
              <strong>Read-Only Guardrail Notice</strong>
              <p>Keep customer records strictly read-only during lookups.</p>
            </div>
            <input type="checkbox" defaultChecked disabled />
          </div>
        </div>

        {/* Session Security */}
        <div className="settings-card">
          <h2>Session Security</h2>

          <form onSubmit={handleUpdatePassword}>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="save-button">
              Update Password
            </button>

            {passwordMessage && (
              <p className="success-message">{passwordMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;