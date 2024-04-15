import React, { useState, useEffect } from "react";
import { Modal, Button, Alert, Form, Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import '../css/Catalogo.css'

const Catalogo = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [variant, setVariant] = useState("");
  const [showMessage, setShowMessage] = useState("");

  const [setFile] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetch("http:/localhost:9000/submot")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })
      .then((text) => {
        if (text) {
          return JSON.parse(text);
        } else {
          return [];
        }
      })
      .then((data) => setImageList(data))
      .catch((err) => console.error(err));
  }, []);

  const selectionHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      console.error("No se seleccionó ningún archivo");
    }
  };

  const sendHandler = () => {
    if (
      !document.getElementById("nombre").value ||
      !document.getElementById("nombre_cientifico").value ||
      !document.getElementById("show").files[0] ||
      !document.getElementById("tipo_planta").value
    ) {
      setShowMessage("Llena todos los campos");
      setShowAlert(true);
      setVariant("danger");
      return false;
    } else {
      const formData = new FormData();
      formData.append("name", document.getElementById("nombre").value);
      formData.append(
        "name_cientific",
        document.getElementById("nombre_cientifico").value
      );
      formData.append(
        "type_plant",
        document.getElementById("tipo_planta").value
      );
      formData.append("ph", document.getElementById("ph").value);
      formData.append("show", document.getElementById("show").files[0]);

      enviarDatos(formData);
      return true;
    }
  };

  const enviarDatos = async (formData) => {
    fetch("http://localhost:9000/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setShowMessage("Formulario Enviado");
        setVariant("success");
        setShowAlert(true);
      })
      .catch((err) => console.log(err));

    document.getElementById("nombre").value = "";
    document.getElementById("nombre_cientifico").value = "";
    document.getElementById("tipo_planta").value = "";
    document.getElementById("ph").value = "";
    document.getElementById("show").value = null;
  };
  return (
    <div className="collage">
      <div className="frame">
      <Button variant="primary" onClick={handleShow}>
              <FontAwesomeIcon icon={faDownload} /> <br/>
              Subir
      </Button>
      <form action="" method="post" encType="multipart/form-data">
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Formulario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showAlert && (
              <Alert
                variant={variant}
                onClose={() => setShowAlert(false)}
                dismissible
              >
                {showMessage}
              </Alert>
            )}
            Nombre De Planta:
            <br />
            <Form.Control  onChange={selectionHandler} id="nombre" type="text" />
            Nombre Científico:
            <br />
            <Form.Control id="nombre_cientifico" type="text" />
            <div
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
              className="control-image"
            >
              Imagen de planta:
              <input id="show" className="form-control" type="file"></input>
            </div>
            Ph:
            <Form.Control id="ph" type="text" />
            Tipo de planta:
            <br />
            <Form.Control id="tipo_planta" type="text" />
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
      <div className="container-image" style={{ paddingTop: 10 }}>
        {imageList.map((image) => (
          <Card key={image.name} style={{marginLeft: "10px" }}>
            <Card.Img
              variant="top"
              src={image.imagePath}
              className="card-image-top"
            />
            <Card.Body>
              <Card.Title>{image.name}</Card.Title>
              <Card.Text>Nombre Científico: {image.name_cientific}</Card.Text>
              <Card.Text>PH: {image.ph}</Card.Text>
              <Card.Text>Tipo de planta: {image.type_plant}</Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Catalogo