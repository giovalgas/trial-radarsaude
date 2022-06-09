package dev.giovalgas.personmanager.service;

import dev.giovalgas.personmanager.entity.person.Gender;
import dev.giovalgas.personmanager.model.Filter;
import dev.giovalgas.personmanager.entity.person.PersonEntity;
import dev.giovalgas.personmanager.exception.NotFoundException;
import dev.giovalgas.personmanager.repository.PersonRepository;
import dev.giovalgas.personmanager.util.ModelUtils;
import dev.giovalgas.personmanager.util.ValidationUtils;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.beans.support.SortDefinition;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonService {

  private final PersonRepository personRepository;

  public PersonEntity createPerson(PersonEntity personEntity) {
    if(!ValidationUtils.isPersonDataValid(personEntity)) {
      return personEntity;
    }

    return personRepository.save(personEntity);
  }

  public PersonEntity editPerson(Long id, PersonEntity alteredPerson) {
    PersonEntity personEntity = personRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("Did not find a person by the id: " + id));

    ModelUtils.copyNonNullProperties(alteredPerson, personEntity);

    if(!ValidationUtils.isPersonDataValid(personEntity)) {
      return alteredPerson;
    }

    return personRepository.save(personEntity);
  }

  public void logicallyDeletePerson(Long id) {
    PersonEntity personEntity = personRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("Did not find a person by the id: " + id));

    personEntity.setEnabled(false);
    personRepository.save(personEntity);
  }

  private List<PersonEntity> getAllPeopleByFilter(Filter filter) {
    return personRepository.findAll().stream()
            .filter(personEntity ->
                    StringUtils.containsIgnoreCase(personEntity.getName(), filter.getName()) &&
                    StringUtils.containsIgnoreCase(personEntity.getEmail(), filter.getEmail()) &&
                    (personEntity.isEnabled() == filter.isEnabled() || !filter.isEnabled()) &&
                    (personEntity.getGender().equals(filter.getGender()) || filter.getGender().equals(Gender.ANY.toString()))
            )
            .collect(Collectors.toList());
  }

  public PagedListHolder<PersonEntity> getPageByFilter(Filter filter) {
    List<PersonEntity> content = this.getAllPeopleByFilter(filter);
    PagedListHolder<PersonEntity> holder = new PagedListHolder<>(content);

    holder.setPage(filter.getPage() - 1);
    holder.setPageSize(filter.getPageSize());

    return holder;
  }

  public PersonEntity getPersonById(Long id) {
    return personRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("Did not find a person by the id: " + id));
  }

  public List<PersonEntity> getAllPeople() {
    return personRepository.findAll();
  }

}
