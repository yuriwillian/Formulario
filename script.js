function solucionar() {
    var nomeid = window.document.getElementById("nome")
    var telefoneid = window.document.getElementById("telefone")
    var emailid = window.document.getElementById("email")
    var nomepreenchido = nomeid.value 
    var telefonepreenchido = telefoneid.value
    var emailpreenchido = emailid.value
    if (nomepreenchido == telefonepreenchido || emailpreenchido == telefonepreenchido) {
        window.alert("Preencha todos os campos para solucionar, não deixe nenhum em branco.")
    }else if(telefonepreenchido < 9999999999 || telefonepreenchido > 99999999999) {
        window.alert("Verifique o número de telefone digitado. Lembre de colocar o seu DDD e o número 9. Exemplo: 99999999999")
        }else {
            var titulo = window.document.getElementById("titulo")
            var escrevanome = document.getElementById("escrevanome")
            var escrevatelefone = document.getElementById("escrevatelefone")
            var escrevaemail = document.getElementById("escrevaemail")
            var botão = document.getElementById("botãosolucionar")
            var rodapé = document.getElementById("rodapé")
            var divisão = document.getElementById("divisão")
            titulo.innerHTML = `Concluído! Em breve entraremos em contato ${nomepreenchido} :D`
            titulo.style.color = "white"
            divisão.style.height = "180px"
            escrevanome.innerHTML = "DADOS:"
            escrevatelefone.innerHTML = ""
            escrevaemail.innerHTML = ""
            escrevanome.style.margin = "0px"
            escrevanome.style.color = "red"
            escrevatelefone.style.margin = "0px"
            escrevaemail.style.margin = "0px"
            botão.style.marginTop = "100px"
            botão.style.padding = "0px"
            botão.style.width = "0px"
            botão.style.font = "normal 0pt Arial"
            rodapé.style.font = "normal 35pt Bungee"
            rodapé.style.color = "red"
            window.scrollTo(top)


            /**document.write(`Concluído! Em breve entraremos em contato ;) fique de olho no seu telefone: <strong>${telefonepreenchido}</strong> e no seu email: <strong>${emailpreenchido}</strong>`)
            document.body.style.background = "#0071a1"
            document.body.style.font = "normal 18pt Bungee"
            document.body.style.color = "red"
            document.body.style.textAlign = "center"**/ 
            //preferi fazer da forma acima por ser mais prático.
        }
}