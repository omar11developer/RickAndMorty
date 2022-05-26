import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import imgCover from '../utils/portada.png';
import '../styles/Cover.css';
export const Cover = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row cover">
          <div className="col-lg-6">
            <div className="cover-info">
              <h1 >Rick and Morty</h1>
              <span >It's a netflix series</span>
              <p>After being missing for nearly 20 years, Rick Sanchez shows up at his daughter Beth's doorstep and moves in with her and her family, using the garage as his personal laboratory.</p>
             
              <Link className="btn btn-outline-success" to={'#'}>See characters</Link>
            </div>
          </div>
          <div className="col-lg-6 cover-img">
            <img
              className="cover-img img-fluid"
              src={imgCover}
              alt="Ryck and Morty"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cover;
