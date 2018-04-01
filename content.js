$(document).ready(function() {
	var url = window.location.href;
	var but = url.split('/');
	var main_div, download_button, db;
	if(but[but.length - 2] == 'answer' || but[but.length - 2] == 'answers'){
		main_div = $('.Answer .action_bar_inner')[0];
	}
	else if(but[but.length - 2] == 'Posts' || (but[2]!='www.quora.com' && but[3]!='')){
		main_div = $('.BoardItem .action_bar_inner')[0];
	}
	download_button = document.createElement('span');
	download_button.setAttribute("id", "dqa-download-button");
	db = document.createElement('a');
	db.setAttribute("class", "icon_action_bar-button");
	db.style.color = "#666";
	db.href = "#";
	db.innerHTML = "Download";
	download_button.appendChild(db);
	main_div.appendChild(download_button);
	db.onclick = function(e){
		window.print();
	}
});