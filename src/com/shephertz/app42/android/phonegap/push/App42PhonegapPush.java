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
	private final int TimeOut = 38000;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("loadUrlTimeoutValue", TimeOut);
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

		App42API.initialize(this, "<YOUR API KEY>", "<YOUR SECRET KEY>");
		App42API.setLoggedInUser("<Your User Id>");
		Util.registerWithApp42("<Your Google Project No>");

	}

	/*
	 * This function is used to render PushNotification on HTML page
	 * 
	 * @param message that should be render on HTML page
	 * requires some time to render message on HTML page
	 */
	public void renderData(final String message) {
		try {
			Thread.sleep(5000);
			super.loadUrl("javascript:callFromActivity(\"" + message + "\")");
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
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

		/*
		 * This function is used to send PushNotification to a specific
		 * registered user
		 * 
		 * @param userName to which message should be sent
		 * 
		 * @param message
		 */
		public void sendPushToUSer(String userName, String message) {
			App42API.buildPushNotificationService().sendPushMessageToUser(
					userName, message, new App42CallBack() {

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
		 * This function used to send PushNotification to all the users
		 * registered with this application This function calls from
		 * java-script. This function shows communication between java-script
		 * and Android Native
		 */
		public void sendPushToAll(String message) {
			App42API.buildPushNotificationService().sendPushMessageToAll(
					message, new App42CallBack() {
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
		 * 
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
}