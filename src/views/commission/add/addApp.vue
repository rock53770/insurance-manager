<template>
<div id="app">
	<div class="add-config">
		<div id="note">11</div>
	</div>
</div>
</template>
<script>
import commissionService from 'assets/js/commission'
export default {
	data () {
		return {
            infoParams: {
            }
		}
	},
	created (){
        //查询保代公司
        this.pageInit();
        commissionService.companySearch({}).then(function(res){
            if (res.code != 1) {
                console.log(res.message)
            } else {
                console.log("成功")
            }
        },function(err){
            console.log(err)
		})
	},
	methods:{
        pageInit(){

		}
	}
}
</script>


<style lang="less">
.note{
	font-size:12px;
}
.note2{
	font-size:18px;
}


</style>
