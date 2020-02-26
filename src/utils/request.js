// 导出一个函数对uni.request进行封装
export default function (config) {
    const {baseURL} = config;
    return function (Vue) {
        // 自定义一个属性接收
        Vue.prototype.request = async function (params) {

            // params 接收请求的地址
            const {url,data} = params
            uni.showLoading({
                title:"数据加载中。。。"
            })
            // 重新发送请求
            const [err,res] = await uni.request({
                url:baseURL + url,
                data
            })
            uni.hideLoading();
            return res.data
        }
    }
}