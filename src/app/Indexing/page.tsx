
import Header from '../Component/Header';
import CompanyInfo from '../Component/CompanyInfo';
import Navigation from '../Component/Navigation';
import Indexing from '../Component/Indexing';
import Footer from '../Component/Footer';
function Issues() {
  return (
    <div className="bg-white">
    <CompanyInfo/>
    <Header/>
    <div className= "flex flex-row">
    <div className="md:w-1/6"></div>
    <div className="md:w-4/6">
    <Indexing/>
    </div>
    <div className="md:w-1/6"></div>
    </div>
    <Footer/>
   </div>
  )
}
export default Issues;