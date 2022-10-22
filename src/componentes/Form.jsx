import { useState } from "react";
import {Button, Col, Container, Row} from "react-bootstrap" 

function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) =>{
      e.preventeDefault();
      setNombre(''); setEmail('');
      alert(`El nombre es ${nombre}, Email ${email}`);
  }

  return (
    <>
    <Container fluid>
      <Row>
        <Col md="6" xl="12" sm="12">
        <main>
                <form className="text-center" onSubmit={handleChange}>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="fw-bolder my-3">Ingrese su Nombre</label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Nombre"
                    value={nombre}
                    name={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="fw-bolder my-3">Ingrese su Email</label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ejemplo@...."
                    value={email}
                    name={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="fw-bolder my-3">Tarea 1</label>
                    <input 
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Trabajo de Naturaleza"
                    
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="fw-bolder my-3">Tarea 2</label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Trabajo de Ciencias Sociales"
                    />
                </div>
                <Button type="submit" className="btn btn-primary my-3">
                    Enviar
                </Button>
                </form>
         
      </main>
        </Col>  
      </Row>
    </Container>
    </>
  );
}



export default Form;
