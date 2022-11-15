import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
