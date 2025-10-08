import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Flame, ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Visualizer = () => {
  const [comparisonValue, setComparisonValue] = useState(50);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">FitForge</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/habits" className="text-muted-foreground hover:text-foreground transition-colors">Habits</Link>
              <Link to="/journey" className="text-muted-foreground hover:text-foreground transition-colors">Journey</Link>
              <Link to="/visualizer" className="text-foreground font-medium">Visualizer</Link>
              <Link to="/coach" className="text-muted-foreground hover:text-foreground transition-colors">Coach</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Body Visualizer</h1>
          <p className="text-muted-foreground">Compare your current and target physique</p>
        </div>

        {/* Progress Indicator */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Overall Progress</h3>
              <p className="text-sm text-muted-foreground">You're 70% toward your target physique</p>
            </div>
            <div className="text-3xl font-bold text-gradient-primary">70%</div>
          </div>
          <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-gradient-primary w-[70%] transition-all duration-500" />
          </div>
        </Card>

        {/* Comparison View */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Current Physique</h3>
              <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Week 6</span>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-b from-secondary to-background rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <ellipse cx="50" cy="30" rx="15" ry="20" fill="currentColor" />
                  <rect x="42" y="50" width="16" height="35" rx="3" fill="currentColor" />
                  <ellipse cx="35" cy="58" rx="7" ry="18" fill="currentColor" />
                  <ellipse cx="65" cy="58" rx="7" ry="18" fill="currentColor" />
                </svg>
              </div>
              <span className="text-muted-foreground relative z-10">Your progress photo</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weight</span>
                <span className="font-medium">178 lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Body Fat</span>
                <span className="font-medium">18.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Muscle Mass</span>
                <span className="font-medium">142 lbs</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Target Physique</h3>
              <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">Goal</span>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-b from-accent/10 to-background rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <ellipse cx="50" cy="30" rx="17" ry="22" fill="hsl(var(--accent))" />
                  <rect x="40" y="52" width="20" height="35" rx="3" fill="hsl(var(--accent))" />
                  <ellipse cx="32" cy="60" rx="8" ry="20" fill="hsl(var(--accent))" />
                  <ellipse cx="68" cy="60" rx="8" ry="20" fill="hsl(var(--accent))" />
                </svg>
              </div>
              <span className="text-muted-foreground relative z-10">Your goal physique</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weight</span>
                <span className="font-medium">170 lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Body Fat</span>
                <span className="font-medium">12%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Muscle Mass</span>
                <span className="font-medium">150 lbs</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Interactive Slider */}
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <ArrowLeftRight className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Side-by-Side Comparison</h3>
          </div>
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Current</span>
              <span>Target</span>
            </div>
            <Slider 
              value={[comparisonValue]} 
              onValueChange={(value) => setComparisonValue(value[0])}
              max={100}
              step={1}
              className="mb-2"
            />
            <p className="text-center text-xs text-muted-foreground">
              Slide to compare your transformation progress
            </p>
          </div>
        </Card>

        {/* Measurements Table */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Body Measurements</h3>
          <div className="space-y-3">
            <MeasurementRow label="Chest" current="42 in" target="44 in" progress={85} />
            <MeasurementRow label="Waist" current="34 in" target="32 in" progress={60} />
            <MeasurementRow label="Arms" current="15 in" target="16 in" progress={75} />
            <MeasurementRow label="Thighs" current="23 in" target="24 in" progress={70} />
          </div>
        </Card>
      </div>
    </div>
  );
};

const MeasurementRow = ({ label, current, target, progress }: { 
  label: string; 
  current: string; 
  target: string; 
  progress: number;
}) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-muted-foreground">{current}</span>
        <span>→</span>
        <span className="text-accent font-medium">{target}</span>
      </div>
    </div>
    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-primary transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default Visualizer;
