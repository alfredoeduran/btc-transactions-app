# BTC Transactions Generator

Una aplicación Node.js que permite generar un archivo CSV con el historial de transacciones de una billetera de Bitcoin utilizando la API de BlockCypher.

## Características

- Generación de un archivo CSV con el historial de transacciones de una billetera de Bitcoin.
- Usa la API de BlockCypher para obtener los datos de las transacciones.
- Desplegada en Render con uptime garantizado usando UptimeRobot.

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Git](https://git-scm.com/)
- Una cuenta en [Render](https://render.com/)
- Una API Key de [BlockCypher](https://www.blockcypher.com/)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/btc-transactions-app.git
   
2. Navega a la carpeta del proyecto:

```
cd btc-transactions-app
```
3. Instala las dependencias del proyecto:
```
npm install
```

## Variables de Entorno
Antes de ejecutar la aplicación, debes configurar la API Key de BlockCypher como una variable de entorno. En Render, esta variable se configura automáticamente desde el panel, pero para un entorno local, crea un archivo .env en la raíz del proyecto con el siguiente contenido:

```
BLOCKCYPHER_API_KEY=tu_api_key_aqui
```

## USO

1. Ejecuta la aplicación localmente:

```
npm start
```
2. Abre tu navegador y navega a:
```
http://localhost:3000
```

3. Ingresa la dirección de una billetera de Bitcoin y haz clic en **Generar CSV**. Se descargará automáticamente un archivo CSV con las transacciones de la billetera.

## Despliegue en Render

Esta aplicación está desplegada en Render. Para configurar y desplegar la aplicación en Render:

1. Conecta el repositorio de GitHub a Render.
2. Configura la variable de entorno **BLOCKCYPHER_API_KEY** en la sección **Environment Variables**.
3. Render se encargará de desplegar automáticamente tu aplicación.

## Mantener la aplicación activa

Si estás usando el plan gratuito de [Render](https://render.com), la aplicación entrará en modo de suspensión cuando no se esté utilizando. Para evitar esto, puedes usar [UptimeRobot](https://uptimerobot.com/) para enviar un ping a tu aplicación cada 5 minutos y mantenerla activa.

## Créditos

* Node.js
* Express.js
* Axios
* BlockCypher API
* json2csv para la generación de archivos CSV.





