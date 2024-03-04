
const yesterdaysDate = ()=>{
    const date = new Date()
    date.setDate(date.getDate() - 2)
    let y = date.toLocaleDateString('en-us', {month:'numeric', day:'numeric' , year:'numeric'})
    let arr = y.split('/').map((e)=> (e.length == 1 ? '0'+e : e ))

    arr.unshift(arr.pop())
    return arr.join('-')
}

const gameTime = (strUTC)=>{
    const d = new Date(Date.parse(strUTC))
    const dStr = d.toLocaleTimeString()

    const meridiem = dStr.substring(dStr.length - 2)
    const digits = dStr.split(':')

    const day = d.toLocaleDateString().split('/')

    return digits[0]+ ':'+ digits[1]+ ' ' + meridiem + ' ' + day[0]+ '/' + day[1]
}

export {yesterdaysDate, gameTime};