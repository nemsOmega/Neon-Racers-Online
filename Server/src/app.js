import express from 'express';
const app = express();
// Middleware para parsear JSON
app.use(express.json());

// Iniciar servidor
app.listen(8080, () => {
});
console.log('Servidor ejecutándose en http://localhost:8080');

//FUNCIONES LÓGICAS

async function createMessage() {
const response = await fetch('http://localhost:8080/messagesForDebugging', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
text: 'Hola desde el cliente',
author: 'Javier'
})
});
const newMessage = await response.json();
console.log('Mensaje creado:', newMessage);
}


createMessage();
