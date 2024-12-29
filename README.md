# Node.js and Python Integration Example with Bun.js

This application demonstrates how to use **Node.js** with **Python** via an **Express API**, powered by **Bun.js**. It serves as a basic template for illustrating the interaction between Node.js and Python in a web application.

### Features:

- A simple **Express.js API** running with **Bun.js** that communicates with a Python script.
- Sends data from Node.js to Python via **stdin**, and receives the result back via **stdout**.
- The application processes an array of numbers and calculates their sum using Python.

### How It Works:

1. **Node.js (Express API)** receives a `POST` request at the `/api/node-to-python` endpoint.
2. The request body contains an array of numbers, for example:
   ```json
   { "numbers": [12, 45, 43] }
   ```
3. **Python script** processes the numbers, calculates their sum, and returns the result.
4. The sum is then sent back to the client (Postman) as the API response.

### Prerequisites:

To run this application, you will need:

- **Bun.js** installed.
- **Python 3** installed.
- **Postman** (or any tool to send HTTP requests) to test the API.

### Setup Instructions:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Install dependencies with **Bun.js**:

   ```bash
   bun install
   ```

3. Make sure the Python script is executable. The script is located in `process.py`.

4. Start the server using **Bun.js**:

   ```bash
   bun run dev
   ```

5. The server will start at `http://localhost:3001`.

### Testing with Postman:

To test the application:

1. Open **Postman**.
2. Send a `POST` request to:
   ```
   http://localhost:3001/api/ask-python
   ```
3. In the **Body** tab, use the `raw` option and set the type to `JSON`. Enter the following payload:

   ```json
   {
     "numbers": [12, 45, 43]
   }
   ```

4. Send the request.

### Example Response:

The Python script will process the numbers, and the response will contain the sum:

```json
{
  "success": true,
  "data": {
    "sum": 100
  }
}
```

### Code Overview:

- **Node.js** (Express) handles the API request and response and interacts with the Python script using Bun.js to run the Python process.
- **Python** handles the logic of summing the numbers received from the Node.js application.
