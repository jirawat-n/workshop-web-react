import React from "react"
export const users = [
    {
        id: 'a',
        username: 'Somsak',
        email: 'somsak@test.com',
        password: 'abc123',
    },
    {
        id: 'b',
        username: 'Wanchai',
        email: 'wanchai@test.com',
        password: '123abc',
    },
    {
        id: 'c',
        username: '1',
        email: '1',
        password: '1',
    },
]

export function signin(username, password) {
    return new Promise((resolve, reject) => {
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        )

        setTimeout(() => {
            if (foundUser) {
                resolve(foundUser)
            } else {
                reject('Email or password is invalid')
            }
        }, 3000)
    })
}
