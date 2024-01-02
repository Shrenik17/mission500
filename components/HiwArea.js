import Link from 'next/link';
import React from 'react';

const HiwArea = () => {
    return (
      <section className="hiw-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="hiw-item">
                <div>
                  <figure>
                    <img
                      src="/images/Home image 01.jpg"
                      style={{ marginTop: "-81px", height: "645px" }}
                      width={380}
                      alt=""
                    />
                    {/* <h3 className="hiw-title">Save water live better</h3> */}
                    {/* <div className="hiw-btn-box">
                                        <Link href="#" className="theme-btn">read more</Link>
                                    </div> */}
                  </figure>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="hiw-item">
                <div>
                  <figure>
                    <img
                      src="/images/Home image 02.jpg"
                      width={380}
                      height={492}
                      alt=""
                    />
                    {/* <h3 className="hiw-title">Think before you let it drip.</h3> */}
                    {/* <div className="hiw-btn-box">
                                        <Link href="#" className="theme-btn">read more</Link>
                                    </div> */}
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h4
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
              }}
            >
              <a
                href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mission 500 is working towards the fulfilment of Sustainable
                Development Goals (SDGs) which were adopted by the United
                Nations in the year 2015, providing a blueprint to achieve a
                better and more sustainable future for all.
              </a>
            </h4>
            <br />
            <br />
          </div>
        </div>
      </section>
    );  
};

export default HiwArea;
