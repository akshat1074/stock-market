import { TrendingUp, Users, Award, Clock } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl glass-dark hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Value */}
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="font-semibold text-foreground mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
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
