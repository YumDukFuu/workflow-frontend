interface BudgetCardProps {
    title: string;
    value: number;
  }
  function BudgetCard({ title, value }: BudgetCardProps) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-center">
          {title}: {value}
        </p>
      </div>
    );
  }
  
  function BudgetPanel() {
    const budgetData = [
      { title: "Total Budget", value: 1000 },
      { title: "Used Budget", value: 300 },
      { title: "Balance", value: 700 },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {budgetData.map((data) => (
          <BudgetCard key={data.title} title={data.title} value={data.value} />
        ))}
      </div>
    );
  }
  
  export default BudgetPanel;