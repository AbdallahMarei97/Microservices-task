# Microservices Task

This repository contains two separate applications: a **frontend** and a **backend**. These applications are independent and can be run separately.

---

## Table of Contents

- [Frontend](#frontend)
  - [How to Run the Frontend App](#how-to-run-the-frontend-app)
- [Backend](#backend)
  - [How to Run the Backend App](#how-to-run-the-backend-app)
  - [Testing the Backend with Postman](#testing-the-backend-with-postman)

---

## Frontend

The frontend is a React application built with [Next.js](https://nextjs.org) and styled using Tailwind CSS.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

### How to Run the Frontend App

1. **Navigate to the Frontend Directory**:

   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Development Server**:
   Start the frontend application in development mode:

   ```bash
   npm run dev
   ```

4. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Backend

The backend consists of two independent microservices: **order-service** and **product-service**. Each service runs separately and does not use a database.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

### How to Run the Backend App

#### Running the `order-service`

1. **Navigate to the `order-service` Directory**:

   ```bash
   cd backend/order-service
   ```

2. **Install Dependencies**:
   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Service**:
   Start the `order-service` in development mode:

   ```bash
   npm run start
   ```

4. **Access the Service**:
   The `order-service` will be available at:
   ```
   http://localhost:3001
   ```

---

#### Running the `product-service`

1. **Navigate to the `product-service` Directory**:

   ```bash
   cd backend/product-service
   ```

2. **Install Dependencies**:
   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Service**:
   Start the `product-service` in development mode:

   ```bash
   npm run start
   ```

4. **Access the Service**:
   The `product-service` will be available at:
   ```
   http://localhost:3002
   ```

---

### Testing the Backend with Postman

To test the backend microservices, you can use [Postman](https://www.postman.com/). Below are the endpoints for each service:

#### `order-service` Endpoints

- **Base URL**: `http://localhost:3001`
- **Endpoints**:
  - `GET /orders`: Fetch all orders
  - `GET /orders/:id`: Fetch a specific order by ID
  - `POST /orders`: Create a new order
  - `PUT /orders/:id`: Update an existing order by ID
  - `DELETE /orders/:id`: Delete an order by ID

#### `product-service` Endpoints

- **Base URL**: `http://localhost:3002`
- **Endpoints**:
  - `GET /products`: Fetch all products
  - `GET /products/:id`: Fetch a specific product by ID
  - `POST /products`: Create a new product
  - `PUT /products/:id`: Update an existing product by ID
  - `DELETE /products/:id`: Delete a product by ID

### Steps to Test with Postman

1. Open Postman and create a new request.
2. Set the request method (e.g., `GET`, `POST`, `PUT`, or `DELETE`).
3. Enter the appropriate URL for the endpoint (e.g., `http://localhost:3001/orders` or `http://localhost:3002/products`).
4. For `POST` and `PUT` requests, add a JSON body with the required data. Example:
   ```json
   {
     "name": "Sample Product",
     "price": 100
   }
   ```
5. Send the request and view the response.

---

## Notes

- The **frontend** and **backend** are independent and do not communicate with each other in this setup.
- The backend consists of two microservices (`order-service` and `product-service`), each running on its own port (`3001` and `3002` respectively).
