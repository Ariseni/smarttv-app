This is a Next.js project bootstrapped with create-next-app.

Getting Started
Clone the project
git clonse https://github.com/Ariseni/smarttv-app.git

First, run the development server:

npm run dev (optionally run npm install to install the deps)

Open http://localhost:3000 with your browser to see the result.

Application consists of 5 pages

Discover 
    - entry page where you can select a movie among a number of genres (or favorites if you've added any)

Search 
    - Search movies by some text using the input in header, also shows favorites if available

/search/[id] 
    - parallel route that shows a modal of a movie selected from the slider. if you copy the link and open it in another browser or refresh the page it will open as a full page (not a modal) 
    - it contains more data about the movie and options of playing and adding to favorites
/discover/[id] 
    - same as search but for discover page

/watch
    - you can get here by selecting play on movie modal
    - watch a movie by searchParams id 
    - redirects to /discover if movie by id not found

API-CLIENT
Client uses react query to fetch information from the api which then fetches the data (if it's stale) from the 3rd party API (in this case TMDB api)

STORAGE
application makes use of Zustand store to persist data (favorites store)