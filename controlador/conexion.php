<?php

class conexion{
	public function DB(){
		$ConDB = new mysqli("127.0.0.1", "root", "", "digiapp", 3306);
		if ($ConDB->connect_errno) {
		    echo "Fallo al conectar a MySQL: (" . $ConDB->connect_errno . ") " . $ConDB->connect_error;
		}
		return $ConDB;
	}

	public function Query($var){
		$Datos=$this->DB();
		$Dar=$Datos->query($var);	
		return $Dar;
	}

	public function Msg($texto,$tipo){
		$Tipo = array('Error'=>"alert-danger",'Alerta' => "alert-warning",'Info' => "alert-info",'Correcto' => "alert-success");
		echo "<span  class='col-sm-12 alert ".$Tipo[$tipo]."'><span style='width:100%;'>".$texto."</span></span>";
	}

	public function solo_letras($cadena){ 
		$permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "; 
		for ($i=0; $i<strlen($cadena); $i++){ 
			if (strpos($permitidos, substr($cadena,$i,1))===false){ 
			//no es válido; 
			return false; 
			} 
		}  
		//si estoy aqui es que todos los caracteres son validos 
		return true; 
	}  
}

?>