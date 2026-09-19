import { useState, useEffect } from "react";

const PASSWORD = import.meta.env.VITE_PORTFOLIO_PASSWORD;
const SESSION_KEY = "portfolio_auth";

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem(SESSION_KEY);
    if (auth === "true") setAuthenticated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "2rem",
          borderRadius: "0.75rem",
          width: "100%",
          maxWidth: "360px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        }}
      >
        <h2
          style={{
            color: "#f1f5f9",
            marginBottom: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: 600,
          }}
        >
          Protected Content
        </h2>
        <p
          style={{
            color: "#94a3b8",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
          }}
        >
          Enter the password to view this content.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              border: error ? "1px solid #ef4444" : "1px solid #334155",
              background: "#0f172a",
              color: "#f1f5f9",
              fontSize: "0.875rem",
              marginBottom: "0.75rem",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
          {error && (
            <p
              style={{
                color: "#ef4444",
                fontSize: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              Incorrect password, please try again.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              background: "#0ea5e9",
              color: "white",
              fontWeight: 600,
              fontSize: "0.875rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;