package dev.giovalgas.personmanager.controller;

import dev.giovalgas.personmanager.model.Filter;
import dev.giovalgas.personmanager.entity.person.PersonEntity;
import dev.giovalgas.personmanager.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/person")
@RequiredArgsConstructor
public class PersonController {

  private final PersonService personService;

  @PostMapping
  public ResponseEntity<PersonEntity> createPerson(@RequestBody PersonEntity personEntity) {
    return ResponseEntity.ok(personService.createPerson(personEntity));
  }

  @PutMapping("/{id}")
  public ResponseEntity<PersonEntity> editPerson(@RequestBody PersonEntity personEntity, @PathVariable Long id) {
    return ResponseEntity.ok(personService.editPerson(id, personEntity));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<PersonEntity> deletePerson(@PathVariable Long id) {
    personService.logicallyDeletePerson(id);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/{id}")
  public ResponseEntity<PersonEntity> getPersonById(@PathVariable Long id) {
    return ResponseEntity.ok(personService.getPersonById(id));
  }

  @GetMapping
  public ResponseEntity<List<PersonEntity>> getAllPeopleByFilter(@RequestBody Filter filter) {
    return ResponseEntity.ok(personService.getAllPeopleByFilter(filter));
  }

}
