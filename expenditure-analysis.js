/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(arr){
  var obj = {};
  for(var i=0;i<arr.length;i++){
    if(obj[arr[i].category]){
      obj[arr[i].category] += arr[i].price;
    }
    else{
      obj[arr[i].category] = arr[i].price;
    }
  }


  
  var keys = Object.keys(obj);
  let answer = [];

  for (var i=0;i<keys.length;i++){
    var category = keys[i]
    var objects = {
      category : category,
      totalSpent : obj[category]
    }
    answer.push(objects);
  }
  return answer;
};

module.exports = calculateTotalSpentByCategory;
