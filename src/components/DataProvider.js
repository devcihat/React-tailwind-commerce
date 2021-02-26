import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState({
    mobile: {
      categoryName: "mobile",
      products: [
        {
          id: "1",
          name: "Google Pixel - Black",
          detail: "APPLE",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "/img/product-1.png",
        },
        {
          id: "2",
          name: "Samsung S7",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "/img/product-2.png",
        },
        {
          id: "3",
          name: "HTC 10 - Black",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "/img/product-3.png",
        },
        {
          id: "4",
          name: "HTC 10 - White",
          detail: "HTC",
          price: "99",
          count: "1",
          image: "/img/product-4.png",
        },
        {
          id: "5",
          name: "HTC Desire 626s",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/product-5.png",
        },
        {
          id: "6",
          name: "Vintage Iphone",
          detail: "APPLE",
          price: "99",
          count: "1",
          image: "/img/product-6.png",
        },
        {
          id: "7",
          name: "Iphone 7",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "/img/product-7.png",
        },
        {
          id: "8",
          name: "Smashed Iphone",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "/img/product-1.png",
        },
        {
          id: "9",
          name: "Google Pixel - Black",
          detail: "APPLE",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "/img/product-1.png",
        },
        {
          id: "10",
          name: "Samsung S7",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "/img/product-2.png",
        },
        {
          id: "11",
          name: "HTC 10 - Black",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "/img/product-3.png",
        },
        {
          id: "12",
          name: "HTC 10 - White",
          detail: "HTC",
          price: "99",
          count: "1",
          image: "/img/product-4.png",
        },
        {
          id: "13",
          name: "HTC Desire 626s",
          detail: "HTC",
          price: "99",
          offer: "No srsly GTFO",
          image: "/img/product-5.png",
        },
        {
          id: "14",
          name: "HTC Desire 626s",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/product-5.png",
        },
        {
          id: "15",
          name: "HTC Desire 626s",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/product-5.png",
        },
      ],
    },
    laptop: {
      categoryName: "laptop",
      products: [
        {
          id: "16",
          name: "MSI GF63 THIN ",
          detail: "MSI",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "/img/laptop1.jpg",
        },
        {
          id: "17",
          name: "HP Dizüstü Bilgisayar",
          detail: "HP",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "/img/laptop3.jpg",
        },
        {
          id: "18",
          name: "HP Dizüstü Bilgisayar",
          detail: "HP",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "/img/laptop3.jpg",
        },
        {
          id: "19",
          name: "Apple 13-inch MacBook Pro",
          detail: "Apple",
          price: "99",
          count: "1",
          image: "/img/laptop6.jpg",
        },
        {
          id: "20",
          name: "Lenovo V14 82C6008CTX11 ",
          detail: "APPLE",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/laptop5.jpg",
        },
        {
          id: "21",
          name: "Apple 13-inch MacBook Pro",
          detail: "APPLE",
          price: "99",
          count: "1",
          image: "/img/laptop6.jpg",
        },
        {
          id: "22",
          name: "Apple 13-inch MacBook Pro",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "/img/laptop7.jpg",
        },
        {
          id: "23",
          name: "Lenovo E15 20TD002FAU09 ",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "/img/laptop5.jpg",
        },
        {
          id: "24",
          name: "MSI GF63 THIN",
          detail: "MSI",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "/img/laptop1.jpg",
        },
        {
          id: "25",
          name: "MSI GF63 THIN",
          detail: "MSI",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "/img/laptop1.jpg",
        },
        {
          id: "26",
          name: "MSI GF63 THIN",
          detail: "MSI",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "/img/laptop1.jpg",
        },
        {
          id: "27",
          name: "MSI GF63 THIN",
          detail: "MSI",
          price: "99",
          count: "1",
          image: "/img/laptop1.jpg",
        },
        {
          id: "28",
          name: "MSI GF63 THIN",
          detail: "MSI",
          price: "99",
          offer: "No srsly GTFO",
          image: "/img/laptop1.jpg",
        },
        {
          id: "29",
          name: "MSI GF63 THIN",
          detail: "MSI",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/laptop1.jpg",
        },
        {
          id: "30",
          name: "MSI GF63 THIN",
          detail: "MSI",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/laptop1.jpg",
        },
      ],
    },
    headphone: {
      categoryName: "headphone",
      products: [
        {
          id: "46",
          name: "HeadPhone Product 01",
          detail: "APPLE",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "/img/head9.jpg",
        },
        {
          id: "47",
          name: "HeadPhone Product 02",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "/img/head2.jpg",
        },
        {
          id: "48",
          name: "HeadPhone Product 03",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "/img/head3.jpg",
        },
        {
          id: "40",
          name: "HeadPhone Product 04",
          detail: "HTC",
          price: "99",
          count: "1",
          image: "/img/head4.jpg",
        },
        {
          id: "50",
          name: "HeadPhone Product 05",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/head5.jpg",
        },
        {
          id: "51",
          name: "HeadPhone Product 06",
          detail: "APPLE",
          price: "99",
          count: "1",
          image: "/img/head6.jpg",
        },
        {
          id: "52",
          name: "HeadPhone Product 07",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "/img/head3.jpg",
        },
        {
          id: "5",
          name: "HeadPhone Product 08",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "/img/head8.jpg",
        },
        {
          id: "54",
          name: "HeadPhone Product 09",
          detail: "APLLE",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "/img/head9.jpg",
        },
        {
          id: "55",
          name: "HeadPhone Product 10",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "/img/head10.jpg",
        },
        {
          id: "56",
          name: "HeadPhone Product 11",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "/img/head3.jpg",
        },
        {
          id: "57",
          name: "HeadPhone Product 12",
          detail: "HTC",
          price: "99",
          count: "1",
          image: "/img/head12.jpg",
        },
        {
          id: "58",
          name: "HeadPhone Product 13",
          detail: "HTC",
          price: "99",
          offer: "No srsly GTFO",
          image: "/img/head13.jpg",
        },
        {
          id: "59",
          name: "HeadPhone Product 14",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/head2.jpg",
        },
        {
          id: "60",
          name: "HeadPhone Product 16",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "/img/head6.jpg",
        },
      ],
    },
    watches: {
      categoryName: "Watches",
      products: [
        {
          id: "31",
          name: "Wacth Product 01",
          detail: "APPLE",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        },
        {
          id: "32",
          name: "Wacth Product 02",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        },
        {
          id: "33",
          name: "Wacth Product 03",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        },
        {
          id: "34",
          name: "Wacth Product 04",
          detail: "HTC",
          price: "99",
          count: "1",
          image: "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
        },
        {
          id: "35",
          name: "Wacth Product 05",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        },
        {
          id: "36",
          name: "Wacth Product 06",
          detail: "APPLE",
          price: "99",
          count: "1",
          image: "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        },
        {
          id: "37",
          name: "Wacth Product 07",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        },
        {
          id: "38",
          name: "Wacth Product 08",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          offer: "info with offer",
          image: "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
        },
        {
          id: "39",
          name: "Wacth Product 09",
          detail: "GOOGLE",
          price: "99",
          count: "1",
          hero: "OMG This just came out today!",
          image: "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        },
        {
          id: "40",
          name: "Wacth Product 10",
          detail: "APPLE",
          price: "99",
          count: "1",
          info: "This is the latest and greatest product from Derp corp.",
          image: "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
        },
        {
          id: "41",
          name: "Wacth Product 11",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "BOGOF",
          image: "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        },
        {
          id: "42",
          name: "Wacth Product 12",
          detail: "HTC",
          price: "99",
          count: "1",
          image: "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
        },
        {
          id: "43",
          name: "Wacth Product 13",
          detail: "HTC",
          price: "99",
          offer: "No srsly GTFO",
          image: "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        },
        {
          id: "44",
          name: "Wacth Product 14",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        },
        {
          id: "45",
          name: "Wacth Product 16",
          detail: "HTC",
          price: "99",
          count: "1",
          offer: "No srsly GTFO",
          image: "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        },
      ],
    },
  });

  const [cart, setCart] = useState([]);

  const addCart = (id, category) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      let prod = {};
      // console.log("hoh", category);
      // console.log(products);
      prod = products[category].products.filter((product) => {
        // console.log("product", product);
        return product.id === id;
      });
      prod[0].count = Number(prod[0].count);
      // console.log("blbalbal", prod);
      setCart([...cart, prod[0]]);

      // console.log("cart", cart);
    } else {
      alert("The product has been added to cart.");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};