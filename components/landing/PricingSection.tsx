import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

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
  cardBg: "hsl(220, 25%, 10%)",
  cardBgLight: "hsla(220, 25%, 10%, 0.3)",
  secondary: "hsl(220, 20%, 18%)",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for beginners to explore trading signals.",
    features: [
      "5 signals per day",
      "Basic market analysis",
      "Email alerts",
      "Community access",
      "Mobile app access",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious traders who want an edge in the market.",
    features: [
      "Unlimited signals",
      "Advanced AI analytics",
      "Real-time push notifications",
      "Priority support",
      "Risk management tools",
      "Portfolio tracking",
      "API access",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For institutions and professional trading teams.",
    features: [
      "Everything in Pro",
      "Custom signal parameters",
      "Dedicated account manager",
      "White-label solution",
      "Advanced reporting",
      "Team collaboration",
      "SLA guarantee",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

const PricingSection = () => {
  return (
    <section 
      id="pricing" 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: styles.cardBgLight }}
    >
      {/* Background */}
      <div 
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: `linear-gradient(to right, transparent, ${styles.border}, transparent)` }}
      />
      <div 
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: `${styles.primaryGreen}0D` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ color: styles.primaryGreenLight }}
          >
            Pricing
          </p>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
              color: styles.foreground
            }}
          >
            Simple, Transparent
            <span 
              className="block"
              style={{ 
                background: styles.gradientPrimary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Pricing
            </span>
          </h2>
          <p className="text-lg" style={{ color: styles.muted }}>
            Choose the plan that fits your trading style. All plans include a
            14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: plan.popular ? styles.cardBg : `${styles.cardBg}80`,
                border: `1px solid ${plan.popular ? styles.primaryGreen : styles.border}`,
                boxShadow: plan.popular ? `0 20px 40px -10px ${styles.primaryGreen}1A` : "none",
                transform: plan.popular ? "scale(1.05)" : "scale(1)",
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full text-sm font-semibold"
                  style={{ 
                    background: styles.gradientPrimary,
                    color: "white",
                    boxShadow: styles.shadowGlow
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ 
                    fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
                    color: styles.foreground
                  }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span 
                    className="text-4xl font-bold"
                    style={{ 
                      fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
                      background: styles.gradientPrimary,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: styles.muted }}>{plan.period}</span>
                </div>
                <p className="text-sm mt-3" style={{ color: styles.muted }}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${styles.primaryGreen}1A` }}
                    >
                      <Check className="w-3 h-3" style={{ color: styles.primaryGreenLight }} />
                    </div>
                    <span style={{ color: styles.muted }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className="w-full py-6 font-semibold"
                style={plan.popular ? {
                  background: styles.gradientPrimary,
                  boxShadow: styles.shadowGlow,
                  color: "white"
                } : {
                  backgroundColor: styles.secondary,
                  color: styles.foreground
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
