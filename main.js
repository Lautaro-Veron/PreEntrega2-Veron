// Definir objeto producto
let producto = {
    nombre: "",
    precio: 0,
    cantidad: 0,
  };
  
  // Función para añadir un producto al carrito
  function agregarProducto() {
    producto = {
      nombre: prompt("Introduce el nombre del producto:"),
      precio: parseInt(prompt("Introduce el precio del producto:")),
      cantidad: parseInt(prompt("Introduce la cantidad a comprar:")),
    };
  }
  
  // Función para calcular el total del carrito
  function calcularTotal(carrito) {
    let total = 0;
    let detalle = "";
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].precio * carrito[i].cantidad;
      detalle += carrito[i].nombre + " x " + carrito[i].cantidad + " - Precio: $" + carrito[i].precio + "\n";
    }
    return { total, detalle };
  }
  
  // Declarar variable para almacenar los productos en el carrito
  let carrito = [];
  
  // Ciclo para agregar productos al carrito
  while (true) {
    let agregarMas = confirm("¿Deseas agregar un producto al carrito?");
    if (!agregarMas) {
      break;
    }
    agregarProducto();
    carrito.push(producto);
  }
  
  // Filtrar los productos del carrito que cuestan más de $2000
  let productosCaros = carrito.filter((prod) => prod.precio > 2000);
  
  // Mostrar los productos del carrito que cuestan más de $2000
  let mensajeProductosCaros = "Productos caros:\n";
  productosCaros.forEach((prod) => {
    mensajeProductosCaros += prod.nombre + " - Precio: $" + prod.precio + "\n";
  });
  
  // Buscar un producto en el carrito por nombre
  let nombreBuscado = prompt("Introduce el nombre del producto a buscar:");
  let productoBuscado = carrito.find((prod) => prod.nombre === nombreBuscado);
  
  // Mostrar el producto buscado, si se encontró
  let mensajeProductoBuscado = "";
  if (productoBuscado) {
    mensajeProductoBuscado +=
      "Producto encontrado: " +
      productoBuscado.nombre +
      " - Precio: $" +
      productoBuscado.precio +
      " - Cantidad: " +
      productoBuscado.cantidad;
  } else {
    mensajeProductoBuscado += "Producto no encontrado";
  }
  
  // Calcular el total del carrito y mostrar el contenido del carrito y el resultado de la búsqueda y el filtrado
  let resultadoCalculoTotal = calcularTotal(carrito);
  let mensajeDetalle = "Detalle de la compra:\n" + resultadoCalculoTotal.detalle;
  let mensajeTotal = "Total a pagar: $" + resultadoCalculoTotal.total.toFixed(2);
  
  alert(mensajeDetalle + "\n" + mensajeProductosCaros + "\n" + mensajeProductoBuscado + "\n" + mensajeTotal);
  
  