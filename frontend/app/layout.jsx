import "./globals.css";

export const viewport = { width: "device-width", initialScale: 1 };

export const metadata = {
  title: "CDSACO | Community Development",
  description: "Community programs, projects, stories and reports."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
