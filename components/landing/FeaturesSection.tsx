import { 
  Zap, 
  Shield, 
  BarChart3, 
  Bell, 
  Bot, 
  Globe,
  ArrowUpRight
} from "lucide-react";

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
  cardBg: "hsla(220, 25%, 10%, 0.5)",
};

const features = [
  {
    icon: Zap,
    title: "Real-Time Signals",
    description:
      "Get instant buy/sell signals powered by advanced algorithms that analyze market movements in milliseconds.",
  },
  {
    icon: Bot,
    title: "AI Analytics",
    description:
      "Our proprietary AI models process millions of data points to predict market trends with exceptional accuracy.",
  },
  {
    icon: BarChart3,
    title: "Advanced Charts",
    description:
      "Professional-grade charting tools with 100+ technical indicators and customizable layouts.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Never miss an opportunity with customizable alerts via push notifications, SMS, and email.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Built-in portfolio protection with stop-loss automation and risk assessment tools.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description:
      "Access signals for stocks, crypto, forex, and commodities across 50+ global exchanges.",
  },
];

const FeaturesSection = () => {
  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: styles.background }}
    >
      {/* Background Elements */}
      <div 
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: `linear-gradient(to right, transparent, ${styles.border}, transparent)` }}
      />
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"
        style={{ backgroundColor: `${styles.primaryGreen}0D` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ color: styles.primaryGreenLight }}
          >
            Features
          </p>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
              color: styles.foreground
            }}
          >
            Everything You Need to Trade
            <span 
              className="block"
              style={{ 
                background: styles.gradientPrimary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Like a Pro
            </span>
          </h2>
          <p className="text-lg" style={{ color: styles.muted }}>
            Powerful tools designed for both beginners and professional traders.
            One platform, unlimited possibilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: styles.cardBg,
                border: `1px solid ${styles.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${styles.primaryGreen}80`;
                e.currentTarget.style.boxShadow = `0 10px 40px -10px ${styles.primaryGreen}1A`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = styles.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ 
                  background: styles.gradientPrimary,
                  boxShadow: styles.shadowGlow
                }}
              >
                <feature.icon className="w-7 h-7" style={{ color: "white" }} />
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
                  color: styles.foreground
                }}
              >
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: styles.muted }}>
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5" style={{ color: styles.primaryGreenLight }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
