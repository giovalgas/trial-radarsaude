package dev.giovalgas.personmanager.service;

import dev.giovalgas.personmanager.entity.person.Gender;
import dev.giovalgas.personmanager.entity.person.PersonEntity;
import dev.giovalgas.personmanager.model.Statistic;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.EnumUtils;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StatisticService {

  private final PersonService personService;

  public List<Statistic> getGenderRatioStat() {

    List<Statistic> stats = new ArrayList<>();
    List<PersonEntity> people = personService.getAllPeople();

    Statistic maleStat = new Statistic("male", "Masculino", 0, "rgb(0, 170, 243)");
    Statistic femaleStat = new Statistic("female", "Feminino", 0, "rgb(255, 110, 243)");
    Statistic otherStat = new Statistic("other", "Outro", 0, "rgb(137, 136, 134)");

    for(PersonEntity person : people) {
      switch (person.getGender()) {
        case "MALE" -> maleStat.incrementValue();
        case "FEMALE" -> femaleStat.incrementValue();
        case "OTHER" -> otherStat.incrementValue();
      }
    }

    stats.add(maleStat);
    stats.add(femaleStat);
    stats.add(otherStat);

    return stats;
  }

}
