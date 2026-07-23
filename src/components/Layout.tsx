import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SocialIcon from "./SocialIcon";
import { personalInfo } from "../data/personal";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      
      <header className="container-pad" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <nav>
          <NavLink to="/" className="logo">
            {personalInfo.initials}
            <span className="logo-dot">.</span>
          </NavLink>
          
          <div className="nav-links">
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Work
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/tech-stack"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tech Stack
            </NavLink>
            <NavLink
              to="/now"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Now
            </NavLink>
            
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="container-pad">
        <div className="footer-top">
          <p className="footer-since">{personalInfo.footerText}</p>
          
          <div className="footer-social-links">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      
      </footer>
    </>
  );
}
