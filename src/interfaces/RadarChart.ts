interface Datasets {
    label: string,
    data: number[],
    backgroundColor: string,
    borderColor: string,
    borderWidth: number
}

export interface RadarInterface {
    labels: string[],
    datasets: Datasets[]
}