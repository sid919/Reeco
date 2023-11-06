import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { ORDER } from "../utils";
import "../App.css";

export default function CardComp() {
  return (
    <>
      <div className="order-card">
        <Container>
          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col className="order-card-col">
                    <Card.Subtitle className="mb-2 text-muted">
                      Supplier
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>{ORDER.supplier}</strong>
                    </Card.Text>
                  </Col>
                  <Col className="order-card-col">
                    <Card.Subtitle className="mb-2 text-muted">
                      Shipment Date
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>{ORDER.shipping_date}</strong>
                    </Card.Text>
                  </Col>
                  <Col className="order-card-col">
                    <Card.Subtitle className="mb-2 text-muted">
                      Total
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>{ORDER.currency + "  " + ORDER.total}</strong>
                    </Card.Text>
                  </Col>
                  <Col className="order-card-col">
                    <Card.Subtitle className="mb-2 text-muted">
                      Category
                    </Card.Subtitle>
                    {ORDER.category?.map((item) => {
                      if (item == "F") {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-basket"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                          </svg>
                        );
                      } else {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-cake2-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="m2.899.804.595-.792.598.79A.747.747 0 0 1 4 1.806v4.886c-.354-.06-.689-.127-1-.201V1.813a.747.747 0 0 1-.1-1.01ZM13 1.806v4.685a15.19 15.19 0 0 1-1 .201v-4.88a.747.747 0 0 1-.1-1.007l.595-.792.598.79A.746.746 0 0 1 13 1.806Zm-3 0a.746.746 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v5.17c.341-.013.675-.031 1-.055V1.806Zm-3 0v5.176c-.341-.012-.675-.03-1-.054V1.813a.747.747 0 0 1-.1-1.01l.595-.79.598.789A.747.747 0 0 1 7 1.806Z" />
                            <path d="M4.5 6.988V4.226a22.6 22.6 0 0 1 1-.114V7.16c0 .131.101.24.232.25l.231.017c.332.024.672.043 1.02.055l.258.01a.25.25 0 0 0 .26-.25V4.003a29.015 29.015 0 0 1 1 0V7.24a.25.25 0 0 0 .258.25l.259-.009c.347-.012.687-.03 1.019-.055l.231-.017a.25.25 0 0 0 .232-.25V4.112c.345.031.679.07 1 .114v2.762a.25.25 0 0 0 .292.246l.291-.049c.364-.061.71-.13 1.033-.208l.192-.046a.25.25 0 0 0 .192-.243V4.621c.672.184 1.251.409 1.677.678.415.261.823.655.823 1.2V13.5c0 .546-.408.94-.823 1.201-.44.278-1.043.51-1.745.696-1.41.376-3.33.603-5.432.603-2.102 0-4.022-.227-5.432-.603-.702-.187-1.305-.418-1.745-.696C.408 14.44 0 14.046 0 13.5v-7c0-.546.408-.94.823-1.201.426-.269 1.005-.494 1.677-.678v2.067c0 .116.08.216.192.243l.192.046c.323.077.669.147 1.033.208l.292.05a.25.25 0 0 0 .291-.247ZM1 8.82v1.659a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.938.938 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426V8.833l-.68.907a.938.938 0 0 1-1.17.276 1.938 1.938 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82Z" />
                          </svg>
                        );
                      }
                    })}
                  </Col>
                  <Col className="order-card-col">
                    <Card.Subtitle className="mb-2 text-muted">
                      Department
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>{ORDER.department}</strong>
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Subtitle className="mb-2 text-muted">
                      Status
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>{ORDER.status}</strong>
                    </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}
