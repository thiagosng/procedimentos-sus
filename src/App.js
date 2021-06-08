import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import './App.css';
import Input from './components/Form/input';

function App() {
  const formRef = useRef(null);

  const initialData = {
    name: 'Thiago'
  }
  function handleSubmit(data, { reset }){
    if(data.name === ""){
      formRef.current.setFieldError('name', 'O nome é obrigatório');
    }
    console.log(data);

    reset();
  }

  return (
    <div className="App">
      <h1>ABCDE</h1>

      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        
          <Input type="text" name="group" />
        
        
          <Input name="sub-group" />
        
        
          <Input name="organization-form" />
        
        
          <Input name="code" />
        
        
          <Input name="name" />
        

        <button type="submit">Enviar</button>
      </Form>

    </div>
  );
}

export default App;
