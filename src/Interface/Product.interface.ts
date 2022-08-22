export interface IItems {
    id: number;
    name: string;
    value: number;
    subValue: number;
    count: string;
    ref?: string;
    code?: string;
    description: string;
    optionItem: {
        showDescription: boolean;
        showCode: boolean;
        showRef: boolean;
    }
}