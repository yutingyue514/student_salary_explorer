app.factory('utilService', function() {
    return {
        //Capital first letter that is not the word "and"
        capitalizeFirstLetter: function(str) {
            str = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            return str.replace("And", "and");
        },

        firstWord: function(str) {
            if (str.indexOf(" ") == -1) {
                return str;
            }
            return str.substr(0, str.indexOf(' ')); 
        }
    };
});
