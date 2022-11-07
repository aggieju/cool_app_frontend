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
            {!postSpace.stories
                ? ("Loading"
                ) : <div >
                    {postSpace.stories.map((story) => {
                        return (
                            <div key={story.id} style={{
                                color: `${postSpace.color}`,
                                backgroundColor: `${postSpace.backgroundColor}`,
                            }}>
                                <p>Story name {story.name}</p>
                                <p>Story content {story.content}</p>
                                <p>Story image ({story.imageUrl})</p>
                            </div>
                        );
                    })}

                </div>

            }

        </div>
    );




}

export default SpaceDetails;