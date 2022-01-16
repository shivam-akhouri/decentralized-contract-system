import { Divider, TextField } from '@mui/material';
import React from 'react';

export default function ContractSignature(props){
    return (
        <>
            <TextField label="Add Account hash/ Email" value={props.value} name={props.name} onChangeCapture={props.onChange} variant="standard" fullWidth/>
            <br />
            <br />
            <TextField label="Designation" value={props.deg} name={props.degname} onChangeCapture={props.onChange} variant="standard" multiline fullWidth />
            <br />
            <br />
            <Divider />
        </>
    );
}