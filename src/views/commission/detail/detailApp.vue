<template>
<div id="app">
	<Cascader :data="data" v-model="value2"></Cascader>
</div>
</template>
<script>
export default {
	data () {
		return {
			value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
			data: [{
				value: 'beijing',
				label: '北京',
				children: [
					{
						value: 'gugong',
						label: '故宫'
					},
					{
						value: 'tiantan',
						label: '天坛'
					},
					{
						value: 'wangfujing',
						label: '王府井'
					}
				]
			}, {
				value: 'jiangsu',
				label: '江苏',
				children: [
					{
						value: 'nanjing',
						label: '南京',
						children: [
							{
								value: 'fuzimiao',
								label: '夫子庙',
							}
						]
					},
					{
						value: 'suzhou',
						label: '苏州',
						children: [
							{
								value: 'zhuozhengyuan',
								label: '拙政园',
							},
							{
								value: 'shizilin',
								label: '狮子林',
							}
						]
					}
				],
			}]
		}
	}
}
</script>


<style lang="less">


.note{
	color:#666;
	padding:10px;
	font-size:12px;
}
.note p{
	line-height:25px;
}

.weui-cells{
font-size: 14px!important;	
}

/*
 * less 展示
 */ 
.lessTest{
	.listbox{
		border-radius: 10px;
		font-size: 14px;
	}
	.boxcontent{
		padding: 15px;
	}
}


</style>
