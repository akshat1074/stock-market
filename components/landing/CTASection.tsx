import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-8 shadow-glow animate-float">
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Transform
            <span className="text-gradient block">Your Trading?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join 50,000+ traders who are already using Signalist to make smarter,
            more profitable trading decisions every day.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow px-10 py-7 text-lg font-semibold group"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Cancel anytime • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
