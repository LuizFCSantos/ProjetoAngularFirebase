import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage {
 
  isModalOpen = false;

  constructor() {
    this.getFuncionarios();
  }

  isLoading: boolean = false;
  funcionarios: any;
  inserir: any;
  // atualizar: any;

  getFuncionarios(){
    this.isLoading = true;
	
		let funcionario = { CodFun: '', 
                        Sobrenome: '',
                        Nome: '',
                        Cargo: '',
                        DataNasc: '',
                        Endereco: '',
                        Cidade: '',
                        CEP: '',
                        Pais: '',
                        Fone: '',
                        Salario: '' };

    fetch('http://localhost/API_Atividade/funcionarios/listar_funcionarios.php',
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
      this.funcionarios = response.funcionarios
      console.log(this.funcionarios)
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }
  
  setInserir(){
    this.isLoading = true;
	
		let inserir = { CodFun: '', 
                    Sobrenome: '',
                    Nome: '',
                    Cargo: '',
                    DataNasc: '',
                    Endereco: '',
                    Cidade: '',
                    CEP: '',
                    Pais: '',
                    Fone: '',
                    Salario: '' };

    fetch('http://localhost/API_Atividade/funcionarios/inserir_funcionario.php',
			{
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(inserir)
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.inserir = response.inserir
      console.log(this.inserir)
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
      this.getFuncionarios()
    })
  }
  // getAtualizar(){
  //   this.isLoading = true;
	
	// 	let atualizar = { CodFun: '', 
  //                   Sobrenome: '',
  //                   Nome: '',
  //                   Cargo: '',
  //                   DataNasc: '',
  //                   Endereco: '',
  //                   Cidade: '',
  //                   CEP: '',
  //                   Pais: '',
  //                   Fone: '',
  //                   Salario: '' };

  //   fetch('http://localhost/API_Atividade/funcionarios/atualizar_funcionario.php',
	// 		{
	// 		  method: 'POST',
	// 		  headers: {
	// 		    'Content-Type': 'application/json',
	// 		  },
	// 		  body: JSON.stringify(atualizar)
	// 		}
	// 	)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //     this.atualizar = response.atualizar
  //     console.log(this.atualizar)
  //   })
  //   .catch(erro => {
  //     console.log(erro);
  //   })
  //   .finally(()=>{
  //     this.isLoading = false;
  //     this.getFuncionarios()
  //   })
  // }

  
  remover(id:any){
    this.isLoading = true;

		let funcionario = { CodFun: id };

    fetch('http://localhost/API_Atividade/funcionarios/remover_funcionarios.php',
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
      this.getFuncionarios()
    })
  }

  pesquisa:any={ "filtro": '' };

  setPesquisa(){
    this.isLoading = true;

    fetch('http://localhost/API_Atividade/funcionarios/consulta_func_'+this.radio+'.php',
			{
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(this.pesquisa)
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.funcionarios = response.funcionarios;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

  radio:any;

  setFiltro(objeto:any){
    console.log(objeto.detail.value)
    
    let filtro = objeto.detail.value;
    let url;
    if (filtro == 'nome') {
      url = 'consulta_func_nome.php';
    }
    fetch('http://localhost/API_Atividade/funcionarios/consulta_func_nome.php' + url);
  }
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}



