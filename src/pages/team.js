import React from 'react';
import '../App.css';
import { Grid, Typography, Box } from '@material-ui/core';
import TeamCard from '../components/TeamCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';
import dicecapt from '../assets/img/capt.jpg'
import dicethomas from '../assets/img/thomas.jpg'
import diceteam from '../assets/img/team-placeholder.png'
import dicehank from '../assets/img/hank.jpg'
import diceragnar from '../assets/img/ragnar.jpg'
import dicefox from '../assets/img/fox.jpg'

class Team extends React.Component {
   
    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid">
                    <Box style={{textAlign:"left", width:"100%", borderBottom: "1px solid rgba(0,0,0,.1)", paddingBottom:"2%", marginBottom:"2%"}}>
                        <Typography style={{fontSize:"26px", fontFamily:"TypoRoundBold", color:"white"}}>OUR MAIN TEAM</Typography>
                        <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"white"}}>Meet the devs and staff members behind SafeOcean that'll take it to the ocean!</Typography>
                    </Box>
                    <Grid item xs={12} sm={6} md={3}>
                        <TeamCard 
                            cardType="Core team" 
                            bodyTitle="John (Capt Hodl) Karony"
                            bodyComment="Virginia, US"
                            backColor="#f5365c"
                            diceImg={dicecapt}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TeamCard 
                            cardType="Core team" 
                            bodyTitle="Thomas (Papa) Smith"
                            bodyComment="New Hampshire, US"
                            backColor="#f5365c"
                            diceImg={dicethomas}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TeamCard 
                            cardType="Core team" 
                            bodyTitle="SafeoceanDev"
                            bodyComment="Unknown"
                            backColor="#f5365c"
                            diceImg={diceteam}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TeamCard 
                            cardType="Core team" 
                            bodyTitle="Henry (Hank) Wyatt"
                            bodyComment="Pennsylvania, US"
                            backColor="#f5365c"
                            diceImg={dicehank}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TeamCard 
                            cardType="Core team" 
                            bodyTitle="Trevor (Ragnar) Church"
                            bodyComment="Greater Seattle Area"
                            backColor="#f5365c"
                            diceImg={diceragnar}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TeamCard 
                            cardType="WEBSITE DEV" 
                            bodyTitle="Jacob (King Fox)"
                            bodyComment="Texas, US"
                            backColor="#fb6340"
                            diceImg={dicefox}
                        />
                    </Grid>
                </Grid>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Team;
