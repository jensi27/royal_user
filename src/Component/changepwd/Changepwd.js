import React, { useState } from "react";
import axios from "axios";

export const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password must match.");
      return;
    }

    try {
      const response = await axios.post("http://your-api/change-password", {
        oldPassword,
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to change password. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
