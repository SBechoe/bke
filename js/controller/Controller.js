'use strict'

function Controller() //klasse
{
	var myView;
	var myModel;
	
	this.execute=execute;
	this.reageerOpKlikNieuwSpel=reageerOpKlikNieuwSpel;
	this.reageerOpKlikResetSpel=reageerOpKlikResetSpel;
	this.reageerOpKlikSpeelveld=reageerOpKlikSpeelveld;
	this.reageerOpKlikRadiobuttonThema1=reageerOpKlikRadiobuttonThema1;
	this.reageerOpKlikRadiobuttonThema2=reageerOpKlikRadiobuttonThema2;
	
	function execute()
	{
		myView=new ViewBeheerder();
		myModel=new BKE();
		
		//Koppelen aan knoppen.
		document.querySelector('button').onclick=reageerOpKlikNieuwSpel;
		document.querySelector('#reset').onclick=reageerOpKlikResetSpel;
		document.getElementById('speelveld').onclick=reageerOpKlikSpeelveld;
		var radio = document.querySelectorAll('input[type="radio"]');
		radio[0].onclick=reageerOpKlikRadiobuttonThema1;
		radio[1].onclick=reageerOpKlikRadiobuttonThema2;
		radio[1].checked=true;
		
		myView.toonMededeling("Welkom, Klik op nieuw spel om te beginnen.");
	}

	function reageerOpKlikNieuwSpel()
	{
		if (myModel.isSpelActief()===false)
		{
			myView.maakNieuwSpel();
			myModel.maakNieuwSpel();

			myView.toonMededeling("Speler met het symbool "+myModel.geefSymboolActieveSpeler()+" is aan de beurt.");
			myView.toonNaamSpeler1(myModel.geefNaamSpeler1() + " = X");
			myView.toonNaamSpeler2(myModel.geefNaamSpeler2() + " = O");
			myView.toonScoreSpeler1(myModel.geefScoreSpeler1());
			myView.toonScoreSpeler2(myModel.geefScoreSpeler2());
		}
	}
	
	function reageerOpKlikResetSpel()
	{
		myModel.zetSpelNietActief();
		myView.maakNieuwSpel();
		myModel.resetSpeler1();
		myModel.resetSpeler2();
		myView.toonMededeling("Klik op nieuw spel om helemaal opnieuw te beginnen.");
	}
	
	function reageerOpKlikSpeelveld(e)
	{
		var bron,deGekliktePlek,aanDeBeurt,symbool;

		if(myModel.isSpelActief()===true)
		{
			bron=e.target;
			deGekliktePlek=myView.geefGekliktePlek(bron);
			
			var zetMag=myModel.magZet(deGekliktePlek)
			//window.alert(zetMag);			
			if(zetMag==true)
			{
				var naamSpeler1 = myModel.geefNaamSpeler1();
				var naamSpeler2 = myModel.geefNaamSpeler2();

				symbool=myModel.geefSymboolActieveSpeler();
				aanDeBeurt=myModel.geefSpelerAanDeBeurt();
							//console.log(aanDeBeurt);
				myView.toonZet(deGekliktePlek, symbool);
				var controle = myModel.controleerVeld();
				myModel.wisselBeurt();

				
				if(aanDeBeurt=="X")
				{
					myView.toonMededeling(naamSpeler2+" is aan de beurt.");
				}
				else
				{
					myView.toonMededeling(naamSpeler1+" is aan de beurt.");
				}

				if(controle)
				{
					myView.toonMededeling(controle);
					myView.toonScoreSpeler1(myModel.geefScoreSpeler1());
					myView.toonScoreSpeler2(myModel.geefScoreSpeler2());
				}
			}
		}
	}
	
	//Wisselen van thema's door middel van een radiobutton
	function reageerOpKlikRadiobuttonThema1()
	{
		document.querySelector('#wrapper').style.background="#F0B1E9";
		document.querySelector('header').style.background="#F8D1F7";
		document.querySelector('#speelveld').style.background="#DA8AD0";
		document.querySelector('#start').style.color="rgb(255, 0, 245)";
		document.querySelector('#reset').style.color="rgb(255, 0, 245)";
		document.querySelector('footer').style.background="#F8D1F7";
	}
	
	function reageerOpKlikRadiobuttonThema2()
	{
		document.querySelector('#wrapper').style.background="#6BDAFF";
		document.querySelector('header').style.background="#B4F9FA";
		document.querySelector('#speelveld').style.background="#6BFF71";
		document.querySelector('#start').style.color="blue";
		document.querySelector('#reset').style.color="blue";
		document.querySelector('footer').style.background="#B4F9FA";
	}
}