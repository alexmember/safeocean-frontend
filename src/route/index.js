import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import Home from '../pages/home';
import Whitepaper from '../pages/whitepaper';
import Guide from '../pages/guide';
import Team from '../pages/team';
import Branding from '../pages/branding';
import Terms from '../pages/terms';
import Privacy from '../pages/privacy';
import Twitch from '../pages/twitch';

const routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={(Home)} />
    <Route exact path="/whitepaper" component={(Whitepaper)} />
    <Route exact path="/guide" component={(Guide)} />
    <Route exact path="/team" component={(Team)} />
    <Route exact path="/branding" component={(Branding)} />
    <Route exact path="/terms" component={(Terms)} />
    <Route exact path="/privacy" component={(Privacy)} />
    <Route exact path="/twitch" component={(Twitch)} />
  </BrowserRouter>
)

export default routes;
