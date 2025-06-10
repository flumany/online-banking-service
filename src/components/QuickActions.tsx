
import { ArrowUp, ArrowDown, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  const actions = [
    {
      icon: ArrowUp,
      label: "振込",
      description: "送金する",
      color: "bg-bank-primary hover:bg-bank-primary/90",
      textColor: "text-white"
    },
    {
      icon: ArrowDown,
      label: "請求",
      description: "支払い依頼",
      color: "bg-bank-secondary hover:bg-bank-secondary/90",
      textColor: "text-white"
    },
    {
      icon: Bell,
      label: "料金支払い",
      description: "公共料金など",
      color: "bg-bank-surface hover:bg-muted border border-border",
      textColor: "text-bank-text-primary"
    },
    {
      icon: Shield,
      label: "資産運用",
      description: "投資・積立",
      color: "bg-bank-surface hover:bg-muted border border-border",
      textColor: "text-bank-text-primary"
    }
  ];

  return (
    <div className="bank-card p-6">
      <h3 className="font-semibold text-bank-text-primary mb-4">クイックアクション</h3>
      
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
