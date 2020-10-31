import React, { Component } from "react";
import MiniDesc from "./MiniDesc";
import MiniHead from "./MiniHead";

export class MostPopular extends Component {
  render() {
    return (
      <div className="most-popular-main-div">
        <MiniHead
          heading={"MOST POPULAR"}
          headStyle={{ borderBottom: "none" }}
        />

        <div className="most-popular-button">
          <a>shared</a>
          <a>commented</a>
          <a>read</a>
          <a style={{ borderRight: "none" }}>tranding</a>
        </div>
        <MiniDesc
          description={
            " Bigg Boss 14: Salman Khan slams Rahul Vaidya for his nepotism remark; asks 'agar mere father mere liye kuch karte hain toh kya woh nepotism hoga'"
          }
        />
        <MiniDesc
          description={
            " Bigg Boss 14: Salman Khan slams Rahul Vaidya for his nepotism remark; asks 'agar mere father mere liye kuch karte hain toh kya woh nepotism hoga'"
          }
        />
        <MiniDesc
          description={
            " Bigg Boss 14: Salman Khan slams Rahul Vaidya for his nepotism remark; asks 'agar mere father mere liye kuch karte hain toh kya woh nepotism hoga'"
          }
          MiniDescStyle={{ borderBottom: "none" }}
        />

        <div className="most-popular-see-all">
          <div></div>
          <a>see all most shared stories</a>
          <div></div>
        </div>
      </div>
    );
  }
}

export default MostPopular;
