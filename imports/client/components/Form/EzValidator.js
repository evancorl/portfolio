class EzValidator {
  constructor(schema) {
    this.schema = schema;
    this.schemaKeys = this.getSchemaKeys(schema);

    this.isValid = true;
    this.invalidKeys = [];
    this.errorMessages = {};
  }

  getSchemaKeys(schema) {
    let keys = [];

    for (const key in schema) keys.push(key);

    return keys;
  }

  validate(schemaInstance, breakOnFirstError = false) {
    this.resetState();

    for (let i = 0; i < this.schemaKeys.length; i++) {
      const key = this.schemaKeys[i];
      const input = {
        key,
        value: schemaInstance[key],
      };

      const schemaDef = this.schema[key];

      if (schemaDef) {
        input.displayName = schemaDef.displayName || (key.charAt(0).toUpperCase() + key.slice(1));

        const isRequired = this.checkRequired(input, schemaDef);

        if (isRequired && breakOnFirstError) break;
      } else {
        this.isValid = false;
      }
    }

    return this.isValid;
  }  

  resetState() {
    this.isValid = true;
    this.invalidKeys = [];
    this.errorMessages = {};
  }

  checkRequired(input, schemaDef) {
    let isRequired = false;

    if (!schemaDef.optional && !input.value) {
      isRequired = true;

      const messageDef = schemaDef.messages;
      const errorMessage = messageDef && messageDef.required
        ? messageDef.required
        : input.displayName + ' is a required field';

      this.setInvalidKey(input.key, errorMessage);
    }

    return isRequired;
  }

  setInvalidKey(key, errorMessage) {
    this.isValid = false;
    this.invalidKeys.push(key);
    this.errorMessages[key] = errorMessage;
  }

  getFirstErrorMessage() {
    const firstKey = Object.keys(this.errorMessages)[0];
    const errorMessage = this.errorMessages[firstKey];

    return errorMessage;
  }
}

export default EzValidator;
