package dev.giovalgas.personmanager.model;

import lombok.Data;

@Data
public class PageData {

  private int page = 1;
  private int pageSize = 25;

}
