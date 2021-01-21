package com.example.task_10;

import android.os.Bundle;
import android.widget.ListView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.task_10.service.MasterServiceStub;

public class MasterListActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_master_list);
        ListView mainList = findViewById(R.id.master_list);
        mainList.setAdapter(new MasterListAdapter(this, MasterServiceStub.getMasters()));
        String category = getIntent().getStringExtra("category");
        TextView textView = findViewById(R.id.list_header);
        textView.setText(category);
    }
}