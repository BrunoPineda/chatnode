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
    lowercaseBody.includes("te llamas") ||
    lowercaseBody.includes("tu nombre") ||
    lowercaseBody.includes("quien eres")
  ) {
    respuesta = "Hola que tal mi nombre es jeweler's Bot🤖 a tus ordenes";
  } else if (
    lowercaseBody.includes("productos") ||
    lowercaseBody.includes("catálogo") 
  ) {
    respuesta =
      "Tenemos una amplia selección de joyas 🤑, desde anillos de compromiso hasta pulseras y collares. ¿Estás buscando algo en particular?👀";
  } else if (
    lowercaseBody.includes("pedidos") ||
    lowercaseBody.includes("envío") ||
    lowercaseBody.includes("seguimiento")
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
    lowercaseBody.includes("reparación") ||
    lowercaseBody.includes("arreglo") ||
    lowercaseBody.includes("mantenimiento")
  ) {
    respuesta =
      "Ofrecemos servicios de reparación y mantenimiento para tus joyas.👨‍🔧 Por favor, tráenos la pieza en cuestión y nuestro equipo de especialistas se encargará de ello.👩‍🔧";
  } else if (
    lowercaseBody.includes("descuentos") ||
    lowercaseBody.includes("ofertas") ||
    lowercaseBody.includes("promociones")
  ) {
    respuesta =
      "¡Estamos encantados de ofrecerte descuentos y promociones especiales! 💲💲💲 Por favor, visita nuestra página web o acércate a nuestra tienda física para conocer las ofertas actuales.🤑";
  } else if (
    lowercaseBody.includes("métodos de pago") ||
    lowercaseBody.includes("pago") ||
    lowercaseBody.includes("formas de pago")
  ) {
    respuesta =
      "Aceptamos pagos con tarjeta de crédito,💁‍♂️ transferencia bancaria, yape a este número y PayPal💪. También puedes consultar nuestras opciones de financiamiento.";
  } else if (
    lowercaseBody.includes("distritos") ||
    lowercaseBody.includes("direcciones") ||
    lowercaseBody.includes("llegan")
  ) {
    respuesta =
      "Entregamos en todos los distritos de Lima.💁‍♂️ Algunos de los distritos que cubrimos son: Miraflores, San Isidro, La Molina, Surco, Barranco, San Borja, Villa El Salvador, Ate, Chorrillos, entre otros.🤳";
  } else if (
    lowercaseBody.includes("entrega") ||
    lowercaseBody.includes("tiempo de entrega") ||
    lowercaseBody.includes("costo de entrega")
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
    lowercaseBody.includes("tienda física") ||
    lowercaseBody.includes("ubicación") ||
    lowercaseBody.includes("dirección")
  ) {
    respuesta =
      "Nos encontramos en el siguiente lugar: La molina.😅 ¡Te esperamos con gusto en nuestra tienda física!😖";
  } else if (
    lowercaseBody.includes("mi mamá") ||
    lowercaseBody.includes("mamá") ||
    lowercaseBody.includes("madre")
  ) {
    respuesta =
      "Podrías elegir un collar con un dije que represente algo significativo para ella, como la inicial de su nombre o un símbolo que represente un momento especial en su vida. Otra opción es un brazalete o pulsera grabada con un mensaje especial. Además, puedes planear una visita a una joyería de confianza para que tu mamá pueda elegir una pieza que le encante.";
  }else if (
    lowercaseBody.includes("tendencia") ||
    lowercaseBody.includes("moda") ||
    lowercaseBody.includes("temporada")
  ) {
    respuesta = "En esta temporada, las joyas minimalistas y delicadas están muy de moda. Los collares con dijes pequeños, los anillos apilables y las pulseras sencillas son opciones populares. También se ven joyas con piedras naturales y diseños geométricos elegantes.";
  } else if (
    lowercaseBody.includes("aniversario") ||
    lowercaseBody.includes("regalo") ||
    lowercaseBody.includes("especial")
  ) {
    respuesta = "Una excelente opción para un regalo de aniversario podría ser un par de pendientes de diamantes o una pulsera de oro con grabados personalizados. Estas joyas representan la elegancia y la durabilidad, lo que las convierte en símbolos perfectos para celebrar un aniversario especial.";
  } else if (
    lowercaseBody.includes("ocasión formal") ||
    lowercaseBody.includes("fiesta elegante") ||
    lowercaseBody.includes("joyas llamativas")
  ) {
    respuesta = "Para una ocasión formal o una fiesta elegante, las joyas llamativas son ideales. Un collar con pedrería brillante, unos pendientes largos con cristales o una pulsera de plata con detalles deslumbrantes pueden complementar perfectamente un atuendo de gala.";
  } else if (
    lowercaseBody.includes("clásicas") ||
    lowercaseBody.includes("nunca pasan de moda") ||
    lowercaseBody.includes("joyas atemporales")
  ) {
    respuesta = "Algunas joyas clásicas que nunca pasan de moda son los pendientes de perlas, los anillos de compromiso con diamantes, las pulseras de tenis y los collares de cadena fina. Estas piezas atemporales son perfectas para cualquier ocasión y siempre agregan elegancia a cualquier conjunto.";
  } else if (
    lowercaseBody.includes("diferencia") ||
    lowercaseBody.includes("joya de oro blanco") ||
    lowercaseBody.includes("joya de platino")
  ) {
    respuesta = "Una diferencia importante entre una joya de oro blanco y una de platino es el material utilizado. El oro blanco es una aleación de oro puro y otros metales blancos, como el paladio, mientras que el platino es un metal precioso puro. El platino es más denso, resistente y duradero que el oro blanco, pero también es más costoso. La elección entre ambos materiales dependerá de tus preferencias personales y presupuesto.";
  } else if (
    lowercaseBody.includes("piedra preciosa") ||
    lowercaseBody.includes("anillo de compromiso") ||
    lowercaseBody.includes("recomendar")
  ) {
    respuesta = "Para un anillo de compromiso, una de las piedras preciosas más recomendadas es el diamante. Los diamantes son símbolos clásicos de amor y durabilidad, y se asocian comúnmente con los anillos de compromiso. Sin embargo, también puedes considerar otras piedras preciosas como el zafiro o el rubí, que ofrecen colores intensos y elegantes. La elección de la piedra dependerá de los gustos y preferencias de la persona que usará el anillo.";
  } else if (
    lowercaseBody.includes("opciones de joyas personalizadas") ||
    lowercaseBody.includes("grabados") ||
    lowercaseBody.includes("iniciales")
  ) {
    respuesta = "Sí, ofrecemos opciones de joyas personalizadas con grabados e iniciales. Puedes elegir joyas como collares, pulseras o anillos y personalizarlos con nombres, fechas importantes o iniciales. Estas joyas personalizadas añaden un toque especial y único, convirtiéndolas en regalos significativos y memorables.";
  } else if (
    lowercaseBody.includes("cuidados") ||
    lowercaseBody.includes("mantener las joyas") ||
    lowercaseBody.includes("buen estado")
  ) {
    respuesta = "Para mantener tus joyas en buen estado, te recomendamos seguir algunas pautas. Evita exponerlas a productos químicos agresivos, como perfumes o productos de limpieza. Límpialas regularmente con un paño suave y evita el contacto con superficies duras para evitar rayones. También es aconsejable guardar las joyas por separado en estuches o bolsas individuales para evitar que se enreden o se rayen entre sí.";
  } else if (
    lowercaseBody.includes("ventaja") ||
    lowercaseBody.includes("diamantes certificados") ||
    lowercaseBody.includes("diamantes no certificados")
  ) {
    respuesta = "La ventaja de elegir diamantes certificados es que cuentan con una evaluación objetiva de su calidad. Los diamantes certificados han sido evaluados y clasificados por laboratorios gemológicos reconocidos y confiables. Esto te brinda la garantía de que estás adquiriendo un diamante auténtico con características y calidad verificadas. Los diamantes no certificados pueden tener una calidad incierta y pueden ser más difíciles de evaluar objetivamente.";
  } else if (
    lowercaseBody.includes("opciones de joyas para hombres") ||
    lowercaseBody.includes("anillos") ||
    lowercaseBody.includes("pulseras")
  ) {
    respuesta = "Sí, tenemos opciones de joyas para hombres, como anillos y pulseras. Los anillos pueden ser desde diseños clásicos y elegantes hasta estilos más modernos y audaces. Las pulseras también varían en estilos y materiales, desde pulseras de cuero hasta pulseras de metal. Te invitamos a visitar nuestra tienda para ver nuestra colección completa de joyas para hombres.";
  } else if (
    lowercaseBody.includes("joya para un aniversario de bodas de plata") ||
    lowercaseBody.includes("regalo") ||
    lowercaseBody.includes("aniversario de bodas")
  ) {
    respuesta = "Para un aniversario de bodas de plata, una joya adecuada podría ser un collar de plata con un colgante especial, un anillo con detalles de plata o una pulsera de plata grabada. La plata es un metal precioso asociado con el aniversario de bodas de plata, y una joya de plata será un recordatorio duradero de ese momento especial.";
  } else if (
    lowercaseBody.includes("tamaño de anillo") ||
    lowercaseBody.includes("anillo adecuado") ||
    lowercaseBody.includes("cómo saber mi talla de anillo")
  ) {
    respuesta = "Para saber qué tamaño de anillo es el adecuado para ti, puedes utilizar un medidor de anillos o visitar una joyería para que te tomen la medida de forma precisa. También puedes medir el diámetro interno de un anillo que te quede bien y compararlo con una guía de tamaños. Es importante asegurarse de que el anillo se ajuste cómodamente sin estar demasiado apretado ni demasiado suelto.";
  } else if (
    lowercaseBody.includes("últimas tendencias en joyería para hombres") ||
    lowercaseBody.includes("tendencias en joyería masculina") ||
    lowercaseBody.includes("joyas para hombres")
  ) {
    respuesta = "Algunas de las últimas tendencias en joyería para hombres incluyen anillos con diseños audaces y modernos, pulseras de cuero con detalles metálicos, collares con colgantes geométricos y relojes con estilos elegantes y sofisticados. También se ven joyas con materiales alternativos, como madera o cerámica, que ofrecen un aspecto distintivo y único.";
  } else if (
    lowercaseBody.includes("cierre de pulsera") ||
    lowercaseBody.includes("seguro y duradero") ||
    lowercaseBody.includes("mejor tipo de cierre")
  ) {
    respuesta = "El tipo de cierre de pulsera más seguro y duradero puede variar según el estilo de la pulsera. Algunos cierres populares incluyen los cierres de broche de presión, los cierres deslizantes ajustables y los cierres de seguridad con doble cierre. La elección del cierre depende del tipo de pulsera y del nivel de seguridad que desees. Te recomendamos consultar con nuestro equipo de ventas para encontrar el mejor tipo de cierre para tu pulsera.";
  } else if (
    lowercaseBody.includes("graduación") ||
    lowercaseBody.includes("regalo") ||
    lowercaseBody.includes("hitos")
  ) {
    respuesta = "Para un regalo de graduación, podrías considerar un reloj elegante y sofisticado, un collar con un dije simbólico o un anillo grabado con el año de graduación. Estas joyas serán recordatorios duraderos de un hito importante en la vida de la persona graduada.";
  } else {
    respuesta =
      ".";
  }

  // Enviar la respuesta al cliente
  client.sendMessage(message.from, respuesta);
});

client.initialize();
