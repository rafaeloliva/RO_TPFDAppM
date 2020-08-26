#!/bin/bash
echo "CorreTPFinal - Inicializacion DAM 08.2020"
PUERTO_PHP=8085
PUERTO_JS=3000
sleep 2
echo "Cierra contenedores abiertos"
docker stop $(docker ps -a -q)
sleep 5
echo "Elimina red existente"
docker network rm mysql-net
sleep 5
echo "Creando red"
docker network create --driver bridge mysql-net
sleep 5
echo "Inicializa base de datos DAM"
./start_mysql.sh mysql-net "$PWD"/db &
sleep 10
echo "Inicializa PHPMyAdmin"
./run_phpadmin.sh mysql-net mysql-server $PUERTO_PHP &
sleep 5
echo "Inicializa NodeJS"
./serve_node_app_net.sh "$PWD" ws/index.js $PUERTO_JS mysql-net &
sleep 5
echo "Inicia Aplicación Ionic"
cd ./ion
ionic serve

