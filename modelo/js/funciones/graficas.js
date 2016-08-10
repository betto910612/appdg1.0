function cargarGraficaSeguimientoActividadesDiariasAgente(){
var ida = jQuery("#hdfAgtCons").val();
var mes = jQuery("#hdfMesCons").val();
var chartData = loadJSON('../controlador/controladorActividadesDiariasAgentes.php?id='+ ida+'&mes='+mes);
var chart = AmCharts.makeChart("chardiva", {
 "type": "serial",
    "theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10
    },
    "dataProvider":chartData,
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Llamadas",
        "type": "column",
        "color": "#000000",
        "valueField": "Llamadas"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Visitas",
        "type": "column",
        "color": "#000000",
        "valueField": "Visitas"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Rotulaciones",
        "type": "column",
        "color": "#000000",
        "valueField": "Rotulaciones"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Lonas",
        "type": "column",
        "color": "#000000",
        "valueField": "Lonas"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Capacitaciones",
        "type": "column",
        "color": "#000000",
        "valueField": "Capacitaciones"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Cotizaciones",
        "type": "column",
        "color": "#000000",
        "valueField": "Cotizaciones"
    },{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Prospectos",
        "type": "column",
        "color": "#000000",
        "valueField": "Prospectos"
    },{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Reactivaciones",
        "type": "column",
        "color": "#000000",
        "valueField": "Reactivaciones"
    }],
    "categoryField": "year",
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






function cargarGraficaSeguimientoActividadesAcumuladasAgente (){
  var ida = jQuery("#hdfAgtCons").val();
  var mes = jQuery("#hdfMesCons").val();
  var datos = loadJSON('../controlador/controladorActividadesAcumuladasAgentes.php?id='+ ida+'&mes='+mes);
  var chart = AmCharts.makeChart("chardivc", {
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    }, "dataProvider":datos ,
    "valueAxes": [{
        "integersOnly": true,
        "reversed": false,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "MONTO"
    }],
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "CCTV",
        "valueField": "CCTV",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "ALARMA",
        "valueField": "ALARMA",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "CONTROL DE ACCESO",
        "valueField": "CAC",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "CERCAS",
        "valueField": "CER",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "MOTORES",
        "valueField": "MOT",
    "fillAlphas": 0
    }]
    ,
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "fillColor": "#000000",
        "gridAlpha": 0,
        "position": "top"
    },
    "export": {
      "enabled": true,
        "position": "bottom-right"
     }
});
}



function cargarGraficaServiciosMetasMensuales (){
var idp = jQuery("#hdfidp").val();
var chartData = loadJSON('../controlador/controladorMetasMensualesCliente.php?id='+ idp);
var chart = AmCharts.makeChart("chardiva", {
  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": false,
  "marginLeft": 30,
  "marginRight": 8,
  "marginTop": 10,
  "marginBottom": 26,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider":chartData,
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left"
  }],
  "startDuration": 1,
  "graphs": [{
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:12px;'>[[title]] en [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "fillAlphas": 1,
    "title": "Venta",
    "type": "column",
    "valueField": "income",
    "dashLengthField": "dashLengthColumn"
  }, {
    "id": "graph2",
    "balloonText": "<span style='font-size:12px;'>[[title]] en [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Meta",
    "valueField": "expenses"
  }],
  "categoryField": "year",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
  "export": {
    "enabled": true
  }
});
}



function  cargarGraficaComprasProductosCliente() {
var idp = jQuery("#hdfidp").val();
var datos = loadJSON('../controlador/controladorComprasPromLinCliente.php?id='+ idp);
var nchart = AmCharts.makeChart( "chardivb", {
  "type": "pie",
  "fontSize":"9",
  "labelText":"[[title]]",
   "balloonText":"[[percents]]%",
   "legend": {"enabled": false},
  "dataProvider": datos,
  "valueField": "litres",
  "titleField": "country"
});

}




function cargarGraficaComprasLineaCliente (){
  var idp = jQuery("#hdfidp").val();
  var datos = loadJSON('../controlador/controladorComprasLineaCliente.php?id='+ idp);
  var chart = AmCharts.makeChart("chardivc", {
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    }, "dataProvider":datos ,
    "valueAxes": [{
        "integersOnly": true,
        "reversed": false,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "MONTO"
    }],
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "CCTV",
        "valueField": "CCTV",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "ALARMA",
        "valueField": "ALARMA",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "CONTROL DE ACCESO",
        "valueField": "CAC",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "CERCAS",
        "valueField": "CER",
    "fillAlphas": 0
    }, {
        "balloonText": "[[value]]",
        "bullet": "round",
        "title": "MOTORES",
        "valueField": "MOT",
    "fillAlphas": 0
    }]
    ,
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "fillColor": "#000000",
        "gridAlpha": 0,
        "position": "top"
    },
    "export": {
      "enabled": true,
        "position": "bottom-right"
     }
});
}




function cargarGraficaExistenciasProducto()
{
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


function cargarGraficaCotizacionesProducto()
{
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


function loadJSON (url) 
{
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

function cargarGraficaVentasMensualesProducto()
{
  //   load the data
  var idp = jQuery("#hdfidp").val();
  var chartData = loadJSON('../controlador/controladorVentasMensualesProducto.php?id='+ idp);
  // SERIAL CHART
  chart = new AmCharts.AmSerialChart();
  chart.pathToImages = "http:www.amcharts.com/lib/images/";
  chart.dataProvider = chartData;
  chart.categoryField = "fecha";
  chart.dataDateFormat = "DD-MM-YYYY";
  // GRAPHS
  var graph1 = new AmCharts.AmGraph();
  graph1.valueField = "producto1";
  graph1.title = "PUEBLA";
  graph1.bullet = "round";
  graph1.bulletBorderColor = "#FFFFFF";
  graph1.bulletBorderThickness = 2;
  graph1.balloonText = "Monto vendido: [[producto1]]";
  graph1.lineThickness = 2;
  graph1.lineAlpha = 0.5;
  chart.addGraph(graph1);
  var graph2 = new AmCharts.AmGraph();
  graph2.valueField = "producto2";
  graph2.bullet = "round";
  graph2.title = "GUADALAJARA";
  graph2.balloonText = "Monto vendido: [[producto2]]";
  graph2.bulletBorderColor = "#FFFFFF";
  graph2.bulletBorderThickness = 2;
  graph2.lineThickness = 2;
  graph2.lineAlpha = 0.5;
  chart.addGraph(graph2);
  var graph3 = new AmCharts.AmGraph();
  graph3.valueField = "producto3";
  graph3.title = "VERACRUZ";      
  graph3.bullet = "round";
  graph3.balloonText = "Monto vendido: [[producto3]]";
  graph3.bulletBorderColor = "#FFFFFF";
  graph3.bulletBorderThickness = 2;
  graph3.lineThickness = 2;
  graph3.lineAlpha = 0.5;
  chart.addGraph(graph3);


var graph5 = new AmCharts.AmGraph();
  graph5.valueField = "producto4";
  graph5.title = "MEXICO";
  graph5.bullet = "round";
  graph5.balloonText = "Unidad vendida: [[producto4]]";
  graph5.bulletBorderColor = "#030303";
  graph5.bulletBorderThickness = 2;
  graph5.lineThickness = 2;
  graph5.lineAlpha = 0.5;
  chart.addGraph(graph5);


var graph6 = new AmCharts.AmGraph();
  graph6.valueField = "producto5";
  graph6.title = "DISTRIBUIORES";
  graph6.bullet = "round";
  graph6.balloonText = "Unidad vendida: [[producto5]]";
  graph6.bulletBorderColor = "#030303";
  graph6.bulletBorderThickness = 2;
  graph6.lineThickness = 2;
  graph6.lineAlpha = 0.5;
  chart.addGraph(graph6);

//----------------------------------
var graph4 = new AmCharts.AmGraph();
  graph4.valueField = "totalp";
  graph4.title = "TOTAL";
  graph4.bullet = "round";
  graph4.balloonText = "TOTAL: [[totalp]]";
  graph4.bulletBorderColor = "#030303";
  graph4.bulletBorderThickness = 2;
  graph4.lineThickness = 2;
  graph4.lineAlpha = 0.5;
  chart.addGraph(graph4);


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

//cargarGraficaVentasMensualesProductoUnidades()

function cargarGraficaVentasMensualesProductoUnidades()
{
  //   load the data
  var idp = jQuery("#hdfidp").val();
  var chartData = loadJSON('../controlador/controladorVentasMensualesProductoUnidades.php?id='+ idp);
  // SERIAL CHART
  chart = new AmCharts.AmSerialChart();
  chart.pathToImages = "http:www.amcharts.com/lib/images/";
  chart.dataProvider = chartData;
  chart.categoryField = "fecha";
  chart.dataDateFormat = "DD-MM-YYYY";
  // GRAPHS
  var graph1 = new AmCharts.AmGraph();
  graph1.valueField = "producto1";
  graph1.title = "PUEBLA";
  graph1.bullet = "round";
  graph1.bulletBorderColor = "#FFFFFF";
  graph1.bulletBorderThickness = 2;
  graph1.balloonText = "Unidad vendida: [[producto1]]";
  graph1.lineThickness = 2;
  graph1.lineAlpha = 0.5;
  chart.addGraph(graph1);
  var graph2 = new AmCharts.AmGraph();
  graph2.valueField = "producto2";
  graph2.bullet = "round";
  graph2.title = "GUADALAJARA";
  graph2.balloonText = "Unidad vendida: [[producto2]]";
  graph2.bulletBorderColor = "#FFFFFF";
  graph2.bulletBorderThickness = 2;
  graph2.lineThickness = 2;
  graph2.lineAlpha = 0.5;
  chart.addGraph(graph2);
  var graph3 = new AmCharts.AmGraph();
  graph3.valueField = "producto3";
  graph3.title = "VERACRUZ";      
  graph3.bullet = "round";
  graph3.balloonText = "Unidad vendida: [[producto3]]";
  graph3.bulletBorderColor = "#FFFFFF";
  graph3.bulletBorderThickness = 2;
  graph3.lineThickness = 2;
  graph3.lineAlpha = 0.5;
  chart.addGraph(graph3);
//-------------------------------------------
var graph5 = new AmCharts.AmGraph();
  graph5.valueField = "producto4";
  graph5.title = "MEXICO";
  graph5.bullet = "round";
  graph5.balloonText = "Unidad vendida: [[producto4]]";
  graph5.bulletBorderColor = "#030303";
  graph5.bulletBorderThickness = 2;
  graph5.lineThickness = 2;
  graph5.lineAlpha = 0.5;
  chart.addGraph(graph5);

var graph6 = new AmCharts.AmGraph();
  graph6.valueField = "producto5";
  graph6.title = "DISTRIBUIORES";
  graph6.bullet = "round";
  graph6.balloonText = "Unidad vendida: [[producto5]]";
  graph6.bulletBorderColor = "#030303";
  graph6.bulletBorderThickness = 2;
  graph6.lineThickness = 2;
  graph6.lineAlpha = 0.5;
  chart.addGraph(graph6);

var graph4 = new AmCharts.AmGraph();
  graph4.valueField = "totalp";
  graph4.title = "TOTAL";      
  graph4.bullet = "round";
  graph4.balloonText = "TOTAL: [[totalp]]";
  graph4.bulletBorderColor = "#030303";
  graph4.bulletBorderThickness = 2;
  graph4.lineThickness = 2;
  graph4.lineAlpha = 0.5;
  chart.addGraph(graph4);






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
  chart.write("chartdiv3");
}

//temina cargarGraficaVentasMensualesProductoUnidades()


//cargarGraficaVentasMensualesProductoUnidadesIndividual()

function cargarGraficaVentasMensualesProductoUnidadesIndividual()
{
  //   load the data
  var idp = jQuery("#hdfidp").val();
  var chartData = loadJSON('../controlador/controladorVentasMensualesProductoUnidades.php?id='+ idp+'&tip=P');
  // SERIAL CHART
  chart = new AmCharts.AmSerialChart();
  chart.pathToImages = "http:www.amcharts.com/lib/images/";
  chart.dataProvider = chartData;
  chart.categoryField = "fecha";
  chart.dataDateFormat = "DD-MM-YYYY";
  // GRAPHS
  var graph1 = new AmCharts.AmGraph();
  graph1.valueField = "producto1";
  graph1.title = "PUEBLA";
  graph1.bullet = "round";
  graph1.bulletBorderColor = "#FFFFFF";
  graph1.bulletBorderThickness = 2;
  graph1.balloonText = "Unidad vendida: [[producto1]]";
  graph1.lineThickness = 2;
  graph1.lineAlpha = 0.5;
  chart.addGraph(graph1);
  var graph2 = new AmCharts.AmGraph();
  graph2.valueField = "producto2";
  graph2.bullet = "round";
  graph2.title = "GUADALAJARA";
  graph2.balloonText = "Unidad vendida: [[producto2]]";
  graph2.bulletBorderColor = "#FFFFFF";
  graph2.bulletBorderThickness = 2;
  graph2.lineThickness = 2;
  graph2.lineAlpha = 0.5;
  chart.addGraph(graph2);
  var graph3 = new AmCharts.AmGraph();
  graph3.valueField = "producto3";
  graph3.title = "VERACRUZ";      
  graph3.bullet = "round";
  graph3.balloonText = "Unidad vendida: [[producto3]]";
  graph3.bulletBorderColor = "#FFFFFF";
  graph3.bulletBorderThickness = 2;
  graph3.lineThickness = 2;
  graph3.lineAlpha = 0.5;
  chart.addGraph(graph3);
//-------------------------------------------
var graph5 = new AmCharts.AmGraph();
  graph5.valueField = "producto4";
  graph5.title = "MEXICO";
  graph5.bullet = "round";
  graph5.balloonText = "Unidad vendida: [[producto4]]";
  graph5.bulletBorderColor = "#030303";
  graph5.bulletBorderThickness = 2;
  graph5.lineThickness = 2;
  graph5.lineAlpha = 0.5;
  chart.addGraph(graph5);

var graph6 = new AmCharts.AmGraph();
  graph6.valueField = "producto5";
  graph6.title = "DISTRIBUIORES";
  graph6.bullet = "round";
  graph6.balloonText = "Unidad vendida: [[producto5]]";
  graph6.bulletBorderColor = "#030303";
  graph6.bulletBorderThickness = 2;
  graph6.lineThickness = 2;
  graph6.lineAlpha = 0.5;
  chart.addGraph(graph6);

var graph4 = new AmCharts.AmGraph();
  graph4.valueField = "totalp";
  graph4.title = "TOTAL";      
  graph4.bullet = "round";
  graph4.balloonText = "TOTAL: [[totalp]]";
  graph4.bulletBorderColor = "#030303";
  graph4.bulletBorderThickness = 2;
  graph4.lineThickness = 2;
  graph4.lineAlpha = 0.5;
  chart.addGraph(graph4);






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
  chart.write("chartdivunidadesp");
}

//temina cargarGraficaVentasMensualesProductoUnidadesIndividual()


//cargarGraficaVentasMensualesProductoUnidadespaquete()

function cargarGraficaVentasMensualesProductoUnidadespaquete()
{
  //   load the data
  var idp = jQuery("#hdfidp").val();
  var chartData = loadJSON('../controlador/controladorVentasMensualesProductoUnidades.php?id='+ idp+'&tip=O');
  // SERIAL CHART
  chart = new AmCharts.AmSerialChart();
  chart.pathToImages = "http:www.amcharts.com/lib/images/";
  chart.dataProvider = chartData;
  chart.categoryField = "fecha";
  chart.dataDateFormat = "DD-MM-YYYY";
  // GRAPHS
  var graph1 = new AmCharts.AmGraph();
  graph1.valueField = "producto1";
  graph1.title = "PUEBLA";
  graph1.bullet = "round";
  graph1.bulletBorderColor = "#FFFFFF";
  graph1.bulletBorderThickness = 2;
  graph1.balloonText = "Unidad vendida: [[producto1]]";
  graph1.lineThickness = 2;
  graph1.lineAlpha = 0.5;
  chart.addGraph(graph1);
  var graph2 = new AmCharts.AmGraph();
  graph2.valueField = "producto2";
  graph2.bullet = "round";
  graph2.title = "GUADALAJARA";
  graph2.balloonText = "Unidad vendida: [[producto2]]";
  graph2.bulletBorderColor = "#FFFFFF";
  graph2.bulletBorderThickness = 2;
  graph2.lineThickness = 2;
  graph2.lineAlpha = 0.5;
  chart.addGraph(graph2);
  var graph3 = new AmCharts.AmGraph();
  graph3.valueField = "producto3";
  graph3.title = "VERACRUZ";      
  graph3.bullet = "round";
  graph3.balloonText = "Unidad vendida: [[producto3]]";
  graph3.bulletBorderColor = "#FFFFFF";
  graph3.bulletBorderThickness = 2;
  graph3.lineThickness = 2;
  graph3.lineAlpha = 0.5;
  chart.addGraph(graph3);
//-------------------------------------------
var graph5 = new AmCharts.AmGraph();
  graph5.valueField = "producto4";
  graph5.title = "MEXICO";
  graph5.bullet = "round";
  graph5.balloonText = "Unidad vendida: [[producto4]]";
  graph5.bulletBorderColor = "#030303";
  graph5.bulletBorderThickness = 2;
  graph5.lineThickness = 2;
  graph5.lineAlpha = 0.5;
  chart.addGraph(graph5);

var graph6 = new AmCharts.AmGraph();
  graph6.valueField = "producto5";
  graph6.title = "DISTRIBUIORES";
  graph6.bullet = "round";
  graph6.balloonText = "Unidad vendida: [[producto5]]";
  graph6.bulletBorderColor = "#030303";
  graph6.bulletBorderThickness = 2;
  graph6.lineThickness = 2;
  graph6.lineAlpha = 0.5;
  chart.addGraph(graph6);

var graph4 = new AmCharts.AmGraph();
  graph4.valueField = "totalp";
  graph4.title = "TOTAL";      
  graph4.bullet = "round";
  graph4.balloonText = "TOTAL: [[totalp]]";
  graph4.bulletBorderColor = "#030303";
  graph4.bulletBorderThickness = 2;
  graph4.lineThickness = 2;
  graph4.lineAlpha = 0.5;
  chart.addGraph(graph4);






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
  chart.write("chartdivunidadesp");
}

//temina cargarGraficaVentasMensualesProductoUnidadespaquete()




function cargarGraficaCapacitacionesCliente()
{
  var idp = jQuery("#hdfidp").val();
  var datos = loadJSON('../controlador/controladorGraficaCapacitacionesCliente.php?id='+ idp);
  var chartgc;
  /*var chartgcData = [
                {
                    "country": "CCTV",
                    "litres": 0                },
                {
                    "country": "ALARMAS",
                    "litres": 2                },
                {
                    "country": "CERCOS",
                    "litres": 5                },
                {
                    "country": "MOTORES",
                    "litres": 3                },
                {
                    "country": "ACCESO",
                    "litres": 1                }
            ];*/
                /* RADAR CHART*/
                chartgc = new AmCharts.AmRadarChart();
                chartgc.dataProvider = datos;
                chartgc.categoryField = "country";
                chartgc.startDuration = 2;
                /* VALUE AXIS*/
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisAlpha = 0.15;
                valueAxis.minimum = 0;
                valueAxis.dashLength = 0;
                valueAxis.axisTitleOffset = 2;
                valueAxis.gridCount = 4;
                chartgc.addValueAxis(valueAxis);
                /* GRAPH*/
                var graphgc = new AmCharts.AmGraph();
                graphgc.valueField = "litres";
                graphgc.bullet = "round";
                graphgc.balloonText = "[[value]] Capacitaciones";
                chartgc.addGraph(graphgc);
                /* WRITE*/
                chartgc.autoResize=true;
                chartgc.fontSize=7;
                chartgc.write("chardivd");

}

function cargarGraficaServiciosCliente()
{
  var idp = jQuery("#hdfidp").val();
  var datos = loadJSON('../controlador/controladorGraficaServiciosCliente.php?id='+ idp);
  var chartgc;
 /* var chartgcData = [
                {
                    "country": "COT. ON LINE",
                    "litres": 5                },
                {
                    "country": "LOCAL",
                    "litres": 3                },
                {
                    "country": "VEHICULO",
                    "litres": 1                },
                {
                    "country": "COT. IMP.",
                    "litres": 5                },
                {
                    "country": "LONAS",
                    "litres": 2                },
                {
                    "country": "NEWSLETTER",
                    "litres": 2                }
            ];*/


            
                /* RADAR CHART*/
                chartgc = new AmCharts.AmRadarChart();
                chartgc.dataProvider = datos;
                chartgc.categoryField = "country";
                chartgc.startDuration = 2;
                chartgc.colors=[ '#0D8ECF'];
                /* VALUE AXIS*/
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisAlpha = 0.15;
                valueAxis.minimum = 0;
                valueAxis.dashLength = 0;
                valueAxis.axisTitleOffset = 2;
                valueAxis.gridCount = 4;
                chartgc.addValueAxis(valueAxis);
                /* GRAPH*/
                var graphgc = new AmCharts.AmGraph();
                graphgc.valueField = "litres";
                graphgc.bullet = "round";
                graphgc.balloonText = "[[value]] Servicios";
                chartgc.addGraph(graphgc);
                /* WRITE*/
                chartgc.autoResize=true;
                chartgc.fontSize=7;
                chartgc.write("chardive");

}




function cargarProductosMasAdquiereCliente()
{
var chart = AmCharts.makeChart("chardivf", {
    "type": "serial",
    "theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10
    },
    "dataProvider": [{
        "producto": "PROD1",
        "enero": 25,
        "febrero": 25,
        "marzo": 21,
        "abril": 3,
        "mayo": 2,
        "junio": 1,
        "julio": 1
    }, {
        "producto": "PROD2",
        "enero": 26,
        "febrero": 27,
        "marzo": 22,
        "abril": 3,
        "mayo": 3,
        "junio": 1,
        "julio": 1
    }, {
        "producto": "PROD3",
        "enero": 28,
        "febrero": 29,
        "marzo": 24,
        "abril": 3,
        "mayo": 3,
        "junio": 1,
        "julio": 1
    }, {
        "producto": "PROD4",
        "enero": 8,
        "febrero": 9,
        "marzo": 4,
        "abril": 7,
        "mayo": 4,
        "junio": 2,
        "julio": 3
    }, {
        "producto": "PROD5",
        "enero": 31,
        "febrero": 25,
        "marzo": 24,
        "abril": 31,
        "mayo": 13,
        "junio": 11,
        "julio": 1
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.5,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Enero",
        "type": "column",
        "color": "#000000",
        "valueField": "enero"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Febrero",
        "type": "column",
        "color": "#000000",
        "valueField": "febrero"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Marzo",
        "type": "column",
        "color": "#000000",
        "valueField": "marzo"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Abril",
        "type": "column",
        "color": "#000000",
        "valueField": "abril"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Mayo",
        "type": "column",
        "color": "#000000",
        "valueField": "mayo"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Junio",
        "type": "column",
        "color": "#000000",
        "valueField": "junio"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Julio",
        "type": "column",
        "color": "#000000",
        "valueField": "julio"
    }],
    "rotate": true,
    "categoryField": "producto",
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






function cargarComparativoCotComCliente()
{
var idp = jQuery("#hdfidp").val();
var datos = loadJSON('../controlador/controladorGraficaCotizacionesCliente.php?id='+ idp);
var chart = AmCharts.makeChart("chardivg", {
    "type": "serial",
    "dataProvider": datos,
    "valueAxes": [{
        "title": "Cotizaciones realizadas"
    }],
    "graphs": [{
        "balloonText": "[[category]]:[[value]]",
        "fillAlphas": 1,
        "lineAlpha": 0.2,
        "title": "Income",
        "type": "column",
        "valueField": "income"
    }],
    "depth3D": 20,
    "angle": 30,
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "fillAlpha": 0.05,
        "position": "left"
    },
    "export": {
      "enabled": true
     }
});
}





function cargarVtasSucursales()
{
var idp = jQuery("#hdfidp").val();
var datos = loadJSON('../controlador/controladorGraficaVentasSucursales.php');
var chart = AmCharts.makeChart("chartdivinicial", {
    "type": "serial",

    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
    "useGraphSettings": true,
    "markerSize": 10
    },
    "dataProvider":datos ,
        "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.5,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Puebla",
        "type": "column",
    "color": "#000000",
        "valueField": "puebla"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Guadalajara",
        "type": "column",
    "color": "#000000",
        "valueField": "guadalajara"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Veracruz",
        "type": "column",
    "color": "#000000",
        "valueField": "veracruz"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Tlalnepantla",
        "type": "column",
    "color": "#000000",
        "valueField": "tlalnepantla"
    }],
    "rotate": true,
    "categoryField": "year",
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





function cargarEvaluacionAgente(idagt,capa,capatabla,mes){
var datos = loadJSON('../controlador/controladorGraficaMetasAgentes.php?idp='+idagt);
var chart = AmCharts.makeChart(capa, 
{
   
    "type": "serial",
    "dataProvider": datos,
    "graphs": [{
        "balloonText": "Meta $<b>[[value]]</b>",
     
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
       
        "title": "META",
        "type": "column",
        "valueField": "metaa"
    }, {
        "balloonText": "Alcanzado <b>$[[value]]</b>",
        
    "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "ALCANZADO",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "metab"
    }, {
    "id": "graph2",
    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Promedio",
    "valueField": "prom"
  }

],
    
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
    	"enabled": true
     }

});
cargaTablaDetalleAgente(idagt,capatabla);
}





function cargargraficarevisionagente(div,ida,lin){

var chartData = loadJSON('../controlador/controladorMetasDetalladasAgente.php?ida='+ ida+'&lin='+lin);
var chart = AmCharts.makeChart(div, {

  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": false,
  "marginLeft": 30,
  "marginRight": 8,
  "marginTop": 10,
  "marginBottom": 26,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider":chartData,
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left"
  }],
  "startDuration": 1,
  "graphs": [{
    "alphaField": "alpha",
    "balloonText": "Venta en 2015:<br>[[value]]",
    "fillAlphas": 1,
    "title": "Venta",
    "type": "column",
    "valueField": "year2015",
    "dashLengthField": "dashLengthColumn"
  }, {
    "id": "graph3",
    "balloonText": "Promedio:<br>[[value]]",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Meta",
    "valueField": "promedio"
  }, {
    "id": "graph4",
    "balloonText": "Meta:<br>[[value]]",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Meta",
    "valueField": "meta"
  },{
        "balloonText": "Venta en 2016:<br>[[value]]",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "year2016"
    }],
  "categoryField": "mes",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
  "export": {
    "enabled": true
  }
});
}




function cargargraficarevisioncliente(div,ida,lin){

var chartData = loadJSON('../controlador/controladorMetasDetalladasCliente.php?ida='+ ida+'&lin='+lin);
var chart = AmCharts.makeChart(div, {

  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": false,
  "marginLeft": 30,
  "marginRight": 8,
  "marginTop": 10,
  "marginBottom": 26,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider":chartData,
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left"
  }],
  "startDuration": 1,
  "graphs": [{
    "alphaField": "alpha",
    "balloonText": "Venta en 2015:<br>[[value]]",
    "fillAlphas": 1,
    "title": "Venta",
    "type": "column",
    "valueField": "year2015",
    "dashLengthField": "dashLengthColumn"
  }, {
    "id": "graph3",
    "balloonText": "Promedio:<br>[[value]]",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Meta",
    "valueField": "promedio"
  }, {
    "id": "graph4",
    "balloonText": "Meta:<br>[[value]]",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Meta",
    "valueField": "meta"
  },{
        "balloonText": "Venta en 2016:<br>[[value]]",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "year2016"
    }],
  "categoryField": "mes",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
  "export": {
    "enabled": true
  }
});
}







function cargargraficarevisionsucursal (div,ids,lin){

var chartData = loadJSON('../controlador/controladorMetasDetalladasSucursal.php?ids='+ ids+'&lin='+lin);
var chart = AmCharts.makeChart(div, {

  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": false,
  "marginLeft": 30,
  "marginRight": 8,
  "marginTop": 10,
  "marginBottom": 26,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider":chartData,
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left"
  }],
  "startDuration": 1,
  "graphs": [{
    "alphaField": "alpha",
    "balloonText": "Venta en 2015:<br>[[value]]",
    "fillAlphas": 1,
    "title": "Venta",
    "type": "column",
    "valueField": "year2015",
    "dashLengthField": "dashLengthColumn"
  }, {
    "id": "graph3",
    "balloonText": "Promedio:<br>[[value]]",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Meta",
    "valueField": "promedio"
  }, {
    "id": "graph4",
    "balloonText": "Meta:<br>[[value]]",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Meta",
    "valueField": "meta"
  },{
        "balloonText": "Venta en 2016:<br>[[value]]",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "year2016"
    }],
  "categoryField": "mes",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
  "export": {
    "enabled": true
  }
});
}
