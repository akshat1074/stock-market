import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

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
  border: "hsla(220, 20%, 18%, 0.5)",
  cardBg: "hsla(220, 25%, 10%, 0.8)",
};

const keyframes = `
  @keyframes scale-in {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    
  ];

  const router = useRouter()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
        backgroundColor: isScrolled ? styles.cardBg : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? `1px solid ${styles.border}` : "none",
      }}
    >
      <style>{keyframes}</style>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-100"
              style={{ color: styles.muted }}
              onMouseEnter={(e) => e.currentTarget.style.color = styles.foreground}
              onMouseLeave={(e) => e.currentTarget.style.color = styles.muted}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost"
            style={{ color: styles.muted }}
            onClick={() => router.push("/sign-up")}
          >
            Sign In
          </Button>
          <Button 
            className="hover:opacity-90 transition-opacity"
            style={{ 
              background: styles.gradientPrimary,
              boxShadow: styles.shadowGlow,
              color: "white"
            }}
          >
            Get Started Free
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: styles.foreground }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden mt-2 mx-4 rounded-xl p-4 backdrop-blur-xl"
          style={{ 
            backgroundColor: styles.cardBg,
            border: `1px solid ${styles.border}`,
            animation: "scale-in 0.2s ease-out"
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium py-2"
                style={{ color: styles.muted }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div 
              className="flex flex-col gap-2 pt-4"
              style={{ borderTop: `1px solid ${styles.border}` }}
            >
              <Button variant="ghost" className="w-full justify-start" style={{ color: styles.foreground }}>
                Sign In
              </Button>
              <Button 
                className="w-full"
                style={{ 
                  background: styles.gradientPrimary,
                  color: "white"
                }}
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
