function frankenSplice(arr1,arr2,index){
    let copyArr2 = arr2.slice();

    // Insérer les éléments du premier tableau à l’index index
    copyArr2.splice(index,0,...arr1);

    return copyArr2;
}

/**
 * function frankenSplice(arr1,arr2,index){
    let copyArr2 = arr2.slice();

    // Insérer les éléments du premier tableau à l’index index
    for(let i=0; i < arr1.length; ++i){
        copyArr2.splice(index+i,0,arr1[i]);
    }

    return copyArr2;
}
 */