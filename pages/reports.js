import React from 'react';
import Layout from '@/components/Layout';
import NavOne from '@/components/NavOne';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import ReportTable from '@/components/ReportTable';


const ReportPage = () => {
    return (
        <Layout pageTitle="Mission 500 | Reports">
            <NavOne />
            <PageHeader title="Reports" />
          <ReportTable/>
            <Footer />
        </Layout>
    );
};

export default ReportPage;
