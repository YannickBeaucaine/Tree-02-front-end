import React from 'react';
import AuthProvider from './components/context/AuthProvider';
//Bootstrap Components
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/CustomNavbar';


function App() {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
