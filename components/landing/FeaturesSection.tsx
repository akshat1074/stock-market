import { 
    Zap, 
    Shield, 
    BarChart3, 
    Bell, 
    Bot, 
    Globe,
    ArrowUpRight
  } from "lucide-react";
  
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
      <section id="features" className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Features
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need to Trade
              <span className="text-gradient block">Like a Pro</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Powerful tools designed for both beginners and professional traders.
              One platform, unlimited possibilities.
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
  
                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
  
                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  