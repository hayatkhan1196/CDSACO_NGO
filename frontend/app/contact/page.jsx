"use client";
import { useState } from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
const API = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api").replace(/\/$/, "");
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  function change(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  async function submit(e) {
    e.preventDefault(); setBusy(true); setNotice("");
    try {
      const res = await fetch(`${API}/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Could not send message");
      setNotice("Thank you. Your message has been received."); setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) { setNotice(err.message || "Could not connect to the API. Please try again."); }
    finally { setBusy(false); }
  }
  return <><SiteHeader/>
  <main className="container" style={{ paddingTop: 55, maxWidth: 800 }}>
    <p style={{ color: "#47745c", fontWeight: 800, letterSpacing: 2, fontSize: 12 }}>GET IN TOUCH</p>
       <h1 style={{ color: "#164e3b", fontSize: 48 }}>Contact us</h1><p className="muted">Send a message to our team using the form below.</p><form className="card" onSubmit={submit} style={{ display: "grid", gap: 18, marginTop: 26 }}><div><label htmlFor="name">Name</label><input id="name" name="name" value={form.name} onChange={change} required maxLength={120}/></div><div><label htmlFor="email">Email</label><input id="email" type="email" name="email" value={form.email} onChange={change} required maxLength={200}/></div><div><label htmlFor="subject">Subject</label><input id="subject" name="subject" value={form.subject} onChange={change} maxLength={200}/></div><div><label htmlFor="message">Message</label><textarea id="message" name="message" value={form.message} onChange={change} required rows={6} maxLength={5000}/></div><button className="btn btn-dark" disabled={busy}>{busy ? "Sending…" : "Send message"}</button>{notice && <p role="status">{notice}</p>}</form></main><SiteFooter/></>;
}
