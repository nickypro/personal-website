function simpleBox(simpleText, extraText,) {
	//create the main text
	document.writeln(simpleText);

	if (extraText != "") {
		document.writeln('( ' ,  extraText ,' )');
	}
}



function multiBox(filePlace, fileName, fileNum, fileType, altText, extraDialogue) {
	//create the link
	document.writeln(' <a href="', filePlace, fileName, fileNum, fileType,'"> ');
	
	//create the main text
	if (altText == -1) {
		document.writeln('<div class="assignmentLink">');
	} else if (altText != "") {
		document.writeln('<div class="assignmentLink">', altText );
	} else {
		document.writeln('<div class="assignmentLink">', fileName, fileNum, fileType  );
	}

	//create the sub text
	if (extraDialogue != "" && extraDialogue != undefined)  {
		document.writeln(' <div class="assignmentLinkSmall"> ( ' ,  extraDialogue ,'  ) </div> ');
	}

	//close box
	document.writeln('</div> </a>')
}

function homework( dir, hwNumber, hwDate,  	 solMax) {
	multiBox(dir, 'hp', hwNumber, '.pdf','', hwDate);
	if (hwNumber <= solMax) {
	   multiBox(dir, 'hs', hwNumber, '.pdf', -1,   'Solution');
	} else {
		document.writeln('');
	};

	document.writeln('')
}


function listHomeworks( Directry, numberOfHomeworks, ArrayofDates, maximumSolution) {
	document.writeln('<button class="dropButton" type="button" onclick="collapseItem(\'', Directry,'\')">  &#9660; Homework  </button>');
	
	document.writeln('<div id="', Directry, '" class="dropdownTable closedDrop">');
	
	for (i = 1; i <= numberOfHomeworks; i++) {
		homework(Directry, i, ArrayofDates[i-1], maximumSolution);
	}
	document.writeln('</div>')
}

function homeworkTop( dir, hwNumber, hwDateArray, hw) {
	document.writeln('<div class="dropdownTable">');
	if (hw == undefined) {hw = 'hp'}
	multiBox(dir, hw, hwNumber, '.pdf','', hwDateArray[hwNumber - 1]);
	document.writeln('</div>')
}

//tutorials
function tutorial( dir, hwNumber, solMax, Tp, Ts) {
	multiBox(dir, Tp, hwNumber, '.pdf', '', '');

	if (hwNumber <= solMax) {
	   multiBox(dir, Ts , hwNumber, '.pdf', -1,   'Solution');
	} else {
		document.writeln('');
	};

	document.writeln('')
}

function listTutorials( Directry, numberOfHomeworks, maximumSolution, altTp, altTs) {
	document.writeln('<button class="dropButton" type="button" onclick="collapseItem(\'', Directry + 'tut','\')">  &#9660; Tutorials  </button>');
	
	document.writeln('<div id="', Directry + 'tut', '" class="dropdownTable closedDrop">');
	
	if (altTp == undefined) { altTp = "tp"};
	if (altTs == undefined) { altTs = "ts"};

	for (i = 1; i <= numberOfHomeworks; i++) {
		tutorial(Directry, i, maximumSolution, altTp, altTs);
	}
	document.writeln('</div>')
}




function listLectures( Directry, numberOfLectures, lecEnd, id, LecAltText){
	document.writeln('<button class="dropButton" type="button" onclick="collapseItem(\'', Directry ,'\')">  &#9660; Lectures </button>');
	document.writeln('<div id="', Directry ,'" class="dropdownTable closedDrop">')
	
	for (i = 1; i <= numberOfLectures; i++) {

		if (LecAltText == undefined) { multiBox(Directry, '' , i, lecEnd, 'Lecture ' + i, 0); }

		else { 
			if (LecAltText[i-1] == undefined) {
				LecAltText[i-1] =  'Lecture ' + i;
				multiBox(Directry, '' , i, lecEnd, LecAltText[i-1], 0);
			}
			else {
				multiBox(Directry, '' , i, lecEnd, -1, LecAltText[i-1]);
			}
		}
	}
	
	document.writeln('</div>');
}


function collapseItem( collapseID ) {
    var x = document.getElementById( collapseID );
    /*
    if (x.style.display === "none") {
        x.style.display =  "block";
    } else {
        x.style.display =   "none";
    }
    */
    if (x.classList.contains('closedDrop')) {
    	x.classList.remove('closedDrop');
    	x.classList.add('openDrop');
    }
    else {
    	x.classList.add('closedDrop');
    	x.classList.remove('openDrop');
    }
}

function list( dropdownName, Directry, mainName, numberOfMains, altMainName, underTextDate, sideName, numberOfSides, altSideName, altNumbers) {
	document.writeln('<button class="dropButton" type="button" onclick="collapseItem(\'', Directry + mainName, '\')">  &#9660; ',dropdownName,'  </button>');
	
	document.writeln('<div id="', Directry + mainName, '" class="dropdownTable closedDrop">');

	for (i = 1; i <= numberOfMains; i++) 
	{
		if (altNumbers[i-1] != undefined) { j=altNumbers[i-1] } else { j = i }
		if (['',undefined,0].indexOf(altMainName[i-1]) !== -1) {altMainName[i-1]=mainName+' '+i}
		if (['',undefined,0].indexOf(altSideName[i-1]) !== -1) {altSideName[i-1]=sideName+' '+i}

		multiBox(Directry, mainName, j, '.pdf', altMainName[i-1], underTextDate[i-1]);
		if (i <= numberOfSides) 
		{
		multiBox(Directry, sideName, j, '.pdf', -1			, altSideName[i-1]);
		}
	}

	document.writeln('</div>')
}

function getTop(dir, mainName , mainNumber, dateArray) {
	document.writeln('<div class="dropdownTable">');
	multiBox(dir, mainName, mainNumber, '.pdf','', dateArray[mainNumber - 1]);
	document.writeln('</div>')
}
