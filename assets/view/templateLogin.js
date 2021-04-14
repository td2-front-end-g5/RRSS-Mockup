import { validateSigned } from '../js/validate.js'

export const templateLogin = () => {
    document.getElementById('raiz').innerHTML = `
    <!-- Sign In Form -->
        <div id="page-container">
            <!-- Main Container -->
            <main id="main-container">
                <!-- Page Content -->
                <div class="bg-image" style="background-image: url('assets/img/monos2.jpg')">
                    <div class=" d-sm-block d-md-none" >
                        <div class="bannerTop"></div>
                    </div>
                    <div class="hero-static col-md-6 bg-white">
                        <div class="login">
                            <!-- Header -->
                            <div class="no-gutters">
                                <div class="col-12 text-center row d-flex justify-content-center justify-align-center vh-100">
                                    
                                        <span class="display-4 text-uppercase font-w700 font-size-sm text-muted">Bienvenid@ a
                                            nuestra comunidad!</span>
                                    
                                    <div class=" mt-5 px-5">
                                        <div class="py-3">
                                            <div>
                                                <input type="text" id="login-username" name="login-username" placeholder="Usuario o mail">
                                            </div>
                                            <div class="mt-3">
                                                <input type="password" id="login-password" name="login-password" placeholder="Contraseña">
                                            </div>
                                        </div>
                                        <div>
                                            <button id="btn-login" class="btn btn-block btn-hero-primary btn-lg">
                                                <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Ingresa
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END Page Content -->
            </main>
            <!-- END Main Container -->
        </div>
    `
    const btn = document.getElementById('btn-login');
    btn.addEventListener('click', () => {
        const email = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        validateSigned(email, password);
    })
}

