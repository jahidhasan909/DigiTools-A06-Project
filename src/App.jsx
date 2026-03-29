
import './App.css'
import Banner from './Components/Banner'
import CardSection from './Components/CardSection'
import MiddleCountBanner from './Components/MiddleCountBanner'
import Navbar from './Components/Navbar'
import PricingCard from './Components/PricingCard'
import ThreeStepCard from './Components/ThreeStepCard'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <MiddleCountBanner></MiddleCountBanner>
      <CardSection></CardSection>
      <ThreeStepCard></ThreeStepCard>
      <PricingCard></PricingCard>
    </>
  )
}

export default App
