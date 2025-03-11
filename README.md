
# Microservice Cartography: API and UI with Docker Compose

This monorepo project consists of a Go API and a UI built with TypeScript and D3.js, orchestrated using Docker Compose. The API serves static JSON data, and the UI visualizes this data using a radial tidy tree.

## Project Structure

```
microservice-cartography/
│
├─ api/
│  ├─ Dockerfile
│  ├─ go.mod
│  ├─ go.sum
│  └─ main.go
│
├─ ui/
│  ├─ Dockerfile
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ src/
│  │  ├─ index.html
│  │  ├─ styles.css
│  │  └─ index.ts
│
├─ docker-compose.yml
└─ README.md
```

## Setup and Installation

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Basic knowledge of Go and TypeScript.

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jhayotte/microservices-cartography.github
   cd microservices-cartography
   ```

2. **Build and Run with Docker Compose**

   ```bash
   docker-compose up --build
   ```

3. **Access the Application**

   - The API will be available at `http://localhost:8080`.
   - The UI will be available at `http://localhost:1234`.

## API (Go)

- **Description**: A simple Go API that serves static JSON data.
- **Endpoint**: `/data` - Returns hierarchical data in JSON format.
- **CORS**: Enabled to allow requests from the UI.

## UI (TypeScript and D3.js)

- **Description**: A UI built with TypeScript and D3.js that visualizes hierarchical data using a radial tidy tree.
- **Features**:
  - Fetches data from the API.
  - Allows selecting different levels of the hierarchy to display.

## Docker Compose

- **Services**:
  - `api`: The Go API service.
  - `ui`: The UI service built with Parcel.

## Todo
[] add an elastic search with APM traces
[] exposes these traces in the UI through the API
[] find the best way to convert or expose apm traces to API.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License.
