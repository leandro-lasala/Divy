# Divy

**Más momentos juntos, menos cuentas.**

Divy es una aplicación web desarrollada con React que busca facilitar la organización y división de gastos compartidos.

El proyecto cuenta con una landing page informativa y una demo interactiva donde los usuarios pueden seleccionar gastos, calcular el total y dividirlo entre una cantidad determinada de personas.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- React Router
- CSS
- JSON

## Funcionalidades

- Landing page con información sobre la aplicación.
- Navegación entre la página principal y la demo.
- Carga de gastos desde un archivo JSON.
- Selección y deselección de gastos.
- Cálculo automático del total seleccionado.
- División del importe según la cantidad de personas.
- Actualización de los resultados en tiempo real.
- Diseño responsive.

## Instalación

Para ejecutar el proyecto es necesario tener instalados **Node.js y npm**.

1. Clonar el repositorio:

```bash
git clone https://github.com/leandro-lasala/Divy.git
```

2. Ingresar a la carpeta del proyecto:

```bash
cd Divy
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección local indicada por Vite, generalmente `http://localhost:5173`.

## Variables de entorno

El proyecto no requiere variables de entorno para su funcionamiento actual.

Los gastos utilizados en la demo se obtienen desde el archivo local `public/gastos.json`, por lo que no es necesario configurar una base de datos ni credenciales externas.

## Cómo utilizar la demo

1. Ingresar a **Probá Divy** desde la página principal.
2. Seleccionar los gastos que se desean compartir.
3. Indicar la cantidad de personas entre las que se dividirá la cuenta.
4. Visualizar automáticamente el total y el importe correspondiente a cada persona.

## Organización del proyecto

```text
public/
  gastos.json
  imagenes/
  fonts/

src/
  components/
    Header.jsx
    Hero.jsx
    Gasto.jsx
    beneficios.jsx
    Footer.jsx

  hooks/
    useGastos.js
    useSeleccionados.js

  paginas/
    Demo.jsx

  App.jsx
  App.css
```

Los componentes cuentan con archivos CSS para organizar los estilos.

## Decisiones

### 1. Separación de la lógica mediante hooks personalizados

Decidimos crear dos hooks personalizados para separar la lógica de la interfaz visual.

- `useGastos`: se encarga de obtener los gastos desde el archivo JSON y administrar los estados de carga y error.
- `useSeleccionados`: administra los identificadores de los gastos seleccionados.

**¿Por qué?** Para evitar concentrar toda la lógica dentro del componente `Demo.jsx`, facilitar la lectura del código y permitir su reutilización.

### 2. Organización por componentes y carpetas

Dividimos la aplicación en componentes reutilizables, como `Header`, `Hero`, `Beneficios`, `Footer` y `Gasto`.

También separamos la página de demostración en la carpeta `paginas` y los hooks personalizados en `hooks`.

**¿Por qué?** Para mantener una estructura ordenada, facilitar el trabajo en equipo y permitir modificar cada sección sin afectar innecesariamente a las demás.

### 3. Uso de un archivo JSON local para los gastos

Decidimos utilizar un archivo JSON con gastos de ejemplo en lugar de implementar una base de datos o un servidor externo.

Los datos se cargan mediante un hook y se utilizan para calcular el total de los gastos seleccionados.

## Distribución de tareas

El proyecto fue desarrollado de manera grupal, distribuyendo las responsabilidades entre diseño, desarrollo e integración.

- **Leandro Lasala:** desarrollo de la demo interactiva, lógica de selección de gastos, cálculo de importes y hooks personalizados.
- **Fátima Funes:** desarrollo del footer, maquetación y estilos CSS, adaptación responsive y colaboración en el diseño visual de la landing page.
- **[Micaela Carollo]:** desarrollo de la sección Beneficios, elaboración del UI Kit y  elección de colores y tipografías.

- **Trabajo colaborativo: definición de la identidad visual de Divy, elección de colores y tipografías, revisión estética e integración de las distintas secciones de la aplicación.

## Control de versiones

Utilizamos Git y GitHub para organizar el desarrollo del proyecto.

El historial de commits puede consultarse en el repositorio.

## Repositorio

https://github.com/leandro-lasala/Divy
