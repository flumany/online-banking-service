import { Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const BankingHeader = () => {
  return (
    <header className="bg-bank-surface border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-xl font-semibold text-bank-text-primary">うるみ銀行</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-bank-text-primary hover:text-bank-primary transition-colors">ホーム</a>
            <a href="#" className="text-bank-text-secondary hover:text-bank-primary transition-colors">振込</a>
            <a href="#" className="text-bank-text-secondary hover:text-bank-primary transition-colors">支払い</a>
            <a href="#" className="text-bank-text-secondary hover:text-bank-primary transition-colors">カード</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="security-indicator">
            <Shield className="w-4 h-4 text-bank-secondary animate-security-pulse" strokeWidth={1.5} />
            <span className="text-sm">安全な接続</span>
          </div>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-bank-danger rounded-full"></span>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-bank-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">田</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-bank-text-primary">田中 太郎</p>
              <p className="text-xs text-bank-text-secondary">プレミアム口座</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BankingHeader;
