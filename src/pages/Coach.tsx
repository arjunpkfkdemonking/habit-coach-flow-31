import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flame, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Coach = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'coach' as const,
      content: "Hey Alex! 👋 I've been tracking your progress, and you're doing amazing with that 7-day streak! How are you feeling today?",
      time: "10:30 AM"
    },
    {
      id: 2,
      type: 'user' as const,
      content: "Feeling good! Though I'm a bit tired from yesterday's workout.",
      time: "10:32 AM"
    },
    {
      id: 3,
      type: 'coach' as const,
      content: "That's completely normal after a solid session! Your body is adapting and getting stronger. Since you're feeling fatigued, how about we focus on active recovery today? A light walk or some stretching could help.",
      time: "10:33 AM"
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, {
      id: messages.length + 1,
      type: 'user',
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
              <Link to="/visualizer" className="text-muted-foreground hover:text-foreground transition-colors">Visualizer</Link>
              <Link to="/coach" className="text-foreground font-medium">Coach</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl flex flex-col">
        {/* Coach Header Card */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">Your AI Fitness Coach</h2>
              <p className="text-sm text-muted-foreground">
                Here to motivate, guide, and help you reach your goals
              </p>
            </div>
          </div>
        </Card>

        {/* Suggested Actions */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">Quick actions:</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">💪 Need motivation</Button>
            <Button variant="outline" size="sm">📊 Review my progress</Button>
            <Button variant="outline" size="sm">🎯 Adjust my goals</Button>
            <Button variant="outline" size="sm">💡 Suggest new habits</Button>
          </div>
        </div>

        {/* Messages */}
        <Card className="flex-1 flex flex-col mb-4">
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl p-4 ${
                      msg.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 px-2">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask your coach anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1"
              />
              <Button 
                variant="hero" 
                size="icon"
                onClick={handleSend}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Insights Card */}
        <Card className="p-4 bg-accent/10 border-accent/20">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">Coach Insight</h4>
              <p className="text-xs text-muted-foreground">
                I've noticed you're most consistent with morning workouts. Want to optimize your evening routine to support better recovery?
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Coach;
