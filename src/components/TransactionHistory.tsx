
import { ArrowUp, ArrowDown, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
  time: string;
}

const TransactionHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions: Transaction[] = [
    {
      id: "1",
      type: "income",
      amount: 325000,
      description: "給与振込",
      category: "給与",
      date: "今日",
      time: "09:15"
    },
    {
      id: "2",
      type: "expense",
      amount: 8950,
      description: "スーパーマーケット",
      category: "食費",
      date: "今日",
      time: "11:30"
    },
    {
      id: "3",
      type: "expense",
      amount: 120000,
      description: "家賃",
      category: "住居費",
      date: "昨日",
      time: "14:15"
    },
    {
      id: "4",
      type: "income",
      amount: 7500,
      description: "フリーランス報酬",
      category: "副収入",
      date: "昨日",
      time: "16:45"
    },
    {
      id: "5",
      type: "expense",
      amount: 4520,
      description: "ガソリンスタンド",
      category: "交通費",
      date: "2024年12月5日",
      time: "08:20"
    }
  ];

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedTransactions = filteredTransactions.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {} as Record<string, Transaction[]>);

  const formatAmount = (amount: number, type: string) => {
    const formatted = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(amount);
    
    return type === 'income' ? `+${formatted}` : `-${formatted}`;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      '給与': 'bg-bank-secondary text-white',
      '副収入': 'bg-bank-secondary text-white',
      '食費': 'bg-orange-100 text-orange-800',
      '住居費': 'bg-blue-100 text-blue-800',
      '交通費': 'bg-purple-100 text-purple-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bank-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-bank-text-primary text-lg">取引履歴</h3>
        <Button variant="outline" size="sm">
          すべて表示
        </Button>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-bank-text-muted" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="取引を検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:border-bank-primary focus:ring-2 focus:ring-bank-primary/20 transition-colors"
        />
      </div>
      
      <div className="space-y-6">
        {Object.entries(groupedTransactions).map(([date, dayTransactions]) => (
          <div key={date} className="space-y-3">
            <h4 className="text-sm font-medium text-bank-text-secondary px-1">
              {date}
            </h4>
            
            <div className="space-y-1">
              {dayTransactions.map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'income' 
                        ? 'bg-bank-secondary/10' 
                        : 'bg-bank-danger/10'
                    }`}>
                      {transaction.type === 'income' ? (
                        <ArrowDown className="w-5 h-5 text-bank-secondary" strokeWidth={1.5} />
                      ) : (
                        <ArrowUp className="w-5 h-5 text-bank-danger" strokeWidth={1.5} />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-bank-text-primary">
                        {transaction.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(transaction.category)}`}>
                          {transaction.category}
                        </span>
                        <span className="text-xs text-bank-text-muted">
                          {transaction.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`bank-amount font-semibold ${
                      transaction.type === 'income' 
                        ? 'text-bank-secondary' 
                        : 'text-bank-danger'
                    }`}>
                      {formatAmount(transaction.amount, transaction.type)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
