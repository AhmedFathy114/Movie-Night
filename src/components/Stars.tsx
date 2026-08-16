import { Star } from "lucide-react";

function Stars({ vote_average , size = 17}: { vote_average: number , size : number}) {
  const rating = vote_average / 2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="ms-1 flex items-center">
      {Array.from({ length: 5 }, (_, i) => {
        if (i < fullStars) {
          return (
            <Star
              key={i}
              size={size}
              className="fill-yellow-500 text-yellow-500"
            />
          );
        }

        if (i === fullStars && hasHalfStar) {
          return (
            <span key={i} className="relative inline-block">
              
              <Star size={size} className="text-neutral-500" />

              <span className="absolute inset-0 w-1/2 overflow-hidden">
                <Star
                  size={size}
                  className="fill-yellow-500 text-yellow-500"
                />
              </span>
            </span>
          );
        }

        return (
          <Star
            key={i}
            size={size}
            className="text-neutral-500"
          />
        );
      })}
    </div>
  );
}

export default Stars;