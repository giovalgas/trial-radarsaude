package dev.giovalgas.personmanager.controller;

import dev.giovalgas.personmanager.entity.person.PersonEntity;
import dev.giovalgas.personmanager.model.Statistic;
import dev.giovalgas.personmanager.service.StatisticService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/person/stats")
@RequiredArgsConstructor
public class StatisticController {

  private final StatisticService statisticService;

  @GetMapping("/gender-ratio")
  public ResponseEntity<List<Statistic>> getGenderRatioStat() {
    return ResponseEntity.ok(statisticService.getGenderRatioStat());
  }

}
