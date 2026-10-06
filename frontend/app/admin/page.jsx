"use client";
import { useEffect, useState } from "react";
const API = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api").replace(/\/$/, "");
const TYPES = ["programs", "projects", "news", "reports", "gallery", "partners", "team"];
export default function AdminDashboard() {
  const [token, setToken] = useState("");
  const [type, setType] = useState("programs");
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", summary: "", body: "", imageUrl: "", fileUrl: "", category: "", status: "published" });
  const [message, setMessage] = useState("Checking login…");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const saved = sessionStorage.getItem("ngo_admin_token");
    if (!saved) { window.location.replace("/admin/login"); return; }
    setToken(saved);
    fetch(`${API}/auth/me`, { headers: { Authorization: `Bearer ${saved}` } }).then(r => {
      if (!r.ok) throw new Error();
      setMessage("Signed in");
    }).catch(() => { sessionStorage.removeItem("ngo_admin_token"); window.location.replace("/admin/login"); });
  }, []);
  async function loadItems(selectedType = type, activeToken = token) {
    if (!activeToken) return;
    try {
      const res = await fetch(`${API}/content/${selectedType}?all=true`, { headers: { Authorization: `Bearer ${activeToken}` } });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load");
      setItems(data.items || []);
    } catch (e) { setMessage(e.message || "Failed to load content"); }
  }
  useEffect(() => { if (token) loadItems(type, token); }, [token, type]);
  async function upload(e) {
    const file = e.target.files?.[0]; if (!file) return;
    const data = new FormData(); data.append("file", file);
    setBusy(true); setMessage("Uploading file…");
    try {
      const res = await fetch(`${API}/upload`, { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: data });
      const result = await res.json(); if (!res.ok) throw new Error(result.message || "Upload failed");
      if (file.type === "application/pdf") setForm(f => ({ ...f, fileUrl: result.url }));
      else setForm(f => ({ ...f, imageUrl: result.url }));
      setMessage("Upload complete. Save the content to publish the URL.");
    } catch (e) { setMessage(e.message || "Upload failed"); }
    finally { setBusy(false); e.target.value = ""; }
  }
  async function save(e) {
    e.preventDefault(); setBusy(true); setMessage("");
    try {
      const res = await fetch(`${API}/content/${type}`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify(form) });
      const data = await res.json(); if (!res.ok) throw new Error(data.message || "Could not save");
      setForm({ title: "", summary: "", body: "", imageUrl: "", fileUrl: "", category: "", status: "published" });
      setMessage("Content created."); await loadItems(type, token);
    } catch (e) { setMessage(e.message || "Could not save content"); }
    finally { setBusy(false); }
  }
  async function remove(id) {
    if (!window.confirm("Delete this item?")) return;
    try {
      const res = await fetch(`${API}/content/${type}/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error("Could not delete item");
      setItems(items.filter(item => item._id !== id)); setMessage("Item deleted.");
    } catch (e) { setMessage(e.message); }
  }
  function logout() { sessionStorage.removeItem("ngo_admin_token"); window.location.href = "/admin/login"; }
  return <main className="container admin-page" style={{ padding: "35px 0 70px" }}>
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 15, flexWrap: "wrap" }}><div><a href="/" style={{ color: "#164e3b", fontWeight: 800 }}>← Public website</a><h1 style={{ color: "#164e3b", fontSize: 40, margin: "10px 0" }}>Content dashboard</h1><p className="muted">{message}</p></div><button className="btn btn-dark" onClick={logout}>Log out</button></header>
    <div className="admin-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22, marginTop: 24, alignItems: "start" }}>
      <form className="card" onSubmit={save} style={{ display: "grid", gap: 14 }}>
        <h2 style={{ color: "#164e3b", margin: 0 }}>Add content</h2>
        <div><label>Content type</label><select value={type} onChange={e => setType(e.target.value)}>{TYPES.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
        <div><label>Title</label><input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required/></div>
        <div><label>Summary</label><textarea rows={3} value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })}/></div>
        <div><label>Full text</label><textarea rows={4} value={form.body} onChange={e => setForm({ ...form, body: e.target.value })}/></div>
        <div><label>Category (optional)</label><input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}/></div>
        <div><label>Upload image or PDF (max 10 MB)</label><input type="file" accept="image/jpeg,image/png,image/webp,image/gif,application/pdf" onChange={upload}/></div>
        <div><label>Image URL</label><input value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })}/></div>
        <div><label>PDF / file URL</label><input value={form.fileUrl} onChange={e => setForm({ ...form, fileUrl: e.target.value })}/></div>
        <div><label>Status</label><select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option value="published">Published</option><option value="active">Active</option><option value="draft">Draft</option><option value="archived">Archived</option></select></div>
        <button className="btn btn-dark" disabled={busy}>{busy ? "Working…" : "Save content"}</button>
      </form>
      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}><h2 style={{ color: "#164e3b", margin: 0 }}>Existing items</h2><button className="btn btn-dark" onClick={() => loadItems()}>Refresh</button></div>
        <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
          {items.length === 0 && <p className="muted">No items in this category yet.</p>}
          {items.map(item => <article key={item._id} style={{ borderTop: "1px solid #e8e9df", paddingTop: 14 }}>
            <strong>{item.title}</strong><p className="muted" style={{ fontSize: 13 }}>{item.status} · {item.category || type}</p>
            <button className="btn" style={{ color: "#b42318", border: "1px solid #e7b8b4", padding: "7px 12px" }} onClick={() => remove(item._id)}>Delete</button>
          </article>)}
        </div>
      </section>
    </div>
    <p className="muted" style={{ marginTop: 24, fontSize: 13 }}>Starter admin note: this dashboard currently supports creating and deleting content. Edit forms and role-based permissions can be added next.</p>
  </main>;
}
