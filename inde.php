<?php
session_start();
if(isset($_SESSION["idUsuario"]))
	header("Location: vista/vw_dashboard.php");
else
	include("vista/vw_acceso.php")
?>