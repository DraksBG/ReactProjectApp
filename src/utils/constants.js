import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const InitialState = {
  productName: "",
  productPrice: "",
  productColor: "",
  productCompany: "",
  productCategory: "",
  productImages1: "",
  productImages2: "",
  productImages3: "",
  productDescription: "",
};

export const singleProdcutPost = (product, id) => {
  return {
    id,
    stock: 5,
    price: product.productPrice,
    shipping: true,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    category: product.productCategory,
    images: [
      {
        id: Math.random().toString(36).substr(2, 9),
        width: 1000,
        height: 667,
        url: product.productImages1,
        filename: "extra-1.jpeg",
        size: 49641,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: product.productImages1,
            width: 54,
            height: 36,
          },
          large: {
            url: product.productImages1,
            width: 768,
            height: 512,
          },
          full: {
            url: product.productImages1,
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        width: 1000,
        height: 667,
        url: product.images2,
        filename: "extra-1.jpeg",
        size: 102108,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: product.productImages2,
            width: 54,
            height: 36,
          },
          large: {
            url: product.productImages2,
            width: 768,
            height: 512,
          },
          full: {
            url: product.productImages2,
            width: 3000,
            height: 3000,
          },
        },
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        width: 1000,
        height: 714,
        url: product.images3,
        filename: "extra-2.jpeg",
        size: 84418,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: product.productImages3,
            width: 50,
            height: 36,
          },
          large: {
            url: product.productImages3,
            width: 717,
            height: 512,
          },
          full: {
            url: product.productImages3,
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    reviews: 25,
    stars: 4.9,
    name: product.productName,
    description: product.productDescription,
    company: product.productCompany,
  };
};

export const products_url =
  "https://my-comfy-products-api.herokuapp.com/products";

export const single_product_url = `https://arcane-springs-63673.herokuapp.com/single-products?id=`;
