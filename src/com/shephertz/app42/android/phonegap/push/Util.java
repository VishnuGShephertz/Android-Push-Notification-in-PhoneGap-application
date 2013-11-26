package com.shephertz.app42.android.phonegap.push;

import android.content.Context;

import com.google.android.gcm.GCMRegistrar;

/**
 * @author Vishnu Garg
 * 
 */
public class Util {

	/*
	 * This function is used to register Android device on App42 to integrate
	 * PushNotification
	 * 
	 * @param ProjectNo
	 */
	public static void registerWithApp42(String projectNo, Context context) {

		GCMIntentService.setProjectNO(projectNo);
		final String deviceRegId = GCMRegistrar.getRegistrationId(context);
		if (deviceRegId.equals("")) {
			GCMRegistrar.register(context, projectNo);

		} else if (!GCMRegistrar.isRegisteredOnServer(context)) {

			((App42PhonegapPush) context).registerForApp42Push(deviceRegId);
		}
	}

}
