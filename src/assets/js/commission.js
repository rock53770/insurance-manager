
// import 'jquery.min';

var service = {
    companySearch(data){
        var URL      = "/agency/company/findAll",
            TEST_URL = "../../assets/json/companySearch.json";
		return $.ajax({
            method: 'get',
            // testUrl: TEST_URL,
            url: TEST_URL,
            data: data||{}
		})
	},
    findCompany(){

    },



};


export default service;


































