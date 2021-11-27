# vue-shortcut-key

一个用于 vue 的键盘快捷键指令插件

## 安装

```bash
$ npm i vue-shortcut-key
# or
$ yarn add vue-shortcut-key
```

## 使用

```javascript
import Vue from "vue";
import vueShortcutKey from "vue-shortcut-key";
Vue.use(vueShortcutKey);
```

```vue
<template>
  <div v-sk="handleMethod">Press `ctrl + c` to continue.</div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  computed: {
    handleMethod () {
      'ctrl+c': this.ctrlC,
        'ctrl+v': this.ctrlV,
        '1': this.ctrlC,
        '2': this.ctrlV,
        'up': this.upHand,
        'meta+e': this.metaE
    }
  }
}
</script>
```

默认情况下，事件绑定到文档。如果如果指定了 layout 修饰符，则可以为当前元素绑定事件。

```vue
<template>
  <div v-sk.layout="handleMethod">content</div>
</template>
```

### 键盘值

| 键名       | 使用的值 | 描述                                      |
| ---------- | -------- | ----------------------------------------- |
| ArrowUp    | up       | 键盘的上键                                |
| ArrowDown  | down     | 键盘的下键                                |
| ArrowLeft  | left     | 键盘的左键                                |
| ArrowRight | right    | 键盘的右键                                |
| Control    | ctrl     | 键盘的 Ctrl 键 (mac:control,windows:Ctrl) |
| Alt        | alt      | 键盘的 Alt 键 (mac:command,windows:Alt)   |
| Meta       | meta     | 键盘的 Meta 键 (mac:option,windows:win)   |
| Shift      | shift    | 键盘的 Shift 键                           |
| Tab        | tab      | 键盘的 Tab 键                             |
