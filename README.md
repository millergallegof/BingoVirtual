# BINGO VIRTUAL

------------
El siguiente codigo es un juego virtual el cual es mas conocido como Bingo, consiste en un juego el cual tiene un login para pdoer jugar con usuarios simultaneamente, maneja diferentes bases de datso tanto relacionales como no relacionales, en el siguiente READme, encontraras los diferentes pasos para su instalacion, para correr el programa el uso y los avances que estan implementados hasta el momento.


------------
## INSTALACION

------------

para instalar este programa debe seguir las siguientes recomendaciones:

**1.**  se clona este repositorio en culaqier ubicacion de su equipo

**2.** se abre el proyecto en algun editor de codigo fuente, las 3 diferentes carpetas que se encuentran en este proyecto

**3.** Se instalan las diferentes dependencias node.js(Se debe tener instalada la version mas actual y estable de node en la computadora) para que los proyectos no generen conflicto al momento de ejecutarse

**4.** se ejecuta primeramente el proyecto BackendLogin el cual tiene conexion directa
con la base de datos no relacional llamada MongoDB (se recomienda instalar el programa MongoDB para que no presente errores en su renderizacion)

**5.** Se ejecuta seguidamente el proyecto de FrontEnd el cual se ejecuta con comandos en la terminal especificamente utilizando **npm start**

**6.** Por ultimo se ejecuta el proyecto de BackendGame el cual se conecta con la base de datos relacional MysQL (recomedable tener instalado MYSQL y tener activa la base de datos para que no se presenten problemas).

------------

### ALERTA (el ultimo componente no se encunetra terminado, recomendado no seguir el paso 5 de la instalacion, ya que puede presentar inconsistencias)

------------
## MODO DE USO

------------

Ya que el programa presenta inconsistencia es recomendable que por el momnto siga las recomendaciones en este paragrafo:

**1.** cuando los proyectos esten corriendo se ingresa al http://localhost:3000 el cual lo dirigira directamente a la pestaña de Login, si el usuario no se ha registrado, debe dar click en la opcion Registrarse e indicar los difernetes datos que se le piden

**2.** ~~pasara a una sala de espera la cual no esta implementada en el momento~~ 
 
 **3.** para ingresar a la parte del juego se ingresa en la url http://localhost:3000/GameBingo donde se renderiza la interfaz del carton de bingo, el cual actualmente esta mostrando informacion por default del proyecto
 

------------


 ### (Queda pendiente bastante parte del proyecto por implementar, hasta esta parte se encunetra el proyecto en la fecha 2022-03-13)
 

------------


Autor: Miller Esteban Gallego Forero - miller.gallegof@gmail.com
