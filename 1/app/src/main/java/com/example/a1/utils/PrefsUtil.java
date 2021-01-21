package com.example.a1.utils;

import android.app.Activity;
import android.content.SharedPreferences;

public class PrefsUtil {
    SharedPreferences prefs;

    public PrefsUtil(Activity activity){
        prefs = activity.getPreferences(Activity.MODE_PRIVATE);
    }


    public String getCity(){

        return prefs.getString("city", "Jerusalem, IL");
    }

    public void setCity(String city){
        prefs.edit().putString("city", city).commit();
    }
}
