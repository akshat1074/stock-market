import { Star, Quote } from "lucide-react";

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
};

const testimonials = [
  {
    name: "Michael Chen",
    role: "Day Trader",
    content:
      "Signalist has completely transformed my trading strategy. The AI signals are incredibly accurate, and I've seen a 40% increase in my portfolio within 3 months.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Sarah Williams",
    role: "Investment Analyst",
    content:
      "As a professional, I was skeptical at first. But the depth of analysis and the speed of signals have made Signalist an essential part of my toolkit.",
    rating: 5,
    avatar: "SW",
  },
  {
    name: "David Park",
    role: "Crypto Trader",
    content:
      "The crypto signals are on point. I've tried many services, but Signalist's accuracy and the risk management tools are unmatched in the industry.",
    rating: 5,
    avatar: "DP",
  },
];

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: styles.background }}
    >
      {/* Background */}
      <div 
        className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
        style={{ backgroundColor: `${styles.primaryGreen}0D` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className="font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ color: styles.primaryGreenLight }}
          >
            Testimonials
          </p>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
              color: styles.foreground
            }}
          >
            Trusted by
            <span 
              style={{ 
                background: styles.gradientPrimary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {" "}Top Traders
            </span>
          </h2>
          <p className="text-lg" style={{ color: styles.muted }}>
            See what our community has to say about their experience with Signalist.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl transition-all duration-300 group"
              style={{ 
                backgroundColor: styles.cardBg,
                border: `1px solid ${styles.border}`
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${styles.primaryGreen}4D`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = styles.border}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12" style={{ color: styles.primaryGreenLight }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ fill: styles.primaryGreenLight, color: styles.primaryGreenLight }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="leading-relaxed mb-8" style={{ color: styles.foreground }}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold"
                  style={{ 
                    background: styles.gradientPrimary,
                    color: "white"
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold" style={{ color: styles.foreground }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm" style={{ color: styles.muted }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
