/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React from 'react'

export default function wrapPromise ( promise )
{

    let status = 'pending';
    let response;

    const suspender = promise.then(
        (res) =>
        {
            status = 'success';
            response = res;
        },

        (error) =>
        {
            status = 'error';
            response = error
        }
    );

    return {
        read: () =>
        {
            switch ( status )
            {
                case 'pending':
                    console.log('pending block')
                    throw suspender;
                case 'error':
                    console.log('error block')
                    throw response;
                default:
                    console.log('default block')
                    return response;
            }
        }
    }
}
