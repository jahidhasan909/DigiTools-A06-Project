
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import CardSection from './Components/CardSection'
import Footer from './Components/Footer'
import MiddleCountBanner from './Components/MiddleCountBanner'
import Navbar from './Components/Navbar'
import PricingCard from './Components/PricingCard'
import ReadySection from './Components/ReadySection'
import ThreeStepCard from './Components/ThreeStepCard'
import { ToastContainer } from 'react-toastify'



const fillterDataFatch = async () => {
  const res = await fetch('/data.json')
  return res.json();
}
function App() {


  const fillterData = fillterDataFatch();
  const [selectCart, setSelectCart] = useState([])

  return (

    <>
      <Navbar selectCart={selectCart}></Navbar>
      <Banner></Banner>
      <MiddleCountBanner></MiddleCountBanner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <CardSection fillterData={fillterData} selectCart={selectCart} setSelectCart={setSelectCart}></CardSection>
      </Suspense>
      <ThreeStepCard></ThreeStepCard>
      <PricingCard></PricingCard>
      <ReadySection></ReadySection>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
