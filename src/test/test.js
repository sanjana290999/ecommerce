import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const Test = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={"./image 28.png"} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.banner}>
        <img
          src={"./Main Banner 1 (1).png"}
          alt="Banner 1"
          style={styles.image}
        />
        <div style={styles.bannerContent}>
          <div style={styles.bannerText}>
            <h2 style={styles.bannerHeading}>
              Pure Bliss Mouthwash for Sensitive Teeth - Protect your smile
              Naturally.
            </h2>
            <p style={styles.bannerSubheading}>
              Say goodbye to tooth sensitivity and gum problems and hello to a
              naturally invigorated smile. Feel the difference of pure, organic
              oral care with every swish.
            </p>
            <button style={styles.button}>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.banner}>
          <img src={"./Frame 69.png"} alt="Banner 2" style={styles.image2} />
        </div>
        <div style={styles.banner}>
          <img
            src={"./Banner-2 (2) 2.png"}
            alt="Banner 3"
            style={styles.image3}
          />
        </div>
        <div style={styles.footer}>
          <h5 style={styles.footerText}>
            For Bulk Orders Whatsapp "oraytiq Bulk" to{" "}
            <FontAwesomeIcon icon={faPhoneAlt} /> +91 80799900987
          </h5>
          <h5 style={styles.footerText}>
            For refunds and other queries, write to us at{" "}
            <FontAwesomeIcon icon={faEnvelope} /> support@dentamitra.com
          </h5>
          <div style={styles.socialIcons}>
            <a href="https://www.instagram.com" style={styles.icon}>
              <FaInstagramSquare style={styles.instagramIcon} />
              Instagram
            </a>
            <a href="https://www.facebook.com" style={styles.icon}>
              <FaFacebookSquare style={styles.facebookIcon} />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxWidth: "100%",
    margin: "0 auto",
  },
  logoContainer: {
    textAlign: "center",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "1",
  },
  logo: {
    width: "200px",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  banner: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#f0f8ff",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  bannerContent: {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    maxWidth: "700px",
    textAlign: "left",
    color: "#333",
    padding: "20px",
  },
  bannerText: {
    zIndex: "1",
  },
  bannerHeading: {
    fontSize: "2.5em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  bannerSubheading: {
    fontSize: "1.2em",
    lineHeight: "1.5",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
  content: {
    padding: "20px",
    backgroundColor: "#f0f8ff",
  },
  image2: {
    width: "60%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  image3: {
    width: "60%",
    height: "auto",
    display: "block",
    margin: "0 auto",
    padding: "30px",
    marginTop: "30px",
  },
  footer: {
    backgroundColor: "#557054",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  footerText: {
    fontSize: "1.5em",
    fontFamily: "Arial, sans-serif",
    marginBottom: "10px",
  },
  socialIcons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    color: "white",
    fontSize: "24px",
    margin: "0 10px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  instagramIcon: {
    color: "#E4405F",
    marginRight: "10px",
  },
  facebookIcon: {
    color: "#1877F2",
    marginRight: "10px",
  },
};

export default Test;
