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
var result = tableaujs(10, 10, 3);

//tableaujs(10, 10, 3);
	console.log(result);

for (i = 0; i < result.length; i++) {
	 $("#table").append('<tr></tr>');
		
	for (j = 0; j < result[i].length; j++) {
		$("#table").append('<td>'+result[i][j]+'</td>');
			
		}
	
}

