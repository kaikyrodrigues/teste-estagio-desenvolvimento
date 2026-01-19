<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'Método inválido'
    ]);
    exit;
}
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';

if (empty($nome) || empty($email)) {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'Dados não preenchidos'
    ]);
    exit;
}

echo json_encode([
    'status' => 'sucesso',
    'nome' => $nome
]);
