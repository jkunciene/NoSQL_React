import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap";
import firbase from '../firebase'

const AddNewTimeForm = ()=>{
    const [title, setTitle]= useState('')
    const [time, setTime]= useState('')

    function ClearData(e) {
        e.preventDefault()
        firbase
            .firestore()

            //paduodam musu DB duomenu pavadinima
            .collection('times')
            .add({
                title,
                time: parseInt(time)
            })
            .then(()=>{
                setTitle('')
                setTime('')
            })
    }

    return(
        <Form onSubmit={ClearData}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' value={title} onChange={e => setTitle(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group >
                <Form.Label>Time</Form.Label>
                <Form.Control type="text" value={time} onChange={e => setTime(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Time Entry
            </Button>
        </Form>
    )
}

export default AddNewTimeForm