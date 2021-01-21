package com.example.task_10;

import android.app.Activity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.task_10.models.MasterDto;

import java.util.List;
import java.util.Locale;

public class MasterListAdapter extends ArrayAdapter<MasterDto> {

    public MasterListAdapter(Activity context, List<MasterDto> masterData) {
        super(context, R.layout.master_list_item, masterData);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View view = convertView;
        if (view == null) {
            view = LayoutInflater.from(getContext()).inflate(
                    R.layout.master_list_item, parent, false);
        }
        TextView nameTextView = view.findViewById(R.id.name);
        TextView ratingTextView = view.findViewById(R.id.rating);
        TextView descTextView = view.findViewById(R.id.description);
        ImageView imageView = view.findViewById(R.id.master_image);

        MasterDto masterDto = getItem(position);
        nameTextView.setText(masterDto.getName());
        ratingTextView.setText(String.format(Locale.getDefault(), "%.1f", masterDto.getRating()));
        resolveColor(ratingTextView, masterDto.getRating());
        descTextView.setText(masterDto.getDescription());
        imageView.setImageResource(masterDto.getImage());
        return view;
    }

    private void resolveColor(TextView ratingTextView, double rating) {
        if (rating >= 4) {
            ratingTextView.setTextColor(getContext().getResources().getColor(R.color.green, null));
        } else if (rating >= 3) {
            ratingTextView.setTextColor(getContext().getResources().getColor(R.color.yellow, null));
        } else {
            ratingTextView.setTextColor(getContext().getResources().getColor(R.color.red, null));
        }
    }
}
