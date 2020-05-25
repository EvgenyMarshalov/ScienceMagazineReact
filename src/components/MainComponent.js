import React, { Component } from 'react';
import Home from './HomeComponent';
import Home2 from './HomeComponent2';
import Content from './ContentComponent';
import Editorial from './EditorialComponent';
import Benefits from './BenefitsComponent';
import Infreaders from './InfreadersComponent';
import Infreviewers from './InfreviewersComponent';
import Infauthors from './InfauthorsComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    news: state.news
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  this.props.fetchDishes();
}

  render() {
    const HomePage = () => {
      return(
          <Home
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const HomePage2 = () => {
      return(
          <Home2
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
              news={this.props.news}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
          />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/home2' component={HomePage2} />
            <Route path='/content' component={Content} />
            <Route path='/editorial' component={Editorial} />
            <Route path='/benefits' component={Benefits} />
            <Route path='/infreaders' component={Infreaders} />
            <Route path='/infreviewers' component={Infreviewers} />
            <Route path='/infauthors' component={Infauthors} />
            <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
