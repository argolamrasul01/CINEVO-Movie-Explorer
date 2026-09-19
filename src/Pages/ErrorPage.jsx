import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="col-span-full flex flex-col gap-3.5 justify-center items-center py-20 shadow-2xl min-h-100 mx-9 my-9 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-500 flex gap-2 items-center">
        <Clapperboard /> 404 — Scene Not Found
      </h2>
      <p className="text-yellow-200">
        Looks like this scene was deleted from the movie. Let's get you back to
        the homepage.
      </p>
      <Link to="/" className="btn border-2 border-amber-400 rounded-2xl">
        Home
      </Link>
    </div>
  );
}
