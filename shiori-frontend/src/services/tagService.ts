import API from "./api";

export const getTagSuggestions = async (keyword: string) => {
  const res = await API.get("/tags/suggestions", {
    params: { keyword },
  });

  return res.data.tags;
};