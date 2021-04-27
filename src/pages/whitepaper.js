import React from 'react';
import '../App.css';
import { Grid, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import effect from '../assets/img/effect.png';
import burn from '../assets/img/burn.svg';
import balanceScale from '../assets/img/balance-scale.svg';
import lockAlt from '../assets/img/lock-alt.svg';
import coins from '../assets/img/coins.svg';
import LogoCard from '../components/LogoCard';
import supplyprice from '../assets/img/supply-price.png';
import tokenomics from '../assets/img/tokenomics.png';
import RoadMap from '../components/RoadMap';

const paperH1 = {
    fontSize:"27px",
    color:"#00a79d",
    marginBottom:"7px",
}
const paperH2 = {
    fontSize:"22px",
    color:"#00a79d",
    marginBottom:"9px",
}
const paperSentence = {
    fontSize:"16px",
    color:"#efefef",
    marginBottom:"11px",
}

class Whitepaper extends React.Component {
   
    render() {
        return (
            <div style={{backgroundColor:"#1F232B"}}>
                <Header></Header>
                <Grid container spacing={3} className="dashboardGrid">
                    <Grid item xs={12} sm={12} md={12} style={{textAlign:"left"}}>
                        <Typography style={paperH1}>SafeOcean Protocol</Typography>
                        <Typography style={paperSentence}>Static Rewards, LP Acquisition, Manual Burn</Typography>
                        <Typography style={paperSentence}>A common misconception with the heavy APY average is the subjectivity of the impermanent loss from staking an LP (liquidity provider) in a farming reward generator. With the explosion of DeFi we have seen too many new cryptocurrency prospectors get sucked into a high APY LP-farming trap, feeling hopeless as they are pushed out by earlier buyers with higher staking rewards. We’ve all been there, seeing those shiny 6 digit figures can be pretty damn tempting to jump in. However, almost always the token suffers from the inevitable valuation bubble, which is then followed by the burst and the impending collapse of the price. This Is why we have seen the mass adoption of static rewards, also known as reflection, a separate concept that seeks to eliminate the troubles caused by farming rewards.</Typography>
                        <Typography style={paperH2}>Why Static?</Typography>
                        <Typography style={paperSentence}>Static rewards solve a host of problems. First, the reward amount is conditional upon the volume of the token being traded. This mechanism aims to alleviate some of the downward sell pressure put on the token caused by earlier adopters selling their tokens after farming crazy high APY’s. Second, the reflect mechanism encourages holders to hang onto their tokens to garner higher kick-backs which are based upon a percentages carried out and dependant upon the total tokens held by the owner.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} style={{display:"flex", justify:"center"}}>
                        <img src={supplyprice} alt="supply-price" style={{width:"100%", margin:"auto"}}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} style={{textAlign:"left"}}>
                        <Typography style={paperH2}>Manual Burns</Typography>
                        <Typography style={paperSentence}>Sometimes burns matter; sometimes they don’t. A continuous burn on any one protocol can be nice in the early days, however, this means the burn cannot be finite or controlled in any way. Having burns controlled by the team and promoted based on achievements helps to keep the community rewarded and informed. The conditions of the manual burn and the amounts can be advertised and tracked. SafeOcean aims to implement a burn strategy that is beneficial and rewarding for those engaged for the long term. Furthermore, the total number of SAFEOCEAN burned is featured on our readout located on the website which allows for further transparency in identifying the current circulating supply at any given point of time.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{textAlign:"left"}}>
                        <Typography style={paperH2}>Automatic Liquidity Pool (LP)</Typography>
                        <Typography style={paperSentence}>Automatic LP is the secret sauce of SAFEOCEAN. Here we have a function that acts as a two-fold beneficial implementation for holders. First, the contract sucks up tokens from sellers and buyers alike, and adds them to the LP creating a solid price floor. Second, the penalty acts as an arbitrage resistant mechanism that secures the volume of SAFEOCEAN as a reward for the holders. In theory, the added LP creates a stability from the supplied LP by adding the tax to the overall liquidity of the token, thus increasing the tokens overall LP and supporting the price floor of the token. This is different from the burn function of other reflection tokens which is only beneficial in the short term from the granted reduction of supply. As the SAFEOCEAN token LP increases, the price stability mirrors this function with the benefit of a solid price floor and cushion for holders. The goal here is to prevent the larger dips when whales decide to sell their tokens later in the game, which keeps the price from fluctuating as much as if there was no automatic LP function. All of this is an effort to alleviate some of the troubles we have seen with the current DeFi reflection tokens. We are confident that this model and protocol will prevail over the outdated reflection tokens for these reasons</Typography>
                        <Typography style={{fontSize:"20px", color:"#00a79d", textAlign:"center", marginTop:"3%"}}>Tokenomics</Typography>
                        <img src={tokenomics} alt="supply-price"/>
                        <Typography style={{fontSize:"16px", color:"#8898aa"}}>Total Supply: 1,000,000,000,000,000</Typography>
                        <Typography style={{fontSize:"16px", color:"#8898aa"}}>Burned Dev Tokens: 223,000,000,000,000</Typography>
                        <Typography style={{fontSize:"16px", color:"#8898aa", marginBottom:"2%"}}>Fair Launch Supply: 777,000,000,000,000</Typography>
                        <Typography style={paperH2}>SafeOcean Protocol</Typography>
                        <Typography style={paperSentence}>SafeOcean employs 3 simple functions: Reflection + LP acquisition + Burn In each trade, the transaction is taxed a 10% fee, which is split 2 ways.</Typography>
                        <Typography style={paperSentence}>
                            <ul>
                                <li>5% fee = redistributed to all existing holders</li>
                                <li>5% fee is split 50/50 half of which is sold by the contract into BNB, while the other half of the SAFEOCEAN tokens are paired automatically with the previously mentioned BNB and added as a liquidity pair on Pancake Swap.</li>
                            </ul>
                        </Typography>
                        <Typography style={paperH2}>Safety</Typography>
                        <Typography style={paperSentence}>Step by step plan to ensure 100% safety.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <LogoCard 
                            widthPixel="50px"
                            imgType="Step 1" 
                            imgSize="Dev burned all tokens in Dev Wallet prior to launch"
                            logoImg={burn}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <LogoCard 
                            widthPixel="80px"
                            imgType="Step 2" 
                            imgSize="Fair launch on DxSale"
                            logoImg={balanceScale}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <LogoCard 
                            widthPixel="50px"
                            imgType="Step 3" 
                            imgSize="LP locked on DxLocker for 4 years"
                            logoImg={lockAlt}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <LogoCard 
                            widthPixel="50px"
                            imgType="Step 4" 
                            imgSize="LP generated with every trade and locked on Pancake"
                            logoImg={coins}
                        />
                    </Grid>
                    <RoadMap/>
                </Grid>
                <Footer></Footer>
                <img src={effect} alt="effect" className="homeEffect"/>
            </div>
        )
    }
}
  
export default Whitepaper;
