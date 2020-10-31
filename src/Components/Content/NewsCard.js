import React from "react";
import "./Content";

function NewsComp() {
  return (
    <div className="newscomp-main-container">
      <a className='a_img'>
        <img
          src={
            "https://static.toiimg.com/thumb/imgsize-289880,msid-78961663,width-141,resizemode-4/78961663.jpg"
          }
        ></img>
      </a>

      <span style={{ display: "block" }}>
        <a>As Bihar moves into phase-2, Tejashwi puts up tough fight</a>
      </span>
      <span id="desc">
      <p>
        With the first phase of the Bihar polls over, the narrative appears to
        be changing: the RJD-led Mahagathbandhan is putting up a close contest
        defying pre-poll odds. Those who dismissed RJD chief Lalu Prasad’s son
        Tejashwi as no match for chief minister Nitish Kumar till a fortnight
        ago now believe the election is being fought on issues raised by him.
        </p>
      </span>

    </div>
  );
}

export default NewsComp;
