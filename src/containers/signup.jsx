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
import { required, email, minimum8 } from '../utilities/validator'



class SignUp extends Component {
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
                        }}>Register your account</div>
                        <form size='large' className="form-horizontal" onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
                            <Field name="username" myPlaceHolder="User Name" component={InputField} validate={required} />
                            <Field name="email" myType="text" myPlaceHolder="Email" component={InputField} validate={[required, email]} />
                            <Field name="confirmEmail" myType="text" myPlaceHolder="Confirm Email" component={InputField} validate={[required, email]} />
                            <Field name="password" myType="password" myPlaceHolder="Password" component={InputField} validate={[required, minimum8]} />
                            <Field name="confirmPassword" myType="password" myPlaceHolder="Confirm Password" component={InputField} validate={[required, minimum8]} />
                            <div>
                                <Button variant="contained" type="submit" color="primary"
                                    style={{ marginTop: 5, borderRadius: '0px' }} fullWidth={true}>
                                    Sign Up
                                    </Button>
                            </div>
                        </form>
                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 13, marginTop: 5 }}>
                            <Link className="gradient-text" to='/'>Click here to Login</Link>
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
    form: 'FrmSignUp'
}
)(
    connect(null, null)(SignUp)
)
