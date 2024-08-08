 

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';
// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';



export default function Singap(){
    return(
        <html
        key="1"
        dir="rtl"
        lang="ar"
      >
        <head>
          <meta charSet="UTF-8" />
          <meta
            content="width=, initial-scale=1.0"
            name="viewport"
          />
          <link
            crossOrigin="anonymous"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            referrerPolicy="no-referrer"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            rel="stylesheet"
          />
          <link
            href="store.css"
            rel="stylesheet"
          />
          <link
            href="style.css"
            rel="stylesheet"
          />
          <title>
            store
          </title>
        </head>
        <body>
          <header>
            <div className="rigth">
              <div className="cols">
                <div className="col">
                  <div className="text_img act">
                    <i className="fa-solid fa-bars icon-paragraph-right" />
                    <a href="##">
                      تصنيفات المنتجات
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_1.webp"
                    />
                    <a href="##">
                      شاشات{' '}
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_2.webp"
                    />
                    <a href="##">
                      الأجهزة المنزلية الكبيرة
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_3.webp"
                    />
                    <a href="##">
                      الأجهزة المنزلية الصغيرة
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_4.webp"
                    />
                    <a href="##">
                      أحواض
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_5.webp"
                    />
                    <a href="##">
                      أطقم بلت إن
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_5.webp"
                    />
                    <a href="##">
                      بلت إن
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="text_img">
                    <img
                      alt=""
                      src="img/header_rigth_7.jpg"
                    />
                    <a href="##">
                      {' '}العناية الشخصية
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navpar">
              <div className="icon_logo">
                <div className="pars">
                  <i
                    className="fa-solid fa-bars icon-paragraph-right"
                    id="nume"
                  />
                </div>
                <div className="logo">
                  <img
                    alt=""
                    src="img/logo.webp"
                  />
                </div>
                <div className="search">
                  <form action="">
                    <input
                      placeholder="Search"
                      type="text"
                    />
                    <i className="fa-solid fa-magnifying-glass icon-search" />
                  </form>
                </div>
                <div className="icon">
                  <div className="con">
                    <i className="fa-regular fa-user icon-user" />
                  </div>
                  <div className="con">
                    <i className="fa-regular fa-heart icon-heart" />
                    <p className="none">
                      1
                    </p>
                  </div>
                  <div className="con">
                    <i
                      className="fa-solid fa-cart-plus icon-cart"
                      style={{
                        backgroundColor: '#f33419',
                        border: 'none',
                        color: '#fff'
                      }}
                    />
                    <p>
                      0
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="nav"
                id="mex"
              >
                <div className="icon">
                  <i className="fa-solid fa-bars icon-paragraph-right" />
                  <a href="##">
                    تصنيفات المنتجات
                  </a>
                </div>
                <div>
                  <nav>
                    <ul id="mex">
                      <li>
                        <a href="##">
                          {' '}عروض الافتتاح
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          الرئيسية
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          المتجر
                        </a>
                      </li>
                      <li>
                        <a href="##">
                          تسوق بالعلامة التجارية
                        </a>
                        <ul id="submenu">
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_1.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_2.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_3.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_4.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_5.webp"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_6.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_7.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_8.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_9.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_10.webp"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_11.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_12.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_13.webp"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_14.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_15.png"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="##">
                              <img
                                alt=""
                                src="img/banner_16.png"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="##">
                          تواصل معنا
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <script
              dangerouslySetInnerHTML={{
                __html: '          let btnMenu = document.getElementById(\'nume\');                let mex = document.getElementById(\'mex\');                        btnMenu.onclick = (event) => {                    event.stopPropagation(); // لمنع تفعيل الحدث في العناصر الأب                    btnMenu.classList.toggle(\'fa-times\');                    mex.classList.toggle(\'active\');                                    }                        document.onclick = () => {                    btnMenu.classList.remove(\'fa-times\');                    mex.classList.remove(\'active\');                }    '
              }}
             />
          </header>
          <section className="bottom_icon">
            <div className="icons">
              <div className="col">
                <i className="fa-solid fa-shop icon-home" />
                <p>
                  Shop{' '}
                </p>
              </div>
              <div className="col">
                <i className="fa-regular fa-heart icon-heart" />
                <p>
                  Wishlist
                </p>
              </div>
              <div className="col">
                <i className="fa-solid fa-cart-plus icon-cart" />
                <p>
                  Cart
                </p>
              </div>
              <div className="col">
                <i className="fa-regular fa-user icon-user" />
                <p>
                  My account
                </p>
              </div>
            </div>
          </section>
          {/* //////////////////// */}
          <section className="home_img">
            <div className="container">
              <div className="cols">
                <div className="col">
                <Swiper style={{height:"100%"}}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={2500}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination  ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img   src="https://madmonegypt.com/wp-content/uploads/2024/03/Special-Food-Menu-Facebook-Post-18.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://madmonegypt.com/wp-content/uploads/2024/03/7000.webp" />
        </SwiperSlide>
 
      </Swiper>
                </div>
                <div className="col">
                  <div className="img_cols">
                    <div className="imges">
                      <div className="img">
                        <div className="text">
                          <h2>
                            الأجهزة المنزلية
                          </h2>
                          <button className="btn">
                            اطلب الآن
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="tow_col">
                      <div className="imges">
                        <div className="img">
                          <div className="text">
                            <h2>
                              الأجهزة المنزلية
                            </h2>
                            <button className="btn">
                              اطلب الآن
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="imges img_2">
                        <div className="img">
                          <div className="text">
                            <h2>
                              الأجهزة المنزلية
                            </h2>
                            <button className="btn">
                              اطلب الآن
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ////////////////////////////////////// */}
          <section className="banner">
            <div className="slide slide_sale">
              <div className="container">
                <div className="sale_sec mySwiper">
                <Swiper
          loop={true}
 
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
   
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[EffectFade, Navigation,  ]}      
          className="mySwiper"  
      >
        <SwiperSlide> <img src="/img/banner_1.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_2.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_3.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_4.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_5.webp" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_6.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_7.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_8.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_9.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_10.webp" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_11.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_12.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_13.webp" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_14.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_15.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_16.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_17.png" /></SwiperSlide>
        <SwiperSlide> <img src="/img/banner_18.webp" /></SwiperSlide>
      </Swiper>
 
                </div>
              </div>
            </div>
          </section>
          {/* ////////////////////////// */}
          <section className="imges">
            <div className="container">
              <div className="cols">
                <div className="col">
                  <div className="img img_1">
                    <div className="text">
                      <button>
                        غسالات
                      </button>
                      <h3>
                        خصومات الغسالات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_2">
                    <div className="text">
                      <button>
                        شاشات
                      </button>
                      <h3>
                        خصومات الشاشات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_3">
                    <div className="text">
                      <button>
                        ثلاجات
                      </button>
                      <h3>
                        اقوي خصومات الثلاجات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_4">
                    <div className="text">
                      <button>
                        غسالات الاطباق
                      </button>
                      <h3>
                        احدث غسالات الاطباق
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_5">
                    <div className="text">
                      <button>
                        بوتجازات
                      </button>
                      <h3>
                        احدث البوتجازات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img img_6">
                    <div className="text">
                      <button>
                        تكييفات
                      </button>
                      <h3>
                        اقوي عروض التكييفات
                      </h3>
                      <a href="##">
                        المنتجات
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

{/* //////////////////////////////////// */}
          <div className="slide slide_sale">
            <div className="container">
              <div className="sale_sec mySwiper">
                <div className="top_slide">
                  <h2>
                    احدث عروض اطقم البلت ان{' '}
                  </h2>
                </div>
                
                <div className="products swiper-wrapper">

        
                  <Swiper
          loop={true}
 
     
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
   
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[ Navigation]}      
          className="mySwiper"
      >
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
      </Swiper>
                </div>
           
              </div>
            </div>
          </div>
          {/* ////////////////// */}
          <div className="slide slide_sale">
            <div className="container">
              <div className="sale_sec mySwiper">
                <div className="top_slide">
                  <h2>
                    احدث عروض اطقم البلت ان{' '}
                  </h2>
                </div>
                
                <div className="products swiper-wrapper">

        
                  <Swiper
          loop={true}
 
     
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
   
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[ Navigation]}      
          className="mySwiper"
      >
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="product swiper-slide">
                    <div className="icons">
                      <span>
                        <i className="fa-solid fa-share icon-redo2 " />
                      </span>
                      <span>
                        <i className="fa-solid fa-magnifying-glass icon-search" />
                      </span>
                      <span>
                        <i className="fa-regular fa-heart icon-heart" />
                      </span>
                    </div>
                    <span className="sale_present">
                      10%
                    </span>
                    <div className="img_product">
                      <img
                        alt=""
                        src="img/home_2.jpg"
                      />
                      <img
                        alt=""
                        className="img_hover"
                        src="img/home_3.jpg"
                      />
                    </div>
                    <h3 className="name_product">
                      {' '}
                      <a href="##">
                        طقم بيورتي + PIATTA 60 cm
                      </a>
                    </h3>
                    <div className="price">
                      <p className="old_price">
                        EGP 240{' '}
                      </p>
                      <p>
                        <span>
                          220 EGP{' '}
                        </span>
                      </p>
                    </div>
                    <div className="card">
                      <div className="button">
                        <div className="button-wrapper">
                          <div className="text">
                            {' '}إضافة إلى السلة
                          </div>
                          <span className="icon">
                            <svg
                              className="bi bi-cart2"
                              fill="currentColor"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="whats">
                      <button>
                        الطلب عبر واتساب{' '}
                        <i className="fa-brands fa-whatsapp icon-whatsapp" />
                      </button>
                    </div>
                  </div>
        </SwiperSlide>
      </Swiper>
                </div>
           
              </div>
            </div>
          </div>















          
     
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" />
          <script src="store.js" />
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
        </body>
      </html>
    )
   }
   