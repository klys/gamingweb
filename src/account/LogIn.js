import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Stack from 'react-bootstrap/Stack';

const LogIn = () => {
    return(<div>
        <Stack direction="horizontal" gap={3}>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text" placeholder="JuanDeo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Clave</Form.Label>
                        <Form.Control type="password" placeholder="Clave" />
                    </Form.Group>
     
                </Form>
            </div>
        </Stack>
        <Button variant="primary">Entrar</Button>
    </div>)
}

export default LogIn;