# CS7025-Programming-for-Digital-Media
#JavaScript
Projects Page — Overview

The Projects page showcases an interactive gallery of my featured design and development works. Instead of using static HTML, the entire section is generated through JavaScript to ensure scalability, structure, and data-driven rendering.

What I Built
1. Dynamic Project Rendering (Data-Driven UI)

I created a  data.js file that stores all project information, including titles, descriptions, and image paths.
The script.js file loads this data and generates each project card via DOM manipulation.

2. Reusable Component Function

I implemented a createProjectCard() function that builds each project card using JavaScript.

3. OOP Architecture with a Portfolio Class

To demonstrate abstraction and better code organization, I created a Portfolio class responsible for rendering all cards.

4. Interactive Expand Mode (State Toggle)

A dedicated button allows users to switch between:

Full Project List View

Expanded View of the First Project

This feature uses:

A boolean state toggle (expanded)

Conditional rendering

Dynamic class switching (e.g., .expanded)

Smooth CSS animations

The expanded mode enlarges the first project card, increases typography size, and adds a shadow/scale effect for a more immersive viewing experience.
