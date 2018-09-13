var _ = 
{
    map: function(arr,callback) 
    {
        //code here;
        const newArr = [];

        if (Array.isArray(arr)) 
        { 
            for (let i = 0; i < arr.length; i++) { newArr.push(callback(arr[i])); }
    
            return newArr;
        }
    
        if (Object.prototype.toString.call(arr)) 
        { 
            for (let key in arr) 
            { 
                newArr.push(callback(arr[key])); 
            }
    
            return newArr;
        }
    
        return false;
    },
    reduce: function() 
    { 
        // code here;
    },
    find: function() 
    {   
        // code here;
    },
    filter: function() 
    { 
        // code here;
    },
    reject: function() 
    { 
        // code here;
    }
}

function reduce(arr,callback) 
{
      
}

// tests

// MAP
console.log(_.map([1,3,4,5], function (num) { return num * 3; }))                     // output: [3,9,12,15]
console.log(_.map({one: 2, two: 3, three: 4}, function (num) { return num * 3; }))    // output: [6,9,12]