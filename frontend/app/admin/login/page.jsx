"use client";
import { useState } from "react";
const API = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api").replace(/\/$/, "");
export default function AdminLogin() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault(); setBusy(true); setError("");
    try {
      const res = await fetch(`${API}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      sessionStorage.setItem("ngo_admin_token", data.token);
      window.location.href = "/admin";
    } catch (err) { setError(err.message || "Could not connect to backend"); }
    finally { setBusy(false); }
  }
  return <main className="container" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
    <form className="card" onSubmit={submit} style={{ width: "min(440px, 100%)" }}>
      <a href="/" style={{ color: "#164e3b", fontWeight: 900 }}>← CDSACO website</a>
      <h1 style={{ color: "#164e3b", marginBottom: 8 }}>Admin login</h1>
      <p className="muted">Sign in to manage website content.</p>
      <div style={{ marginTop: 24 }}>
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="username" /></div>
      <div style={{ marginTop: 16 }}>
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
      </div>
      <button className="btn btn-dark" style={{ width: "100%", marginTop: 22 }} disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      {error && <p role="alert" style={{ color: "#b42318" }}>{error}</p>}
      <p className="muted" style={{ fontSize: 12 }}>Set your admin credentials in backend/.env before creating the admin user.</p>
    </form>
  </main>;
}
