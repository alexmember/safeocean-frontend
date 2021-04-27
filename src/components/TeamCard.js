import React from 'react';
import '../App.css';
// import discord from '../assets/img/discord.svg';

var cardStyle = {
    width: "100%",
    background: "rgb(41,46,56)",
    height: "100%",
};

class TeamCard extends React.Component {

  render() {
    let { cardType, bodyTitle, bodyComment, backColor, diceImg } = this.props;

    return(
      <div className="playCard" style={cardStyle}>
        <div className="cardHeader">
          <img className="teamImg" src={diceImg} alt="diceImg" style={{width:"100%"}}/>
          <span className="cardType" style={{display: cardType===""? "none": "unset", background: backColor}}>{cardType}</span>
          {/* <span className="contactType"><a title="Discord" className="aLink" href="https://discord.gg/safeocean" target="blank"><img style={{height:"20px"}} src={discord} alt="discord"/></a></span> */}
        </div>
        <div className="cardBody">
            <p>{bodyTitle}</p>
            <span>{bodyComment}</span>
        </div>
      </div>
    );
  }
}

export default TeamCard;