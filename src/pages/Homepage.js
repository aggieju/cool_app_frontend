import { useEffect } from "react";
//import { Title } from "../styled"
//import { Link } from "react-router-dom"
//import { LinkWord } from "../styled"
//import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux";
import { fetchSpaces } from "../store/space/thunks"
import { selectSpace } from "../store/space/selectors";
import { useNavigate } from "react-router-dom";


export const Homepage = () => {

  const dispatch = useDispatch();
  const postSpace = useSelector(selectSpace);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);



  return (
    <div>
      <h2>Spaces</h2>
      {!postSpace
        ? ("Loading"
        ) : <div>
          {postSpace.map((space) => {
            return (
              <div key={space.id}
                style={{
                  color: `${space.color}`,
                  backgroundColor: `${space.backgroundColor}`,
                }}>
                <p>Space title: {space.title}</p>
                <p>Description {space.description}</p>
                <button onClick={() => navigate(`${space.id}`)}>Space details</button>
              </div>
            );
          })}

        </div>

      }

    </div>
  );




}

export default Homepage;