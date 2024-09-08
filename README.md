Weather Forecast Web Application
Description
This Weather Forecast Web Application allows users to view and search for cities, display detailed weather information for selected cities, and implement a responsive, user-friendly design. The application uses React for the frontend, and optionally TypeScript for type safety.

Core Requirements
Cities Table

Display cities in a table with infinite scroll.
Utilize the API: Geonames All Cities API.
Columns include city name, country name, timezone.
Implement search-as-you-type and autocomplete for city names.
Support filter and sorting for each column.
Clicking or right-clicking on a city name opens the weather page for that city.
Weather Page

Fetch and display weather data using the OpenWeatherMap API.
Show current weather, forecast, and optional advanced features like maps, unit switches, etc.
Update the cities table with basic weather information (highs and lows).
Styling and Design

Use a cohesive color palette and style components effectively.
Implement dynamic backgrounds based on weather conditions.
Use images or animations to represent different weather states.
Responsive Design

Ensure the application works well on various screen sizes using media queries or responsive techniques.
Error Handling

Gracefully handle API errors and invalid queries.
Provide meaningful error messages to users.
State Management

Manage state with React and avoid unnecessary data fetching.
Pass weather data as props where needed.
Type Safety

Utilize TypeScript to define types and interfaces for weather data and API responses.
Optional Features
Use Next.js, MST (MobX State Tree), and Tailwind CSS if preferred.
Implement geolocation to detect and display current location weather.
Maintain history of viewed weather locations.
Provide options to switch between Celsius/Fahrenheit and metric/imperial units.
Allow users to save favorite locations for quick access.
Deployment
Deploy the application using one of the following providers:
Netlify
Vercel
GitHub Pages
AWS Amplify
Firebase Hosting
Setup Instructions
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/weather-forecast-app.git
Navigate to the Project Directory

bash
Copy code
cd weather-forecast
Install Dependencies

bash
Copy code
npm install
Run the Application

bash
Copy code
npm start
Build the Application for Production

bash
Copy code
npm run build
Testing
Ensure thorough testing of all features and edge cases.
Use tools like Jest for unit tests and React Testing Library for component tests.
Documentation
Document setup instructions, API keys, and environment variables in a .env file.
Update documentation and code comments as needed.
Submission
Create a GitHub repository for your project.
Ensure code is well-documented and follows best practices.
Deploy the application and submit the GitHub repository link via the assignment submission form.
