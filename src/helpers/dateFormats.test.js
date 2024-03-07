import {yesterdaysDate, gameTime} from "./dateFormats"

test('yesterdaysDate', ()=>{
    const date = yesterdaysDate()
    expect(typeof date).toBe('string')
    expect(date.length).toEqual(10)
})

test('gameTime', ()=>{
    expect(gameTime('2024-03-07T00:00:00Z')).toEqual('5:00 PM 3/6')
})