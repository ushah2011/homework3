var main = function () {

     var exercise1 = function (nums) {
     	var sum = 0;
     	nums.forEach(function (value) {
     		sum += value;
     	});
     	return sum / nums.length;
     };

     var exercise2 = function (nums) {
     	var high = 0;

     	nums.forEach(function (value) {
     		if (high < value) {
     			high = value;
     		}
     	});
     	return high;
     };

     function exercise3(nums) {
     	var evennum = false,
     	    index = 0;
     	while ( (index < nums.length) && (!evennum) )
     	{
     		if (nums[index] % 2 === 0)
     		{
     			evennum = true;
     		}
     		index++;
     	}
     	return evennum;
     }

     function exercise4(nums) {
     	var oddnum = false,
     	    index = 0;

     	while ( (index < nums.length) && (!oddnum))
     	{
            if (nums[index] % 2 !== 0)
            {
            	oddnum = true;
            }
            index++;
     	}
     	return (!oddnum);
     }

     function arrayContains(myarray, element) {
     	var contains = false;
     	myarray.forEach(function (value) {
     		if (value === element) {
     			contains = true;
     		}
     	})
     	return contains;
     }

     function analyzearray(myarray) {
     	myarray.sort();
     	var a = [], b=[], prev;

     	myarray.forEach(function (value) {
     		if (value !== prev) {
     			a.push(value);
     			b.push(1);
     		} else {
     			b[b.length-1]++;
     		}
     		prev = value;
     	});
     	return [a, b];
     }

     function arrayContainsTwo(myarray, element)
     {
     	var mystats = analyzearray(myarray),
     	    index,
     	    twotimes = false;

     	for (index = 0; index < mystats[0].length; index++)
     	{
     		if ( (mystats[0][index] === element) && (mystats[1][index] >= 2) ) {
     			twotimes = true;
     		}
     	}
        return twotimes;
     }

     function arrayContainsThree(myarray, element)
     {
     	var mystats = analyzearray(myarray),
     	    index,
     	    twotimes = false;

     	for (index = 0; index < mystats[0].length; index++)
     	{
     		if ( (mystats[0][index] === element) && (mystats[1][index] >= 3) ) {
     			twotimes = true;
     		}
     	}
        return twotimes;
     }

     function arrayContainsNTimes(myarray, element, n)
     {
     	var mystats = analyzearray(myarray),
     	    index,
     	    twotimes = false;

     	for (index = 0; index < mystats[0].length; index++)
     	{
     		if ( (mystats[0][index] === element) && (mystats[1][index] >= n) ) {
     			twotimes = true;
     		}
     	}
        return twotimes;
     }

     $(".exercise1 span").text(exercise1([52, 2, 6, 8, 100, 46, 78]));
     $(".exercise2 span").text(exercise2([52, 2, 6, 8, 100, 46, 78]));
	 if (exercise3([52, 2, 6, 8, 100, 46, 78])) {
        $(".exercise3 span").text("has");
	 } else {
        $(".exercise3 span").text("does not have");
	 }
	 if (exercise4([52, 2, 6, 8, 100, 46, 78])) {
        $(".exercise4 span").text("is");
	 } else {
        $(".exercise4 span").text("is not");
	 }
     $(".exercise5 span").text(arrayContains(["hello", "world", "goodbye"], "goodbye"));
     $(".exercise61 span").text(arrayContainsTwo(["a", "b", "a", "c", "a"], "a"));
     $(".exercise62 span").text(arrayContainsThree(["a", "b", "a", "c", "a"], "a"));
     $(".exercise63 span").text(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 4));

     $(".exercise2us span").text(_.max([52, 2, 6, 8, 100, 46, 78], function (element) { 
                    return element; }));

     if (_.find([53, 1, 7, 9, 101, 47, 78], function (num) {return num % 2 == 0})) {
        $(".exercise3us span").text("has");
     } else {
        $(".exercise3us span").text("does not have");
     }
     if (_.every([51, 2, 6, 8, 100, 46, 78], function (num) {return num % 2 == 0})) {
        $(".exercise4us span").text("is");
     } else {
        $(".exercise4us span").text("is not");
     }
	 

}

$(document).ready(main);