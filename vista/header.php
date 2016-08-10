<div class="header">
        <div class="logo">
            <a href="vw_dashboard.php"><img src="images/logo.png" alt="" /></a>
        </div>
        <div class="headerinner">
            <ul class="headmenu">
        <!-- Esta sección se reemplazara con los menus que tenga el usuario -->
              
        <!-- Ahi termina la sección del menú -->
                <li class="odd">
                    <div class="userloggedinfo">
                        <div class="userinfo">
                            <h5>  <?php echo $_SESSION["nombreCompletoUsuario"]; ?> <small>- </small></h5>
                            <ul>
                                <li><a>Puesto: <?php echo $_SESSION["nombrepuesto"];
                                        /*En esta sección se agregara el puesto del empleado*/
                                 ?></a></li>
                                <li><a href="#" onclick="salir();">Salir</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul><!--headmenu-->
        </div>
    </div>
