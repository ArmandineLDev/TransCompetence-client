import React from 'react';
import Footer from '../components/Footer';
import SalesHistory from '../components/SalesHistory';
import SalesHeader from '../components/SalesHeader';

const SalesHistoryPage = () => {
  return (
    <div>
      <SalesHeader />
      <div className="MainBack">
        <div className="MainBloc">
          <SalesHistory />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SalesHistoryPage;