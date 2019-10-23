<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type");
header("Content-Type: application/json");

echo json_encode(['aqui tem teste', 'aqui tem outro',  'e outro']);