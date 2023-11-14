const array = [1, 15, 16, 2, 7, -9, 18, 55];

// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
let newArray = array.filter((item) => item > 5)
// console.log(newArray)


// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
const sum = array.reduce((sum, item) => sum + item);
// console.log(sum);


// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
let resultFind = (item) => {
    if (array.includes(item)) {
        return item;
    } else {
        return "Not found!";
    }
};
// console.log(resultFind(15));


// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).
let checkGreater0 = (arr) => {
    let newArr = arr.filter(item => item < 0);
    return newArr.length === 0;
}
// console.log(checkGreater0(array));


//     5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
let checkFirstElementGreater3 = (arr) => {
    let newArr = arr.filter(item => item > 3);
    if (newArr.length > 0) {
        return newArr[0];
    } else {
        return "Not found!";
    }
}
// console.log(checkFirstElementGreater3(array));

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
const [first, ...rest] = array;
// console.log(first, rest);

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = {
    name: "Nhat",
    age: 25,
    address: "Da Nang"
}

let {name, age} = person;
// console.log(name, age)


// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
let resultSum = ([...array, 15, 22]).reduce((sum, item) => sum + item);
// console.log(resultSum);


// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
let names = ["Trung", "Nhat", "Phuong"];
let result = `Welcome ${[...names]}`
// console.log(result);


// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals.
// Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let book = {
    title: "Quả bóng vàng 2023",
    author: "NhatNK",
    pages: 30,
    displayInfo: () => {
        let {title, author, pages} = book;
        console.log(title, author, pages);
    }
}

book.displayInfo();
