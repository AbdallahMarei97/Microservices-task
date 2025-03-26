"use client";

import { Suspense, useEffect, useState } from "react";

interface TableData {
  [key: string]: string | number | boolean;
}

export default function DataTable() {
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    // Fetch data from localStorage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData([...parsedData]); // Wrap in an array for table rows
    }
  }, []);

  return (
    <div className="container mx-auto">
      <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
        {data.length === 0 ? (
          <div className="flex justify-center">
            <p className="text-gray-500">No data available</p>
          </div>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                {Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="odd:bg-white even:bg-gray-100">
                  {Object.values(row).map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-300 px-4 py-2 text-gray-600"
                    >
                      {value.toString()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Suspense>
    </div>
  );
}
