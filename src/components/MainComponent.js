import React, { Component } from 'react';
import Home from './HomeComponent';
import Content from './ContentComponent';
import Editorial from './EditorialComponent';
import Benefits from './BenefitsComponent';
import About from './AboutComponent';
import Infreaders from './InfreadersComponent';
import Infreviewers from './InfreviewersComponent';
import Infauthors from './InfauthorsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = dispatch => ({
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const HomePage = () => {
      return(
          <Home
              news={this.props.news}
          />
      );
    }


    return (
      <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/content' component={Content} />
            <Route path='/editorial' component={Editorial} />
            <Route path='/benefits' component={Benefits} />
            <Route path='/infreaders' component={Infreaders} />
            <Route path='/infreviewers' component={Infreviewers} />
            <Route path='/infauthors' component={Infauthors} />
            <Route path='/aboutus' component={About} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
