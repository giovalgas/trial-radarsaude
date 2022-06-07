package dev.giovalgas.personmanager.service;

import dev.giovalgas.personmanager.entity.PersonEntity;
import dev.giovalgas.personmanager.exception.NotFoundException;
import dev.giovalgas.personmanager.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
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

    personEntity.setName(alteredPerson.getName());
    personEntity.setGender(alteredPerson.getGender());
    personEntity.setEmail(alteredPerson.getEmail());
    personEntity.setPhoneNumber(alteredPerson.getPhoneNumber());
    personEntity.setBirthDate(alteredPerson.getBirthDate());
    personEntity.setEnabled(alteredPerson.isEnabled());

    return personEntity;
  }

  public PersonEntity logicallyDeletePerson(Long id) {

    PersonEntity personEntity = personRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("Did not find a person by the id: " + id));

    personEntity.setEnabled(false);

    return personEntity;
  }

  public List<PersonEntity> getAllPeopleByFilter(String nameFilter, String emailFilter, boolean enabledFilter) {
    return personRepository.findAll().stream()
            .filter(personEntity ->
                    personEntity.getName().contains(nameFilter) &&
                    personEntity.getEmail().contains(emailFilter) &&
                    personEntity.isEnabled() == enabledFilter
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
