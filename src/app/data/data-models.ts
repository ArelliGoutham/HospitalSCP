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
    prescription?: string
    dateOfVisit: Date
    doctorName: string
}

export interface DoctorPatientCount {
    name: string
    specialization: string
    noOfPatients: number
}