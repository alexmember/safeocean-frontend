import React from 'react';
import '../App.css';
import { Grid, Typography, Box } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';
import infomercial from '../assets/video/infomercial.mp4'

class Guide extends React.Component {
   
    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid">
                    <Grid item xs={12} sm={6} md={6}>
                        <Box style={{textAlign:"left", width:"100%", padding:"5%", marginBottom:"5%", backgroundColor:"#292e38", borderRadius:"5px"}}>
                            <Typography style={{fontSize:"16px", fontFamily:"TypoRoundBold", color:"#2dce89"}}>WhiteBit.com and BitMart.com is now open for trading!</Typography>
                        </Box>
                        <Box style={{textAlign:"left", width:"100%", paddingBottom:"2%", marginBottom:"2%"}}>
                            <Typography style={{fontSize:"24px", fontFamily:"TypoRoundBold", color:"white"}}>How to Buy Safeocean</Typography>
                            <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"#2dce89"}}>PancakeSwap Instructions</Typography>
                        </Box>
                        <ol style={{color:"white", textAlign:"left", fontSize:"16px"}}>
                            <li>Download the app, <a href="https://trustwallet.com/deeplink/" style={{color:"#00a79d"}}>Trust Wallet</a></li>
                            <li>Purchase <span style={{backgroundColor:"#00a79d", borderRadius:"6px", padding:".25rem .275rem", fontSize:"66%"}}>BNB</span> or <span style={{backgroundColor:"#00a79d", borderRadius:"6px", padding:".25rem .275rem", fontSize:"66%"}}>BSC</span></li>
                            <li>Go to the DApps tab at the bottom, and find PancakeSwap. Iphone users may need to enable the trust browser, then use the browser tab. You can also click the <span style={{backgroundColor:"#00a79d", borderRadius:"6px", padding:".25rem .275rem", fontSize:"66%"}}>BUY NOW</span> button on our website if you're not on mobile.</li>
                            <li><p><span>Click "<span style={{color:"#00a79d"}}>Select a currency</span>" and enter this contract address into the search field, and you should be able to find SafeOcean.</span></p>
                                <p style={{textAlign:"center", width:"100%", backgroundColor:"#00a79d", borderRadius:"6px", padding:".25rem .275rem"}}>0x57649aa771fe04c98005717918e05348a3d7d008</p>
                            </li>
                            <li>Before swapping, click on the cog wheel <span><svg style={{width:"3%"}} className="svg-inline--fa fa-cog fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg></span> and set the slippage to between 11-12%</li>
                            <li>Now, set the amount you want to purchase and press the <span style={{color:"#00a79d"}}>swap</span> button.</li>
                            <li>Confirm the transaction and...</li>
                        </ol>
                        <Box style={{textAlign:"center", width:"100%", paddingBottom:"2%", marginBottom:"2%"}}>
                            <Typography style={{fontSize:"26px", fontWeight:"900", fontFamily:"opensans", color:"#00a79d"}}>HODL!</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box style={{textAlign:"left", width:"100%", paddingBottom:"2%", marginBottom:"2%"}}>
                            <Typography style={{fontSize:"26px", fontFamily:"TypoRoundBold", color:"white"}}>Like Informercials?</Typography>
                            <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"white"}}>Yep, we got one of those too.</Typography>
                        </Box>
                        <video width="100%" controls>
                            <source src={infomercial} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <Box style={{textAlign:"left", width:"100%", paddingBottom:"2%", marginTop:"7%", marginBottom:"2%"}}>
                            <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"white"}}>Alternatively, here's some useful guides created by our community members</Typography>
                        </Box>
                        <div style={{width:"100%", marginBottom:"200px"}}>
                            <div style={{float:"left", width:"49%", marginRight:"2%"}}>
                                <iframe title="KxXOvBrvVpw" width="100%" src="https://www.youtube.com/embed/KxXOvBrvVpw?rel=0" allowFullScreen=""/>
                            </div>
                            <div style={{float:"left", width:"49%"}}>
                                <iframe title="ulWAFU7Klns" width="100%" src="https://www.youtube.com/embed/ulWAFU7Klns?rel=0" allowFullScreen=""/>
                            </div>
                        </div>
                        <Box style={{textAlign:"left", width:"100%", paddingBottom:"2%"}}>
                            <Typography style={{fontSize:"16px", fontFamily:"opensans", color:"white"}}>Credit to <a href="https://www.reddit.com/user/7everin/" target="blank" style={{color:"#00a79d"}}>u/7everin</a> on our reddit for the layout. &lt;3</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Guide;
