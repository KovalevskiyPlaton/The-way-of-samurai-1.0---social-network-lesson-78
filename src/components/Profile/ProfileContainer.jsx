import React from 'react'
import Profile from './Profile';
import {connect} from 'react-redux';
import { withRouter } from './WithRouter.jsx';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer'
import {compose} from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component  {
    
    componentDidMount(){
         let userId = this.props.router.params.userId
         if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
        
        
    }
        
    render(){
        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
       
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
    
     
 )(ProfileContainer)  
