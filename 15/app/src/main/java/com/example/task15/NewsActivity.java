package com.example.task15;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;


public class NewsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.news_activity_layout);
        String theme = getIntent().getStringExtra("theme");
        TextView text = findViewById(R.id.news_page_header);
        String template = getString(R.string.new_header_txt);
        text.setText(String.format(template, theme));
    }
}
