
export const   PriceHandler  = new Intl.NumberFormat("fa-IR", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
});
export const ConvertIrrToIrt = (price : number) => {
return PriceHandler.format(price/10)
}
