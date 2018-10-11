import React from 'react';
import axios from 'axios';
import Profile from './Profile/Profile';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import EditProfile from './EditProfile/EditProfile';
import Articles from './Articles/Articles';
import AddProduct from './AddProduct/AddProduct';
import AddArticle from './AddArticle/AddArticle';
import ChangePassword from './ChangePassword/ChangePassword';
import UserActivation from "./adminPages/UserActivation/UserActivation";
import UsersList from "./adminPages/UsersList/UsersList";
import PaymentConfirmation from "./adminPages/PaymentConfirmation/PaymentConfirmation";

require('./UserPage.scss');

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      innerComponent: 'Profile',
      message: '',
      articleForEdit: null,
      // isSuperAdmin: true
    };
    this.handleChangeInner.bind(this);
  }

  componentDidMount() {
    // axios.get('/user/')
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({user: res.data.user});
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  setArticleState(obj) {
    this.setState(obj);
  }

  handleChangeInner(e, innerName) {
    e.preventDefault();
    this.changeInner(innerName);
  }

  changeInner(innerName) {
    this.setState({innerComponent: innerName});
  }

  goToProfile(e) {
    e.preventDefault();
    this.setState({innerComponent: 'Profile'});
  }

  showMessage(message) {
    this.setState({message: message});
    setTimeout(() => this.setState({message: ''}), 5000);
  }

  render() {

    const firstName = (this.props.user !== null) ? this.props.user.firstName : '';
    const lastName = (this.props.user !== null) ? this.props.user.lastName : '';

    console.log(this.props.user)

    let inner = '';
    switch (this.state.innerComponent) {
      case 'Profile':
        inner = <Profile
          changeInner={this.changeInner.bind(this)}
          user={this.props.user}/>;
        break;
      case 'Products':
        inner = <Products
          changeInner={this.changeInner.bind(this)}
          user={this.props.user}/>;
        break;
      case 'AddProduct':
        inner = <AddProduct
          showSystemMessage={this.props.showSystemMessage}
          changeInner={this.changeInner.bind(this)}
          pageType={'AddProduct'}
        />;
        break;
      case 'EditProduct':
        inner = <AddProduct
          showSystemMessage={this.props.showSystemMessage}
          changeInner={this.changeInner.bind(this)}
          pageType={'EditProduct'}
        />;
        break;
      case 'Orders':
        inner = <Orders/>;
        break;
      case 'EditProfile':
        inner = <EditProfile
          user={this.props.user}
          changeInner={this.changeInner.bind(this)}
          goToProfile={this.goToProfile.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
          updateUser={this.props.updateUser}
        />;
        break;
      case 'ChangePassword':
        inner = <ChangePassword
          user={this.props.user}
          changeInner={this.changeInner.bind(this)}
          goToProfile={this.goToProfile.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
        />;
        break;
      case 'Articles':
        inner = <Articles
          changeInner={this.changeInner.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
          setArticleState={this.setArticleState.bind(this)}
          user={this.props.user}/>;
        break;
      case 'AddArticle':
        inner = <AddArticle
          changeInner={this.changeInner.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
          pageType={'AddArticle'}
        />;
        break;
      case 'EditArticle':
        inner = <AddArticle
          changeInner={this.changeInner.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
          pageType={'EditArticle'}
          setArticleState={this.setArticleState.bind(this)}
          article={this.state.articleForEdit}
        />;
        break;
      case 'UserActivation':
        inner = <UserActivation
          changeInner={this.changeInner.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
        />;
        break;
      case 'UserList':
        inner = <UsersList
          changeInner={this.changeInner.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
        />;
        break;
      case 'PaymentConfirmation':
        inner = <PaymentConfirmation
          changeInner={this.changeInner.bind(this)}
          showSystemMessage={this.props.showSystemMessage}
        />;
        break;
      default :
        inner = <Profile user={this.props.user}/>;
    }

    return (
      <div className={'UserPage'}>
        <div className="imageMain">
          <img className="d-block w-100 imgMain" src="image/back6.jpg" alt="Main image"/>
        </div>
        <h5 className="pt-4 mt-2 ml-5">Hi, {firstName + ' ' + lastName}</h5>
        <div>{this.state.message}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <button className="mt-5  btn-block">
                <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'Profile')} href="">
                  Profile
                </a>
              </button>
              <button className="mt-2  btn-block">
                <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'ChangePassword')} href="">
                  Change password
                </a>
              </button>
              <button className="mt-2  btn-block">
                <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'Orders')} href="">
                  Your Orders
                </a>
              </button>
              <button className="mt-2  btn-block">
                <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'Products')} href="">
                  Your games
                </a>
              </button>
              <button className="mt-2  btn-block">
                <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'Articles')} href="">
                  Your articles
                </a>
              </button>

              {this.props.user.role === 'Administrator' || this.props.user.role === 'SuperUser'
                ? <div>
                  <span><strong>Administration:</strong></span>
                  <button className="mt-2  btn-block">
                    <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'UserActivation')} href="">
                      User activation
                    </a>
                  </button>
                  <button className="mt-2  btn-block">
                    <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'UserList')} href="">
                      User list
                    </a>
                  </button>
                  <button className="mt-2  btn-block">
                    <a className="pr-3 pl-3" onClick={(e) => this.handleChangeInner(e, 'PaymentConfirmation')} href="">
                      Payment confirmation
                    </a>
                  </button>
                </div>
                : ''}

              <button className="mt-2  btn-block">
                <a className="pr-3 pl-3" href="">
                  Logout
                </a>
              </button>
            </div>
            <div className="col-md-8 text-center">
              {inner}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
