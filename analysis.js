function analysis(param){
    let localY = param;
    if(/,/i.test(param)){
        param = param.replace(/[,]/,".");
        if (Number(param.split(".")[0]) == value_R && Number(param.split(".")[1]) > 0) {
            localY = Number(param.split(".")[0]) + 1
        } else if (Number(param.split(".")[0]) == -value_R && Number(param.split(".")[1]) > 0) {
            localY = Number(param.split(".")[0]) + 1
        }

        return localY

    }else {
        if (Number(param.split(".")[0]) == value_R && Number(param.split(".")[1]) > 0) {
            localY = Number(param.split(".")[0]) + 1
        } else if (Number(param.split(".")[0]) == -value_R && Number(param.split(".")[1]) > 0) {
            localY = Number(param.split(".")[0]) + 1
        }
        return localY
    }
}