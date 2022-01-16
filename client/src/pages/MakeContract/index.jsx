import { Button, TextField } from '@mui/material';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import ContractSignature from '../../components/ContractSignature';


export default function MakeContract(props){
    const [title, setTitle] = React.useState("");
    const [data, setData] = React.useState("");
    const [initialDate, setInitialDate] = React.useState(new Date());
    const [finalDate, setFinalDate] = React.useState(new Date());
    const [signatures, setSignatures] = React.useState({sig1: "", sig2: "", deg1: "", deg2: ""});
    const [counter, setCounter] = React.useState(3);
    const [sigComp, setSigComp] = React.useState([]);

    function createContractSignature(c){
        setSignatures({...signatures, ["sig"+c] : "", ["deg"+c]: ""});
        setSigComp([...sigComp, counter]);
        setCounter(counter+1);

        // console.log(signatures);
        // console.log(sigComp);
    }

    function onChangeContractSignature(e){
        setSignatures({
            ...signatures, 
            [e.target.name]:e.target.value,
        });
        // console.log(signatures);
    }

    return (
        <>
            <br />
            <br />
            <TextField label="Contract Title" type="text" value={title} onChangeCapture={(e)=>setTitle(e.target.value)} fullWidth />
            <br />
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Contract Start Date"
                    value={initialDate}
                    onChange={(newValue) => {
                    setInitialDate(newValue);
                    }}
                />
            </LocalizationProvider>
            <br/>
            <br/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Contract End Date"
                    value={finalDate}
                    onChange={(newValue) => {
                    setFinalDate(newValue);
                    }}
                />
            </LocalizationProvider>
            <br/>
            <br/>
            <TextField label="Contract text" type="text" value={data} onChangeCapture={(e)=>setData(e.target.value)} fullWidth multiline minRows={5} />
            <br />
            <br />
            <ContractSignature value={signatures.sig1} deg={signatures.deg1} onChange={onChangeContractSignature} name="sig1" degname="deg1" />
            <ContractSignature value={signatures.sig2} deg={signatures.deg2} onChange={onChangeContractSignature} name="sig2" degname="deg2" />
            {
                sigComp.map((c, index)=>(
                    <div key={index}>
                        <ContractSignature value={signatures['sig'+c]} deg={signatures['deg'+c]} onChange={onChangeContractSignature} name={"sig"+c} degname={"deg"+c} />
                    </div>
                ))
            }
            <br />
            <br />
            <Button variant="contained" color="secondary" size="medium" onClick={()=>createContractSignature(counter)}>Add Signature Field</Button>
            <br/>
            <br/>
            <Button variant='contained' type="submit" color="primary" onClick={()=>{
                const d = {
                    name: title,
                    body: data,
                    initialDate: initialDate,
                    finalDate: finalDate,
                    signatures: signatures,
                }
                console.log(d);
            }} fullWidth>Create</Button>
        </>
    );
}   