import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Flame, TrendingUp, Calendar, MessageSquare, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [streak, setStreak] = useState(7);
  const [xp, setXp] = useState(850);
  const xpToNextLevel = 1000;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">FitForge</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-foreground font-medium">Dashboard</Link>
              <Link to="/habits" className="text-muted-foreground hover:text-foreground transition-colors">Habits</Link>
              <Link to="/journey" className="text-muted-foreground hover:text-foreground transition-colors">Journey</Link>
              <Link to="/visualizer" className="text-muted-foreground hover:text-foreground transition-colors">Visualizer</Link>
              <Link to="/coach" className="text-muted-foreground hover:text-foreground transition-colors">Coach</Link>
            </nav>
            <Button variant="ghost" size="icon">
              <div className="w-8 h-8 bg-primary/20 rounded-full" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 💪</h1>
          <p className="text-muted-foreground">You're crushing it today. Keep the momentum going!</p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-primary border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Flame className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground/80">Current Streak</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary-foreground">{streak}</span>
                <span className="text-xl text-primary-foreground/80">days</span>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-2">Longest streak: 12 days</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Experience Points</span>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-4xl font-bold">{xp}</span>
              <span className="text-xl text-muted-foreground">/ {xpToNextLevel} XP</span>
            </div>
            <Progress value={(xp / xpToNextLevel) * 100} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">Level 8 • {xpToNextLevel - xp} XP to level 9</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">This Week</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Habits completed</span>
                <span className="font-semibold">18/21</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Completion rate</span>
                <span className="font-semibold text-primary">86%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">XP earned</span>
                <span className="font-semibold text-accent">+240</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Coach Message */}
        <Card className="p-6 mb-8 border-primary/20 bg-gradient-to-r from-card to-primary/5">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Your AI Coach</h3>
              <p className="text-muted-foreground mb-3">
                Great work maintaining your 7-day streak! I noticed you're consistent with workouts but 
                could improve hydration. Want to add a water tracking habit?
              </p>
              <Link to="/coach">
                <Button variant="outline" size="sm">
                  Chat with Coach
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Today's Habits</h3>
              <Link to="/habits">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
            <div className="space-y-3">
              <HabitItem title="Morning workout" completed={true} xp={50} />
              <HabitItem title="8 glasses of water" completed={false} xp={30} />
              <HabitItem title="Meal prep" completed={true} xp={40} />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Quick Stats</h3>
              <Link to="/journey">
                <Button variant="ghost" size="sm">View Journey</Button>
              </Link>
            </div>
            <div className="space-y-4">
              <StatRow label="Weight" value="178 lbs" change="-2.5 lbs" positive />
              <StatRow label="Body Fat" value="18.5%" change="-1.2%" positive />
              <StatRow label="Muscle Mass" value="142 lbs" change="+3.1 lbs" positive />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const HabitItem = ({ title, completed, xp }: { title: string; completed: boolean; xp: number }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
      completed ? 'bg-primary border-primary' : 'border-muted-foreground'
    }`}>
      {completed && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
    </div>
    <span className={`flex-1 ${completed ? 'line-through text-muted-foreground' : ''}`}>{title}</span>
    <span className="text-xs text-accent font-medium">+{xp} XP</span>
  </div>
);

const StatRow = ({ label, value, change, positive }: { label: string; value: string; change: string; positive: boolean }) => (
  <div className="flex items-center justify-between">
    <span className="text-muted-foreground">{label}</span>
    <div className="text-right">
      <div className="font-semibold">{value}</div>
      <div className={`text-xs ${positive ? 'text-primary' : 'text-destructive'}`}>
        {change}
      </div>
    </div>
  </div>
);

export default Dashboard;
