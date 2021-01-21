package com.example.task13;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private String filename;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (data == null) {
            return;
        }
        filename = data.getStringExtra("filename");
        TextView view = findViewById(R.id.filename_txt);
        String templateFilename = String.format(getString(R.string.filename_txt_template), filename);
        view.setText(templateFilename);
        Button btn = findViewById(R.id.decode_btn);
        btn.setVisibility(View.VISIBLE);
    }

    public void toAudioActivity(View view) {
        Intent intent = new Intent(this, AudioActivity.class);
        startActivityForResult(intent, 0);
    }

    public void decode(View view) {
        Intent intent = new Intent(this, AudioDecoderActivity.class);
        intent.putExtra("filename", filename);
        startActivityForResult(intent, 0);
    }
}