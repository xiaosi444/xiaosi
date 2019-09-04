$(function(){
	var  box =$(".cart-str");
	var storage = window.localStorage;
	var storagestr = storage.daywu ? storage.daywu :'';
	var storageobj = convertstorage(storagestr);
	var data = storageobj[id];
	var str =`
	      <ul>
		     <li>${data.src}</li>
			 <li>${data.txt}</li>
			 <li>${data.rmb}</li>
			 <li>${data.secai}</li>
		  </ul>
	`
	box.innerHTML+=str;
})