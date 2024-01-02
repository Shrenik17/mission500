import React from 'react';

const HelpingArea = () => {
    return (
        <div>
            <section className="mixer-area helping-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading mixer-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Give a helping hand for saving water</h2>
                            </div>
                            <div className="helping-item">
                                <div className="row">
                                    <div className="col">
                                        <div className="helping-box helping-box1">
                                            <i className="fa fa-handshake-o"></i>
                                            <h4>Together</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box2">
                                            <i className="icon-water-bottle"></i>
                                            <h4>Water</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box3">
                                            <i className="fa fa-tint"></i>
                                            <h4>Save</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-text-box">
                                <p className="helping__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, tortor ac rhoncus vehicula, nulla dui gravida ex, vitae vehicula odio magna in nibh. Nullam feugiat ac nisl eu interdum. Etiam scelerisque mauris at ornare elementum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mixer-area2 helping-area2">
                <div className="container">
                    <div className="row fun-content-wrap">
                        <div className="col-lg-6">
                            <div className="fun-content">
                                <div className="fun-item fun-item1">
                                    <img src="/images/helping-img.jpeg" width={500} height={219} alt="" />
                                </div>
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src="/images/section-icon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">Saving water activities are taking place around the
                                        world</h2>
                                    <p className="section__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, tortor ac rhoncus vehicula, nulla dui gravida ex, vitae vehicula odio magna in nibh.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-form">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src="/images/section-icon.png" alt="section-icon" />
                                    </div>
                                    <h3 className="section__title text__white">Contact Us</h3>
                                    <p className="section__meta text__white">join us now</p>
                                </div>
                                <div className="form-shared">
                                    <form action="#">
                                        <div className="row">
                                            {/* <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                        placeholder="Insert Custom Value" />
                                                </div>
                                            </div> */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control"
                                                        placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="textarea" name="message"
                                                        placeholder="Leave a comment"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="theme-btn submit__btn">Submit form</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpingArea;