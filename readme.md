# Book Catalog Server

#### Live Link: https://book-catalog-lake-two.vercel.app

[Postman Collection](Book Catalog (PJ).postman_collection.json)

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
- /api/v1/users/9f2c4c43-2d6e-4968-8f00-f7ffb84caf52 **(PATCH)** [UPDATE PROFILE]
- /api/v1/users/ad0ce1f2-0589-4d84-818e-46da7f671dc4 **(DELETE)**
- /api/v1/profile **(GET)**

### Category

- /api/v1/categories/create-category **(POST)**
- /api/v1/categories **(GET All)**
- /api/v1/categories/6f440589-4358-442d-9d99-3d5b551705a8 **(Single GET)**
- /api/v1/categories/6f440589-4358-442d-9d99-3d5b551705a8 **(PATCH)** [UPDATE]
- /api/v1/categories/a80b6453-ca03-4829-898d-f7b37e69b77b **(DELETE)**

### Books

- /api/v1/books/create-book **(POST)**
- /api/v1/books **(GET ALL)**
- /api/v1/books/919734ef-fdff-4dcf-812c-2381dc150783/category **(GET BY CATEGORY ID)**
- /api/v1/books/6ac4a2bd-67ff-4426-aff0-92b4fb6a8458 **(GET SINGLE BOOk)**
- /api/v1/books/6ac4a2bd-67ff-4426-aff0-92b4fb6a8458 **(PATCH)** _UPDATE BOOK_
- /api/v1/books/7f320b2a-accb-497e-b3f4-4819c6a5c2d1 **(DELETE)**

### Orders

- /api/v1/orders/create-order **(POST)**
- /api/v1/orders **(GET)**
- /api/v1/orders/7a3d3d40-89c2-4120-b683-db64a8218606 **(GET)**
