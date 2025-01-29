import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
