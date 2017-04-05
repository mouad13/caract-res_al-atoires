function chaine( nbCaracteres ){
	var text = ""; 
 	var caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";

 	for( var i=0; i < nbCaracteres; i++ ){

        text += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
 	}
	//console.log(text);
 	return text;       

}
 
function tableaujs (nblignes, nbcolones){
	var tableau = [];
	
	for( var i=0 ; i<nblignes ; i++ ){	    
	tableau.push( [] );

		for( var j=0 ; j<nbcolones ; j++ ){ 
		tableau[i].push( j );
		}
	}

	console.log(tableau);
}

chaine(10);

tableaujs(5, 4);
