import React from 'react';
import '../App.css';

class StepCard extends React.Component {

  render() {
    let { stepImg, stepTag, bodyTitle, bodyComment } = this.props;

    return(
      <div className="timeline-block">
        <span className="timeline-step">
          <img src={stepImg} alt="stepImg"/>
        </span>
        <div className="timeline-content">
          <div className="timeline-tag">
              {stepTag}
          </div>
          <p style={{fontSize:"16px", color:"white", marginBottom:"1%", marginTop:"3%"}}>{bodyTitle}</p>
          <p style={{fontSize:"14px", color:"#ced4da", marginBottom:"2%"}}>{bodyComment}</p>
        </div>
      </div>
    );
  }
}

export default StepCard;