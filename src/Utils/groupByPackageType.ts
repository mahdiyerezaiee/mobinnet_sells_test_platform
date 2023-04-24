/**
 * Group the products by packageType
 *
 * @param state
 */

export function groupByPackageType( state: any ) {
    let result = [];
    if(state.body) {
        result = state.body.data.reduce((acc: any, product: any) => {
            const group = acc.find((group: any) => group.packageType === product.packageType);
            if (group) {
                group.products.push(product);
            } else {
                acc.push({packageType: product.packageType, products: [product]});
            }
            return acc;
        }, [])
    };
    return result;
}