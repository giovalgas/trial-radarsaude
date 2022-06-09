package dev.giovalgas.personmanager.model;

import lombok.Data;

@Data
public class PageData {

  private int pageSize = 25;
  private int page = 1;

}
