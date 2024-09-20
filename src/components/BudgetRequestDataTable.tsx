import { formatDecimal } from "@/lib/format-decimal";
import { BudgetRequest } from "@/models/budget-request";
import { Pencil } from "lucide-react";
// import { Pencil } from "@/edit/[1]";

interface BudgetRequestDataTableProps {
  items: BudgetRequest[];
}

function BudgetRequestDataTable({ items }: BudgetRequestDataTableProps) {

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {items.map((request) => (
          <tr key={request.id}>
            <td className="px-6 py-4 whitespace-nowrap">

              {/* <button className="text-gray-600 hover:text-blue-600">  */}
              <button onClick={(e) => {e.preventDefault();
                // window.location.href="/edit/1";
                window.open ("/edit/1", "newWindow", "width=500,height=500");
                }} className="text-gray-600 hover:text-blue-600" >
              {/* <button onClick={window.open("/edit/1")} className="text-gray-600 hover:text-blue-600" > */}
                <Pencil className="h-4 w-4"/>
              </button>               

            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              {request.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="font-bold">{request.title}</span> x{" "}
              {request.quantity} Units
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              {formatDecimal(request.amount)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              {request.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BudgetRequestDataTable;
