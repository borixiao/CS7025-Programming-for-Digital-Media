# CS7025-Programming-for-Digital-Media
#JavaScript
Projects Page — Overview

The Projects page showcases an interactive gallery of my featured design and development works. Instead of using static HTML, the entire section is generated through JavaScript to ensure scalability, structure, and data-driven rendering.

<h3>What I Built</h3>

<h4>A. Project Rendering</h4>

I created a  data.js file that stores all project information, including titles, descriptions, and image paths.
The script.js file loads this data and generates each project card via DOM manipulation.

<h4>B. Reusable Component Function</h4>

I implemented a createProjectCard() function that builds each project card using JavaScript.

<h4>C. OOP Architecture with a Portfolio Class</h4>

To demonstrate abstraction and better code organization, I created a Portfolio class responsible for rendering all cards.

<h4>D. Interactive Expand Mode (State Toggle)</h4>

A dedicated button allows users to switch between:

Full Project List View

Expanded View of the First Project

This feature uses:

A boolean state toggle (expanded)

Conditional rendering

Dynamic class switching (e.g., .expanded)

CSS animations

The expanded mode enlarges the first project card, increases typography size, and adds a shadow/scale effect.
