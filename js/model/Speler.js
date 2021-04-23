'use strict'

function Speler(symbool, aanDeBeurt) //klasse
{
	var score=0;
	var naam;
	var aanDeBeurt;
	var symbool=symbool;
	
	this.geefScore=geefScore;
	this.geefNaam=geefNaam;
	this.maakNaam=maakNaam;
	this.verhoogScore=verhoogScore;
	this.resetScore=resetScore;
	this.geefSymbool=geefSymbool;
	this.geefAanDeBeurt=geefAanDeBeurt;
	this.zetAanDeBeurt=zetAanDeBeurt;
	
	function geefNaam()
	{
		return naam;
	}
	
	function geefScore()
	{
		return score;
	}
	
	function maakNaam(tijdelijkeNaam)
	{
		naam=tijdelijkeNaam;
	}
	
	function verhoogScore()
	{
		score++;
	}
	
	function resetScore()
	{
		score=0;
	}
	
	function geefAanDeBeurt()
	{
		return aanDeBeurt;
	}
	
	function zetAanDeBeurt(waarde)
	{
		aanDeBeurt=waarde;
	}
	
	function geefSymbool()
	{
		return symbool;
	}
}