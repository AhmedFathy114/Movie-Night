import { useQuery } from "@tanstack/react-query";
import { searchAlooy } from "@/services/Alooy/Alooy";

function getSearchTitles(title: string) {
  const titles = [title.trim()];

  // fallback: remove "فيلم" from the beginning
  const withoutFilm = title.replace(/^فيلم\s+/u, "").trim();

  if (withoutFilm && withoutFilm !== title.trim()) {
    titles.push(withoutFilm);
  }

  return titles;
}

export function useAlooySearch(title?: string) {
  const searchTitles = title ? getSearchTitles(title) : [];

  const { data: alooySearch, isLoading: isAlooyLoading } = useQuery({
    queryKey: ["alooy-search", title],
    queryFn: async () => {
      // First search with the exact Arabic TMDB title
      const firstResult = await searchAlooy(searchTitles[0]);

      if (firstResult?.result?.length > 0) {
        return firstResult;
      }

      // Fallback without "فيلم"
      if (searchTitles[1]) {
        return searchAlooy(searchTitles[1]);
      }

      return firstResult;
    },
    enabled: !!title,
  });

  return {
    alooySearch,
    isAlooyLoading,
  };
}
