# Weather Forecast Web Application

This project is a "WEATHER FORECAST WEB APPLICATION" built using *React*. The application allows users to search for cities, view city weather details, and explore weather forecasts. TypeScript is optional and not required for this implementation.

# Components Overview

1. *CitiesTable.js*
   - Fetches the list of cities using the public Open Data Soft API.
   - Handles infinite scrolling to load more cities as the user scrolls down.
   - Includes functionality to filter and sort cities by columns such as name, country, and timezone.

2. *WeatherPage.js*
   - Fetches and displays weather information for a specific city using the OpenWeatherMap API with API key.
   - Displays current conditions as well as a forecast for upcoming days.
   - Weather icon change dynamically based on weather conditions.

3. *Home.js*
   - The home page of the application, which displays the CitiesTable component.
   - Links to the weather details page of a selected city.

## Features

### 1. Cities Table
- *Infinite Scroll:* Displays cities in a table format with infinite scrolling for seamless data loading.
- *Search as You Type:* Implements an autocomplete feature to suggest cities as users type in the search bar.
- *Filter & Sort:* Allows filtering and sorting by various columns such as city name, country, and timezone.
- *Navigation:* Clicking on a city name navigates to the weather details page for that city. Right-clicking opens the weather page in a new tab.

### 2. Weather Page
- *Weather Details:* Displays current weather conditions, including temperature, weather description, humidity, wind speed, and atmospheric pressure.
- *Forecast:* Shows future temperature highs and lows, weather descriptions, and precipitation chances.
- *Dynamic Backgrounds:* Adjusts the background of the page based on current weather conditions (e.g., sunny, rainy, cloudy).
- *Additional Features:* Includes options to switch between different measurement units (e.g., Celsius/Fahrenheit) and display the location on a map.

### 3. Responsive Design
- Ensures that the application is responsive, adapting to various screen sizes with the use of media queries and responsive design techniques.

### 4. Error Handling
- Gracefully handles errors in API requests and invalid search queries by displaying relevant error messages to users.

### 5. State Management
- Utilizes React's built-in state management to efficiently display data and avoid unnecessary re-fetching of data across components.

## Optional Features

- *Geolocation:* Automatically detects and displays weather information for the user's current location.
- *Favorites:* Allows users to save their favorite locations for quick access to weather data.
- *Weather History:* Maintains a history of recently viewed locations' weather data.
- *Unit Conversion:* Provides an option to switch between different units of measurement (e.g., Celsius/Fahrenheit, metric).

## Tech Stack

- *Frontend Framework:* React
- *Styling:* CSS Modules (Optional: Tailwind CSS)
- *API Integration:* OpenWeatherMap API
- *Deployment:* Vercel

## Setup Instructions

### Prerequisites

- *Node.js* installed
- *OpenWeatherMap API key* (Free tier available)

# Completion Instructions 

    Functionality to be added

        The app must have the following functionalities

        When the app is opened, Weather forecast Page should be displayed
        When the Weather forecast Page is opened,
        Make HTTP GET request to the CitiesApiUrl
        After fetching the data, the list of Cities name should be displayed
        When we click on the cities name in Home Route is clicked,
        Page should be navigated to the WeatherPage Route with the URL //weather/:city
        When the WeatherPage Route is opened,
        Make HTTP GET request to the openweathermapApiUrl with the weather details
        Example: https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=f3011a5fe893feb91cbc9eda45718f06&units=metric
        After fetching the data, weather details should be displayed

## API Requests 

CitiesApiUrl

API: https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${query}&rows=10&start=${reset ? 0 : page * 10}

Method: GET

Description:
    Returns to all cities list
    
Weather Report API Url

    API: https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=f3011a5fe893feb91cbc9eda45718f06&units=metric

Method: GET

Description:
    Returns to selected city weather details

### Installation

1. Clone the repository:
   bash
   git clone https://github.com/vaishnavi13S/weather-forecast-app.git
   cd weather-forecast
2. Install the dependencies:
   bash
   npm install
Set up environment variables:


bash
Copy code
npm start
This will run the application in development mode. Open http://localhost:3000 to view it in your browser.

Deployment
To deploy the app, follow these steps:

Build the production version of the application:

bash
Copy code
npm run build
Deploy the build folder to your preferred hosting provider. Vercel is a great choice for React applications:

Go to Vercel and sign up or log in.
Create a new project and link your GitHub repository.
Deploy the project with just a few clicks.
