<?php

require_once 'init.php';

// POST
if($_GET['action']=='create')
{
    $data = json_decode(file_get_contents('php://input'), true);

    $sql="REPLACE INTO ingredient (id, name, quantite, unite, recette_id) VALUES (:id, :name, :quantite, :unite, :recette_id)";

    $result=$pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);
}

// recupere tout les ingrédients d'une recette
if($_GET['action']=='readbyrecipe')
{
    // SELECT * FROM recette r LEFT JOIN ingredient i ON i.recette_id=r.id WHERE r.id=2
    $sql="SELECT * FROM recette r LEFT JOIN ingredient i ON i.recette_id=r.id WHERE r.id = :recette_id";
    $result=$pdo->prepare($sql);
    $result->execute([':recette_id'=>$_GET['recette_id']]);

    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}


// GET
// if($_GET['action']=='readAll')
// {

//     $sql="SELECT * FROM ingredient";

//     $result=$pdo->prepare($sql);
//     $result->execute();
//     $data = $result->fetchAll(PDO::FETCH_ASSOC);
    
//     echo json_encode($data);
// }

// DELETE
if($_GET['action']=='delete')
{
    $sql="DELETE FROM ingredient WHERE id=:id";

    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    
    echo json_encode($result);
}

// GET
// if($_GET['action']=='readOne')
// {
//     $sql="SELECT * FROM ingredient WHERE id=:id";

//     $result=$pdo->prepare($sql);
//     $result->execute([':id' => $_GET['id']]);
//     $data = $result->fetch(PDO::FETCH_ASSOC);
    
//     echo json_encode($data);
// }