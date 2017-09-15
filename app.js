function chaine( nbCaracteres ){
	var text = ""; 
 	var caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";

 	for( var i=0; i < nbCaracteres; i++ ){

        text += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
 	}
	//console.log(text);
 	return text;       

}
 




function tableaujs (nblignes, nbcolones, nbCaracteres){
	var tableau = [];

	for( var i=0 ; i<nblignes ; i++ ){	    
	tableau.push( [] );

		for( var j=0 ; j<nbcolones ; j++ ){ 
		
		var machaine = chaine(nbCaracteres);
		tableau[i].push( machaine );
		
		}
	}
	return tableau;
}

chaine();


function tableauhtml (nblignes, nbcolones, nbCaracteres){
	var result = tableaujs(10, 10, 3);
	
	$("thead tr").append('<th bgcolor = "gray">#</th>');

	for (n = 0; n < result.length  ; n++) {
		$("thead tr").append('<th bgcolor = "blue"><input type="radio" name="inlineRadioOptions1"></th>');
	}


	for (i = 0; i < nblignes; i++) {
		var lignes = $('<tr class=""></tr>');
		var radio = $('<td bgcolor = "blue"><input type="radio" name="inlineRadioOptions"></td>')
		lignes.append(radio);

		for (j = 0; j < nbcolones; j++) {
			lignes.append('<td>'+result[i][j]+'</td>');
			$("#table").append(lignes);
				
		}
		
	}
};	
	
	tableauhtml(10, 10, 3);

