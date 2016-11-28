package com.iplansys.webui;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class Viewpage extends AppCompatActivity {

    private WebView mWebView = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_viewpage);
        mWebView = (WebView) findViewById(R.id.activity_main_webview);

        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        String landingPage = "http://ec2-34-193-78-144.compute-1.amazonaws.com:8080/ips/dashboard/index.html";
        String newsPage = "http://ec2-34-193-78-144.compute-1.amazonaws.com:8080/ips/dashboard/index.html#iplansys";

        mWebView.setWebViewClient(new WebViewClient());
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
}
