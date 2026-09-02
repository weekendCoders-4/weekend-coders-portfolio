import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { Container } from "../ui/Container";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@weekendcoders.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated/50">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold text-text-primary">
              Weekend Coders
            </p>
            <p className="mt-2 font-mono text-sm text-text-muted">
              Four developers. One keyboard shortage.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-secondary transition-all hover:border-border-hover hover:text-text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="font-mono text-xs text-text-muted">
            © 2026 Weekend Coders. Built on weekends.
          </p>
        </div>
      </Container>
    </footer>
  );
}
