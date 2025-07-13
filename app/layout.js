import Footer from './utils/Footer';
import Navbar from './utils/Navbar';
import './globals.css';
import { AuthProvider } from './utils/AuthProvider';

export const metadata = {
  title: 'Zen UI',
  description: 'Component library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
