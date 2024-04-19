const axios = require('axios');

const esp32IP = '192.168.137.37';

async function getStatus() {
  try {
    const response = await axios.get(`http://${esp32IP}`);
    console.log('Estado del LED:', response.data);
  } catch (error) {
    console.error('Error al obtener el estado del LED:', error.message);
  }
}

getStatus();
