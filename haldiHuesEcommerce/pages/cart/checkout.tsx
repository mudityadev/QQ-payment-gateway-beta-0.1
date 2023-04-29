

import Layout from '../../layouts/Main';
import { useSelector } from 'react-redux';

import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { RootState } from 'store';

// const QQPAY_PUBLISH_KEY = process.env.QQPAY_PUBLISH_KEY;
// const QQPAY_SECRET_KEY = process.env.QQPAY_SECRET_KEY;
const QQPAY_CHECKOUT_URL = "http://localhost:3000";
// const QQPAY_CHECKOUT_URL = process.env.QQPAY_CHECKOUT_URL;

const QQPAY_PUBLISH_KEY = "8Cj82KALrRFccHdvpJoYTUmemRnkvQ3kBA5F4EyRSau2"
// const QQPAY_CHECKOUT_URL = process.env.QQPAY_CHECKOUT_URL;




const CheckoutPage = () => {
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    console.log(cartItems);

    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }
    console.log(totalPrice);
    console.log("QQPAY_PUBLISH_KEY : " + QQPAY_PUBLISH_KEY);
    // console.log(QQPAY_CHECKOUT_URL);
    return totalPrice;
  });

  const handlePayment = () => {
    const checkoutUrl = `${QQPAY_CHECKOUT_URL}/checkout?publish_id=${QQPAY_PUBLISH_KEY}&total_price=${priceTotal.toFixed(3)}`;
    window.location.href = checkoutUrl;
  };



  // const handlePayment = () => {
  //   const checkoutUrl = `${QQPAY_CHECKOUT_URL}/checkout?publish_id=${QQPAY_PUBLISH_KEY}`;
  //   window.location.href = checkoutUrl;
  // };



  // const handlePayment = () => {
  //   const checkoutUrl = `${QQPAY_CHECKOUT_URL}/api/connect-interface/checkout`;
  //   const data = {
  //     publish_api: QQPAY_PUBLISH_KEY
  //   };
  //   fetch(checkoutUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then(response => {
  //       // handle response
  //     })
  //     .catch(error => {
  //       // handle error
  //     });
  // };






  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Address" />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="First name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="City" />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Last name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Postal code / ZIP" />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Phone number" />
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select>
                          <option>Country</option>
                          <option value="Argentina">Argentina</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Payment method</h3>
                <ul className="round-options round-options--three">
                  <li className="round-item active">
                    {/* <img src="/images/logos/QQ.png" alt="QQ Pay" /> */}
                    QQ Pay
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/visa.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/mastercard.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/discover.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/ideal-logo.svg" alt="Paypal" />
                  </li>
                </ul>
              </div>

              <div className="block">
                <h3 className="block__title">Delivery method</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg active">
                    <img src="/images/logos/inpost.svg" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dpd.svg" alt="Paypal" />
                    <p>$12.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dhl.svg" alt="Paypal" />
                    <p>$15.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                    <p>$10.00</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total cost</p>
                  {/* <h3>${priceTotal}</h3> */}
                  <h3>${priceTotal.toFixed(3)}</h3>

                </div>

                <button className="checkout-pay" onClick={handlePayment}>
                  <h3>Proceed to payment</h3>
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;