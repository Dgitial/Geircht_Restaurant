Overview
This is a fully responsive restaurant website built with React. It showcases the restaurant's offerings, including a menu, about section, contact information, and multimedia content like video and images. The project is designed with modern UI elements and includes a variety of interactive features to enhance the user experience.

Features
Navbar: A responsive navigation bar that adjusts for mobile screens and includes links to key sections of the website.
Menu: A list of items with their title, price, and tags.
About Us: A section that introduces the restaurant and its history.
Contact Section: A section with address, opening hours, and a call-to-action to visit the restaurant.
Newsletter Subscription: An interactive form to subscribe to the restaurant’s updates.
Video Intro: A dynamic video section that auto-plays with a toggle for play/pause.
Footer: A footer overlay that adds visual depth to the bottom of the page.
Components
Navbar.js
The Navbar component provides the main navigation for the website. It includes:

Logo and Links: A responsive layout with links to different sections (Home, About, Menu, Contact, Awards).
Responsive Menu: A hamburger menu for mobile screens, allowing users to navigate the site easily.
Login and Book Table Links: Buttons for logging in or registering, and booking a table at the restaurant.
MenuItem.js
The MenuItem component is used to display individual items in the menu:

Title, Price, and Tags: Displays the name, price, and a list of tags (e.g., ingredients) for each menu item.
Stylish Layout: Custom styling is applied to highlight the title, price, and tags, providing an elegant display.
FooterOverlay.js
The FooterOverlay component adds a layered effect to the footer section of the website:

Overlay Layers: A dark overlay and background image combine to give the footer a rich, visually appealing appearance.
Newsletter.js
The Newsletter component provides a subscription form for users to stay updated with the restaurant:

Title and Form: Includes a heading, a description, an email input field, and a submit button for subscribing to updates.
SubHeading Integration: Uses the SubHeading component to keep the design consistent.
SubHeading.js
The SubHeading component is a reusable element that displays a title with an image beneath it:

Title Display: Renders a section title in a consistent, stylish font.
Decorative Image: Adds a decorative spoon image beneath the title, contributing to the restaurant’s theme.
AboutUs.js
The AboutUs component introduces the restaurant and its history:

Overlay and Background: Features an overlay with a letter "G" and a background image that fits the theme.
Content Sections: Includes an "About Us" section with text and a "Know Us" button, as well as a "History" section.
Interactive Design: Divided into sections for an organized layout.
FindUs.js
The FindUs component offers the restaurant’s contact details and location:

Location and Hours: Displays the restaurant’s address and operating hours.
SubHeading Integration: Uses the SubHeading component for a consistent title style.
Button and Image: Includes a button for visiting the restaurant and an image related to the section.
Intro.js
The Intro component provides an interactive video intro:

Video Player: Plays a video on loop with a toggle to play/pause the video using React’s state and refs.
Interactive Overlay: Features play/pause icons that allow users to control the video, adding an engaging multimedia element to the site.
Installation
Prerequisites
Make sure you have Node.js installed on your machine.

Steps
Clone the repository:https://github.com/Dgitial/Geircht_Restaurant.git

    ```bash
      git clone https://github.com/Dgitial/Geircht_Restaurant.git
      
cd Geircht_Restaurant
Install dependencies:

    ```bash
      npm install
      
Run the project locally:

    ```bash
      npm start
      
Open http://localhost:3000 in your browser to view the app.

Technologies Used
React: For building the user interface.
React Router: For handling routing and navigation.
CSS: For custom styling.
React Icons: For icons (e.g., play/pause buttons).
React Hooks: For managing state and refs.
License
This project is licensed under the MIT License - see the LICENSE file for details.

