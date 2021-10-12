import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuth} from '../../redux/auth-reducer';
import { compose } from "redux";

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.setAuth()
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    connect(mapStateToProps,{setAuth})
)(HeaderContainer)