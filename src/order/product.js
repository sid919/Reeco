import React from "react";
import { Card, Container, InputGroup, Form, Button } from "react-bootstrap";
import GridComp from "./grid";
import "../App.css";

export default function ProductComp() {
  return (
    <>
      <div className="order-card">
        <Container>
          <Card>
            <Card.Body>
              <Container>
                <div className="product-div">
                  <div style={{ float: "left", width: "40%" }}>
                    <InputGroup>
                      <Form.Control
                        placeholder="Search"
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Text id="basic-addon1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                  <div style={{ float: "right" }}>
                    <Button variant="outline-success">Add item</Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="darkgreen"
                      class="bi bi-printer"
                      viewBox="0 0 16 16"
                      style={{ marginLeft: "20px" }}
                    >
                      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                    </svg>
                  </div>
                </div>
                <br style={{ clear: "both" }} />
                <div className="product-table">
                  <GridComp />
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}
