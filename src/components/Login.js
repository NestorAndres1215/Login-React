import React, { useState } from 'react';
import './Login.css'; // Asumiendo que tendrás estilos en un archivo CSS separado.

const Login = () => {
 

    return (
        <body>
            <div class="container">
                <div class="login">
                    <div class="header">
                        <h1>Login</h1>
                    </div>
                    <div class="main">
                        <form>
                            <input type="text" placeholder="Username" />
                            <br />
                            <input type="password" placeholder="password" />
                            <br />
                            <a href="">Forgot My Password</a>
                            <br />
                            <button>Ingresar</button>
                        </form>
                    </div>
                </div>
                <div class="img">
                    <span>
                        <h1>Bienvenidos</h1>
                       
                    </span>
                </div>
            </div>


        </body>
    );

}
export default Login;

