package dev.giovalgas.personmanager.service;

import dev.giovalgas.personmanager.exception.InvalidPropertyException;
import dev.giovalgas.personmanager.model.Filter;
import dev.giovalgas.personmanager.entity.PersonEntity;
import dev.giovalgas.personmanager.exception.NotFoundException;
import dev.giovalgas.personmanager.repository.PersonRepository;
import dev.giovalgas.personmanager.util.ModelUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonService {

  private final PersonRepository personRepository;

  @ExceptionHandler(InvalidPropertyException.class)
  public PersonEntity createPerson(PersonEntity personEntity) {
    return personRepository.save(personEntity);
  }

  public PersonEntity editPerson(Long id, PersonEntity alteredPerson) {

    PersonEntity personEntity = personRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("Did not find a person by the id: " + id));

    ModelUtils.copyNonNullProperties(alteredPerson, personEntity);

    return personRepository.save(personEntity);
  }

  public void logicallyDeletePerson(Long id) {

    PersonEntity personEntity = personRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("Did not find a person by the id: " + id));

    personEntity.setEnabled(false);
    personRepository.save(personEntity);

  }

  public List<PersonEntity> getAllPeopleByFilter(Filter filter) {
    return personRepository.findAll().stream()
            .filter(personEntity ->
                    personEntity.getName().contains(filter.getName()) &&
                    personEntity.getEmail().contains(filter.getEmail()) &&
                    (personEntity.isEnabled() == filter.isEnabled() || !filter.isEnabled()) &&
                    (personEntity.getGender().equals(filter.getGender()) || filter.getGender().equals(PersonEntity.GENDER_KEY_ANY))
            )
            .collect(Collectors.toList());
  }

  public PersonEntity getPersonById(Long id) {
    return personRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("Did not find a person by the id: " + id));
  }

  public List<PersonEntity> getAllPeople() {
    return personRepository.findAll();
  }

}
