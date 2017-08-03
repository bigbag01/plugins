# 打字效果 js 插件 v1.0

#### 简要描述

粗糙地模仿打字效果

#### 使用方式

无论原生版本还是jquery插件版本，options参数均为可选，有默认值。

```html
<!-- DOM部分 -->
<p id="example">Test Test Test</p>
<p id="example2">Test2 Test2 Test2</p>
<!-- 使用方式一 -->
<script src="typing.js"></script>
<script type="text/javascript">
	var options = {
      repeat:true,
      speed:180
	}
	var example = new Type(document.getElementById('example'),options);
</script>
<!-- 使用方式二 -->
<script src="//apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="jquery-typing.js"></script>
<script type="text/javascript">
	$('$#example2').Type(options);
</script>
```

#### options参数

| 参数名    | 作用                      | 默认值  |
| ------ | ----------------------- | ---- |
| repeat | 代表是否重新输入                | true |
| speed  | 代表输入速度                  | 200  |
| symbol | 打字效果的标识符，通常为 '_' 或 '\|' | '_'  |

