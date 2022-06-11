interface IPayment {
  sum: number,
  from: number,
  to: number
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed'
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
  databaseId: number,
}

interface IDataFailed {
  errorMessage: string,
  errorCode: number,
}

interface IResponseSuccess {
  status: PaymentStatus.Success,
  data: IDataSuccess
}

interface IResponseFailed {
  status: PaymentStatus.Failed,
  data: IDataFailed
}


// type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
  // return (res as IResponseSuccess).status === PaymentStatus.Success;
  if (res.status === PaymentStatus.Success) {
    return true;
  }
  else {
    return false;
  }
}

function getIdFromData(res: Res): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  }
  else {
    throw new Error(res.data.errorMessage)
  }
}