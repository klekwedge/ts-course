"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSuccess(res) {
    // return (res as IResponseSuccess).status === PaymentStatus.Success;
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    else {
        return false;
    }
}
function getIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
