
import BalanceCard from "./BalanceCard";

const AccountsOverview = () => {
  const accounts = [
    {
      accountName: "普通預金",
      accountNumber: "1234567890",
      balance: 1284752,
      isPrimary: true
    },
    {
      accountName: "定期預金",
      accountNumber: "0987654321",
      balance: 2569030,
      isPrimary: false
    },
    {
      accountName: "投資信託",
      accountNumber: "1122334455",
      balance: 4520075,
      isPrimary: false
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-bank-text-primary">口座一覧</h2>
      
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
