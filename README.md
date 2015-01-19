App42-Android-Push-Sample-Using-PhoneGap
==========================


# About Application

1. This application shows how can we integrate PushNotification using App42 JavaScript API in PhoneGap Android application.
2. How we can send PushNotification using App42 JavaScript PushNotification API.


# Running Sample

This is a sample Android app is made by using App42 JavaScript API. It uses PushNotification API of App42 platform.
Here are the few easy steps to run this sample app.

1. [Register] (https://apphq.shephertz.com/register) with App42 platform.
2. Create an app once, you are on Quick start page after registration.
3. If you are already registered, login to [AppHQ] (http://apphq.shephertz.com) console and create an app from App Manager Tab.
4. To use PushNotification service in your application open [link] (https://code.google.com/apis/console/b/0/?noredirect&pli=1) and create a new project here.
5. Click on services option in Google console and enable Google Cloud Messaging for Android service.
6. Click on API Access tab and create a new server key for your application with blank server information.
7. Go to [AppHQ] (http://apphq.shephertz.com) console and click on PushNotification and select Android Settings in Settings option.
8. Select your app and copy server key that is generated by using Google API console in step 6, and submit it.
9. Download the project from [here] (https://github.com/VishnuGShephertz/Android-Push-Notification-in-PhoneGap-application/archive/master.zip) and import it in the eclipse.
10. Open index.html  file in assets/app42 folder of sample app and make following changes.

```
A. Replace api-Key and secret-Key that you have received in step 2 or 3 at line number 51.
B. Replace your user-id by which you want to register your application for PushNotification at line number 52.
```

11.Open App42PhonegapPush.java file in sample app and make following changes.

```
A. Replace project-no with your Google Project Number at line number 28.
```
12.Build your android application and install on your android device.

__Test and verify PushNotification from AppHQ console__
 
```
A. After registering for PushNotification go to AppHQ console and click on PushNotification and select
  application after selecting User tab.
B. Select desired user from registered User-list and click on Send Message Button.
C. Send appropriate message to user by clicking Send Button.

```
# Design Details:
__Initializing App42API in JavaScript to send PushNotification :__ To Send PushNotification using APP42 JavaScript API we have to initialize first using Api-Key and Secret-Key in index.html file.
 
```
	function intializeApp42API() {
			App42.initialize('<YOUR API KEY>', '<YOUR SECRET KEY>');
			App42.setLoggedInUser('<Your User Id>');
		}

```
__Multiple Language Support:__ Using App42 Push Notification API you can easily send PushNotification in multiple langunage ,by setting following property.
 
```
	    var arr = {dataEncoding:true};
            push.setOtherMetaHeaders(arr);

```

__Registering on GCM for PushNotification in Android:__ To get PushNotification we have to register on GCM using Google Project No in App42PhonegapPush.java file.
 
```
  
            Util.registerWithApp42("<Your Google Project No>");

```



__Send PushNotification to User using JavaScript App42 API :__ If you want to send PushNotification message using App42 API , pass the userId and
message in this method written in index.html file.
 
```
	function sendPushToUser() {
            var msg = document.getElementById('msg').value;
            var username = document.getElementById('user').value;
            var push = new App42Push();
            var arr = {dataEncoding:true};
            push.setOtherMetaHeaders(arr);
            push.sendPushMessageToUser(username, msg);
        }

```

__Send PushNotification to all users using JavaScript App42 API :__ If you want to send PushNotification message to all users using App42 API , pass message in this method written in index.html file.
 
```
	 function sendPushMessageToAll() {
			var push = new App42Push();
			var message = document.getElementById('msg').value;
			  var arr = {dataEncoding:true};
                           push.setOtherMetaHeaders(arr);
			push.sendPushMessageToAll(message);
		}

```

__Customize PushNotification Message:__ You can also customize your PushNotification message by changing following code in GCMIntentService.java file accordingly.
 
```
       Notification notification = new NotificationCompat.Builder(context)
        .setContentTitle(title)
        .setContentText(message)
        .setContentIntent(intent)
        .setSmallIcon(android.R.drawable.menuitem_background)
        .setWhen(when)
        .setLargeIcon(bmp)
        .setLights(Color.YELLOW, 1, 2)
        .setAutoCancel(true)
        .build();
         notification.defaults |= Notification.DEFAULT_SOUND; 
         notification.defaults |= Notification.DEFAULT_VIBRATE;
         notificationManager.notify(0, notification);

```



__Calling JavaScript pushMessageAlert(msg) function from Android native code:__ Whenever PushNotification comes on device we have to render it on HTML page.

 
```
 	public void renderData(final String message) {
		try {
			Thread.sleep(5000);
			super.loadUrl("javascript:pushMessageAlert(\"" + message + "\")");
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 	}


```

__Rendering PushNotification on HTML Page:__ Whenever PushNotification comes on device we have to render it on HTML page.Following function is called from Android native and render PushNotification on Html Page.

```
    function pushMessageAlert(msg) {
			   alert(msg)
		  	document.getElementById("mytext").innerHTML = msg;
	 	}

```
__Calling JavaScript registerForPush(deviceId) function from Android native code:__ This function is used to store device Id on App42 to get PushNotification.

```
 	public void registerForApp42Push(String deviceId) {
		try {
			Thread.sleep(5000);
			super.loadUrl("javascript:registerForPush(\"" + deviceId + "\")");
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	  }


```

__Store Device Token on App42:__ This function store device token on App42 using JavaScript API , called from Android native code.

```
   function registerForPush(deviceId) {
			var push = new App42Push();
			push.storeDeviceToken(App42.getLoggedInUser(),deviceId,'ANDROID');
		
		}

```

__AndroidManifest.xml file Changes:__ If you are customizing your own Android application that is built using PhoneGap API.
So make following changes in your AndroidManifest.xml using this sample's AndroidManifest.xml file.

1. Add following permission in your AndroidManifest.xml file.

```
 <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.GET_ACCOUNTS" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.VIBRATE" />
     <uses-permission android:name="android.permission.WAKE_LOCK" />
     
      <permission
        android:name="com.shephertz.app42.android.phonegap.push.permission.C2D_MESSAGE"
        android:protectionLevel="signature" />

    <uses-permission android:name="com.shephertz.app42.android.phonegap.push.permission.C2D_MESSAGE" />
     <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />

```

2.Add Receiver component in your Androidmanifest.xml file.

```
    <receiver
            android:name="com.google.android.gcm.GCMBroadcastReceiver"
            android:permission="com.google.android.c2dm.permission.SEND" >
            <intent-filter>

                <!-- Receives the actual messages. -->
                <action android:name="com.google.android.c2dm.intent.RECEIVE" />
                <!-- Receives the registration id. -->
                <action android:name="com.google.android.c2dm.intent.REGISTRATION" />

                <category android:name="com.shephertz.app42.android.phonegap.push" />
            </intent-filter>
        </receiver>

```
3.Declare Service in your AndroidManifest.xml file.

```
  <service android:name="com.shephertz.app42.android.phonegap.push.GCMIntentService" >
        </service>
```
4.Replace "com.shephertz.app42.android.phonegap.push" with your application package name in AndroidManifest.xml file.
