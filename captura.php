<!DOCTYPE html>
<html>
<head>
  <title>Geolocalizacion</title>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
  <meta charset="utf-8">
  <!--CSS-->
  <link rel="stylesheet" href="https://bootswatch.com/cerulean/bootstrap.min.css">
  <link href="css/jquery.mobile.structure-1.0.min.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="css/Placas.css" />
  <!--<link rel="stylesheet" href="css/jquery.mobile.icons.min.css" />
  <link rel="stylesheet" type="text/css" href="css/normalize.css" />
  <link rel="stylesheet" type="text/css" href="css/demo.css" />
  <link rel="stylesheet" type="text/css" href="css/component.css" />-->
  <style>
    html, body, #map-canvas {
      height: 100%;
      margin: 0px;
      padding: 0px
    }
  </style>
  <!--SCRIPTS-->
     <!-- 
      AQUI ESTA EL ARCHIVO QUE NO NOS SIRVE <script src="js/jquery.mobile-1.0.min.js"></script>
    -->
  <script src="js/custom-file-input.js"></script>
  <script>(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);</script>
  <script src="js/jquery-1.6.4.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAufsJPSHl8yysv9KlaVn-MRilAGLTlVek&#038;sensor=true"></script>
  
<script type="text/javascript"> 

    var mapa;

    function inicializar() {
      var opciones = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      mapa = new google.maps.Map(document.getElementById('mapa_content'), opciones);
      if (navigator.geolocation)
      {
          //Hago el CallBack a mostrarLocalizacion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion,manejadorDeError);
      }
      else{
          //Caso contraio muestro error
        alert("Su dispositivo no soporta Geolocalizacion");
        }
    }

      function mostrarLocalizacion(posicion)
       {
            var pos = new google.maps.LatLng(posicion.coords.latitude,posicion.coords.longitude);

            



            //Muestro un tooltip con un mensaje sobre el mapa

            var infowindow = new google.maps.InfoWindow({
              map: mapa,
              position: pos,
              content: 'Estás Aqui.'
            });

            mapa.setCenter(pos);
        }

      function manejadorDeError(error) {

       switch(error.code)
            {
                case error.PERMISSION_DENIED: alert("El usuario no permite compartir datos de geolocalizacion");
                break;

                case error.POSITION_UNAVAILABLE: alert("Imposible detectar la posicio actual");
                break;

                case error.TIMEOUT: alert("La posicion debe recuperar el tiempo de espera");
                break;

                default: alert("Error desconocido");
                break;
            }
      var opciones = {
        map: mapa,
        position: new google.maps.LatLng(60, 105),
        content: content
      };
      var infowindow = new google.maps.InfoWindow(opciones);
      mapa.setCenter(opciones.position);
      }
      google.maps.event.addDomListener(window, 'load', inicializar);
    </script>





</head>
<body>
  <div class="row-fluid">
      <div class='col-md-12 col-sm-12' data-role="header" data-theme="c" >
        <h2 class='text-center'>Digiseg System</h2>
        <div id="mapa_content" style="width:100% ;height:400px"></div></h3>
      </div>
  </div>

  <form action="?actividad=1" method='POST' enctype="multipart/form-data">
    <!--IZQUIERDA-->
    <div class="row-fluid pull-left col-md-6">
      <div class="col-md-6 input-group pull-left">
        <span class="input-group-addon"><i class='glyphicon glyphicon-map-marker'></i></span>
        <input type="text" class='form-control input-lg' id="lat" placeholder="'Latitud'" readonly="readonly"/>
      </div>
      <div class="col-md-6 input-group pull-left">
        <span class="input-group-addon"><i class='glyphicon glyphicon-map-marker'></i></span>
        <input type="text" class='form-control input-lg' id="long" placeholder="'Longitud'"readonly="readonly"/>
      </div>
    </div>
    <!--DERECHA-->
    <div class="row-fluid pull-right col-md-6">
      <div class="col-md-6 input-group pull-right">
        <span class="input-group-addon"><i class='glyphicon glyphicon glyphicon-calendar'></i></span>
        <input name="fecha" class='form-control input-lg' type="text" id="fecha" value="<?php echo date("d/M/Y"); ?>" size="10" readonly="readonly" />
      </div>
      <div class="col-md-6 input-group pull-right">
        <span class="input-group-addon"><i class='glyphicon glyphicon-time'></i></span>
        <input name="fecha" class='form-control input-lg' type="text" id="fecha" value="<?php $time = time(); echo date("H:i:s", $time -18000); ?>" size="10" readonly="readonly" />
      </div>
    </div>
    <!--Tomar FOTO-->
    <div class='row-fluid' >
      <div class="col-sm-12">
        <hr>
        <input  id='files' name='files[]' style='display:none' type='file' multiple/>
        <label class='alert alert-info text-center' style='width:100%;' for="files"><i class='glyphicon glyphicon-camera'></i> <span>TOMAR FOTOGRAFÍA</span></label>
      </div>
    </div>
    <!--BOTON GUARDAR-->
    <div class="row-fluid">
      <center>
      <div class="col-sm-4">
        <div id="image"></div>
        <input type="submit" value='GUARDAR' class='btn btn-primary btn-lg'>
      </div>
      </center>
    </div>
  </form>
<center>
  <?php
  if(isset($_GET['actividad'])){
    echo "<br>";
    include("upload_img.php");
  }
  ?>
</center>
</body>   
</html>
