# Hero Cards

Aplicación web sobre Hero Realms, un juego de construcción de mazo en el que debemos conseguir a los mejores campeones y derrotar a nuestros enemigos reduciendo a 0 sus puntos de vida para lograr la victoria. Un juego que personalmente me gusta mucho.

## El proyecto

Este proyecto tiene como objetivo la creación de una API y sitio web para mostrar el universo del juego Hero Realms con fines educativos, es decir, poner en práctica mis conocimientos en diferentes tecnologías. Este proyecto no tiene ánimo de lucro.

## Tecnologías usadas

Los datos mostrados en la API se obtienen a partir de Web Scraping mediante la librería [Cheerio](https://github.com/cheeriojs/cheerio). Se utiliza [Express](https://expressjs.com/) el framework backend más popular para Node.js

Utilizando Github Action se realiza el web scraping todos los domingos a la 01:00 hs.
La API se despliega en [Railway](https://railway.app/).

El sitio web se desarrolla con [React](https://es.reactjs.org/), utilizando [Tailwind](https://tailwindcss.com/) para estilizar la interfaz de usuario.

## API

URL: https://hero-cards-production.up.railway.app/

### Endpoint

- GET - api/herocards: Devuelve todas las cartas del juego Hero Realms
- GET - api/herocards/:id Devuelve una carta
- GET - /ping Comprueba la respuesta de la API

<br>

## Próximas características

- [x] Buscador de cartas por ID
- [ ] Buscador de cartas por nombre, facción y otras c- [ ] aracterísticas
- [ ] Guardar en la base de datos MongoDB los datos del Scraping
- [ ] Home page y extras

<br>

## ¿Qué es el Web Scraping?

Web scraping o raspado web, es una técnica utilizada mediante programas de software para extraer información de sitios web.​ Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación. [Wikipedia](https://es.wikipedia.org/wiki/Web_scraping)

<br>

# Datos del juego

- El juego base consta de 144 Cartas:
  - 64 cartas básicas
  - 20 cartas de la Facción Imperial
  - 20 cartas de la Facción Cofrade
  - 20 cartas de la Facción Necros
  - 20 cartas de la Facción Feral

* Editorial: Devir Iberia.
* Duración de una partida: 20-30 minutos.
* Complejidad: 1,91 / 5
* Edad: +12 años.
* Cantidad de jugadores: 2 a 4.
* Diseño: Robert Dougherty, Darwin Kastle
* Ilustración: Randy Delven, Vito Gesualdi, Antonis Papantoniou

- Mecánicas:

  - construcción de mazos
  - gestión de la mano
  - selección de cartas

  <br>

## Descripción

Construye tu mazo en el universo de fantasía de EPIC con toda la intensidad de las batallas espaciales de Star Realms.

Hero Realms, el juego de construcción de mazo de bolsillo que enfrenta de dos a cuatro héroes.

Durante un milenio, el Imperio estuvo en guerra. Impulsado por el rigor militar y una alianza sin precedentes con los dragones, los Ejércitos Imperiales celebraron incontables victorias y padecieron escasas derrotas. El Imperio creció tanto que su mayor enemigo ya no era alguna de las naciones bárbaras del Este, sino su propio tamaño ingobernable. En sus fronteras, las victorias y la expansión fueron sustituidas por un ciclo interminable de rebeliones y reconquistas.

## Objetivo

Dejar al resto de jugadores sin puntos en su marcador, y ser el último superviviente.

Conoce más sobre [Hero Realms](https://www.herorealms.com/)
