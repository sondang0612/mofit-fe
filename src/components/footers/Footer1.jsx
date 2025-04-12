"use client";
import Link from "next/link";

export default function Footer1() {
  return (
    <footer className="bg-dark text-white py-5">
      <div
        className="container"
        style={{
          fontFamily: "Inter",
          fontSize: "11px",
        }}
      >
        <div className="row">
          {/* About Column */}
          <div className="col-6 col-lg-2">
            <div className="fw-bold fs-6 mb-3">About</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Reviews
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Ambassadors
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Stories
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Press
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-6 col-lg-2">
            <div className="fw-bold fs-6 mb-3">Support</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Customer Support
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Commercial Enquiries
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Shipping
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Returns & Warranty Claims
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Standard Warranty
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Wall Placement
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Installation
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  B2B Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div className="col-6 col-lg-1">
            <div className="fw-bold fs-6 mb-3">Corporate</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="col-6 col-lg-2">
            <div className="fw-bold fs-6 mb-3">Social</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Instagram
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  YouTube
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Pinterest
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  TikTok
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-decoration-none text-white">
                  Vimeo
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column - Now Larger */}
          <div className="col-12 col-md-5">
            <div className="fs-5 fw-bold mb-3">Join our community today.</div>
            <p className="mb-3">
              10% off first order. Be the first to hear the latest products
              news, vip offers and sales!
            </p>

            <div className="mb-3">
              <div className="d-flex">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="form-control form-control-sm bg-transparent border-white text-white rounded-8 me-2"
                  style={{
                    flex: "1",
                    height: "45px",
                    padding: "0.25rem 1rem",
                  }}
                />
                <button
                  className="btn btn-sm btn-light fw-medium rounded-8"
                  style={{ height: "45px", padding: "0 0.75rem" }}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <p className="small">
              By submitting this form and signing up for texts, you consent to{" "}
              <Link href="#" className="text-white text-decoration-underline">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
