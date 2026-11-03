# Hidro Crop 🌱

> Prototipo web de agricultura inteligente con visualización de sensores y pruebas de comunicación con ESP32.

## ¿Qué es Hidro Crop?

**Hidro Crop** es un proyecto de exploración tecnológica orientado a la agricultura inteligente. El sitio presenta el concepto **«Cultivando el Futuro»** e incorpora una interfaz para mostrar indicadores ambientales y de agua, junto con componentes de conexión a dispositivos.

La aplicación también contiene contenido informativo sobre la espuma floral **OASIS** y sus implicaciones ambientales.

## ¿Qué incluye?

- **Interfaz web:** portada, navegación y pantallas de catálogo y Arduino.
- **Panel sensorial:** widgets de temperatura, nivel de agua y humedad.
- **Backend de prueba:** servidor Express que recibe solicitudes HTTP.
- **Experimento con ESP32:** script Node.js que consulta un dispositivo a través de su dirección IP en la red local.

### Estado del prototipo

La pantalla de Arduino usa actualmente algunos valores **fijos o simulados** (por ejemplo, 40, 50 y 75). El script de ESP32 realiza una solicitud HTTP puntual y no demuestra por sí solo una integración en tiempo real con el panel. Se trata de una base experimental que puede extenderse para conectar lecturas reales.

## Tecnologías

- React 18 y React Router
- Bootstrap y React Bootstrap
- Font Awesome
- Node.js y Express
- Axios
- Johnny-Five y SerialPort, incluidos en el entorno de Arduino

## Estructura

```text
hi/
├── client/
│   ├── src/
│   │   ├── pages/          # Inicio, Catálogo y Arduino
│   │   ├── components/     # Navegación y widgets sensoriales
│   │   └── css/            # Estilos
│   └── package.json
├── server/
│   ├── server.js           # API de prueba, puerto 9000
│   ├── routes/
│   └── package.json
└── Arduino/
    ├── index.js            # Consulta HTTP a ESP32
    └── package.json
```

## Ejecutar el frontend

Necesitas Node.js y npm.

```bash
git clone https://github.com/IviOlivos18/hi.git
cd hi/client
npm install
npm start
```

Abre **http://localhost:3000**.

## Ejecutar el servidor

En otra terminal:

```bash
cd hi/server
npm install
npm start
```

El servidor de prueba escucha en **http://localhost:9000**. Tiene un endpoint `GET /` con un mensaje de bienvenida y un `POST /` para recibir datos JSON.

## Ejecutar la prueba de ESP32

```bash
cd hi/Arduino
npm install
npm start
```

Antes de ejecutarla, configura `esp32IP` en `Arduino/index.js` con la dirección real de tu dispositivo. La PC y el ESP32 deben tener conectividad en la red correspondiente, y el dispositivo debe exponer un servicio HTTP compatible.

## Posibles siguientes pasos

- Integrar lecturas reales de sensores con la pantalla.
- Documentar el hardware empleado y el protocolo de comunicación.
- Reemplazar las cifras de demostración por lecturas verificadas.
- Añadir almacenamiento o gráficas históricas de los datos.

---

**Autor:** [Ivi Olivos](https://github.com/IviOlivos18)
