import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { toggleFollowingProgress, requestUsers, setCurrentPage, toggleFollow } from '../../redux/users-reducer'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    }


    render() {
        return <div>

            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                // unfollow={this.props.unfollow}
                toggleFollow={this.props.toggleFollow}
                isFetching={this.props.isFetching} 
                followingProgress={this.props.followingProgress}
                />
        </div>
    }

}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

export default connect(mapStateToProps, {
    toggleFollow, toggleFollowingProgress, setCurrentPage,
    requestUsers,    
})(UsersContainer)