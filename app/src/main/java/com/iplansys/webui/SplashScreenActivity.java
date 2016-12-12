package com.iplansys.webui;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.iplansys.webui.utils.NetworkHelper;

public class SplashScreenActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);

        if (NetworkHelper.isNetworkAvailable(SplashScreenActivity.this)) {
            activityCall();
        } else {
            Toast.makeText(SplashScreenActivity.this, "Please check internet connection", Toast.LENGTH_SHORT).show();
        }

    }

    private void activityCall() {
        // delay the screen for 2000 miliseconds
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {

                Intent intent = new Intent(SplashScreenActivity.this, ViewPagerActivity.class);
                startActivity(intent);
                finish();
                overridePendingTransition(R.anim.slide_in_left, R.anim.slide_out_left);

            }
        }, 2000);
    }

}

