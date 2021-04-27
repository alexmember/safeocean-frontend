import React from 'react';
import '../App.css';

var cardStyle = {
    width: "100%",
    background: "rgb(41,46,56)",
    height: "100%",
    borderRadius:"10px",
};

class LogoCard extends React.Component {

  render() {
    let { logoImg, imgType, imgSize, widthPixel } = this.props;

    return(
      <div style={cardStyle} className="cardEase">
        <img src={logoImg} alt="logoImg" style={{width:widthPixel, height:"100px", margin:"auto", marginTop:"10%"}}/>
        <div style={{color:"white", marginTop:"10%", marginBottom:"10%"}}>
          <p style={{fontSize:"20px", color:"#00a79d", marginBottom:"2%"}}>{imgType}</p>
          <p style={{width:"90%", fontSize:"16px", margin:"auto", color:"rgba(255,255,255,.5)"}}>{imgSize}</p>
        </div>
      </div>
    );
  }
}

export default LogoCard;