# Guía de Despliegue del Proyecto

Este documento explica los pasos necesarios para desplegar el proyecto
en un entorno de hosting estándar.

## Requisitos Previos

Antes del despliegue, asegúrate de contar con:

-   **Node.js** (versión 18 o superior recomendada)
-   **NPM**
-   Acceso al **hosting** o servidor donde se realizará el despliegue
-   Acceso para subir archivos vía FTP, panel del hosting o integración
    con Git

## Instalación del Proyecto

1.  **Clonar el repositorio**

    ``` bash
    git clone <URL-del-repositorio>
    ```

2.  **Ingresar al directorio del proyecto**

    ``` bash
    cd nombre-del-proyecto
    ```

3.  **Instalar dependencias**

    ``` bash
    npm install
    ```

## Construcción para Producción

Genera la versión optimizada para producción:

``` bash
npm run build
```

Esto creará una carpeta llamada **dist/** lista para desplegar.

## Despliegue al Hosting

Dependiendo del método de carga que usen:

### ✔ Opción 1: Subida manual (FTP / File Manager)

1.  Generar el build.\
2.  Comprimir el contenido de la carpeta **dist/**.\
3.  Subirlo al hosting y ubicarlo en la carpeta correcta (por ejemplo,
    `public_html/`).\
4.  Asegurar que el hosting permite servir archivos estáticos.
5.  Extraer archivos.

### ✔ Opción 2: Despliegue mediante Git

1.  Crear un repositorio vacío.

2.  Agregar el remoto:

    ``` bash
    git remote add production <URL-del-repositorio>
    ```

3.  Hacer push:

    ``` bash
    git push production main
    ```

4.  El hosting debe estar configurado para leer el repositorio y
    ejecutar el build.


## Verificación del Despliegue

Una vez subidos los archivos:

-   Abrir la URL del dominio.
-   Confirmar que todas las rutas, imágenes y scripts funcionan
    correctamente.
-   Revisar consola del navegador por errores.

## Soporte Técnico

Para cualquier inconveniente, no duden en contactarme

------------------------------------------------------------------------

## Estructura del Proyecto

/
├── public/                     # Archivos estáticos accesibles públicamente
│   ├── favicon.ico
│   ├── icons/
│   └── images/
│
├── src/                        # Código fuente principal del proyecto
│   ├── components/             # Componentes reutilizables (UI, módulos, widgets)
│   ├── layouts/                # Plantillas de diseño global
│   ├── pages/                  # Páginas del proyecto
│   ├── scripts/                # Scrips adicionales del proyecto                 
│   ├── styles/                 # Estilos globales y parciales (CSS / Tailwind) 
│   └── 
│
├── .gitignore                  # Archivos y carpetas ignorados por Git
├── .astro.config               # Archivo central de configuración
├── package.json                # Dependencias y scripts del proyecto
├── package-lock.json           # Versión exacta de dependencias
├── README.md                   # Documentación del proyecto
├── tailwind.config             # Configuración global, constantes, variables
└── tsconfig.json / jsconfig.json   # Configuración del entorno


**Gracias por confiar en mi para el desarrollo de esta web.**
