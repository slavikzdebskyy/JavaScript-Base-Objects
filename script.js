console.log(data);

/**
 * @param array
 * @param propertyName
 * @param propertyValue
 * @returns number
 */

 // countOfProperty('color', 'Pink')
function countOfProperty(array, propertyName, propertyValue) {
  var count = 0;

  array.forEach(function(item) {
    if (item[propertyName] === propertyValue) {  // item['color'] === 'Pink'
      count++;
    } 
  })
  return count;
}

// var countOfColorPink = countOfProperty(data, 'gender', 'Female');
// console.log(countOfColorPink);


/**
 * @param array
 * @param propertyName
 * @returns object
 * @example {
 * 'Pinc': 10,
 * 'Grey': 35
 * ...
 * }
 */

function properties(array, propertyName) {
  var result = {};
  array.forEach(function(item) {
    if (result.hasOwnProperty(item[propertyName])) { // item['color']
      result[item[propertyName]] += 1;
    } else {
      result[item[propertyName]] = 1;
    }
  })
  return result;
}

var properties = properties(data, 'color');
console.log(properties);

/**
 * @param array
 * @returns object
 */
function getCountsOfEachColor(array) {

  var result = {};
  array.forEach(function(item) {
    if (result.hasOwnProperty(item['color'])) { // item['color']
      result[item['color']] += 1;
    } else {
      result[item['color']] = 1;
    }
  })
  return result;

}

/**
 * @param array
 * @returns number
 */
function getCountOfUniqueColors(array) {
  var object = {};
  array.forEach(function(item) {
    if (object.hasOwnProperty(item['color'])) {
      object[item['color']] += 1;
    } else {
      object[item['color']] = 1;
    }
  });
  var result = {};

  for(var key in object) {
    if (object[key] < 5 ) {
      result[key] = object[key];
    }
  }

  return result;
}

// var count = getCountOfUniqueColors(data);
// console.log(count);
// console.log(count.length);

/**
 * @param array
 * @returns array of string
 */
function getNotUniqueNames(array) {

  // your logic here.....

}

/**
 * @param array
 * @returns string
 */
function getMostFavoriteColor(array) {

  var object = {};
  array.forEach(function(item) {
    if (object.hasOwnProperty(item['color'])) {
      object[item['color']] += 1;
    } else {
      object[item['color']] = 1;
    }
  });
  var maxCount = -Infinity;
  var result = [];
  for(var prop in object) {
    // maxCount = object[prop] > maxCount ? object[prop] : maxCount;
    if(object[prop] > maxCount) {
      maxCount = object[prop];
    }
  }
  
  for(var prop in object) {
    if(object[prop] = maxCount) {
      result.push(prop);
    }
  }

  return result;
}

console.log(getMostFavoriteColor(data))


/**
 * @param array
 * @param label
 * @returns array of string
 */
function getTransformedArray(array, label) {

  // your logic here.....

}




