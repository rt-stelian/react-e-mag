import Footer from "components/Footer/Footer"
import Header from "../components/Header/Header"
import MainTag from "components/SemanticComponents/MainTag"
import MainBanner from "components/MainBanner/MainBanner"
import CategoriesCards from "components/categoriesCards/CategoriesCards"
import NewArrivals from "components/newArrivals/NewArrivals"

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MainTag>
        <MainBanner />
        <CategoriesCards />
        <NewArrivals />
      </MainTag>
      <Footer />
    </div>
  )
}

export default Home
