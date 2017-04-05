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

	console.log(tableau);
}

chaine(10);

tableaujs(4, 10, 10);
