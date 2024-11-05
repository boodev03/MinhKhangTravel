export interface content {
    title: string;
    description: string[];
}   
export interface question {
    question: string;
    answer: string;
}

export interface CarDetail {
    id: number;
    name: string;
    introduction: string[];
    contents: content[];
    images: string[];
    questions: question[];
}