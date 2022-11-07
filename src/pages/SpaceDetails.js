import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpacesId } from "../store/space/thunks"
import { selectSpace } from "../store/space/selectors";

export const SpaceDetails = () => {

    const dispatch = useDispatch();
    const postSpace = useSelector(selectSpace);
    const { id } = useParams();
    console.log("id", id);

    useEffect(() => {
        dispatch(fetchSpacesId(id));
    }, [dispatch, id]);



    return (
        <div>
            <h2>Space details</h2>


        </div>
    );




}

export default SpaceDetails;