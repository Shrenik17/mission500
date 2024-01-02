import Link from 'next/link';
import React from 'react';

const YoutubeCallToAction = () => {
    return (
        <section className="mixer-area mixer-area3 text-center mt-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading mixer-heading">
                            {/* <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div> */}
                            {/* <h2 className="section__title text__white">Our fingerprints on the lives we touch never
                                fade</h2> */}
                            <div className='video-responsive'>
                                <iframe width="853" height="480" src="https://www.youtube.com/embed/X93Y3-f37Fk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <Link href="https://www.youtube.com/@mission500mh/videos" className="theme-btn mt-5" target="_blank">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YoutubeCallToAction;
