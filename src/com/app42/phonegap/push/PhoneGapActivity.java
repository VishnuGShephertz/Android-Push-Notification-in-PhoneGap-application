/**
 * -----------------------------------------------------------------------
 *     Copyright © 2015 ShepHertz Technologies Pvt Ltd. All rights reserved.
 * -----------------------------------------------------------------------
 */
package com.app42.phonegap.push;

import org.apache.cordova.DroidGap;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.util.Log;

import com.shephertz.app42.push.plugin.App42GCMController;
import com.shephertz.app42.push.plugin.App42GCMController.App42GCMListener;
import com.shephertz.app42.push.plugin.App42GCMService;

/**
 * @author Vishnu Garg
 * 
 */
public class PhoneGapActivity extends DroidGap implements App42GCMListener{
	/** Called when the activity is first created. */
	private final int TimeOut = 38000;
	private static final String GoogleProjectNo = "Your Google Project No";
	private final String FilePath="file:///android_asset/app42/index.html";
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("loadUrlTimeoutValue", TimeOut);
		init();
		appView.getSettings().setJavaScriptEnabled(true);
		super.loadUrl(FilePath);
		Intent intent = getIntent();
		String message = intent.getStringExtra(App42GCMService.ExtraMessage);
		if (message != null)
			renderData(message);
		else{
			if (App42GCMController.isPlayServiceAvailable(this)) {
				App42GCMController.registerOnGCM(PhoneGapActivity.this,
						GoogleProjectNo, this);
			} else {
				Log.i("App42PushNotification",
						"No valid Google Play Services APK found.");
			}
		}
	}

	/*
	 * This function is used to render PushNotification on HTML page
	 * 
	 * @param message that should be render on HTML page requires some time to
	 * render message on HTML page
	 */
	public void renderData(final String message) {
		try {
			App42GCMService.resetMsgCount();
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
	/*
	 * This method receives Push Notification messages 
	 */
	private final BroadcastReceiver mHandleMessageReceiver = new BroadcastReceiver() {
		@Override
		public void onReceive(Context context, Intent intent) {
			try {
					String message = intent.getStringExtra(App42GCMService.ExtraMessage);
					if (message != null)
						renderData(message);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	};
	public void onStart() {
		super.onStart();
		registerReceiver(mHandleMessageReceiver, new IntentFilter(
				App42GCMService.DisplayMessageAction));
		
	}
	@Override
	public void onDestroy() {
		super.onDestroy();
		unregisterReceiver(mHandleMessageReceiver);
	}

	/* (non-Javadoc)
	 * @see com.shephertz.app42.push.plugin.App42GCMController.App42GCMListener#onError(java.lang.String)
	 */
	@Override
	public void onError(String errorMsg) {
		// TODO Auto-generated method stub
		
	}
	/* (non-Javadoc)
	 * @see com.shephertz.app42.push.plugin.App42GCMController.App42GCMListener#onGCMRegistrationId(java.lang.String)
	 */
	@Override
	public void onGCMRegistrationId(String gcmRegId) {
		// TODO Auto-generated method stub
		registerForApp42Push(gcmRegId);
	}
}