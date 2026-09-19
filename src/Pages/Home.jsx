import Movies from "../assets/Movies.jpg";
import { Link } from "react-router";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Movies})` }}
    >
      <div className="w-full min-h-screen bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="text-center font-extrabold text-5xl">DISCOVER MOVIES</h1>

        <p className="text-center font-light mt-4">
          Explore and discover your favorite movies from around the world.
        </p>

        <Link to="/movies" className="btn btn-primary mt-6">
          Explore Now
        </Link>
      </div>
    </div>
  );
}
