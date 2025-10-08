import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flame, TrendingUp, Target, Zap } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-scale-in">
              <Flame className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Build your best physique with AI guidance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Body,{" "}
              <span className="text-gradient-primary">One Habit</span>{" "}
              at a Time
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Track your progress, visualize your goals, and stay motivated with an AI coach that adapts to your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="group">
                  Start Your Journey
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Smart Tracking"
              description="Log habits effortlessly and watch your streaks grow with gamified XP rewards."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Visual Progress"
              description="See your transformation with side-by-side physique comparisons and detailed metrics."
            />
            <FeatureCard
              icon={<Flame className="w-6 h-6" />}
              title="AI Coach"
              description="Get personalized motivation, feedback, and habit suggestions tailored to your goals."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default Landing;
