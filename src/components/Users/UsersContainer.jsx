import React from 'react';
import { connect } from 'react-redux';
import {follow, 
        unfollow, 
        setCurrentPage, 
        toggleFollowingProgress,
        getUsers,
        toggleIsFetchnig
      } 
from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api';
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
}
onpageChanged= (pageNumber) =>{
  this.props.getUsers(pageNumber,);
  this.props.setCurrentPage(pageNumber);
  this.props.toggleIsFetchnig();
  usersAPI.getUsers(pageNumber, this.props.pageSize)
  .then(()=>{
    this.props.toggleIsFetchnig()
    
  });
}
render(){
  return <>
  {this.props.isFetching?<Preloader/>:null} 
        <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onpageChanged={this.onpageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
         </>
     }
}


let mapStateToProps=(state)=>{
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, 
     {follow,  unfollow, setCurrentPage,   
       toggleFollowingProgress, getUsers, toggleIsFetchnig}))(UsersContainer);

