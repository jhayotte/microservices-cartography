
# Microservices Cartography 

This project provides a visual representation of microservices interactions using D3.js. It helps in understanding the hierarchical structure and dependencies between different microservices.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Visualize microservices as a tree structure.
- Easy to customize and extend.
- Built with TypeScript for type safety.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jhayotte/microservices-cartography.git
   cd microservices-cartography
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Open your browser** and navigate to `http://localhost:1234` to see the visualization.

3. **Build the project** for production:
   ```bash
   npm run build
   ```

## Customization

- **Data Structure**: Modify the `treeData` object in `index.ts` to reflect your microservices hierarchy.
- **Styling**: Customize the CSS in `styles.css` to change the appearance of the tree.
- **Layout**: Adjust the dimensions and layout settings in `index.ts` to fit your needs.

## Dependencies

- **D3.js**: For creating the tree visualization.
- **TypeScript**: For type safety and better development experience.
- **Parcel**: For bundling and serving the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the ISC License.
