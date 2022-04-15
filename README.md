# Boas vindas ao repositório Digital Republic Code Challenge!
## Contexto

Este projeto foi um Code Challenge recebido através de um convite por e-mail da empresa [Digital Republic](https://www.linkedin.com/company/digital-republic-br/).

O desafio consiste em escrever uma <b>aplicação web</b> ou <b>mobile</b> que auxilie o usuário a calcular a quantidade de tinta necessária para pintar uma sala com 4 paredes. O usuário deve inserir a altura e comprimento de cada parede e se a mesma possui portas e janelas. <br>
Ao fim,  a aplicação deve retornar ao usuário <b>quais</b> e <b>quantas</b> latas de tinta melhor o atendem dentre os tamanhos _[ 0,5 L, 2,5 L, 3,6 L, 18 L ]_, dando prioridade às latas maiores.

---

## Escolhas do projeto e bibliotecas utilizadas no desenvolvimento:

O desafio deixou em aberto a escolha da tecnologia para o desenvolvimento, sendo assim, optei por desenvolver a aplicação fazendo uso da arquitetura MVC com Node.js e Express para estruturar o servidor, fazendo uso do body-parser para lidar com dados através do body de requisições, o EJS para um maior dinamismo na camada de View e Nodemon como ferramenta de desenvolvimento.

[node.js](https://nodejs.org/en/about/)<br>
[express](https://www.npmjs.com/package/express)<br>
[ejs](https://www.npmjs.com/package/ejs)<br>
[body-parser](https://www.npmjs.com/package/body-parser)<br>
[nodemon](https://www.npmjs.com/package/nodemon)<br>


---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo orientado, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _patrick.southier@hotmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir** _nome-do-diretório_:
```javascript
  mkdir ptSouthier-code-challenge
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd ptSouthier-code-challenge
  git clone git@gitlab.com:ptSouthier/digital-republic-code-challenge.git
```

3. Agora entre no diretório do projeto clonado e rode o comando **npm install** para instalar as dependências do projeto _(não se preocupe, você poderá excluir tudo depois que utilizar o app :nerd_face:)_. 
```javascript
  cd digital-republic-code-challenge
  npm install
```

4. Depois da instalação, basta executar o comando **npm start** para subir o servidor. _(Caso alguma mensagem de **erro** apareça no seu terminal, verifique se já possui alguma aplicação em execução em seu localhost:3000)_
```javascript
  npm start
```

5. Se em seu terminal apareceu a mensagem _"App is running on port 3000"_, significa que o servidor está de pé! Abra seu navegador e acesse **localhost:3000** para ter acesso à View da aplicação. Agora é só testar alguns inputs e visualizar seu retorno! 😁


<details>
<summary>Quer entender as regras de negócio?</summary>
<br>
[Clique aqui](https://gitlab.com/digitalrepublic/code-challenge) para acessar o repositório do desafio publicado pela Digital Republic e compreender melhor!
</details>


---


## Futuras Melhorias / Problemas Conhecidos

* **Testes**
* Estilização responsiva da aplicação.
* Implementação do Docker para facilitar sua execução.
* Ausência de qualquer conexão com banco de dados na camada Model. Algumas variáveis de regras de negócio estão presentes na camada como uma mínima abstração do que seria um possível retorno de uma query a um banco.

---
