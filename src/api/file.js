'use strict';

var CryptoJS = require('crypto-js');
var HmacSHA1 = CryptoJS.HmacSHA1;
var FormData = require('form-data');
var request = require('request');

const express = require('express');

//////////////////////////////
const HOST = 'tj.file.myqcloud.com';
const APP_ID =  '1253506474';
const SECRET_ID =  'AKIDXu1sTpDlLeuwjHPgV4OSFl14qMcdCt76';
const SECRECT_Key =  'ta1D9pEMEpAE1XnmVyA5lCOQDn7C2i8J';
const BUCKET =  'duorouji';
/////////////////////////////


var file = {
    getSignature( fileName ) {
        let random = Math.floor( Math.random() * 10E9 );
        let time = new Date() / 1000;
        let expireTime = fileName ? 0 : 7200 + time;
        let signature = `a=${APP_ID}&b=${BUCKET}&k=${SECRET_ID}&e=${expireTime}&t=${time}&r=${random}&f=${fileName}`;   
        let hamcWordArray = HmacSHA1(signature, SECRECT_Key);
        let originWordArray = CryptoJS.enc.Utf8.parse(signature);
        return CryptoJS.enc.Base64.stringify( hamcWordArray.concat(originWordArray) );
    },
    getList( req, res ) {
        let authKey = this.getSignature();
        let options = {
            url: `https://${HOST}/files/v2/${APP_ID}/${BUCKET}/?op=list&num=30`,
            headers: {
                'HOST' : HOST,
                'Authorization': authKey
            }
        }
        req.pipe( request(options) ).pipe( res );
    },
    uploadImage(req, res) {
        console.log( req );

        let authKey = this.getSignature();
        let options = {
            url: `http://${HOST}/files/v2/${APP_ID}/${BUCKET}/${fileName}`,
            headers: {
                'HOST' : HOST,
                'Authorization': authKey
            }
        }
        
        // req.pipe( request(options) ).pipe( res );

        return;


        let body = {
            'op': 'upload',
            'filecontent': '',
        }
    }
}


module.exports = {
    upload: function(req, res){
        file.uploadImage(req, res);
    },
    getList: function(req, res){
        file.getList(req, res);
    },
}