import React from 'react';

const Map = () => {
    return (
        <div className=''>
            <section className="map-area">
                <div id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8915645243064!2d73.78409211489364!3d18.57892678737499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9873ecc4a51%3A0x6c17205140fe2d1e!2sRevDau%20Industries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1689584619289!5m2!1sen!2sin" className="map" allowFullScreen="" loading="lazy" width="600" height="450" style={{ border: '0' }}>
                    </iframe>

                </div>
            </section>

            <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
