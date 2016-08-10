function salir(){
                jQuery.post("acceso.php", function(result){
                        jQuery("#mainwrapper").html(result);
                        document.location='../index.php'
                });
            }
    
function cargar(opcion)
   {
    var busqueda = jQuery("#buscaCliente").val();
                switch(opcion){
                 case "Clientes":
                             jQuery('#pageheaderCliente').css('display','block');
                             jQuery('#pageheaderProducto').css('display','none');
                             jQuery('#pageheaderPrincipal').css('display','none');
                             jQuery('#pageheaderSeguimientos').css('display','none');
			                 jQuery('#pageheaderEmpleados').css('display','none');
                             jQuery('#pageheaderMetas').css('display','none');
                             jQuery('#mensual').css('display','none');
                             jQuery('#bntcons').css('display','none');
                       break;
                 case "Productos":
                             jQuery('#pageheaderCliente').css('display','none');
                             jQuery('#pageheaderProducto').css('display','block');
                             jQuery('#pageheaderPrincipal').css('display','none');
                             jQuery('#pageheaderSeguimientos').css('display','none');
			                 jQuery('#pageheaderEmpleados').css('display','none');
                             jQuery('#pageheaderMetas').css('display','none');
                             jQuery('#mensual').css('display','none');
                             jQuery('#bntcons').css('display','none');
                       break;
                 case "Busqueda":
                             jQuery('#pageheaderCliente').css('display','block');
                             jQuery('#pageheaderProducto').css('display','none');
                             jQuery('#pageheaderPrincipal').css('display','none');
                             jQuery('#pageheaderSeguimientos').css('display','none');
                             jQuery('#pageheaderEmpleados').css('display','none');
                             jQuery('#pageheaderMetas').css('display','none');
                             jQuery('#mensual').css('display','none');
                             jQuery('#bntcons').css('display','none');
                       break;
                 case "Seguimientos":
                             jQuery('#pageheaderCliente').css('display','none');
                             jQuery('#pageheaderProducto').css('display','none');
                             jQuery('#pageheaderPrincipal').css('display','none');
                             jQuery('#pageheaderSeguimientos').css('display','block');
                             jQuery('#pageheaderEmpleados').css('display','none');
                             jQuery('#pageheaderMetas').css('display','none');
                             jQuery('#mensual').css('display','none');
                             jQuery('#bntcons').css('display','none');
                       break;
                 case "Agentes":
                             jQuery('#pageheaderCliente').css('display','none');
                             jQuery('#pageheaderProducto').css('display','none');
                             jQuery('#pageheaderPrincipal').css('display','none');
                             jQuery('#pageheaderSeguimientos').css('display','none');
                             jQuery('#pageheaderEmpleados').css('display','block');
                             jQuery('#pageheaderMetas').css('display','none');
                             jQuery('#mensual').css('display','none');
                             jQuery('#bntcons').css('display','none');
                       break;

                  case "Metas":
                             jQuery('#pageheaderCliente').css('display','none');
                             jQuery('#pageheaderProducto').css('display','none');
                             jQuery('#pageheaderPrincipal').css('display','none');
                             jQuery('#pageheaderSeguimientos').css('display','none');
                             jQuery('#pageheaderEmpleados').css('display','none');
                             jQuery('#pageheaderMetas').css('display','block');
                             jQuery('#mensual').css('display','none');
                             jQuery('#bntcons').css('display','none');
                       break;      

                  default:
                             jQuery('#pageheaderCliente').css('display','none');
                             jQuery('#pageheaderProducto').css('display','none');
                             jQuery('#pageheaderPrincipal').css('display','block');
                             jQuery('#pageheaderSeguimientos').css('display','none');
                             jQuery('#pageheaderEmpleados').css('display','none');
                             jQuery('#mensual').css('display','none');
                             jQuery('#bntcons').css('display','none');


                }
                jQuery(".maincontentinner").html("<img src='images/loaders/loading.gif' style='Position:Absolute; right:50%;'>");
    jQuery.post("vw_Cuerpo.php",{op: opcion, busqueda:busqueda}, function(result){
                        jQuery(".maincontentinner").html(result);
                });

    }

function consultarSegMes(){
            var mes = jQuery('#mes').val();
          
                
                jQuery.post("../vista/vw_vistaseguimientoMensual.php", {mes:mes}, function(result){
                    jQuery('#mensual').css('display','block');
                    jQuery('#bntcons').css('display','block'); //style="Position:Absolute; top:120%"
                 jQuery(".maincontentinner").html(result);
        });
                
}    

function cargarVistaCliente(){
var idpD=jQuery("#hdfidp").val();
jQuery.post("vw_DatosCliente.php", 
    {idp:idpD,op:1},
        function(result){
                        jQuery("#cboxLoadedContent").html(result);
                });
}



function cargarSeguimientoCliente(){
var idpD=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorSeuimientoCliente.php", 
    {idp:idpD,op:1},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
}    

function subirDatosSeguimientoCliente(asu,obs,tipact,fecprog,fecreal,idseg,estado,area,lin){
var idpD=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorSeuimientoCliente.php", 
    {idp:idpD,vasu:asu,vobs:obs,vtipact:tipact,vfecprog:fecprog,vfecreal:fecreal,vidseg:idseg,vestado:estado,varea:area,vlinea:lin,op:1},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
}    


function cargarEdicionDatosCliente(opc){
var idpD=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorEdicionCliente.php", 
    {idp:idpD,op:opc},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
}    




function cargarNuevoCliente(){
jQuery.post("../vista/vw_vistaNuevoCliente.php", 
        function(result){
                        jQuery(".maincontentinner").html(result);
                });
}    

function cargarSeguimientos(){
jQuery.post("../vista/vw_vistasSeguimientoGer.php", 
        function(result){
            jQuery('#mensual').css('display','none');
                       jQuery('#bntcons').css('display','none');
                        jQuery(".maincontentinner").html(result);
                });
} 

function cargarSeguimientosMes(){
jQuery.post("../vista/vw_vistaMesSeguimiento.php", 
        function(result){
            jQuery('#mensual').css('display','block');
            jQuery('#bntcons').css('display','block');
                        jQuery(".maincontentinner").html(result);
                });
}    


function cargarSegMes(){
jQuery.post("../vista/vw_vistaseguimientoMensual.php", 
        function(result){
                        jQuery(".maincontentinner").html(result);
                });
}    

function cargarSeguimientosVendedor(){
jQuery.post("../vista/vw_Cuerpo.php", 
        function(result){
                        jQuery(".maincontentinner").html(result);
                });
}    


function cargarSeguimientAgte(emp){
jQuery(".maincontentinner").html("<img src='images/loaders/loading.gif' style='Position:Absolute; right:50%;'>");
jQuery.post("../vista/vw_vistaConsultaSeguimientoCte.php",
        {em:emp}, 
        function(result){
                        jQuery(".maincontentinner").html(result);
                });
}  

function actulizarFormularioSeguimiento(){
     
            var i = jQuery('#hdfidp').val();
	    var c = jQuery('#hdfcte').val();
            var as = jQuery('#asunto').val();
            var obs = jQuery('#observaciones').val();
            var fp = jQuery('#fechaprog').val();
            var fr = jQuery('#fechareal').val();
            var ta = jQuery('#tipoact').val();
            var ntf = jQuery('#notif').val();
            var ids = jQuery('#hdfIdSeg').val();
            var edo = jQuery('#est').val();
            var lin = jQuery('#linea').val();

        var opc=2;
            if(i == '' && as == '' && obs == '' && fp == '' && ta == '' && ntf == ''&& edo == '') {
                return false;
            }else{
                jQuery.post("../controlador/actualizarSeguimientoCliente.php", 
                    {idp: i, asunto: as, observaciones: obs, fechareal:fr, fechaprog: fp, tipoact:ta, notif: ntf,edo:edo,op:opc,vids:ids,cte:c,lin:lin},
                     function(result){
                        jQuery("#divDatosCliente").html(result);
                });
            }
    }    


function cargarCapacitacionesCliente(){
var idpD=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorCapacitacionesCliente.php", 
    {idp:idpD,op:1},
        function(result){
                        jQuery("#divDatosCliente").html(result);
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



function cargarServiciosCliente(){
var idpD=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorServiciosCliente.php", 
    {idp:idpD,op:1},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
}    



function cargarServiciosClienteProducto(){
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

function guardarFotoProducto(op){
	var fileExtension = "";
	jQuery("#hdfop").val(op);
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



function guardarFichaProducto(op){
    var fileExtension = "";
    jQuery("#hdfop").val(op);
        var file = jQuery("#fichtec")[0].files[0];
        var fileName = file.name;
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        var fileSize = file.size;
        var fileType = file.type;
        var formData = new FormData(jQuery("#frmProducto")[0]);
        var message = ""; 
     //   alert('Enviando datos');

	
        jQuery.ajax({
            url: '../controlador/ControladorProductos.php',  
            type: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data){
               alert('Si subio, pero aun falta que se actualice el enlace de la ficha'); 
                if(isImage(fileExtension))
                {
                    jQuery(".profilethumb").html("<img src='"+data+"' />");
                }
            },
            error: function(){
        alert('no subio');
            }
        });
	
}





//comprobamos si el archivo a subir es una imagen
//para visualizarla una vez haya subido
function isImage(extension)
{
    switch(extension.toLowerCase()) 
    {
        case 'jpg': case 'gif': case 'png': case 'jpeg': case 'png':
            return true;
        break;
        default:
            return false;
        break;
    }
}

function eliminarFotoProducto(){

}



function cargarGaleriaProducto(op){
var idp=jQuery("#hdfidp").val();
var cdpr=jQuery("#codigop").val();
jQuery.post("../controlador/ControladorProductos.php", 
	{idpd:idp,opd:op,cdp:cdpr},
		function(result){
                        jQuery("#cboxContent").html(result);
			cargarVistaGaleriaProducto(); 
                });
}

function cargarGaleriaProductoMiniatura(){
var idp=jQuery("#hdfidp").val();
var cdpr=jQuery("#codigop").val();
var op="dGalImg";
jQuery.post("../controlador/ControladorProductos.php", 
  {idpd:idp,opd:op,cdp:cdpr},
    function(result){
                        jQuery("#GaleriaMiniatura").html(result);
      cargarVistaGaleriaProducto(); 
                });
}


function cargarVistaGaleriaProducto() {
	var mySlider;	
	var err;
//	alert('cargando estilo');	
//	try {
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
 *  * 					Possible transitions: Alpha, AlphaBars, BrightSquares, Disc, FlipBars, Iris, LensGlare, None, Slide, SquareFade, SquareLight, Stripes, Waves, WaveScale, Wavy
 *   * 										Possible tween types: Back, Bounce, Circ, Cubic, Elastic, Expo (default), Quad, Quart, Quint, Sine
 *    * 															Possible easing types: easeIn, easeOut, easeInOut
 *     * 																				*/
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
 *  * 					{
 *   * 										name: "None" 
 *    * 															},
 *     * 																				*/
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
		
	//} catch(err) {  handle any error messages  }
}

function eliminarRecursoImagen (idrp,op){
var idp=jQuery("#hdfidp").val();
var cdpr=jQuery("#codigop").val();

jQuery.post("../controlador/ControladorProductos.php", 
  {
    idpd:idp,opd:op,cdp:cdpr,idprd:idrp},
    function(result){
                        jQuery("#cboxContent").html(result);
      cargarVistaGaleriaProducto(); 
                });
}




function eliminarImagenProducto (op){
var idp=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorProductos.php", 
  {
    idpd:idp,opd:op},
    function(result){
         jQuery(".profilethumb").html("<img src='"+result+"' />");
                });
}



   function cargarClientes(){
        
        //Replaces data-rel attribute to rel.
        //We use data-rel because of w3c validation issue
        jQuery('a[data-rel]').each(function() {
            jQuery(this).attr('rel', jQuery(this).data('rel'));
        });
        
        jQuery("#medialist a").colorbox();
        
    }


    function cargarListaClientes(){
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





function cargarClientesSucursal (su){
  jQuery.post("vw_Cuerpo.php",
  {
    op:"Clientes",suc:su,limpiaSuc:"S"},
    function(result){
      jQuery(".maincontentinner").html(result);
                });
}


function cargarClientesPagina(pg){
  jQuery.post("vw_Cuerpo.php",
  {
    op:"Clientes",pagina:pg},
    function(result){
      jQuery(".maincontentinner").html(result);
                });
}

function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function cargarGridCapacitaciones() {
   jQuery('#gridCapacitaciones').DataTable();
}

function cargarGridServiciosCliente() {
   jQuery('#gridServiciosCliente').DataTable();
}


function cargarGridSeguimientoCliente() {
   jQuery('#gridSeguimiento').DataTable();
}

function cargarGridSeguimientoVendedor() {
   jQuery('#gridSeguimientovend').DataTable();
}

function cargarGridSeguimientoCte() {
   jQuery('#gridSeguimientocte').DataTable();
}

function cargarGridMetaAgente() {
   jQuery('#gridMetaAgente').DataTable();
}

    function enviaFormularioCapacitaciones(){
     
            var i = jQuery('#hdfidp').val();
            var f = jQuery('#fecha').val();
            var h = jQuery('#hora').val();
            var c = jQuery('#capacitacion').val();
            var o = jQuery('#comentario').val();
            var n = jQuery('#instructor').val();
	    var opc=2;
            if(i == '' && f == '' && h == '' && c == '' && o == '' && n == '') {
                return false;
            }else{
                jQuery.post("../controlador/ControladorCapacitacionesCliente.php", {idp: i, fecha: f, hora: h, cap: c, coment: o, instr: n,op:opc}, function(result){
                        jQuery("#divDatosCliente").html(result);
                });
            }
    }





function enviaFormularioServicios(){
     
            var i = jQuery('#hdfidp').val();
            var f = jQuery('#fecha').val();
            var c = jQuery('#servicio').val();
            var o = jQuery('#comentario').val();
            jQuery('#op').val('2');
        var opc=2;
            if(i == '' && f == '' && c == '' && o == '') {
                return false;
            }else{
            
        var formData = new FormData(jQuery("#frmCliente")[0]);
        jQuery.ajax({
            url: '../controlador/ControladorServiciosCliente.php',  
            type: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data){
                jQuery("#divDatosCliente").html(data);
            },
            error: function(){
            }
        });
     }
} 
 

function guardarLogoCliente(op){
    
    var fileExtension = "";
    jQuery("#hdfop").val(op);
    //obtenemos un array con los datos del archivo
        var file = jQuery("#uploadedfile")[0].files[0];
        //obtenemos el nombre del archivo
        var fileName = file.name;
        //obtenemos la extensión del archivo
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        //obtenemos el tamaño del archivo
        var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
        var fileType = file.type;
        var formData = new FormData(jQuery("#frmCliente")[0]);
        var message = ""; 
        //hacemos la petición ajax  
        jQuery.ajax({
            url: '../controlador/ControladorClientes.php',  
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
}



function enviaFormularioDatosCliente(){
    	    var idc = jQuery('#hdfidp').val(); 
            var calle = jQuery('#calle').val();
            var noex = jQuery('#noex').val();
            var noin = jQuery('#noin').val();
            var col = jQuery('#colonia').val();
            var cp = jQuery('#cp').val();
            var ciu = jQuery('#ciudad').val();
            var edo = jQuery('#estado').val();
            var lat = jQuery('#lat').val();
            var lon = jQuery('#lon').val();
            var coment = jQuery('#coment').val();
            var agt = jQuery('#agente').val();
            var nomcte = jQuery('#nombre').val();
            var apell = jQuery('#apellido').val();
            var email = jQuery('#correo').val();
            var email2 = jQuery('#correoalterno').val();
            var tel1 = jQuery('#telefono').val();
            var tel2 = jQuery('#celular').val();
            var web = jQuery('#web').val();
            var fb = jQuery('#fb').val();
            var nivcte = jQuery('#nivel').val();
            var lin1 = jQuery('#linea').val();
            var lin2 = jQuery('#segundalinea').val();
            var lin3 = jQuery('#terceralinea').val();
            var lin4 = jQuery('#cuartalinea').val();
            var lin5 = jQuery('#quintalinea').val();
            var denomcom = jQuery('#empresa').val();
            var razsoc = jQuery('#razon').val();
            var rfc = jQuery('#rfc').val();
            var pass = jQuery('#pass').val();
        var opc=2;
            if(razsoc == '') {
                return false;
            }else{
                jQuery.post("../controlador/cargarEdicionDatosCliente.php", {calle: calle, noex: noex, noin: noin, colonia: col, cp: cp,ciudad: ciu, estado: edo, lat:lat, lon:lon, com:coment, agt:agt, nomcte:nomcte, apell:apell, correo:email, correoalterno:email2, telefono:tel1, celular:tel2, web:web, fb:fb, nivel:nivcte, linea:lin1, segundalinea:lin2, terceralinea:lin3,cuartalinea:lin4,quintalinea:lin5,hdfip:idc, denomcom:denomcom, razsoc:razsoc,  rfc:rfc,pass:pass}, function(result){
                        jQuery("#divDatosCliente").html(result);
                });
            }
    }




function enviaDatosClienteNuevo(){
            
            var calle = jQuery('#calle').val();
            var noex = jQuery('#noex').val();
            var noin = jQuery('#noin').val();
            var col = jQuery('#colonia').val();
            var cp = jQuery('#cp').val();
            var ciu = jQuery('#ciudad').val();
            var edo = jQuery('#estado').val();
            var lat = jQuery('#lat').val();
            var lon = jQuery('#lon').val();
            var coment = jQuery('#coment').val();
            var agte = jQuery('#agente').val();
            var email = jQuery('#correo').val();
            var email2 = jQuery('#correoalterno').val();
            var tel1 = jQuery('#telefono').val();
            var tel2 = jQuery('#celular').val();
            var web = jQuery('#web').val();
            var fb = jQuery('#fb').val();
            var nom = jQuery('#nombre').val();
            var ape = jQuery('#apellido').val();
            var nomcom = jQuery('#empresa').val();
            var razsoc = jQuery('#razon').val();
            var rfc = jQuery('#rfc').val();
            var lin1 = jQuery('#linea').val();
            var lin2 = jQuery('#segundalinea').val();
            var lin3 = jQuery('#terceralinea').val();
            var lin4 = jQuery('#cuartalinea').val();
            var lin5 = jQuery('#quintalinea').val();
            
        var opc=2;
            if( nomcom == '' && razsoc == '') {
                return false;
            }else{
                jQuery.post("../controlador/cargarDatosClienteNuevo.php", {calle: calle, noex: noex, noin: noin, colonia: col, cp: cp,ciudad: ciu, estado: edo, lat:lat, lon:lon, com:coment, ag:agte, correo:email, correoalterno:email2, telefono:tel1, celular:tel2, web:web, fb:fb,nom:nom,ape:ape,nomcom:nomcom,razsoc:razsoc,rfc:rfc, li1:lin1,li2:lin2,li3:lin3,li4:lin4,li5:lin5}, function(result){
                        alert('Cliente '+razsoc+ 'registrado exitosamente');
                });
                
            }cargar('Clientes');
    }




  function loadMapCliente() {
       var map;
       var lati;
       var lon;
       var markers = [];
       lati = jQuery('#lat').val();
       lon = jQuery('#lon').val();
        
        var pos = new google.maps.LatLng(lati,lon);
     map = new google.maps.Map(document.getElementById('map'),{
     zoom: 12
  });
map.setCenter(pos);
      var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lati,lon),
                        clickable: true,
                        draggable: true,
                        flat: true
 
          });
 
                    markers.push(marker);     
                    
    

  google.maps.event.addListener(map, 'click', function(event) {
    jQuery('#lat').val(map.getCenter().lat());
    jQuery('#lon').val(map.getCenter().lng());
    
    
});
}
    

 function loadMapClienteNuevo() {
       var map;
       var lati;
       var lon;
       var markers = [];
       lati = 19.3600609764726;
       lon = -99.1849136352539;
        
        var pos = new google.maps.LatLng(lati,lon);
     map = new google.maps.Map(document.getElementById('map'),{
     zoom: 9
  });
map.setCenter(pos);
   
                    
    

  google.maps.event.addListener(map, 'click', function(event) {
    jQuery('#lat').val(map.getCenter().lat());
    jQuery('#lon').val(map.getCenter().lng());
    
    
});
}


function enviarFormularioSeguimiento(){
     
            var i = jQuery('#hdfidp').val();
	    var c = jQuery('#hdfcte').val();
            var as = jQuery('#asunto').val();
            var obs = jQuery('#observaciones').val();
            var fp = jQuery('#fechaprog').val();
            var fr = jQuery('#fechareal').val();
            var ta = jQuery('#tipoact').val();
            var ntf = jQuery('#notif').val();
            var edo = jQuery('#est').val();
	    var lin= jQuery('#linea').val();
        var opc=2;
            if(i == '' && as == '' && obs == '' && fp == '' && ta == '' && ntf == '' && edo == '') {
                return false;
            }else{
                jQuery.post("../controlador/cargarSeguimientoCliente.php", {idp: i, asunto: as, observaciones: obs, fechareal:fr, fechaprog: fp, tipoact:ta, notif: ntf, edo:edo,op:opc,cte:c,lin:lin}, function(result){
                        jQuery("#divDatosCliente").html(result);
                });
            }
    }      


    function chequearEnter(event) {
    if (event.keyCode == 13) {  enviaDatos(); }
}



function cargarBuscadorCliente(event){
if (event.keyCode == 13) {  cargar('Busqueda'); }
} 

function clienteBusquedaSeleccionado(event, ui)
{
    var valor = '#cte'+ui.item.value;
    var cliente = ui.item.value;
    jQuery(valor).click();
    event.preventDefault();
}

function clienteSeleccionaFoco(event, ui)
{
    var producto = ui.item.value;
    jQuery("#buscaCliente").val(producto.descripcion);
    event.preventDefault();
}


function cargarClientesEmpleado(opcion,empleado)
{
                
                jQuery('#pageheaderCliente').css('display','block');
                jQuery('#pageheaderProducto').css('display','none');
                jQuery('#pageheaderPrincipal').css('display','none');
                jQuery(".maincontentinner").html("<img src='images/loaders/loading.gif' style='Position:Absolute; right:50%;'>");
                jQuery.post("vw_Cuerpo.php",{op: opcion,emp:empleado}, function(result){
                        jQuery(".maincontentinner").html(result);
                });

}


function cargarSeguimientoAgente(agt,mes){
jQuery.post("../vista/vw_detalleSeguimientosAgente.php",{agnt:agt,mesc:mes},
        function(result){
                        jQuery(".maincontentinner").html(result);
                });
}  
 

   function cargarTablaDetalleSeguimientoClientesAgente(){

	var ida = jQuery("#hdfAgtCons").val();
	var mes = jQuery("#hdfMesCons").val();
        jQuery.post("../controlador/ControladorTablaSeguimientoAgenteCliente.php", {id: ida, ms: mes}, function(result){
                        jQuery("#tablaDetalleSeguimientoClientesAgente").html(result);
			cargarGridSeguimientoCte();
                });
    }



function cargarLlamadasCliente(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalLlamadasCliente.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}


function cargarLlamadasCliente(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalLlamadasCliente.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}



function cargarRotulacionCliente(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalServiciosCliente.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}


function cargarCotizacionesCliente(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalCotizacionesClienteFinal.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}


function cargarPuntosClienteDetalle(nc){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalPuntosCliente.php?idp='+nc,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}

function cargarCotizacionesAgenteCliente(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalCotizacionesCliente.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}

function cargarLonasCliente(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalServiciosCliente.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}




function cargarNewsCliente(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalNewsCliente.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}



function cargarNewsClienteDetalle(){
var idpD=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorNewsCliente.php", 
    {idp:idpD,op:1},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
}    


function cargarVistaCotizacionesClienteFinal(){
var idpD=jQuery("#hdfidp").val();
var lin=jQuery("#hdflinea").val();
jQuery.post("../controlador/ControladorCotizacionesClienteFinal.php", 
    {idp:idpD,lin:lin},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
}    


function cargarVistaPuntosCliente(){
var idpD=jQuery("#hdfidp").val();

jQuery.post("../controlador/ControladorPuntosCliente.php", 
    {idp:idpD},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
} 

function cargarVistaCotizacionesCliente(){
var idpD=jQuery("#hdfidp").val();
jQuery.post("../controlador/ControladorCotizacionesCliente.php", 
    {idp:idpD,op:1},
        function(result){
                        jQuery("#divDatosCliente").html(result);
                });
}    


function cargarCapacitacionesClienteDetalle(nc,linea){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalCapacitacionesCliente.php?idp='+nc+'&linea='+linea,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}



function cargarVisitasCliente(nc){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalLlamadasCliente.php?idp='+nc,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}


function cargarInformacionCliente(nc){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalCliente.php?idp='+nc+'op='+1,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}




Shadowbox.init({ language: "es", players:  ['img', 'html', 'iframe', 'qt', 'wmp', 'swf', 'flv'] });



function modalSeguimientos(){
    setTimeout(function() {
        Shadowbox.open({
            content:    '<div id="clickeable" onclick="location.href="../vista/vw_detalleSeguimientosAgente.php";" ></div>', //><img src="images/oferta.jpg">
            player:     "html",
            title:      "Oferta",
            width:      492,
            height:     367
        });
    }, 50);
}




    function cargarClientesTop(mes,ida){

        jQuery.post("../controlador/ControladorTablaSeguimientoAgenteCliente.php", {id: ida, ms: mes}, function(result){
                        jQuery(".maincontentinner").html(result);
                        cargarGridSeguimientoCte();
                });
    }







function cargaTablaDetalleAgente(ida,capa,ms){
jQuery.post("../controlador/controladorTablaDetalleAgente.php",
    {idp:ida,mes:ms},
        function(result){
                        jQuery("#"+capa).html(result);
                });
}





function cargarRevisionClientes(od,ag,ms){
                    Shadowbox.open({
                                content:    '../vista/vw_vistaModalRevisionClientes.php?mes='+ms+'&agt='+ag+'&ord='+od,
                                            player:     "iframe"
                            });
}






function cargarDatoscte(nc){
//jQuery.post("../vista/vw_DatosCliente.php",{idp:nc,op:1},
        //function(result){

            Shadowbox.open({
            content:    '../vista/vw_vistaModalDatosCliente.php?idp='+nc,
            player:     "iframe"
         
        });//jQuery(".maincontentinner").html(result);
            
  //              });
}








function cargarContenidoModalRevisionClientesCliente(agt,ord,lin){
jQuery.post("../controlador/controladorRevisionClientes.php", 
    {agt:agt,ord:ord,lin:lin},
        function(result){
                        jQuery("#contenidomodal").html(result);
                });
}

function cargarContenidoModalRevisionClientesClienteLinea(agt,ord,lin,columnaord){
jQuery.post("../controlador/controladorRevisionClientesLinea.php", 
    {agt:agt,ord:ord,lin:lin,columnaord:columnaord},
        function(result){
                        jQuery("#contenidomodal").html(result);
                });
}

function cargarRevisionAgenres(ida){
                    Shadowbox.open({
                                content:    '../vista/vw_vistaModalRevisionAgente.php?ida='+ida,
                                            player:     "iframe"
                            });
}



function cargarRevisionSucursal(ids,lin){
                    Shadowbox.open({
                                content:    '../vista/vw_vistaModalRevisionSucursal.php?ids='+ids+'&lin='+lin,
                                            player:     "iframe"
                            });
}


function cargarRevisionLineaAgente(ida,lin){
                    Shadowbox.open({
                                content:    '../vista/vw_vistaModalRevisionAgenteLinea.php?ida='+ida+'&lin='+lin,
                                            player:     "iframe"
                            });
}

function cargarRevisionMetasClientes(ida,lin){
                    Shadowbox.open({
                                content:    '../vista/vw_vistaModalRevisionCliente.php?ida='+ida+'&lin='+lin,
                                            player:     "iframe"
                            });
}


function cargaTablaDetalleProductosCliente(ida,lin){
var per=jQuery("#hdfper").val();
jQuery.post("../controlador/controladorTablaVentaProductosClientes.php",
    {idc:ida,lin:lin,per:per},
        function(result){
                        jQuery("#tabladetallada").html(result);
                });
}



function cargaTablaDetalleProductosAgente(ida){

var per=jQuery("#hdfper").val();
var lin=jQuery("#hdflin").val();

jQuery.post("../controlador/controladorTablaVentaProductosVendedores.php",
    {idc:ida,lin:lin,per:per},
        function(result){
                        jQuery("#tabladetallada").html(result);
                });
}


function cargaTablaDetalleClientesAgenteLinea(ida,mes,lin){

jQuery.post("../controlador/controladorTablaDetalleAgenteLinea.php",
    {ida:ida,lin:lin,mes:mes},
        function(result){
                        jQuery("#tabladetalladaagentes").html(result);
                });
}


function cargarRevisionClientesLinea(od,ag,ms,lin){
                    Shadowbox.open({
                                content:    '../vista/vw_vistaModalRevisionClientesLinea.php?mes='+ms+'&agt='+ag+'&ord='+od+'&lin='+lin,
                                            player:     "iframe"
                            });
}




function cargartablapuntosacumulados(idpD){
jQuery.post("../controlador/controladorTablaPuntosAcumulados.php", 
    {idp:idpD},
        function(result){
                        jQuery("#divpuntosacumulados").html(result);
                });
} 




function cargartablapremiosdisponibles(idpD,puntos){
jQuery.post("../controlador/controladorTablaPremiosDisponibles.php", 
    {idp:idpD,puntos:puntos},
        function(result){
                        jQuery("#divpremiosdisponibles").html(result);
                });
} 



function cargarrevisionsucursal(linea){

jQuery.post("../controlador/controladorMetasSucursales.php", 
    {linea:linea},
        function(result){
                        jQuery("#divsucursales").html(result);
                });
} 




function cargaTablaDetalleSucursal(capa,ids,lin){
jQuery.post("../controlador/controladorTablaDetalleSucursal.php",
    {ids:ids,lin:lin},
        function(result){
                        jQuery("#"+capa).html(result);
                });
}





function consultaClientesMes(){
var mes=jQuery("#selmescons").val();
var anio=jQuery("#selanio").val();
jQuery.post("../controlador/controladorCambioMesConsulta.php", 
    {mes:mes,anio:anio},
        function(result){
                        cargar('Clientes');
                });
}



function consultaClientesMesTabla(){
var mes=jQuery("#selmescons").val();
var anio=jQuery("#selanio").val();
jQuery.post("../controlador/controladorCambioMesConsulta.php", 
    {mes:mes,anio:anio},
        function(result){
                        cargarContenidoRevisionClientes();
                });
}



function cargarContenidoRevisionClientes(){

var mes=jQuery("#mes").val();
var agt=jQuery("#agt").val();
var ord=jQuery("#ord").val();
jQuery.post("../controlador/controladorRevisionClientes.php", 
    {mes:mes,agt:agt,ord:ord},
        function(result){
                        jQuery("#contenidomodal").html(result);
                });
}



function consultaClientesMesTablaLinea(){
var mes=jQuery("#selmescons").val();
var anio=jQuery("#selanio").val();
jQuery.post("../controlador/controladorCambioMesConsulta.php", 
    {mes:mes,anio:anio},
        function(result){
                        cargarContenidoRevisionClientesLinea();
                });
}



function cargarContenidoRevisionClientesLinea(){

var mes=jQuery("#mes").val();
var agt=jQuery("#agt").val();
var ord=jQuery("#ord").val();
var ord=jQuery("#columnaord").val();
jQuery.post("../controlador/controladorRevisionClientesLinea.php", 
    {mes:mes,agt:agt,ord:ord},
        function(result){
                        jQuery("#contenidomodal").html(result);
                });
}





function cargarAnalisisProductos(){
                jQuery.post("../controlador/controladorTablaAnalisisProducto.php", function(result){
                        jQuery("#mainwrapper").html(result);
                        location.href='vista/vw_dashboard.php';
                });
            }