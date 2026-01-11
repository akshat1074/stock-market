import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";


// Inline styles for portability
const styles = {
  // Green gradient colors - Signalist brand
  primaryGreen: "hsl(158, 64%, 42%)",
  primaryGreenLight: "hsl(158, 64%, 51%)",
  accentTeal: "hsl(172, 66%, 50%)",
  
  // Gradients
  gradientPrimary: "linear-gradient(135deg, hsl(158, 64%, 42%), hsl(172, 66%, 50%))",
  gradientDark: "linear-gradient(180deg, hsl(220, 25%, 8%), hsl(220, 30%, 4%))",
  gradientRadial: "radial-gradient(ellipse at center, hsla(158, 64%, 42%, 0.15), transparent 70%)",
  
  // Shadows
  shadowGlow: "0 0 40px hsla(158, 64%, 42%, 0.3)",
  
  // Dark theme colors
  background: "hsl(220, 25%, 6%)",
  foreground: "hsl(0, 0%, 98%)",
  muted: "hsl(220, 10%, 60%)",
  border: "hsla(220, 20%, 18%, 0.3)",
  cardBg: "hsla(220, 25%, 10%, 0.8)",
};

// Keyframe animations as CSS string
const keyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes grid-flow {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
`;

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: styles.background }}
    >
      {/* Inject keyframe animations */}
      <style>{keyframes}</style>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={"/public/assets/hero-bg.jpg"}
          alt="Financial data visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div 
          className="absolute inset-0 opacity-80" 
          style={{ background: styles.gradientDark }}
        />
        <div 
          className="absolute inset-0" 
          style={{ background: styles.gradientRadial }}
        />
      </div>

      {/* Floating Grid Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px"
              style={{
                left: `${(i + 1) * 5}%`,
                height: "200%",
                background: `linear-gradient(to bottom, transparent, ${styles.primaryGreen}80, transparent)`,
                animation: `grid-flow ${15 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glowing Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ 
          backgroundColor: `${styles.primaryGreen}33`,
          animation: "pulse-glow 3s ease-in-out infinite"
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ 
          backgroundColor: `${styles.accentTeal}33`,
          animation: "pulse-glow 3s ease-in-out infinite",
          animationDelay: "1.5s"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-xl"
            style={{ 
              backgroundColor: styles.cardBg,
              border: `1px solid ${styles.border}`,
              animation: "fade-in 0.8s ease-out forwards"
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: styles.primaryGreenLight }} />
            <span className="text-sm font-medium" style={{ color: styles.foreground }}>
              AI-Powered Trading Signals
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6"
            style={{ 
              fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
              color: styles.foreground,
              animation: "slide-up 0.6s ease-out forwards"
            }}
          >
            Trade Smarter with
            <span 
              className="block mt-2"
              style={{ 
                background: styles.gradientPrimary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Real-Time Signals
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ 
              color: styles.muted,
              animation: "slide-up 0.6s ease-out forwards",
              animationDelay: "0.2s"
            }}
          >
            Get AI-driven market insights, precision signals, and professional
            analytics to maximize your trading potential. Join 50,000+ traders
            who trust Signalist.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ 
              animation: "slide-up 0.6s ease-out forwards",
              animationDelay: "0.4s"
            }}
          >
            <Button
              size="lg"
              className="hover:opacity-90 transition-all px-8 py-6 text-lg font-semibold group"
              style={{ 
                background: styles.gradientPrimary,
                boxShadow: styles.shadowGlow,
                color: "white"
              }}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm px-8 py-6 text-lg hover:bg-opacity-40"
              style={{ 
                borderColor: styles.border,
                backgroundColor: `${styles.cardBg}`,
                color: styles.foreground
              }}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-8"
            style={{ 
              borderTop: `1px solid ${styles.border}`,
              animation: "fade-in 0.8s ease-out forwards",
              animationDelay: "0.6s"
            }}
          >
            {[
              { value: "50K+", label: "Active Traders" },
              { value: "94%", label: "Success Rate" },
              { value: "$2.5B", label: "Volume Traded" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ 
                    fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
                    background: styles.gradientPrimary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm mt-1" style={{ color: styles.muted }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: `linear-gradient(to top, ${styles.background}, transparent)` }}
      />
    </section>
  );
};

export default HeroSection;
