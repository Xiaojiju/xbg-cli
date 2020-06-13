const common = {
    compareDate(pre, suf, type) {
        pre = pre.replace('-', "/")
        suf = suf.replace('-', "/")
        type = type.toLowerCase()
        let startTime = new Date(pre),
            endTime = new Date(suf)
        let timeType = 1
        switch (type) {
            case"second":
                timeType =1000
                break
            case"minute":
                timeType =1000*60
                break
            case"hour":
                timeType =1000*3600
                break
            case"day":
                timeType =1000*3600*24
                break
            default:
                break
        }
        return parseInt((startTime.getTime() - endTime.getTime()) / parseInt(timeType))
    },
    defaultLocale() {
      let lang = navigator.language || navigator.userLanguage;//常规浏览器语言和IE浏览器
      lang = lang.substr(0, 2); //截取lang前2位字符
      return lang
    }
}

export default common