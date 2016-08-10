function salir(){
                jQuery.post("acceso.php", function(result){
                        jQuery("#mainwrapper").html(result);
                        document.location='../index.php'
                });
            }
    
   function cargar(opcion){
    jQuery.post("vw_Encabezado.php", {op: opcion},function(result){
                        jQuery(".pageheader").html(result);
                });
    jQuery.post("vw_Cuerpo.php",{op: opcion}, function(result){
                        jQuery(".maincontentinner").html(result);
                });

    }


   function cargarProductos(){
        
        //Replaces data-rel attribute to rel.
        //We use data-rel because of w3c validation issue
        jQuery('a[data-rel]').each(function() {
            jQuery(this).attr('rel', jQuery(this).data('rel'));
        });
        
        jQuery("#medialist a").colorbox();
        
    }


    function cargarListaProductos(){
        jQuery('#medialist').isotope({
            itemSelector : 'li',
            layoutMode : 'fitRows'
        });
        
        // Media Filter
        jQuery('#mediafilter a').click(function(){
      
            var filter = (jQuery(this).attr('href') != 'TODOS')? '.'+jQuery(this).attr('href') : '*';
            jQuery('#medialist').isotope({ filter: filter });
      
            jQuery('#mediafilter li').removeClass('current');
            jQuery(this).parent().addClass('current');
      
            return false;
        });
    }

    function enviaDatos(){
     
            var u = jQuery('#username').val();
            var p = jQuery('#password').val();
            if(u == '' && p == '') {
                jQuery('.login-alert').fadeIn();
                return false;
            }else{
                jQuery.post("vista/acceso.php", {usern: u, passwn: p}, function(result){
                        jQuery("#frmDatos").html(result);
                });
            }
    }

    function guardarProducto(op){
        
        jQuery.ajax({
            method: "POST",
            url: "../controlador/ControladorProductos.php",
            data: jQuery('#frmProducto').serialize()
            })
            .done(function( html ) {
             jQuery( "#cboxMiddleRight" ).append( html );
             
            });


        jQuery('#cboxClose').click();

        cargar("Productos");
        
    }



function cargarGraficaExistenciasProducto(){
    var chart;
    var existenciasd=jQuery("#existenciasd").val();
    var existenciasp=jQuery("#existenciasp").val();
    var existenciasg=jQuery("#existenciasg").val();
    var existenciasv=jQuery("#existenciasv").val();
    var chartData = [
    {
        "sucursal": "DoorLine",
        "visits": existenciasd
    },
    {
        "sucursal": "Puebla",
        "visits": existenciasp
    },
    {
        "sucursal": "Guadalajara",
        "visits": existenciasg
    },
    {
        "sucursal": "Veracruz",
        "visits": existenciasv
    }
    ];
    // PIE CHART
    chart = new AmCharts.AmPieChart();
    chart.dataProvider = chartData;
    chart.titleField = "sucursal";
    chart.valueField = "visits";
    chart.colors=["#011EFF","#01FF41","#F7FF01","#FF0101"];	
    // LEGEND
    chart.labelRadius = 10;
    chart.labelText = "[[value]]";
    chart.depth3D = 10;
    chart.angle = 10;
    // WRITE
    chart.write("chartdiv4");
    }


function cargarGraficaCotizacionesProducto(){
    var chart;
    var cotp= jQuery("#cotizacionesp").val();
    var cotg= jQuery("#cotizacionesg").val();
    var cotv= jQuery("#cotizacionesv").val();

    var chartData = [
    {
        "sucursal": "Puebla",
        "visits": cotp
    },
    {
        "sucursal": "Guadalajara",
        "visits": cotg
    },
    {
        "sucursal": "Veracruz",
        "visits": cotv
    },
    ];
    // PIE CHART
    chart = new AmCharts.AmPieChart();
    chart.dataProvider = chartData;
    chart.titleField = "sucursal";
    chart.valueField = "visits";
    chart.colors=["#045FB4","#04B45F","#04B4AE"];
    // LEGEND
    chart.labelRadius = 10;
    chart.labelText = "[[value]]";
    chart.depth3D = 10;
    chart.angle = 10;
    // WRITE
    chart.write("chartdiv6");
    
    }


function loadJSON (url) {
 // create the request
  if (window.XMLHttpRequest) {
  // IE7+, Firefox, Chrome, Opera, Safari
       var request = new XMLHttpRequest();
  } else {
  // code for IE6, IE5
       var request = new ActiveXObject('Microsoft.XMLHTTP');
  }
  // load it
  // the last "false" parameter ensures that our code will wait before the
  // data is loaded
  request.open('GET', url, false);
  request.send();
  // parse and return the output
  return eval(request.responseText);
 }

function cargarGraficaVentasMensualesProducto(){
  //   load the data
  var idp = jQuery("#hdfidp").val();
  var chartData = loadJSON('../controlador/controladorVentas.php?id='+ idp);
  // SERIAL CHART
  chart = new AmCharts.AmSerialChart();
  chart.pathToImages = "http:www.amcharts.com/lib/images/";
  chart.dataProvider = chartData;
  chart.categoryField = "fecha";
  chart.dataDateFormat = "DD-MM-YYYY";
  // GRAPHS
  var graph1 = new AmCharts.AmGraph();
  graph1.valueField = "producto1";
  graph1.title = "Puebla";
  graph1.bullet = "round";
  graph1.bulletBorderColor = "#FFFFFF";
  graph1.bulletBorderThickness = 2;
  graph1.balloonText = "Piezas vendidas: [[producto1]]";
  graph1.lineThickness = 2;
  graph1.lineAlpha = 0.5;
  chart.addGraph(graph1);
  var graph2 = new AmCharts.AmGraph();
  graph2.valueField = "producto2";
  graph2.bullet = "round";
  graph2.title = "Guadalajara";
  graph2.balloonText = "Piezas vendidas: [[producto2]]";
  graph2.bulletBorderColor = "#FFFFFF";
  graph2.bulletBorderThickness = 2;
  graph2.lineThickness = 2;
  graph2.lineAlpha = 0.5;
  chart.addGraph(graph2);
  var graph3 = new AmCharts.AmGraph();
  graph3.valueField = "producto3";
  graph3.title = "Veracruz";      
  graph3.bullet = "round";
  graph3.balloonText = "Piezas vendidas: [[producto3]]";
  graph3.bulletBorderColor = "#FFFFFF";
  graph3.bulletBorderThickness = 2;
  graph3.lineThickness = 2;
  graph3.lineAlpha = 0.5;
  chart.addGraph(graph3);
  // CURSOR
  var chartCursor = new AmCharts.ChartCursor();
  chartCursor.cursorPosition = "mouse";
  chartCursor.zoomable = false;
  chartCursor.cursorAlpha = 0;
  chart.addChartCursor(chartCursor);                
  //  LEGEND
  var legend = new AmCharts.AmLegend();
  legend.useGraphSettings = true;
  chart.addLegend(legend);
  //CATEGORY AXIS
  chart.categoryAxis.parseDates = true;
  // WRITE
  chart.write("chartdiv2");
}


function cargarServiciosClienteProducto (){
var chart = AmCharts.makeChart("chartdivradar", {
    "type": "serial",
      "legend": {
        "maxColumns": 10,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10
    },
    "dataProvider": [{
        "sucursal": "PUEBLA",
        "capacitacion": 25,
        "vehiculo": 20,
        "cotizador": 21,
        "local": 3,
        "cotimp": 12,
        "lonas": 11
    }, {
        "sucursal": "GUADALAJARA",
        "capacitacion": 26,
        "vehiculo": 27,
        "cotizador": 22,
        "local": 0,
        "cotimp": 15,
        "lonas": 0.1
    }, {
        "sucursal": "VERACRUZ",
        "capacitacion": 28,
        "vehiculo": 29,
        "cotizador": 24,
        "local": 12,
        "cotimp": 10,
        "lonas": 17
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:11px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Capacitacion",
        "type": "column",
        "color": "#000000",
        "valueField": "capacitacion"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:11px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Vehiculo",
        "type": "column",
        "color": "#000000",
        "valueField": "vehiculo"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:11px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Cotizador OnLine",
        "type": "column",
        "color": "#000000",
        "valueField": "cotizador"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:11px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Local",
        "type": "column",
        "color": "#000000",
        "valueField": "local"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:11px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Cotizador impreso",
        "type": "column",
        "color": "#000000",
        "valueField": "cotimp"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:11px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Lonas",
        "type": "column",
        "color": "#000000",
        "valueField": "lonas"
    }],
    "categoryField": "sucursal",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
        "enabled": true
     }

});

}

function guardarFotoProducto(){
	var fileExtension = "";
	jQuery("#hdfop").val("uImg");
	//obtenemos un array con los datos del archivo
        var file = jQuery("#fileupload1")[0].files[0];
        //obtenemos el nombre del archivo
        var fileName = file.name;
        //obtenemos la extensión del archivo
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        //obtenemos el tamaño del archivo
        var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
        var fileType = file.type;
        var formData = new FormData(jQuery("#frmProducto")[0]);
        var message = ""; 
        //hacemos la petición ajax  
        jQuery.ajax({
            url: '../controlador/ControladorProductos.php',  
            type: 'POST',
            // Form data
            //datos del formulario
            data: formData,
            //necesario para subir archivos via ajax
            cache: false,
            contentType: false,
            processData: false,
            //mientras enviamos el archivo
            //beforeSend: function(){
            //    message = $("<span class='before'>Subiendo la imagen, por favor espere...</span>");
            //    showMessage(message)        
            //},
            //una vez finalizado correctamente
            success: function(data){
              //  message = $("<span class='success'>La imagen ha subido correctamente.</span>");
              //  showMessage(message);
                
                if(isImage(fileExtension))
                {
                    jQuery(".profilethumb").html("<img src='"+data+"' />");
                }
            },
            //si ha ocurrido un error
            error: function(){
		alert('no subio');
              //  message = $("<span class='error'>Ha ocurrido un error.</span>");
               // showMessage(message);
            }
        });

	//alert(jQuery('#fileupload1').val());
        //jQuery.ajax({
        //    method: "POST",
        //    url: "../controlador/ControladorProductos.php",
        //    data: jQuery('#frmImagenProducto').serialize()
        //    })
        //    .done(function( html ) {
        //     jQuery( "#ofilethumb" ).append( html );             
        //    });
}


//comprobamos si el archivo a subir es una imagen
//para visualizarla una vez haya subido
function isImage(extension)
{
    switch(extension.toLowerCase()) 
    {
        case 'jpg': case 'gif': case 'png': case 'jpeg':
            return true;
        break;
        default:
            return false;
        break;
    }
}

function eliminarFotoProducto(){

}




function cargarGaleriaProducto(){
var idpd=jQuery("#hdfidp").val();
//alert(idp);
var opd="dGalImg";

     //cargarVistaGaleriaProducto();
    jQuery.post("../controlador/ControladorProductos.php", {idp : idpd,opd:opd},
	 function(result){
         jQuery("#cboxContent").html(result);
	cargarVistaGaleriaProducto();
    	});
}





function cargarVistaGaleriaProducto() {
	var mySlider;	
	var err;
	
	try {
		jQuery("#imageSlideshow").sliderWallThumbs({
			cssClassSuffix: "",
			domainKeys: "",
			imageAlign: "middleCenter", /* topLeft, topCenter, topRight, middleLeft, middleCenter (default), middleRight, bottomLeft, bottomCenter, bottomRight */
			imageScaleMode: "scaleCrop", /* scale, scaleCrop (default), crop, stretch */
			loopContent: true,
			rssFeed: null,
			selectableContent: true,
			
			autoSlideShow: true,
			slideShowSpeed: 6,
			
			showTimer: true,
			timerPosition: "belowControlBar", /* aboveControlBar, belowControlBar (default) */
			
			autoHideControlBar: true,
			controlsHideDelay: 5,
			controlsShowHideSpeed: 0.2,
			showControlBar: true,
			
			autoHideNavButtons: true,
			showNavigationButtons: true,
			
			autoHideText: true,
			
			useGestures: true,
			useKeyboard: true,
			useMouseScroll: true,
			pauseOnMouseOver: false,
			disableAutohideOnMouseOver: false,
			
			transitionType: {
				optimizeForIpad: false,  /* If set to true, it would use only the Alpha and Slide effects. */
				random: false,
				transitions: [
					/*
 * 					Possible transitions: Alpha, AlphaBars, BrightSquares, Disc, FlipBars, Iris, LensGlare, None, Slide, SquareFade, SquareLight, Stripes, Waves, WaveScale, Wavy
 * 										Possible tween types: Back, Bounce, Circ, Cubic, Elastic, Expo (default), Quad, Quart, Quint, Sine
 * 															Possible easing types: easeIn, easeOut, easeInOut
 * 																				*/
					{
						name: "Alpha",
						duration: 0.75,
						tweenType: "Expo",
						easing: "easeInOut"
					}, 
					{
						name: "AlphaBars",
						duration: 1,
						tweenType: "Expo",
						easing: "easeOut",
						direction: "l2r",
						random: false,
						barWidth: 50
					}, 
					{
						name: "BrightSquares",
						duration: 1,
						tweenType: "Expo",
						easing: "easeOut",
						direction: "tl2br",
						random: false,
						tileWidth: 100,
						tileHeight: 100
					}, 
					{
						name: "Disc",
						duration: 1,
						tweenType: "Expo",
						easing: "easeInOut"
					}, 
					{
						name: "FlipBars",
						duration: 1,
						tweenType: "Expo",
						easing: "easeOut",
						direction: "l2r",
						random: false,
						barWidth: 80
					}, 
					{
						name: "Iris",
						duration: 1,
						tweenType: "Expo",
						easing: "easeInOut"
					}, 
					{
						name: "LensGlare",
						duration: 1,
						tweenType: "Expo",
						easing: "easeOut",
						gradientWidth: 100,
						margins: 20,
						lightOffset: 0,
						lightDirection: false
					}, 
					/*
 * 					{
 * 										name: "None" 
 * 															},
 * 																				*/
					{
						name: "Slide",
						duration: 0.75,
						tweenType: "Expo",
						easing: "easeInOut",
						direction: "horizontal"
					}, 
					{
						name: "SquareFade",
						duration: 1.5,
						tweenType: "Expo",
						easing: "easeOut",
						direction: "tl2br",
						random: false,
						tileWidth: 100,
						tileHeight: 100
					}, 
					{
						name: "SquareLight",
						duration: 1,
						tweenType: "Expo",
						easing: "easeOut",
						direction: "tl2br",
						random: false,
						tileWidth: 100,
						tileHeight: 100
					}, 
					{
						name: "Stripes",
						duration: 1.5,
						tweenType: "Expo",
						easing: "easeInOut",
						direction: "l2r",
						random: false,
						barWidth: 50
					}, 
					{
						name: "Waves",
						duration: 1,
						tweenType: "Expo",
						easing: "easeIn",
						direction: "l2r",
						random: false,
						barWidth: 60
					}, 
					{
						name: "WaveScale",
						duration: 1.5,
						tweenType: "Expo",
						easing: "easeOut",
						maxWidth: 100
					}, 
					{
						name: "Wavy",
						duration: 1,
						tweenType: "Expo",
						easing: "easeOut",
						direction: "l2r",
						random: false,
						barWidth: 60
					}
				]
			},
			
			init: null,
			contentLoadStart: null,
			contentLoadComplete: null,
			contentLoadError: null,
			contentShow: null,
			contentHide: null,
			slideClick: null,
			slideshowStart: null,
			slideshowStop: null,
			pageChange: null
		});
		
		mySlider = jQuery("#imageSlideshow").data("sliderWall");
		
	} catch(err) { /* handle any error messages */ }
}

