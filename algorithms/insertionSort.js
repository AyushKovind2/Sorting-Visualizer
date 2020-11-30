
 async function insertionSort(arr, n, ms){
    let x, key, y, value;
    for(x=1;x<n;x++){
        // selected key
        arr[x].style.background = SELCETED_KEY_COLOR;
        key = arr[x].style.height;
        value = arr[x].innerText;

        await timer(ms);
        y = x - 1;
        while( y>=0 && parseInt(arr[y].style.height) > parseInt(key)){
            // let temp = arr[ y + 1];
            // console.log(" before arr[y] ", arr[y].style.height);
            // console.log(" before--> arr[y+1] ;", arr[y+1].style.height);
            // arr[ y + 1].style.height = arr[y].style.height;
            // arr[ y + 1].innerText = arr[y].innerText;
            // arr[ y + 1].style.background = SELECTED_COLOR;
            // arr[y] = temp;
            // console.log(" after arr[y].innerText;", arr[y].innerText);
            // console.log(" after--> arr[y+1] ;", arr[y+1].innerText);
            swapi(arr, y+1, y, ms);
            await timer(ms);
           // arr[ y + 1].style.background = FINAL_COLOR;
            y= y-1;
        }
        arr[y+1].style.height = key ;
        arr[y+1].style.background = SELCETED_KEY_COLOR;
        await timer(ms);

        arr[x].style.background = FINAL_COLOR;
        arr[y+1].style.background = FINAL_COLOR;
    }
    // for already sorted array, as it will leave 0th index
    arr[0].style.background = FINAL_COLOR;
}