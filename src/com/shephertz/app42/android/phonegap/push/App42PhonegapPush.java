package com.shephertz.app42.android.phonegap.push;

import org.apache.cordova.DroidGap;

import android.content.Intent;
import android.os.Bundle;

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
		init();
		appView.getSettings().setJavaScriptEnabled(true);
		super.loadUrl("file:///android_asset/app42/index.html");
		Intent intent = getIntent();
		String message = intent.getStringExtra("message");
		if (message != null)
			renderData(message);
		else
			Util.registerWithApp42("<Your Google Project No>", this);

	}

	/*
	 * This function is used to render PushNotification on HTML page
	 * 
	 * @param message that should be render on HTML page requires some time to
	 * render message on HTML page
	 */
	public void renderData(final String message) {
		try {
			GCMIntentService.resetMsgCount();
			Thread.sleep(5000);
			super.loadUrl("javascript:pushMessageAlert(\"" + message + "\")");
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/*
	 * This function is used to resister device for Push Notification using Java-Script App42 API
	 * @param deviceId that should be registered with App42 Push Notification
	 */
	public void registerForApp42Push(String deviceId) {
		try {
			Thread.sleep(5000);
			super.loadUrl("javascript:registerForPush(\"" + deviceId + "\")");
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}