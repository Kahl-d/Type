import "./globals.css";

export const metadata = {
  title: "NoteMate - Your Smart Notebook",
  description: "Save and manage notes with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
