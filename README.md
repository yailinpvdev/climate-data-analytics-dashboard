# Climate Data Analytics Dashboard

![Dashboard Preview](src/assets/dashboard-preview.png)

A modern React dashboard that visualizes real-time climate data using external APIs and interactive charts.

---

## Live Demo

https://yailinpvdev.github.io/climate-data-analytics-dashboard/

---

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Recharts](https://img.shields.io/badge/Recharts-Data%20Visualization-blue?style=flat)
![API](https://img.shields.io/badge/API-OpenMeteo-green?style=flat)

---

## Features

- Search weather by city
- Display real-time temperature and wind speed
- Interactive temperature chart for the next 24 hours
- Dynamic dashboard metric cards
- Animated data visualization

---

## APIs Used

This project uses the **Open-Meteo API** to retrieve real-time weather data.

- Geocoding API to convert city names into geographic coordinates
- Weather Forecast API to retrieve temperature and wind data

API Documentation:  
https://open-meteo.com/

---

## How It Works

1. The user enters a city name.
2. The Geocoding API converts the city name into geographic coordinates.
3. The Weather API retrieves climate data based on those coordinates.
4. The dashboard updates the chart and metric cards dynamically.

---

## Installation

Clone the repository:
git clone https://github.com/yailinpvdev/climate-data-analytics-dashboard.git

Go to the project folder:
cd climate-data-analytics-dashboard

Install dependencies:
npm install

Run the development server:
npm run dev

Then open:
http://localhost:5173

---

## Deployment

This project is deployed using **GitHub Pages**.

Live site:  
https://yailinpvdev.github.io/climate-data-analytics-dashboard/

---

## Author

**Yailin P. Velandia**  
Software Developer in training
