# City Corporation Service Portal Frontend

This is the frontend for the City Corporation Service Portal, built using Vite and React. The portal allows citizens to report problems like garbage collection, street repair, or light repair, and request individual services such as trade licenses or birth certificates. City Corporation authorities can manage these reports and provide services.

## Live Demo

- Backend: [City Corporation Backend](https://city-corporation-backend.onrender.com/)
- Frontend: [City Corporation Frontend](https://citycorporation.netlify.app/)

## Features

- **User Roles:** 
  - Normal Citizen: Report problems and request services.
  - City Corporation Authority: Manage reports and service requests.
- **Problem Reporting:** Citizens can report issues such as garbage collection, street repair, and light repair.
- **Service Requests:** Citizens can request individual services like trade licenses and birth certificates.
- **Authority Management:** Authorities can manage problem reports and provide requested services.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend:** 
  - [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Axios](https://axios-http.com/) - For API requests.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
  
- **Backend:** 
  - [Django Rest Framework](https://www.django-rest-framework.org/) - Backend API for managing users, problems, and services.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/city-corporation-frontend.git


## API Endpoints

The frontend interacts with the following API endpoints:

- **Problem Reporting**: `POST /services/report-problem/`
  - Description: Allows a citizen to report a problem (e.g., garbage collection, street repair, light repair).
  - Request Body:
    ```json
    {
      "problem_type": "Garbage Collection",
      "description": "Garbage is not collected for a week.",
      "location": "Street 15, Block B",
      "citizen_id": 1
    }
    ```
  - Response:
    ```json
    {
      "id": 101,
      "problem_type": "Garbage Collection",
      "description": "Garbage is not collected for a week.",
      "location": "Street 15, Block B",
      "status": "in_progress",
      "citizen_id": 1,
      "created_at": "2024-09-22T08:30:00Z"
    }
    ```

- **Problem Types**: `GET /services/problem-types/`
  - Description: Fetches available problem types (e.g., garbage collection, street repair, light repair).
  - Response:
    ```json
    [
      {
        "id": 1,
        "name": "Garbage Collection"
      },
      {
        "id": 2,
        "name": "Street Repair"
      },
      {
        "id": 3,
        "name": "Light Repair"
      }
    ]
    ```

- **Service Requests**: `POST /services/request-service/`
  - Description: Allows a citizen to request individual services such as a trade license or birth certificate.
  - Request Body:
    ```json
    {
      "service_type": "Trade License",
      "citizen_id": 1,
      "details": "Applying for a new trade license for business."
    }
    ```
  - Response:
    ```json
    {
      "id": 202,
      "service_type": "Trade License",
      "details": "Applying for a new trade license for business.",
      "status": "pending",
      "citizen_id": 1,
      "created_at": "2024-09-22T08:45:00Z"
    }
    ```

