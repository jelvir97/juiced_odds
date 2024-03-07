
/**
 * 
 * returns yesterdays date formatted as : "YYYY-MM-DD"
 */

const yesterdaysDate = ()=>{
    const date = new Date()
    date.setDate(date.getDate() - 1)
    let y = date.toLocaleDateString('en-us', {month:'numeric', day:'numeric' , year:'numeric'})
    let arr = y.split('/').map((e)=> (e.length == 1 ? '0'+e : e ))

    arr.unshift(arr.pop())
    return arr.join('-')
}
/**
 *  takes in UTC string from game 
 * 
 *  returns string : "5:00 PM 01/01"
 */
const gameTime = (strUTC)=>{
    const d = new Date(Date.parse(strUTC))
    const dStr = d.toLocaleTimeString()

    const meridiem = dStr.substring(dStr.length - 2)
    const digits = dStr.split(':')

    const day = d.toLocaleDateString().split('/')

    return digits[0]+ ':'+ digits[1]+ ' ' + meridiem + ' ' + day[0]+ '/' + day[1]
}

export {yesterdaysDate, gameTime};