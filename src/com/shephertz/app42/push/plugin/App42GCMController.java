/**
 * -----------------------------------------------------------------------
 *     Copyright © 2015 ShepHertz Technologies Pvt Ltd. All rights reserved.
 * -----------------------------------------------------------------------
 */
package com.shephertz.app42.push.plugin;

/**
 * @author Vishnu Garg
 */
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager.NameNotFoundException;
import android.os.Handler;
import android.util.Log;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.google.android.gms.gcm.GoogleCloudMessaging;
/**
 * @author Vishnu Garg
 *
 */
public class App42GCMController {
	private static final int PlayServiceResolutionRequest = 9000;
	private static final String Tag = "App42PushNotification";
	public static final String KeyRegId = "registration_id";
	private static final String KeyAppVersion = "appVersion";
	private static final String PrefKey = "App42PushSample";
	private static final String KeyRegisteredOnApp42 = "app42_register";
    
	/** 
	 * This function checks for GooglePlay Service availability
	 * @param activity
	 * @return
	 */
	public static boolean isPlayServiceAvailable(Activity activity) {
		int resultCode = GooglePlayServicesUtil
				.isGooglePlayServicesAvailable(activity);
		if (resultCode != ConnectionResult.SUCCESS) {
			if (GooglePlayServicesUtil.isUserRecoverableError(resultCode)) {
				GooglePlayServicesUtil.getErrorDialog(resultCode, activity,
						PlayServiceResolutionRequest).show();
			} else {
				Log.i(Tag, "This device is not supported.");
			}
			return false;
		}
		return true;
	}

	/**
	 * This function used to get GCM Registration Id from New API
	 * @param context
	 * @return
	 */
	@SuppressLint("NewApi")
	public static String getRegistrationId(Context context) {
		final SharedPreferences prefs = getGCMPreferences(context);
		String registrationId = prefs.getString(KeyRegId, "");
		if (registrationId.isEmpty()) {
			Log.i(Tag, "Registration not found.");
			return "";
		}
		// Check if app was updated; if so, it must clear the registration ID
		// since the existing regID is not guaranteed to work with the new
		// app version.
		int registeredVersion = prefs.getInt(KeyAppVersion,
				Integer.MIN_VALUE);
		int currentVersion = getAppVersion(context);
		if (registeredVersion != currentVersion) {
			Log.i(Tag, "App version changed.");
			return "";
		}
		return registrationId;
	}

	/**
	 * @param context
	 * @return
	 */
	private static SharedPreferences getGCMPreferences(Context context) {
		return context.getSharedPreferences(PrefKey, Context.MODE_PRIVATE);
	}

	/**
	 * Get AppVersion
	 * @param context
	 * @return
	 */
	private static int getAppVersion(Context context) {
		try {
			PackageInfo packageInfo = context.getPackageManager()
					.getPackageInfo(context.getPackageName(), 0);
			return packageInfo.versionCode;
		} catch (NameNotFoundException e) {
			// should never happen
			throw new RuntimeException("Could not get package name: " + e);
		}
	}

	/**
	 * Store registartion Id from GCM in preferences
	 * @param context
	 * @param regId
	 */
	public static void storeRegistrationId(Context context, String regId) {
		final SharedPreferences prefs = getGCMPreferences(context);
		int appVersion = getAppVersion(context);
		Log.i(Tag, "Saving regId on app version " + appVersion);
		SharedPreferences.Editor editor = prefs.edit();
		editor.putString(KeyRegId, regId);
		editor.putInt(KeyAppVersion, appVersion);
		editor.commit();
	}

	/**
	 * Validate if registered
	 * @param context
	 * @return
	 */
	public static boolean isApp42Registerd(Context context){
		return getGCMPreferences(context).getBoolean(KeyRegisteredOnApp42, false);
	}
	/**
	 * @param context
	 * @param regId
	 */
	public static void storeApp42Success(Context context) {
		final SharedPreferences prefs = getGCMPreferences(context);
		SharedPreferences.Editor editor = prefs.edit();
		editor.putBoolean(KeyRegisteredOnApp42, true);
		editor.commit();
	}

	/**
	 * @param context
	 * @param googleProjectNo
	 * @param callBack
	 */
	@SuppressLint("NewApi")
	public static void registerOnGCM(Context context,
			String googleProjectNo, App42GCMListener callBack) {
		GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(context);
		String regId = App42GCMController.getRegistrationId(context);
		if (regId.isEmpty()) {
			registeronGCM(context, googleProjectNo, gcm, callBack);
		} else
			callBack.onGCMRegistrationId(regId);
	}

	
	/** 
	 * Used to register device on GCM
	 * @param context
	 * @param googleProjectNo
	 * @param gcm
	 * @param callback
	 */
	public static void registeronGCM(final Context context,
			final String googleProjectNo, final GoogleCloudMessaging gcm,
			final App42GCMListener callback) {
		final Handler callingThreadHandler = new Handler();
		new Thread() {
			@Override
			public void run() {
				try {
					final String regid = gcm.register(googleProjectNo);
					callingThreadHandler.post(new Runnable() {
						@Override
						public void run() {
							if (callback != null) {
								callback.onGCMRegistrationId(regid);
							}
						}
					});
				} catch (final Exception ex) {
					callingThreadHandler.post(new Runnable() {
						@Override
						public void run() {
							if (callback != null) {
								callback.onError(ex.getMessage());
							}
						}
					});
				}
			}
		}.start();
	}

	
	/**
	 * CallBack Listener
	 *
	 */
	public interface App42GCMListener {
		public void onError(String errorMsg);
		public void onGCMRegistrationId(String gcmRegId);
	

	}
	
	

}
