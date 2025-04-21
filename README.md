# Todo App

## Overview
A simple Todo List application built with Angular and .NET, using MS SQL Server as the database. The app allows users to manage their tasks, toggle completion status, and switch between light and dark themes.

## Screenshot
![image](https://github.com/user-attachments/assets/699ffd71-8672-4996-a01c-9e0850d76ff3)

## Features
- Add, delete, and mark tasks as completed
- Task completion is visually indicated with a strikethrough
- Light and dark mode toggle
- Persistent theme selection using local storage
- Backend powered by .NET with MS SQL Server

## Technologies Used
### Frontend:
- Angular (Standalone Components)
- TypeScript
- FormsModule for two-way data binding
- CommonModule for Angular directives
- CSS for styling (including dark mode support)

### Backend:
- .NET (ASP.NET Core Web API)
- MS SQL Server
- Entity Framework Core for database management

## Setup Instructions
### Prerequisites:
- Node.js and Angular CLI installed
- .NET SDK installed
- MS SQL Server set up

### Installation
#### Backend:
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Restore dependencies:
   ```sh
   dotnet restore
   ```
3. Update database:
   ```sh
   dotnet ef database update
   ```
4. Run the server:
   ```sh
   dotnet run
   ```

#### Frontend:
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular app:
   ```sh
   ng serve
   ```

## Usage
- Open `http://localhost:56698/` in the browser
- Add new tasks using the input field
- Click the checkbox to mark a task as completed
- Click the delete button to remove a task
- Use the theme toggle button to switch between light and dark modes

## License
This project is licensed under the MIT License.

## Author
Developed by Patryk Płonka.

