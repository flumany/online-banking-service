
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
      amount: 3250.00,
      description: "Salary Deposit",
      category: "Income",
      date: "Today",
      time: "09:15 AM"
    },
    {
      id: "2",
      type: "expense",
      amount: 89.50,
      description: "Grocery Shopping",
      category: "Food",
      date: "Today",
      time: "11:30 AM"
    },
    {
      id: "3",
      type: "expense",
      amount: 1200.00,
      description: "Rent Payment",
      category: "Housing",
      date: "Yesterday",
      time: "02:15 PM"
    },
    {
      id: "4",
      type: "income",
      amount: 75.00,
      description: "Freelance Payment",
      category: "Income",
      date: "Yesterday",
      time: "04:45 PM"
    },
    {
      id: "5",
      type: "expense",
      amount: 45.20,
      description: "Gas Station",
      category: "Transport",
      date: "Dec 5, 2024",
      time: "08:20 AM"
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
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
    
    return type === 'income' ? `+${formatted}` : `-${formatted}`;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Income': 'bg-bank-secondary text-white',
      'Food': 'bg-orange-100 text-orange-800',
      'Housing': 'bg-blue-100 text-blue-800',
      'Transport': 'bg-purple-100 text-purple-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bank-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-bank-text-primary text-lg">Recent Transactions</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-bank-text-muted" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search transactions..."
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
