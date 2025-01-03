# Backend README

## Project Overview
This project is the backend for the GetWell application. It provides the necessary APIs and database interactions to support the frontend application.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/Harishanth03/GetWell.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd GetWell/backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root of the backend directory and add the following environment variables:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

## Running the Application
To start the development server, run:
```bash
npm run dev
```

## API Endpoints
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get a user by ID
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License
This project is licensed under the MIT License.