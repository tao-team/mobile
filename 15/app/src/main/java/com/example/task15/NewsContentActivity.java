package com.example.task15;

import android.os.AsyncTask;
import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.task15.client.FishHttpClient;

public class NewsContentActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.news_content_layout);
        new HttpTask().execute();
        String title = getIntent().getStringExtra("title");
        TextView text = findViewById(R.id.content_page_header);
        text.setText(title);
    }

    class HttpTask extends AsyncTask<Integer, Void, String> {

        @Override
        protected String doInBackground(Integer... integers) {
            return FishHttpClient.getNewContent();
        }

        @Override
        protected void onPostExecute(String str) {
            super.onPostExecute(str);
            TextView viewById = NewsContentActivity.this.findViewById(R.id.new_page_content);
            viewById.setText(str);
        }

    }

}
