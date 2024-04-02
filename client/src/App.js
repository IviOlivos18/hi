// App.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Alert,Form } from "react-bootstrap";
import image from "./images/logo.png";

function App() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [variant, setVariant] = useState('');
  const [showMessage, setShowMessage] = useState('');

  const [file, setFile] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectionHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      console.error('No se seleccionó ningún archivo');
    }
  };


  const sendHandler = () => {
    if (!document.getElementById('nombre').value || !document.getElementById('nombre_cientifico').value || !document.getElementById('show').files[0] || !document.getElementById('tipo_planta').value) {
      setShowMessage("Llena todos los campos");
      setShowAlert(true);
      setVariant('danger');
      return false;
    } else {
      const formData = new FormData();
      formData.append("name", document.getElementById("nombre").value);
      formData.append("name_cientific", document.getElementById("nombre_cientifico").value);
      formData.append("type_plant", document.getElementById("tipo_planta").value);
      formData.append("ph", document.getElementById("ph").value);
      formData.append("show", document.getElementById("show").files[0]); // Obtener el archivo seleccionado
  
      enviarDatos(formData);
      return true;
    }
  }
  
  const enviarDatos = async (formData) => {
    fetch("http://localhost:9000/submit", {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setShowMessage("Formulario Enviado");
      setVariant('success');
      setShowAlert(true);
    })
    .catch(err => console.log(err));
    
    document.getElementById("nombre").value = "";
    document.getElementById("nombre_cientifico").value = "";
    document.getElementById("tipo_planta").value = "";
    document.getElementById("ph").value = "";
    document.getElementById("show").value = null;
  };
  
  
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <img
            src={image}
            alt="Hidro Crep"
            className="logo"
            width="80"
            height="80"
          />
          <div className="subir">
            <Button variant="primary" onClick={handleShow}>
              <FontAwesomeIcon icon={faDownload} /> <br />
              Subir
            </Button>
          </div>
        </div>
      </nav>
      <form action="" method="post" encType="multipart/form-data">
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Formulario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {showAlert && (
        <Alert variant={variant} onClose={() => setShowAlert(false)} dismissible>
          {showMessage}
        </Alert>
      )}
          Nombre De Planta:
          <br/>
          <Form.Control onChange={selectionHandler} id='nombre' type="text"/>
            Nombre Científico:
            <br/>
          <Form.Control id='nombre_cientifico' type="text"/>
          <div style={{paddingTop:'10px',paddingBottom:'10px'}} className="control-image">
            Imagen de planta:
            <input id='show'
              className="form-control"
              type="file"
            ></input>
          </div>
            Ph:
            <Form.Control id='ph' type="text"/>
          Tipo de planta:
          <br/>
          <Form.Control id='tipo_planta' type="text"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={sendHandler}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
    </div>
  );
}

export default App;
