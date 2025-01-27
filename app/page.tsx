import HomeMovie from "@/components/HomeMovie";
import MovieList from "@/components/MovieList";
import TopRatedList from "@/components/TopRatedList";

export default function Home() {
  return (
    <main className="max-h-screen overflow-hidden">
      <div className="flex gap-x-8">
        <div className="flex gap-x-10">
          <TopRatedList />
        </div>
        <div className="flex flex-1 flex-col gap-y-4">
          <HomeMovie />
          <MovieList />
        </div>
      </div>
    </main>
  );
}
