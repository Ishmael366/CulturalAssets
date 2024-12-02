Frontend Developer Notes
Framework: React
Why Use Create-React-App?
React is an open-source JavaScript library developed by Facebook for building user interfaces. Its component-based architecture keeps the app organized and enables efficient state management. Similar to how Spring Boot simplifies backend setup, Create-React-App streamlines the initial configuration for React applications, allowing developers to focus on styling and functionality without boilerplate setup.

Components
The frontend is organized into three primary components:

App.js
App.js serves as the entry point for the application, handling overall structure and basic functionality. This component sets up the initial state, renders the main elements on the landing page, and displays any animations or text related to the app’s purpose.

Map.js
Map.js manages the core UI, specifically an interactive map that displays cultural assets. HERE Maps scripts are loaded in public/index.html and accessed in this component. Upon rendering, Map.js obtains the HERE API key, configures the map, and sets it in the component's state. The following main functions are provided:

displayRoute(): This method adds routes and markers to the map based on backend data (adapted for asset tracking rather than routing).
getCgStations(): Retrieves a set of points of interest, converts them to markers, draws a range circle, and adds them to the map.
These methods are passed as props to DataBox.js, which displays user inputs alongside the map.

DataBox.js
DataBox.js renders a user input box that serves as the primary UI for filtering and searching cultural assets. It includes methods for handling user input and validating requests:

Autocomplete: The origin and destination fields use HERE’s Autocomplete API to suggest location options dynamically.
Submit and Validation:
An onChange method listens for changes in input fields.
A submit button triggers input validation through handleValidation(). This method checks the fields to ensure input validity before making API requests.
Upon valid input, the component makes a backend request and uses responses to update the map via Map.js methods. If input is invalid, a pop-up alerts the user to correct the missing or erroneous details.
Other Libraries
Testing Library: Used for component testing.
Mock Service Worker: Lightly used for simulating backend requests during tests.