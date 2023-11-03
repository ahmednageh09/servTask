import React from "react";
import "./Home.css";
import largeRocket from "../../assets/large-rocket.png";
import neptune from "../../assets/neptune.png";
import saturn from "../../assets/saturn.png";
import Button from "../../components/button/Button";
import rocket from "../../assets/rocket2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [Ref, View] = useInView({
    triggerOnce: true,
  });
  const [welRef, welView] = useInView({
    triggerOnce: true,
  });
  const [btnRef, btnView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="description col-sm-12 col-md-8">
              <h2 ref={Ref} className={`${View ? 'welcome' : ''}`}>Create Your Online Store In Minutes</h2>
              <div ref={welRef} className={`${welView ? 'wel' : ''}`}>Own a professional store at the lowest costs and without sal...</div>
            <Button type="submit" text="Create Your Store for free" fontSize={"0.9rem"} width={"13rem"} />
          </div>
          <div className="col-md-4 logos">
            <div className="icons">
              <img className="rocket" src={largeRocket} alt="logo"/>
              <img className="neptune" src={neptune} alt="logo"/>
              <img className="saturn" src={saturn} alt="logo"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid joinSec">
        <div className="container">
          <div className="head">
            <h2>Join Our Exclusive List Of Stores Created By Makkok</h2>
            <img src={rocket} alt="logo"/>
          </div>
          <div ref={btnRef} className={`numbers ${btnView ? 'showIcon' : ''}`}>
            <div className="box">
              <FontAwesomeIcon className="icon" icon={faStore} />
              <h4>Markets</h4>
              <span>123</span>
            </div>
            <div className="box">
            <FontAwesomeIcon className="icon" icon={faTruck} />
              <h4>Orders</h4>
              <span>636</span>
            </div>
            <div className="box">
              <FontAwesomeIcon className="icon" icon={faWallet} />
              <h4>Transactions</h4>
              <span>189,861.58</span>
            </div>
          </div>
          <div ref={ref} className={`footer ${inView ? 'join' : ''}`}>
            <h3>Join Our Client List Now</h3>
            <Button type="submit" text="Create Your Store for free" fontSize={"0.9rem"} width={"13rem"} />
          </div>
        </div>
      </div>
    </>
  );
}
