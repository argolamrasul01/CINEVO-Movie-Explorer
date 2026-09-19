import { CalendarDays, Star, X } from "lucide-react";
export default function MovieCard({ movie }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-300 hover:scale-105 transition-transform duration-300">
      <figure>
        <img
          src={movie.image?.original}
          alt={movie.name}
          className="w-full h-72 object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{movie.name}</h2>

        <p>Release: {movie.premiered}</p>

        <p className="flex gap-2">
          <Star className="text-green-500 fill-amber-400" />
          {movie.rating?.average || "N/A"}
        </p>

        <div className="card-actions justify-end">
          {/* Modal */}

          <button
            className="btn bg-accent text-white hover:bg-accent-focus"
            onClick={() =>
              document.getElementById(`my_modal_${movie.id}`).showModal()
            }
          >
            See Details
          </button>
          <dialog id={`my_modal_${movie.id}`} className="modal">
            <div className="modal-box">
              <form className="flex justify-end" method="dialog">
                <button className="btn bg-amber-400 mb-2.5">
                  <X />
                </button>
              </form>
              <img
                src={movie.image?.original}
                alt={movie.name}
                className="w-full h-72 object-cover"
              />
              <p className="py-4">
                <p className="font-bold text-xl">{movie.name}</p>
                <p className="flex gap-2 mt-2">
                  <Star className="text-green-500 w-5 fill-amber-400" /> Rating
                  : {movie.rating?.average || "N/A"} |{" "}
                  <CalendarDays className="w-5" /> Release: {movie.premiered}
                </p>
                <p className="text-justify mt-3">
                  <span className="font-bold">Overview:</span>{" "}
                  {movie.summary.replace(/<[^>]*>/g, "")}
                </p>
                <p span className="mt-3">
                  <span className="font-bold">Language:</span> {movie.language}
                </p>
              </p>
              <div className="modal-action mt-0">
                <form method="dialog">
                  <button className="btn">
                    <X /> Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
