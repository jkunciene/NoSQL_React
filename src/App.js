import React from 'react'
import TimesList from './components/TimesList'
import AddNewTimeForm from "./components/AddNewTimeForm";
import {Container} from 'react-bootstrap'


function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center'
    style={{ minHeight: '100vh'}}
    >
      <div className='w-100' style={{ maxWidth: '400px'}}>
        <TimesList/>
        <AddNewTimeForm/>
      </div>
    </Container>
  );
}

export default App;
