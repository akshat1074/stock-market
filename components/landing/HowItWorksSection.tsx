import { UserPlus, Settings, TrendingUp, Wallet } from "lucide-react";

// Inline styles for portability
const styles = {
  primaryGreen: "hsl(158, 64%, 42%)",
  primaryGreenLight: "hsl(158, 64%, 51%)",
  accentTeal: "hsl(172, 66%, 50%)",
  gradientPrimary: "linear-gradient(135deg, hsl(158, 64%, 42%), hsl(172, 66%, 50%))",
  shadowGlow: "0 0 40px hsla(158, 64%, 42%, 0.3)",
  background: "hsl(220, 25%, 6%)",
  cardBg: "hsla(220, 25%, 10%, 0.3)",
  foreground: "hsl(0, 0%, 98%)",
  muted: "hsl(220, 10%, 60%)",
  border: "hsl(220, 20%, 18%)",
};

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up in seconds with just your email. No credit card required to start.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Set Preferences",
    description: "Choose your markets, risk tolerance, and signal preferences.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Receive Signals",
    description: "Get real-time buy/sell signals with entry points and targets.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Trade & Profit",
    description: "Execute trades on your broker and track your portfolio growth.",
  },
];

const HowItWorksSection = () => {
  return (
    <section 
      id="how-it-works" 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: styles.cardBg }}
    >
      {/* Decorative Elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: `${styles.primaryGreen}0D` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ color: styles.primaryGreenLight }}
          >
            How It Works
          </p>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
              color: styles.foreground
            }}
          >
            Start Trading in
            <span 
              style={{ 
                background: styles.gradientPrimary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {" "}4 Simple Steps
            </span>
          </h2>
          <p className="text-lg" style={{ color: styles.muted }}>
            From sign-up to your first profitable trade in under 5 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-14 left-1/2 w-full h-px z-0"
                  style={{ background: `linear-gradient(to right, ${styles.primaryGreen}80, transparent)` }}
                />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div 
                  className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-6 relative group transition-colors"
                  style={{ 
                    backgroundColor: styles.background,
                    border: `2px solid ${styles.border}`
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = styles.primaryGreen}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = styles.border}
                >
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ background: styles.gradientPrimary }}
                  />
                  <item.icon className="w-10 h-10" style={{ color: styles.primaryGreenLight }} />
                  <span 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ 
                      background: styles.gradientPrimary,
                      color: "white",
                      boxShadow: styles.shadowGlow
                    }}
                  >
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
                    color: styles.foreground
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: styles.muted }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
