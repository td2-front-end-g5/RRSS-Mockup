export const templateLogin = () => {
    document.getElementById('raiz').innerHTML =`
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
                                    
                                    <form class="js-validation-signin mt-5 px-5" action="be_pages_auth_all.html" method="POST">
                                        <div class="py-3">
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-lg form-control-alt"
                                                    id="login-username" name="login-username" placeholder="Usuario o mail">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-lg form-control-alt"
                                                    id="login-password" name="login-password" placeholder="Contraseña">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-block btn-hero-primary btn-lg">
                                                <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Ingresa
                                            </button>
                                            <p class="mt-3 mb-0 d-lg-flex justify-content-lg-between">
                                                <a class="btn btn-lg btn-light d-block d-lg-inline-block mb-1"
                                                    href="op_auth_reminder.html">
                                                    <i class="fa fa-exclamation-triangle text-muted mr-1"></i> Olvidaste la
                                                    contraseña?
                                                </a>
                                                <a class="btn btn-outline-secondary btn-lg btn-light d-block d-lg-inline-block mb-1"
                                                    href="op_auth_signup.html">
                                                    <i class="fa fa-plus text-muted mr-1"></i> Nueva Cuenta
                                                </a>
                                            </p>
                                        </div>
                                    </form>
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
}