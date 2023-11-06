import React from "react";
import { Container, Button } from "react-bootstrap";
import { ORDER } from "../utils.js";
import "../App.css";

export default function HeaderComp() {
  return (
    <>
      <div className="card">
        <Container>
          <div className="h-link">
            Orders {">"} <a href="">Order {ORDER.id}</a>
          </div>
          <div className="order-details">
            <div className="order-id">Order {ORDER.id}</div>
            <div className="order-actions">
              <Button variant="outline-success" size="sm">
                Back
              </Button>
              <Button
                variant="success"
                size="sm"
                style={{ marginLeft: "20px" }}
              >
                Approve Order
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
