'use client';
import { useState, useEffect } from 'react';
import Footer from './Component/Footer';
import Header from './Component/Header';
import CompanyInfo from './Component/CompanyInfo';
import Navigation from './Component/Navigation';
import About from './Component/About';
import CookiesProvider from './Component/context';

export default function Home() {
  return (
    <CookiesProvider>
   <div className="bg-white">
    <CompanyInfo/>
    <Header/>
    <div className= "flex flex-row">
    <div className="md:w-1/6"></div>
    <div className="md:w-4/6">
    <About/>
    </div>
    <div className="md:w-1/6"></div>
    </div>
    <Footer/>
   </div>
   </CookiesProvider>
  );
}
