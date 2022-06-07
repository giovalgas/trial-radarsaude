package dev.giovalgas.personmanager.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "person")
public class PersonEntity {

  public static final String GENDER_KEY_MALE = "MALE";
  public static final String GENDER_KEY_FEMALE = "FEMALE";
  public static final String GENDER_KEY_OTHER = "OTHER";

  @Id
  @Column(name = "person_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long uuid;

  @Column(name = "name")
  private String name;

  @Column(name = "gender")
  private String gender;

  @Column(name = "email")
  private String email;

  @Column(name = "phone_number")
  private String phoneNumber;

  @Column(name = "birth_date")
  private LocalDateTime birthDate;

  @Column(name = "is_enabled")
  private boolean enabled;

}
