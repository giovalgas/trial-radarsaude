package dev.giovalgas.personmanager.model;

import dev.giovalgas.personmanager.entity.PersonEntity;
import lombok.Data;

@Data
public class Filter {

  private String name = "";
  private String email = "";
  private String gender = PersonEntity.GENDER_KEY_ANY;
  private boolean enabled = true;

}
