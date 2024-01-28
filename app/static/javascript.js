(function(win, doc){
	'use strict';

//Verifica se o usuário realmente quer deletar o registro

	if(doc.querySelector('.btnDel')){
		let btnDel = doc.querySelectorAll('.btnDel');
		for (let i=0; i < btnDel.length; i++){
			btnDel[i].addEventListener('click', function(event){
				if(confirm('Deseja mesmo apagar ese regirtro?')){
					return true;
				}else{
					event.preventDefault();
				}

			});
		}
	}


	//ISSO AQUI É O CÓDIGO PRA FAZER O AJAX FUNCIONAR, MAS NÃO DEU CERTO ENTÃO COLOQUEI O BOTÃO DE SALVAR O FORMULÁRIO PARA ATUALIZAR PARA A MESMA PÁGINA DO FORMULÁRIO QUE AÍ ELA ESVAZIA E TEM O EFEITO DE ZERAR O RELATÓRIO, MAS SEM USAR O AJAX.
	//COM ISSO A DIFERENÇA É QUE O FORMULÁRIO VAI CONTINUAR ATUALIZANDO A PÁGINA TODA QUANDO SALVAR. MAS O EFEITO DE APAGAR O QUE ESTIVER DIGITADO VAI ACONTECER.
	//A PARTE COMPLICADA É QUE FICA FALTANDO A MENSAGEM QUE FOI CADASTRADO COM SUCESSO NO BANCO DE DADOS.
	//Ajax do form
/*	if(doc.querySelector('#form')){
		let form=doc.querySelector('#form');
		function sendForm(event){
			event.preventDefault();
			let data = new FormData(form);
			let ajax = new XMLHttpRequest();
			let token = doc.querySelectorAll('input')[0].value;
			ajax.open('POST', form.action);
			ajax.setRequestHeader('X-CSRF-TOKEN', token);
			ajax.onreadystatechange = function(){
				if(ajax.status === 200 && ajax.readyState === 4){
					let result = doc.querySelector('#result');
					result.innerHTML = ('Operação realizada com sucesso');
					result.classList.add('alert');
					result.classList.add('alert-success');
				}
			}
			ajax.send(data);
			form.reset();
		}
		form.addEventListener('submit', sendForm, false);
	}
*/
})(window, document);