Titanium.UI.orientation = Titanium.UI.Portrait;


Titanium.UI.setBackgroundColor('#000');


//create tab group
var tabGroup = Titanium.UI.createTabGroup();

//create base UI tab and root window
var win1 = Titanium.UI.createWindow({  
	backgroundColor: '#333300',
});

//Tab1
var tab1 = Titanium.UI.createTab({   
	//icon: 'KS_nav_view.png',
	title: 'Profile',
	window:win1
});

var label1 = Titanium.UI.createLabel({
	color: '#FFFFFF',
	text: 'I am your profile',
	font: {fontsize:20, fontFamily:'Helvetica Neue'
	},
	textAlign: 'center',
	width:'auto' 
});

win1.add(label1);

//Tab2

var win2 = Titanium.UI.createWindow({
	backGroundcolor: '#333300',
});
var tab2 = Titanium.UI.createTab({
	//icon: 'KS_nav_view.png',
	title: 'Setting',
	window:win2
});

var label2 = Titanium.UI.createLabel({
	color: '#999',
	text: 'Setting Page',
	font: {fontSize:20,fontFamily: 'Helvetica Neue'},
	textAlign: 'center',
	width: 'auto'
});

win2.add(label2);

//win1.add(label1);
//win2.add(lable2);
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);

tabGroup.open();

