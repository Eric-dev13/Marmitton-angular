<?php

require_once 'init.php';

// POST
// recupere tout les ingrédients d'une recette
if($_GET['action']=='readbyrecipe')
{
    $sql="SELECT * FROM recette r LEFT JOIN etape e ON e.recette_id=r.id WHERE r.id = :recette_id";
    // $sql="SELECT r.titre , e.* FROM etape e JOIN recette r ON e.recette_id=r.id WHERE e.recette_id= :recette_id";
    $result=$pdo->prepare($sql);
    $result->execute([':recette_id'=>$_GET['recette_id']]);

    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}


if($_GET['action']=='create')
{
    $data = json_decode(file_get_contents('php://input'), true);

    $sql="REPLACE INTO etape (id, description, ordonne, recette_id) VALUES (:id, :description, :ordonne, :recette_id)";

    $result=$pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);
}

// recupere tout les ingrédients d'une recette
if($_GET['action']=='readetape')
{
    $sql="SELECT r.titre , e.* FROM etape e JOIN recette r ON e.recette_id=r.id WHERE e.recette_id= :recette_id";
    $result=$pdo->prepare($sql);
    $result->execute([':recette_id'=>$_GET['recette_id']]);

    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}


// GET
if($_GET['action']=='readAll')
{

    $sql="SELECT * FROM etape";

    $result=$pdo->prepare($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
}

// DELETE
if($_GET['action']=='delete')
{
    $sql="DELETE FROM etape WHERE id=:id";

    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    
    echo json_encode($result);
}

// GET
if($_GET['action']=='readOne')
{
    $sql="SELECT * FROM etape WHERE id=:id";

    $result=$pdo->prepare($sql);
    $result->execute([':id' => $_GET['id']]);
    $data = $result->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
}