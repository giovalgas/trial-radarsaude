package dev.giovalgas.personmanager.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;


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
  private Long id;

  @Column(name = "name")
  private String name;

  @Column(name = "gender")
  private String gender;

  @Column(name = "email")
  private String email;

  @Column(name = "phone_number")
  private String phoneNumber;

  @Column(name = "birth_date")
  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
  private LocalDate birthDate;

  @Column(name = "is_enabled")
  private boolean enabled = true;

}
