// Common types for navigation and UI components

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  children?: NavItem[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface HeaderConfig {
  logo?: React.ReactNode;
  navItems: NavItem[];
  showAuth?: boolean;
  user?: User;
}

export interface ButtonVariant {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}
