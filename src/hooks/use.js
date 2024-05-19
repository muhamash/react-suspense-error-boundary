export default function use ( promise )
{
    console.log( 'promise', promise );
    if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else if (promise.status === "pending") {
        throw promise;
    } else {
        promise.status = "pending";
        promise.then(
            ( result ) =>
            {
                console.log('result', result)
                promise.status = "fulfilled";
                promise.value = result;
            },
            ( reason ) =>
            {
                console.log('reason', reason)
                promise.status = "rejected";
                promise.reason = reason;
            }
        );
        throw promise;
    }
}