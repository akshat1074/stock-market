import { TrendingUp, Users, Award, Clock } from "lucide-react";

// Inline styles for portability
const styles = {
  primaryGreen: "hsl(158, 64%, 42%)",
  primaryGreenLight: "hsl(158, 64%, 51%)",
  accentTeal: "hsl(172, 66%, 50%)",
  gradientPrimary: "linear-gradient(135deg, hsl(158, 64%, 42%), hsl(172, 66%, 50%))",
  gradientDark: "linear-gradient(180deg, hsl(220, 25%, 8%), hsl(220, 30%, 4%))",
  gradientRadial: "radial-gradient(ellipse at center, hsla(158, 64%, 51%, 0.1), transparent 70%)",
  shadowGlow: "0 0 40px hsla(158, 64%, 42%, 0.3)",
  background: "hsl(220, 25%, 6%)",
  foreground: "hsl(0, 0%, 98%)",
  muted: "hsl(220, 10%, 60%)",
  border: "hsla(220, 20%, 18%, 0.3)",
  cardBg: "hsla(220, 25%, 6%, 0.6)",
};

const stats = [
  {
    icon: TrendingUp,
    value: "94%",
    label: "Win Rate",
    description: "Average success rate across all signals",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Traders",
    description: "Professional and retail traders worldwide",
  },
  {
    icon: Award,
    value: "$2.5B",
    label: "Trading Volume",
    description: "Total volume traded through our signals",
  },
  {
    icon: Clock,
    value: "<50ms",
    label: "Signal Speed",
    description: "Ultra-fast signal delivery to your device",
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{ background: styles.gradientDark }} />
      <div className="absolute inset-0" style={{ background: styles.gradientRadial }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 group"
              style={{ 
                backgroundColor: styles.cardBg,
                border: `1px solid ${styles.border}`
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${styles.primaryGreen}80`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = styles.border}
            >
              {/* Icon */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:opacity-100 transition-colors"
                style={{ backgroundColor: `${styles.primaryGreen}1A` }}
              >
                <stat.icon className="w-8 h-8" style={{ color: styles.primaryGreenLight }} />
              </div>

              {/* Value */}
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
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

              {/* Label */}
              <div className="font-semibold mb-2" style={{ color: styles.foreground }}>
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm" style={{ color: styles.muted }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
