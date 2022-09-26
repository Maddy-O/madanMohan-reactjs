# Upayment

The project is basically a demo of the e-commerce website.

## API Reference

```http
  upayments-studycase-api.herokuapp.com/
```

#### Get item

```http
  GET /api/products
  GET /api/products/${id}
  GET /api/categories
  GET /api/categories/${id}
```

#### Post item

```http
  POST /api/products
```

## Tech Stack

**Client:** ReactJS, JavaScript, TailwindCSS and Typescript.

## Authors

- [Madan Mohan](https://github.com/Maddy-O)

## Screenshots

![image](https://github.com/Maddy-O/madanMohan-reactjs/blob/main/src/Assets/HomePage.jpeg?raw=true)

![image](https://github.com/Maddy-O/madanMohan-reactjs/blob/main/src/Assets/favourite.jpeg?raw=true)

![image](https://github.com/Maddy-O/madanMohan-reactjs/blob/main/src/Assets/appProduct.jpeg?raw=true)

## Walkthrough

- Getting the products and categories from the API and list on the Home Page
- When a product is clicked, it will navigate to Detail Page with that product’s information.
- we can create a new product by clicking add new product button, which will lead to Create Screen we can create there.
- When a category is clicked it will Filter the listed items according to their Categories on homepage.
- Delete a product by clicking on delete button on homepage product component. (Only from redux.)
- We can add a product to favorites and see the favorite products under the favorites page. (Only added to redux. It
persist when we reopen the application.)

## Deployment Link

https://madanmohan-reactjs.netlify.app/
