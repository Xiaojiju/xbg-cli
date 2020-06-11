const common = {
    compareDate(pre, suf, type) {
        pre = pre.replace('-', "/");
        suf = suf.replace('-', "/");
        type = type.toLowerCase();
        let startTime = new Date(pre),
            endTime = new Date(suf);
        let timeType = 1;
        switch (type) {
            case"second":
                timeType =1000;
                break;
            case"minute":
                timeType =1000*60;
                break;
            case"hour":
                timeType =1000*3600;
                break;
            case"day":
                timeType =1000*3600*24;
                break;
            default:
                break;
        }
        return parseInt((startTime.getTime() - endTime.getTime()) / parseInt(timeType));
    }
}

export default common;