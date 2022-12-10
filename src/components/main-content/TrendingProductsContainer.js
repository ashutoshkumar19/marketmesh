import React, { Fragment, useEffect } from "react";
import ProductCard from "./ProductCard.component";

function TrendingProductsContainer() {
  let sliderContainer, childWidth;

  const randomString = () => {
    let length = 10;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  };

  const element_id = randomString();

  useEffect(() => {
    let containerHeight = document.getElementById(
      `slider-container-${element_id}`
    ).offsetHeight;
    let controlElement = document.getElementsByClassName(
      `slider-control-${element_id}`
    );
    let controlHeight = controlElement[0].offsetHeight;
    let height = containerHeight / 2 + controlHeight / 2;
    controlElement[0].style.marginTop = `-${height}px`;
    controlElement[1].style.marginTop = `-${height}px`;
  }, []);

  const handleScroll = (string) => {
    if (!sliderContainer || !childWidth) {
      sliderContainer = document.getElementById(
        `slider-container-${element_id}`
      );
      childWidth = sliderContainer.firstChild.offsetWidth;
    }
    if (string === "left") {
      sliderContainer.scrollLeft -= 2 * childWidth;
    } else {
      sliderContainer.scrollLeft += 2 * childWidth;
    }
  };

  // To be removed
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }

  return (
    <Fragment>
      <div className="slider-container-heading">
        <span class="material-icons">trending_up</span>
        <p>Trending Products</p>
      </div>
      <div
        className="trending-products-container slider-container"
        id={`slider-container-${element_id}`}
      >
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
          productLink={"/products"}
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
            productLink={"/products"}
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

      <div
        className={`slider-control control-left slider-control-${element_id}`}
      >
        <i
          className="fas fa-chevron-left"
          onClick={() => handleScroll("left")}
        ></i>
      </div>
      <div
        className={`slider-control control-right slider-control-${element_id}`}
      >
        <i
          className="fas fa-chevron-right"
          onClick={() => handleScroll("right")}
        ></i>
      </div>
    </Fragment>
  );
}

export default TrendingProductsContainer;
