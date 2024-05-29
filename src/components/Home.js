import React from "react";
import siteLogo from "../assets/images.jpg";
import siteLogo3 from "../assets/littlelemon.jpg";
import siteLogo2 from "../assets/littlelemon3.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="images-container">
        <img src={siteLogo} alt="Site Logo" className="image" />
        <img src={siteLogo2} alt="Site Logo2" className="image2" />
        <img src={siteLogo3} alt="Site Logo3" className="image3" />
      </div>
      <section className="banner">
        <h2>Welcome to Little Lemon Restaurant!</h2>
        <div className="schedule">
          <div>Monday-Friday: 09:00 AM - 10:00 AM</div>
          <div>Saturday: 09:00 AM - 12:00 AM</div>
          <div>Sunday: 09:00 AM - 12:00 AM</div>
        </div>
      </section>
      <section className="content">
        <article className="first">
          <img
            className="img"
            src="https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2023/06/Sirloin-Steak-24.jpg"
            alt="Steak"
          />
          <div className="description">
            <h2 className="text">Baked marinated steak</h2>
            <p className="p">
              You'll be shocked at the difference a good marinade makes!
            </p>
          </div>
        </article>
        <article className="second">
          <img
            className="img"
            src="https://www.iheartnaptime.net/wp-content/uploads/2023/02/Beef-Tenderloin-I-Heart-Naptime-23.jpg"
            alt="Beef"
          />
          <div className="description">
            <h2 className="text">Beef with lemon juice</h2>
            <p className="p">
              Explore the juicy delight of lemon-infused beef stew simmered to
              perfection.
            </p>
          </div>
        </article>
        <article className="third">
          <img
            className="img"
            src="https://www.cocktailcontessa.com/wp-content/uploads/2022/06/bourbon-lemonade-14-768x1024.jpg"
            alt="Lemonade"
          />
          <div className="description">
            <h2 className="text">Our best lemonade</h2>
            <p className="p">
              Enjoy our top-tier lemonade with fresh ingredients and a perfect
              sweet-tart balance.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
