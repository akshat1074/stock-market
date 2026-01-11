import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

// Inline styles for portability
const styles = {
  primaryGreen: "hsl(158, 64%, 42%)",
  primaryGreenLight: "hsl(158, 64%, 51%)",
  accentTeal: "hsl(172, 66%, 50%)",
  gradientPrimary: "linear-gradient(135deg, hsl(158, 64%, 42%), hsl(172, 66%, 50%))",
  gradientDark: "linear-gradient(180deg, hsl(220, 25%, 8%), hsl(220, 30%, 4%))",
  gradientRadial: "radial-gradient(ellipse at center, hsla(158, 64%, 51%, 0.1), transparent 70%)",
  shadowGlow: "0 0 40px hsla(158, 64%, 42%, 0.3)",
  foreground: "hsl(0, 0%, 98%)",
  muted: "hsl(220, 10%, 60%)",
};

const keyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }
`;

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <style>{keyframes}</style>
      
      {/* Background */}
      <div className="absolute inset-0" style={{ background: styles.gradientDark }} />
      <div className="absolute inset-0" style={{ background: styles.gradientRadial }} />
      
      {/* Animated Orbs */}
      <div 
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ 
          backgroundColor: `${styles.primaryGreen}33`,
          animation: "pulse-glow 3s ease-in-out infinite"
        }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full blur-3xl"
        style={{ 
          backgroundColor: `${styles.accentTeal}33`,
          animation: "pulse-glow 3s ease-in-out infinite",
          animationDelay: "1s"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
            style={{ 
              background: styles.gradientPrimary,
              boxShadow: styles.shadowGlow,
              animation: "float 6s ease-in-out infinite"
            }}
          >
            <Zap className="w-10 h-10" style={{ color: "white" }} />
          </div>

          {/* Headline */}
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ 
              fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
              color: styles.foreground
            }}
          >
            Ready to Transform
            <span 
              className="block"
              style={{ 
                background: styles.gradientPrimary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Your Trading?
            </span>
          </h2>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: styles.muted }}
          >
            Join 50,000+ traders who are already using Signalist to make smarter,
            more profitable trading decisions every day.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="hover:opacity-90 transition-all px-10 py-7 text-lg font-semibold group"
            style={{ 
              background: styles.gradientPrimary,
              boxShadow: styles.shadowGlow,
              color: "white"
            }}
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Badge */}
          <p className="text-sm mt-6" style={{ color: styles.muted }}>
            No credit card required • Cancel anytime • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
