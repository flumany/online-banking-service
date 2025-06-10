
import BankingHeader from "@/components/BankingHeader";
import AccountsOverview from "@/components/AccountsOverview";
import QuickActions from "@/components/QuickActions";
import SecurityIndicator from "@/components/SecurityIndicator";
import TransactionHistory from "@/components/TransactionHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BankingHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="animate-slide-up">
          <h1 className="text-2xl font-semibold text-bank-text-primary mb-2">
            おはようございます、田中様
          </h1>
          <p className="text-bank-text-secondary">
            本日の資産状況をご確認ください
          </p>
        </div>

        {/* Accounts Overview */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <AccountsOverview />
        </div>

        {/* Quick Actions */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <QuickActions />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transactions - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <TransactionHistory />
          </div>

          {/* Security Indicator - Takes 1 column */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <SecurityIndicator />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
