'use strict'

function ViewBeheerder() //klasse
{
	var vakjesHTML=document.querySelectorAll('body>div>#speelveld>div');
	
	this.toonZet=toonZet;
	this.toonMededeling=toonMededeling;
	this.geefGekliktePlek=geefGekliktePlek;
	this.maakNieuwSpel=maakNieuwSpel;
	this.toonNaamSpeler1=toonNaamSpeler1;
	this.toonNaamSpeler2=toonNaamSpeler2;
	this.toonScoreSpeler1=toonScoreSpeler1;
	this.toonScoreSpeler2=toonScoreSpeler2;
	
	function geefGekliktePlek(bron)
	{
		for(var i=0;i<vakjesHTML.length; i++)
		{
			if(vakjesHTML[i]==bron)
			{
				return i;
			}
		}
	}
	
	function maakNieuwSpel()
	{
		for(var i=0; i<vakjesHTML.length; i++)
		{
			vakjesHTML[i].innerHTML="";
		}
	}
	
	function toonMededeling(mededeling)
	{
		var beurtHTML=document.querySelector('#beurt');
		beurtHTML.innerHTML=mededeling;
	}
	
	function toonNaamSpeler1(mededeling)
	{
		var naamSpeler1HTML=document.querySelector('#naamSpeler1');
		naamSpeler1HTML.innerHTML=mededeling;
	}
	
	function toonNaamSpeler2(mededeling)
	{
		var naamSpeler2HTML=document.querySelector('#naamSpeler2');
		naamSpeler2HTML.innerHTML=mededeling;
	}
	
	function toonScoreSpeler1(mededeling)
	{
		var scoreSpeler1HTML=document.querySelector('#scoreSpeler1');
		scoreSpeler1HTML.innerHTML=mededeling;
	}
	
	function toonScoreSpeler2(mededeling)
	{
		var scoreSpeler2HTML=document.querySelector('#scoreSpeler2');
		scoreSpeler2HTML.innerHTML=mededeling;
	}
	
	function toonZet(positie, symbool)
	{
		if(symbool=="X")
		{
			var imgHTML=document.createElement('img');
			imgHTML.src="img/kruisje.png";
			vakjesHTML[positie].appendChild(imgHTML);
		}
		else
		{
			var imgHTML=document.createElement('img');
			imgHTML.src="img/rondje.png";
			vakjesHTML[positie].appendChild(imgHTML);
		}
	}	
}
