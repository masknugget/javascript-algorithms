// 这个export全局导出， default该文件内部的所有的变量外部都无法获取。如果希望获取某个变量，必须通过export
//export default 这个只有一个不需要加{}，当使用export {} 这样的
export default class LinkedListNode {                              
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  // 这个回调
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
