/*
* @Author: 67564
* @Date:   2019-01-15 15:11:09
* @Last Modified by:   67564
* @Last Modified time: 2019-01-17 15:39:47
*/

/*----------------------------随机排序算法-----------------------------------*/
  Array.prototype.shuffle = function() {
    var input = this;
    //遍历从后往前进行
    for (var i = input.length-1; i >=0; i--) {

      /* 1、变量 randomIndex 存储了一个随机数，
           从而input[randomIndex]提取一个随机元素；
         2、该随机数的最大值并不是数组的长度，而是变量 i 的值。
      */
      var randomIndex = Math.floor(Math.random()*(i+1));
      //交换选中元素与随机元素的值
      var itemAtIndex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  } ;
  /*----------------              求数组最大值                -----------------*/
  //1、forEach（）求数组最大值
  Array.prototype.max = function(){

    var max = this[0];
    this.forEach(function(ele,index,arr){
      if(ele > max ){
        max = ele;
      }
    })
    return max;
  };

  //2、用内置函数Math.max求数组最大值
  Array.max = function(array){
    return Math.max.apply(Math,array);
    //return Math.max.apply({},array);
  };

  //3、用展开运算符求最大值
  var numbers = [1,2,3,4,5];
  Math.max(...numbers);

  /*----------------              求数组最小值                -----------------*/

  //1、forEach()求数组最小值
  Array.prototype.min = function(){
    //将数组第一个元素的值赋值给max
    var min = this[0];
    this.forEach(function(ele,index,arr){
      if(ele < min ){
        min = ele;
      }
    })
    //返回最大值
    return min;
  };

  //2、用内置函数Math.min求数组最小值
  Array.min= function(array){
    return Math.min.apply(Math, array)
  };

  //3、展开运算符求最小值
  var numbers = [1,2,3,4,5];
  Math.min(...numbers);

  /*----------------              数组求和                -----------------*/
//1、用map（）方法
  function getSum(item){
  return sum+= item
  };

  var sum = 0;
  var arr = [];
  for(let i = 0; i < 20; i++){
     arr.push(i);
  };
  arr.map(getSum);
  console.log(sum);

  //2、用reduce方法
  /*
  reduce()方法可以接受一个回调函数callbackfn作为累加器（accumulator），
  数组中的每个值（从左到右）开始合并，最终为一个值。这样也能让数组每个元素
  累加起来，达到数组求和的功能。
  */
  function getSum(preValue,curValue){
    return preValue + curValue;
  };

  var arr = [];
  var sum = 0;
  for(let i = 0; i < 10; i++){
    arr.push(i);
    sum = arr.reduce(getSum,0);
    };

  /*----------------              二维数组最大值               -----------------*/
  function largestOfFour (arr) {
   return arr.map(Function.apply.bind(Math.max, null));
  } ;
  largestOfFour([[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]]);
  /*
  这里给Function.prototype.apply方法传递了一个null参数，告诉Math.max不需要任何上下文。
  • 因为arr.map()需要一个回调函数，而不只是一个表达式，我们在Function.bind方法中提供了一个函数
  • 因为Function.prototype.apply是一个静态方法，类似一个函数对象，
    我们可以称之为Function.prototype.apply上绑定了一个Function.prototype.bind。例如: Function.apply.bind
  • 现在可以通过Function.prototype.apply.bind回调函数指定其上下文，比如在这个示例中的Math.max方法
  • 由于是嵌入到Function.prototype.apply方法，需要一个上下文作为第一个参数，而且这个上下文还是一个虚假的。
  • 所以我们将null作为第二个参数传递给Function.prototype.apply.bind，并且绑定一个上下文，这个上下文就是Math.max方法
  • 由于Math.max是独立于任何上下文的，所以它会忽略Function.prototype.apply方法调用的虚假上下文
  • 我们使用Function.prototype.apply.bind(Math.max,null)让一个新函数接受arr.map值，比如数组中的子数组

  */

  /*----------------              多维数组最大值               -----------------*/
  function largestOfFour(arr){
    //join(‘,’)返回的是以逗号分隔的字符串，split（‘,’）返回的是以逗号分隔的字符串数组。
    var newArray  = arr.join(',')split(',');
    return Math.max(...newArray);
  }
