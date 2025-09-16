import foodImage from "../assets/images/Food-home.jpeg";
import restaurantImage from "../assets/images/Restaurant.jpeg";
import favoritesImage from "../assets/images/Favorites.jpg";
import offersImage from "../assets/images/Offers.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="remove-sidebar remove-navbar flex items-center justify-center">
      <div className="hidden md:block mt-4">
        <section className="relative w-[700px] lg:w-[1007px] h-[400px] lg:h-[539px]">
          <img src={foodImage} alt="food" className="w-[700px] lg:w-[1007px] h-[400px] lg:h-[539px] object-cover object-center rounded-2xl"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-15 rounded-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center">Because your cravings are real!</h1>
          </div>
        </section>

        <section className="py-20 px-4 lg:px-0 grid grid-cols-2 gap-8">
          <div className="container mx-auto mb-10 flex flex-col md:flex-row">
            <div className="relative flex-1">
              <img src={offersImage} alt="Offers" className="w-full h-[300px] object-cover object-center rounded-2xl" />
              <Link to="/offers" className="absolute bottom-20 flex justify-center bg-white bg-opacity-70 p-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-center">Today's Offers</h2>
              </Link>
            </div>            
          </div>

          <div className="container mx-auto mb-10 flex flex-col md:flex-row">
            <div className="relative flex-1">
              <img src={restaurantImage} alt="Restaurant" className="w-full h-[300px] object-cover object-center rounded-2xl" />
              <Link to="/" className="absolute bottom-20 flex justify-center bg-white bg-opacity-70 p-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-center">Popular Restaurants</h2>
              </Link>
            </div>            
          </div>
          
          <div className="container mx-auto mb-10 flex flex-col md:flex-row">
            <div className="relative flex-1">
              <img src={favoritesImage} alt="Favorites" className="w-full h-[300px] object-cover object-center rounded-2xl" />
              <Link to="/" className="absolute bottom-20 flex justify-center bg-white bg-opacity-70 p-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-center">Your Favorites</h2>
              </Link>
            </div>            
          </div>
        </section>
      </div>
    </div>

  )
}

export default Home