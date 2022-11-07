import axios from "axios";
import { postSpace } from "./slice";
import { apiUrl } from "../../../src/config/constants";


export const fetchSpaces = () => async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}`);
    //   console.log("response spaces", response.data);
    dispatch(postSpace(response.data));
};

export const fetchSpacesId = (id) => async (dispatch, getState) => {
    const responseId = await axios.get(`${apiUrl}/${id}`);
    console.log("response spaces id", responseId.data);
    dispatch(postSpace(responseId.data));
};