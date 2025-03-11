# Express Middleware Project

This project demonstrates how to use **middleware** in an Express.js application. It includes a custom authentication middleware, error handling middleware, and an ExpressError class for structured error handling.

## 🚀 Features
- Custom Authentication Middleware
- Centralized Error Handling
- ExpressError Custom Error Class

## 🛠️ Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/express-middleware-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd express-middleware-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## 📌 Usage

1. Start the server:
   ```sh
   npm start
   ```

2. Open your browser or use Postman to test the API endpoints.

## 📜 Middleware Explanation

### 1️⃣ Authentication Middleware (`checkToken`)
This middleware checks if the request contains a valid `token` query parameter before allowing access to protected routes.
```js
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        return next();
    }
    throw new ExpressError(401, "ACCESS DENIED");
};
```

### 2️⃣ Custom Error Class (`ExpressError`)
A custom error class for structured error handling.
```js
class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}
```

### 3️⃣ Error Handling Middleware
This middleware catches all application errors and sends a structured response.
```js
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});
```

## 📌 API Endpoints

| Method | Endpoint      | Description |
|--------|-------------|-------------|
| GET    | `/`         | Returns a simple page |
| GET    | `/api?token=giveaccess` | Returns `Data` if token is correct |
| GET    | `/err`      | Triggers an error (for testing) |
| GET    | `/admin`    | Always throws a forbidden error |

## 🏗️ Built With
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)

## 🤝 Contributing
Pull requests are welcome! If you have suggestions, feel free to open an issue.
