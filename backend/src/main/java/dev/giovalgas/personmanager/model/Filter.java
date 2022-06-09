package dev.giovalgas.personmanager.model;

import dev.giovalgas.personmanager.entity.person.Gender;
import dev.giovalgas.personmanager.entity.person.PersonEntity;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Filter {

  private int pageSize = 25;
  private int page = 1;

  private String name = "";
  private String email = "";

  private String gender = Gender.ANY.toString();

  private boolean enabled = true;

}
