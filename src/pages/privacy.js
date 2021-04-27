import React from 'react';
import '../App.css';
import { Grid, Typography, Box } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';

const privacyH1 = {
    fontSize:"27px",
    color:"#8898aa",
    marginBottom:"9px",
}
const privacyH2 = {
    fontSize:"22px",
    color:"white",
    marginBottom:"12px",
}
const privacySentence = {
    fontSize:"16px",
    color:"#efefef",
    marginBottom:"15px",
}

class Privacy extends React.Component {
   
    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid">
                    <Box style={{textAlign:"left", width:"100%"}}>
                        <Typography style={privacyH1}>Privacy Policy</Typography>
                        <Typography style={privacySentence}>Last Updated: March 27, 2021 3:48am CST</Typography>
                        <Typography style={privacySentence}>We Safeocean (safeocean.net), are committed to protecting any data that we collect concerning you. By using our services you agree to the use of the data that we collect in accordance with this Privacy Policy.</Typography>
                        <Typography style={privacySentence}>We are committed to protecting your privacy.</Typography>
                        <Typography style={privacySentence}>We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information ("PI", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.</Typography>
                        <Typography style={privacyH2}>Information Collected</Typography>
                        <Typography style={privacySentence}>We may collect any or all of the information that via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred . When transferring personal information a security icon will appear in your browser.</Typography>
                        <Typography style={privacyH2}>Infortmation Use</Typography>
                        <Typography style={privacySentence}>This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. RunePay may email its monthly newsletter to the primary contact e-mail on file, but customers are able to opt out of this newsletter at any time.</Typography>
                        <Typography style={privacySentence}>We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications.</Typography>
                        <Typography style={privacyH1}>Cookies</Typography>
                        <Typography style={privacySentence}>Your Internet browser has the in-built facility for storing small text files - "cookies" - that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and provide personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the Safeocean website. More information about cookies can be found at <a style={{color:"#00a79d"}} href="https://en.wikipedia.org/wiki/HTTP_cookie">https://en.wikipedia.org/wiki/HTTP_cookie</a>.</Typography>
                    </Box>
                </Grid>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Privacy;
