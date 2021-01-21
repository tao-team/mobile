package com.example.task15.client;

import com.example.task15.dto.FishResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Fish Text - сайт, который генерит рандомные, но более менее умные тексты
 * Имеет оч просто API
 */
public class FishHttpClient {

    public static List<String> getNewsTitles(int n) {
        try {
            URL url = new URL(String.format("https://fish-text.ru/get?type=title&format=json&number=%s", n));
            FishResponse fishResponse = makeRequest(url);
            return fishResponse.getText() == null ? Collections.emptyList()
                    : Arrays.asList(fishResponse.getText().split("\\\\n\\\\n"));
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    public static String getNewContent() {
        try {
            URL url = new URL("https://fish-text.ru/get?type=paragraph&format=json&sentence=1");
            FishResponse fishResponse = makeRequest(url);
            if (fishResponse.getText() == null) {
                return "Test";
            }
            return fishResponse.getText().replaceAll("\\\\n\\\\n", "");
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    private static FishResponse makeRequest(URL url) throws IOException {
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setReadTimeout(2000);
        con.setConnectTimeout(2000);
        con.setDoOutput(true);
        InputStream responseStream = con.getInputStream();

        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(responseStream, FishResponse.class);
    }
}
