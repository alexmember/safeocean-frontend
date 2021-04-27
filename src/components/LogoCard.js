import React from 'react';
import '../App.css';

var cardStyle = {
    width: "100%",
    background: "rgb(41,46,56)",
    height: "100%",
    borderRadius:"10px",
    marginBottom:"5%"
};

class LogoCard extends React.Component {

  render() {
    let { logoImg, imgType, imgSize, widthPixel } = this.props;

    return(
      <div style={cardStyle}>
        <img src={logoImg} alt="logoImg" style={{width:widthPixel, margin:"auto", marginTop:"10%"}}/>
        <div style={{color:"white", fontSize:"16px", marginTop:"10%", paddingTop:"5%", borderTop:"1px solid rgba(0,0,0,.05)"}}>
          <p style={{marginBottom:"0%"}}>{imgType}</p>
          <p style={{width:"80%", margin:"auto"}}>{imgSize}</p>
        </div>
      </div>
    );
  }
}

export default LogoCard;