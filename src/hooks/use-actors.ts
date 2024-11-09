import { fetchTMDBData } from "@/lib/tmdb";
import { useQuery } from "@tanstack/react-query";

export const useActor = (id: string) => {
  return useQuery({
    queryKey: ["actor", id],
    queryFn: () => fetchTMDBData(`/person/${id}`),
  });
};
