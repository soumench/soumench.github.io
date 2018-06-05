 let nopassive= {"is":1,"am":1,"are":1,"becomes":1,"became":1};

    function hasnopassive(verb){
          
        return nopassive[verb] ?true:false;
    }