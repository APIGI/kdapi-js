const axios = require('axios')
const md5Hex = require('md5-hex');
const querystring = require('querystring')
const URL = 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx'
const KEY = '06920cf9-2f55-49b1-b209-4afaceed36ee';//APP KEY,请向快递鸟申请
const REQUEST_TYPE  = '8001';//请求接口指令（8001查询）
const BUSINESS_ID = 'xxxx' //更换用户id
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const params = {
    ShipperCode:'SF',
    LogisticCode:'SF1040595620412',
    CustomerName:'5690'
}
const sign = Buffer.from(md5Hex(JSON.stringify(params)+KEY)).toString('base64')
async function main(){
    const reqParams = {
        RequestType:REQUEST_TYPE,
        EBusinessID:BUSINESS_ID,
        DataSign:sign,
        RequestData:JSON.stringify(params),
        DataType:2
    }
    const res = await axios.post(URL,querystring.stringify(reqParams))
    console.log(res.data)
    return res
}
main()
