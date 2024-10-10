'use client';
import { useState, useEffect } from 'react';
import Footer from '../Component/Footer'
import HomePage from '../Component/HomePage'

export default function Home() {
  return (
   <div className = "min-h-screen">
<HomePage/>
<Footer/>
   </div>
  );
}
