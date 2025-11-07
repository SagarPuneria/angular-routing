# Angular Routing Demo Application

A comprehensive Angular application showcasing advanced routing concepts, authentication guards, and product management features. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Development](#-development)
- [API Setup](#-api-setup)
- [Routing Features](#-routing-features)
- [Components Overview](#-components-overview)
- [Services](#-services)
- [Guards and Authentication](#-guards-and-authentication)
- [Testing](#-testing)
- [Build](#-build)
- [Contributing](#-contributing)

## 🎯 Project Overview

This Angular application demonstrates advanced routing concepts including:
- Named routes and URL-based navigation
- Link-based navigation with active route identification
- Route guards (CanActivate, CanActivateChild, CanDeactivate)
- Route resolvers for data pre-loading
- Child routes and nested routing
- Wildcard routes for error handling
- Parameterized routes for dynamic content

## ✨ Features

- **Product Catalog**: Browse and view product information
- **Authentication System**: Route protection with auth guards
- **Responsive Navigation**: Bootstrap-powered navigation bar
- **Dynamic Routing**: URL parameters for product details
- **Error Handling**: Custom 404 error page
- **Data Preloading**: Route resolvers for efficient data loading
- **Child Routes**: Nested routing for home section (Mobile/TV)

## 🛠 Technologies Used

- **Angular**: 13.0.0
- **TypeScript**: 4.4.3
- **Bootstrap**: 4.0.0
- **RxJS**: 7.4.0
- **jQuery**: 3.2.1
- **JSON Server**: For mock API data
- **Karma & Jasmine**: For testing

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── common/
│   │   │   └── navigation/          # Main navigation component
│   │   ├── error/                   # 404 error page
│   │   ├── home/                    # Home page with child routes
│   │   ├── mobile/                  # Mobile products section
│   │   ├── tv/                      # TV products section
│   │   ├── products/                # Products listing
│   │   ├── product-info/            # Product information page
│   │   ├── product-details/         # Protected product details
│   ├── models/
│   │   └── product.model.ts         # Product interface definition
│   ├── services/
│   │   ├── auth.guard.ts            # Route guards implementation
│   │   ├── auth.service.ts          # Authentication service
│   │   └── product.service.ts       # Product data service
│   ├── app-routing.module.ts        # Main routing configuration
│   ├── app.component.ts             # Root component
│   └── app.module.ts                # Main module
├── assets/                          # Static assets
├── environments/                    # Environment configurations
└── db.json                         # Mock API data
```

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) - Install globally: `npm install -g @angular/cli`
- [JSON Server](https://github.com/typicode/json-server) - Install globally: `npm install -g json-server`

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SagarPuneria/angular-routing.git
   cd angular-routing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

4. **Build Application**
   ```bash
   npm run build
   ```

## 💻 Development

### Starting the Development Server

1. **Start the Angular development server**
   ```bash
   npm run start
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload when you make changes.

2. **Start the JSON Server (in a separate terminal)**
   ```bash
   json-server --watch db.json --port 3000
   ```
   This serves the mock API at `http://localhost:3000/products`

### Development Scripts

- `npm install` - Install project dependencies
- `npm run build` - Build the project for production
- `npm run start` - Start the development server
- `npm run watch` - Build in watch mode for development
- `npm run test` - Run unit tests

## 🗄 API Setup

The application uses a JSON Server to mock API responses. The `db.json` file contains product data with the following structure:

```json
{
  "products": [
    {
      "productId": 1,
      "productName": "Product Name",
      "productDescription": "Product Description",
      "productImage": "Image URL",
      "productPrice": 999
    }
  ]
}
```

**Important**: Make sure JSON Server is running on port 3000 before accessing the Products page.

## 🔗 Routing Features

### Route Configuration

The application implements several routing patterns:

1. **Default Route**: Redirects empty path to `/home`
2. **Child Routes**: Home component contains Mobile and TV child routes
3. **Parameterized Routes**: Product info accepts multiple URL parameters
4. **Protected Routes**: Product details requires authentication
5. **Wildcard Route**: Handles undefined routes with error page

### Route Guards

- **CanActivate**: Protects product-details route
- **CanActivateChild**: Protects home child routes
- **CanDeactivate**: Prevents navigation away from unsaved changes
- **Resolve**: Pre-loads product data for products route

## 🧩 Components Overview

### Navigation Component
- Bootstrap-powered responsive navigation
- Active route highlighting
- Links to all main sections

### Home Component
- Landing page with child routing
- Supports both named and unnamed router outlets
- Contains Mobile and TV subsections

### Products Component
- Displays product listing
- Uses route resolver for data preloading
- Integrates with JSON Server API

### Product Info Component
- Displays detailed product information
- Receives data via route parameters
- Route format: `/product-info/:id/:name/:image/:description`

### Product Details Component
- Protected by authentication guard
- Demonstrates route protection implementation

### Error Component
- Custom 404 error page
- Handles undefined routes gracefully

## 🔧 Services

### AuthService
- Manages authentication state
- Provides methods for login/logout
- Used by guards for route protection

### ProductService
- Handles HTTP requests to JSON Server
- Implements delay for demonstrating loading states
- Returns Observable streams for async operations

### AuthGuard
- Multi-purpose guard implementing multiple interfaces
- Handles route activation, child activation, and deactivation
- Also serves as route resolver for product data

## 🛡 Guards and Authentication

The application demonstrates various guard types:

```typescript
// Route protection
canActivate(): boolean
canActivateChild(): boolean
canDeactivate(): boolean

// Data preloading
resolve(): Observable<IProductDetails[]>
```

## 🧪 Testing

### Running Unit Tests
```bash
ng test
```
Execute unit tests via [Karma](https://karma-runner.github.io). The tests will run in watch mode by default.

### Test Files
- Component spec files: `*.component.spec.ts`
- Service spec files: `*.service.spec.ts`
- Guard spec files: `*.guard.spec.ts`

## 🏗 Build

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --prod
```

Build artifacts will be stored in the `dist/` directory.

## 🎨 Styling

The application uses Bootstrap 4 for styling:
- Responsive navigation bar
- Grid system for layout
- Utility classes for spacing and colors
- Custom CSS in component-specific files

## 🚀 Deployment

1. Build the application for production
2. Deploy the `dist/` folder to your web server
3. Ensure JSON Server or equivalent API is available
4. Configure environment variables as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📚 Learning Resources

This project demonstrates key Angular concepts:

- [Angular Routing & Navigation](https://angular.io/guide/router)
- [Route Guards](https://angular.io/guide/router#milestone-5-route-guards)
- [HTTP Client](https://angular.io/guide/http)
- [Reactive Forms](https://angular.io/guide/reactive-forms)
- [Services and Dependency Injection](https://angular.io/guide/dependency-injection)

## 📄 License

This project is for educational purposes and is available under the MIT License.

## 📧 Support

For questions or support, please open an issue in the GitHub repository.

---

**Happy Coding! 🚀**
