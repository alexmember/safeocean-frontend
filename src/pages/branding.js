import React from 'react';
import '../App.css';
import { Grid, Typography, Box } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';
import logoAnim from '../assets/img/LogoAnim.gif';
import whiteRocket from '../assets/img/WhiteRocket.svg';
import blackRocket from '../assets/img/BlackRocket.svg';
import logo from '../assets/img/logo.png';
import logoWhite from '../assets/img/174x174-white.png';
import teamLogo from '../assets/img/435x257.png';
import teamBlack from '../assets/img/435x257-black.png';
import slim from '../assets/img/519x141.png';
import slimBlack from '../assets/img/519x141-black.png';
import rainbow from '../assets/img/rainbow.png';
import LogoCard from '../components/LogoCard';

class Branding extends React.Component {
   
    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid">                    
                    <Grid item xs={12} sm={12} md={12}>
                        <Box style={{textAlign:"left", width:"100%"}}>
                            <Typography style={{fontSize:"26px", fontFamily:"TypoRoundBold", color:"white"}}>Branding</Typography>
                            <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"#8898aa"}}>Please do not edit, change, distort, recolor, or reconfigure the SafeOcean logo. Adjusting the size is fine as long as the original aspect ratio is maintained. These may be used to promote SafeOcean on your website, social media, and other platforms.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography style={{textAlign:"left", fontSize:"17px", marginTop:"5%", fontFamily:"TypoRoundBold", color:"white"}}>Spaceship Logo</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="150px"
                            imgType="GIF" 
                            imgSize="362 x 362"
                            logoImg={logoAnim}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="150px"
                            imgType="SVG" 
                            imgSize="Scalable"
                            logoImg={whiteRocket}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="150px"
                            imgType="SVG" 
                            imgSize="Scalable"
                            logoImg={blackRocket}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="150px"
                            imgType="PNG" 
                            imgSize="174 x 174"
                            logoImg={logo}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="150px"
                            imgType="PNG" 
                            imgSize="174 x 174"
                            logoImg={logoWhite}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography style={{textAlign:"left", fontSize:"17px", marginTop:"2%", fontFamily:"TypoRoundBold", color:"white"}}>Large Logo</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="300px"
                            imgType="PNG" 
                            imgSize="174 x 174"
                            logoImg={teamLogo}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="300px"
                            imgType="PNG" 
                            imgSize="174 x 174"
                            logoImg={teamBlack}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography style={{textAlign:"left", fontSize:"17px", marginTop:"2%", fontFamily:"TypoRoundBold", color:"white"}}>Slim Logo</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="300px"
                            imgType="PNG" 
                            imgSize="174 x 174"
                            logoImg={slim}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="300px"
                            imgType="PNG" 
                            imgSize="174 x 174"
                            logoImg={slimBlack}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{borderTop:"1px solid rgba(0,0,0,.1)"}}>
                        <Typography style={{textAlign:"left", fontSize:"17px", marginTop:"5%", fontFamily:"TypoRoundBold", color:"white"}}>Variations</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LogoCard 
                            widthPixel="150px"
                            imgType="PNG"
                            imgSize="174 x 174"
                            logoImg={rainbow}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{borderTop:"1px solid rgba(0,0,0,.1)"}}>
                        <Typography style={{textAlign:"left", fontSize:"17px", marginTop:"5%", fontFamily:"TypoRoundBold", color:"white"}}>Our Colors</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box style={{position:"relative", textAlign:"left", width:"100%", height:"100px", marginBottom:"2%", backgroundColor:"#00A79D", borderRadius:"5px"}}>
                            <Typography style={{position:"absolute", fontSize:"16px", color:"white", bottom:"10%", left:"10%"}}>#00A79D</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box style={{position:"relative", textAlign:"left", width:"100%", height:"100px", marginBottom:"2%", backgroundColor:"#25223D", borderRadius:"5px"}}>
                            <Typography style={{position:"absolute", fontSize:"16px", color:"white", bottom:"10%", left:"10%"}}>#25223D</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box style={{position:"relative", textAlign:"left", width:"100%", height:"100px", marginBottom:"2%", backgroundColor:"#FFFFFF", borderRadius:"5px"}}>
                            <Typography style={{position:"absolute", fontSize:"16px", color:"black", bottom:"10%", left:"10%"}}>#FFFFFF</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Branding;
