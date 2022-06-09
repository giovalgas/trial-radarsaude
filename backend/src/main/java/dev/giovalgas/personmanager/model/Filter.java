package dev.giovalgas.personmanager.model;

import dev.giovalgas.personmanager.entity.person.Gender;
import dev.giovalgas.personmanager.entity.person.PersonEntity;
import lombok.Data;

@Data
public class Filter {

  private int page = 1;
  private int pageSize = 25;

  private String name = "";
  private String email = "";

  private String gender = Gender.ANY.toString();

  private boolean enabled = true;

}
