
var submitMap = {};
function api(opt){

    if (typeof submitMap[opt.url] !== 'undefined') return
    submitMap[opt.url] = true;

	var defaultOpt = {
        dataType : "json",
        timeout: 10000,
		data:{
        	ts:new Date().getTime()
		},
        cache:false,
        xhrFields:{withCredentials: true },
        contentType:"application/json;charset=UTF-8",
	};
	var opts = $.extend({},defaultOpt,opt||{});

	var $q = $.Deferred();
	$.ajax(opts)
		.done(function(res){
            $q.resolve(res)
			delete submitMap[opt.url]
		})
		.fail(function(err){
            console.log("========ajax请求错误，错误信息如下：=========");
			console.log("status: " + err.status + "; statusText: " + err.statusText);
			delete submitMap[opt.url]
		});
	return $q.promise();
}
export default api;


































