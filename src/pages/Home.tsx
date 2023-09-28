import Footer from "components/Footer/Footer"
import Header from "../components/Header/Header"
import MainTag from "components/SemanticComponents/MainTag"
import MainBanner from "components/MainBanner/MainBanner"

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MainTag>
        <MainBanner />
      </MainTag>
      <Footer />
    </div>
  )
}

export default Home
