console.log('in js05.js...');

let selNian = document.getElementById('selNian');
let selYue = document.getElementById('selYue');
let selRi = document.getElementById('selRi');

// 通过循环添加数据
for (let i = 1970; i <= new Date().getFullYear(); i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '年');
    selNian.append(op);
}
// 切换选中的索引值
// selectedIndex是select元素特有属性
// 表示设置选中项的引索（第几项的意思）
// options也是select特有
// 表示获取里面所有的option
selNian.selectedIndex = selNian.options.length / 2;
// for(变量初始化；循环是否继续的逻辑表达式；每次循环之后要执行的)
// { 循环代码 }
for (let i = 1; i <= 12; i++) {
    let op = document.createElement('option');
    op.setAttribute('value', i);
    op.append(i + '月');
    selYue.append(op);
}

selYue.selectedIndex = 8;

// 年月变化要计算日期
// 年月变化动作一致，没有必要写两次，可以通过命名的function解决
// 可以把带名称的function理解成一块代码
// 通过名称就可以执行
function changeInfo() {
    // 获取年月的值 
    let nian = selNian.value;
    let yue = selYue.value;
    console.log('选中的年月是：', nian, yue);
    let ri = 31; //默认就是31天
    let run = nian % 400 == 0 
      || (nian % 4 == 0 && nian % 100 != 0);
    if(yue == 4 || yue ==6  || yue == 9 || yue == 11) {
        ri = 30;
    } else if(run && yue == 2) {
        ri = 29;
    } else if(yue == 2) {
        ri = 28;
    }
    // 动态的日期值循环
    selRi.innerHTML = ''; // 清除掉原来的值
    for(let i = 1; i <= ri; i++) {
        let op = document.createElement('option');
        op.setAttribute('value', i);
        op.append(i + '日');
        selRi.append(op);
    }
}

// change事件是value值变化触发
selNian.addEventListener('change', changeInfo);
selYue.addEventListener('change', changeInfo);
// function可以独立调用
changeInfo();

// 九九乘法表（双层循环）
let tb99 = document.getElementById('tb99');
for(let i = 1; i < 10; i++) {
    // 九行
    let tr = document.createElement('tr');
    tb99.append(tr);
    // 每行九个格
    for (let j = 1; j < i + 1; j++) {
        let td = document.createElement('td');
        tr.append(td);
        td.append(j + '*' + i + '=' + i * j);
    }
}

// if,for可以任意嵌套搭配使用完成复杂的任务！