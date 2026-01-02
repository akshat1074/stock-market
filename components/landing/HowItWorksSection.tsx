import { UserPlus, Settings, TrendingUp, Wallet } from "lucide-react";

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
    <section id="how-it-works" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Trading in
            <span className="text-gradient"> 4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From sign-up to your first profitable trade in under 5 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-card border-2 border-border hover:border-primary transition-colors mb-6 relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                  <item.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-glow">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
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
