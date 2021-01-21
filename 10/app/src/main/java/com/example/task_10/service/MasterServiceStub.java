package com.example.task_10.service;

import com.example.task_10.R;
import com.example.task_10.models.MasterDto;

import java.util.Arrays;
import java.util.List;

public class MasterServiceStub {

    private static final List<MasterDto> MASTERS = Arrays.asList(
            new MasterDto(1,
                    R.drawable.master1,
                    "Иванов Иван Иванович",
                    "Пунктуальный, креативный и порядочный мастер",
                    4.4),
            new MasterDto(2,
                    R.drawable.master2,
                    "Петров Петр Петрович",
                    "ОЧ КРУТ, ПРАВДА, НЕ СМОТРИТЕ НА РЕЙТИНГ",
                    2.9),
            new MasterDto(3,
                    R.drawable.master3,
                    "Сидоров Артем Геннадьевич",
                    "Ничо так мастер",
                    3.3),
            new MasterDto(4,
                    R.drawable.master4,
                    "Попов Геннадий",
                    "Мастер офигенен!",
                    4.9)
    );


    public static List<MasterDto> getMasters() {
        return MASTERS;
    }
}
