import React, {useState, useEffect} from 'react'
import firebase from '../firebase'
import {Form, Table} from "react-bootstrap";


const SORT_OPTIONS = {
    'TIME_ASC': {column: 'time', direction: 'asc'},
    'TIME_DESC': {column: 'time', direction: 'desc'},

    'TITLE_ASC': {column: 'title', direction: 'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'}
}

function useTimes(sortBy = 'TIME_ASC') {
    const [times, setTimes]=useState([])

    useEffect(()=>{
        const unsuscribe = firebase
            .firestore()

            //jusu duomenu colekcijos-lentales pavadinimas skliausteliuose

            .collection('times')
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot((snapshot) => {
                const newTimes = snapshot.docs.map((doc) =>({
                    id: doc.id,
                    ...doc.data()
                }))
                setTimes(newTimes)
            })
//atsijungiu, kai nenaudoju
        return () => unsuscribe()
        //kai pasikeis sortBy, bus is naujo paleidziamas metodas useEffect viduje
    }, [sortBy])
    return times
}

const TimesList =()=> {
    const [sortBy, setSortBy]= useState('TIME_ASC')
    const times = useTimes(sortBy)
    return(
        <div>
            <h2>Times List</h2>

        <Form>

            <Form.Group >
                <Form.Label>Sort By: </Form.Label>
                <Form.Control as="select" value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value= 'TIME_ASC'>Time (fastest forst)</option>
                    <option value='TIME_DESC'>Time (slowest forst)</option>
                    <option disabled>----</option>
                    <option value='TITLE_ASC'>Title (a-z)</option>
                    <option value= 'TITLE_DESC'>Title (z-a)</option>
                </Form.Control>
            </Form.Group>

        </Form>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Entry Title</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {
                   times.map((time)=>(
                       <tr key={time.id}>
                           <td ></td>
                           <td>{time.title}</td>
                           <td>{time.time}</td>
                       </tr>
                   ))
                }
                </tbody>
            </Table>
        </div>
    )
}

export default TimesList