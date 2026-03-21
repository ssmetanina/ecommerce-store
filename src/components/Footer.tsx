import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-32 bg-white px-[6.944vw] pb-10">
      <div className="translate-y-[-50%] rounded-3xl bg-black px-16 py-9">
        <div className="flex justify-between items-center gap-8">
          <h2 className="max-w-87.5 text-white font-bold text-4xl font-heading uppercase leading-none ">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex w-87.5 flex-col gap-3">
            <label htmlFor="email-newsletter" className="sr-only">email adress</label>
            <input className="bg-white h-12 rounded-full px-5 text-sm outline-none"
            type="email" name="email-newsletter" id="email-newsletter" placeholder="Enter your email adress"/>
            <button className="bg-white h-12 rounded-full px-5 text-sm font-semibold"
            type="submit">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    

    <div className="-mt-12">    
      <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10 pb-12">
      <div className="max-w-62">
        <img src="/images/logo.svg" alt="logo" className="h-8" />
        <p className="mt-6 font-body text-sm leading-6 text-black/60">
          We have what suits you and what you’re proud to buy
                      </p>

              <div className="mt-8 flex gap-3">
                <Link to="#">FB</Link>
                <Link to="#">IG</Link>
                <Link to="#">TW</Link>
                <Link to="#">GH</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-body text-sm font-semibold uppercase tracking-[0.2em]">
                Company
              </h3>
              <ul className="space-y-4 font-body text-sm text-black/60">
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Features</Link></li>
                <li><Link to="#">Works</Link></li>
                <li><Link to="#">Career</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-body text-sm font-semibold uppercase tracking-[0.2em]">
                Help
              </h3>
              <ul className="space-y-4 font-body text-sm text-black/60">
                <li><Link to="#">Customer Support</Link></li>
                <li><Link to="#">Delivery Details</Link></li>
                <li><Link to="#">Terms & Conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-body text-sm font-semibold uppercase tracking-[0.2em]">
                FAQ
              </h3>
              <ul className="space-y-4 font-body text-sm text-black/60">
                <li><Link to="#">Account</Link></li>
                <li><Link to="#">Manage Deliveries</Link></li>
                <li><Link to="#">Orders</Link></li>
                <li><Link to="#">Payments</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-body text-sm font-semibold uppercase tracking-[0.2em]">
                Resources
              </h3>
              <ul className="space-y-4 font-body text-sm text-black/60">
                <li><Link to="#">Free eBooks</Link></li>
                <li><Link to="#">Development Tutorial</Link></li>
                <li><Link to="#">How to - Blog</Link></li>
                <li><Link to="#">Youtube Playlist</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-black/10 pt-6">
            <p className="font-body text-sm text-black/60">
              Shop.co © 2000–2023, All Rights Reserved
            </p>

            <div className="flex gap-3">
              <img src="/images/visa.svg" alt="Visa" />
              <img src="/images/mastercard.svg" alt="Mastercard" />
              <img src="/images/paypal.svg" alt="PayPal" />
              <img src="/images/apple-pay.svg" alt="Apple Pay" />
              <img src="/images/google-pay.svg" alt="Google Pay" />
            </div>
          </div>
        </div>
        </footer>
  );
}

export default Footer;
