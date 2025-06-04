import React from "react";
import downloadIcon from "../../assets/images/InstallApp.png"

interface FooterLinkProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-secondary hover:text-white transition-colors duration-200 text-sm cursor-pointer"
  >
    {label}
  </a>
);

interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h5 className="text-white font-black mb-3 text-lg uppercase">{title}</h5>
    <div className="space-y-2">
      {links.map((link, index) => (
        <div key={index}>
          <FooterLink {...link} />
        </div>
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => {
  const aboutUsLinks = [
    { label: "Careers", href: "#" },
    { label: "Company Details", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Help center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Affiliate", href: "#" },
  ];

  const productsLinks = [
    { label: "NFT Marketplace", href: "#" },
    { label: "Slingshot", href: "#" },
    { label: "Swaps", href: "#" },
    { label: "NFT Launchpad", href: "#" },
    { label: "Runes Platform", href: "#" },
    { label: "Creator Dashboard", href: "#" },
  ];

  const resourcesLinks = [
    { label: "Support", href: "#" },
    { label: "API", href: "#" },
    { label: "Feature Requests", href: "#" },
    { label: "Trust & Safety", href: "#" },
    { label: "Sitemap", href: "#" },
  ];

  const contactLinks = [
    { label: "support@tech.email", href: "mailto:support@tech.email" },
    { label: "affiliate@tech.com", href: "mailto:affiliate@tech.com" },
  ];

  return (
    <footer className="border-t border-solid border-[#383A42] text-white">
      <div className="max-w-section px-5 py-10 sm:px-8 lg:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 mb-8 gap-6 lg:gap-10 md:grid-cols-4">
          {/* About Us */}
          <FooterSection title="About Us" links={aboutUsLinks} />

          {/* Products */}
          <FooterSection title="Products" links={productsLinks} />

          {/* Resources */}
          <FooterSection title="Resources" links={resourcesLinks} />

          {/* Contact Us */}
          <div>
            <FooterSection title="Contact Us" links={contactLinks} />
            {/* Install App Button */}
            <button className="mt-6">
              <img src={downloadIcon} alt="install" className="w-[151px] h-[44px]"/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
