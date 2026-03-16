# 🕵️‍♂️ El Impostor - Web Game

> **"El Impostor"** es un juego web de deducción social y roles ocultos, diseñado para jugar con amigos de forma presencial o a distancia. Basado en mecánicas de juegos clásicos de espionaje, los jugadores deben usar su ingenio para descubrir quién es el impostor del grupo antes de que se acabe el tiempo, ¡o intentar pasar desapercibido si te toca serlo!

🌍 **[Juega en vivo aquí](https://web-impostor.vercel.app/)**

---

## ✨ Características Principales

* **Dos Modos de Juego:** * **Modo Offline (Pass & Play):** Perfecto para jugar en persona usando un solo dispositivo que se va pasando de mano en mano.
  * **Modo Online (Multijugador Real):** Salas privadas con códigos únicos donde cada jugador usa su propio móvil. Sincronizado en tiempo real.
* **Asignación Segura de Roles:** El servidor (en el modo online) actúa como crupier, enviando mensajes privados (`Unicast`) para garantizar que el impostor nunca reciba la palabra secreta evitando posibles trampas desde la consola.
* **Temáticas Personalizadas:** Selector de categorías (Comida, Lugares, Friki, etc.) para darle variedad a las partidas.
* **Avatares Dinámicos:** Generación automática de avatares únicos para cada jugador en la sala de espera (integrado con la API de DiceBear).
* **Interfaz Moderna:** Diseño responsivo con estética *Glassmorphism* (efecto cristal translúcido), animaciones suaves y un temporizador integrado para añadir tensión a las votaciones.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
* **HTML5 & CSS3:** Maquetación moderna utilizando Flexbox y propiedades como `backdrop-filter` para el efecto cristal.
* **JavaScript (Vanilla):** Lógica del cliente, manipulación del DOM y gestión del estado del juego sin depender de frameworks pesados.

### Backend & Tiempo Real
* **Node.js:** Servidor backend ligero.
* **Socket.io:** Comunicación bidireccional mediante WebSockets para la sincronización de las salas multijugador en tiempo real.
* **Render:** Plataforma de despliegue para el servidor.

---
