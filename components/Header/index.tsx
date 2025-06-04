import React, { useState } from "react";
import Button from "../Button";
import cn from "utils/common";
import hammer from "../../assets/svgs/hammer.svg";
import close from "../../assets/svgs/close.svg";
import type { NavItem } from "../types";

export interface HeaderProps {
  logo: string;
  navItems: NavItem[];
  onSignUp?: () => void;
  onLogIn?: () => void;
  onNavItemClick?: (item: NavItem) => void;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  navItems,
  onSignUp,
  onLogIn,
  onNavItemClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item: NavItem) => {
    if (onNavItemClick) {
      onNavItemClick(item);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black relative z-50">
      <div className="max-w-container px-5 py-3 sm:px-8 sm:py-5 lg:px-10">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            {/* Mobile menu button */}
            <div className="-mr-2 pt-1 lg:hidden">
              <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                <img
                  src={isMobileMenuOpen ? close : hammer}
                  alt="Menu Icon"
                  className="w-6 h-6 flex-shrink-0"
                />
              </button>
            </div>

            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="Logo"
                className="w-[72px] h-9 flex-shrink-0 sm:w-[79px] sm:h-[39px]"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              {navItems.map((item) => (
                <button
                  key={`${item.id}-${item.isActive}`}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "px-[18px] py-2 text-sm font-medium transition-colors duration-200 cursor-pointer text-secondary text-button-hover-primary",
                    item.isActive && "text-primary bg-[#383A42] rounded-full"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              onClick={onSignUp}
              className="text-sm px-6 py-2"
            >
              SIGN UP
            </Button>
            <Button
              variant="secondary"
              onClick={onLogIn}
              className="text-sm px-6 py-2"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="bg-[#1F2023] w-full h-full fixed top-[60px] sm:top-20 lg:hidden">
          <div className="p-5 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "w-full text-center px-5 py-2 text-sm font-medium transition-colors duration-200 text-secondary text-button-hover-primary",
                  item.isActive && "text-primary bg-[#383A42] rounded-full"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
