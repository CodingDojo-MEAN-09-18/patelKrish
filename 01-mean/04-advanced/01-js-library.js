var _ = 
{
    map: function(arr,callback) 
    {
        //code here;
        for (let i = 0; i < arr.length; i++) { arr[i] = callback(arr[i]); }
    },
    reduce: function(arr,callback,memo) 
    { 
        // code here;
        let i = 0; 
        if (!memo) {
            memo = arr[0];
            i = 1; // new starting point in the array
        }

        for (let index = i; index < arr.length; index++) { memo = callback(arr[index],memo); }

        return memo; 
    },
    find: function(arr,callback) 
    {   
        // code here;

        // check through the array to find the matching value
        for(let i = 0; i < arr.length; i++) { if(callback(arr[i])) { return arr[i]; } }
    },
    filter: function(arr,callback) 
    { 
        // code here;
        let temp = [];

        for(let i = 0; i < arr.length; i++) { if(callback(arr[i])) { temp.push(arr[i]); } }

        return temp;
    },
    reject: function() 
    { 
        // code here;
        let temp = [];

        for(let i = 0; i < arr.length; i++) { if(!callback(arr[i])) { temp.push(arr[i]); } }

        return temp;
    }
}