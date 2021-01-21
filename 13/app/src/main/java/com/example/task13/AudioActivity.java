package com.example.task13;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.media.MediaRecorder;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import java.io.IOException;
import java.time.LocalDateTime;

public class AudioActivity extends AppCompatActivity {

    private static final String LOG_TAG = "AudioActivity";

    private boolean recording = false;
    private MediaRecorder recorder = null;
    private String fileName = "";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.audio_activity);
        // Record to the external cache directory for visibility
        fileName = getExternalCacheDir().getAbsolutePath();
        fileName += String.format("/audiorecordtest_%s.3gp", LocalDateTime.now());
    }

    @Override
    public void onBackPressed() {
        if (recording) {
            return;
        }
        stop();
    }

    public void changeState(View view) {
        if (recording) {
            recording = false;
            stopRecording();
            stop();
        } else {
            if (ActivityCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {

                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.RECORD_AUDIO}, 0);
            }
            recording = true;
            startRecording();
            ((Button) view).setText(getString(R.string.stop));

            ((TextView) findViewById(R.id.record_now_txt)).setVisibility(View.VISIBLE);

        }
    }

    public void stop() {
        if (recording) {
            return;
        }
        Intent data = new Intent();
        data.putExtra("filename", fileName);
        setResult(Activity.RESULT_OK, data);
        finish();
    }

    private void startRecording() {
        recorder = new MediaRecorder();
        recorder.setAudioSource(MediaRecorder.AudioSource.MIC);
        recorder.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);
        recorder.setOutputFile(fileName);
        recorder.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);

        try {
            recorder.prepare();
        } catch (IOException e) {
            Log.e(LOG_TAG, "prepare() failed");
        }

        recorder.start();
    }

    private void stopRecording() {
        recorder.stop();
        recorder.release();
        recorder = null;
    }
}
