# Goldstone User Management Application

This project is a user management application that allows you to fetch user data from an external API, edit user information, and export user data to a CSV file. It consists of microservices for handling data operations, a frontend built with React and Chakra UI for user interaction, and a MongoDB database for storing user information.

## Use Case

1. Accessing User API:
   - To fetch user data, use the following API endpoint: `https://gorest.co.in/public-api/users`
   - Please ensure that you are logged in with your Gmail ID to obtain the required API token.

2. Storing User Data:
   - When you receive a successful API response, store the user data in the User Master table within the MongoDB database.
   - Each user object received from the API should map to a record in the User Master table.
   - Store the following fields for each user: Id, name, email, gender, status, Created_at, and Updated_at.

3. Editing User Data:
   - Create an edit screen in the frontend where users can update their information.
   - When a user modifies their data and submits the changes, make a request to the web service to update the corresponding record in the database.

4. Exporting User Data:
   - Implement a microservice responsible for exporting the User Master data to a single-sheet CSV file.
   - This CSV file should contain all the user records stored in the database.

## Technology Stack

- Frontend: React JS with Chakra UI
- Backend/Microservice: Node.js with Express.js
- Database: MongoDB

## Project Structure

The project follows a client-server architecture, with the frontend and backend components separated.

- The frontend code is located in the `frontend` directory.
- The backend code is located in the `backend` directory.

## Setup Instructions

1. Clone the Repository:
   ```bash
   git clone https://github.com/sainRaghuveer/Goldstone-assignment.git
   ```

2. Backend Setup
   - Navigate to the backend directory:
   ```bash
   cd backend
   ```
   - Install the dependencies:
   ```bash
   npm install
   ```
   - Start the backend server:
   ```bash
   npm run server
   or
   npm start
   ```

3. Frontend Setup
   - Navigate to the Frontend directory:
   ```bash
   cd frontend
   ```
   - Install the dependencies:
   ```bash
   npm install
   ```
   - Start the backend server:
   ```bash
   npm start
   ```

4. Access the Application:

Open your web browser and visit http://localhost:3000 to access the user management application.   



## Additional Information
 - The database connection details are specified in the backend code (backend/index.js). Make sure to update the connection URI if necessary.
- For detailed information about the API routes, request/response examples, and available endpoints, refer to the API documentation provided by Postman.
- Screenshots of the frontend webpages can be found in the screenshots.
