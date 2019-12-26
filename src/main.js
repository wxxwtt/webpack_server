// import * as foo from './foo'
// import './main.css'
// console.log(foo);
// console.log('o-o');
$('#list').on('click', '.add', function (e) {
  e.stopPropagation()
  var liHtml = `
                <li>
                  开始: <input type="text" class="starttime"> 结束:<input type="text" class="endtime"><button class="del">删除</button> <button class="add">添加</button>
                </li>
              `
  $('#list').append(liHtml)
})
$('#list').on('input','input',function(){
  var starttime = $(this).val()
  console.log(starttime);
})

$('#list').on('click', '.del', function (e) {

  e.stopPropagation()
  $(this).parent('li').remove()


})
var fn = () => {

}
console.log(fn);
const arr = [{id:1},{id:2},{id:3}]
var res = arr.filter(item => {
  return item.id == 2
})
console.log(res);