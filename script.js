function verificarAno() {

    const data = new Date()
    const ano = data.getFullYear()
    const resultado = document.querySelector(".resultado")
    const Anodoformulario = document.querySelector("#for-input")

    if(Anodoformulario.value.length  == 0 || Number (Anodoformulario.value) > ano){
        window.alert('[ERRO] VERIFIQUE O ANO E TENTE NOVAMENTE')
        
    }else {
        const sexodousuario = document.getElementsByName("radsex")
        const idade = ano - Number(Anodoformulario.value)
        let sexo = ''
        Anodoformulario.value = ''
        if(sexodousuario[0].checked){
            sexo = 'Homem'
        }else if(sexodousuario[1].checked){
            sexo = 'Mulher'
        }
        
        resultado.innerHTML = `${sexo} com ${idade} anos.`
    }
}