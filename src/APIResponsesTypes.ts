
export interface Meal {
    id: number;
    title: string;
    image: string;
    instructions: string;
}

export interface mealAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    results: Meal[];
}