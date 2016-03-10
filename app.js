function Libretto() {

  this.renderVoto = function (voto){
    var li= document.createElement('li');
    var list = document.querySelector('#libretto');
    list.appendChild(li);
    li.innerHTML = voto.data + " "+ "Materia: "+ voto.materia + " Voto: "+ voto.voto;
    li.className = 'list-group-item';
  }
  this.saveVoto = function() {
    localStorage.setItem('db',JSON.stringify(this.array));
  }
  if (localStorage.getItem('db')){
    this.array=JSON.parse(localStorage.getItem('db'));
  for(var i=0;i< this.array.length;i++)
  this.renderVoto(this.array[i]);
  }
else
  this.array = [];
  this.addVoto= function(materia,voto,data){
    var grade = {
      materia: materia,
      voto: voto,
      data: data
    }
    this.array.push(grade);
    this.renderVoto(grade);
    this.saveVoto();
  }
}

var libretto = new Libretto();

var button = document.querySelector('#save');
button.addEventListener('click', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  var materia = document.querySelector('input[name=materia]').value;
  var voto = document.querySelector('input[name=voto]').value;
  var data = document.querySelector('input[name=data]').value;
  if(data==""){
    data= new Date();}
  libretto.addVoto(materia,voto,data);
  $('#mymodal').modal('hide');
})

console.log(libretto.array);