import { axiosReq } from "../api/axiosDefaults";
import axios from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

export const removeItem = async (removable, currentResource) => {
  try {
    await axios.delete(`/comments/${removable?.id}`);
    const index = currentResource.results.indexOf(removable);
    if (index > -1) {
      currentResource.results.splice(index, 1);
    }
    return currentResource;
  } catch (err) {}
};
