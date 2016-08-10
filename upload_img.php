<?php require_once("conexion.php");
$Kilometraje=new conexion();        

    if (!is_numeric($_GET['actividad']) || empty($_GET['actividad']))
        echo "<script type='text/javascript'>window.location='?';</script>";
    $carpetaDestino="fotos/kilometraje/";
 
   if ($carpetaDestino) {
        # si hay algun archivo que subir
        if($_FILES["files"]["name"])
        {
     
            # recorremos todos los arhivos que se han subido
            for($i=0;$i<count($_FILES["files"]["name"]);$i++)
            {
     
                # SOLUCIONAR BUG - NO CARGA IMAGEN
                if($_FILES["files"]["type"][$i]=="image/jpeg" || $_FILES["files"]["type"][$i]=="image/pjpeg")
                {
                    # si exsite la carpeta o se ha creado
                    if(file_exists($carpetaDestino))
                    {
                        $origen=$_FILES["files"]["tmp_name"][$i];
                        for ($i=0; $i <= 1; $i++) { 
                            if ($i==0) 
                                $var="Primera";
                            elseif($i==1)
                                $var="Segunda";

                            $destino=$carpetaDestino."Visita-".$_GET['actividad']."-".$i.".jpeg";
                            if (!file_exists($destino)) {
                                # movemos el archivo
                                if(move_uploaded_file($origen, $destino) /*&&  funcion para cargar tus datos a la DB  */ )
                                {
                                    chmod($carpetaDestino, 755); 
                                    $Kilometraje->Msg("Se ha cargado correctamente la ".$var." imagen.","Correcto");
                                    echo "<hr>";

                                }else{
                                    $Kilometraje->Msg("Falta cargar la ".$var." imagen.","Alerta");
                                    echo "<hr>";
                                }
                            }else{
                                $Kilometraje->Msg("Ya se ah cargado la ".$var." imagen.","Alerta"); 
                                echo "<hr>";
                            }
                        }
                       
                        
                       
                    }else{
                        $Kilometraje->Msg("No existe el directorio seleccionado. ","Error");
                    }
                }else{
                    $Kilometraje->Msg("El archivo <b>NO</b> es imagen.","Error");
                }
            }
        }else{
            $Kilometraje->Msg("No se ha subido ninguna imagen. ","Error");
        }
   }else{
       echo $Kilometraje->Msg("Selecciona una galeria antes de subir las imagenes.","Error");
   }

?>