import "./globals.css";

export const metadata = {
  title: "Zen UI",
  description: "Zen UI componen library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
