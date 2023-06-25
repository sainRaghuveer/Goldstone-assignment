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

# Folder structure and schema structure and endpoints

## 1. Backend folder structure

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── user.model.js
├── routes
|    └── user.route.js
|    └── exportCSV.route.js
├── middleware
|    └── 
├──controllers
|    └── user.controller.js
|    └── exportCSV.controller.js
```

Note: 

- Before doing anything first create `.env` file and put `port` , `mongoURl`.
- `port` is for listening the server.
- `mongoURl` is for running database and store your data in database so put your mongo link.


## Schema Design

<br>

<h3><strong>User Schema</strong><h3>

```js
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum:{
            values:["male", "female"],
            message:"Choose your gender only male or female"
        }
    },
    status: {
        type: String,
        enum:{
            values:["active", "inactive"],
            message:"Choose your status only active or inactive"
        }
    }
}
```

<br>

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/user/userdata</td>
            <td>This endpoint should allow users to add the data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user/data</td>
            <td>This endpoint should allow users to view the data od user</td>
            <td>200</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/api/user/:id</td>
            <td>This endpoint should allow users to edit own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/export-csv</td>
            <td>This endpoint should allow users to download the content in csv file all data</td>
            <td>200</td>
        </tr>
    </tbody>
</table>

<br>

## Backend Deployed Link 

<br>

<a href="https://goldstone-assignment-backend.onrender.com/"><strong>Render Deployed link of Application</strong></a>

<br>

## 2. Frontend folder structure

```
├── public
|    └── favicon.ico
|    └── index.html
|    └── logo192.png
|    └── logo512.png
|    └── manifest.json
├── src
|    └── components 
|    |      └── Navbar.jsx  
|    |      └── StatusMenu.jsx  
|    |      └── UserCard.jsx  
|    |      └── UserUpdateModal.jsx  
|    └── customHook
|    |      └── UseToast.jsx       
|    └── pages 
|    |      └── Home.jsx   
|    └── routes
|    |      └── AllRoutes.jsx  
|    └── styles
|    |      └── Home.css  
|    └── App.css
|    └── App.js
|    └── App.test.js
|    └── index.css
|    └── index.js
|    └── logo.svg
|    └── reportWebVital.js
|    └── setupTests.js
├── styles
|    └── index.css
|    └── product.css
```

<br>

Note : `Don't Change any file name or do not delete any files`

<br>

## API endpoints with Base Url

### BaseUrl : `https://goldstone-assignment-backend.onrender.com/`

<br>

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>`${BaseUrl}/api/user/userdata`</td>
            <td>This endpoint should allow users to add the data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>`${BaseUrl}/api/user/data`</td>
            <td>This endpoint should allow users to view the data od user</td>
            <td>200</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>`${BaseUrl}/api/user/:id`</td>
            <td>This endpoint should allow users to edit own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>`${BaseUrl}/api/export-csv`</td>
            <td>This endpoint should allow users to download the content in csv file all data</td>
            <td>200</td>
        </tr>
    </tbody>
</table>

<br>


### BaseUrl : `https://upforce-backend.onrender.com`

<br>

## Frontend Deployed Link

<br>

<a href="https://goldstone-assignment-raghuveersain.vercel.app/"><strong>Vercel Frontend deployed link</strong></a>

<br>

## Additional Information
- The database connection details are specified in the backend code (backend/index.js). Make sure to update the connection URI if necessary.
- For detailed information about the API routes, request/response examples, and available endpoints, refer to the API documentation provided by Postman.
- Screenshots of the frontend webpages can be found in the screenshots.


# ScreenShots

<br>

## Home Page
 
<img src="" alt="image"/>

<br>
    
##  Status Menu  
    
<img src="" alt="image"/>

<br>
    
## Action Menu
    
<img src="" alt="image"/>

<br>
    
## Single user View   

<img src="" alt="image"/>

<br>