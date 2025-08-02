
export interface IProduct {
    title: string
    price: number
    descriptions: string
    photo: string[]
}

export abstract class Products {
    static get() {
        return [
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "sjashfkjahfjkashfkjhafjkhakjfhashfkshakjfhsjhfjkahjkfhskajhfjashfjkashkjhasjkh", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "s", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "s", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "s", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
            {title: "first", price: 1, descriptions: "s", photo: ["https://bulma.io/assets/images/placeholders/96x96.png"]},
        ];
    }
}
