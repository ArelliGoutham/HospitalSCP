// export type Root = Root2[]

export interface Doctor {
    name: string
    id: number
    specialization: string
}

export interface Patient {
    name: string
    id: number
    specialization: string
    age: number
    prescription: string
    dateOfVisit: string
    doctorName: string
}