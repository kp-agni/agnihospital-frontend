import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
// import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AboutHospital from './components/aboutus/About_hospital'; // Import the AboutHospital component
import Navbar from './components/Navbar';
import Contact_us from './components/contactus/Contact_us';
import About_doctor from './components/aboutus/About_doctor';
import Dr_Dharmik from './components/aboutus/Dr_Dharmik';
import Dr_Rushi from './components/aboutus/Dr_Rushi';
import Dr_Darshan from './components/aboutus/Dr_Darshan';
import Basic_panchkarma from './components/panchkarma/Basic_panchkarma';
import For_pain from './components/panchkarma/For_pain';
import For_stress from './components/panchkarma/For_stress';
import For_weight from './components/panchkarma/For_weight';
import A_Z_panchkarma from './components/panchkarma/A_Z_panchkarma';
import TreatmentDetail from "./components/TreatmentDetail"; // Create this component for detailed pages
import MobileNavbar from './components/MobileNavbar';
import Facilities from "./components/Facilities"; 
import Gallary from "./components/Gallary"; 
import Daigestive from "./components/Treatment/Digestive"; 
import DigestiveDetail from "./components/Treatment/DigestiveDetail";
import JointDisorder from "./components/Treatment/JointDisorder"; 
import JointDetails from "./components/Treatment/JointDetails";
import SkinHairDisorder from "./components/Treatment/SkinHairDisorder";
import SkinHairDetails from "./components/Treatment/SkinHairDetails";  
import FemaleDisorder from "./components/Treatment/FemaleDisorder"; 
import FemaleDetails from "./components/Treatment/FemaleDetails";  
import LifestyleDisorder from './components/Treatment/LifestyleDisorder';
import LifestyleDetails from './components/Treatment/LifestyleDetails';
import AnorectalDisorder from './components/Treatment/AnoRectalDisorder';
import AnoRectalDetails from './components/Treatment/AnoRectalDetails';
import RespiratoryDisorders from './components/Treatment/RespiratoryDisorders';
import RespiratoryDetails from './components/Treatment/RespiratoryDetails';
import EntDisorder from './components/Treatment/EntDisorder';
import EntDetails from './components/Treatment/EntDetails';
import KidneyDisorder from './components/Treatment/KidneyDisorder';
import KidneyDetails from './components/Treatment/KidneyDetails';
import LiverDisorder from './components/Treatment/LiverDisorder';
import LiverDetails from './components/Treatment/LiverDetails';
import MaleDisorder from './components/Treatment/MaleDisorder';
import MaleDetails from './components/Treatment/MaleDetails';
import PsycatricDisorder from './components/Treatment/PsycatricDisorder';
import PsycatricDetails from './components/Treatment/PsycatricDetails';
import PediatricsDisorder from './components/Treatment/PediatricsDisorder';
import PediatricsDetails from './components/Treatment/PediatricsDetails';
import Testimonials from "./components/Testimonials";
import NadiParikshan from "./components/Treatment/NadiParikshan";
import Suvarnaprashan from "./components/Treatment/Suvarnaprashan";
import Garbhasanskar from "./components/Treatment/Garbhasanskar";


const App = () => {
  return (
    <Router>  {/* Wrap your app with Router to enable routing */}
      <div className='w-full overflow-hidden'>
        <Navbar/>
        <MobileNavbar/>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/about-hospital" element={<AboutHospital />} /> {/* About Hospital page route */}
          <Route path="/contact-us" element={<Contact_us />} /> {/* About Hospital page route */}
          <Route path="/about-doctor" element={<About_doctor />} /> {/* About Doctor page route */}
          <Route path="/dr_dharmik" element={<Dr_Dharmik />} /> {/* About Doctor page route */}
          <Route path="/dr_rushi" element={<Dr_Rushi />} /> {/* About Doctor page route */}
          <Route path="/dr_darshan" element={<Dr_Darshan />} /> {/* About Doctor page route */}
          <Route path="/basic-panchkarma" element={<Basic_panchkarma />} /> {/* Basic Panchkarma page route */}
          <Route path="/panchkarma-pain" element={<For_pain />} /> {/* Pain Panchkarma page route */}
          <Route path="/panchkarma-stress-management" element={<For_stress />} /> {/* Pain Panchkarma page route */}
          <Route path="/panchkarma-weight-loss" element={<For_weight />} /> {/* Pain Panchkarma page route */}
          <Route path="/a-to-z-panchkarma" element={<A_Z_panchkarma />} /> {/* Pain Panchkarma page route */}
          <Route path="/treatments/:treatmentId" element={<TreatmentDetail />} />
          <Route path="/facilities" element={<Facilities />} /> {/* Pain Panchkarma page route */}
          <Route path="/gallary" element={<Gallary />} /> {/* Pain Panchkarma page route */}
          <Route path="/digestive" element={<Daigestive />} /> {/* Digestive Disorder page route */}
          <Route path="/digestive-disorder/:disorderId" element={<DigestiveDetail />} />
          <Route path="/joint-disorder" element={<JointDisorder />} />
          <Route path="/joint-disorder/:disorderId" element={<JointDetails />} /> {/* Dynamic Route */}
          <Route path="/skin&hair-disorder" element={<SkinHairDisorder />} /> {/* skin&hair Disorder page route */}
          <Route path="/skin&hair-disorder/:disorderId" element={<SkinHairDetails />} /> {/* Dynamic Route */}
          <Route path="/female-disorder" element={<FemaleDisorder />} /> {/* Female Disorder page route */}
          <Route path="/female-disorder/:disorderId" element={<FemaleDetails />} /> {/* Dynamic Route */}
          <Route path="/lifestyle-disorder" element={<LifestyleDisorder />} /> {/* lifestyle Disorder page route */}
          <Route path="/lifestyle-disorder/:disorderId" element={<LifestyleDetails />} /> {/* Dynamic Route */}
          <Route path="/ano-rectal-disorder" element={<AnorectalDisorder/>}/> {/* Ano Ractal Disorder page route */}
          <Route path="/ano-rectal-disorder/:disorderId" element={<AnoRectalDetails />} /> {/* Dynamic Route */}
          <Route path="/respiratory-disorder" element={<RespiratoryDisorders/>}/> {/* Ano Ractal Disorder page route */}
          <Route path="/respiratory-disorder/:disorderId" element={<RespiratoryDetails />} /> {/* Dynamic Route */}
          <Route path="/ent-disorder" element={<EntDisorder/>}/> {/* ENT Disorder page route */}
          <Route path="/ent-disorder/:disorderId" element={<EntDetails />} /> {/* Dynamic Route */}
          <Route path="/kidney-disorder" element={<KidneyDisorder/>}/> {/* ENT Disorder page route */}
          <Route path="/kidney-disorder/:disorderId" element={<KidneyDetails />} /> {/* Dynamic Route */}
          <Route path="/liver-disorder" element={<LiverDisorder/>}/> {/* ENT Disorder page route */}
          <Route path="/liver-disorder/:disorderId" element={<LiverDetails />} /> {/* Dynamic Route */}
          <Route path="/male-disorder" element={<MaleDisorder/>}/> {/* ENT Disorder page route */}
          <Route path="/male-disorder/:disorderId" element={<MaleDetails />} /> {/* Dynamic Route */}
          <Route path="/psycatric-disorder" element={<PsycatricDisorder/>}/> {/* ENT Disorder page route */}
          <Route path="/psycatric-disorder/:disorderId" element={<PsycatricDetails />} /> {/* Dynamic Route */}
          <Route path="/pediatrics-disorder" element={<PediatricsDisorder/>}/> {/* ENT Disorder page route */}
          <Route path="/pediatrics-disorder/:disorderId" element={<PediatricsDetails />} /> {/* Dynamic Route */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/treatment/nadi-parikshan" element={<NadiParikshan />} />
          <Route path="/treatment/suvarnaprashan" element={<Suvarnaprashan />} />
          <Route path="/treatment/garbhasanskar" element={<Garbhasanskar />} />

          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
