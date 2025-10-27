import { Link } from "react-router-dom"

function AllDetails() {
  return (
    <div className="remove-sidebar remove-navbar">
      <section className="py-20 px-4 lg:px-0 grid grid-cols-2 gap-8 mt-8">
        <div className="container flex flex-col md:flex-row ml-[10rem] items-center">
          <Link
            to="/admin/users"
            className="flex justify-center bg-orange-500 bg-opacity-70 p-8"
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-center text-black">
              Get User Details
            </h2>
          </Link>
        </div>
        <div className="container flex flex-col md:flex-row items-center">
          <Link
            to="/offers"
            className="flex justify-center bg-orange-500 bg-opacity-70 p-8"
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-center text-black">
              Get Restaurant Details
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AllDetails