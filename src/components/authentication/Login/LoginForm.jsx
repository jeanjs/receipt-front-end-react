import React from 'react';
import { Row, Col, TextInput, Checkbox, Button } from 'react-materialize';

const LoginForm = (props) => {
    const { 
        onChange,
        onSubmit,
        formData,
        onClickToggleForm
    } = props;
    
    return (
        <div className="gradient_vicious_stance z-depth-1">
            <form onSubmit={onSubmit} style={{ padding: '20px', textAlign: 'center' }}>
                <h2 className="white-text" style={{ fontSize: '32pt' }}>Entrar</h2>

                <Row>
                    <Col s={10} offset='s1'>
                        <TextInput        
                            noLayout
                            label='Usuário'
                            className='inputField'
                            onChange={onChange}
                            value={formData.username}
                            name='username'/>
                    </Col>
                </Row>

                <Row>
                    <Col s={10} offset='s1'>
                        <TextInput 
                            noLayout
                            password
                            label='Senha'
                            className='inputField'
                            onChange={onChange}
                            value={formData.password}
                            name='password' />
                    </Col>
                </Row>

                <Row>
                    <Col s={6}>
                        <Checkbox 
                            label='Lembrar de mim' 
                            filledIn
                            onChange={onChange}
                            checked={formData.rememberMe}
                            value='' 
                            name='rememberMe'/>
                    </Col>
                    <Col s={6}>
                        <label style={{ fontSize: '11pt' }}>
                            <span className="pink-text text-accent-2">Esqueceu a senha?</span>
                        </label>
                    </Col>
                </Row>

                <Row>
                    <Col s={12}>
                        <Button 
                            style={{ width: '16rem', height: '3rem' }} 
                            flat
                            waves='light' 
                            className="pink white-text"
                            type="submit">
                            Entrar
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <label style={{ fontSize: '11pt' }}>
                            Ou <span className="pink-text text-accent-2" onClick={onClickToggleForm}>Crie uma conta!</span>
                        </label>
                    </Col>                        
                </Row>
            </form>
        </div>
    );
};

export default LoginForm;