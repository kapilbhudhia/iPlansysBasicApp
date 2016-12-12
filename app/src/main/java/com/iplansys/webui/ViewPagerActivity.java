package com.iplansys.webui;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class ViewPagerActivity extends AppCompatActivity {

    private WebView mWebView = null;
    private static final String landingPage = "http://ec2-34-193-78-144.compute-1.amazonaws.com:8080/ips/dashboard/index.html";
    private static final String newsPage = "http://ec2-34-193-78-144.compute-1.amazonaws.com:8080/ips/dashboard/index.html#iplansys";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_viewpage);
        mWebView = (WebView) findViewById(R.id.activity_main_webview);

        final ProgressDialog progressDialog = ProgressDialog.show(this, "", "Loading...", true);

        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                if (progressDialog != null && progressDialog.isShowing()) {
                    progressDialog.dismiss();
                }
            }
        });

        mWebView.loadUrl(landingPage);

        Intent intent = getIntent();
        if (intent != null) {
            Bundle extras = intent.getExtras();

            String navigateToNewsPage;

            if (extras != null) {
                navigateToNewsPage = extras.getString("NavigateToNewsPage");
                if (navigateToNewsPage != null) {
                    mWebView.loadUrl(newsPage);
                }
            }
        }

    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (event.getAction() == KeyEvent.ACTION_DOWN) {
            switch (keyCode) {
                case KeyEvent.KEYCODE_BACK:
                    if (mWebView.canGoBack()) {
                        mWebView.goBack();
                    } else {
                        finish();
                    }
                    return true;
            }
        }
        return super.onKeyDown(keyCode, event);
    }
}