const nome = document.getElementById("nome");
const email = document.getElementById("email");
const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nome.value.trim() === "" || email.value.trim() === "") {
        mensagem.innerText = "Preencha os campos para continuar!";
        return;
    }

    const formData = new FormData(form);

    fetch("../backend-php/cadastro.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {

        if (data.status === "sucesso") {
            mensagem.innerText = `Cadastro realizado com sucesso, ${data.nome}!`;

            nome.value = "";
            email.value = "";
            nome.focus();
        } else {
            mensagem.innerText = data.mensagem;
        }

    })
    .catch((error) => {
        console.error(error);
        mensagem.innerText = "Erro ao comunicar com o servidor.";
    });
});
