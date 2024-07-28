import "./globals.css";

export const metadata = {
  title: "HR Portal",
  description: "Get ur own HR portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
