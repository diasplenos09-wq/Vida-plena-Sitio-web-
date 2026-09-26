import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeSections from "./components/HomeSections";
import Services from "./components/Services";
import Messages from "./components/Messages";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  const getInitialPage = () => {
    if (typeof window === "undefined") return "inicio";
    const path = window.location.pathname.replace(/^\/|\/$/g, "").toLowerCase();
    if (["servicios", "mensajes", "contacto"].includes(path)) {
      return path;
    }
    const hash = window.location.hash.replace(/^#/, "").toLowerCase();
    if (["servicios", "mensajes", "contacto"].includes(hash)) {
      return hash;
    }
    return "inicio";
  };

  const [activePage, setActivePage] = useState<string>(getInitialPage);

  // Restore scroll to top on page switches to give a real standalone page feeling
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [activePage]);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, "").toLowerCase();
      if (["servicios", "mensajes", "contacto"].includes(path)) {
        setActivePage(path);
      } else {
        setActivePage("inicio");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    if (typeof window !== "undefined") {
      const targetPath = pageId === "inicio" ? "/" : `/${pageId}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ pageId }, "", targetPath);
      }
    }
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "inicio":
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <HomeSections onNavigate={handleNavigate} />
            <Contact />
            <Team />
          </>
        );
      case "servicios":
        return <Services />;
      case "mensajes":
        return <Messages />;
      case "contacto":
        return <Contact />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <HomeSections onNavigate={handleNavigate} />
            <Contact />
            <Team />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white" id="applet-root">
      
      {/* Absolute high-end multi-page navigation header */}
      <Header activeSection={activePage} onNavigate={handleNavigate} />
      
      {/* Active standalone page view container */}
      <main className="flex-grow pt-20">
        {renderActivePage()}
      </main>
      
      {/* Footer Map Signatures */}
      <Footer onNavigate={handleNavigate} />
      
    </div>
  );
}
