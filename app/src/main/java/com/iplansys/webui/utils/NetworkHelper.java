package com.iplansys.webui.utils;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;


/*This declares whether the internet is enabled or not*/
public class NetworkHelper {
    public static boolean isNetworkAvailable(Context context) {
        if (context != null) {
            ConnectivityManager connectivityManager = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
            return activeNetworkInfo != null && activeNetworkInfo.isAvailable();
        }
        return false;
    }

}
