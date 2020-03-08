/* Lista de caracteres para validação */
class Cidadao {
    constructor(nome, rg, cpf, telefone, celular, email, senha) {
        this.nome = nome
        this.rg = rg
        this.cpf = cpf
        this.telefone = telefone
        this.celular = celular
        this.email = email
        this.senha = senha
    }

    autoRg() {
        let rg_clean = this.getRg().replace(/[\.-]/g, '')
        const rg_array = rg_clean.split('') // Quebra rg num array
        
        let rgLength = rg_array.length
        if (rgLength >= 2 && rgLength <= 4)
            rg_array.splice(2, 0, '.')
            
        else if (rgLength >= 5 && rgLength <= 7) {
            rg_array.splice(2, 0, '.')
            rg_array.splice(6, 0, '.')
            
        } else if (rgLength >= 8 && rgLength <= 9) {
            
            rg_array.splice(2, 0, '.')
            rg_array.splice(6, 0, '.')
            rg_array.splice(10, 0, '-')
        }
        else if (this.getRg().length == 11)
            rg.array.push('-')
        else {

        }
        return rg_array.toString()
    }

    autoCpf() {

    }

    autoTelefone() {

    }

    autoCelular() {

    }

    // Getters
    getNome() {
        return this.nome
    }

    getRg() {
        return this.rg
    }

    getCpf() {
        return this.cpf
    }

    getTelefone() {
        return this.telefone
    }

    getCelular() {
        return this.celular
    }

    getEmail() {
        return email
    }

    getSenha() {
        return this.senha
    }

    // Setters
    setNome(nome) {
        this.nome = nome
    }

    setRg(rg) {
        this.rg = rg
    }

    setCpf(cpf) {
        this.cpf = cpf
    }

    setTelefone(telefone) {
        this.telefone = telefone
    }

    setCelular(celular) {
        this.celular = celular
    }

    setEmail(email) {
        this.email = email
    }
    
    setSenha(senha) {
        this.senha = senha
    }
}

let citizen = new Cidadao('igor', '53.439.806-6')
console.log(citizen)
console.log(citizen.autoRg())