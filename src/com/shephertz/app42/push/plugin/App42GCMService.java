/**
 * -----------------------------------------------------------------------
 *     Copyright © 2015 ShepHertz Technologies Pvt Ltd. All rights reserved.
 * -----------------------------------------------------------------------
 */
package com.shephertz.app42.push.plugin;

import android.app.IntentService;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.graphics.Color;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;

import com.app42.phonegap.push.PhoneGapActivity;
import com.app42.phonegap.push.R;
import com.google.android.gms.gcm.GoogleCloudMessaging;

/**
 * This {@code IntentService} does the actual handling of the GCM message.
 * {@code GcmBroadcastReceiver} (a {@code WakefulBroadcastReceiver}) holds a
 * partial wake lock for this service while the service does its work. When the
 * service is finished, it calls {@code completeWakefulIntent()} to release the
 * wake lock.
 * @author Vishnu Garg
 */

public class App42GCMService extends IntentService {
	private static final int NotificationId = 1;
	private NotificationManager mNotificationManager;
	NotificationCompat.Builder builder;
	public static final String ExtraMessage = "message";
	static int msgCount = 0;
	public static final String DisplayMessageAction = "com.example.app42sample.DisplayMessage";
	

	public App42GCMService() {
		super("App42GCMService");
	}

	public static final String TAG = "App42 Push Demo";

	@Override
	protected void onHandleIntent(Intent intent) {
		Bundle extras = intent.getExtras();
		GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(this);
		String messageType = gcm.getMessageType(intent);
		if (!extras.isEmpty()) { // has effect of unparcelling Bundle
			if (GoogleCloudMessaging.MESSAGE_TYPE_SEND_ERROR
					.equals(messageType)) {
			
				App42GCMReceiver.completeWakefulIntent(intent);
			} else if (GoogleCloudMessaging.MESSAGE_TYPE_DELETED
					.equals(messageType)) {
				
				App42GCMReceiver.completeWakefulIntent(intent);
				// If it's a regular GCM message, do some work.
			} else if (GoogleCloudMessaging.MESSAGE_TYPE_MESSAGE
					.equals(messageType)) {
				String message = intent.getExtras().getString("message");
				showNotification(message, intent);
			}
		}
		// Release the wake lock provided by the WakefulBroadcastReceiver.

	}
	private void showNotification(String message,Intent intent) {
		broadCastMessage(message);
		sendNotification(message);
		App42GCMReceiver.completeWakefulIntent(intent);
	}
	// Put the message into a notification and post it.
	// This is just one simple example of what you might choose to do with
	// a GCM message.
	/**
	 * @param msg
	 */
	private void sendNotification(String msg) {
		String title = this.getString(R.string.app_name);
		long when = System.currentTimeMillis();
		mNotificationManager = (NotificationManager) this
				.getSystemService(Context.NOTIFICATION_SERVICE);
		Intent notificationIntent;
		try {
			notificationIntent = new Intent(this,
					Class.forName(getActivityName()));
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			notificationIntent = new Intent(this, PhoneGapActivity.class);
		}
		notificationIntent.putExtra("message_delivered", true);
		notificationIntent.putExtra(ExtraMessage, msg);

		// set intent so it does not start a new activity
		notificationIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP
				| Intent.FLAG_ACTIVITY_SINGLE_TOP);
		PendingIntent contentIntent = PendingIntent.getActivity(this, 0,
				notificationIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(
				this).setSmallIcon(R.drawable.ic_launcher)
				.setContentTitle(title)
				.setStyle(new NotificationCompat.BigTextStyle().bigText(msg))
				.setContentText(msg).setWhen(when).setNumber(++msgCount)
				.setLights(Color.YELLOW, 1, 2).setAutoCancel(true)
				.setDefaults(Notification.DEFAULT_SOUND)
				.setDefaults(Notification.DEFAULT_VIBRATE);

		mBuilder.setContentIntent(contentIntent);
		mNotificationManager.notify(NotificationId, mBuilder.build());
	}

	/**
     * 
     */
	public static void resetMsgCount() {
		msgCount = 0;
	}

	/**
	 * @param message
	 */
	public void broadCastMessage(String message) {
		Intent intent = new Intent(DisplayMessageAction);
		intent.putExtra(ExtraMessage, message);
		this.sendBroadcast(intent);
	}

	/**
	 * @return
	 */
	private String getActivityName() {
		ApplicationInfo ai;
		try {
			ai = this.getPackageManager().getApplicationInfo(
					this.getPackageName(), PackageManager.GET_META_DATA);
			Bundle aBundle = ai.metaData;
			return aBundle.getString("onMessageOpen");
		} catch (NameNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "MainActivity";
		}
	}

}
