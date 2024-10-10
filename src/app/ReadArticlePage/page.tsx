'use client';
import React from 'react'
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import CompanyInfo from '../Component/CompanyInfo';
import Filter from '../Component/Filter';
import ReadArticle from '../Component/ReadArticle';

const Page = () => {
    return (
        <div className="bg-white overflow-x-hidden">
            <CompanyInfo />
            <Header />
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/6"></div>
                <div className="w-full md:w-4/6">
                    <ReadArticle />
                </div>
                <div className="md:w-1/6"></div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
