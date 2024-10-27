# <u>Angry-Dinosaurs</u>

### Desarrollado por el profesor Cristián Gómez Vega
### Correo Triskeledu: cgomezvega@triskeledu.cl
### Correo DUOC: cri.gomezv@profesor.duoc.cl
### www.triskeledu.cl

# Preparando mi celular y mi aplicación
## Preparando mi celular 

Los celulares tienes varias opciones que pueden utilizar los desarrolladores de aplicaciones durante las pruebas. En un esfuerzo por reducir el uso accidental de estas opciones, se ha ocultado el menú de **"Opciones de Desarrollador"**.

Para ejecutar tus aplicaciones desarrolladas directamente en tu celular, debes configurar Android o iOS en modo desarrollador, para lo cual hay que hacer lo siguiente: 

Para habilitar las opciones de desarrollador se debe seleccionar: 

1. Ajustes 
2. Sistema 
3. Acerca del teléfono 
4. Tocar el campo Número de compilación 7 veces 
5. Se verá un mensaje a medida que se aproxime a los 7 toques 
6. Luego de aceptar, habrás activado las opciones de desarrollador 
7. Tocar la flecha hacia atrás una vez que hayas terminado y aparecerá “Opciones de desarrollador” en Ajustes. 
8. Ir a Opciones de desarrollador y dejar activada la opción **<span style="color:red">“Depuración USB”</span>**

Se debe enchufar un **CABLE DE DATOS** en el USB del computador y el otro extremo en el celular. Cuidado que hay algunos cables que sólo sirven para cargar el celular, pero no son cables para transferir datos.

## Preparando mi aplicación

Para ejecutar en Windows reemplaza el contenido del archivo **"settings.json"** por el contenido de **"settings.json.<span style="color:red">windows</span>"**.

Para ejecutar en Linux reemplaza el contenido del archivo **"settings.json"** por el contenido de **"settings.json.<span style="color:red">linux</span>"**.

En cualquiera de los 2 casos **<u><span style="color:red">debes revisar que existan las rutas de los archivos</span></u>**, o bien cambiar estas variables por las rutas donde instalaste los softwares:

Linux:

```
  "java.import.gradle.java.home": "/usr/lib/jvm/jdk-22.0.2-oracle-x64",
  "java.configuration.updateBuildConfiguration": "interactive",
  "android-webview-debug.adbPath": "/home/cgomezvega/Android/Sdk/platform-tools/adb",
```

Windows:

```
    "java.import.gradle.java.home": "C:\\Program Files\\Java\\jdk-22",
    "java.configuration.updateBuildConfiguration": "interactive",
    "android-webview-debug.adbPath": "C:\\Users\\cgome\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe",
```

Nótese que **"cgome"** es el usuario del computador del profesor y allí debes poner el nombre de tu usuario de Windows.

# Instrucciones para programar y ejecutar Angry-Dinosaurs
## Paquetes que debes instalar: 

`ng add @angular/material`
`npm i jsqr@latest`
`npm i @ngx-translate/core`
`npm i @ngx-translate/http-loader`
`npm i @capacitor-community/sqlite`
`npm i jeep-sqlite`
`npm i sql.js`
`npm i @ionic/storage-angular`
`npm i native-run`
`npm i @capacitor/device`
`npm i @capacitor/camera`
`npm i @capacitor/geolocation`
`npm i @capacitor/splash-screen`
ESTA COMPONENTE DIO PROBLEMAS Y LA TUVE QUE DESINSTALAR `npm i @capacitor/barcode-scanner`
`npx cap sync`

## Creación de componentes

### Creación de programas fuentes

`ionic g component components/footer --standalone`
`ionic g component components/header --standalone`
`ionic g component components/language --standalone`

### Creación de guards

`ionic g guard guards/ingreso-guard`
`ionic g guard guards/inicio-guard`

### Creación de interfaces

`ionic g interface interfaces/asistencia`

### Creación de modelos orientados a objeto

`ionic g class model/nivel-educacional`
`ionic g class model/persona`
`ionic g class model/publicacion`
`ionic g class model/usuario`

### Creación de páginas

`ionic g page pages/home`
`ionic g page pages/login`
`ionic g page pages/theme`

### Creación de servicios

`ionic g service services/apiclient`
`ionic g service services/auth`
`ionic g service services/data-base`
`ionic g service services/initialize`
`ionic g service services/sqlite`

### Creación de herramientas

`message-enum.ts` Enumeración de botones para ventanas emergentes con preguntas.
`message-routines` Diferentes tipos de mensajes y ventanas de diálogo reusables. Se usan para no tener tantos mensajes Toast y AlertController.

## Páginas desarrolladas o modificadas

Junto con revisar las páginas desarrolladas o modificadas, se recomienda también revisar los comentarios que parten con las iniciales del profesor, por ejemplo, la palabra **"CGV" (Cristián Gómez Vega)**.

Algunos comentarios comenzarán con **"CGV-INI"** y terminarán con **"CGV-FIN"**, de esta forma podrás encontrar los lugares donde el profesor agregó código fuente.

Los siguientes son los archivos o carpetas desarrollados o modificados:

**<span style="color:blue">_JSON-SERVER</span>**
**`dbposts - copia.json`** Archivo de respaldo de dbposts.json
**`dbposts.json`** Archivo json que contiene las listas de **users** y **posts**, que serán tratadas como tablas para nuestra API por json-server.
**`dbposts.json`** README.TXT sobre como usar json-server. Para instalar json-server ejecutar una sola vez: **`npm install -g json-server`**. Para ejecutar json-server usar: **`json-server --watch dbposts.json`**

**<span style="color:blue">.vscode</span>**
**`.vscode/extensions.json`** Extensiones de vscode recomendadas.
**`.vscode/launch.json`** Configuración para arrancar el programa.
**`.vscode/settings.json`** Configuración de vscode (tipo consola, autosave, etc.)
**`.vscode/README.TXT`** Dependiendo de tu S.O. copia el contenido de **"settings.json.windows"** o **"settings.json.linux"** en **<span style="color:red">"settings.json"</span>**

**<span style="color:blue">android</span>**
**`android/gradle/gradle/wrapper/gradle-wrapper.properties`** Indica que versión de Gradle usar.

**<span style="color:blue">src/app</span>**
**`src/app/components`** Componentes de la aplicación.
**`src/app/guards`** Guardianes usados en las rutas para dar seguridad de acceso a las páginas.
**`src/app/interfaces`** Interfaces usadas en el modelo.
**`src/app/model`** Modelo orientado a objetos de la aplicación.
**`src/app/pages`** Páginas de la aplicación.
**`src/app/services`** Servicios de la aplicación (bd, api, etc.)
**`src/app/tools`** Rutinas reusables de la aplicación.
**`src/app/app.routes.ts`** Rutas de las páginas.

**<span style="color:blue">src/assets</span>**
**`src/assets/fonts`** Fuentes de letras del sistema.
**`src/assets/i18n`** Aquí se agregan los textos de traducción.
**`src/assets/i18n/arn.json`** Traducción del software a mapudungun.
**`src/assets/i18n/en.json`** Traducción del software a inglés.
**`src/assets/i18n/es.json`** Traducción del software a español.
**`src/assets/images`** Imágenes del sistema.

**<span style="color:blue">Base de Datos SQLite</span>**
**`src/assets/sql-wasm.wasm`** Debe ser copiado desde **`"node_modules/sql.js/dist/sql-wasm.wasm"`** y es necesario para usar bases de datos.

**<span style="color:blue">CSS Globales y Temas de Color</span>**
**`src/index.html`** Se deja página en español y se actualiza tag meta obsoleto de ios.
**`src/global.scss`** Estilos globales que pueden ser usados en cualquier página o componente.
**`src/theme/variables.scss`** Paletas de colores de los "temas".

**<span style="color:blue">Archivos de configuración</span>**
**`src/main.ts`** Programación necesaria para:  inicializar la aplicación (InitializeAppService),   usar SQLite (SQLiteService), crear mis bases de datos (DataBaseService), crear rutinas de autenticación (AuthService), almacenamiento simple (Storage),  cliente api (APIClientService), etc.



**`package.json`** Agregar al final: **<span style="color:red">"browser": { "crypto": false }</span>**, pues está obsoleta esta instrucción.
**`angular.json`** **(1)** Agregar **<span style="color:red">"allowedCommonJsDependencies": ["localforage"],</span>** en **"options"**, dentro de "architect->build->options" y arriba de `"outputPath": "www",` para evitar warning de "CommonJS or AMD dependencies can cause optimization bailouts". **(2)** Reemplazar **<span style="color:red">"ci": {"progress": false}</span>** por **<span style="color:red">"ci": {}</span>** para evitar problema de "Property progress is not allowed".

## ¿Cómo ejecutar en el dispositivo móvil?

### Agregar soporte para dispositivo móvil

El siguiente código se ejecuta 1 sola vez y sirve para agregar los archivos y carpetas necesarias para el soporte de **Android**, una vez ejecutado verás que se crea la carpeta **"android"**:

`ionic capacitor add android`

El siguiente código se ejecuta 1 sola vez y sirve para agregar los archivos y carpetas necesarias para el soporte de **ios**, una vez ejecutado verás que se crea la carpeta **"ios"**:

El siguiente código se ejecuta 1 sola vez y sirve para agregar los archivos y carpetas necesarias para el soporte de Android:

`ionic capacitor add ios`

Las siguientes veces que se modifique esta carpeta se pude sincronizar Capacitor con Android usando:

`npx cap sync android`

**NOTA:** No olvidar que la asignatura se dicta para **Android**, por lo que no es necesario instalar el soporte de **ios**, sobre todo si no tienes un **iPhone**.

### Compilar la aplicación

Sólo si estás en Linux debes ejecutar 1 sola vez:

`cd android`
`chmod +x ./gradlew`

Antes de compilar la aplicación debes modificar el archivo **"gradle-wrapper.properties"**, de lo contrario te puede aparecer el error **<span style="color:red">"Running Gradle build - failed!"</span>**. El archivo lo puedes encontrar en:

`android/gradle/wrapper/gradle-wrapper.properties`

Ahora debes escribir dento de `gradle-wrapper.properties` lo siguiente, donde lo más importante es que se use **"gradle-8.9"**:

```
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.9-all.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

Antes de cada traspaso al celular debes compilar la aplicación, ejecutando el comando:

`ionic build`

Al compilar el proyecto se creará la carpeta **"www"** que es la ubicación donde se colocan los archivos que serán entregados por el servidor web o empaquetados para su despliegue en aplicaciones móviles.

### Ejecutar en el dispositivo móvil

Vamos a sincronizar las carpetas e instalar la .apk en el dispositivo móvil, pero lo haremos sin usar emuladores para que no se consuman los recursos del computador. En las siguientes líneas de comando, puedes intercambiar la palabra **"android"** por **"ios"** si lo deseas, dependiendo del sistema operativo que quieras usar.

Ejecutaremos la apicación directamente en el dispositivo móvil, lo cual podemos hacer de 2 formas:

1. **Con liveload:** que es el modo preferido ya que se puede depurar y ver los cambios que realices en tu código fuente en tiempo real:

**`ionic cap run android -l --external --host=192.168.100.27 --port=8100 --target R58T614VCGP`**

| Parámetro   | Explicación |
|-------------|-------------|
| `-l`          | Es liveload, para que al guardar cambios en los archivos de Visual Studio Code, se vean reflejados inmediatamente en el celular. |
| `--external`  | Indica que el servidor de desarrollo estará alojado en todas las interfaces de red |
| `--host`      | Indica la dirección IP del servidor de aplicaciones, la cual debe corresponder a la IP de tu computador. Para que esto funcione, debes tener tu computador conectado a la misma red de WIFI de tu dispositivo móvil, de modo que el celular pueda llegar a la IP del computador, donde estarán alojadas las páginas web de tu aplicación. |
| `--port`      | Indica el puerto para el servidor de aplicaciones |
| `--target`    | Es para indicar el ID de tu celular, por ejemplo, el Target ID con el valor **"R58T614VCGP"** corresponde al celular Samsung del Profesor Cristián Gómez Vega. Para saber el Target ID de tu celular, enchúfalo al equipo y ejecuta en consola: `adb devices` |

2. Sin liveload: con el cual se puede ejecutar, pero no se pueden hacer cambios en tiempo real.

**`ionic cap run android`**

Con este comando se preguntará al usuario que dispositivo móvil o emulador quiere usar, y luego traspasará la aplicación.

### Depuración del programa

Una vez ejecutado tu programa en el dispostivo móvil, debes abrir Chrome y escribir en la URL:

**`chrome://inspect/#devices`**

Con este comando podrás depurar en una nueva ventana de **"DevTools"** de Chrome.

Ahora vamos a configurar vscode para que además puedas poner puntos de interrupción en tu propio programa ¡Esto es magnífico, pues te ayudará a depurar aún mejor!

Para hacer esto, debes seguir los siguientes pasos:

1. Instala el plugin **"Android WebView Debugging"** en vscode.
2. En el archivo **"launch.json"** de vscode, agrega el siguiente código:

```
{
    "configurations": [
        {
        "type": "android-webview",
        "request": "attach",
        "name": "Attach to Android WebView",
        "webRoot": "${workspaceFolder}"
        }
    ]
}
```

Ahora cuando tu aplicación esté ejecutándose en el dispositivo móvil, presiona **`F5`**, luego te aparecerá el nombre de tu dispositivo en la parte de arriba de la ventana de vscode, selecciónalo y estaŕas depurando con vscode. Ahora podrás poner puntos de interrupción y evaluar y modificar variables en línea.


