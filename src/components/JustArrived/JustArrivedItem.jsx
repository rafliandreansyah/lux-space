import RecommnedationLabel from "./RecommendationLabel";
import RecommendationCard from "./RecommnedationCard";

export default function JustArrivedItem() {
  return (
    <div className="flex flex-col gap-8">
      <RecommendationCard />
      <RecommnedationLabel />
    </div>
  );
}
