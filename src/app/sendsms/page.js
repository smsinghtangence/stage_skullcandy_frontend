'use client'
import React, { useEffect, useState } from 'react'
import Accountnav from '@/components/Accountnav'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
function page() {

  
// const router = useRouter();
var https = require('https');
// var urlencode = require('urlencode');
// var msg=urlencode('hello js');
var msg='hello';
var number='7678553669';
var apikey='NTE3NzMyMzk3OTRmNDg2NDU1NmI1MzQ4NWE0NjQ0NDE=';

var sender='txtlcl';
var data='apikey='+apikey+'&sender='+sender+'&numbers='+number+'&message='+msg
var options = {
host: 'api.textlocal.in',
path: '/send?'+data
};
callback = function(response) {
var str = '';
//another chunk of data has been recieved, so append it to `str`
response.on('data', function (chunk) {
str += chunk;
});
//the whole response has been received, so we just print it out here
response.on('end', function () {
console.log(str);
});
}
//console.log('hello js'))
http.request(options, callback).end();

  return (
    <>
 
        Testing SMS
    </>
  )
}

export default page