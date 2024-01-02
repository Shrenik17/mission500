import Link from "next/link";
import React from "react";

const NewsContent = () => {
  return (
    <div className="">
      <div className="col-md-12">
        <div class="card mt-4">
          <div class="card-header">
            <ul
              class="nav nav-tabs nav-tabs-neutral justify-content-start shadow p-3 mb-5 bg-body rounded"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active tabs_list"
                  data-toggle="tab"
                  href="#2023"
                  role="tab"
                >
                  Year 2022
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link tabs_list"
                  data-toggle="tab"
                  href="#2022"
                  role="tab"
                >
                  {" "}
                  Year 2021
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content text-center">
              <div class="tab-pane active" id="2023" role="tabpanel">
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Link href="https://www.newindianexpress.com/good-news/2022/feb/13/barren-hamlet-to-land-bristling-with-life-2418728.html">
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src="./images/news1.png"
                        class="card-img-top"
                        alt="..."
                        style={{ width: "250px", height: "150px" }}
                      ></img>
                      <div class="card-body">
                        <h5>Barren hamlet to land bristling with life</h5>
                        <p style={{ padding: "5px 0px" }}>
                          {" "}
                          IRS officer’s initiative & efforts of villagers turn
                          region hit by drought into zone with sufficient
                          rainwater storage
                        </p>
                        <p style={{ padding: "5px 0px" }}>
                          Participents : Dr. Ujjwalkumar Chavhan – IRS
                        </p>
                        {/* <a href="https://www.facebook.com/1226814592/posts/10228332773244243/?extid=0&d=n">
                          {" "}
                          Link
                        </a> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="tab-pane" id="2022" role="tabpanel">
                <Link href="https://www.thebetterindia.com/247424/irs-hero-ujjwal-chavan-income-tax-commissioner-water-conservation-dhamangaon-maharashtra-farmers-jalyukt-shivar-abhiyan-agriculture-gop94/">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src="/images/news4.png
                      "
                      class="card-img-top"
                      alt="..."
                      style={{ width: "250px", height: "150px" }}
                    ></img>
                    <div class="card-body">
                      <h5> Saves Cr's Litres</h5>
                      <p style={{ padding: "5px 0px" }}>
                        IRS Officer Saves 102 Cr Litres of Water, Makes 16
                        Villages Drought-Free in 3 Years
                      </p>
                      <p style={{ padding: "5px 0px" }}>
                        Participents : Dr. Ujjwalkumar Chavhan – IRS
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
