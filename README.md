# CRUD con Local Storage en JavaScript Vanilla

Este proyecto es una aplicación sencilla que realiza operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando **Local Storage** para almacenar los datos de manera persistente. El objetivo principal del proyecto es aprender cómo interactuar con el almacenamiento local y cómo hacer las operaciones CRUD en una aplicación web usando JavaScript puro.

## Tecnologías utilizadas

- **HTML**: Estructura básica de la página web.
- **CSS**: Para el estilizado de la interfaz.
- **JavaScript (Vanilla)**: Lógica del lado del cliente utilizando JavaScript puro para realizar operaciones CRUD de manera asíncrona con Local Storage.
- **Bootstrap**: Framework CSS para mejorar el diseño y la interfaz de usuario.

## Requisitos

Este proyecto no tiene dependencias adicionales más allá de un navegador moderno. Puedes ejecutarlo directamente en tu entorno local sin necesidad de instalar herramientas adicionales.

## Instalación

1. Clona o descarga el repositorio en tu máquina local:

```bash
git clone https://github.com/jcomte23/crud-localstorage.git
```

2. Entra al directorio del proyecto:

```bash
cd crud-localstorage
```

3. Abre el archivo `index.html` en tu navegador y verás la aplicación en funcionamiento.

## Estructura del Proyecto

```bash
/crud-localstorage
│
├── /assets              # Archivos estáticos (imágenes, fuentes, etc.)
├── /css                 # Archivos CSS con los estilos del proyecto
├── /js                  # Archivos JavaScript con la lógica del proyecto
├── index.html           # Página principal
├── README.md            # Este archivo
└── package.json         # Dependencias y scripts (si usas algún empaquetador como Vite)
```

## Funcionalidad

### Crear, Leer, Actualizar, Eliminar con Local Storage

El sistema permite al usuario agregar, editar y eliminar elementos en una lista utilizando el **Local Storage** del navegador para almacenar los datos. A continuación te muestro cómo funciona cada operación:

1. **Crear**: Se pueden agregar nuevos elementos a la lista. Los datos se almacenan en Local Storage.
2. **Leer**: Al cargar la página, los datos existentes en Local Storage se cargan y se muestran en la interfaz.
3. **Actualizar**: El usuario puede modificar los datos de un elemento existente.
4. **Eliminar**: Los elementos pueden ser eliminados tanto de la interfaz como del almacenamiento local.

## Contribución

Si deseas contribuir al proyecto, puedes hacerlo de la siguiente manera:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios.
4. Haz un commit con un mensaje descriptivo de los cambios (`git commit -m 'Agregada nueva funcionalidad'`).
5. Sube tus cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
6. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
