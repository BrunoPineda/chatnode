const qrcode = require("qrcode-terminal");
const puppeteer = require("puppeteer");


//Crea una sesión con whatsapp-web y la guarda localmente para autenticarse solo una vez por QR
const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

//Genera el código qr para conectarse a whatsapp-web
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on("ready", () => {
  console.log("Chatbot de WhatsApp listo");
});

//Aquí sucede la magia, escucha los mensajes y aquí es donde se manipula lo que queremos que haga el bot
client.on("message", (message) => {
  console.log(message.body);
  let respuesta = "";
  const lowercaseBody = message.body.toLowerCase();
  if (
    lowercaseBody.includes("hola") ||
    lowercaseBody.includes("buenos días") ||
    lowercaseBody.includes("buenas tardes")
  ) {
    respuesta =
      "¡Bienvenido/a a nuestra joyería! 😁 ¿En qué puedo ayudarte hoy? 🤗";
  } else if (
    lowercaseBody.includes("tu creador") ||
    lowercaseBody.includes("quién te hizo") ||
    lowercaseBody.includes("quién te creó") ||
    lowercaseBody.includes("tu papá")
  ) {
    respuesta =
      "Mi creador es BruCorp acá esta su página si deseas contactarte https://animated-piroshki-459dac.netlify.app/";
  } else if (
    message.body.includes("te llamas") ||
    message.body.includes("tu nombre") ||
    message.body.includes("quien eres")
  ) {
    respuesta = "Hola que tal mi nombre es jeweler's Bot🤖 a tus ordenes";
  } else if (
    message.body.includes("productos") ||
    message.body.includes("catálogo") ||
    message.body.includes("joyas")
  ) {
    respuesta =
      "Tenemos una amplia selección de joyas 🤑, desde anillos de compromiso hasta pulseras y collares. ¿Estás buscando algo en particular?👀";
  } else if (
    message.body.includes("pedidos") ||
    message.body.includes("envío") ||
    message.body.includes("seguimiento")
  ) {
    respuesta =
      "Si deseas obtener información sobre el estado de tu pedido o el seguimiento de envío 🏍️, ➡️por favor proporciónanos tu número de pedido y te ayudaremos.⬅️";
  } else if (
    lowercaseBody.includes("asesor") ||
    lowercaseBody.includes("persona autorizada") ||
    lowercaseBody.includes("humano")
  ) {
    respuesta = "Por supuesto ahora le pasare con un asesor humano😃";
  } else if (
    message.body.includes("reparación") ||
    message.body.includes("arreglo") ||
    message.body.includes("mantenimiento")
  ) {
    respuesta =
      "Ofrecemos servicios de reparación y mantenimiento para tus joyas.👨‍🔧 Por favor, tráenos la pieza en cuestión y nuestro equipo de especialistas se encargará de ello.👩‍🔧";
  } else if (
    message.body.includes("descuentos") ||
    message.body.includes("ofertas") ||
    message.body.includes("promociones")
  ) {
    respuesta =
      "¡Estamos encantados de ofrecerte descuentos y promociones especiales! 💲💲💲 Por favor, visita nuestra página web o acércate a nuestra tienda física para conocer las ofertas actuales.🤑";
  } else if (
    message.body.includes("métodos de pago") ||
    message.body.includes("pago") ||
    message.body.includes("formas de pago")
  ) {
    respuesta =
      "Aceptamos pagos con tarjeta de crédito,💁‍♂️ transferencia bancaria, yape a este número y PayPal💪. También puedes consultar nuestras opciones de financiamiento.";
  } else if (
    message.body.includes("distritos") ||
    message.body.includes("direcciones") ||
    message.body.includes("llegan")
  ) {
    respuesta =
      "Entregamos en todos los distritos de Lima.💁‍♂️ Algunos de los distritos que cubrimos son: Miraflores, San Isidro, La Molina, Surco, Barranco, San Borja, Villa El Salvador, Ate, Chorrillos, entre otros.🤳";
  } else if (
    message.body.includes("entrega") ||
    message.body.includes("tiempo de entrega") ||
    message.body.includes("costo de entrega")
  ) {
    respuesta =
      "El costo de entrega🚗 y el tiempo estimado de entrega varían según el distrito.⏳ Por ejemplo:\n\n- Villa El Salvador: S/20, entrega en 2 días\n- La Molina: S/50, entrega en 3 días\n- San Isidro: S/35, entrega en 1 día\n\nEstos son solo ejemplos, el costo y el tiempo pueden variar según la ubicación exacta dentro del distrito.👍";
  } else if (lowercaseBody.includes("mi hija")) {
    respuesta =
      "Para tu hija,👨‍👧 una pulsera de charms personalizables sería un regalo encantador. También podrías considerar un collar con un colgante especial que refleje sus intereses o su personalidad.";
  } else if (
    lowercaseBody.includes("mi esposa") ||
    lowercaseBody.includes("mi pareja")
  ) {
    respuesta =
      "Para tu esposa,👩‍❤️‍👨 un anillo de compromiso con un hermoso diamante💎 o un reloj elegante⌚ serían opciones impresionantes. También podrías considerar un brazalete grabado con un mensaje significativo.";
  } else if (lowercaseBody.includes("mi suegra")) {
    respuesta =
      "Para tu suegra,👻 un collar clásico con perlas cultivadas o unos pendientes de plata serían regalos elegantes. También podrías considerar una pulsera con dijes que representen sus intereses o pasiones.";
  } else if (
    lowercaseBody.includes("chica que me gusta") ||
    lowercaseBody.includes("alguien especial")
  ) {
    respuesta =
      "Para impresionar a esa chica especial,😏 un collar con un colgante único o unos pendientes llamativos podrían captar su atención. Considera sus gustos y preferencias para elegir una joya que refleje su estilo.😲";
  } else if (lowercaseBody.includes("mi novia")) {
    respuesta =
      "Para tu novia,😘 un brazalete de plata con charms sería un regalo encantador.😅 También podrías considerar un collar con un dije personalizado o una sortija con piedras preciosas que representen vuestro amor.💞💞💞";
  } else if (
    message.body.includes("tienda física") ||
    message.body.includes("ubicación") ||
    message.body.includes("dirección")
  ) {
    respuesta =
      "Nos encontramos en el siguiente lugar: La molina.😅 ¡Te esperamos con gusto en nuestra tienda física!😖";
  } else {
    respuesta =
      "Disculpa 😖, no logro entender tu consulta o pregunta solo tengo 3 dias de vida. Por favor, reformula tu mensaje para que pueda brindarte una mejor asistencia.";
  }

  // Enviar la respuesta al cliente
  client.sendMessage(message.from, respuesta);
});

client.initialize();