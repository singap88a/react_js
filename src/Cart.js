
import './Cart.css';


export default function Cart (){
    return(
        <>
<html
   key="1"
   dir="rtl"
   lang="ar"
>
  <head>
    <meta charSet="UTF-8" />
    <meta
      content="IE=edge"
      httpEquiv="X-UA-Compatible"
    />
    <meta
      content="width=device-width, initial-scale=1.0"
      name="viewport"
    />
    <title>
      TOPICO
    </title>
    <link
      href="swiperJs/swiper-bundle.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="style.css"
      rel="stylesheet"
    />
  </head>
  <body className="menu-side-in-bag">
    <section className="cart">
      <form action="#">
        <div className="opc-sidebar">
          <h4>
            ملخص الطلب
          </h4>
          <p className="totl">
            الاجمالي : 133.00 جنيه
          </p>
          <div className="opc-box">
            <div className="count-itmes">
              <p className="cont-p">
                {' '}
                <span className="count-item-nmbr">
                  3
                </span>
                {' '}منتجات في سلة التسويق
              </p>
            </div>
            <div className="item">
              <img
                alt=""
             src="img/logo_v.png"
              />
              <div className="info-item">
                <p className="name-item">
                  إل جي ثلاجة 4 باب 19 قدم 530 لتر انفرتر GC-B22FTLFL
                </p>
                <p className="price-item">
                  {' '}السعر :{' '}
                  <span>
                    133.00 جنيه
                  </span>
                </p>
                <p className="count">
                  الكمية :{' '}
                  <span>
                    2
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <img
                alt=""
           src="img/logo_v.png"
              />
              <div className="info-item">
                <p className="name-item">
                  إل جي ثلاجة 4 باب 19 قدم 530 لتر انفرتر GC-B22FTLFL
                </p>
                <p className="price-item">
                  {' '}السعر :{' '}
                  <span>
                    133.00 جنيه
                  </span>
                </p>
                <p className="count">
                  الكمية :{' '}
                  <span>
                    2
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <img
                alt=""
              src="img/logo_v.png"
              />
              <div className="info-item">
                <p className="name-item">
                  إل جي ثلاجة 4 باب 19 قدم 530 لتر انفرتر GC-B22FTLFL
                </p>
                <p className="price-item">
                  {' '}السعر :{' '}
                  <span>
                    133.00 جنيه
                  </span>
                </p>
                <p className="count">
                  الكمية :{' '}
                  <span>
                    2
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="btn-div">
            <a
              className="btn"
              href="#info-user"
            >
              اكمال الطلب
            </a>
          </div>
        </div>
        <div className="row contanier">
          <div className="coupon-all">
            <div className="coupon">
              <input
                placeholder="ادخل رقم الكوبون.."
                type="text"
              />
              <button>
                استخدم الكوبون
              </button>
            </div>
            <div className="coupon2">
              <button>
                تحديث الصفحة
              </button>
            </div>
          </div>
        </div>
        <div
          className="cont-box-info"
          id="info-user"
        >
          <div className="info-order box brd-box">
            <h4>
              {' '}
              <i className="fa-solid fa-list" />
              {' '}ادخل بياناتك وعنوانك{' '}
            </h4>
            <div className="info  pad-box">
              <h5>
                اريد استخدام هذا العنوان
              </h5>
              <div className="info-acount">
                <input
                  defaultChecked
                  type="radio"
                />
                <span>
                  شارع الزهور                            الاسكندرية                             Al Iskandariyah                             Egypt,                            21516
                </span>
              </div>
              <div className="new-info">
                <div className="radio-inp">
                  <input type="radio" />
                  <span>
                    أريد استخدام عنوان جديد
                  </span>
                </div>
                <div className="show-inp-new-info">
                  <div className="div-inp">
                    <i className="fa-solid fa-user-pen" />
                    <input
                      placeholder="الاسم "
                      type="text"
                    />
                  </div>
                  <div className="div-inp">
                    <i className="fa-solid fa-phone" />
                    <input
                      placeholder= "الهاتف"
                      type="text"
                    />
                  </div>
                  <div className="div-inp">
                    <i className="fa-solid fa-location-dot" />
                    <input
                      placeholder="العنوان الاول :"
                      type="text"
                    />
                  </div>
                  <div className="div-inp">
                    <i className="fa-solid fa-map-location-dot" />
                    <input
                      placeholder="المدينة :"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="delvr-box brd-box">
              <h4>
                {' '}
                <i className="fa-solid fa-truck-fast" />
                {' '}معلومات الدلفري
              </h4>
              <div className="info-delv pad-box">
                <input
                  defaultChecked
                  type="radio"
                />
                <span>
                  تكلفة التوصيل :{' '}
                  <span>
                    29 جنيه
                  </span>
                </span>
              </div>
            </div>
            <div className="info-buyment brd-box">
              <h4>
                {' '}
                <i className="fa-solid fa-money-check-dollar" />
                {' '}معلومات الدفع
              </h4>
              <div className="info-buy pad-box">
                <input
                  defaultChecked
                  type="radio"
                />
                <span>
                  الدفع عند الاستلام
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="row contanier">
        <div className="cart-page-total">
          <h2>
            اجمالي السعر
          </h2>
          <ul>
            <li>
              السعر :{' '}
              <span>
                250.00 جنيه
              </span>
            </li>
            <li>
              تكلفة التوصيل :{' '}
              <span>
                29.00 جنيه
              </span>
            </li>
            <li>
              الاجمالي :{' '}
              <span>
                279.00 جنيه
              </span>
            </li>
          </ul>
          <a
            className="button"
            href="#"
          >
            تأكيد الطلب
          </a>
        </div>
      </div>
    </section>
  </body>
</html>
        
        </>
    )
}