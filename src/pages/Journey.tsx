import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Journey = () => {
  const weightData = [
    { date: 'Week 1', value: 185 },
    { date: 'Week 2', value: 183 },
    { date: 'Week 3', value: 181 },
    { date: 'Week 4', value: 180 },
    { date: 'Week 5', value: 178 },
    { date: 'Week 6', value: 178 },
  ];

  const bodyFatData = [
    { date: 'Week 1', value: 22.5 },
    { date: 'Week 2', value: 21.8 },
    { date: 'Week 3', value: 21.0 },
    { date: 'Week 4', value: 20.2 },
    { date: 'Week 5', value: 19.5 },
    { date: 'Week 6', value: 18.5 },
  ];

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
              <Link to="/journey" className="text-foreground font-medium">Journey</Link>
              <Link to="/visualizer" className="text-muted-foreground hover:text-foreground transition-colors">Visualizer</Link>
              <Link to="/coach" className="text-muted-foreground hover:text-foreground transition-colors">Coach</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Journey</h1>
          <p className="text-muted-foreground">Track your transformation over time</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm text-muted-foreground">Weight</span>
              <TrendingDown className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold">178</span>
              <span className="text-muted-foreground">lbs</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-primary">
              <TrendingDown className="w-3 h-3" />
              <span>-7 lbs (3.8%)</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Since week 1</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm text-muted-foreground">Body Fat</span>
              <TrendingDown className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold">18.5</span>
              <span className="text-muted-foreground">%</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-primary">
              <TrendingDown className="w-3 h-3" />
              <span>-4.0% (17.8%)</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Since week 1</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm text-muted-foreground">Muscle Mass</span>
              <TrendingUp className="w-4 h-4 text-accent" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold">142</span>
              <span className="text-muted-foreground">lbs</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="w-3 h-3" />
              <span>+3.1 lbs (2.2%)</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Since week 1</p>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="weight" className="mb-8">
          <TabsList>
            <TabsTrigger value="weight">Weight</TabsTrigger>
            <TabsTrigger value="bodyfat">Body Fat</TabsTrigger>
            <TabsTrigger value="streak">Streak</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weight" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-6">Weight Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                    domain={[175, 186]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="bodyfat" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-6">Body Fat Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bodyFatData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                    domain={[17, 23]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--accent))', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="streak" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Habit Streak History</h3>
              <div className="space-y-4">
                <StreakBar label="Morning workout" streak={7} maxStreak={12} />
                <StreakBar label="Water intake" streak={5} maxStreak={8} />
                <StreakBar label="Meal prep" streak={3} maxStreak={5} />
                <StreakBar label="10k steps" streak={12} maxStreak={15} />
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Photo Timeline */}
        <Card className="p-6">
          <h3 className="font-semibold mb-6">Photo Timeline</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium">Week {i}</p>
                  <p className="text-xs text-muted-foreground">{185 - i * 2} lbs</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const StreakBar = ({ label, streak, maxStreak }: { label: string; streak: number; maxStreak: number }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{streak} days</span>
        <Flame className="w-4 h-4 text-accent" />
      </div>
    </div>
    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-accent transition-all duration-500"
        style={{ width: `${(streak / maxStreak) * 100}%` }}
      />
    </div>
  </div>
);

export default Journey;
