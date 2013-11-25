App42-Android-Push-Sample-Using-PhoneGap
==========================


# About Application

1. This application shows how can we integrate Push Notification using App42 API in Phone-Gap Android application.
2. How we can send Push Notification using App42 Java-Script as well as Android Push Notification API.
3. How easily we can communicate between HTML and android native features in Phone Gap application of Android.

# Running Sample

This is a sample Android app is made by using App42 back-end platform. It uses Push Notification API of App42 platform.
Here are the few easy steps to run this sample app.

1. [Register] (https://apphq.shephertz.com/register) with App42 platform.
2. Create an app once, you are on Quick start page after registration.
3. If you are already registered, login to [AppHQ] (http://apphq.shephertz.com) console and create an app from App Manager Tab.
4. To use Push Notification service in your application go to https://code.google.com/apis/console a new project here.
5. Click on services option in Google console and enable Google Cloud Messaging for Android service.
6. Click on API Access tab and create a new server key for your application with blank server information.
7. Go to [AppHQ] (http://apphq.shephertz.com) console and click on Push Notification and select Android Settings in Settings option.
8. Select your app and copy server key that is generated by using Google API console in step 6, and submit it.
9. Download the project from [here] (https://github.com/shephertz/App42-Android-Push-Sample/archive/master.zip) and import it in the eclipse.
10. Open App42PhonegapPush.java file in sample app and make following changes.

```
A. Replace api-Key and secret-Key that you have received in step 2 or 3 at line number 37 and 38.
C. Replace your user-id by which you want to register your application for PushNotification at line number 39.
B. Replace project-no with your Google Project Number at line number 40.
```
11.Build your android application and install on your android device.

__Test and verify Push Notification__
 
```
A. After registering for Push Notification go to AppHQ console and click on Push Notification and select
  application after selecting User tab.
B. Select desired user from registered User-list and click on Send Message Button.
C. Send appropriate message to user by clicking Send Button.

```
# Design Details:

__Initializing App42API and registering User for Push Notification in Android:__ To get Push Notification we have to initialize App42 API and
have to register User for Push Notification in App42PhonegapPush.java file.
 
```
   App42API.initialize(
                this,
                "<YOUR API KEY>",
                "<YOUR SECRET KEY>");
             App42API.setLoggedInUser("<Your User Id>") ;
            Util.registerWithApp42("<Your Google Project No>");

```

__Initializing App42API in Java-script to send Push Notication using HTML Application:__ To Send Push Notification using APP42 Java-Script API we have to initialize first using Api-Key and Secret-Key in HTML file.
 
```
  function intializeApp42API() {
            App42
                    .initialize(
                            '<YOUR API KEY>',
                            '<YOUR SECRET KEY>');
        };

```

__Send Push Notification to User using Java-Script App42 API :__ If you want to send Push Notification message using App42 API , pass the userId and
message in below method .
 
```
function sendPushToUser() {
            var msg = document.getElementById('msg').value;
            var username = document.getElementById('user').value;
            var push = new App42Push();
            alert("send push to user "+username);
            push.sendPushMessageToUser(username, msg);
        }

```

__Send Push Notification to all users using Java-Script App42 API :__ If you want to send Push Notification message to all users using App42 API , pass message in below method .
 
```
    public void sendPushToAll(String message){
            App42API.buildPushNotificationService().sendPushMessageToAll(message, new App42CallBack() {
                @Override
                public void onSuccess(Object arg0) {
                    // TODO Auto-generated method stub
                    
                }
                
                @Override
                public void onException(Exception arg0) {
                    // TODO Auto-generated method stub
                    
                }
            });
        }

```
__Send Push Notification to User using Android App42 API :__ If you want to send Push Notification message using App42 API , pass the userId and
message in below method .
 
```
    public void sendPushToUSer(String userName,String message){
            App42API.buildPushNotificationService().sendPushMessageToUser(userName, message, new App42CallBack() {
                
                @Override
                public void onSuccess(Object arg0) {
                    // TODO Auto-generated method stub
                    
                }
                
                @Override
                public void onException(Exception arg0) {
                    // TODO Auto-generated method stub
                    
                }
            });
        }

```

__Send Push Notification to all users using Android App42 API :__ If you want to send Push Notification message to all users using App42 API , pass message in below method .
 
```
    public void sendPushToAll(String message){
            App42API.buildPushNotificationService().sendPushMessageToAll(message, new App42CallBack() {
                @Override
                public void onSuccess(Object arg0) {
                    // TODO Auto-generated method stub
                    
                }
                
                @Override
                public void onException(Exception arg0) {
                    // TODO Auto-generated method stub
                    
                }
            });
        }

```


__Customize Push Notification Message:__ You can also customize your Push Notification message by changing following code in GCMIntentService.java file accordingly.
 
```
     Notification notification = new Notification.Builder(context)
        .setContentTitle(title)
        .setContentText(message)
        .setContentIntent(intent)
        .setSmallIcon(android.R.drawable.stat_notify_sync)
        .setWhen(when)
        .setLargeIcon(bmp)
        .setLights(Color.YELLOW, 1, 2)
        .setAutoCancel(true)
        .getNotification();
        notification.defaults |= Notification.DEFAULT_SOUND; 
        notification.defaults |= Notification.DEFAULT_VIBRATE;
        notificationManager.notify(0, notification);

```

__MyJavaScriptInterface class:__ We have to make a MyJavaScriptInterface class in App42PhonegapPush.java file.This class uses for:

1. Act as a medium for communication between Java-script and Native Android.
2. We can perform native operation by calling its function from Java-script API.

 
```
       public class MyJavaScriptInterface {
        Context mContext;

        MyJavaScriptInterface(Context c) {
            mContext = c;
        }

        /*
         * This function is used to send Push Notification to a specific registered user
         * @params userName to which message should be sent
         * @params message
         */
        public void sendPushToUSer(String userName,String message){
            App42API.buildPushNotificationService().sendPushMessageToUser(userName, message, new App42CallBack() {
                
                @Override
                public void onSuccess(Object arg0) {
                    // TODO Auto-generated method stub
                    
                }
                
                @Override
                public void onException(Exception arg0) {
                    // TODO Auto-generated method stub
                    
                }
            });
        }
        
        /*
         * This function used to send Push Notification to all the users registered with this application
         * This function calls from java-script.
         * This function shows communication between java-script and Android Native
         */
        public void sendPushToAll(String message){
            App42API.buildPushNotificationService().sendPushMessageToAll(message, new App42CallBack() {
                @Override
                public void onSuccess(Object arg0) {
                    // TODO Auto-generated method stub
                    
                }
                
                @Override
                public void onException(Exception arg0) {
                    // TODO Auto-generated method stub
                    
                }
            });
        }
        
        /*
         * This function show Toast Message when called from Java-script
         * @param message that should be shown in form of Android Toast
         */
        public void showToast(String message) {
            Toast.makeText(mContext, message, Toast.LENGTH_SHORT).show();
        }

        /*
         * This function show Alert Dialog when called from Javascript
         */
        public void openAndroidDialog() {
            AlertDialog.Builder myDialog = new AlertDialog.Builder(
                    App42PhonegapPush.this);
            myDialog.setTitle("Welcome!");
            myDialog.setMessage("Integrate easily PushNotification Using PhoneGap!");
            myDialog.setPositiveButton("OK", null);
            myDialog.show();
        }

    }

```
__Add MyJavaScriptInterface on Appview using PhoneGap:__ You have to add MyJavaScriptInterface on your appView for communication between native and java-script API.
 
```
    final MyJavaScriptInterface myJavaScriptInterface = new MyJavaScriptInterface(
                this);
        init();
        appView.addJavascriptInterface(myJavaScriptInterface, "AndroidFunction");
        appView.getSettings().setJavaScriptEnabled(true);

```

__Calling Java-Script function from Android native code:__ Whenever Push Notification comes on device we have to render it on HTML page.

1. callFromActivity(msg) function() is defined in your html file to render Push Notification on HTML pages.
 
```
    public void renderData(final String message) {
        Thread t = new Thread() {
            public void run() {
                try {
                    sleep(3000);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            };
        };
        t.start();
        super.loadUrl("javascript:callFromActivity(\"" + message + "\")");
    }

```

__Rendering Push Notification on Html Page:__ Whenever Push Notification comes on device we have to render it on HTML page.Following function is called from Android native and render Push
Notification on Html Page.

```
    function callFromActivity(msg) {
			   alert(msg)
		  	document.getElementById("mytext").innerHTML = msg;
	 	}

```

__Calling Native Android function from Java-Script:__ Wa can also call native Android function from java-script that are defined in MyJavaScriptInterface
class.
As we added this class on Appview with Name "AndroidFunction" , So we can used this to call native function as did in index.html file.
 
```
    //Using this we can send Push Notification to all Users using Android native code.
    AndroidFunction.sendPushToAll(msg);
    
     //Using this we can send Push Notification to a User using Android native code.
    AndroidFunction.sendPushToUSer(user, msg);
    
    //Using this we can open a AlertDialog of Android App.
    AndroidFunction.openAndroidDialog();
    
    //Using this we can Show Android Toast Message
    AndroidFunction.showToast(toast);

```



