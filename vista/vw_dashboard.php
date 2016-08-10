<!DOCTYPE html>
<?php 
session_start();
if(!isset($_SESSION["idUsuario"]))
{
  header("Location: ../index.php");
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>DIGISEG Adm</title>
<link rel="stylesheet" href="css/style.default.css" type="text/css" />
<link rel="stylesheet" href="css/sliderwall_thumbs_skin.css" type="text/css" />
<link rel="stylesheet" href="css/slideshow_sample.css">


<link rel="stylesheet" href="css/jquery-ui-1.10.4.css">

<link rel="stylesheet" href="css/jquery-ui-1.10.4.min.css">


<link rel="stylesheet" href="css/responsive-tables.css">
<link rel="stylesheet" href="css/jquery.dataTables.css">

<link rel="stylesheet" href="css/shadowbox.css">



<script type="text/javascript" src="../modelo/js/jquery/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="../modelo/js/jquery/jquery-migrate-1.1.1.min.js"></script>
<script type="text/javascript" src="../modelo/js/jquery/jquery-ui-1.9.2.min.js"></script>
<script type="text/javascript" src="../modelo/js/jquery/jquery.uniform.min.js"></script>
<script type="text/javascript" src="../modelo/js/jquery/jquery.cookie.js"></script>
<script type="text/javascript" src="../modelo/js/jquery/jquery.colorbox-min.js"></script>
<script type="text/javascript" src="../modelo/js/jquery/jquery.isotope.min.js"></script>

<script type="text/javascript" src="../modelo/js/jquery/flot/jquery.flot.min.js"></script>
<script type="text/javascript" src="../modelo/js/jquery/flot/jquery.flot.resize.min.js"></script>

<script type="text/javascript" src="../modelo/js/efectos/responsive-tables.js"></script>
<script type="text/javascript" src="../modelo/js/efectos/custom.js"></script>
<script type="text/javascript" src="../modelo/js/efectos/modernizr.min.js"></script>
<script type="text/javascript" src="../modelo/js/efectos/bootstrap.min.js"></script>
<script type="text/javascript" src="../modelo/js/efectos/sliderwall-thumbs-1.1.2.js"></script>

<script type="text/javascript" src="../modelo/js/efectos/shadowbox.js"></script>


<script type="text/javascript" src="../modelo/js/funciones/funciones25.js"></script>
<script type="text/javascript" src="../modelo/js/funciones/graficas.js"></script>


<script type="text/javascript" src="../modelo/js/graficas/amcharts.js"></script>
<script type="text/javascript" src="../modelo/js/graficas/pie.js"></script>
<script type="text/javascript" src="../modelo/js/graficas/serial.js"></script>
<script type="text/javascript" src="../modelo/js/graficas/radar.js"></script>
<script type="text/javascript" src="../modelo/js/graficas/light.js"></script>

<script type="text/javascript" src="../modelo/js/grid/jquery.dataTables.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRxC6Y4f-j6nECyHWigtBATtJyXyha-XU&libraries=adsense&sensor=true&language=es"></script>

<script src='modelo/reportes_conta/funciones.js'></script>




<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="../modelo/js/excanvas.min.js"></script><![endif]-->

    

</head>

<body>

<div class="mainwrapper">
    
    <?php
    include_once('header.php'); 
   
    ?>
    
 
    
    <div class="rightpanel">
        
        <ul class="breadcrumbs">
            <li><a href="dashboard.php"><i class="iconfa-home"></i></a> <span class="separator"></span></li>
            <li>Inicio</li>
            <li class="right">
                    
            </li>
        </ul>
        
        <div class="pageheader">
        <div class="pageheader">
           <div id="pageheaderPrincipal">
            <div class="pageicon"><span class="iconfa-laptop"></span></div>
            <div class="pagetitle">
                <h1>TABLERO PRINCIPAL</h1>
            </div>
            </div>
            <?php
                 include_once("vw_Encabezado.php");
            ?>
          </div>
        </div><!--pageheader-->
        
        <div class="maincontent">
            <div class="maincontentinner">
                <div class="row-fluid">
                    <div id="dashboard-left" class="span8">
                        
                        








                        <div id="chartdivinicial" style="height:300px;"></div>
                        
                        <div class="divider30"></div>
                        
                       
                        
                        <br />
                        
                     
                        
                        <br />
                        
                        
                    </div><!--span8-->
                    
                    <div id="dashboard-right" class="span4">
                        
                       
                        
                       
                        
                        
                        
                       
                                                
                    </div><!--span4-->
                </div><!--row-fluid-->
                
                <div class="footer">
                    <div class="footer-left">
                        <span>&copy; 2015. DIGISEG System. All Rights Reserved.</span>
                    </div>
                    <div class="footer-right">
                        
                    </div>
                </div><!--footer-->
                
            </div><!--maincontentinner-->
        </div><!--maincontent-->
        
    </div><!--rightpanel-->
    
</div><!--mainwrapper-->



<!--GRAFICA-->
  <!-- GRAFICA CODIGO the chart code -->
          


<!-- GRAFICA 2 CODIGO the chart code -->


            

<?php
if(($_SESSION['puestoUsuario']==1) || ($_SESSION['puestoUsuario']==5) ){
  echo "<script type='text/javascript'>cargar('Agentes');</script>";
}
else if (($_SESSION['puestoUsuario']==6))
{

    echo "<script type='text/javascript'>cargarClientesTop(6,".$_SESSION['idempleado'].");</script>";
    
}
?>	

<!--GRAFICA-->


</body>
</html>
