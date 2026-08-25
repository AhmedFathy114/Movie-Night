import {
  FaStar,
  FaTv,
  FaUsers,
} from "react-icons/fa";

import {
  MdMovieFilter,
  MdOutlineExplore,
  MdSupportAgent,
} from "react-icons/md";

export const stats = [
    { value: "1M+", label: "Movies & TV Shows" },
    { value: "500K+", label: "Actors & Crew" },
    { value: "20+", label: "Genre Categories" },
    { value: "100%", label: "Free to Use" },
  ];

  export const features = [
    {
      icon: MdMovieFilter,
      title: "Vast Movie Library",
      desc: "Explore thousands of films across every genre, era, and language — all powered by the TMDB database.",
    },
    {
      icon: FaTv,
      title: "TV Shows & Series",
      desc: "Dive deep into TV shows with full season breakdowns, episode guides, and cast details.",
    },
    {
      icon: FaStar,
      title: "Ratings & Reviews",
      desc: "See community ratings and aggregate scores to decide what's worth your time.",
    },
    {
      icon: FaUsers,
      title: "Actor Profiles",
      desc: "Discover full filmographies and biographies for any actor with a single click.",
    },
    {
      icon: MdOutlineExplore,
      title: "Smart Discovery",
      desc: "Genre-based categories, trending feeds, and curated lists help you always find something great.",
    },
    {
      icon: MdSupportAgent,
      title: "Night Guide AI",
      desc: "Get personalized movie & TV recommendations powered by our built-in AI assistant.",
    },
  ];