import { TrendingUp, Github, Twitter, Linkedin, Youtube } from "lucide-react";

// Inline styles for portability
const styles = {
  primaryGreen: "hsl(158, 64%, 42%)",
  primaryGreenLight: "hsl(158, 64%, 51%)",
  accentTeal: "hsl(172, 66%, 50%)",
  gradientPrimary: "linear-gradient(135deg, hsl(158, 64%, 42%), hsl(172, 66%, 50%))",
  shadowGlow: "0 0 40px hsla(158, 64%, 42%, 0.3)",
  background: "hsl(220, 25%, 6%)",
  foreground: "hsl(0, 0%, 98%)",
  muted: "hsl(220, 10%, 60%)",
  border: "hsl(220, 20%, 18%)",
  cardBg: "hsla(220, 25%, 10%, 0.5)",
  secondary: "hsla(220, 20%, 18%, 0.5)",
};

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Licenses", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer 
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: styles.cardBg,
        borderTop: `1px solid ${styles.border}`
      }}
    >
      {/* Background Element */}
      <div 
        className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
        style={{ backgroundColor: `${styles.primaryGreen}0D` }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ 
                  background: styles.gradientPrimary,
                  boxShadow: styles.shadowGlow
                }}
              >
                <TrendingUp className="w-5 h-5" style={{ color: "white" }} />
              </div>
              <span 
                className="text-xl font-bold"
                style={{ 
                  fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
                  color: styles.foreground
                }}
              >
                Signalist
              </span>
            </a>
            <p className="mb-6 max-w-xs" style={{ color: styles.muted }}>
              AI-powered trading signals for the modern investor. Trade smarter,
              not harder.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: styles.secondary,
                    color: styles.muted
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = styles.border;
                    e.currentTarget.style.color = styles.foreground;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = styles.secondary;
                    e.currentTarget.style.color = styles.muted;
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: styles.foreground }}>Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: styles.muted }}
                    onMouseEnter={(e) => e.currentTarget.style.color = styles.foreground}
                    onMouseLeave={(e) => e.currentTarget.style.color = styles.muted}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: styles.foreground }}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: styles.muted }}
                    onMouseEnter={(e) => e.currentTarget.style.color = styles.foreground}
                    onMouseLeave={(e) => e.currentTarget.style.color = styles.muted}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: styles.foreground }}>Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: styles.muted }}
                    onMouseEnter={(e) => e.currentTarget.style.color = styles.foreground}
                    onMouseLeave={(e) => e.currentTarget.style.color = styles.muted}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: styles.foreground }}>Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: styles.muted }}
                    onMouseEnter={(e) => e.currentTarget.style.color = styles.foreground}
                    onMouseLeave={(e) => e.currentTarget.style.color = styles.muted}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${styles.border}` }}
        >
          <p className="text-sm" style={{ color: styles.muted }}>
            © {new Date().getFullYear()} Signalist. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: styles.muted }}>
            Trading involves risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
