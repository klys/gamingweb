import { useState } from 'react';

import {useNavigate} from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Stack from 'react-bootstrap/Stack';

import Alert from '../alerts/Alert'

import bcrypt from 'bcryptjs'

const Create = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username:'',
        password:'',
        email:'',
        pin:'',
        pic:''
    })

    const [pwd, setPwd] = useState({
        password:''
    })

    const [alert, setAlert] = useState({
        show:false,
        title:"Nothing",
        message:"Is empty",
    })

    const handleClose = () => {
        setAlert({...alert,show:false})
    }

    const alertUser = (title, message) => {
        setAlert({
            show:true,
            title:title,
            message:message,
        })
    }

    const handleInput = (variable, value) => {
        data[variable]=value;
        setData(data);
    }

    const handlePaswordInput = (variable, value) => {
        // TO-DO: BCRYPT implementation on react
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(value, salt);
        console.log(hash)
        pwd[variable] = hash;
    }

    const handleSubmit = async () => {
        console.log(data)
        console.log(pwd)
        console.log(bcrypt.compareSync(data.password,pwd.password ))

        const variables = Object.keys(data);
        for(let i = 0; i < variables.length; i++) {
            if (validateInput(variables[i])) {
                return;
            }
        }

        if (bcrypt.compareSync(data.password,pwd.password ) == false) {
            alertUser("Claves no concuerdan", "Ambas claves deben ser iguales, intentalo de nuevo.")
            return;
        }

        const response = await fetch(`http://localhost:4000/v1/account/create?username=${data.username}&password=${data.password}&email=${data.email}&pin=${data.pin}&pic=${data.pic}`, {method:"POST", mode:"cors"})

        const resJson = await response.json();

        console.log(resJson)

        if (resJson.status == true) {

            navigate(`/cuenta/crear/logrado?title=Activa tu cuenta&message=Tu cuenta ah sido creada, revisa tu correo para activarla.`)
            return;
        } else {
            alertUser("Usuario repetido", "Los datos ingresados ya existen o ocurrio otro error. Si este error persiste reportalo con este codigo: "+resJson.error)
        }
    }

    const validateInput = (variable) => {
        if (data[variable] == '') {
            alertUser("Falta informacion:", "Revisa todos los cambos, el siguiente campo esta vacio: "+variable)
            return true;
        }
        return false;
    }

    return(<div>
        <h1>Crea tu cuenta</h1>
        <Stack direction="horizontal" gap={3}>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text" placeholder="JuanDeo" onChange={(ev) => handleInput('username', ev.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Clave</Form.Label>
                        <Form.Control type="password" placeholder="Clave" onChange={(ev) => handlePaswordInput('password', ev.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Repita Clave</Form.Label>
                        <Form.Control type="password" placeholder="Repite Clave" onChange={(ev) => handleInput('password', ev.target.value)} />
                    </Form.Group>
                </Form>
            </div>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" onChange={(ev) => handleInput('email', ev.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Pin de Cuenta</Form.Label>
                    <Form.Control type="number" placeholder="1234" onChange={(ev) => handleInput('pin', ev.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Pin de Personajes</Form.Label>
                    <Form.Control type="number" placeholder="123456" onChange={(ev) => handleInput('pic', ev.target.value)} />
                </Form.Group>
                
            </Form>
            </div>
        </Stack>
        <Button variant="primary" onClick={() => handleSubmit()}>Crear cuenta</Button>
        <Alert show={alert.show} title={alert.title} message={alert.message} handleClose={handleClose}/>
    </div>)
}

export default Create;