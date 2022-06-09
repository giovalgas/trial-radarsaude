package dev.giovalgas.personmanager.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Statistic {

  private String id;
  private String label;

  private long value;
  private String color;

  public void incrementValue() {
    this.value++;
  }

}
