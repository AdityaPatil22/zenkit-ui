import Footer from './utils/Footer';
import Navbar from './utils/Navbar';
import './globals.css';

export const metadata = {
  title: 'Zen UI',
  description: 'Component library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
