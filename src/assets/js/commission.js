
import api from './request'


var service = {
    companySearch(data){
        return api({
            method: 'post',
            url: '/system/logi1n',
            params: data,
        });
	},
    findCompany(){

    },
};


export default service;


































