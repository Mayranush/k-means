function filter() { 

  let cloneState = function (obj) {
    if (null == obj || "object" != typeof obj) return obj;
      var copy = obj.constructor();
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }
      return copy;
  };

  return {
    cloneState: cloneState
  }
}


export default filter();