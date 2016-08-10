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
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"></script>
  <script>
    var map;

    function initialize() {
      var mapOptions = {
        zoom: 16,
        scrollwheel: false
      };
      map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

      // Try HTML5 geolocation
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);

    var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
      var la = $("#lat");
      la.val(latitud);
      var lo = $("#long");
      lo.val(longitud);
      


          var posicion = new google.maps.Marker({
            map: map,
            position: pos,
        icon:'http://digiseg.com.mx/geo/1_online.png',
            
          });
        
        var popu = new google.maps.InfoWindow({
            content:'Estás Aqui!' 
        });
     popu.open(map, posicion);
     
        
        map.setCenter(pos);
        }, function() {
          handleNoGeolocation(true);
        });
      } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
      }
    }


    function handleNoGeolocation(errorFlag) {
      if (errorFlag) {
        var content = 'Error: Fallo el servicio de Geolocalizacion.';
      } else {
        var content = 'Error: Tu dispositivo no soporta geolocalizacion.';
      }

      var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
      };

      var infowindow = new google.maps.InfoWindow(options);
      map.setCenter(options.position);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    window.onload = function(){
      if(window.File && window.FileList && window.FileReader){
          var filesInput = document.getElementById("files");
          filesInput.addEventListener("change", function(event){
          var files = event.target.files;
          var output = document.getElementById("image");
          for(var i = 0; i< files.length; i++)
          {
                  var file = files[i];
                  if(!file.type.match('image'))
                  continue;
                  var picReader = new FileReader();
                  picReader.addEventListener("load",function(event){
                          var picFile = event.target;
                          var div = document.createElement("div");
                          div.innerHTML = "<center><img class='img-thumbnail' style='width:50%; height:50%;' src='" + picFile.result + "'" +
                              "title='" + picFile.name + "'/></center>";
                          output.insertBefore(div,null);            
                  });
                  picReader.readAsDataURL(file);
          }                               
          });
        }else{
          console.log("Tu dispositivo no soporta esta funcion");
        }
      }
  </script>
</head>
<body>
  <div class="row-fluid">
      <div class='col-md-12 col-sm-12' data-role="header" data-theme="c" >
        <h2 class='text-center'>Digiseg System</h2>
        <div id="map-canvas" style="width:100% ;height:400px"></div></h3>
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
