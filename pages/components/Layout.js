import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col h-screen items-center justify-center">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;
