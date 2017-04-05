function chaine( nbCaracteres ){
	var text = ""; 
 	var caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";

 	for( var i=0; i < nbCaracteres; i++ ){
        text += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
 	}
	console.log(text);
 	return text;       

}
 
chaine(17);
 