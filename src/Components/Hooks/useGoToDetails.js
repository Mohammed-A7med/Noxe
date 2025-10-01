import { useNavigate } from "react-router-dom";

export function useGoToDetails() {
  const navigate = useNavigate();

  function goToDetails(id, mediaType) {
    navigate({
      pathname: "details",
      search: `?id=${id}&mediaType=${mediaType}`,
    });
  }

  return { goToDetails };
}
