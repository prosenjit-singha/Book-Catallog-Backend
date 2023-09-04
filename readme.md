# Book Catalog Server

#### Live Link: https://book-catalog-lake-two.vercel.app

Sample Admin Credentials:

```json
{
  "email": "programming.hero@gmail.com",
  "password": "password"
}
```

## Application Routes:

### User

- /api/v1/auth/signup **(POST)**
- /api/v1/auth/signin **(POST)**
- /api/v1/users **(GET)**
- /api/v1/users/9f2c4c43-2d6e-4968-8f00-f7ffb84caf52 **(Single GET)**
- /api/v1/users/9f2c4c43-2d6e-4968-8f00-f7ffb84caf52 **(PATCH)**
- /api/v1/users/ad0ce1f2-0589-4d84-818e-46da7f671dc4 **(DELETE)**
- /api/v1/profile **(GET)**

### Category

- /api/v1/categories/create-category **(POST)**
- /api/v1/categories **(GET)**
- /api/v1/categories/6177a5b87d32123f08d2f5d4 **(Single GET)**
- /api/v1/categories/6177a5b87d32123f08d2f5d4 **(PATCH)**
- /api/v1/categories/6177a5b87d32123f08d2f5d4 **(DELETE)**

### Books

- /api/v1/books/create-book **(POST)**
- /api/v1/books **(GET)**
- /api/v1/books/:categoryId/category **(GET)**
- /api/v1/books/:id **(GET)**
- /api/v1/books/:id **(PATCH)**
- /api/v1/books/:id **(DELETE)**

### Orders

- /api/v1/orders/create-order **(POST)**
- /api/v1/orders **(GET)**
- /api/v1/orders/:orderId **(GET)**
