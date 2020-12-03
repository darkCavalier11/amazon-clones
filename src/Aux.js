function renderPrice(price){
    let temp = [], i, final='';
    while(price >= 1)
    {
        if(temp.length%3==0 && temp.length != 0)temp.push(',');
        temp.push(price%10);
        price = parseInt(price/10);
    }
    for(i=temp.length-1; i>=0; i--)
    {
        final += temp[i];
    }
    console.log(final);
}
export default {
    renderPrice: renderPrice
};