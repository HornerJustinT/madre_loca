import { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { AiOutlinePhone } from "react-icons/ai";
import { IconContext } from "react-icons";
import menu from "../../shooters_menu.pdf";
import "reactjs-popup/dist/index.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { slide as Menu } from 'react-burger-menu'
import ReactMapboxGl, {
  Marker,
  Layer,
  Feature,
  ZoomControl,
} from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FacebookProvider, Feed, Page } from "react-facebook";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaG9ybmVyMSIsImEiOiJja2dqYjF5ZjYwa2xrMnltbzZ1MXd1Z2NzIn0.tL4K0jThtP5QJzhkFt-WbQ",
});

class HomePage extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 200);
  }
  render() {
    return (
      <div className={"App " + (this.state.show ? "blur" : "")}>
        <div>
          <Modal
            className="Modal"
            show={this.state.show}
            handleClose={this.hideModal}
          >
            <div className="Popup">
              <div className="popup-callout text-center">
                Online Ordering Availabe!{" "}
                <a
                  href="https://shooters.froogleonline.io/"
                  target="_blank"
                  className="btn btn-primary btn-large"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
                <button onClick={this.hideModal}>X</button>
              </div>
            </div>
          </Modal>
        </div>
        <Menu width = "45%">
        <a id="home" className="Menu-item" href="/">Home</a>
        <a id="about" className="Menu-item" href="#About">About</a>
        <a id="contact" className="Menu-item" href="#About">Contact</a>
        <button     onClick={(e) => {
      e.preventDefault();
      window.location.href="https://shooters.froogleonline.io/";
      }} id ="onlineorder" className="Menu-order">Order Online</button>

      </Menu>
        <div className="Banner">
          <div className="header-callout text-center">
            Online Ordering Now Available!{" "}
            <a
              href="https://shooters.froogleonline.io/"
              target="_blank"
              className="btn btn-primary btn-large"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </div>
        </div>
        <div className="First-photo">
          <div className="Header">
            <div className="Header-menu">



      </div>
            {/* <div className="Header-social-media">
              <SocialIcon url="https://www.facebook.com/Shooters-121490991194526/" />
            </div> */}
            <div className="Header-logo">
              <a></a>
            </div>
            <div className="Header-contact">
              <div></div>
              <IconContext.Provider value={{ color: "white", size: "3vw" }}>
                <div className="Float-right">
                  <a href="tel:763-631-7468">
                    <AiOutlinePhone></AiOutlinePhone>
                  </a>
                </div>
              </IconContext.Provider>
              {/* <p className="Float-right White">(763) 631-7468</p> */}
              <a className="Float-right White Phone" href="tel:763-631-7468">
                (763) 631-7468
              </a>
              <p className="Float-right White Phone">5584 MN-95, Princeton</p>
            </div>
          </div>

          {/* add an order online in the top */}
          {/* <div className="Nav-bar">
            <a className="Menu-item" href={process.env.PUBLIC_URL}>
              {" "}
              Home
            </a>
            <a className="Menu-item" href="#About">
              {" "}
              About
            </a>
            <a className="Menu-item" href={menu} download="Shooters Menu">
              {" "}
              Menu
            </a>
            <a className="Menu-item" href="#Contact">
              {" "}
              Contact
            </a>{" "}
            <button className="Menu-order">Order Online</button>
          </div> */}
          <div className="Cover">
            <h1 className="shadow-title">
              Great food, wonderful service, and fun atmosphere
            </h1>
            <form action={menu} target="_blank">
              <input
                className="Menu-link"
                type="submit"
                value="View Our Menu!"
              />
            </form>
          </div>
        </div>
        <div className="About">
          <div className="About-left">
            <a name="About"></a>{" "}
            <h1 className="shadow-title" id="About-text">
              Welcome to Shooters Sports Bar
            </h1>
            <p className="about-text">
              Shooters is a sports bar located on highway 95, 4 miles west of
              Princeton. Here at Shooters we value our hometown feel and
              delicious food. Please come in and have a drink or try our home
              cooked food. Enjoy!
            </p>
          </div>{" "}
          <div className="About-right">
            <img
              title="Shooters Sports Bar Hamburger"
              alt = "Shooters Sports Bar Hamburger"
              width="100%"
              src="https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_960_720.jpg"
            ></img>
          </div>
        </div>
        {/* <div className="two-columns">
          <div>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              center={[-93.522996, 45.586754]}
              containerStyle={{
                height: "100%",
                width: "100%",
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[-93.522996, 45.586754]} />
              </Layer>
            </Map>
          </div>
          <div class="container">
            <a name="Contact"></a>{" "}
            <form action="action_page.php">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
            <h5>Phone: (763) 631-7468 </h5>
            <h5>Address : 5584 MN-95, Princeton</h5>
          </div>
        </div> */}
        {/* <div className="contact"><h2 className="map-right">Location</h2><p>Come join us at 5584 MN-95, Princeton. We are 4 miles east of Princetown on highway 95!</p>
          <h2>Contact</h2><p>(763) 631-7468</p></div></div> */}
        {/* <footer className="footer">
          <p className="White">
            © 2020, Shooters Sport Bar. All rights reserved
          </p>
        </footer> */}
        <div className="white three-columns">
          <div className="eighty-twenty">
            <div>
              <h1>Our Facebook Feed</h1>
            </div>
            <div className="facebook-feed">
              <FacebookProvider
                className="facebook-feed"
                appId="810535819790517"
              >
                <Page
                  className="facebook-feed"
                  href="facebook.com/pages/category/Sports-Bar/Shooters-121490991194526/"
                  tabs="timeline"
                  height="320px"
                />
              </FacebookProvider>{" "}
            </div>
          </div>
          <div className=" white eighty-twenty">
            <div>
              <h1>Find Us</h1>
            </div>
            <div className="map">
              <Map
                // add directions link
                style="mapbox://styles/mapbox/streets-v8"
                center={[-93.522996, 45.586754]}
                containerStyle={{
                  height: "80%",
                  width: "100%",
                }}
              >
                <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "marker-15", "icon-size": 1 }}
                  paint={ {
                    "icon-color" : "red"
                }}
                >
                  <Feature coordinates={[-93.522996, 45.586754]} />
                </Layer>
                <ZoomControl />
              </Map>
              <button className="btn"
              id="directions"
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href="https://www.google.com/maps/dir//Shooters,+5584+MN-95,+Princeton,+MN+55371/@45.5868446,-93.525281,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52b39f09b35095ef:0x8bb31db0b8b0f1f8!2m2!1d-93.5230923!2d45.5868446!3e0";
      }}
> Directions</button>
            </div>
          </div>
          <div className="white eighty-twenty">
            <div>
              <h1>Contact Us</h1>
            </div>
            <div className="white align-left contact-us">
              <h2>Shooters Sports Bar</h2>
              <h4>5584-MN-95</h4>
              <h4>Princeton, MN 55371</h4>
              <h4>
                (763) 631-7468
                <a
                  className="Float-right White Phone"
                  href="tel:763-631-7468"
                />
              </h4>
            </div>
          </div>
          <div className="black-bandaid">

          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
