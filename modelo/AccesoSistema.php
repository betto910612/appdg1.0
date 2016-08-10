<?php
require_once ('resources/conexion/unreal4u/config.php');
require_once ('resources/conexion/unreal4u/dbmysqli.php');
/*
 * @author Conta
 * @version 1.0
 * @created 09-jun-2015 07:29:03 p.m.
 */
class AccesoSistema
{

	function __construct()
	{
	}

	function __destruct()
	{
	}



	/**
	 * 
	 * @param contrasenia
	 * @param nombreUsuario
	 */
	public function confirmarAcceso($nombreUsuario,$contrasenia)
	{
		$db = new unreal4u\dbmysqli();
		//print_r($db);
		$db->supressErrors = true;
		$db->keepLiveLog = true;
		$resultSet=$db->query('CALL sp_accesa_usuario(?,?)',$nombreUsuario,$contrasenia);
		return $resultSet;
	}

}
?>
