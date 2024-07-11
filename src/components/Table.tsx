import React from "react";

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto mt-5 w-[95%]">
      <table className="min-w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-white-100 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-200 dark:border-white text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wide font-bold">
              Serial Number
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 dark:border-white text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wide font-bold">
              Activity Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 dark:border-white text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wide font-bold">
              Activity Duration
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 dark:border-white text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wide font-bold">
              Actions
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 dark:border-white text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wide font-bold">
              Status
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 dark:border-white text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wide font-bold">
              Edit
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 dark:border-white text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wide font-bold">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600  text-sm divide-y divide-gray-200">
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
