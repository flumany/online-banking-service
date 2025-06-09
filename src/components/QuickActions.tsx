
import { ArrowUp, ArrowDown, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  const actions = [
    {
      icon: ArrowUp,
      label: "Transfer",
      description: "Send money",
      color: "bg-bank-primary hover:bg-bank-primary/90",
      textColor: "text-white"
    },
    {
      icon: ArrowDown,
      label: "Request",
      description: "Request payment",
      color: "bg-bank-secondary hover:bg-bank-secondary/90",
      textColor: "text-white"
    },
    {
      icon: Bell,
      label: "Pay Bills",
      description: "Utilities & more",
      color: "bg-bank-surface hover:bg-muted border border-border",
      textColor: "text-bank-text-primary"
    },
    {
      icon: Shield,
      label: "Invest",
      description: "Grow your money",
      color: "bg-bank-surface hover:bg-muted border border-border",
      textColor: "text-bank-text-primary"
    }
  ];

  return (
    <div className="bank-card p-6">
      <h3 className="font-semibold text-bank-text-primary mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="ghost"
            className={`${action.color} ${action.textColor} h-auto p-4 flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105`}
          >
            <action.icon className="w-6 h-6" strokeWidth={1.5} />
            <div className="text-center">
              <p className="font-medium text-sm">{action.label}</p>
              <p className="text-xs opacity-70">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
