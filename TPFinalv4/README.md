Autor: Rafael Oliva - 2020
# Introducción

Este proyecto es el trabajo final de la materia Desarrollo de Aplicaciones Multimedia  (DAM)
de la EspIoT / MIoT 2020 (FIUBA), y consiste en un Sistema de Riego Automatizado. El mismo recopila información de sensores tipo tensiómetro para humedad de suelo, a efectos de controlar apertura y cierre de valvulas de riego asociadas al sector en que se encuentra el sensor.

El sistema se programó utilizando como base material de la cátedra, con un front-end basado en Ionic / Angular, y backend Express que hace una interaccion con una base de datos MySql. Se agregó un menú de ingreso en la parte superior izquierda, y un simulador de lecturas de sensores con gráfica temporal. La base de datos está accesible en el phpmyadmin via http://localhost:8085.  Utiliza contenedores Docker.

# Correr la aplicación

Para correr la aplicacion es necesario primero clonar el repositorio en la
carpeta local deseada utilizando: 
```sh
git clone https://github.com/rafaeloliva/RO_TPFDAppM.git
cd TPFinalv4
```

y luego ejecutar los siguientes comandos con un terminal desde la carpeta seleccionada:
```sh
./corretpfinal.sh
```
La aplicación Ionic se abre automáticamente al final de la secuencia en http://localhost:8001

EN PREPARACION:

Para iniciar la aplicación, con docker-compose instalado, desde otro terminal ejecutar:
```sh
docker-compose up
```
Para detener ordenadamente la aplicación, desde otro terminal ejecutar:
```sh
docker-compose down
```

# Notas / Known issues
-Testeado en maquinas con Ubuntu 18.04, previamente ejecutar el Software Updater.

-Resumenes en PDF de los ejercicios resueltos en clase en /doc

-Aun así puede requerir instalación de docker-compose, con sudo apt install docker-compose

EN PREPARACION:
-Puede ocurrir que el arranque se salga de secuencia, el último container debe ser el 
de node. Si no ocurre, correr desde otro terminal docker-compose down, y luego nuevamente
docker-compose up.


# Contribuir

Para contribuir realizar un pull request con las sugerencias. Dado que se trata de un proyecto didáctico no se prevé realizar mantenimiento del mismo.

# Licencia

GPL