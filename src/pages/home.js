import React from 'react';
import '../App.css';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';
import bitmartsmall from '../assets/img/bitmart-small.png';
import merchtransparent from '../assets/img/merch-transparent.png';
import coinmarket from '../assets/img/coinmarket.png';
import bscscanlogo from '../assets/img/BscScan-logo.png';
import discordlogo from '../assets/img/discord-logo.png';
import child from '../assets/img/child.svg';
import waterlower from '../assets/img/water-lower.svg';
import handholdingusd from '../assets/img/hand-holding-usd.svg';
import HomeCard from '../components/HomeCard';
import RoadMap from '../components/RoadMap';

class Home extends React.Component {

    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Box style={{textAlign:"left", width:"100%", padding:"2%", backgroundColor:"#292e38"}}>
                    <Grid container style={{width:"70%", margin:"auto"}}>
                        <Grid item xs={2} sm={2} md={1} style={{margin:"auto"}}>
                            <img src={bitmartsmall} style={{width:"80%"}} alt="Bitmart"/>
                        </Grid>
                        <Grid item xs={10} sm={10} md={8} style={{margin:"auto"}}>
                            <Typography style={{fontSize:"26px", fontFamily:"TypoRoundBold", color:"#00A79D"}}>We've Launched on BitMart!</Typography>
                            <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"rgba(255,255,255,.5)"}}>We've officially been listed on BitMart!</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} style={{margin:"auto"}}>
                            <Button href="https://bitmart.com/" style={{width:"100%", backgroundColor:"#2dce89", borderColor:"#2dce89", color:"white", padding:"5%", margin:"1%"}}>Visit BitMart<svg style={{width:"12px"}} className="svg-inline--fa fa-external-link-alt fa-w-16 fa-fw ml-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288ZM500,0H364a12,12,0,0,0-8.48,20.48l48.19,48.21L131.51,340.89a12,12,0,0,0,0,17l22.63,22.63a12,12,0,0,0,17,0l272.2-272.21,48.21,48.2A12,12,0,0,0,512,148V12A12,12,0,0,0,500,0Z"></path></svg></Button>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={3} className="dashboardGrid" justify="center">
                    <Grid item xs={12} sm={12} md={4}>
                        <HomeCard 
                            widthPixel="60px"
                            imgType="100% Community Driven" 
                            imgSize="Community driven & fair launch. Dev burned all team tokens and participated in the fair launch with everyone else."
                            logoImg={child}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <HomeCard 
                            widthPixel="60px"
                            imgType="100% Community Driven" 
                            imgSize="Community driven & fair launch. Dev burned all team tokens and participated in the fair launch with everyone else."
                            logoImg={waterlower}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <HomeCard 
                            widthPixel="60px"
                            imgType="100% Community Driven" 
                            imgSize="Community driven & fair launch. Dev burned all team tokens and participated in the fair launch with everyone else."
                            logoImg={handholdingusd}
                        />
                    </Grid>
                    <RoadMap/>                    
                    <Grid item xs={12} sm={12} md={12} style={{marginBottom:"5%"}}>
                        <a href="https://shop.safeocean.net/" target="blank">
                            <img src={merchtransparent} width="100%" alt="Merch"/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                        <a href="https://coinmarketcap.com/currencies/safeocean/" target="blank">
                            <img src={coinmarket} width="100%" alt="coinmarket"/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3}>
                        <a href="https://bscscan.com/token/0x57649aa771fe04c98005717918e05348a3d7d008" target="blank">
                            <img src={bscscanlogo} width="100%" alt="bscscan"/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}/>
                    <Box style={{textAlign:"left", width:"100%", padding:"5%", backgroundColor:"#292e38", marginTop:"7%"}}>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} style={{margin:"auto"}}>
                                <img src={discordlogo} style={{width:"90%"}} alt="discord"/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={8} style={{margin:"auto"}}>
                                <Typography style={{fontSize:"26px", fontFamily:"TypoRoundBold", color:"#00A79D"}}>We've launched a Discord Bot!</Typography>
                                <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"rgba(255,255,255,.5)"}}>You can now add our SafeOcean Bot to your own Discord server!</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <Button href="https://discord.com/oauth2/authorize?client_id=827403996272132096&scope=bot&permissions=511041" style={{width:"100%", backgroundColor:"#2dce89", borderColor:"#2dce89", color:"white", padding:"5%", margin:"1%"}}>Add To Discord<svg style={{width:"12px"}} className="svg-inline--fa fa-external-link-alt fa-w-16 fa-fw ml-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288ZM500,0H364a12,12,0,0,0-8.48,20.48l48.19,48.21L131.51,340.89a12,12,0,0,0,0,17l22.63,22.63a12,12,0,0,0,17,0l272.2-272.21,48.21,48.2A12,12,0,0,0,512,148V12A12,12,0,0,0,500,0Z"></path></svg></Button>
                                <Button href="https://github.com/Safeocean-Protocol/Discord-Bot" style={{width:"100%", backgroundColor:"#2dce89", borderColor:"#2dce89", color:"white", padding:"5%", margin:"1%"}}>View The Github<svg style={{width:"12px"}} className="svg-inline--fa fa-external-link-alt fa-w-16 fa-fw ml-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288ZM500,0H364a12,12,0,0,0-8.48,20.48l48.19,48.21L131.51,340.89a12,12,0,0,0,0,17l22.63,22.63a12,12,0,0,0,17,0l272.2-272.21,48.21,48.2A12,12,0,0,0,512,148V12A12,12,0,0,0,500,0Z"></path></svg></Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Home;
