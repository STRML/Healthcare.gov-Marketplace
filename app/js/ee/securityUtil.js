//Security Util

//applications are in exchangeUserInsuranceApp
function checkApplicationsForUser(applications, selectedState)
{
	var hasAppInSelectedTenant = false;
	
	if(!isEmpty(applications))
	{
		//loop thru the applications (exchangeUserInsuranceApp)
		for(var x=0; x< applications.length; x++)
		{
			var  currApp = applications[x];
			if(!isEmpty(currApp))
			{
				if(!isEmpty(currApp.state))
				{
					//user already has an app in that state
					if(currApp.state === selectedState &&
						!isEmpty(currApp.insuranceAppId))
					{
						hasAppInSelectedTenant = true;
					}
				}
			}
		}
	}
	
	return hasAppInSelectedTenant;
}

function getEIDMSecurityQuestions(a) {
  if (a == "es_MX") {
    return [{
      question: "&#191;Cu&#225;l es su estaci&#243;n de radio favorita?"
    }, {
      question: "&#191;Cu&#225;l fue su juguete favorito de la infancia?"
    }, {
      question: "&#191;Cu&#225;l es el n&#250;mero de tel&#233;fono de un familiar que no es el suyo?"
    }, {
      question: "&#191;Cu&#225;l es el nombre de su mascota favorita?"
    }, {
      question: "&#191;Cu&#225;l es el nombre de su amigo favorito de la infancia?"
    }, {
      question: "&#191;Cu&#225;l es la fecha del aniversario de bodas de sus padres?"
    }, {
      question: "&#191;Cu&#225;l es su comida favorita?"
    }, {
      question: "&#191;Cu&#225;l es el primer nombre de su sobrina mayor?"
    }, {
      question: "&#191;En qu&#233; ciudad naci&#243; su madre?"
    }, {
      question: "&#191;Cu&#225;l es el nombre del supervisor de su primer trabajo?"
    }, {
      question: "&#191;Qu&#233; apodo usa o us&#243; para llamar a su abuela?"
    }, {
      question: "&#191;Cu&#225;l es una fecha importante en su vida?"
    }]
  } else {
    return [{
      question: "What is your favorite radio station?"
    }, {
      question: "What was your favorite toy when you were a child?"
    }, {
      question: "What is your favorite cuisine?"
    }, {
      question: "What is the first name of your oldest niece?"
    }, {
      question: "What is a relative's telephone number that is not your own?"
    }, {
      question: "What is the name of your favorite pet?"
    }, {
      question: "Type a significant date in your life?"
    }, {
      question: "In what city was your mother born?"
    }, {
      question: "What is the name of your favorite childhood friend?"
    }, {
      question: "What is your parents' wedding anniversary date?"
    }, {
      question: "What is the name of the manager at your first job?"
    }, {
      question: "What is the nick name of your grandmother?"
    }]
  }
}

function secQuestionEncoding(c, a) {
  for (var b = 0; b < c.length; b++) {
    switch (c[b].question) {
      case "&iquest;Cua&#769;l es su estacio&#769;n de radio favorita?":
        c[b].question = "&#191;Cu&#225;l es su estaci&#243;n de radio favorita?";
        break;
      case "&iquest;Cua&#769;l fue su juguete favorito de la infancia?":
        c[b].question = "&#191;Cu&#225;l fue su juguete favorito de la infancia?";
        break;
      case "&iquest;Cua&#769;l es el nu&#769;mero de tele&#769;fono de un familiar que no es el suyo?":
        c[b].question = "&#191;Cu&#225;l es el n&#250;mero de tel&#233;fono de un familiar que no es el suyo?";
        break;
      case "&iquest;Cua&#769;l es el nombre de su mascota favorita?":
        c[b].question = "&#191;Cu&#225;l es el nombre de su mascota favorita?";
        break;
      case "&iquest;Cua&#769;l es el nombre de su amigo favorito de la infancia?":
        c[b].question = "&#191;Cu&#225;l es el nombre de su amigo favorito de la infancia?";
        break;
      case "&iquest;Cua&#769;l es la fecha del aniversario de bodas de sus padres?":
        c[b].question = "&#191;Cu&#225;l es la fecha del aniversario de bodas de sus padres?";
        break;
      case "&iquest;Cua&#769;l es su comida favorita?":
        c[b].question = "&#191;Cu&#225;l es su comida favorita?";
        break;
      case "&iquest;Cua&#769;l es el primer nombre de su sobrina mayor?":
        c[b].question = "&#191;Cu&#225;l es el primer nombre de su sobrina mayor?";
        break;
      case "&iquest;En que&#769; ciudad nacio&#769; su madre?":
        c[b].question = "&#191;En qu&#233; ciudad naci&#243; su madre?";
        break;
      case "&iquest;Cua&#769;l es el nombre del supervisor de su primer trabajo?":
        c[b].question = "&#191;Cu&#225;l es el nombre del supervisor de su primer trabajo?";
        break;
      case "&iquest;Que&#769; apodo usa o uso&#769; para llamar a su abuela?":
        c[b].question = "&#191;Qu&#233; apodo usa o us&#243; para llamar a su abuela?";
        break;
      case "&iquest;Cua&#769;l es una fecha importante en su vida?":
        c[b].question = "&#191;Cu&#225;l es una fecha importante en su vida?";
        break
    }
  }
  return c
};