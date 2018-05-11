<template>
<div id="app">
	<div class="add-config">
		<!--<div class="add-content">-->
			<!--<div class="container">-->
				<!--&lt;!&ndash; 基本信息 &ndash;&gt;-->
				<!--<div class="basic-information">-->
					<!--<div class="basic-title"><i class="line"></i>基本信息</div>-->
					<!--<div class="basic-text">-->
						<!--<div class="basic-block">-->
							<!--<span class="describe">保险公司：</span>-->
							<!--&lt;!&ndash;<select class="search" ng-model="info.companyId" ng-options="v.id as v.name for v in company" ng-change="chooseBranch(orderIndex,info.companyId)">&ndash;&gt;-->
								<!--&lt;!&ndash;<option value="">请选择保险公司</option>&ndash;&gt;-->
							<!--&lt;!&ndash;</select>&ndash;&gt;-->
						<!--</div>-->
						<!--<div class="basic-block">-->
							<!--<span class="describe">中支机构：</span>-->
							<!--&lt;!&ndash;<select class="search select2" ng-model="info.branchId" ng-options="v.id as v.name for v in branch[orderIndex]" ng-change="chooseBranchProvince(orderIndex)">&ndash;&gt;-->
								<!--&lt;!&ndash;<option value="">请选择中支机构</option>&ndash;&gt;-->
							<!--&lt;!&ndash;</select>&ndash;&gt;-->
						<!--</div>-->
						<!--<div class="basic-block">-->
							<!--<span class="describe">中支所在地：</span>-->
							<!--&lt;!&ndash;<select class="search" disabled>&ndash;&gt;-->
								<!--&lt;!&ndash;<option value="">{{info.acceptProvinceName||'请选择省'}}</option>&ndash;&gt;-->
							<!--&lt;!&ndash;</select>&ndash;&gt;-->
							<!--&lt;!&ndash;<select class="search" disabled>&ndash;&gt;-->
								<!--&lt;!&ndash;<option value="">{{info.acceptCityName||'请选择市'}}</option>&ndash;&gt;-->
							<!--&lt;!&ndash;</select>&ndash;&gt;-->
						<!--</div>-->
					<!--</div>-->
					<!--<div class="basic-text">-->
						<!--<div class="paul-company">-->
							<!--<span class="describe">保代公司：</span>-->
							<!--<span class="val"></span>-->
							<!--&lt;!&ndash;<select class="search" ng-model="info.agencyCompanyId" ng-options="v.id as v.name for v in paulCompany">&ndash;&gt;-->
								<!--&lt;!&ndash;<option value="">请选择保代公司</option>&ndash;&gt;-->
							<!--&lt;!&ndash;</select>&ndash;&gt;-->
						<!--</div>-->
						<!--<div class="paul-company yewu-cover">-->
							<!--<span class="describe">业务覆盖范围：</span>-->
							<!--<select class="search select2" multiple="multiple" ng-model="otherInfos[orderIndex].coverAddressEx" ng-options="v.cityCode as v.cityName for v in cityList" style="height:30px;" ng-change="chooseCity(orderIndex)" placeholder="请选择城市">-->
							<!--</select>-->
							<!--<span class="city-chose-box" ng-click="clickRegionBox($event)">-->
                            <!--<a ng-click="showChooseCity(orderIndex)" href="javascript:;">选择</a>-->
                            <!--<div class="region-box" ng-show="otherInfos[orderIndex].showRegionBox">-->
                                <!--<ul class="box province">-->
                                    <!--&lt;!&ndash; <li >全国</li> &ndash;&gt;-->
                                    <!--<li ng-repeat="item in otherInfos[orderIndex].provinceList track by $index" ng-click="clickProvince(orderIndex, $index)" ng-class="{'chosed':item.isOneChosed,'curr':(otherInfos[orderIndex].currProvinceIndex||0)==$index}">{{item.provinceName}}</li>-->
                                <!--</ul>-->
                                <!--<ul class="box city">-->
                                    <!--<li class="all" ng-class="{'chosed':otherInfos[orderIndex].provinceList[otherInfos[orderIndex].currProvinceIndex || 0].isAllChosed}" ng-click="clickCity(orderIndex, 0)">全省</li>-->
                                    <!--<li ng-repeat="(key, item) in otherInfos[orderIndex].provinceList[otherInfos[orderIndex].currProvinceIndex || 0].cityObj" ng-click="clickCity(orderIndex, item.cityCode)" ng-class="{'chosed':item.chosed}">{{item.cityName}}</li>-->
                                <!--</ul>-->
                                <!--<i class="arrow"><b></b></i>-->
                            <!--</div>-->
                        <!--</span>-->
							<!--&lt;!&ndash; <select class="search" ng-model="info.coverAddress[0].id" ng-options="v.id as v.provinceName for v in provinceList" ng-change="chooseCity(orderIndex)">-->
                                <!--<option value="">请选择省</option>-->
                            <!--</select>-->
                            <!--<select class="search" ng-model="info.acceptCityCode" ng-options="v.cityCode as v.cityName for v in cityList[orderIndex]" multiple style="height:50px; width:50px;">-->
                                <!--<option value="">请选择市</option>-->
                            <!--</select> &ndash;&gt;-->
						<!--</div>-->
					<!--</div>-->
					<!--<i class="iconfont arrow1-down go-down" ng-click="retract(orderIndex)" ng-if="!isHide[orderIndex]"></i>-->
				<!--</div>-->

			<!--</div>-->
			<!--<div class="submit">-->
				<!--<a href="javascript:;" class="cancel">取消</a>-->
				<!--<a href="javascript:;" class="ensure" ng-click="insertConfig()">确定</a>-->
			<!--</div>-->
		<!--</div>-->
	</div>


	<!--<div class="addSelectOptions-mask" ng-if="showSelectFrame">-->
		<!--<div class="addSelectOptions-box">-->
			<!--<div class="addSelectOptions-cont">-->
				<!--<div class="addSelectOptions" ng-repeat="i in filterList">-->
					<!--<label>-->
						<!--<input type="checkbox" ng-model="i.isSelect">-->
						<!--<span ng-bind="i.name"></span>-->
					<!--</label>-->
				<!--</div>-->
				<!--<div class="add-select-btn ks-clear">-->
					<!--<div class="ks-fLeft cancel" ng-click="cancel()">取消</div>-->
					<!--<div class="ks-fLeft confirm" ng-click="confirm()">确定</div>-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
	<!--</div>-->
</div>
</template>
<script>
import commissionService from 'assets/js/commission'
export default {
	data () {
		return {
            infoParams: {
                "companyId": "",    //公司Id
                "companyName": "",  //公司名称
                "branchId": "",   //中支机构Id
                "branchName": "",   //中支机构名称
                "acceptProvinceCode": "",    //中支所在省份code
                "acceptProvinceName": "",   //中支所在地省份名称
                "acceptCityCode": "",   //中支所在地城市code
                "acceptCityName": "",   //中支所在地城市名称
                "coverAddress": [],
                // [{   //业务覆盖城市
                //     "id": 0,     //省份id
                //     "city": [{
                //         "cityCode": "",     //城市code
                //         "cityName": "",      //城市name
                //     }]
                // }],
                "settleTypeValue": 0,    //结算方式（0：全保费：1净费）
                "premiumSettleCycle": "",  //保费结算周期
                "commissionSettleCycle": "",   //佣金结算周期
                "isSeparate": 1,  //是否价税分离（1是 0 否）
                "platformCostPoint": 2,   //平台固定成本
                "compulsoryCommissionPoints": 0,   //交强险佣金点数
                "aloneCompulsoryCommissionPoints": 0,  //单保交强险佣金点数
                "taxScale": 12,     //税费比例
                "commercialList": [{
                    "isNetFee": 1,     //是否净费
                    "commercialCommissionValue": 0,     //佣金类型 （0：正常车 1：过户车 2：新车）
                    "rebateTypeValue": 1,   //折扣类型（0：提高折扣 1 正常折扣）
                    "feePoint": "",  //费用
                    "platformExtraPoint": "",    //平台提成
                    "claimID": 1,   //出险次数id,
                    "list": []
                }],
                "agencyCompanyId": 1,   //保代公司id
                "bespeakTime": ""   //预约时间
            }
		}
	},
	created (){
        //查询保代公司
        commissionService.companySearch().then(function(data){
            console.log(data)
            if (data.code != 1) {
                new Say(data.message)
            } else {
                console.log()
            }
        })
	},
	methods:{
        pageInit(){
//			var ajaxCount = 5;
//
//			//查询出险配置
//			commissionService.findConfig().then(function(data){
//				if (data.code != 1) {
//					new Say(data.message)
//				} else {
//					$scope.insConfig = data.object;
//					callback();
//				}
//			})
//
//			//查询保代公司
//			commissionService.companySearch().then(function(data){
//				if (data.code != 1) {
//					new Say(data.message)
//				} else {
//					$scope.paulCompany = data.object;
//					callback();
//				}
//			})
//			//查询下拉公司
//			commissionService.findCompany().then(function(data){
//				if (data.code != 1) {
//					new Say(data.message)
//				} else {
//					$scope.company = data.object;
//					$scope.companyList = {}
//
//					$scope.company.forEach(function(item, index){
//						$scope.companyList[item.id] = item.name
//					})
//					callback();
//				}
//			})
//			//查询省份
//			commissionService.queryProvince().then(function(data){
//				if (data.code != 1) {
//					new Say(data.message)
//				} else {
//					$scope.provinceList = data.object;
//					callback()
//				}
//			})
//			//查询城市
//			commissionService.queryCity({provinceId:0}).then(function(data){
//				if (data.code != 1) {
//					new Say(data.message)
//				} else {
//					$scope.cityList = data.object;
//					callback()
//				}
//			})
//
//			//加载回调
//			function callback(){
//				ajaxCount--;
//				if(ajaxCount == 0){
//					//省市数据组合
//					var cityListClone = angular.copy($scope.cityList, []);
//					$scope.provinceList.forEach(function(provinceItem, index){
//						provinceItem.cityObj = {};
//						for(var i = 0; i < cityListClone.length; i++){
//							var cityItem = cityListClone[i];
//							if(provinceItem.provinceCode == cityItem.provinceCode){
//								provinceItem.cityObj[cityItem.cityCode] = cityItem;
//							}
//						}
//					});
//
//					$scope.addConfig();
//				}
//			}
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
