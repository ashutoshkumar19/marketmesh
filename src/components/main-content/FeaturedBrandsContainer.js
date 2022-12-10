import React, { Fragment, useEffect } from "react";
import BrandCard from "./BrandCard.component";

function FeaturedBrandsContainer() {
  let sliderContainer, childWidth;

  const randomString = () => {
    let length = 10;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (var i = length; i > 0; --i)
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
  for (var i = 0; i < 10; i++) {
    list.push(i);
  }

  return (
    <Fragment>
      <div className="slider-container-heading">
        <span className="material-icons">card_giftcard</span>
        <p>Featured Brands</p>
      </div>
      <div
        className="featured-brands-container slider-container"
        id={`slider-container-${element_id}`}
      >
        <BrandCard
          key={i}
          id={i}
          backgroundImage={
            "https://cdn.awsind0-fusion.fds.api.mi-img.com/b2c-i18n-bbs-in/db171c4485.png?thumb=1&w=776&h=392"
          }
          productImages={[
            "https://smartmove254.com/wp-content/uploads/2019/12/Redmi-A3.jpg",
            "https://www.gizmochina.com/wp-content/uploads/2020/03/Xiaomi-Redmi-Note-9-Pro-Max-500x500.jpg",
            "https://www.91-img.com/pictures/131776-v3-xiaomi-mi-mix-3-5g-mobile-phone-large-1.jpg",
          ]}
          productLinks={[
            "https://www.google.com",
            "https://www.amazon.com",
            "https://www.youtube.com",
          ]}
          brandLogo={""}
          brandName={"Xiaomiers Hisonic Shenzen Bay Area Distributers"}
          brandLink={"https://www.google.com"}
        />
        {list.map((i) => (
          <BrandCard
            key={i}
            id={i}
            backgroundImage={
              "https://s.yimg.com/ny/api/res/1.2/TKx0Usge5G37eEOpyGK4ng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-01/03ee3a30-6c8f-11ec-b5ab-a5cda59c31fa"
            }
            productImages={[
              "https://m.media-amazon.com/images/I/618hqM-yxtL._SL1500_.jpg",
              "https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg",
              "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/o/n/oneplus_10_pro_white_edition.jpg",
            ]}
            productLinks={[
              "https://www.google.com",
              "https://www.amazon.com",
              "https://www.youtube.com",
            ]}
            brandLogo={
              "https://i.pinimg.com/originals/f1/37/c8/f137c8e169d6a1ac74198400eeb949e0.jpg"
            }
            brandName={"OnePlus"}
            brandLink={"https://www.google.com"}
          />
        ))}
      </div>

      <div
        className={`slider-control control-left slider-control-${element_id}`}
      >
        <i
          className="fas fa-chevron-left"
          onClick={() => handleScroll("left")}
        />
      </div>
      <div
        className={`slider-control control-right slider-control-${element_id}`}
      >
        <i
          className="fas fa-chevron-right"
          onClick={() => handleScroll("right")}
        />
      </div>
    </Fragment>
  );
}

export default FeaturedBrandsContainer;
