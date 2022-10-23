import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const Listas = () => {
  let tareasLs = JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLs);
  const [lista, setLista] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, lista]);
    setLista("");
  };

  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  return (
    <>
      <div>
        <br />
        <hr />
        <h2>Problema 4-5</h2>
      </div>
      <Container fluid>
        <Row className="text-center">
          <Col md="6" xl="12" sm="12">
            <Form onSubmit={agregarTarea}>
              <Form.Group
                className="mb-3 d-flex mx-5 "
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="font-weight-bolder">
                  Ingrese sus Tareas
                </Form.Label>
                <Form.Control
                  type="text"
                  className=""
                  placeholder="Escriba su Tarea"
                  value={lista}
                  onChange={(e) => setLista(e.target.value)}
                />
              </Form.Group>
              <Button className="btn btn-primary" type="submit">
                Agregar Tarea
              </Button>
            </Form>
            {listaTareas.map((item, index) => (
              <h4 key={index}>{item} </h4>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Listas;
