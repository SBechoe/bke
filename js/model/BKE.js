'use strict'

function BKE() //Klasse
{
	var vakjes=new Array(9);
	var spelActief=false;
	var speler1;
	var speler2;
	
	speler1 = new Speler("X", true);
	speler2 = new Speler("O", false);
	
	this.geefSymboolActieveSpeler=geefSymboolActieveSpeler;
	this.geefSpelerAanDeBeurt=geefSpelerAanDeBeurt;
	this.geefSymboolSpeler1=geefSymboolSpeler1;
	this.geefSymboolSpeler2=geefSymboolSpeler2;
	this.zetSpelNietActief=zetSpelNietActief;
	this.geefScoreSpeler1=geefScoreSpeler1;
	this.geefScoreSpeler2=geefScoreSpeler2;
	this.geefNaamSpeler1=geefNaamSpeler1;
	this.geefNaamSpeler2=geefNaamSpeler2;
	this.controleerVeld=controleerVeld;
	this.maakNieuwSpel=maakNieuwSpel;
	this.isSpelActief=isSpelActief;
	this.resetSpeler1=resetSpeler1;
	this.resetSpeler2=resetSpeler2;
	this.wisselBeurt=wisselBeurt;
	this.magZet=magZet;
	
	function geefSymboolActieveSpeler()
	{ 	
		var symbool;
		
		if(speler1.geefAanDeBeurt()==true)
		{
			symbool=speler1.geefSymbool();
		}
		else
		{
			symbool=speler2.geefSymbool();
		}
	
		return symbool;
	}
	
	function geefSpelerAanDeBeurt()
	{ 	
		var spelerSymbool="";
		
		if(speler1.geefAanDeBeurt()==true)
		{
			return spelerSymbool="X";
		}
		else
		{
			return spelerSymbool="O";
		}
	}
	
	function maakNieuwSpel()
	{
		for(var i=0; i<vakjes.length; i++)
		{
			vakjes[i]="";
		}
		while(!speler1.geefNaam())
		{
			speler1.maakNaam(prompt('Naam Speler1 X: '));
		}
		while(!speler2.geefNaam())
		{
			speler2.maakNaam(prompt('Naam Speler2 O: '));
		}
		
		spelActief=true;
	}	
		
	//Het wisselen van beurt bij spelers
	function wisselBeurt()
	{
	//alert(speler1.geefAanDeBeurt());
	//alert(speler2.geefAanDeBeurt());
	
		if (speler1.geefAanDeBeurt()==true)
		{
			speler1.zetAanDeBeurt(false);
		}
		else
		{
			speler1.zetAanDeBeurt(true);
		}
		
		if (speler2.geefAanDeBeurt()==true)
		{
			speler2.zetAanDeBeurt(false);
		}
		else
		{
			speler2.zetAanDeBeurt(true);
		}
	}
	
	function magZet(plek)
	{
		if(speler1.geefAanDeBeurt()===true)	
		{
			if (vakjes[plek]=="")
			{
				vakjes[plek]=speler1.geefSymbool();
				return true;
			}
		}
		else
		{
			if (vakjes[plek]=="")
			{
				vakjes[plek]=speler2.geefSymbool();
				return true;
			}
		}
		return false;
	}
	
	function isSpelActief()
	{
		return spelActief;
	}
	
	function zetSpelNietActief()
	{
		spelActief=false;
	}
	
	function geefNaamSpeler1()
	{
		return speler1.geefNaam();
	}
	
	function geefNaamSpeler2()
	{
		return speler2.geefNaam();
	}
	
	function geefSymboolSpeler1()
	{
		return speler1.geefSymbool();
	}
	
	function geefSymboolSpeler2()
	{
		return speler2.geefSymbool();
	}
	
	//Controleren of het symbool gelijk is/win situaties
	function controleerVeld() 
	{	
		var teller=0;
		
		if(vakjes[0] == "X" && vakjes[1] == "X" && vakjes[2] == "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[3] == "X" && vakjes[4] == "X" && vakjes[5]== "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[6] == "X" && vakjes[7] == "X" && vakjes[8] == "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[0] == "X" && vakjes[3] == "X" && vakjes[6] == "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[1] == "X" && vakjes[4] == "X" && vakjes[7] == "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
			
		}
		
		if(vakjes[2] == "X" && vakjes[5] == "X" && vakjes[8] == "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[0] == "X" && vakjes[4] == "X" && vakjes[8] == "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[2] == "X" && vakjes[4] == "X" && vakjes[6] == "X")
		{
			spelActief=false;
			speler1.verhoogScore();
			return(speler1.geefNaam()+" heeft gewonnen!");
		}
		
		//Speler2
		if(vakjes[0] == "O" && vakjes[1] == "O" && vakjes[2] == "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[3] == "O" && vakjes[4] == "O" && vakjes[5]== "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[6] == "O" && vakjes[7] == "O" && vakjes[8] == "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[0] == "O" && vakjes[3] == "O" && vakjes[6] == "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[1] == "O" && vakjes[4] == "O" && vakjes[7] == "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
			
		}
		
		if(vakjes[2] == "O" && vakjes[5] == "O" && vakjes[8] == "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[0] == "O" && vakjes[4] == "O" && vakjes[8] == "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
		}
		
		if(vakjes[2] == "O" && vakjes[4] == "O" && vakjes[6] == "O")
		{
			spelActief=false;
			speler2.verhoogScore();
			return(speler2.geefNaam()+" heeft gewonnen!");
		}

		for(var i=0; i<vakjes.length; i++)
		{
			if (vakjes[i]!="")
			{
				teller++;
			}
		}
		
		if(teller==9)
		{
			spelActief=false;
			return("Gelijkspel, klik op nieuw spel om opnieuw te spelen.");
			
		}
	}
	
	function geefScoreSpeler1()
	{
		return speler1.geefScore();
	}
	
	function geefScoreSpeler2()
	{
		return speler2.geefScore();
	}
	
	function resetSpeler1()
	{
		speler1.maakNaam();
		speler1.resetScore();
	}
	
	function resetSpeler2()
	{
		speler2.maakNaam();
		speler2.resetScore();
	}
}