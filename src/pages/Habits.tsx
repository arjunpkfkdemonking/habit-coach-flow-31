import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Habits = () => {
  const [habits, setHabits] = useState([
    { id: 1, title: "Morning workout", completed: true, streak: 7, xp: 50, category: "Fitness" },
    { id: 2, title: "8 glasses of water", completed: false, streak: 5, xp: 30, category: "Nutrition" },
    { id: 3, title: "Meal prep", completed: true, streak: 3, xp: 40, category: "Nutrition" },
    { id: 4, title: "10k steps", completed: false, streak: 12, xp: 35, category: "Activity" },
    { id: 5, title: "Evening stretch", completed: false, streak: 4, xp: 25, category: "Recovery" },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const completedToday = habits.filter(h => h.completed).length;
  const totalHabits = habits.length;

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
              <Link to="/habits" className="text-foreground font-medium">Habits</Link>
              <Link to="/journey" className="text-muted-foreground hover:text-foreground transition-colors">Journey</Link>
              <Link to="/visualizer" className="text-muted-foreground hover:text-foreground transition-colors">Visualizer</Link>
              <Link to="/coach" className="text-muted-foreground hover:text-foreground transition-colors">Coach</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Daily Habits</h1>
            <p className="text-muted-foreground">
              {completedToday} of {totalHabits} completed today
            </p>
          </div>
          <Button variant="hero">
            <Plus className="w-4 h-4" />
            Add Habit
          </Button>
        </div>

        {/* Progress Card */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Today's Progress</h3>
              <p className="text-sm text-muted-foreground">Keep it up! You're {Math.round((completedToday / totalHabits) * 100)}% there</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient-primary">{completedToday}/{totalHabits}</div>
            </div>
          </div>
          <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${(completedToday / totalHabits) * 100}%` }}
            />
          </div>
        </Card>

        {/* Habits List */}
        <div className="space-y-3">
          {habits.map((habit) => (
            <Card 
              key={habit.id}
              className="p-4 hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => toggleHabit(habit.id)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  habit.completed 
                    ? 'bg-primary border-primary' 
                    : 'border-muted-foreground hover:border-primary'
                }`}>
                  {habit.completed && (
                    <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`font-semibold ${habit.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {habit.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                      {habit.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-accent" />
                      {habit.streak} day streak
                    </span>
                    <span className="text-accent font-medium">+{habit.xp} XP</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Completion Calendar Preview */}
        <Card className="p-6 mt-8">
          <h3 className="font-semibold text-lg mb-4">This Week</h3>
          <div className="grid grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="text-center">
                <div className="text-xs text-muted-foreground mb-2">{day}</div>
                <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-medium ${
                  i < 5 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'bg-secondary text-muted-foreground'
                }`}>
                  {i < 5 ? '✓' : '—'}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Habits;
