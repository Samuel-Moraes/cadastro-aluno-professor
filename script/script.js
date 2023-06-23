function valida_cadastro_professor(event){
    // event.preventDefault();
    var nome = document.getElementById("id_nome_professor").value;
    var email = document.getElementById("email_professor").value;
    var idade = document.getElementById("idade_professor").value;
    var senha = document.getElementById("senha_professor").value;
    var mensagem_confirmação = "Cadastro realizado com sucesso" + "\n" +
                               "Nome: " + nome + "\n" +
                               "Email: " + email + "\n" +
                               "Idade: " + idade + "\n" +
                               "Senha: " + ':-)'
    var mensagem_erro = "O email informado já está cadastrado! "

    if(email == 'teste@teste.com'){
        alert(mensagem_erro)
    }

    else{
        alert(mensagem_confirmação)
    }
}

function realiza_login(event) {
    var email = document.getElementById("email_login").value;
    var senha = document.getElementById("senha_login").value;
    var senha_padrao = 123

    if(email == ''){
        alert('Email invalido')
    }

    else{
    if(email == 'samuel@escola.gov' && senha == senha_padrao){
        alert('Logado com sucesso')
    }

    else{
        alert('Usuario não cadastrado!')
    }
}
}