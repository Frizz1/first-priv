import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="first-area">
          <p className="team">Canadian School Of Ulaanbaatar</p>
          <div className="btn-container">
            <a className="btns" href="products">
              {" "}
              Information
            </a>
            <a className="btns" href="services">
              {" "}
              IDK
            </a>
            <a className="btns" href="contact">
              {" "}
              Contact
            </a>
            <a className="btns" href="login">
              {" "}
              Log in
            </a>
            <a className="overly-big-btn">Get Access</a>
            {/* <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label> */}
          </div>
        </div>
      </header>
    </>
  );
}
