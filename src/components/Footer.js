import React from 'react';
import '../App.css';
import { Grid } from '@material-ui/core';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import instagram from '../assets/img/instagram.svg';
import reddit from '../assets/img/reddit.svg';
import tme from '../assets/img/t.me.svg';
import discord from '../assets/img/discord.svg';

class Footer extends React.Component {

  render() {

    return(
      <div className="footer">
        <Grid container className="footerContainer">
          <Grid item lg={6} md={6} sm={12} xs={12} className="footerMain">
            <h1>SafeOcean Protocol</h1>
            <p>The SafeOcean Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn.</p>
          </Grid>
          <Grid item lg={1} md={1} sm={12} xs={12}/>
          <Grid item lg={5} md={5} sm={12} xs={12} className="footerSocial">
            <Grid container >
              <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"5%"}}>
                <a className="aLink" href="https://facebook.com/safeoceanprotocol" target="blank"><img src={facebook} alt="facebook"/></a>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"5%"}}>
                <a className="aLink" href="https://twitter.com/safeocean" target="blank"><img src={twitter} alt="twitter"/></a>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"5%"}}>
                <a className="aLink" href="https://www.instagram.com/SafeoceanOfficial/" target="blank"><img src={instagram} alt="instagram"/></a>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"5%"}}>
                <a className="aLink" href="https://www.reddit.com/r/SafeOcean/" target="blank"><img src={reddit} alt="reddit"/></a>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"5%"}}>
                <a className="aLink" href="https://t.me/safeoceanv2" target="blank"><img src={tme} alt="t.me"/></a>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={2} style={{padding:"5%"}}>
                <a className="aLink" href="https://discord.gg/safeocean" target="blank"><img src={discord} alt="discord"/></a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12} className="footerCopyright text-lg-left">
            <p>© 2021 <span>SafeOcean</span> | All Rights Reserved.</p>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Grid container >
              <Grid item lg={2} md={3} sm={2} xs={12} style={{paddingTop:"5%"}}><a className="footer-menu-li" href="/branding">Branding</a></Grid>
              <Grid item lg={2} md={3} sm={2} xs={12} style={{paddingTop:"5%"}}><a className="footer-menu-li" href="/whitepaper">Whitepaper</a></Grid>
              <Grid item lg={3} md={4} sm={3} xs={12} style={{paddingTop:"5%"}}><a className="footer-menu-li" href="/guide">How to Buy</a></Grid>
              <Grid item lg={3} md={4} sm={3} xs={12} style={{paddingTop:"5%"}}><a className="footer-menu-li" href="/terms">Terms of Service</a></Grid>
              <Grid item lg={2} md={3} sm={2} xs={12} style={{paddingTop:"5%"}}><a className="footer-menu-li" href="/privacy">Privacy</a></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;