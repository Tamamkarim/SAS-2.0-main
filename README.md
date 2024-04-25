1. Introduction:
Dream Stay is a full-stack hotel booking website built using the MERN stack, featuring a user-friendly interface for booking reservations at various hotels.


3. Technologies Used:
   
Frontend:
React.js
JavaScript
CSS


Backend:
Node.js
Express.js
MongoDB
Postman (for testing API endpoints)

3. Project Structure:


├── App.js
├── App.test.js
├── fonts
│   ├── InterVariable-Italic.ttf
│
├── index.css
├── index.html
├── index.js
├── pages
│   ├── Dashboards
│   │     ├── edit_hotels
│   │     └── CreateHotels.jsx
│   │     └── CreateRooms.jsx
          ├── EditHotels.jsx
│   │

│   │   ├── components
│   │   │   ├── cheapestHotels.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── RegistrationForm.jsx

│   │   ├── Login.js
│   │   ├── Register.jsx
│   │   ├── VerifiedPage.jsx
│   │   └── VerifiedPage.module.css
│   ├── Hotels Destination
│   │   ├── NOrdic Nights
│   │   ├── Baltic Breeze
├        ── NOrdic Nights
│   │   ├── Scandi Harbor
│   │   ├── Nordic Haven
│   │   ├── components
│   │   │   ├── SearchItems.jsx
│   │   │   ├── SearchItems.css
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Reserve.jsx
│   │   │   ├── Reserve.css
│   │   ├── Home.js
│   │   └── Home.module.css


4. Installation:

Clone the repository from [GitHub link].
Navigate to the project directory.
Install dependencies for both frontend and backend:
bash
Copy code
cd client
yarn install
cd ../Api
yarn start
Ensure MongoDB is installed and running locally.


6. Configuration:
Backend:

MongoDB connection string: Configure in server/config/db.js.
API routes: Defined in server/routes/*.
6. Usage:
Start the backend server:
bash
Copy code
cd Api
yarn start

Start the frontend server:
bash
Copy code
cd client
yarn start
Access the website at http://localhost:3000.


7. Features:

Homepage: Displays featured hotels.
Reservation Page: Lists available hotels.
Reservation Form: Allows users to select dates and make reservations.


8. API Endpoints:

/hotels: GET - Retrieves a list of available hotels.
/reservation: POST - Makes a reservation for selected dates.


9. Future Improvements:

User authentication and authorization.
Payment integration for reservations.
Admin panel for managing hotels and reservations.

10. Conclusion:

In conclusion, this MERN stack hotel booking website provides a user-friendly interface for booking hotels and making reservations. With future improvements, it can become even more robust and feature-rich.

This documentation provides a structured overview of the Dream Stay hotel website, including its purpose, technologies used, project structure, installation steps, configuration options, usage instructions, features, API endpoints, potential future improvements, and a concluding note.
