package com.example.task15.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListAdapter;
import android.widget.ListView;

import androidx.annotation.NonNull;
import androidx.fragment.app.ListFragment;

import com.example.task15.NewsActivity;
import com.example.task15.R;

import java.util.Arrays;
import java.util.List;

public class MainThemeListFragment extends ListFragment {

    private static final List<String> MAIN_THEMES = Arrays.asList(
            "Главное \u2739", "Спорт", "Политика", "Игры", "Новости Москвы", "Новости в мире", "Технологии", "Культура"
    );

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        setListAdapter(prepareAdapter());
        setEmptyText(getResources().getString(R.string.empty_text));
    }


    @Override
    public void onListItemClick(@NonNull ListView l, @NonNull View v, int position, long id) {
        super.onListItemClick(l, v, position, id);
        Intent intent = new Intent(getContext(), NewsActivity.class);
        intent.putExtra("theme", MAIN_THEMES.get(position));
        startActivityForResult(intent, 0);
    }

    private ListAdapter prepareAdapter() {
        return new ArrayAdapter<>(getActivity(), android.R.layout.simple_list_item_1, MAIN_THEMES);
    }

}
