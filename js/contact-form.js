/**
 * Accessible client-side validation for the contact form.
 * Enhances native HTML5 validation with aria-invalid and visible error messages.
 */
(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  var fields = [
    {
      input: document.getElementById("contact-name"),
      error: document.getElementById("contact-name-error"),
      messages: {
        valueMissing: "Please enter your full name.",
        tooShort: "Name must be at least 2 characters.",
      },
    },
    {
      input: document.getElementById("contact-email"),
      error: document.getElementById("contact-email-error"),
      messages: {
        valueMissing: "Please enter your email address.",
        typeMismatch: "Please enter a valid email address (for example, name@example.com).",
        patternMismatch: "Please enter a valid email address.",
      },
    },
    {
      input: document.getElementById("contact-subject"),
      error: document.getElementById("contact-subject-error"),
      messages: {
        valueMissing: "Please enter a subject for your message.",
        tooShort: "Subject must be at least 5 characters.",
      },
    },
    {
      input: document.getElementById("contact-message"),
      error: document.getElementById("contact-message-error"),
      messages: {
        valueMissing: "Please enter your message.",
        tooShort: "Message must be at least 20 characters.",
      },
    },
  ];

  var statusRegion = document.getElementById("form-status");

  function getValidationMessage(fieldConfig) {
    var input = fieldConfig.input;
    var messages = fieldConfig.messages;

    if (input.validity.valueMissing) {
      return messages.valueMissing || input.validationMessage;
    }
    if (input.validity.typeMismatch) {
      return messages.typeMismatch || input.validationMessage;
    }
    if (input.validity.tooShort) {
      return messages.tooShort || input.validationMessage;
    }
    if (input.validity.patternMismatch) {
      return messages.patternMismatch || input.validationMessage;
    }
    return input.validationMessage;
  }

  function setFieldValidity(fieldConfig, isValid) {
    var input = fieldConfig.input;
    var error = fieldConfig.error;

    if (isValid) {
      input.setAttribute("aria-invalid", "false");
      input.removeAttribute("aria-errormessage");
      error.textContent = "";
      error.hidden = true;
      return;
    }

    var message = getValidationMessage(fieldConfig);
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-errormessage", error.id);
    error.textContent = message;
    error.hidden = false;
  }

  function validateField(fieldConfig) {
    var input = fieldConfig.input;
    var isValid = input.checkValidity();
    setFieldValidity(fieldConfig, isValid);
    return isValid;
  }

  function validateForm() {
    var allValid = true;
    var firstInvalid = null;

    fields.forEach(function (fieldConfig) {
      var isValid = validateField(fieldConfig);
      if (!isValid) {
        allValid = false;
        if (!firstInvalid) {
          firstInvalid = fieldConfig.input;
        }
      }
    });

    return { allValid: allValid, firstInvalid: firstInvalid };
  }

  fields.forEach(function (fieldConfig) {
    var input = fieldConfig.input;

    input.addEventListener("blur", function () {
      if (input.value.trim() !== "" || input.validity.valueMissing) {
        validateField(fieldConfig);
      }
    });

    input.addEventListener("input", function () {
      if (input.getAttribute("aria-invalid") === "true") {
        validateField(fieldConfig);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    var result = validateForm();

    if (!result.allValid) {
      event.preventDefault();
      if (statusRegion) {
        statusRegion.textContent =
          "The form has errors. Please review the fields marked below and try again.";
      }
      if (result.firstInvalid) {
        result.firstInvalid.focus();
      }
      return;
    }

    if (statusRegion) {
      statusRegion.textContent = "Submitting your message. Please wait.";
    }
  });

  form.addEventListener("reset", function () {
    fields.forEach(function (fieldConfig) {
      setFieldValidity(fieldConfig, true);
    });
    if (statusRegion) {
      statusRegion.textContent = "Form cleared.";
    }
  });
})();
