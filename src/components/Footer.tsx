import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 bg-white px-4 pb-10 md:px-8 lg:mt-32 lg:px-[6.944vw]">
      <div className="-mb-10 translate-y-0 rounded-3xl bg-black px-5 py-8 md:px-8 lg:translate-y-[-50%] lg:px-16 lg:py-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-full font-heading text-3xl leading-none font-bold text-white uppercase md:text-4xl lg:max-w-87.5">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="flex w-full flex-col gap-3 lg:w-87.5">
            <label htmlFor="email-newsletter" className="sr-only">
              email adress
            </label>
            <input
              className="h-12 rounded-full bg-white px-5 text-sm outline-none"
              type="email"
              name="email-newsletter"
              id="email-newsletter"
              placeholder="Enter your email adress"
            />
            <button
              className="h-12 rounded-full bg-white px-5 text-sm font-semibold"
              type="submit"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:-mt-12">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
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

        <div className="flex flex-col gap-5 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-sm text-black/60">
            Shop.co © 2000–2023, All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-3">
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