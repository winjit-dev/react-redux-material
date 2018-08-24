import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

class InputField extends Component {

    render() {

        return (
            <TextField {...this.props.input}
                error={this.props.meta.touched ? this.props.meta.invalid : false}
                helperText={this.props.meta.touched ? this.props.meta.error : ''}
                label={this.props.myPlaceHolder}
                type={this.props.myType}
                fullWidth={true}
                margin="dense"
                
            />
        )
    }
}

export default InputField;