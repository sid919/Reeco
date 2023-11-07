import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "../App.css";
import { ORDER } from "../utils";
import { Button, Modal } from "react-bootstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function GridComp() {
  // const info = useSelector((state) => state.info);
  const [rowData, setRowData] = useState(ORDER.list);
  const [cancelRow, setCancelRow] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClickConfirm = (params) => {
    console.log("onClickConfirm", params);
    const data = [...rowData];
    let data_index = data.findIndex((item) => item.id == params.data.id);
    data[data_index].status = 1;
    setRowData(data);
  };

  const onClickCancel = (params) => {
    console.log("onClickCancel", params);
    setCancelRow(params.data);
    handleShow();
  };

  const onClickModal = (val) => {
    const data = [...rowData];
    let data_index = data.findIndex((item) => item.id == cancelRow.id);
    data[data_index].status = val;
    setRowData(data);
    setCancelRow("");
    handleClose();
  };

  const productColumns = [
    {
      headerName: "#",
      field: "",
      width: 100,
      cellStyle: { display: "flex" },
      cellRenderer: (params) => (
        <div>
          <img src={window.location.origin + "/avocado.jpg"} alt="image" />
        </div>
      ),
    },
    { headerName: "Product Name", field: "name", width: 200 },
    { headerName: "Brand", field: "brand", width: 200 },
    { headerName: "Price", field: "price", width: 100 },
    { headerName: "Quantity", field: "quantity", width: 100 },
    { headerName: "Total", field: "total", width: 100 },
    {
      headerName: "Status",
      field: "",
      width: 200,
      cellRenderer: (params) => (
        <div>
          {params.data.status == 1 ? (
            <Button variant="success" size="sm">
              Approved
            </Button>
          ) : params.data.status == 2 ? (
            <Button variant="warning" size="sm">
              Missing
            </Button>
          ) : params.data.status == 3 ? (
            <Button variant="danger" size="sm">
              Missing - Urgent
            </Button>
          ) : (
            ""
          )}
        </div>
      ),
    },
    {
      headerName: "Actions",
      field: "",
      width: 200,
      cellStyle: { display: "flex" },
      cellRenderer: (params) => (
        <div>
          {params.data.status ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              class="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          ) : (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => onClickConfirm(params)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="green"
                class="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </span>
          )}
          {params.data.status ? (
            <span style={{ marginLeft: "10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          ) : (
            <span
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => onClickCancel(params)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="red"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          )}
          <span
            style={{ marginLeft: "10px", fontSize: "16px", cursor: "pointer" }}
          >
            Edit
          </span>
        </div>
      ),
    },
  ];
  const [columnDefs, setColumnDefs] = useState(productColumns);

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
    };
  }, []);

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 350, maxwidth: 1200 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        ></AgGridReact>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Missing Product</Modal.Header>
          <Modal.Body>is {cancelRow.name}... urgent?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-success"
              size="sm"
              onClick={() => onClickModal(2)}
            >
              No
            </Button>
            <Button
              variant="outline-success"
              size="sm"
              onClick={() => onClickModal(3)}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
