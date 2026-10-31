import React, { useEffect, useState } from "react";
import DiwaliFireworks from "./components/DiwaliFireworks";
import { ArrowDown, ArrowUpRight, Instagram, MessageCircle, Sparkles } from "lucide-react";

const sweets = [
  { name: "Laddu", price: "₹400", unit: "Per Kg", note: "A golden, festive classic" },
  { name: "Jilebi", price: "₹400", unit: "Per Kg", note: "Crisp, syrupy and joyful" },
  { name: "Mysore Pakku", price: "₹400", unit: "Per Kg", note: "Rich, melt-in-your-mouth goodness" },
  { name: "Bhadusha", price: "₹400", unit: "Per Kg", note: "Soft layers with a sweet finish" },
  { name: "Mundhiri Cake", price: "₹900", unit: "Per Kg", note: "A nutty celebration favourite" },
  { name: "Pice Alwa", price: "₹600", unit: "Per Kg", note: "Traditional taste, lovingly made" },
  { name: "Mixed Sweets", price: "₹500", unit: "Per Kg", note: "A little happiness in every bite" },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [opened, setOpened] = useState(false);
  useReveal();

  const openInvitation = () => {
    setOpened(true);
    window.setTimeout(() => {
      document.getElementById("celebration")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  const whatsappLink = "https://wa.me/919944403030?text=" + encodeURIComponent(
    "Hi N Veetu Samayal! I would like to order sweets for Diwali. Please share the details."
  );

  return (
    <>
      <DiwaliFireworks />
      <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="N Veetu Samayal home">
          <span className="brand-mark">N</span>
          <span><strong>N Veetu Samayal</strong><small>TRADITIONAL TASTE, EVERY CELEBRATION</small></span>
        </a>
        <a className="nav-order" href={whatsappLink} target="_blank" rel="noreferrer">
          Order sweets <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> A LITTLE FESTIVE MAGIC</div>
          <h1>Make your Diwali<br /><em>sweeter.</em></h1>
          <p className="hero-lead">A heartfelt invitation to celebrate with the flavours, warmth and traditions of home.</p>
          <button className={`open-invite ${opened ? "opened" : ""}`} onClick={openInvitation}>
            {opened ? "Invitation opened" : "Open your Diwali invitation"}
            <ArrowDown size={17} />
          </button>
          <div className="hero-note"><span className="tiny-diya">✦</span> Homemade with love, made for sharing.</div>
        </div>
        <div className="hero-art">
          <div className="art-halo" />
          <img src={`${import.meta.env.BASE_URL}images/invitation.png`} alt="N Veetu Samayal Diwali sweets invitation poster" />
          <div className="art-caption">A SWEET TRADITION <span>✦</span> MADE WITH LOVE</div>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO CELEBRATE</div>
      </section>

      <section className="celebration section-wrap" id="celebration">
        <div className="section-heading reveal">
          <div className="eyebrow centered"><Sparkles size={15} /> THE FESTIVE COLLECTION</div>
          <h2>Our special <em>Diwali sweets</em></h2>
          <p>Traditional recipes. Unforgettable flavours. Every box is a little celebration.</p>
        </div>
        <div className="menu-layout">
          <div className="menu-poster reveal">
            <img src={`${import.meta.env.BASE_URL}images/sweets-menu.png`} alt="Diwali sweets menu with prices" />
            <div className="poster-shine" />
          </div>
          <div className="sweet-list">
            {sweets.map((sweet, i) => (
              <article className="sweet-row reveal" style={{ "--delay": `${i * 70}ms` }} key={sweet.name}>
                <div className="sweet-number">{String(i + 1).padStart(2, "0")}</div>
                <div className="sweet-info">
                  <h3>{sweet.name}</h3>
                  <p>{sweet.note}</p>
                </div>
                <div className="sweet-price"><strong>{sweet.price}</strong><span>{sweet.unit}</span></div>
              </article>
            ))}
            <a className="menu-cta" href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Place your order <ArrowUpRight size={17} />
            </a>
            <p className="price-note">Prices are listed per kilogram. Contact us to confirm your order.</p>
          </div>
        </div>
      </section>

      <section className="wishes-section" id="wishes">
        <div className="wishes-image reveal">
          <img src={`${import.meta.env.BASE_URL}images/diwali-wishes.png`} alt="N Veetu Samayal wishes you a Happy Diwali" />
        </div>
        <div className="wishes-copy reveal">
          <div className="eyebrow"><Sparkles size={15} /> LIGHT, LOVE & SWEETNESS</div>
          <h2>May your home glow<br />with <em>happiness.</em></h2>
          <p>May this Diwali bring you beautiful beginnings, warm memories, and a little extra sweetness in every moment.</p>
          <div className="wish-signoff">With love, <strong>N Veetu Samayal</strong></div>
          <a className="outline-cta" href={whatsappLink} target="_blank" rel="noreferrer">Celebrate with our sweets <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="order-section">
        <div className="order-card reveal">
          <div className="eyebrow centered"><Sparkles size={15} /> MAKE IT A SWEET DIWALI</div>
          <h2>Let’s make your<br /><em>celebration sweeter.</em></h2>
          <p>For orders and enquiries</p>
          <a className="phone-link" href="tel:+919944403030">+91 99444 03030</a>
          <a className="final-order" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Order on WhatsApp <ArrowUpRight size={17} />
          </a>
          <a className="instagram-link" href="https://www.instagram.com/nveetusamayal/" target="_blank" rel="noreferrer">
            <Instagram size={18} /> @nveetusamayal
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">N Veetu Samayal</div>
        <p>Traditional taste for every celebration.</p>
        <span>Wishing you and your family a very Happy Diwali ✨</span>
      </footer>
      </main>
    </>
  );
}

export default App;