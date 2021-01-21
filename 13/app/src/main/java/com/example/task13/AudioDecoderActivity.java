package com.example.task13;

import android.os.Bundle;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class AudioDecoderActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.audio_decoder_activity);
        String filename = getIntent().getStringExtra("filename");
        TextView textView = findViewById(R.id.filename_txt);
        textView.setText(filename);

        TextView decodedTxt = findViewById(R.id.decoded_txt);
        decodedTxt.setText("Притворяемся, что распознали речь по переданному аудиофайлу");

    }
}
