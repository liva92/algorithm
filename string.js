/*
* @Author: 67564
* @Date:   2019-01-17 20:48:43
* @Last Modified by:   67564
* @Last Modified time: 2019-01-23 09:24:49
*/
/*----------------------------------1、返回回文字符---------------------------------*/

/*判断一个字符串是否为回文字符，若是，直接返回
  否则通过在前面添加字符将其转换为最短回文串.并返回
*/
  function palindrom(str){
    if( str == null ){
      return null
    }else{
      var j = 0 ;
      for ( i = str.length-1; i>=0; i--){
        //判断首尾字串是否相等
        if( str.charAt(i) == str.charAt(j)){
          //j值记录第一个不回文的位置
          j++;
          //如果j = 字符串中间位置，就是回文字符串。
          if(j == (str.length-1)/2){
            return str;
          }else{
            //截取不回文位置后面的字符串
            var subfix = str.substring(j);
            //反转截取字符串
            var prefix = subfix.split('').reverse().join('');
            var mid = str.substring(j-1,j)
            var newpalindrom = prefix + mid +subfix
            return  newpalindrom ;
          }
        }
      }
    }
  };
/*---------------------------------2、替换所有空格---------------------------------*/

  function replaceBlank(str){
    if(str){
     var newStr = str.replace(/[\s\uFEFF\xA0]+/g, '');
      return newStr;
    }
    return null
  };

/*---------------------------------3、每个单词首字母转换为大写字母---------------------------------*/

function titleize(str){
  return str.toLowerCase().replace(/(?:^|\s)\w/g,function(c){
    return c.toUpperCase();
  })
};

// console.log( titleize('my name is epeli') );
/*---------------------------------4、驼峰法---------------------------------*/
function camelize(str){
  return str.replace(/[-_\s]+(.)?/g,function(match,c){
    return c? c.toUpperCase() :'';
  })
};

/* 其中分组 (.) 表示首字母。单词的界定是，前面的字符可以是多个连字符、下划线以及空白符。
正则后面的 ? 的目的，是为了应对 str 尾部的字符可能不是单词字符，
比如 str 是 '-moz-transform  '*/

/*---------------------------------5、中划线法（驼峰法的逆过程）---------------------------------*/
function dasherize(str){
  return str.replace(/([A-Z])/g,'-$1').replace(/[-_\s]+/g,'-').toLowerCase();
};

/*---------------------------------6、实体字符转为等值的HTML---------------------------------*/
function unescapeHTML(str){
  var htmlEntities={
    nbsp : '',
    lt   : '<',
    gt   : '>',
    quot : '"',
    amp  : '&',
    apos : '\''
  };
  return str.replace(/\&([^;]+);/g,function(match,key){
    if(key in htmlEntities){
      return htmlEntities[key];
    }
    return match;
  })
};

// console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );

/*---------------------------------6、匹配成对标签---------------------------------*/
function isHTML(str){
  var regex = /<([^>]+)>[\d\D]*<\/\1>/;
  return regex.test(str);
}
