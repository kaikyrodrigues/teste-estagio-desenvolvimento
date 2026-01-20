<?php

header('Content-Type: application/json');
error_reporting(0);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'status' => 'erro',
        'mensagem' => 'Método inválido'
    ]);
    exit;
}

$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');

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

exit;
