const express = require('express');
const axios = require('axios');

const app = express();
const port = 6000; // Puedes cambiar el puerto si es necesario

const esp32IP = '192.168.137.37'; // Reemplaza esto con la dirección IP de tu ESP32

app.use(express.static('public')); // Servir archivos estáticos en la carpeta 'public'

app.get('/status', async (req, res) => {
  try {
    const response = await axios.get(`http://${esp32IP}`);
    res.json({ status: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el estado del LED' });
  }
});

app.get('/toggle/:state', async (req, res) => {
  const state = req.params.state === 'on' ? true : false;

  try {
    await axios.get(`http://${esp32IP}/${state ? 'LED_ON' : 'LED_OFF'}`);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar el estado del LED' });
  }
});

app.listen(port, () => {
  console.log(`Servidor web escuchando en http://localhost:${port}`);
});
