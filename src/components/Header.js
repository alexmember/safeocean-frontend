import React from 'react'
import '../App.css';
import { Grid, Typography, Button } from '@material-ui/core';
import logo from '../assets/img/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import facebook from '../assets/img/facebook-f.svg';
import twitter from '../assets/img/twitter.svg';
import instagram from '../assets/img/instagram.svg';
import reddit from '../assets/img/reddit.svg';
import tme from '../assets/img/t.me.svg';
import discord from '../assets/img/discord.svg';
import twitch from '../assets/img/twitch.svg';
import logoAnim from '../assets/img/LogoAnim.gif';
import backgroundImg from '../assets/img/background.png';
import OceanStats from './OceanStats';

var rootStyle = {
  width: "100%",
  backgroundImage: `url(${backgroundImg})`,
  height: "100%",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

class Header extends React.Component {

  render() {
  
    return(
      <div style={rootStyle}>
        <div style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
          <Grid container className="headerInitial">
            <Grid item lg={8} md={8} sm={12} xs={12} className="text-lg-left" style={{margin: "auto"}}>
              <p style={{fontSize: "14px", color: "#525f7f", margin: "auto"}}>THE OFFICIAL HOME OF SAFEOCEAN</p>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Grid container>
                <Grid item lg={1} md={1} sm={1} xs={1} style={{padding:"1%"}}>
                  <a title="facebook" className="aLink" href="https://facebook.com/safeoceanprotocol" target="blank"><img style={{height:"20px"}} src={facebook} alt="facebook"/></a>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"1%"}}>
                  <a title="Twitter" className="aLink" href="https://twitter.com/safeocean" target="blank"><img style={{height:"20px"}} src={twitter} alt="twitter"/></a>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1} style={{padding:"1%"}}>
                  <a title="Instagram" className="aLink" href="https://www.instagram.com/SafeoceanOfficial/" target="blank"><img style={{height:"20px"}} src={instagram} alt="instagram"/></a>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"1%"}}>
                  <a title="Reddit" className="aLink" href="https://www.reddit.com/r/SafeOcean/" target="blank"><img style={{height:"20px"}} src={reddit} alt="reddit"/></a>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1} style={{padding:"1%"}}>
                  <a title="Telegram" className="aLink" href="https://t.me/safeoceanv2" target="blank"><img style={{height:"20px"}} src={tme} alt="t.me"/></a>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"1%"}}>
                  <a title="Discord" className="aLink" href="https://discord.gg/safeocean" target="blank"><img style={{height:"20px"}} src={discord} alt="discord"/></a>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1} style={{padding:"1%"}}>
                  <a title="Twitch" className="aLink" href="/twitch"><img style={{height:"20px"}} src={twitch} alt="twitch"/></a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Navbar expand="lg" className="header">
            <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{width:"30px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="https://shop.safeocean.net/" target="blank">Merch</Nav.Link>
                <Nav.Link href="/whitepaper">White Paper</Nav.Link>
                <Nav.Link href="/guide">How to buy</Nav.Link>
                <Nav.Link href="https://github.com/safeoceanprotocol/Safeocean.sol" target="blank">Safeocean Contract</Nav.Link>
                <Nav.Link href="/team">Our team</Nav.Link>
                <Button className="loginBtn" target="blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x57649aa771fe04c98005717918e05348a3d7d008">Buy Now</Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <img src={logoAnim} alt="LogoAnim" width="150" style={{marginTop:"7%"}}/>
        <Typography style={{fontSize:"40px", fontFamily:"TypoRoundBold", color:"#fff"}}>SafeOcean Protocol</Typography>
        <Typography style={{fontSize:"26px", fontFamily:"TypoRoundBold", color:"#fff"}}>Safely to the Ocean</Typography>
        <OceanStats/>
      </div>
    );
  }
}

export default Header;

