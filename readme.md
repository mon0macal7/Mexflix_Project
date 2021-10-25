# M&Movies 

Índice

    1. Descripción
    2. Definición de Usuario e Historias de usuario (UX)
    3. Requerimientos técnicos
    4. Pseudocódigo
    5. Producto final
   
---
## 1. Descripción

En esta página se muestra un catálogo de 32 películas musicales las cuáles  se dividen en cuatro secciones:

-Recomendaciones
-Musicales de drama
-Musicales de comedia
-Biopics musicales
---

## 2. Historia de usuario

Uno de los sectores más afectados por la pandemia fue el artístico; teatros y recintos musicales se vieron afectados, de igual manera diversos centros de enseñanza musical.

La enseñanza vía remota suele ser tediosa para muchos estudiantes, quienes prefieren ver series y tik toks. 

Este sitio es un punto de encuentro entre ambas generaciones, en la cual los profesores pueden utilizarla como recurso  didáctico y recreativo.

---
## Objetivos :

 - Los usuarios quieren leer una selección adecuada de películas recomendadas para sus intereses.

- El usuario quiere ver un buen catálogo de películas ya preseleccionadas.

- El usuario quiere poder buscar para encontrar más películas por título, género y actores. 
  
---

## Proceso de flujo de trabajo

Se utiliza el método agile para distribuir las tareas del proyecto

![Texto alternativo](.src/../assets/Kanban_process.png)

---
## 3. UI(user interface)

![Pantalla uno](.src/../assets/screen1.jpg)
![Pantalla dos](.src/../assets/screen2.jpg)

---
## Diagrama de flujo

![Diagrama de flujo](.src/../assets/melody_flex-2.jpeg)

![Prototipo screen 1](.src/../assets/prototypeScreen1.png)
![Prototipo screen 2](.src/../assets/prototype.png)

---


### 4.Pseudocódigo  📋

## Sección HTML

* Se crean las pantallas
* Se crean las secciones de nuestro catálogo
* Se utiliza una plantilla de barra de navegación y card mediante link de bootstrap

## Sección index.js

* En esta sección se controla el DOM
* Se asigna funcionalidad a los botones de búsqueda
## Sección data.js

* Se realizan consultas a la API de las películas, posteriormente se crea una fx para la búsqueda.
* Para que el contenido sea dinámico se itera mediante la fx: FOR OF
* Se declara una función para renderizar cada sección
* Se crea un arreglo con las ID de las peliculas preseleccionadas
* Se imprime en el browser mediante la propiedad: INNER HTML

---
## 7. Testing

La visualización de la pantalla 1 permite al usuario acceder mediante el atajo de clickear en la imagen ó ingresar mediante un formulario con usuario y contraseña.

En la pantalla 2, se muestra Título de la página botón de búsqueda y botones para acceder 
a cada sección del catálogo.

* Producto final:
![Prototipo screen 2](.src/../assets/final.page.png)
##  CopyRight

© Copyright 2021-Proyecto#4- Mexflix streaming by Monica Macal