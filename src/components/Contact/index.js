import React, { Component } from "react";
// import { NaverMap, RenderAfterNavermapsLoaded, Marker } from "react-naver-maps";
import maincss from "../main.module.css";
import css from "./contact.module.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div className={maincss.contentWrapper}>
        <div className={maincss.flexWrapper1} />
        <div className={maincss.footerflexWrapper2}>
          <div className={css.contacts}>
            <div className={css.contactTitle}>CONTACT</div>
            <div className={css.contactContainer}>
              <div className={css.contactImage}>
                <FaMapMarkerAlt size={"1.5rem"} />
              </div>
              <div className={css.contactText}>
                서울특별시 강남구 삼성동 143-6 영창빌딩 4층
              </div>
            </div>
            <div className={css.contactContainer}>
              <div className={css.contactImage}>
                <IoIosMail size={"1.5rem"} />
              </div>
              <div className={css.contactText}>support@theared.com</div>
            </div>
            <div className={css.contactContainer}>
              <div className={css.contactImage}>
                <FaPhoneSquare size={"1.5rem"} />
              </div>
              <div className={css.contactText}>02-2028-3720</div>
            </div>
          </div>
          {/* <div className={css.contactsWrapper}>
            <div className={css.map}>
              <div className={css.mapWrapper}>
                <RenderAfterNavermapsLoaded ncpClientId={"5ncyfey1wo"}>
                  <NaverMap
                    id="maps-examples-map-simple2"
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                    defaultCenter={{ x: 127.0536221, y: 37.50726 }}
                    defaultZoom={10}
                  >
                    <Marker
                      position={{ x: 127.0536221, y: 37.50726 }}
                      animation={0}
                      onClick={() => {
                        alert("ARED");
                      }}
                    />
                  </NaverMap>
                </RenderAfterNavermapsLoaded>
              </div>
            </div>
            <div className={css.contacts}>
              <div className={css.contactContainer}>
                <div className={css.contactImage}>
                  <FaMapMarkerAlt size={"1.5rem"} />
                </div>
                <div className={css.contactText}>
                  서울특별시 강남구 삼성동 143-6 영창빌딩 4층
                </div>
              </div>
              <div className={css.contactContainer}>
                <div className={css.contactImage}>
                  <IoIosMail size={"1.5rem"} />
                </div>
                <div className={css.contactText}>support@theared.com</div>
              </div>
              <div className={css.contactContainer}>
                <div className={css.contactImage}>
                  <FaPhoneSquare size={"1.5rem"} />
                </div>
                <div className={css.contactText}>02-2028-3720</div>
              </div>
            </div>
          </div> */}
        </div>
        <div className={maincss.flexWrapper3} />
      </div>
    );
  }
}

export default Contact;
