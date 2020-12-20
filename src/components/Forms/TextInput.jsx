import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  return(
    <TextField 
    fullWidth={true}
    id="standard-basic" 
    label={props.label}
    margin={'dense'} 
    multiline={props.multiline}
    rows={props.rouws}
    value={props.value}
    type={props.type}
    onChange={props.onChange}
    />
  )
}
export default TextInput;


// https://outlook.office.com/webhook/c91a0a62-6205-4098-9e61-1c2270dad2bd@8cd1f498-bca9-476c-95a5-28766928442b/IncomingWebhook/eb216ced0b1b4feda0440c74accd1cb3/49008734-b892-4168-a15e-4ca04db5c2f3