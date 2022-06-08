package dev.giovalgas.personmanager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class InvalidPropertyException extends RuntimeException {

  public InvalidPropertyException() {
    super();
  }

  public InvalidPropertyException(String message, Throwable cause) {
    super(message, cause);
  }

  public InvalidPropertyException(String message) {
    super(message);
  }

  public InvalidPropertyException(Throwable cause) {
    super(cause);
  }

}
