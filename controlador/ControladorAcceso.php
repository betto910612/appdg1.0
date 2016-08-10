<?php
session_start();
require_once ('../modelo/AccesoSistema.php');



/**
 * @author Conta
 * @version 1.0
 * @created 09-jun-2015 07:28:35 p.m.
 */
class ControladorAcceso
{

	
	private $nombreusuario;
	private $contraseniaUsuario;
	

	function __construct($nu,$pu)
	{
		$this->nombreusuario=$nu;
		$this->contraseniaUsuario=md5($pu);

	}

	function __destruct()
	{
	}



	/**
	 * 
	 * @param nombreUsuario
	 * @param contrasenia
	 */
	public function accesar()
	{
		$as= new AccesoSistema();
		$registroUsuario=$as->confirmarAcceso($this->nombreusuario,$this->contraseniaUsuario); 
		//print_r($registroUsuario);
		//echo $registroUsuario[0]["idUsuarioR"];
		if($registroUsuario[0]["idUsuarioR"]>0 && $registroUsuario[0]['tipoUsuarioR'] == "E")
		{
			$_SESSION["idUsuario"]=$registroUsuario[0]["idUsuarioR"];
			$_SESSION["tipoUsuario"]=$registroUsuario[0]["tipoUsuarioR"];
			$_SESSION["puestoUsuario"]=$registroUsuario[0]["puestoUsuarioR"];
			$_SESSION["nombrepuesto"]=$registroUsuario[0]["nombrePuestoR"];
			$_SESSION["nombreCompletoUsuario"]=$registroUsuario[0]["ncUsuario"];
			$_SESSION["idSucursal"]=$registroUsuario[0]["idSucursalR"];
			$_SESSION["idempleado"]=$registroUsuario[0]["idempleado"];
			$_SESSION["mesconsultado"]=6;
			$_SESSION["anioconsultado"]=16;

			
			echo "<script language=Javascript> location.href=\"vista/vw_dashboard.php\"; </script>";
		}
		else
		{
			echo "<script language=Javascript> location.href=\"index.php?error=nv\"; </script>";
		}
		
	}

}
?>
