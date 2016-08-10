<?php
require_once ('../controlador/ControladorAcceso.php');
/**
 * @author GMC
 * @version 1.0
 * @created 09-jun-2015 07:12:52 p.m.
 */
class Acceso
{

	public $contrasenia;
	public $nombreUsuario;
	public $m_Dashboard;

	function __construct()
	{
		if(isset($_GET["error"])){
			echo "<script language=Javascript> alert('Error al ingresar usuario y/o contraseña'); </script>";
		}
		else if(isset($_REQUEST["usern"]) & isset($_REQUEST["passwn"])){
			$cA = new ControladorAcceso($_REQUEST["usern"],$_REQUEST["passwn"]);
			$cA->accesar();
		} 
		else{
			session_destroy();
			echo "<script language=Javascript> location.href=\"../index.php\"; </script>";

		}
	}

	function __destruct()
	{
	}



}


$nAcceso=new Acceso();

?>
