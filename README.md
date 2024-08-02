
# Image Management Application

This is a full-stack application for managing images, built using Angular (frontend) and ASP.NET Core Web API (backend). The application supports CRUD operations, including creating, reading, updating, and deleting images.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Application Structure](#application-structure)
- [Design Decisions](#design-decisions)

## Setup Instructions

### Prerequisites

1. **Node.js** (v14 or higher) and **npm**: [Node.js Download](https://nodejs.org/)
2. **Angular CLI** (v14): Install using `npm install -g @angular/cli`
3. **.NET Core SDK** (v6+): [Download .NET](https://dotnet.microsoft.com/download)
4. **Visual Studio Code** or another code editor

### Frontend Setup (Angular)

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   \`\`\`

2. Navigate to the frontend directory:
   \`\`\`bash
   cd frontend
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Backend Setup (.NET Core)

1. Navigate to the backend directory:
   \`\`\`bash
   cd backend
   \`\`\`

2. Restore dependencies and build the project:
   \`\`\`bash
   dotnet restore
   dotnet build
   \`\`\`

## Running the Application

### Starting the Backend

1. Navigate to the backend directory:
   \`\`\`bash
   cd backend
   \`\`\`

2. Run the application:
   \`\`\`bash
   dotnet run
   \`\`\`

   The backend API will be available at `https://localhost:7257/api`.

### Starting the Frontend

1. Navigate to the frontend directory:
   \`\`\`bash
   cd frontend
   \`\`\`

2. Run the Angular application:
   \`\`\`bash
   ng serve
   \`\`\`

   The frontend will be available at `http://localhost:4200`.

## Application Structure

### Frontend (Angular)

- **src/app/components**: Contains all the Angular components (`ImageCardComponent`, `EditImageComponent`, etc.).
- **src/app/services**: Contains service files (`ImageService`) for API interactions.
- **src/app/app-routing.module.ts**: Defines routes for navigation between components.
- **src/app/app.module.ts**: Main module that declares and imports components and services.

### Backend (ASP.NET Core)

- **Controllers**: Contains the API controller (`ImageController`) which handles HTTP requests.
- **Models**: Contains data models (`Image`) representing the data structure.
- **Program.cs**: Configures the ASP.NET Core application and its services.

## Design Decisions

1. **Frontend Framework**: Angular was chosen for its robust component-based architecture, extensive documentation, and active community support.

2. **State Management**: RxJS was used for state management and handling asynchronous data streams.

3. **Form Handling**: Angular Reactive Forms were used for form validation and data handling, providing a clear and scalable way to manage form states.

4. **Styling**: Bootstrap was used for styling to quickly create a responsive and visually appealing UI.

5. **Backend Framework**: ASP.NET Core was selected for its performance, scalability, and ease of integration with modern front-end frameworks.

6. **API Design**: RESTful API principles were followed, with CRUD endpoints for managing images.

7. **Routing and Navigation**: Angular's router was utilized for seamless navigation between components, and query parameters were used to trigger data refreshes without reloading the entire page.

## Additional Notes

- **CORS Handling**: CORS issues were addressed by configuring the ASP.NET Core backend to allow cross-origin requests from the frontend.
- **Error Handling**: Error handling was implemented in both the frontend and backend to ensure graceful degradation and informative error messages.

## Future Improvements

- Implement authentication and authorization.
- Add image upload functionality.
- Implement pagination and search/filter features for large datasets.
