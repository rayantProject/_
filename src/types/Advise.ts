export default interface Advise {
    id: string;
    title: string;
    text: string;
    type: "before" | "advice" | "after";
}