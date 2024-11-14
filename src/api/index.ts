import reqtests from "../utils/reqtests";

/**200 */
export const a = ()=>{
    return reqtests({
        url:"/index",
        method:"get"
    })
}
/**400 */
export const b = ()=>{
    return reqtests({
        url:"/error",
        method:"get"
    })
}

/**500 */export const c = ()=>{
    return reqtests({
        url:"/waring",
        method:"get"
    })
}