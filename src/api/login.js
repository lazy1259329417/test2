import request from '../utils/request'

export function login(data) {
    return request({
        url: "/login",
        method: 'POST',
        data
    })
}

export function getStudent() {
    return request({
        url: "/student",
        method: 'GET',
    })
}

export function getStudentPage(params) {
    return request({
        url: "/student/page",
        method: 'GET',
        params
    })
}