import { useEffect, useState } from "react";
import Header from "../../components/Header";
import LandingPage from "../../components/LandingPage";
import { Footer } from "components";
import type { NavItem } from "../../components/types";
import logo from "../../assets/images/Logo.png";
import "../../styles/components.css";

const initialNavItems: NavItem[] = [
  { id: "home", label: "HOME", href: "/" },
  { id: "item1", label: "ITEM1", href: "#" },
  { id: "item2", label: "ITEM2", href: "#" },
  { id: "item3", label: "ITEM3", href: "#" },
  { id: "item4", label: "ITEM4", href: "#" },
];

export default function Home() {
  const [activeNavId, setActiveNavId] = useState<string>("home");
  const [navItems, setNavItems] = useState(initialNavItems);

  useEffect(() => {
    const updatedNavItems = navItems.map((item) => ({
      ...item,
      isActive: item.id === activeNavId,
    }));
    setNavItems(updatedNavItems);
  }, [activeNavId]);

  return (
    <div className="min-h-screen bg-black">
      <Header
        logo={logo}
        navItems={navItems}
        onNavItemClick={(item) => setActiveNavId(item.id)}
      />
      <main>
        <LandingPage />
      </main>

      <Footer />
    </div>
  );
}
