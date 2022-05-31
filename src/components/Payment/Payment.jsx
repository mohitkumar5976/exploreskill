import React from "react";
import "./Payment.css";
import lady from "../images/womenImages/w4.jpg";

import productVideo from "../videos/pot.mp4";
import sellerVideo from "../videos/pros.mp4";
import Footer from "../Footer/Footer";
import LoginHeader from "../Header/LoginHeader";

function Payment() {
  return (
    <>
      <div className="payment">
        <LoginHeader />
        <h3 className="text-center bg-success text-white">
          Complete Your Transaction
        </h3>

        <div className="payment-body">
          <div className="payment-left-section text-center">
            <h4 className="p-3">Name of Item: Flower Vase</h4>
            <h4 className="p-3">Name of Seller:Sona Rani</h4>

            <div className="payment-card card my-4 p-3 bg-warning">
              <h2>Select A Method</h2>
              <h6>Please select your method of payment:</h6>

              <div class="form-check ">
                <input
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Pay On Delivery
                </label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Paytm
                </label>
              </div>
            </div>

            <h2>Shipping Address</h2>

            <div className="shipping-card card p-5 m-3">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label ">
                    Country
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" class="btn btn-primary w-75">
                  <a
                    href="/paymentstatus"
                    className="text-decoration-none text-white"
                  >
                    Place Order
                  </a>
                </button>
              </form>
            </div>
          </div>
          <div className="payment-right-section">
            <div className="card text-center p-3 bg-warning">
              <h2>Summary</h2>
              <img src={lady} style={{ margin: "0 auto" }} alt="" width={300} />
              <h5>Price : Rs.500</h5>
              <h4>Delivery Charge : Rs.20</h4>
              <h6>Total Cost : Rs.520</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore, quod? Nisi, natus. Excepturi, voluptatum! Nemo iusto
                molestias quos? Repellendus, quis.
              </p>
            </div>

            <div className="product-video-card" style={{ margin: "0 auto" }}>
              <iframe width="512" height="315" src={productVideo}></iframe>
            </div>
            <div className="seller-video-card" style={{ margin: "0 auto" }}>
              <iframe width="512" height="315" src={sellerVideo}></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
