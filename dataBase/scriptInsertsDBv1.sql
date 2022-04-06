/*Insert de las categorías de los productos*/
INSERT INTO `calidadb`.`categoria` (`nombre`) VALUES ('planta');
INSERT INTO `calidadb`.`categoria` (`nombre`) VALUES ('maceta');
INSERT INTO `calidadb`.`categoria` (`nombre`) VALUES ('base');
INSERT INTO `calidadb`.`categoria` (`nombre`) VALUES ('jabon');

/*Insert de los productos*/
INSERT INTO `calidadb`.`producto` (`nombre`, `precio`, `descripcion`, `imagen`, `inventario`) VALUES ('aglaonema roja', '151.00', 'Tamaño CH, de riego 1 vez a la semana, luz tipo resolana y semisombra.','Aglaonema roja.jpg', '10');
INSERT INTO `calidadb`.`producto` (`nombre`, `precio`, `descripcion`, `imagen`, `inventario`) VALUES ('aglaonema rosa', '151.00', 'Tamaño CH, de riego 1 vez a la semana, luz tipo resolana, semisombra y luz artificia.','Aglaonema rosa.jpg', '10');
INSERT INTO `calidadb`.`producto` (`nombre`, `precio`, `descripcion`, `imagen`, `inventario`) VALUES ('amoena / amoena hoja reina', '79.00', 'Tamaño CH, de riego 1 o 2 veces por semana, luz tipo resolana, semisombra y soporta sol directo en pequeñas cantidades.', 'Amoena.JPG', '10');
INSERT INTO `calidadb`.`producto` (`nombre`, `precio`, `descripcion`, `imagen`, `inventario`) VALUES ('calathea burle marx', '37.00', 'Tamaño CH, de riego 1 o 2 veces por semana, manteniendo húmedo el sustrato, luz tipo resolana y semisombra.', 'Calathea burle marx.JPG', '10');
INSERT INTO `calidadb`.`producto` (`nombre`, `precio`, `descripcion`, `imagen`, `inventario`) VALUES ('calathea makoyana', '103.00', 'Tamaño CH, de riego 1 o 2 veces por semana, luz tipo resolana o semisombra.', 'Calathea Makoyana.jpg', '10');

/*Insert de los clientes*/
INSERT INTO `calidadb`.`cliente` (`nombre`, `apellido`, `correo`, `contraseña`) VALUES ('alberto', 'lopez', 'calberto.lopezbenitez@gmail.com', '#Welcome1');
INSERT INTO `calidadb`.`cliente` (`nombre`, `apellido`, `correo`, `contraseña`) VALUES ('naomi', 'quintero', 'naomi.quintero@gmail.com', '#Welcome1');
INSERT INTO `calidadb`.`cliente` (`nombre`, `apellido`, `correo`, `contraseña`) VALUES ('fernanda', 'rivera', 'fernanda.riveramedina@gmail.com', '#Welcome1');
INSERT INTO `calidadb`.`cliente` (`nombre`, `apellido`, `correo`, `contraseña`) VALUES ('manuel', 'de la torre ', 'manuel@gmail.com', '#Welcome1');
INSERT INTO `calidadb`.`cliente` (`nombre`, `apellido`, `correo`, `contraseña`) VALUES ('joaquin', 'leon', 'joaquin.leonquero@gmail.com', '#Welcome1');

/*Insert de las direcciones de envio*/
INSERT INTO `calidadb`.`domicilio_envio` (`estado`, `cp`, `calle`, `colonia`, `numero_int`, `acaldia`, `numero_ext`) VALUES ('cdmx', '02980', 'colima', 'roma', '2', 'cuautehmoc', '3');
INSERT INTO `calidadb`.`domicilio_envio` (`estado`, `cp`, `calle`, `colonia`, `numero_int`, `acaldia`, `numero_ext`) VALUES ('cdmx', '06570', 'volcan santa maria', 'ampliacion providencia', '1', 'GAM', '121');
INSERT INTO `calidadb`.`domicilio_envio` (`estado`, `cp`, `calle`, `colonia`, `numero_int`, `acaldia`, `numero_ext`) VALUES ('cdmx', '14390', 'el caporal', 'narciso mendoza', '208', 'tlalpan', 'edificio e');
INSERT INTO `calidadb`.`domicilio_envio` (`estado`, `cp`, `calle`, `colonia`, `numero_int`, `acaldia`, `numero_ext`) VALUES ('cdmx', '04100', 'xicotencatl', 'del Carmen', '4', 'coyoacan', '186');
INSERT INTO `calidadb`.`domicilio_envio` (`estado`, `cp`, `calle`, `colonia`, `numero_int`, `acaldia`, `numero_ext`) VALUES ('cdmx', '06570', 'carlos salinas de gortari', 'martires del pri', '132', 'cuauhtemoc', 'b');

/*Insert de los metodos de pago*/
INSERT INTO `calidadb`.`metodo_pago` (`pago`) VALUES ('efectivo');
INSERT INTO `calidadb`.`metodo_pago` (`pago`) VALUES ('transferencia electronica de fondos');
INSERT INTO `calidadb`.`metodo_pago` (`pago`) VALUES ('tarjeta de credito');
INSERT INTO `calidadb`.`metodo_pago` (`pago`) VALUES ('tarjeta de debito');

/*Insert de los admins*/
INSERT INTO `calidadb`.`admin` (`nombre`, `apellido`, `correo`, `contraseña`, `usuario`) VALUES ('alberto', 'lopez', 'calberto.lopezbenitez@gmail.com', '@Welcome1', 'clopez');
INSERT INTO `calidadb`.`admin` (`nombre`, `apellido`, `correo`, `contraseña`, `usuario`) VALUES ('aurelio', 'reyes', 'aurelior997@gmail.com', '@Welcome1', 'areyes');
INSERT INTO `calidadb`.`admin` (`nombre`, `apellido`, `correo`, `contraseña`, `usuario`) VALUES ('joaquín', 'león', 'joaquinleonquero00@gmail.com', '@Welcome1', 'jleon');
INSERT INTO `calidadb`.`admin` (`nombre`, `apellido`, `correo`, `contraseña`, `usuario`) VALUES ('cristian', 'mota', 'cristianmotaramirez92@gmail.com', '@Welcome1', 'cmota');
INSERT INTO `calidadb`.`admin` (`nombre`, `apellido`, `correo`, `contraseña`, `usuario`) VALUES ('fernanda', 'rivera', 'maria.fernanda.rivera.medina30@gmail.com', '@Welcome1', 'frivera');
INSERT INTO `calidadb`.`admin` (`nombre`, `apellido`, `correo`, `contraseña`, `usuario`) VALUES ('manuel', 'piña', 'manueldltpina@gmail.com', '@Welcome1', 'mpiña');



