/******************************************************************************
 *  Execution       :   1. default node          : cmd>node flipCoin.js 
 *                      
 * 
 *  Purpose         : To flip coin and get the percentage of head and tails obtained.
 * 
 *  @description    
 * 
 *  @file           : flipCoin.js
 *  @overview       : Sum the number of times the count of heads and tails,calculate the percentage.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var num = read.questionInt("Enter the num :")
utility.flipCoin(num);

