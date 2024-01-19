import React from 'react';
import Layout from '@/components/Layout';
import NavOne from '@/components/NavOne';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';


const ContactPage = () => {
    return (
        <Layout pageTitle="Mission 500 | Contact Us">
            <NavOne />
            <PageHeader title="Contact Us" />
            <Contact />
            {/* <Map /> */}
            <Footer />
        </Layout>
    );
};

export default ContactPage;
