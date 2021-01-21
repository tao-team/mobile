package com.example.task_10;

import android.content.Intent;
import android.os.Bundle;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private static final List<String> CATEGORIES = Arrays.asList("Сантехника", "Электрика", "Другое");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LinearLayout ll = new LinearLayout(this);
        ll.setOrientation(LinearLayout.VERTICAL);
        for (String cat : CATEGORIES) {
            LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(
                    ViewGroup.LayoutParams.WRAP_CONTENT,
                    ViewGroup.LayoutParams.WRAP_CONTENT,
                    0);
            layoutParams.gravity = Gravity.CENTER_HORIZONTAL;
            layoutParams.setMargins(20, 50, 20, 100);
            ll.addView(createButton(cat), layoutParams);
        }
        setContentView(ll);

    }

    private Button createButton(String cat) {
        Button button = new Button(getApplicationContext());
        button.setText(cat);
        button.setOnClickListener(v -> {
            String category = ((Button) v).getText().toString();
            Intent intent = new Intent(this, MasterListActivity.class);
            intent.putExtra("category", category);
            startActivityForResult(intent, 0);
        });
        button.setPadding(10, 5, 10, 5);
        button.setBackgroundColor(getColor(R.color.purple_200));
        return button;
    }
}
