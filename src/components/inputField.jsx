import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';



class InputField extends Component {

    render() {

        return (
            <TextField {...this.props.input}
                error={this.props.meta.touched ? this.props.meta.error ? true : false : false}
                //errorText={this.props.meta.touched ? this.props.meta.error : ''}
                //errorStyle={{ lineHeight: 3, top: 55, fontSize: 11, position: 'absolute', bottom: 0 }}
                type={this.props.myType}
                fullWidth={true}
                disabled={this.props.disabled}
                //floatingLabelFixed={true}
                //floatingLabelText={this.props.myPlaceHolder}
                label={this.props.myPlaceHolder}
                margin="dense"
            />
        )
    }
}

export default InputField;