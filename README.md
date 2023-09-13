<p align="center"><img src="https://res.cloudinary.com/chaca-sa/image/upload/v1694637785/362663470_251547820610645_7647153008441625541_n_tfuzkl.jpg"/></p>

# 🧑‍🦰 Proyecto Humberto

## 😀 Objetivos

- Intentar sacar 5 en el primera tarea extraclase de web y que el compañero José no arme drama desde el inicio del semestre.

- Rendir tributo a Amaya que ahora mismo debe estar haciendo este baile por no tener que estar dando esta asignatura.
<p align="center"><img align="center" src="https://res.cloudinary.com/chaca-sa/image/upload/v1682915008/95bc112f-b9d9-44f9-9a29-b8157a92506f_jmkats.webp" style="width: 300px"/></p>

## 👨‍⚕️ Cosas a hacer en beneficio de la salud mental de los integrantes

- Utilizar **VS Code** como IDE de código. **(el que no lo utilice lo multo)**

- Descargar las siguientes dos extensiones para el **Visual Studio Code**

  ### Prettier

    <img src="https://res.cloudinary.com/chaca-sa/image/upload/v1694638278/download_fcqfld.png"/>

  Una bella extensión para formatear código y que se vea más bello y no dañe nuestros ojos y menos los de Héctor que no soporta eso.

  **Hay que configurarlo para que se ejecute cada vez que se guarde un archivo, no se si viene por defecto de esa forma.**

  ### Live Server

    <img src="https://res.cloudinary.com/chaca-sa/image/upload/v1694638448/images_qtsimi.jpg"/>

  Una extensión para poder levantar un puerto con el html que se esté programando y refrescarlo con cada cambio que se haga sin tener que recargar manualmente.

  > En caso de existir cualquier problema con la configuración de alguno de estas extensiones comunicarse con el departamento de reparaciones **(o sea con Héctor)**

- Para este caso como hay que ahorrar estrés todo el mundo va a trabajar en la misma rama **main**. Por lo que más quieran hagan `git pull` antes de trabajar que sino va a haber demasiados conflictos y quisiera estar vivo para el 2040.

## 👠 Estilo del formulario

El formulario al igual que la aplicación en JAVA va a tener este aspecto (obvio sin esta pinta de enfermo de hospital).

<p align="center"><img src="https://res.cloudinary.com/chaca-sa/image/upload/v1694639239/Screenshot_158_qkzm93.png"/></p>

## 💻 Cosas a aclarar del código

- Cada sección del formulario (o sea cada campo a llenar) está puesto en un `<section>`. Dentro de cada uno debe ir un `<label>` y a su lado el `<input>` correspondiente

```html
<section>
  <label for="input-test">Test:</label>
  <input type="text" id="input-test" name="input-test" />
</section>
```

- Cada `<label>` debe tener un atributo `for` que indica el id del `<input>` al que le pertenece. Por tanto este último debe tener un id único.

- Como actualmente no utilizamos base de datos la parte de **Equipo** puede ser un `<select>` con valores de equipos

## 📖 Tareas

A continuación se presentan las tareas sexys que tiene que hacer cada uno.

> Por favor cuando terminen una tarea ir a la que hicieron y cambiar el emoji ⭕ por ✅

### 🧑‍⚕️ José

- ⭕ Querer a Baster
- ⭕ Añadir validaciones a cada uno de los campos del formulario tanto a nivel de html

### 🍅 Alejo

- ⭕ Querer a Baster
- ⭕ Poner todos los campos del formulario en el html. **(No ponerle los atributos de validaciones)**

### 🐵 Héctor

- ⭕ Querer a Baster
- ⭕ Crear la sección de botones y poner los estilos del formulario en el CSS
