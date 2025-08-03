# Consistency Tracker

A comprehensive web application to track and maintain consistency across multiple life areas including fitness, reading, and custom habits with AI-powered content generation and smart reminders.

## 🚀 How to Run

1.  **Install Dependencies:**
    ```bash
    npm run install-all
    ```

2.  **Setup Environment Variables:**
    - Navigate to the `server/` directory.
    - Rename `.env.example` to `.env`.
    - Fill in the required values (e.g., your MongoDB connection string, JWT secret).

3.  **Run the Application:**
    - From the root directory, run:
    ```bash
    npm run dev
    ```
    This will start both the backend server and the frontend React app concurrently.

-   Backend will be running on `http://localhost:5001`
-   Frontend will be running on `http://localhost:3000`

## 🐳 Docker

You can also run the application using Docker:```bash
docker-compose up --build# tracker
