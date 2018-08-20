//react-redux
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//redux-form
import { Field, reduxForm } from 'redux-form'

//actions
//import { validateUser } from '../actions/account_action';

//material-ui
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { grey500, white } from '@material-ui/core/colors';

//Components
import InputField from '../components/inputField'

import { required } from '../utilities/validator'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit(values) {
        //todo:
        this.props.history.push(`/dashboard`);
    }

    ShowStatus(validateAction_Data) {
        //todo:

    }

    render() {

        return (
            <div>
                <div className="login-container">
                    <Paper className="paper">
                        <div style={{ textAlign: 'center' }}>
                            <img src="../logo.png" alt="Logo" width={70} />
                        </div>
                        <div className="gradient-text" style={{
                            fontSize: 24,
                            textAlign: 'center',
                            lineHeight: '30px'
                        }}>Log in to your account</div>
                        <form size='large' className="form-horizontal" onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
                            <Field name="username" myLabel="Email" myPlaceHolder="Email" component={InputField} validate={required} />
                            <div>
                                <Field name="password" myType="password" myLabel="password" myPlaceHolder="Password" component={InputField} validate={required} />
                                <Link style={{
                                    position: 'relative',
                                    fontSize: '13px',
                                    bottom: '30px',
                                    float: 'right'
                                }} to='/resetPassword'>Forgot?</Link>
                            </div>
                            <div>
                                <Button variant="contained" type="submit" color="primary"
                                    style={{ marginTop: 5, borderRadius: '0px' }} fullWidth={true}>
                                    Login
                                    </Button>
                            </div>
                        </form>
                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 13, marginTop: 5 }}>
                            <Link className="gradient-text" to='/signup'>Click here to Sign Up</Link>
                        </div>
                    </Paper>
                    <div>
                        {this.ShowStatus(this.props.validateAction_Data)}
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         validateAction_Data: state.account,
//         loadStatus: state.common.data
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ validateUser, SocialSignUp, ShowLoader, logout }, dispatch)
// }

export default reduxForm({
    form: 'FrmLogin'
}
)(
    connect(null, null)(Login)
)
