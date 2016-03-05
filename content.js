$(document).ready(function() {
	var url = window.location.href;
	var but = url.split('/');
	var main_div, download_button, db;
	if(but[but.length - 2] == 'answer' || but[but.length - 2] == 'answers'){
		main_div = $('.Answer.ActionBar > .action_bar_inner')[0];
	}
	else if(but[but.length - 2] == 'Posts' || (but[2]!='www.quora.com' && but[3]!='')){
		main_div = $('.Post.ActionBar > .action_bar_inner')[0];
	}
	download_button = document.createElement('div');
	download_button.setAttribute("class", "action_item");
	db = document.createElement('a');
	db.setAttribute("id", "download");
	db.style.color = "rgb(153,153,153)";
	db.href = "#";
	db.innerHTML = "Download";
	download_button.appendChild(db);
	main_div.appendChild(download_button);
	db.onclick = function(e){
		window.print();
	}
});