// import React from 'react'

import wrapPromise from "../utils/wrapPromise";



export default function fetchPost(url) {
    return wrapPromise(fetch( url ).then( ( res ) => res.json() ));
}
