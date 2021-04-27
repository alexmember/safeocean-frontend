import React from 'react';
import '../App.css';
import { Grid, Typography } from '@material-ui/core';
import StepCard from '../components/StepCard';
import spaceman from '../assets/img/spaceman.png';
import shippingfast from '../assets/img/shipping-fast.svg';
import exchangealt from '../assets/img/exchange-alt.svg';
import handshake from '../assets/img/handshake.svg';
import rocketlaunch from '../assets/img/rocket-launch.svg';

class RoadMap extends React.Component {
   
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} style={{display:"flex", justifyContent:"center", marginTop:"5%"}}>
                        <img src={spaceman} style={{width:"100%", margin:"auto", display:"block"}} alt="Spaceman"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{marginTop:"3%"}}>
                        <Typography style={{fontSize:"26px", fontFamily:"TypoRoundBold", color:"white", textAlign:"left", marginBottom:"3%"}}>Road Map</Typography>
                        <StepCard
                            stepImg={shippingfast}
                            stepTag="Q1 2021" 
                            bodyTitle="Protocol Initialized"
                            bodyComment="We have successfully onboarded and confirmed a DogeCoin trading pair with Bibipom. We have also successfully begun integration process with WhiteBit [Imminent] and began legal paperwork with Bitmart. Our team size has doubled and our marketing campaign has begun."
                        />
                        <StepCard
                            stepImg={exchangealt}
                            stepTag="Q2 2021" 
                            bodyTitle="The Initial Push"
                            bodyComment="The Whitebit tokenomics integration will be completed along with the completion of the SafeOcean App, Wallet, and Game(s). The Bitmart integration with tokenomics will also be completed in this quarter. We will begin architecting the NFT Exchange as well as video-game integrations. We will be integrating SafeOcean with African Markets in addition to setting up a Charity drive and charity vote. We will be exploring other exchanges (i.e. Binance) and begin architecting the SafeOcean Exchange. We will be expanding the team by 35% and establish a UK/Ireland office. We will be architecting a crypto educational app as well as onboarding new partners."
                        />
                        <StepCard
                            stepImg={handshake}
                            stepTag="Q3 2021" 
                            bodyTitle="Holding the Line"
                            bodyComment="We will finish our crypto educational app and begin our own charity project. We will begin a community listing donation raise for several exchanges (i.e. Coinbase, Binance, Kraken). We will finish our NFT exchange and release our first video game with SafeOcean integrated. We will be expanding the team by 25% and do a community meetup (pending covid restrictions). We will also be integrating with other large exchanges (I.e. Binance, Mandala)."
                        />
                        <StepCard
                            stepImg={rocketlaunch}
                            stepTag="Q4 2021" 
                            bodyTitle="To the Ocean!"
                            bodyComment="We will finish the SafeOcean Exchange and our charity project. We will finish integrations with our first African market and begin the next integrations with additional African markets. We will create an African based SafeOcean Office and begin hiring in those markets to create jobs. We will be taking donations for our next charity project and begin a vote on the next project as well. We will be establishing a SafeOcean Scholarship in this quarter as well."
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
  
export default RoadMap;
