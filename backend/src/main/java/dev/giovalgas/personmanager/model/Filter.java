package dev.giovalgas.personmanager.model;

import lombok.Data;

@Data
public class Filter {

  private String nameFilter = "";
  private String emailFilter = "";
  private boolean enabledFilter = true;

}
