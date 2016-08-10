<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=euc-jp">

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>DIGISEG</title>

<link rel="stylesheet" href="vista/css/style.default.css" type="text/css" />


<script type="text/javascript" src="modelo/js/jquery/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="modelo/js/jquery/jquery-migrate-1.1.1.min.js"></script>
<script type="text/javascript" src="modelo/js/jquery/jquery-ui-1.9.2.min.js"></script>
<script type="text/javascript" src="modelo/js/jquery/jquery.cookie.js"></script>


<script type="text/javascript" src="modelo/js/efectos/modernizr.min.js"></script>
<script type="text/javascript" src="modelo/js/efectos/bootstrap.min.js"></script>
<script type="text/javascript" src="modelo/js/efectos/custom.js"></script>

<script type="text/javascript" src="modelo/js/funciones/funciones24.js"></script>
</head>

<body class="loginpage">
<center>
<div class="" style="width:270px; margin-top: 50px; left: 50%; height: 300px;">
    <div class="" style="top: 150px; left: -50%;">
        <div class="logo animate0 bounceIn" style="text-align: center; padding: 20px 0;"><img src="vista/images/logo.png" alt="" /></div>
        <form id="login"  method="post">
            


            <div class="inputwrapper">
         
                
            </div>
            <div class="inputwrapper animate1 bounceIn">
                <input type="text"  id="username" name="username" placeholder="usuario" />
            </div>
            <div class="inputwrapper animate2 bounceIn">
                <input type="password"  id="password" name="Password" placeholder="contrase��a" onkeypress="chequearEnter(event)" />
            </div>
            
            <div class="inputwrapper animate3 bounceIn">
                <input id="" type="button" value="Entrar" onclick="enviaDatos();">
                
            </div>
            
        </form>
    </div><!--loginpanelinner-->
    </center>
</div><!--loginpanel-->
<div id="frmDatos"></div>

<div class="loginfooter">
    <p>&copy; 2016. DigiSeg System. Derechos Reservados.</p>
</div>

</body>
</html>
