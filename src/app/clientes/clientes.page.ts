import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage {
 
  constructor() {
    this.getFuncionarios();
    this.remover();
  }

  isLoading: boolean = false;
  funcionarios: any;

  getFuncionarios(){
    this.isLoading = true;
	
		let funcionario = { CodFun: '123', 
                        Sobrenome: '',
                        Nome: '',
                        Cargo: '',
                        DataNasc: '',
                        Endereco: '',
                        Cidade: '',
                        CEP: '',
                        Pais: '',
                        Fone: '',
                        Salario: ''
  };

    fetch('http://localhost/api/funcionarios/listar_funcionarios.php',
			{
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(funcionario)
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

  
  remover(){
    this.isLoading = true;

		let funcionario = { CodFun: '123' };

    fetch('http://localhost/api/funcionarios/remover_funcionario.php',
			{
			  method: 'DELETE',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(funcionario)
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

}


