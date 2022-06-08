package dev.giovalgas.personmanager.util;

import dev.giovalgas.personmanager.entity.person.Gender;
import dev.giovalgas.personmanager.entity.person.PersonEntity;
import dev.giovalgas.personmanager.exception.InvalidPropertyException;
import org.apache.commons.lang3.EnumUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class ValidationUtils {

  public static boolean isPersonDataValid(PersonEntity personEntity) {
    return isEmailValid(personEntity) && isPhoneNumberValid(personEntity) && isGenderValid(personEntity);
  }

  private static boolean isPhoneNumberValid(PersonEntity personEntity) {
    Pattern pattern = Pattern.compile("^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$");
    Matcher matcher = pattern.matcher(personEntity.getPhoneNumber());

    if(!matcher.matches()) {
      throw new InvalidPropertyException("Invalid phoneNumber: " + personEntity.getPhoneNumber());
    }

    return matcher.matches();
  }

  private static boolean isEmailValid(PersonEntity personEntity) {
    Pattern pattern = Pattern.compile("^.+@.+\\..+$");
    Matcher matcher = pattern.matcher(personEntity.getEmail());

    if(!matcher.matches()) {
      throw new InvalidPropertyException("Invalid email: " + personEntity.getEmail());
    }

    return matcher.matches();
  }

  private static boolean isGenderValid(PersonEntity personEntity) {

    boolean isValid = EnumUtils.isValidEnum(Gender.class, personEntity.getGender());

    if(!isValid) {
      throw new InvalidPropertyException("Invalid gender: " + personEntity.getGender());
    }

    return isValid;
  }


}
