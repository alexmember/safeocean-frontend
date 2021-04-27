import React from 'react';
import '../App.css';
import { Grid, Typography, Box } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';

const termsH1 = {
    fontSize:"27px",
    color:"#00a79d",
    marginBottom:"9px",
}
const termsH2 = {
    fontSize:"22px",
    color:"#00a79d",
    marginBottom:"12px",
}
const termsSentence = {
    fontSize:"16px",
    color:"#efefef",
    marginBottom:"15px",
}

class Terms extends React.Component {
   
    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid">
                    <Box style={{textAlign:"left", width:"100%", paddingBottom:"2%", marginBottom:"2%"}}>
                        <Typography style={termsH1}>Terms and Conditions</Typography>
                        <Typography style={termsSentence}>Last updated: March 23, 2021</Typography>
                        <Typography style={termsSentence}>Please read these terms and conditions carefully before using Our Service.</Typography>
                        <Typography style={termsH1}>Interpretation and Definitions</Typography>
                        <Typography style={termsH2}>Interpretation</Typography>
                        <Typography style={termsSentence}>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Typography>
                        <Typography style={termsH2}>Definitions</Typography>
                        <Typography style={termsSentence}>For the purposes of these Terms and Conditions:</Typography>
                        <Typography style={termsSentence}>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Typography>
                        <Typography style={termsSentence}>Country refers to: Utah, United States.</Typography>
                        <Typography style={termsSentence}>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SafeOcean LLC, 364 N 500 E Provo, UT 84606.</Typography>
                        <Typography style={termsSentence}>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</Typography>
                        <Typography style={termsSentence}>Service refers to the Website.</Typography>
                        <Typography style={termsSentence}>Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.</Typography>
                        <Typography style={termsSentence}>Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</Typography>
                        <Typography style={termsSentence}>Website refers to SafeOcean, accessible from https://safeocean.net</Typography>
                        <Typography style={termsSentence}>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Typography>
                    </Box>
                </Grid>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Terms;
