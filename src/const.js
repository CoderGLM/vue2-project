/*
 *  定义常量
 */

//  OAuth Settings
//
//
export const clientID = '8fda6183ba583635f0e5'
export const clientSecret = '6402f910e027326d07edda48ccb3e2573cb55a77'

export const apiDomain = 'https://api.github.com'
export const transferDomain = 'http://localhost:8888'

//  Page
//
//
// Authorize Page
export const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}`

// Api
//
//
export const getAccessToken = `${transferDomain}/access_token/`
export const getUserInfo = `${apiDomain}/user?access_token=`
