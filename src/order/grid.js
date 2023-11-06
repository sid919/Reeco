import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "../App.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function GridComp() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 350, maxwidth: 1200 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
}
