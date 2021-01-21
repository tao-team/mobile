package com.example.task15.fragment;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.ListFragment;

import com.example.task15.NewsActivity;
import com.example.task15.NewsContentActivity;
import com.example.task15.R;
import com.example.task15.client.FishHttpClient;

import java.util.List;

public class NewsFragmentList extends ListFragment {

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        setEmptyText(getResources().getString(R.string.empty_text));
        new HttpTask().execute(7);
    }


    @Override
    public void onListItemClick(@NonNull ListView l, @NonNull View v, int position, long id) {
        super.onListItemClick(l, v, position, id);
        Intent intent = new Intent(getContext(), NewsContentActivity.class);
        intent.putExtra("title", ((TextView) v).getText());
        startActivityForResult(intent, 0);
    }

    class HttpTask extends AsyncTask<Integer, Void, List<String>> {

        @Override
        protected List<String> doInBackground(Integer... integers) {
            return FishHttpClient.getNewsTitles(integers[0]);
        }

        @Override
        protected void onPostExecute(List<String> strings) {
            super.onPostExecute(strings);
            NewsFragmentList.this.setListAdapter(prepareAdapter(strings));
        }

        private ListAdapter prepareAdapter(List<String> strings) {
            return new ArrayAdapter<>(getActivity(), android.R.layout.simple_list_item_1, strings);
        }

    }

}
