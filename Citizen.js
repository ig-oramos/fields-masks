class Citizen {
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
        let rg_cleaned = this.getRg().replace(/[\.-]/g, '')
        const rg_array = rg_cleaned.split('')
        let rgLength = rg_array.length
        
        if (rgLength >= 2 && rgLength <= 4)
            rg_array.splice(2, 0, '.')
        else if (rgLength > 4 && rgLength <= 7) {
            rg_array.splice(2, 0, '.')
            rg_array.splice(6, 0, '.')
        } else if (rgLength > 7 && rgLength <= 9) {
            rg_array.splice(2, 0, '.')
            rg_array.splice(6, 0, '.')
            rg_array.splice(10, 0, '-')
        }

        return rg_array.toString().replace(/\,/g, '')
    }

    autoCpf() {
        let cpf_cleaned = this.getCpf().replace(/[\.-]/g, '')
        const cpf_array = cpf_cleaned.split('')
        let cpfLength = cpf_array.length
        
        if (cpfLength >= 3 && cpfLength <= 5)
            cpf_array.splice(3, 0, '.')
        else if (cpfLength > 5 && cpfLength <= 8) {
            cpf_array.splice(3, 0, '.')
            cpf_array.splice(7, 0, '.')
        } else if (cpfLength > 8 && cpfLength <= 11) {
            cpf_array.splice(3, 0, '.')
            cpf_array.splice(7, 0, '.')
            cpf_array.splice(11, 0, '-')
        }
    
        return cpf_array.toString().replace(/\,/g, '')        
    }

    autoTelefone() {
        let tell_cleaned = this.getTelefone().replace(/[-\(\)]/g, '')
        const tell_array = tell_cleaned.split('')
        let tellLength = tell_array.length
        
        if (tellLength >= 0 && tellLength <= 1)
            tell_array.splice(0, 0, '(')
        else if (tellLength <= 5) {
            tell_array.splice(0, 0, '(')
            tell_array.splice(3, 0, ')')
        } else if (tellLength <= 10) {
            tell_array.splice(0, 0, '(')
            tell_array.splice(3, 0, ')')
            tell_array.splice(8, 0, '-')
            
        }
    
        return tell_array.toString().replace(/\,/g, '')
    }

    autoCelular() {
        let cell_cleaned = this.getCelular().replace(/[-\(\)]/g, '')
        const cell_array = cell_cleaned.split('')
        let cellLength = cell_array.length
        
        if (cellLength >= 0 && cellLength <= 1)
            cell_array.splice(0, 0, '(')
        else if (cellLength <= 6) {
            cell_array.splice(0, 0, '(')
            cell_array.splice(3, 0, ')')
        } else if (cellLength <= 11) {
            cell_array.splice(0, 0, '(')
            cell_array.splice(3, 0, ')')
            cell_array.splice(9, 0, '-')    
        }
    
        return cell_array.toString().replace(/\,/g, '')
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
