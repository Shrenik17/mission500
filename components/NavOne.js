import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      activeLink: null,
      navlogo: null,
    };
  }
  handleLinkClick = (index) => {
    this.setState({ activeLink: index }, () => {
      // Check if localStorage is available before trying to save data
      if (typeof window !== "undefined") {
        localStorage.setItem("activeLink", index);
      }
    });
  };
  handleImageHover = () => {
    // Toggle the activeLink state on hover
    this.setState((prevState) => ({
      navlogo: prevState.navlogo === null ? "active" : null,
    }));
  };
  handleImageClick = () => {
    // Remove the class by setting activeLink to null
    this.setState({ activeLink: null }, () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("activeLink");
      }
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if (typeof window !== "undefined") {
      const activeLink = localStorage.getItem("activeLink");
      if (activeLink !== null) {
        this.setState({ activeLink: parseInt(activeLink) });
      }
    }
    //Mobile Menu
    this.mobileMenu();
  }
  
  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".mobile-menu-toggle");
    let mainNav = document.querySelector(".side-nav-container");

    mainNavToggler.addEventListener("click", function () {
      mainNav.classList.add("active");
    });

    //Close Mobile Menu
    let closeMenu = document.querySelector(".side-menu-close");
    closeMenu.addEventListener("click", function () {
      mainNav.classList.remove("active");
    });
  };

  render() {
    const navigationItems = [
      {
        text: "About",
        path: "/about",
        submenu: [
          { text: "Our Philosophy", path: "/about" },
          {
            text: "Our Vision, Mission and Goals",
            path: "/about/MissionVision",
          },
          { text: "Our Paach Patil Team", path: "/about/OurTeam" },
          { text: "Our Journey", path: "/about/OurJourney" },
          { text: "Execution Map", path: "/about/executionMap" },
        ],
      },
      {
        text: "Projects",
        path: "/projects/WaterConservation",
        submenu: [
          { text: "Water Conservation", path: "/projects/WaterConservation" },
          { text: "Education", path: "/projects/Education" },
          { text: "Employment", path: "/projects/Employment" },
          { text: "Tree Plantation", path: "/projects/TreePlantation" },
        ],
      },
      { text: "Media", path: "/events" },
      { text: "Blogs", path: "/blogs" },
      { text: "Contact Us", path: "/contact" },
      // ... other items
    ];
    return (
      <div>
        <header className="header-area">
          <div className="header-top-action">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="top-action-content">
                    <div className="info-box info-box-1 d-flex align-items-center">
                      <p
                        className="slider__meta "
                        style={{ fontSize: "15px", color: "white" }}
                      >
                        Mission 500 - Transforming Maharashtra's Water Landscape
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="top-action-content info-action-content">
                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                      <ul className="top-action-list d-flex align-items-center">
                        {/* <li className="action__text"><Link href="/">login</Link></li>
                                                <li className="action__text"><Link href="/">register</Link></li> */}
                        <li>
                          <Link
                            href="https://www.facebook.com/mission500mh"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://twitter.com/mission500mh"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com/mission500mh/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.youtube.com/channel/UCbkHsi_kfgmYrSQHKlgyciQ"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-youtube-play"></i>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="https://mission500mh.com/home"
                            target="_blank"
                          >
                            <p style={{ fontSize: "12px" }}>मराठी</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`header-top header-menu-action ${
              this.state.sticky ? "header-fixed" : ""
            }`}
          >
            <div className="container">
              <div className="row ostion-top-wrap">
                <div className="col-lg-5 col-sm-5 site-branding">
                  <div className="logo-action d-flex align-items-center">
                    <div className="ostion-logo">
                      <Link href="/">
                        <div
                          className="logo-image-container"
                          onMouseEnter={this.handleImageHover}
                          onMouseLeave={this.handleImageHover}
                        >
                          <img
                            src="/images/mlogo.png"
                            width={90}
                            height={90}
                            alt="Mission500 Logo"
                            title="mission500"
                            className={`image ${
                              this.state.activeLink === null ? "active" : ""
                            }`}
                            onClick={this.handleImageClick}
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="header-btn ml-auto">
                      <a
                        href="/images/brochure.pdf"
                        target="_blank"
                        className="theme-btn"
                      >
                        View Brochure
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-7 ostion-menu">
                  <div className="ostion-menu-innner">
                    <div className="ostion-menu-content">
                      <div
                        style={{
                          fontWeight: "400",
                        }}
                        className="navigation-top"
                      >
                        <nav className="main-navigation">
                          <ul>
                            {navigationItems.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href={item.path}
                                  onClick={() => this.handleLinkClick(index)}
                                  className={
                                    index === this.state.activeLink
                                      ? "active_link"
                                      : ""
                                  }
                                >
                                  <p
                                    style={{ fontSize: "19px" }}
                                    className={
                                      index === this.state.activeLink
                                        ? "active_link"
                                        : ""
                                    }
                                  >
                                    {item.text}
                                  </p>
                                </Link>
                                {item.submenu && (
                                  <ul className="dropdown-menu-item">
                                    {item.submenu.map((subitem, subindex) => (
                                      <li
                                        key={subindex}
                                        style={{ width: "max-content" }}
                                      >
                                        <Link
                                          href={subitem.path}
                                          onClick={() =>
                                            this.handleLinkClick(index)
                                          }
                                        >
                                          <p>{subitem.text}</p>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="mobile-menu-toggle">
                      <i className="fa fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav-container">
            <div className="humburger-menu">
              <div className="humburger-menu-lines side-menu-close"></div>
            </div>
            <div className="side-menu-wrap">
              <ul className="side-menu-ul">
                <li className="sidenav__item">
                  <Link href="/about">About</Link>
                  <ul className="side-sub-menu">
                    
                  </ul>
                </li>
                <li className="sidenav__item">
                  <Link href="/projects/WaterConservation">Projects</Link>
                  {/* <ul className="side-sub-menu">
                    <li>
                      <Link href="/projects/WaterConservation">
                        <p style={{ color: "#00ffcb", fontSize: "10px" }}>
                          water conservation
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/Education">
                        <p style={{ color: "#00ffcb", fontSize: "10px" }}>
                          Education
                        </p>
                      </Link>
                      </li>
                      <li>
                      <Link href="/projects/Employment">
                        <p style={{ color: "#00ffcb", fontSize: "10px" }}>
                          Employment
                        </p>
                      </Link>
                      </li>
                      <li>
                      <Link href="/projects/TreePlantation">
                        <p style={{ color: "#00ffcb", fontSize: "10px" }}>
                          Tree Plantation
                        </p>
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="sidenav__item">
                  <Link href="/events">Media</Link>
                </li>
                <li className="sidenav__item">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="sidenav__item">
                  <Link href="/contact">Contact Us </Link>
                </li>
              </ul>
              <ul className="side-social">
                <li>
                  <Link
                    href="https://www.facebook.com/mission500mh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                <Link
                          href="https://twitter.com/mission500mh"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* <i className="fa fa-twitter"></i> */}
                          <img
                            style={{ height: "15px" }}
                            src="/images/twitter_logo.png"
                            alt="twitter logo"
                          />
                        </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/mission500mh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UCbkHsi_kfgmYrSQHKlgyciQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </li>
              </ul>
              <div className="side-btn">
                <div className="header-btn ml-auto">
                  <a
                    href="/images/brochure.pdf"
                    target="_blank"
                    className="theme-btn"
                  >
                    View Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavOne;
