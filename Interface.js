export default class Interface {

  constructor(interfaceName, requiredMethods) {
    if (arguments.length != 2) {
      throw new Error("Interface constructor should have been called with exactly two arguments.");
    }
    this.name = interfaceName;
    this.methods = [];
    for ( let method of requiredMethods ) {
      if (typeof method !== 'string') {
        throw new Error("Interface constructor expects method names to be passed in as a string.");
      }
      this.methods.push(method);
    }
  } // End of Constructor

  // Static class method.
  static ensureImplements(object) {
    if (arguments.length < 2) {
      throw new Error("Interface.ensureImplements should have at least two arguments.");
    }

    for (let i = 1; i < arguments.length; i++) { 
      const suppliedInterface = arguments[i];
      if (suppliedInterface.constructor !== Interface) {
        throw new Error("Interface.ensureImplements expects the latter arguments to be instances of Interface.");
      }

      for ( let method of suppliedInterface.methods ) {
        if (!object[method] || typeof object[method] !== 'function') {
          throw new Error(`Interface.ensureImplements: Method ${method} of interface ${suppliedInterface.name} not found.`);
        }
      }
    }
  } // End of ensureImplements

} // End of Interface   

