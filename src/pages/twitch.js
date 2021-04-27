import React from 'react';
import '../App.css';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';

const twitchH1 = {
    fontSize:"27px",
    color:"#efefef",
    marginBottom:"9px",
}
const twitchSentence = {
    fontSize:"16px",
    color:"#efefef",
    marginBottom:"15px",
}

class Twitch extends React.Component {
   
    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid">
                    <Grid item xs={12} sm={12} md={9}>
                        <Box style={{textAlign:"left", width:"100%"}}>
                            <Typography style={twitchH1}>Twitch Livestream</Typography>
                            <Typography style={twitchSentence}>View our twitch livestream to get in on the latest news, AMA's, and gaming!</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} style={{margin:"auto"}}>
                        <Button href="https://twitch.tv/safemoonprotocol" style={{width:"100%", backgroundColor:"#5e72e4", borderColor:"#5e72e4", color:"white", padding:"5%", margin:"1%"}}>Follow Us on Twitch</Button>
                    </Grid>
                </Grid>
                <div style={{height:"500px"}}></div>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Twitch;
