import React from "react";
import ProductCard from "./ProductCard.component";

function ProductsPage() {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }
  return (
    <div className="products-page-body">
      <div className="products-page-container">
        <div className="sidebar-filter box-container" />

        <div className="products-container box-container">
          <ProductCard
            images={[
              "https://images-na.ssl-images-amazon.com/images/I/41J1QCfWlzL.jpg",
              "https://ae01.alicdn.com/kf/HTB1VXq9GkyWBuNjy0Fpq6yssXXal/Hisonic-Wireless-Headphones-Portable-Noise-Cancelling-Headset-Foldable-with-Microphone-USB-Gaming-Headphone-bs-sun-8252.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEyTmpTYLSyB9xNE7LYkVWDCU6xIG2R8T4Ed_lsGe6Jb6gtGm3",
              "https://5.imimg.com/data5/VT/DA/MY-15780217/troops-tp-7040-extra-bass-headphone-500x500.jpg",
            ]}
            id={"id"}
            productName={"Hisonic 400 microphone"}
            productLink={"#!"}
            currency={"₹"}
            price={"1499 - 1999"}
            rating={"4.5"}
            soldCount={"2463"}
            storeName={"Hisonic Store"}
            storeLink={"https://www.google.com"}
            timer={3000}
          />
          {list.map((i) => (
            <ProductCard
              images={[
                "https://images-na.ssl-images-amazon.com/images/I/41J1QCfWlzL.jpg",
                "https://ae01.alicdn.com/kf/HTB1VXq9GkyWBuNjy0Fpq6yssXXal/Hisonic-Wireless-Headphones-Portable-Noise-Cancelling-Headset-Foldable-with-Microphone-USB-Gaming-Headphone-bs-sun-8252.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEyTmpTYLSyB9xNE7LYkVWDCU6xIG2R8T4Ed_lsGe6Jb6gtGm3",
                "https://5.imimg.com/data5/VT/DA/MY-15780217/troops-tp-7040-extra-bass-headphone-500x500.jpg",
              ]}
              id={"id"}
              productName={
                "Hisonic 400 Super Extra Bass Bluetooth Headset with microphone"
              }
              productLink={"#!"}
              currency={"₹"}
              price={"1499 - 1999"}
              oldPrice={"2500"}
              discount={"50"}
              rating={"4.5"}
              soldCount={"2463"}
              storeName={"Hisonic Store"}
              storeLink={"https://www.google.com"}
              timer={3000}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
