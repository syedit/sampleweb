function handleTabClick(tab){

	var men = document.getElementById('m');
	var women = document.getElementById('w');
	var boy = document.getElementById('b');
	var girl = document.getElementById('g');
	if (tab === 'men') {
		console.log('men clicked');

		men.className =""
		women.className ="hide"
		boy.className ="hide"
		girl.className ="hide"
	}
	else if (tab === 'women') {
		console.log('women clicked');

		men.className = "hide";
		women.className = "";
		boy.className = "hide";
		girl.className = "hide";
	}
	else if (tab === 'boy') {
		console.log('boy clicked');

		men.className = "hide";
		women.className = "hide";
		boy.className = "";
		girl.className = "hide";
	}
	else if (tab === 'girl') {
		console.log('girl clicked');

		men.className = "hide";
		women.className = "hide";
		boy.className = "hide";
		girl.className = "";
	}
}