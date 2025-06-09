
import { Shield, Check } from "lucide-react";

const SecurityIndicator = () => {
  const securityLevel = 95; // Out of 100

  return (
    <div className="bank-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-bank-text-primary">Security Status</h3>
        <Shield className="w-5 h-5 text-bank-secondary" strokeWidth={1.5} />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-bank-text-secondary">Security Score</span>
          <span className="bank-amount text-lg font-semibold text-bank-secondary">{securityLevel}%</span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-bank-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${securityLevel}%` }}
          ></div>
        </div>
        
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-bank-secondary rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
            <span className="text-sm text-bank-text-secondary">Two-factor authentication enabled</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-bank-secondary rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
            <span className="text-sm text-bank-text-secondary">Secure connection active</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-bank-secondary rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
            <span className="text-sm text-bank-text-secondary">Latest security updates applied</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityIndicator;
