SELECT * FROM db_calida.categoria;
INSERT INTO `db_calida`.`categoria` (`nombre`) VALUES ('planta');
INSERT INTO `db_calida`.`categoria` (`nombre`) VALUES ('maceta');
INSERT INTO `db_calida`.`categoria` (`nombre`) VALUES ('base');
INSERT INTO `db_calida`.`categoria` (`nombre`) VALUES ('jabon');
-- Inserts para las categorias

INSERT INTO `db_calida`.`producto` (`nombre`, `inventario`, `precio`, `descripcion`, `imagen`, `categoria_idcategoria`) VALUES ('aglaonema roja', '10', '151.00', 'CH\\n1 vez a la semana	resolana, semisombra', ?, '1');
INSERT INTO `db_calida`.`producto` (`nombre`, `inventario`, `precio`, `descripcion`, `imagen`, `categoria_idcategoria`) VALUES ('aglaonema rosa', '10', '151.00', 'CH\\\nuna 1 vez a la semana, resolana, semisombra, luz artificia', ?, '1');
INSERT INTO `db_calida`.`producto` (`nombre`, `inventario`, `precio`, `descripcion`, `imagen`, `categoria_idcategoria`) VALUES ('amoena / amoena hoja reina', '10', '79.00', 'CH Riego:1 o 2 por semana Luz: resolana, semisombra y soporta sol directo en pequeñas cantidades', ?, '1');
INSERT INTO `db_calida`.`producto` (`nombre`, `inventario`, `precio`, `descripcion`, `imagen`, `categoria_idcategoria`) VALUES ('Calathea burle Marx', '10', '37.00', 'CH\nRiego: 1 o 2  veces por semana manteniendo húmedo el sustrato\nLuz: resolana, semisombra', ?, '1');
INSERT INTO `db_calida`.`producto` (`nombre`, `inventario`, `precio`, `descripcion`, `imagen`, `categoria_idcategoria`) VALUES ('Calathea Makoyana ', '10', '103.00', 'CH\\n1 o 2 veces a la semana\\nresolana o semisombra', ?, '1');
-- Inserts para productos

INSERT INTO `db_calida`.`categoriausuario` (`nombre`) VALUES ('cliente');
INSERT INTO `db_calida`.`categoriausuario` (`nombre`) VALUES ('admin');
-- insert categoriausuario

INSERT INTO `db_calida`.`usuario` (`nombre`, `apellidos`, `correo`, `contraseña`, `categoriausuario_idcategoriausuario`) VALUES ('Jose de Jesus', 'Corona', 'josedejesuscorona@cruzazul.com', '#Welcome1', '1');
INSERT INTO `db_calida`.`usuario` (`nombre`, `apellidos`, `correo`, `contraseña`, `categoriausuario_idcategoriausuario`) VALUES ('Benevolencio', 'Bonifacio', 'beneboni@gmail.com', '#Welcome1', '1');
INSERT INTO `db_calida`.`usuario` (`nombre`, `apellidos`, `correo`, `contraseña`, `categoriausuario_idcategoriausuario`) VALUES ('Steve', 'Jobs', 'steve@apple.com', '#Welcome1', '1');
INSERT INTO `db_calida`.`usuario` (`nombre`, `apellidos`, `correo`, `contraseña`, `categoriausuario_idcategoriausuario`) VALUES ('Vicente', 'Fox', 'vicente@pan.com.mx', '#Welcome1', '1');
INSERT INTO `db_calida`.`usuario` (`nombre`, `apellidos`, `correo`, `contraseña`, `categoriausuario_idcategoriausuario`) VALUES ('Steve', 'Wosniak', 'steve2@apple.com', '#Welcome1', '1');
-- inserts de usuario

INSERT INTO `db_calida`.`envio` (`estado`, `cp`, `calle`, `colonia`, `numero int`, `acaldia`, `numero ext`) VALUES ('CDMX', '2980', 'colima', 'roma', '2', 'cuautehmoc', '3');
INSERT INTO `db_calida`.`envio` (`estado`, `cp`, `calle`, `colonia`, `numero int`, `acaldia`, `numero ext`) VALUES ('CDMX', '006570', 'Volcan Santa Maria', 'Ampliación providencia', '0', 'GAM', '121');
INSERT INTO `db_calida`.`envio` (`estado`, `cp`, `calle`, `colonia`, `numero int`, `acaldia`, `numero ext`) VALUES ('CDMX', '14390', 'el caporal', 'narciso mendoza', '208', 'Tlalpan', 'edificio e');
INSERT INTO `db_calida`.`envio` (`estado`, `cp`, `calle`, `colonia`, `numero int`, `acaldia`, `numero ext`) VALUES ('cdmx', '04100', 'xicoténcatl', 'Del Carmen', '4', 'Coyoacan', '186');
INSERT INTO `db_calida`.`envio` (`estado`, `cp`, `calle`, `colonia`, `numero int`, `acaldia`, `numero ext`) VALUES ('cdmx', '06570', 'carlos salinas de gortari', 'martires del pri', '132', 'Cuauhtemoc', '2');
-- inserts de dirreciones de envio

INSERT INTO `db_calida`.`mensaje` (`nombre`, `correo`, `telefono`, `texto`) VALUES ('Vicente Guerrero', 'vicguer1782@gmail.com', '5512345678', 'El saldo de su amigo se ha agotado. ');
INSERT INTO `db_calida`.`mensaje` (`nombre`, `correo`, `telefono`, `texto`) VALUES ('Porfirio Diaz', 'vladptn@stolychnaya.com.ru', '5598765432', '¿punto medio neni?');
INSERT INTO `db_calida`.`mensaje` (`nombre`, `correo`, `telefono`, `texto`) VALUES ('Andres Manuel Lopez Beltran', 'AMLB@4T.com', '5547474747', 'Aguante la 4T');
INSERT INTO `db_calida`.`mensaje` (`nombre`, `correo`, `telefono`, `texto`) VALUES ('Will Smith', 'islapchrirock@oscars.com', '5564738767', 'take my wife’s name out of fricking mouth');
INSERT INTO `db_calida`.`mensaje` (`nombre`, `correo`, `telefono`, `texto`) VALUES ('kanye west', 'kanyewest@yeezy.com', '5523456557', 'but beyonce had one of the greatest videos of all time! *drop the mic*');
--  inserts para mensaje

INSERT INTO `db_calida`.`metododepago` (`tipo de pago`) VALUES ('efectivo');
INSERT INTO `db_calida`.`metododepago` (`tipo de pago`) VALUES ('Tarjeta de credito');
INSERT INTO `db_calida`.`metododepago` (`tipo de pago`) VALUES ('tarjeta de debito');
INSERT INTO `db_calida`.`metododepago` (`tipo de pago`) VALUES ('Paypal');
-- insert metodo de pago
