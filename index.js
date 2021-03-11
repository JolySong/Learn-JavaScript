
function addTherrNums(a,b,c){
    return a+b+c;
}
console.log(addTherrNums(1,2,3));

function addTherrNumsCurry(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(addTherrNumsCurry(1)(2)(3));

var fixeTwo = addTherrNumsCurry(1)(2);
console.log(fixeTwo(4));
console.log(fixeTwo(5));
console.log(fixeTwo(6));

//反转数组
console.clear();
var arr = [1,2,3,4];
console.log(arr.reverse());

//删除数组元素
console.clear();
var arr = [1,2,3,4];
//改变数组元素个数
arr.length = 3;
console.log(arr);
var arr = [1,2,3,4,5,6];
//splice: 要删除的索引 , 删除的元素个数 ， 要添加的元素
arr.splice(2, 1);
console.log(arr);
arr.splice(1,4,2,3,4,5,6);

//数组排序
console.clear();
var arr = [1,5,2,3,4];
arr.sort();
console.log(arr);
arr.sort((a, b) => b-a);
console.log(arr);

//数组连接
console.clear();
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

//栈
console.clear();
var Stack = [1,2,3];
//压栈
Stack.push(4);
Stack.push(5,6);
console.log(Stack);
//出栈
var ret = Stack.pop();
console.log(ret);
console.log(Stack);

//队列
console.clear();
var queue = [1,2,3];
//入队
queue.push(4,5,6);
console.log(queue);
//出队
var ret = queue.shift();
console.log(ret);
console.log(queue);
//插数据在队首
queue.unshift(0,1);
console.log(queue);

//数组裁切
console.clear();
var arr = [1,2,3,4,5,6];
//splice 要裁切的数量 
console.log(arr.splice(2, 5));
console.log(arr);

// map数组
console.clear();
var arr = [1,2,3,4];
var mappedArr = arr.map(ele => ele *2);
console.log(mappedArr);
console.log(arr);

//数组 reduce
console.clear();
var arr = [1,2,3,4];
var result = arr.reduce((previous, current) => previous + current);
console.log(result);
var result2 = arr.reduce((first, second) => first+second);
console.log(result2);

//数组过滤 filter
console.clear();
var arr = [1,2,3,4,5,6];
var filterdArr = arr.filter(item => item>4);
console.log(filterdArr);

//数组测试 every
console.clear();
var arr = [1,2,3,4,5,6];
//判断数组中的元素是否全部大于 N
var N = 7;
var result = arr.every(item=> item>N);
console.log(result);
//some判断数组中的元素是否有一个大于 N
var resultSome = arr.some(item => item>N);
console.log(resultSome);

//数组  destructuring 结构操作符
console.clear();
var arr = [1,2,3];
var [ a, b, c] = arr;
console.log(a,b,c);

var [d, e] = arr;
console.log(d,e);

var[,f] = arr;
console.log(f);

function multipleReturns(){
    let name = "Joly";
    let position = "前端工程师";
    return [name,position];
}
var [MyName,Position] = multipleReturns();
console.log(MyName,Position);

//对象
console.clear();
//构造函数
function Employee(name, position){
    this.name = name;
    this.Position = position;
}
var emp1 = new Employee("张三","前端工程师");
console.log(emp1);

var emp2 = new Employee("李四","后端工程师");
//遍历对象 Object
console.log(Object.keys(emp1));
//遍历对象 for
for(key in emp2){
    console.log(key);
}

//
console.clear();
