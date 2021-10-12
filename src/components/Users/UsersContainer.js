import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, toggleIsFollowingProgress, getUsers} from "../../redux/usersPage-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber); // выделение странички, на которую нажала
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render(){
        return (
        <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}
                            followingInProgress={this.props.followingInProgress}
                    />
        </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        
    }
}

export default compose(
    connect(mapStateToProps,{follow, unfollow,setCurrentPage,toggleIsFollowingProgress, getUsers}),
    // withAuthRedirect - можно просто здесь написать, и тогда страница будет защишена тоже
)(UsersContainer)
