var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
	document.addEventListener("offline", onOffline, false);

function onOffline() {
$('#BtnEnt').hide();
$('#inetOff').show();
ref.close();
}
	    
//document.addEventListener("online", onOnline, false);
//function onOnline() {
//var ref = cordova.InAppBrowser.open('http://elecor.controlsoft.kz/app/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
//$('#inetOff').hide();
//$('#BtnEnt').show();
//}

if(localStorage.ipush){}
else{
$('.loader1').css('height',screen.width+'px');
$('.loader1').fadeIn();
}
		


$("#BtnEnt" ).click(function() {
var ref = cordova.InAppBrowser.open('http://smartbus.controlsoft.kz', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
var ref = cordova.InAppBrowser.open('http://smartbus.controlsoft.kz', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
        

    }
};

app.initialize();
