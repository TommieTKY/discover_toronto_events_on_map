# Discover Toronto Events on Map

Discover Toronto Events on Map is a dynamic web application that allows users to explore festivals and events in Toronto through an interactive Google Map interface. Users can filter events by date and view their precise locations, making it easy to plan outings and stay informed about the city's vibrant event scene.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or above)
- A Google Maps API Key (with access to the Maps JavaScript API and Places Library)

## Setup

1. **Clone the Repository:**

   ```sh
   git clone <repository-url>
   cd discover-toronto-events-on-map
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the project root and add your Google Maps API key:

   ```env
   MAP_API_KEY=your_google_maps_api_key_here
   ```

## Running the Project

To start the development server, run:

```sh
npm run dev
```

This command will launch the Express.js server and open the application, allowing you to view and interact with the map.

## License

This project is licensed under the MIT License.
