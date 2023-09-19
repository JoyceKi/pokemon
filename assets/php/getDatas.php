<?php 
// J'interroge ma bdd avec file_get_contents
$pokemon = file_get_contents("php://input");
$dde_api_url = "https://pokebuildapi.fr/api/v1/pokemon/".$pokemon;
$json_data = file_get_contents($dde_api_url);
echo $json_data;