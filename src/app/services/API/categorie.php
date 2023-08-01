<?php

require_once 'init.php';

// POST
if($_GET['action']=='create')
{
    $data = json_decode(file_get_contents('php://input'), true);

    $sql="INSERT INTO categorie (name) VALUES (:name)";

    $result=$pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);
}

// GET
if($_GET['action']=='readAll')
{

    $sql="SELECT * FROM categorie";

    $result=$pdo->prepare($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
}

// DELETE
if($_GET['action']=='delete')
{
    $sql="DELETE FROM categorie WHERE id=:id";

    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    
    echo json_encode($result);
}