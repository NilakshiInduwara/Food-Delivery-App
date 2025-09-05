import foodImage from "../assets/images/Food-home.jpeg";

const Home = () => {
  return (
    <div className="remove-sidebar flex items-center justify-center">
      <div className="hidden md:block">
        <section className="relative w-[700px] lg:w-[1007px] h-[400px] lg:h-[539px]">
          <img src={foodImage} alt="food" className="w-[700px] lg:w-[1007px] h-[400px] lg:h-[539px]"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-15">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-4">Because your cravings are real!</h1>
          </div>
        </section>
      </div>
    </div>

  )
}

export default Home