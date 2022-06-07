package dev.giovalgas.personmanager.service;

import dev.giovalgas.personmanager.model.Filter;
import dev.giovalgas.personmanager.entity.PersonEntity;
import dev.giovalgas.personmanager.exception.NotFoundException;
import dev.giovalgas.personmanager.repository.PersonRepository;
import dev.giovalgas.personmanager.util.ModelUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonService {

  private final PersonRepository personRepository;

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
                    personEntity.getName().contains(filter.getNameFilter()) &&
                    personEntity.getEmail().contains(filter.getEmailFilter()) &&
                    (personEntity.isEnabled() == filter.isEnabledFilter() || !filter.isEnabledFilter())
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
