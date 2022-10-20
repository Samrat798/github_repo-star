import {
  REPOS_LIST_FAIL,
  REPOS_LIST_REQUEST,
  REPOS_LIST_SUCCESS,
} from "./constants";
import axios from "axios";

export const action = (page) => async (dispatch) => {
  try {
    console.log(
      `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`
    );
    dispatch({ type: REPOS_LIST_REQUEST });

    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`
    );
    dispatch({ type: REPOS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REPOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
