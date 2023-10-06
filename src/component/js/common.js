export function commaCheck(e) { // 3자리 단위마다 콤마
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
}
