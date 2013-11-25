package com.shephertz.app42.android.phonegap.push;

import org.apache.cordova.DroidGap;

import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.shephertz.app42.paas.sdk.android.App42API;
import com.shephertz.app42.paas.sdk.android.App42CallBack;

/**
 * @author Vishnu Garg
 * 
 */
public class App42PhonegapPush extends DroidGap {
	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("loadUrlTimeoutValue", 380000);
		final MyJavaScriptInterface myJavaScriptInterface = new MyJavaScriptInterface(
				this);
		init();
		appView.addJavascriptInterface(myJavaScriptInterface, "AndroidFunction");
		appView.getSettings().setJavaScriptEnabled(true);
		super.loadUrl("file:///android_asset/app42/index.html");
		Intent intent = getIntent();
		String message = intent.getStringExtra("message");
		if (message != null)
			renderData(message);

		 App42API.initialize(
	                this,
	                "462302e01fed25065d6cb856ddfad422a871c05f39b4193e68a78da66eaa42b1",
	                "60735a72502ebff2d6b4318fed646049720063e3cdbda5d647ed27d97567e179");
	        App42API.setLoggedInUser("tillu") ;
	       Util.registerWithApp42("531770420900");
	}

	/*
	 * This function is used to render PushNotification on HTML page
	 * 
	 * @param message that should be render on HTML page
	 */
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

	/*
	 * This class is used to communicate from javascript to Android native
	 * functions
	 */
	public class MyJavaScriptInterface {
		Context mContext;

		MyJavaScriptInterface(Context c) {
			mContext = c;
		}

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
		 * This function show Toast Message when called from Javascript
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
}