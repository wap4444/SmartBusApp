var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
   document.addEventListener("offline", onOffline, false);
function onOffline() {
ref.close();
}
document.addEventListener("online", onOnline, false);
 
function onOnline() {
}
if(localStorage.ipush){}
else{}

$("#BtnEnt" ).click(function() {
var ref = cordova.InAppBrowser.open('http://alexey.smart-pavlodar.kz/Employees/app/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
        
function didReceiveRemoteNotificationCallBack(jsonData) {}
function didOpenRemoteNotificationCallBack(jsonData) {
var ref = cordova.InAppBrowser.open(jsonData.notification.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}     
        //Настройка ПУШЕЙ ДЛЯ АЙФОНА
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = true;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;
        //ПОДКЛЮЧЕНИЕ ПУШЕЙ 
           window.plugins.OneSignal
          .startInit("dbd68e9e-2267-4f89-b571-15a43bf95477")
          .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
	  .handleNotificationOpened(didOpenRemoteNotificationCallBack)
          .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .iOSSettings(iosSettings)
          .endInit();
window.plugins.OneSignal.getIds(function(ids) {
ipush = ids.userId;
localStorage.ipush=ipush;
var ref = cordova.InAppBrowser.open('http://alexey.smart-pavlodar.kz/Employees/app/?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
    }
};
