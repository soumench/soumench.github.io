 let nopassive= {"is":1,"am":1,"are":1,"becomes":1,"became":1, "become":1, "go":1, "goes":1, "went":1, "were":1};

    function hasnopassive(verb){
          
        return nopassive[verb] ?true:false;
    }