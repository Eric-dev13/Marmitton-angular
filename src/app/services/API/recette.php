<?php

require_once 'init.php';

// POST
if($_GET['action']=='create')
{
    $data = json_decode(file_get_contents('php://input'), true);

    $sql="REPLACE INTO recette (id, titre, description, cout, tempsprep, tempscuisson, difficulte,categorie_id, photo ) VALUES (:id, :titre, :description, :cout, :tempsprep, :tempscuisson, :difficulte, :categorie_id, :photo)";

    $result=$pdo->prepare($sql);
    $result->execute($data);

}

// GET
if($_GET['action']=='readAll')
{
    //$sql="SELECT r.*, c.name as categorie, i.name as ingredient FROM recette r INNER JOIN categorie c ON r.categorie_id=c.id INNER JOIN ingredient i ON r.id=i.recette_id";
    $sql="SELECT r.*, c.name FROM categorie c INNER JOIN recette r ON c.id =r.categorie_id ";

    $result=$pdo->prepare($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
}

// DELETE
if($_GET['action']=='delete')
{
    $sql="DELETE FROM recette WHERE id=:id";

    $result=$pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    
    echo json_encode($result);
}

// GET
if($_GET['action']=='readOne')
{
    $sql="SELECT r.*, c.name FROM categorie c INNER JOIN recette r ON c.id =r.categorie_id WHERE r.id=:id";

    $result=$pdo->prepare($sql);
    $result->execute([':id' => $_GET['id']]);
    $data = $result->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
}


if($_GET['action']=='readbyrecipe')
{
    // SELECT * FROM recette r LEFT JOIN ingredient i ON i.recette_id=r.id WHERE r.id=2
    $sql="SELECT * FROM recette  WHERE r.id = :recette_id";
    $result=$pdo->prepare($sql);
    $result->execute([':recette_id'=>$_GET['recette_id']]);

    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}

// GET
if($_GET['action']=='readrecipebyId')
{
    $sql="SELECT * FROM recette WHERE id=:id";
    $result=$pdo->prepare($sql);
    $result->execute([':id' => $_GET['id']]);
    $data = $result->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
}



