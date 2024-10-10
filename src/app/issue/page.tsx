import React from 'react'
import Header from '../Component/Header';
import CompanyInfo from '../Component/CompanyInfo';
import Navigation from '../Component/Navigation';
import Issue from '../Component/Issue';
import Footer from '../Component/Footer';

const page = () => {
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <Issue/>
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
}

export default page
