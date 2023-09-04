const CURRENCY_FORMATER = new Intl.NumberFormat(undefined,{
    currency: "INR",
    style: "currency",
});
export function currency(num: number){
    return CURRENCY_FORMATER.format(num);

}