import React from 'react';
import Link from 'next/link';

const MixerAreaTwo = () => {
    return (
        <section className="mixer-area mixer-area3 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading mixer-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title text__white">“The future we steer, our water be clear, together we'll have nothing to fear.”
                            </h2>
                            <Link href="/donate"><p className="theme-btn">Join us</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MixerAreaTwo;
