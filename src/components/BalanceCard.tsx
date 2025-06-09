
import { useState } from "react";
import { Eye, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BalanceCardProps {
  accountName: string;
  accountNumber: string;
  balance: number;
  currency?: string;
  isPrimary?: boolean;
}

const BalanceCard = ({ 
  accountName, 
  accountNumber, 
  balance, 
  currency = "USD",
  isPrimary = false 
}: BalanceCardProps) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const maskBalance = () => "••••••";

  return (
    <div className={`bank-card p-6 ${isPrimary ? 'bg-gradient-to-br from-bank-primary to-bank-primary/90 text-white' : 'bg-bank-surface'}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={`font-medium ${isPrimary ? 'text-white/90' : 'text-bank-text-secondary'} text-sm`}>
            {accountName}
          </h3>
          <p className={`bank-amount text-xs ${isPrimary ? 'text-white/70' : 'text-bank-text-muted'} mt-1`}>
            ••••{accountNumber.slice(-4)}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className={`h-8 w-8 p-0 ${isPrimary ? 'hover:bg-white/10 text-white' : 'hover:bg-muted'}`}
          >
            <Eye className="w-4 h-4" strokeWidth={1.5} />
          </Button>
          
          {isPrimary && (
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-bank-secondary" strokeWidth={1.5} />
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <p className={`text-xs ${isPrimary ? 'text-white/70' : 'text-bank-text-muted'}`}>
          Available Balance
        </p>
        <p className={`bank-balance ${isPrimary ? 'text-white' : 'text-bank-text-primary'} text-3xl`}>
          {isBalanceVisible ? formatBalance(balance) : maskBalance()}
        </p>
      </div>
      
      {isPrimary && (
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex justify-between text-sm">
            <span className="text-white/70">Last updated</span>
            <span className="text-white/90 bank-amount">Just now</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BalanceCard;
