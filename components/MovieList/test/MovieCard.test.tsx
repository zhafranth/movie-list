import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MovieCard from "../MovieCard";
import dayjs from "dayjs";
import { CircularProgress } from "@heroui/react";
import { MovieItem } from "@/network/interface";

describe("MovieCard Component", () => {
  const mockData: MovieItem = {
    adult: false,
    backdrop_path: "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
    genre_ids: [28, 878, 35, 10751],
    id: 939243,
    original_language: "en",
    original_title: "Sonic the Hedgehog 3",
    overview:
      "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
    popularity: 5790.376,
    poster_path: "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
    release_date: "2024-12-19",
    title: "Sonic the Hedgehog 3",
    video: false,
    vote_average: 7.9,
    vote_count: 1132,
  };

  it("renders the component correctly", () => {
    render(<MovieCard data={mockData} />);

    // Title rendering
    expect(screen.getByText(mockData.title)).toBeInTheDocument();

    // Release date formatting
    expect(
      screen.getByText(dayjs(mockData.release_date).format("MMM DD, YYYY"))
    ).toBeInTheDocument();
  });

  it("renders link with correct href", () => {
    render(<MovieCard data={mockData} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/movie/${mockData.id}`);
  });
});
