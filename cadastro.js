let cadastro = []

const salvar = function(){
   let vnome = document.getElementById('name').value;
   let vtamanho = document.getElementById('size').value;
   let vmarca = document.getElementById('brand').value

   cadastro.push([vnome,vtamanho,vmarca])
   
    localStorage.setItem("cadastro",JSON.stringify(cadastro))
}