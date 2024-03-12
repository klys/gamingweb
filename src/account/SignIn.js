import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './SignIn.css'

const SignIn = () => {
    return(<div className="text-center">
    
    <main className="form-signin">
      <Form>
        <h1 className="h3 mb-3 fw-normal">Porfavor identificate</h1>
    
        <div className="form-floating">
          <Form.Control type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Correo Electronico</label>
        </div>
        <div className="form-floating">
          <Form.Control type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Clave</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <Form.Check type="checkbox" value="remember-me"/> Mantenme conectado
          </label>
        </div>
        <Button className="w-100 btn btn-lg btn-primary" size="lg" type="submit">Entrar</Button>
        <p className="mt-5 mb-3 text-muted">&copy; 2024</p>
      </Form>
    </main>
    
    
        
      </div>)
}

export default SignIn;