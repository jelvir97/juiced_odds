
const yesterdaysDate = ()=>{
    const date = new Date()
    date.setDate(date.getDate() - 2)
    let y = date.toLocaleDateString('en-us', {month:'numeric', day:'numeric' , year:'numeric'})
    let arr = y.split('/').map((e)=> (e.length == 1 ? '0'+e : e ))

    arr.unshift(arr.pop())
    return arr.join('-')
}

export {yesterdaysDate};