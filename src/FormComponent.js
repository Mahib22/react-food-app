import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const FormComponent = ({nama_makanan, harga, handleSubmit, handleChange, id}) => {
  return (
    <div className="mt-3 mb-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Makanan" : "Tambah Makanan"}</h4>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama_makanan"
                value={nama_makanan}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Tambah
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormComponent;
