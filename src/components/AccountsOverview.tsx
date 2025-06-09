
import BalanceCard from "./BalanceCard";

const AccountsOverview = () => {
  const accounts = [
    {
      accountName: "Primary Checking",
      accountNumber: "1234567890",
      balance: 12847.52,
      isPrimary: true
    },
    {
      accountName: "Savings",
      accountNumber: "0987654321",
      balance: 25690.30,
      isPrimary: false
    },
    {
      accountName: "Investment",
      accountNumber: "1122334455",
      balance: 45200.75,
      isPrimary: false
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-bank-text-primary">Your Accounts</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <BalanceCard
            key={index}
            accountName={account.accountName}
            accountNumber={account.accountNumber}
            balance={account.balance}
            isPrimary={account.isPrimary}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountsOverview;
