import React from 'react';
import Carousel from './Carousel.component';
import FlashDealsCardContainer from './FlashDealsCardContainer';
import LocationContainer from './LocationContainer';
import TrendingStoreContainer from './TrendingStoreContainer';

function LandingPage() {
  return (
    <div className='landing-page-body'>
      <div className='row row-1'>
        <div className='col-20 r1-c1-container '>
          <ul className='categories-container box-container'>
            <p className='heading'>
              <i className='fas fa-list'></i> Categories
            </p>
            <li className='categories-link'>
              <i className='fas fa-female'></i> <span>Women's Fashion</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Accessories &amp; Parts</p>
                      <li className='category-item'>
                        <a href='#!'>Cables &amp; Adapters</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Electronic Cigarettes</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Batteries</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Chargers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Home Electronic Accessories</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Bags &amp; Cases</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Home Audio &amp; Video</p>
                      <li className='category-item'>
                        <a href='#!'>Televisions</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>TV Receivers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Projectors</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Audio Amplifier Boards</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>TV Sticks</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                  </div>
                  <div className='category-column'>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Camera &amp; Photo</p>
                      <li className='category-item'>
                        <a href='#!'>Digital Cameras</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Camcorders</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Camera Drones</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Action Cameras</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Photo Studio Supplies</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Camera &amp; Photo Accessories</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Portable Audio &amp; Video</p>
                      <li className='category-item'>
                        <a href='#!'>Earphones &amp; Headphones</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Speakers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>MP3 Players</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Microphones</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>VR/AR Devices</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                  </div>
                  <div className='category-column'>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Smart Electronics</p>
                      <li className='category-item'>
                        <a href='#!'>Wearable Devices</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Home Appliances</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Wearable Accessories</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Remote Controls</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Watches</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Wristbands</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Video Games</p>
                      <li className='category-item'>
                        <a href='#!'>Handheld Game Players</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Game Controllers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Joysticks</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Stickers</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                  </div>
                  <div className='category-column-brands'>
                    <p className='brands-header'>Popular Brands</p>
                    <div className='col-50 brand-column'>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://4.bp.blogspot.com/-sScICCG3IFE/TZBPmP1jUMI/AAAAAAAAARY/3XXstEIB1Xo/s1600/lg_logo.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://cdn2.bigcommerce.com/server1500/ac84d/products/1204/images/2688/Adidas_Logo_Flower__83153.1337144903.380.380.jpg?c=2'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://s3.scoopwhoop.com/anj/logos/300977194.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIcQRaWLqsNf3grJrOWZJ5oUZaF6FYVbNwnNQuOECk7FFyi394'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://seeklogo.net/wp-content/uploads/2015/09/xiaomi-logo-vector-download.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://www.themobileindian.com/public/thumbs/news/2018/11/24319/realme-logo-a_425_735.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                    </div>
                    <div className='col-50 brand-column'>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://www.btourz.com/uploads/Businesslogo/1507362970.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScEpVhHrig_0rH8DQKMuzA6wkr2oxIXihtJ1rQOgTaRaw5hdEy'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://banner2.cleanpng.com/20181124/xiv/kisspng-logo-dell-latitude-1-portable-network-graphics-fo-har-gau-icons-download-for-free-in-png-and-svg-5bf96867e534f0.5087203515430718479388.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://logodownload.org/wp-content/uploads/2016/10/jbl-logo-6-1.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://wirelessheadphones.com/wp-content/uploads/2017/04/logo-bose.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://image4.owler.com/logo/voltas_owler_20180131_203001_original.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-male'></i> <span>Men's Fashion</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Accessories &amp; Parts</p>
                      <li className='category-item'>
                        <a href='#!'>Cables &amp; Adapters</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Electronic Cigarettes</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Batteries</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Chargers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Home Electronic Accessories</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Bags &amp; Cases</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Home Audio &amp; Video</p>
                      <li className='category-item'>
                        <a href='#!'>Televisions</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>TV Receivers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Projectors</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Audio Amplifier Boards</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>TV Sticks</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Home Audio &amp; Video</p>
                      <li className='category-item'>
                        <a href='#!'>Televisions</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>TV Receivers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Projectors</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Audio Amplifier Boards</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>TV Sticks</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                  </div>
                  <div className='category-column'>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Camera &amp; Photo</p>
                      <li className='category-item'>
                        <a href='#!'>Digital Cameras</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Camcorders</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Camera Drones</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Action Cameras</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Photo Studio Supplies</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Camera &amp; Photo Accessories</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Portable Audio &amp; Video</p>
                      <li className='category-item'>
                        <a href='#!'>Earphones &amp; Headphones</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Speakers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>MP3 Players</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Microphones</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>VR/AR Devices</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                  </div>
                  <div className='category-column'>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Smart Electronics</p>
                      <li className='category-item'>
                        <a href='#!'>Wearable Devices</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Home Appliances</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Wearable Accessories</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Remote Controls</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Watches</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Smart Wristbands</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                    <ul className='category-item-list'>
                      <p className='category-item-header'>Video Games</p>
                      <li className='category-item'>
                        <a href='#!'>Handheld Game Players</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Game Controllers</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Joysticks</a>
                      </li>
                      <li className='category-item'>
                        <a href='#!'>Stickers</a>
                      </li>
                      <li className='category-item-view-more'>
                        <a href='#!'>View All</a>
                      </li>
                    </ul>
                  </div>
                  <div className='category-column-brands'>
                    <p className='brands-header'>Popular Brands</p>
                    <div className='col-50 brand-column'>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://4.bp.blogspot.com/-sScICCG3IFE/TZBPmP1jUMI/AAAAAAAAARY/3XXstEIB1Xo/s1600/lg_logo.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://cdn2.bigcommerce.com/server1500/ac84d/products/1204/images/2688/Adidas_Logo_Flower__83153.1337144903.380.380.jpg?c=2'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://s3.scoopwhoop.com/anj/logos/300977194.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIcQRaWLqsNf3grJrOWZJ5oUZaF6FYVbNwnNQuOECk7FFyi394'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://seeklogo.net/wp-content/uploads/2015/09/xiaomi-logo-vector-download.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://www.themobileindian.com/public/thumbs/news/2018/11/24319/realme-logo-a_425_735.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                    </div>
                    <div className='col-50 brand-column'>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://www.btourz.com/uploads/Businesslogo/1507362970.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScEpVhHrig_0rH8DQKMuzA6wkr2oxIXihtJ1rQOgTaRaw5hdEy'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://banner2.cleanpng.com/20181124/xiv/kisspng-logo-dell-latitude-1-portable-network-graphics-fo-har-gau-icons-download-for-free-in-png-and-svg-5bf96867e534f0.5087203515430718479388.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://logodownload.org/wp-content/uploads/2016/10/jbl-logo-6-1.png'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://wirelessheadphones.com/wp-content/uploads/2017/04/logo-bose.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                      <div className='brand-box'>
                        <a href='#!' target='_blank'>
                          <img
                            src='https://image4.owler.com/logo/voltas_owler_20180131_203001_original.jpg'
                            alt='brand_name'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-mobile-alt'></i> <span>Phones &amp; Telecommunications</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-laptop'></i> <span>Computer, Office &amp; Security</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-camera'></i> <span>Consumer Electronics</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-chair'></i> <span>Home &amp; Appliances</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-shopping-bag'></i> <span>Bags &amp; Shoes</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-baby'></i> <span>Toys, Kids &amp; Babies</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-baseball-ball'></i> <span>Outdoor Fun &amp; Sports</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-eye-dropper'></i> <span>Beauty &amp; Health</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-stopwatch'></i> <span>Jwellery &amp; Watches</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-car'></i> <span>Automobiles</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
            <li className='categories-link'>
              <i className='fas fa-screwdriver'></i> <span>Home Improvements &amp; Tools</span>
              <div className='category-expand'>
                <div className='row'>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column'></div>
                  <div className='category-column-brands'></div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className='col-60 r1-c2-container'>
          <div className='carousel-container'>
            <Carousel
              slides={[
                'https://ae01.alicdn.com/kf/H09d1e34a569a4e749f58b4179504c1bf6.png',
                'https://i01.appmifile.com/webfile/globalimg/Mandy/g7-Global-pc.jpg',
                'https://pbs.twimg.com/media/C8KNQo5UIAA94Q7.jpg',
                'https://ae01.alicdn.com/kf/H42b8ff978f9f40c68f85025d62a2d533R.jpg',
                'https://ae01.alicdn.com/kf/Hb549882efd9548fda0cb502383a43bdd3.png',
                'https://ae01.alicdn.com/kf/H60786de031ca4430a1a8a95fd3003d7aD.png'
              ]}
              links={[
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com',
                'https://www.google.com'
              ]}
              timer={6000}
            />
          </div>

          <div className='flash-deals-box-container box-container'>
            <p className='heading'>
              <i className='fas fa-hourglass-half'></i> Flash Deals
            </p>

            <FlashDealsCardContainer />
          </div>
        </div>

        <div className='col-20 r1-c3-container'>
          <div className='location-box-container box-container'>
            <LocationContainer />
          </div>
          <div className='trending-store-box-container box-container'>
            <TrendingStoreContainer />
          </div>
        </div>
      </div>

      <div className='row row-2'>
        <div className='col-100 flash-deals box-container'>
          <ul></ul>
        </div>
      </div>
      <div className='row row-2'>
        <div className='col-100 flash-deals box-container'>
          <ul></ul>
        </div>
      </div>
      <div className='row row-2'>
        <div className='col-100 flash-deals box-container'>
          <ul></ul>
        </div>
      </div>
      <div className='row row-2'>
        <div className='col-100 flash-deals box-container'>
          <ul></ul>
        </div>
      </div>
      <div className='row row-2'>
        <div className='col-100 flash-deals box-container'>
          <ul></ul>
        </div>
      </div>
      <div className='row row-2'>
        <div className='col-100 flash-deals box-container'>
          <ul></ul>
        </div>
      </div>
      <div className='row row-2'>
        <div className='col-100 flash-deals box-container'>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
