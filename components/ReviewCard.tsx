import { AiFillStar } from "react-icons/ai";
import { FcOk } from "react-icons/fc";

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date?: string;
}

const ReviewCard = ({ name, rating, review, date }: ReviewCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="flex mb-4 text-yellow-500">
        {Array.from({ length: rating }).map((_, idx) => (
          <AiFillStar key={idx} />
        ))}
      </div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="flex items-center justify-center gap-4 font-bold">
          {name} <FcOk size={20} />
        </h4>
      </div>
      <p className="text-gray-600">{review}</p>
      <p className="mt-2 text-sm text-gray-400">Posted on {date}</p>
    </div>
  );
};

export default ReviewCard;
