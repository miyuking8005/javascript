// クラスを定義する
class Product {
    // コンストラクタを使ってインスタンス化するときに初期化する
    constructor(name,price,category){
        // インスタンス（オブジェクト）にプロパティを持たせる
     this.name = name;
     this.price = price;
     this.category = category;
    }

    // メゾットを定義する
    describe(){
        console.log('この商品名は' + this.name + 'です');
    }
}

// インスタンス化する
const shampoo = new Product('シャンプー',500,'生活雑貨');
const coffee = new Product('コーヒー',1500,'飲料');

// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

// メゾットを呼び出す（実行する）
shampoo.describe();

// 通常のオブジェクトにメゾットを定義する
const user = {
    name: '侍太郎',
   age: 36,
   gender: '男性',
   greet: ()=> {
    console.log('よろしくお願いします!');
   }
}

// メゾットを呼び出す（実行する）
user.greet();