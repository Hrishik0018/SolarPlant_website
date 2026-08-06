import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import SmoothScroll from './SmoothScroll';
import SplashScreen from './SplashScreen';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <SmoothScroll>
        <CustomCursor />
        <div className="relative min-h-screen bg-white text-navy-700">
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
