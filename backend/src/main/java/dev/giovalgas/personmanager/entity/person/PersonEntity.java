package dev.giovalgas.personmanager.entity.person;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;


@Data
@Entity
@Table(name = "person")
public class PersonEntity {

  @Id
  @Column(name = "person_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "name", length = 70)
  private String name;

  @Column(name = "gender", length = 10)
  private String gender;

  @Column(name = "phone_number", length = 16)
  private String phoneNumber;

  @Column(name = "email")
  private String email;

  @Column(name = "birth_date")
  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  @JsonFormat(shape = JsonFormat.Shape.STRING)
  private LocalDate birthDate;

  @Column(name = "is_enabled")
  private boolean enabled = true;

}
