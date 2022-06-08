package dev.giovalgas.personmanager.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NonNull;
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
  public static final String GENDER_KEY_ANY = "ANY";

  @Id
  @Column(name = "person_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NonNull
  @Column(name = "name", length = 70)
  private String name;

  @NonNull
  @Column(name = "gender", length = 10)
  private String gender;

  @NonNull
  @Column(name = "phone_number", length = 16)
  private String phoneNumber;

  @NonNull
  @Column(name = "email")
  private String email;

  @NonNull
  @Column(name = "birth_date")
  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
  private LocalDate birthDate;

  @Column(name = "is_enabled")
  private boolean enabled = true;

}
