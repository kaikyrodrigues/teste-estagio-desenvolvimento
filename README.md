# Teste Técnico – Estágio em Desenvolvimento

## Descrição
Projeto realizado para teste técnico para estágio em Desenvolvimento Web.  
Inclui frontend, backend PHP, JavaScript, Vue.js, Node.js e versionamento com Git.  

* Observação: O Vue.js foi utilizado via link (CDN) para realização do desafio.

# Tecnologias utilizadas
 HTML & CSS (Flexbox)
 Javascript
 PHP
 Vue.js (via CDN)
 Node.js + Express
 Docker
 Git

# Funcionalidades

# Frontend
 Página com formulário de cadastro nome e e-mail  
 Layout centralizado usando Flexbox  
 Valida campos preenchidos antes de enviar  

# JavaScript
 Validação de campos do formulário  
 Mensagens de sucesso ou erro exibidas dinamicamente  
 Envio dos dados via fetch para o backend PHP  

# PHP
 Script recebe dados via POST  
 Retorna JSON com status e nome do usuário  

# Vue.js
 Componente simples com input que exibe valor digitado em tempo real  
 Implementado via link (CDN) para facilitar o desenvolvimento 

# Node.js
 API simples usando Express  
 Rota GET /status retornando JSON { status: "ok" }  

# Git
 Repositório público, commits com mensagens claras
 Demonstra versionamento e evolução do projeto  

# Como rodar

# Usando Docker (Frontend + Backend PHP)
1 Na pasta raiz faça build da imagem: docker build -t teste-estagio .

2 Inicie o container: docker run -d -p 8000:80 teste-estagio

3 Acesse o frontend: http://localhost:8000/frontend/index.html

# Node API GET / status
1 Entrar na pata backend-node e instalar o npm: npm install

2 Rodar o servidor: node server.js

3 Testar o status retornado em:  http://localhost:3000/status


