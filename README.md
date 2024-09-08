# BlogFlow

This project consists of a front-end application built with Next.js and a backend API built with Node.js, Express, and SQLite. The frontend allows users to view, edit, and delete blog posts. The backend provides the necessary API endpoints to perform these operations.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for managing packages
- [SQLite](https://www.sqlite.org/index.html) (SQLite will be installed automatically via npm)

### Installation

1. **Clone the Repository**

   Clone the repository from GitHub:

   ```bash
   git clone https://github.com/Garima9876/blogflow.git
   cd blogflow
   ```

2. **Install Dependencies**

   Install the required dependencies using npm or Yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the Server**

   Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn run dev
   ```

   The server will start on port 3001. You can access the API endpoints by visiting `http://localhost:3001` in your web browser.

## API Endpoints

The following API endpoints are available:

* **GET /posts**: Retrieves a list of all blog posts
* **GET /posts/:id**: Retrieves a single blog post by ID
* **POST /posts**: Creates a new blog post
* **PUT /posts/:id**: Updates a single blog post by ID
* **DELETE /posts/:id**: Deletes a single blog post by ID

## Environment Variables

The following environment variables are used:

* **NODE_ENV**: The environment in which the application is running (e.g. development, production)
* **DB_FILE**: The path to the SQLite database file

## License

This project is licensed under the MIT License.
