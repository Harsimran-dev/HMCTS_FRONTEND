This is the frontend application for the HMCTS (Her Majesty's Courts and Tribunals Service) system. It provides an interface to manage and interact with tasks, with features such as creating, viewing, updating, and deleting tasks.

Features
Create Task: Allows users to create new tasks by filling out a form with relevant details.

View Task: Users can view task details by providing the task ID.

Update Task Status: Users can update the status of a task.

Delete Task: Allows users to delete a task from the system.

Technologies Used
Frontend: Angular (or React, Vue, depending on what you're using)

Backend: Spring Boot (assuming the backend we talked about is already set up)

API Communication: REST API (via HTTP requests)

UI Framework: Bootstrap / Material UI (if you're using any of these)

Form Validation: Frontend form validation (using Angular Reactive Forms or similar)

Setup & Installation
Follow the steps below to get the frontend up and running on your local machine.

Prerequisites
Node.js: Make sure you have Node.js installed (preferably version 14.x or above).

npm: Node package manager comes with Node.js. If not, install it separately.

Steps to Run the Frontend Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Harsimran-dev/HMCTS_FRONTEND.git
Navigate into the project directory:

bash
Copy
Edit
cd HMCTS_FRONTEND
Install dependencies: Run the following command to install the necessary packages:

bash
Copy
Edit
npm install
Run the application: Start the development server:

bash
Copy
Edit
npm start
This will typically run the application on http://localhost:4200/.

Access the Form:

Open a browser and navigate to http://localhost:4200.

You should see the task form and other features as defined.

API Integration
This frontend communicates with the backend through HTTP API calls. You can interact with the following endpoints:

Create Task: POST /api/tasks — Create a new task.

Get Task by ID: GET /api/tasks/{id} — Fetch a task by ID.

Get All Tasks: GET /api/tasks — List all tasks.

Update Task Status: PUT /api/tasks/{id}/status?status=STATUS — Update a task's status.

Delete Task: DELETE /api/tasks/{id} — Delete a task.

Make sure your backend (Spring Boot) API is running and accessible from the frontend.

Folder Structure
src/: Source code of the project.

app/: Main Angular application code.

components/: Components like TaskForm, TaskList, etc.

services/: Services for API communication.

models/: Data models like Task.

app.module.ts: Angular module that imports all the necessary modules.

assets/: Static assets like images, stylesheets, etc.