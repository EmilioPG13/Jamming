# Project Overview

Welcome to the "Adopt a Pet!" project. This is a pet adoption website that allows users to view all animals of a specific species and view the profiles of individual animals. The objective was to add client-side routing to the application using React Router so that the `HomePage` displays only pets of the species the user wants to view, and the `PetDetailsPage` displays when the browser’s URL includes a specific pet’s `id`. If a user clicks a pet whose details are not available, they are redirected to a `PetNotFoundPage`, where they can return to the root page.

# Technologies Used

This project was created using Create React App and employs React Router for client-side routing. The application also uses Mock Service Worker (MSW) to replicate the functionality of an external API, necessitating the use of Google Chrome with enabled third-party cookies.

# Features and How to Run Application

Key features include a `HomePage` that fetches and displays all adoptable pets, a `PetDetailsPage` for individual pet details, a `SearchPage` that filters pets by name, and a `PetNotFoundPage` for instances when a pet's details are unavailable.

To run this application on your own computer, follow these steps:

1. Download the required files.
2. Open the project folder in your text editor.
3. Install all dependencies by running the command `npm install`.
4. Start the application locally using the command `npm start`.
