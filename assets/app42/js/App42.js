
function App42Album() {
    App42Service.call(this);
    var __album=this;


this.createAlbum = function(userName,albumName,albumDescription,request) {
    var URL = App42.URL("gallery"+ "/" + "album" + "/" + userName);
    if(userName != null && albumName != null && albumDescription != null ){
        userName = userName.trim();
        albumName =albumName.trim();
        albumDescription =albumDescription.trim();
    }
    if(userName == "" || albumName == "" || albumDescription == "" || userName == null || albumName == null|| albumDescription == null){
        App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
        App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
        App42Fault.throwExceptionIfNullOrBlank(albumDescription, "albumDescription")
        return ;
    }
    var params =  __album.populateSignParams(),
    metaHeader = __album.populateMetaHeaderParams(),
    headerParams = __merge(params,metaHeader);
    var body = '{"app42":{"album":{"name":"' + albumName + '","description":"' + albumDescription + '"}}}';
    params.body = body;
    App42Connection.post(URL, params,body,request, headerParams);
		
};
	
this.getAlbums = function(userName,request) {
    if(userName != null ){
        userName = userName.trim();
			
    }
    if(userName == ""  || userName == null ){
        App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
        return ;
    }
    var URL = App42.URL("gallery"+ "/album"+ "/" + userName);
    var params =  __album.populateSignParams(),
    metaHeader = __album.populateMetaHeaderParams(),
    headerParams = __merge(params,metaHeader);
    params.userName = userName;
    App42Connection.get(URL, params,request, null, headerParams);
};
		
this.getAlbumsByPaging = function(userName,max,offset,request) {
    var URL = App42.URL("gallery"+ "/album"+ "/" + userName+ "/" + max + "/" + offset);
    if(userName != null ){
        userName = userName.trim();
			
    }
    if(userName == ""  || userName == null ){
        App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
        return ;
    }
    var params =  __album.populateSignParams(),
    metaHeader = __album.populateMetaHeaderParams(),
    headerParams = __merge(params,metaHeader);
    params.userName=userName;
    params.offset = offset;
    params.max=max;
    App42Connection.get(URL, params,request, null, headerParams);
};
		
this.getAlbumsCount = function(userName,request) {
    var URL = App42.URL("gallery"+ "/album"+ "/" + userName+ "/" + "count");
    if(userName != null ){
        userName = userName.trim();
			
    }
    if(userName == ""  || userName == null ){
        App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
        return ;
    }
    var params =  __album.populateSignParams(),
    metaHeader = __album.populateMetaHeaderParams(),
    headerParams = __merge(params,metaHeader);
    params.userName=userName;
    App42Connection.get(URL, params,request, null, headerParams);
};
		
		
this.getAlbumByName = function(userName,albumName,request) {
    var URL = App42.URL("gallery"+ "/album"+ "/" + userName+ "/" + albumName);
    if(userName != null && albumName != null  ){
        userName = userName.trim();
        albumName =albumName.trim();
    }
    if(userName == "" || albumName == ""  || userName == null || albumName == null){
        App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
        App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
        return ;
    }
var params =  __album.populateSignParams(),
    metaHeader = __album.populateMetaHeaderParams(),
    headerParams = __merge(params,metaHeader);
    params.userName=userName;
    params.albumName=albumName;
    App42Connection.get(URL, params,request, null, headerParams);
};
		
this.removeAlbum = function(userName, albumName,request) {
    var URL = App42.URL("gallery"+ "/" + userName + "/" + albumName);
    if(userName != null && albumName != null  ){
        userName = userName.trim();
        albumName =albumName.trim();
    }
    if(userName == "" || albumName == ""  || userName == null || albumName == null){
        App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
        App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
        return ;
    }
    var params =  __album.populateSignParams(),
    metaHeader = __album.populateMetaHeaderParams(),
    headerParams = __merge(params,metaHeader);
    params.userName = userName;
    params.albumName = albumName;
    App42Connection.del(URL, params,request, headerParams);
};

}

function App42Achievement() {
    App42Service.call(this);
	 var __user=this;
   
    this.createAchievement = function(name,description,request) {
        var URL = App42.URL("achievement");
        if(name != null && description != null){
            name = name.trim();
            description =description.trim();
        }
        if(name == "" || description == "" || name == null || description == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
              return ;
        }
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        var body = '{"app42":{"achievement":{"name":"'+name+'","description":"'+description+'"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, hearedParams);
    };
	
	this.earnAchievement = function(userName,achievementName,gameName,description,request) {
        var URL = App42.URL("achievement" + "/earn");
        if(userName != null && achievementName != null && gameName != null && description != null ){
            userName = userName.trim();
            achievementName =achievementName.trim();
			gameName =gameName.trim();
			description =description.trim();
        }
        if(userName == "" || achievementName == "" || userName == null || achievementName == null || gameName == "" || gameName == null || description == "" || description == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(achievementName, "achievementName")
			  App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
			  App42Fault.throwExceptionIfNullOrBlank(description, "description")
              return ;
        }
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        var body = '{"app42":{"achievement":{"userName":"'+userName+'","name":"'+achievementName+'","gameName":"'+gameName+'","description":"'+description+'"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, hearedParams);
    };
	
	this.getAllAchievementsForUser = function(userName,request) {
        
        if(userName != null){
            userName = userName.trim();
        }
        if (userName == "" || userName == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var URL = App42.URL("achievement/"+userName);
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params, request,null, hearedParams);
    };
	
	this.getAllAchievementsForUserInGame = function(userName,gameName,request) {
        
        if(userName != null && gameName != null){
            userName = userName.trim();
			gameName = gameName.trim();
        }
        if (userName == "" || userName == null  || gameName == "" || gameName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
			 App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            return ;
        }
        var URL = App42.URL("achievement/" + userName  + "/" + gameName);
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        params.userName = userName;
		 params.gameName = gameName;
        App42Connection.get(URL, params, request,null, hearedParams);
    };
	
	this.getAllAchievements = function(request) {
        var URL = App42.URL("achievement"  + "/all");
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request,null,headerParams);
    };
	
	this.getAchievementByName = function(achievementName,request) {
        
        if(achievementName != null){
            achievementName = achievementName.trim();
        }
        if (achievementName == "" || achievementName == null ){
            App42Fault.throwExceptionIfNullOrBlank(achievementName, "achievementName")
            return ;
        }
        var URL = App42.URL("achievement/"+ "achievementName/" + achievementName);
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        params.achievementName = achievementName;
        App42Connection.get(URL, params, request,null, hearedParams);
    };
	
	this.getUsersAchievement = function(achievementName,gameName,request) {
        
        if(achievementName != null && gameName != null){
            achievementName = achievementName.trim();
			gameName = gameName.trim();
        }
        if (achievementName == "" || achievementName == null  || gameName == "" || gameName == null){
            App42Fault.throwExceptionIfNullOrBlank(achievementName, "achievementName")
			 App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            return ;
        }
        var URL = App42.URL("achievement/"+ "users/"+ achievementName + "/" + gameName);
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        params.achievementName = achievementName;
		 params.game = gameName;
        App42Connection.get(URL, params, request,null, hearedParams);
    };
	}
	
	

function App42ABTest() {
    App42Service.call(this);
    var __abTest=this;
    
    this.goalAchieved = function(testName,variantName,request) {
        var URL = App42.URL("abtest" + "/goal-achieved");
        if(testName != null && variantName != null ){
            testName = testName.trim();
            variantName =variantName.trim();
        }
        if(testName == "" || variantName == ""  || testName == null || variantName == null){
            App42Fault.throwExceptionIfNullOrBlank(testName, "testName")
            App42Fault.throwExceptionIfNullOrBlank(variantName, "variantName")
            return ;
        }
        var params =  __abTest.populateSignParams(),
        metaHeader = __abTest.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        var body = '{"app42":{"abtest":{"name":"'+testName+'","variantName":"'+variantName+'"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, hearedParams);
    };
	
	
	this.executeDataDriven = function(testName,request) {
        var URL = App42.URL("abtest" + "/execute/data-driven");
        if(testName != null ){
            testName = testName.trim();
        }
        if(testName == ""  || testName == null ){
            App42Fault.throwExceptionIfNullOrBlank(testName, "testName")
            return ;
        }
        var params =  __abTest.populateSignParams(),
        metaHeader = __abTest.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        var body = '{"app42":{"abtest":{"name":"'+testName+'"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, hearedParams);
    };
	
	
	this.execute = function(testName,request) {
        var URL = App42.URL("abtest" + "/execute");
        if(testName != null ){
            testName = testName.trim();
        }
        if(testName == ""  || testName == null ){
            App42Fault.throwExceptionIfNullOrBlank(testName, "testName")
            return ;
        }
        var params =  __abTest.populateSignParams(),
        metaHeader = __abTest.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        var body = '{"app42":{"abtest":{"name":"'+testName+'"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, hearedParams);
    };
	
	this.isActive = function(testName,request) {
        var URL = App42.URL("abtest" +"/isActive/" + testName);
        if(testName != null ){
            testName = testName.trim();
        }
        if(testName == ""  || testName == null ){
            App42Fault.throwExceptionIfNullOrBlank(testName, "testName")
            return ;
        }
        var params =  __abTest.populateSignParams(),
        metaHeader = __abTest.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
		params.testName = testName;
		App42Connection.get(URL, params, request,null, hearedParams);
    };
}




var Permission = {
    READ :"R",
    WRITE : "W"
};
function checkPermissionType(permission_type){
    if(Permission.READ == permission_type){
        return "R"
    }else if(Permission.WRITE == permission_type){
        return "W"
    }
    else{
        return null ;
    }
}
var App42Connection = {}
var App42Fault = {}
var App42 = {};
var apiKey;
var secretKey;
var uri = "https://api.shephertz.com/cloud/1.0/";
var name;
var geoTag;
var sessionRequest = false;
var sessionInvalidate = false;
var loggedInUser = null;

(function() {
    this.initialize = function(_api, _secret) {
        apiKey = _api
        secretKey = _secret
        if(localStorage.getItem("_App42_DeviceId") == undefined){
            localStorage.setItem("_App42_DeviceId", guid())
        }
    };
	
	this.setLoggedInUser = function(logged_In_User) {
       loggedInUser = logged_In_User;
    };
    
    this.getLoggedInUser = function() {
        return loggedInUser;
    };
	
    this.setBaseUrl = function(u) {
        uri = u;
    };
    this.URL = function(serviceUrl) {
        var baseUrl =uri;
        var url = baseUrl + serviceUrl;
        return url;
    };
    if (!String.prototype.trim) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g,'');
        }
    }
}).apply(App42)

function App42Exception(obj,type) {
    this.name = "App42Exception";
    var message
    if(obj == ""){
        message = type + " parameter can not be blank";
    }else if (obj == null){
        message = type + " parameter can not be null";
    }else if (obj == "PaymentStatus"){
        message = "Invalid Status ("+type+"). Could be either AUTHORIZED or UNAUTHORIZED or DECLINED";
    }else if (obj == "DeviceType"){
        message = "Invalid device ("+type+"). Could be either ANDROID or WP7 or iOS";
    }else if (obj == "FileType"){
        message = "Invalid fileType ("+type+").Could be either AUDIO or VIDEO or IMAGE or BINARY or TXT or XML or CSV or JSON or OTHER";
    }else if (obj != type){
        message = type + " address is not valid";
    }
    
    message = message;
    this.message = (message || "");
}
App42Exception.prototype = Error.prototype;

(function(){
    this.throwExceptionIfNullOrBlank= function(obj, name){
        if(obj == "" || obj == null){
            var e = new App42Exception( obj, name);
            throw e;
        }
    }
    this.appError= function(){
        var e = new AppError();
        throw e;
    }
    function AppError() {
        this.name = "App42Exception";
        var message = "Set your apiKey and secretKey correctly in App42.initialize( )";
        this.message = (message || "");
    }
    AppError.prototype = Error.prototype;
}).apply(App42Fault)

//var now = new Date();
var version = "1.0"
//var timeStamp = getODataUTCDateFilter(now)

function getODataUTCDateFilter(date) {
    var monthString;
    var rawMonth = (date.getUTCMonth()+1).toString();
    if (rawMonth.length == 1) {
        monthString = "0" + rawMonth;
    }
    else
    {
        monthString = rawMonth;
    }
    var dateString;
    var rawDate = date.getUTCDate().toString();
    if (rawDate.length == 1) {
        dateString = "0" + rawDate;
    }
    else
    {
        dateString = rawDate;
    }
    var DateFilter = "";
    DateFilter += date.getUTCFullYear() + "-";
    DateFilter += monthString + "-";
    DateFilter += dateString;
    DateFilter += "T" + date.getUTCHours() + ":";
    DateFilter += date.getUTCMinutes() + ":";
    DateFilter += date.getUTCSeconds() + ".";
    DateFilter += date.getUTCMilliseconds();
    DateFilter += "Z";
    return DateFilter;
}


function sortAssoc(arrayVal)
{
    var aTemp = [];
    for (var sKey in arrayVal)
        aTemp.push([sKey, arrayVal[sKey]]);

    aTemp.sort(function(a,b)
    {
        return ((a[0] > b[0]) ? -1 : ((a[0] < b[0]) ? 1 : 0));
    });
    var aOutPutString = "";
    var aOutput = [];
    for (var nIndex = aTemp.length-1; nIndex >=0; nIndex--){
        aOutput[aTemp[nIndex][0]] = aTemp[nIndex][1];
        aOutPutString+= aTemp[nIndex][0]+aTemp[nIndex][1];
    }
    return aOutPutString;
}



function createCORSRequest(method, url, time, sign, apiKey, body, request, sessionId, adminKey, fbAccessToken, geoTag, headerParams){
    var xhr = createXMLHTTPObject();
    xhr.open(method, url,true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("signature", sign);
    if(method == "POST" || method == "PUT"){
        xhr.setRequestHeader("Content-Type", "application/json");
    }
    for(var key in headerParams) {
        var value = headerParams[key];
        xhr.setRequestHeader(key.toString(), value);
    }
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4)
        {
            if(xhr.status==200){
                if(sessionRequest == true){
                    sessionRequest = false;
                    var userObj = JSON.parse(xhr.responseText);
                    if(userObj.app42.response.users != undefined){
                        var userSession = userObj.app42.response.users.user.sessionId;
                        if(localStorage != undefined){
                            localStorage.setItem("_App42_SessionId",userSession);
                        }
                    }
                }
                if(sessionInvalidate == true){
                    sessionInvalidate = false;
                    var sessionObj = JSON.parse(xhr.responseText);
                    var isInvalid = sessionObj.app42.response.success;
                    if(isInvalid){
                        localStorage.removeItem("_App42_SessionId")
                    }
                }
                request.success(xhr.responseText);
            }else if(xhr.status!=200){
                request.error(xhr.responseText)
            }
        }
    }
    xhr.send(body);
}

function multipartCORSRequest(method, url, time, sign, apiKey, queryParams, file, request, sessionId, adminKey, fbAccessToken, geoTag, headerParams){
    var fd = new FormData();              // Appending parameter named file with properties of file_field to form_data
    if(queryParams.userName != null){
        fd.append("userName", queryParams.userName)
    }
    if(queryParams.type != null){              
        fd.append("uploadFile", file)   
        fd.append("name", queryParams.name)                
        fd.append("type", queryParams.type)                
        fd.append("description", queryParams.description)
    }
        
    else if(queryParams.itemId != null) {
        fd.append("imageFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("itemId", queryParams.itemId) 
        fd.append("description", queryParams.description)                 
        fd.append("price", queryParams.price)
    }
    else if(queryParams.avatarName != null) {
        fd.append("createAvatar", file)   
        fd.append("avatarName", queryParams.avatarName) 
        fd.append("userName", queryParams.userName) 
        fd.append("description", queryParams.description)                 
    }
	
	else if(queryParams.accessToken != null) {
		if(queryParams.userId != null){
        fd.append("uploadFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("accessToken", queryParams.accessToken) 
		fd.append("userId", queryParams.userId) 
        fd.append("message", queryParams.message)
		}
		else {
		fd.append("uploadFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("accessToken", queryParams.accessToken) 
        fd.append("message", queryParams.message)
		}
    }
	
    else  {      
        fd.append("imageFile", file)   
        fd.append("name", queryParams.name) 
        fd.append("height", queryParams.height)                 
        fd.append("width", queryParams.width)
        fd.append("x", queryParams.x)
        fd.append("y", queryParams.y)
        fd.append("percentage", queryParams.percentage)
        fd.append("formatToConvert", queryParams.formatToConvert) 
    }
    __createMultipartCORSRequest(method, url, sign, fd, request,headerParams);
}

function multipartCORSRequestForPhoto(method, url, time, sign, apiKey, queryParams, file, request, sessionId, adminKey, fbAccessToken, geoTag, headerParams){
    var fd = new FormData();                  // Creating object of FormData class
    fd.append("imageFile", file)              // Appending parameter named file with properties of file_field to form_data
    fd.append("userName", queryParams.userName)
    fd.append("albumName", queryParams.albumName)                 // Adding extra parameters to form_data
    fd.append("name", queryParams.name)  
    fd.append("description", queryParams.description)
	
    __createMultipartCORSRequest(method, url,sign, fd, request,headerParams);
}

function __createMultipartCORSRequest(method, url, sign, fd, request,headerParams){
    var xhr = createXMLHTTPObject();
    xhr.open(method, url,true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("signature", sign);
    for(var key in headerParams) {
        var value = headerParams[key];
        xhr.setRequestHeader(key.toString(), value);
    }
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4)
        {
            if(xhr.status==200){
                request.success(xhr.responseText);
            }else if(xhr.status!=200){
                request.error(xhr.responseText)
            }
        }
    }
    xhr.send(fd);
}

var XMLHttpFactories = [
function () {
    return new XMLHttpRequest()
},
function () {
    return new ActiveXObject("Msxml2.XMLHTTP")
},
function () {
    return new ActiveXObject("Msxml3.XMLHTTP")
},
function () {
    return new ActiveXObject("Microsoft.XMLHTTP")
}
];

function createXMLHTTPObject() {
    var xmlhttp = false;
    for (var i=0;i<XMLHttpFactories.length;i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        }
        catch (e) {
            continue;
        }
        break;
    }
    return xmlhttp;
}

(function() {
    this.get = function(url, queryParams, request, extraParams, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII", "HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        var string = "";
        if(queryParams.userList){
            string = "&userList="+queryParams.userList;
        }
        else if(queryParams.jsonQuery){
            string = "&jsonQuery="+queryParams.jsonQuery;
        }else{
            string = "";
        }
        var nextString = "";
        var nextString1 ="";
        
        if(extraParams!=null){
            if(extraParams.orderByKey){
                nextString = "&orderByKey="+extraParams.orderByKey
            }else{
                nextString = "";
            }
            if(extraParams.orderByType){
                nextString1 = "&orderByType="+extraParams.orderByType
            }else{
                nextString1 ="";
            }
        }
        createCORSRequest("GET", url+"?version="+queryParams.version +string+nextString+nextString1, queryParams.timeStamp, encodedString, queryParams.apiKey, null, request, queryParams.sessionId, queryParams.adminKey, queryParams.fbAccessToken, geoTag, headerParams );
    };

    this.post = function(url, queryParams, body, request, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII", "HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        createCORSRequest("POST", url+"?version="+queryParams.version, queryParams.timeStamp, encodedString, queryParams.apiKey, body, request, queryParams.sessionId, queryParams.adminKey, queryParams.fbAccessToken, geoTag, headerParams);

    };
    this.put = function(url, queryParams, body, request, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII", "HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        createCORSRequest("PUT", url+"?version="+queryParams.version ,queryParams.timeStamp, encodedString, queryParams.apiKey, body, request, queryParams.sessionId, queryParams.adminKey, queryParams.fbAccessToken, geoTag, headerParams);
    };
    this.del = function(url, queryParams, request, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII", "HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        if(queryParams.geoPoints){
            var stringObj = "&geoPoints="+queryParams.geoPoints;
			url = url+"?version="+queryParams.version+stringObj;
        }
		else if (queryParams.deviceToken){
			stringObj = "?deviceToken="+queryParams.deviceToken+ "&userName="+queryParams.userName+"&";
			url = url+stringObj+"?version="+queryParams.version;
		}
		else{
            stringObj = "";
			url = url+"?version="+queryParams.version+stringObj
        }
        createCORSRequest("DELETE", url ,queryParams.timeStamp,encodedString,queryParams.apiKey ,null,request,queryParams.sessionId,queryParams.adminKey,queryParams.fbAccessToken, geoTag, headerParams);
    };
    
    this.multipart = function(url, queryParams, file, request, headerParams) {
        if(queryParams.apiKey == null || secretKey == null || secretKey =="" ||queryParams.apiKey == ""){
            App42Fault.appError();
            return ;
        }
        var shaObj = new jsSHA(sortAssoc(queryParams), "ASCII");
        var hmac = shaObj.getHMAC(secretKey, "ASCII", "HEX");
        var encodedString = Convert(hmac);
        queryParams.signature = encodedString;
        if(queryParams.albumName){
            multipartCORSRequestForPhoto("POST", url+"?version="+queryParams.version ,queryParams.timeStamp,encodedString,queryParams.apiKey,queryParams,file,request,queryParams.sessionId,queryParams.adminKey,queryParams.fbAccessToken,geoTag, headerParams );
     
        }else{
            multipartCORSRequest("POST", url+"?version="+queryParams.version ,queryParams.timeStamp,encodedString,queryParams.apiKey,queryParams,file,request,queryParams.sessionId,queryParams.adminKey,queryParams.fbAccessToken,geoTag, headerParams );
        }
        
    };

}).apply(App42Connection);

function pair() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function guid() {
    return pair() + pair() + '-' + pair() + '-' + pair() + '-' +
    pair() + '-' + pair() + pair() + pair();
}


/* A JavaScript implementation of the SHA family of hashes, as defined in FIPS
 * PUB 180-2 as well as the corresponding HMAC implementation as defined in
 * FIPS PUB 198a
 *
 * Version 1.3 Copyright Brian Turek 2008-2010
 * Distributed under the BSD License
 * See http://jssha.sourceforge.net/ for more information
 *
 * Several functions taken from Paul Johnson
 */
(function(){
    var charSize=8,b64pad="",hexCase=0,str2binb=function(a){
        var b=[],mask=(1<<charSize)-1,length=a.length*charSize,i;
        for(i=0;i<length;i+=charSize){
            b[i>>5]|=(a.charCodeAt(i/charSize)&mask)<<(32-charSize-(i%32))
            }
            return b
        },hex2binb=function(a){
        var b=[],length=a.length,i,num;
        for(i=0;i<length;i+=2){
            num=parseInt(a.substr(i,2),16);
            if(!isNaN(num)){
                b[i>>3]|=num<<(24-(4*(i%8)))
                }else{
                return"INVALID HEX STRING"
                }
            }
        return b
    },binb2hex=function(a){
    var b=(hexCase)?"0123456789ABCDEF":"0123456789abcdef",str="",length=a.length*4,i,srcByte;
    for(i=0;i<length;i+=1){
        srcByte=a[i>>2]>>((3-(i%4))*8);
        str+=b.charAt((srcByte>>4)&0xF)+b.charAt(srcByte&0xF)
        }
        return str
    },binb2b64=function(a){
    var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"+"0123456789+/",str="",length=a.length*4,i,j,triplet;
    for(i=0;i<length;i+=3){
        triplet=(((a[i>>2]>>8*(3-i%4))&0xFF)<<16)|(((a[i+1>>2]>>8*(3-(i+1)%4))&0xFF)<<8)|((a[i+2>>2]>>8*(3-(i+2)%4))&0xFF);
        for(j=0;j<4;j+=1){
            if(i*8+j*6<=a.length*32){
                str+=b.charAt((triplet>>6*(3-j))&0x3F)
                }else{
                str+=b64pad
                }
            }
        }
    return str
},rotl=function(x,n){
    return(x<<n)|(x>>>(32-n))
    },parity=function(x,y,z){
    return x^y^z
    },ch=function(x,y,z){
    return(x&y)^(~x&z)
    },maj=function(x,y,z){
    return(x&y)^(x&z)^(y&z)
    },safeAdd_2=function(x,y){
    var a=(x&0xFFFF)+(y&0xFFFF),msw=(x>>>16)+(y>>>16)+(a>>>16);
    return((msw&0xFFFF)<<16)|(a&0xFFFF)
    },safeAdd_5=function(a,b,c,d,e){
    var f=(a&0xFFFF)+(b&0xFFFF)+(c&0xFFFF)+(d&0xFFFF)+(e&0xFFFF),msw=(a>>>16)+(b>>>16)+(c>>>16)+(d>>>16)+(e>>>16)+(f>>>16);
    return((msw&0xFFFF)<<16)|(f&0xFFFF)
    },coreSHA1=function(f,g){
    var W=[],a,b,c,d,e,T,i,t,appendedMessageLength,H=[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0],K=[0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6];
    f[g>>5]|=0x80<<(24-(g%32));
    f[(((g+65)>>9)<<4)+15]=g;
    appendedMessageLength=f.length;
    for(i=0;i<appendedMessageLength;i+=16){
        a=H[0];
        b=H[1];
        c=H[2];
        d=H[3];
        e=H[4];
        for(t=0;t<80;t+=1){
            if(t<16){
                W[t]=f[t+i]
                }else{
                W[t]=rotl(W[t-3]^W[t-8]^W[t-14]^W[t-16],1)
                }
                if(t<20){
                T=safeAdd_5(rotl(a,5),ch(b,c,d),e,K[t],W[t])
                }else if(t<40){
                T=safeAdd_5(rotl(a,5),parity(b,c,d),e,K[t],W[t])
                }else if(t<60){
                T=safeAdd_5(rotl(a,5),maj(b,c,d),e,K[t],W[t])
                }else{
                T=safeAdd_5(rotl(a,5),parity(b,c,d),e,K[t],W[t])
                }
                e=d;
            d=c;
            c=rotl(b,30);
            b=a;
            a=T
            }
            H[0]=safeAdd_2(a,H[0]);
        H[1]=safeAdd_2(b,H[1]);
        H[2]=safeAdd_2(c,H[2]);
        H[3]=safeAdd_2(d,H[3]);
        H[4]=safeAdd_2(e,H[4])
        }
        return H
    },jsSHA=function(a,b){
    this.sha1=null;
    this.strBinLen=null;
    this.strToHash=null;
    if("HEX"===b){
        if(0!==(a.length%2)){
            return"TEXT MUST BE IN BYTE INCREMENTS"
            }
            this.strBinLen=a.length*4;
        this.strToHash=hex2binb(a)
        }else if(("ASCII"===b)||('undefined'===typeof(b))){
        this.strBinLen=a.length*charSize;
        this.strToHash=str2binb(a)
        }else{
        return"UNKNOWN TEXT INPUT TYPE"
        }
    };

jsSHA.prototype={
    getHash:function(a){
        var b=null,message=this.strToHash.slice();
        switch(a){
            case"HEX":
                b=binb2hex;
                break;
            case"B64":
                b=binb2b64;
                break;
            default:
                return"FORMAT NOT RECOGNIZED"
                }
                if(null===this.sha1){
            this.sha1=coreSHA1(message,this.strBinLen)
            }
            return b(this.sha1)
        },
    getHMAC:function(a,b,c){
        var d,keyToUse,i,retVal,keyBinLen,keyWithIPad=[],keyWithOPad=[];
        switch(c){
            case"HEX":
                d=binb2hex;
                break;
            case"B64":
                d=binb2b64;
                break;
            default:
                return"FORMAT NOT RECOGNIZED"
                }
                if("HEX"===b){
            if(0!==(a.length%2)){
                return"KEY MUST BE IN BYTE INCREMENTS"
                }
                keyToUse=hex2binb(a);
            keyBinLen=a.length*4
            }else if("ASCII"===b){
            keyToUse=str2binb(a);
            keyBinLen=a.length*charSize
            }else{
            return"UNKNOWN KEY INPUT TYPE"
            }
            if(64<(keyBinLen/8)){
            keyToUse=coreSHA1(keyToUse,keyBinLen);
            keyToUse[15]&=0xFFFFFF00
            }else if(64>(keyBinLen/8)){
            keyToUse[15]&=0xFFFFFF00
            }
            for(i=0;i<=15;i+=1){
            keyWithIPad[i]=keyToUse[i]^0x36363636;
            keyWithOPad[i]=keyToUse[i]^0x5C5C5C5C
            }
            retVal=coreSHA1(keyWithIPad.concat(this.strToHash),512+this.strBinLen);
        retVal=coreSHA1(keyWithOPad.concat(retVal),672);
        return(d(retVal))
        }
    };
window.jsSHA=jsSHA
}());

var Operator = {
    EQUALS :"$eq",
    NOT_EQUALS : "$ne",
    GREATER_THAN :"$gt",
    LESS_THAN :"$lt",
    GREATER_THAN_EQUALTO :   "$gte",
    LESS_THAN_EQUALTO :   "$lte",
    LIKE : "$lk",
    AND : "$and",
    OR :"$or"
};
function checkOperatorType(operatorType){
    if(myObject.EQUALS == operatorType){
        return "$eq"
    }else if(myObject.NOT_EQUALS == operatorType){
        return "$ne"
    }else if(myObject.GREATER_THAN == operatorType){
        return "$gt"
    }else if(myObject.LESS_THAN == operatorType){
        return "$lt"
    }else if(myObject.GREATER_THAN_EQUALTO == operatorType){
        return "$gte"
    }else if(myObject.LESS_THAN_EQUALTO == operatorType){
        return "$lte"
    }else if(myObject.LIKE == operatorType){
        return "$lk"
    }else if(myObject.AND == operatorType){
        return "$and"
    }else if(myObject.OR == operatorType){
        return "$or"
    }
    else{
        return null;
    }
    
}
var GeoOperator = {
    NEAR :"$near",
    WITHIN : "$within"
};
function checkGeoOperatorType(operatorType){
    if(GeoOperator.NEAR == operatorType){
        return "$near"
    }else if(GeoOperator.WITHIN == operatorType){
        return "$within"
    }
    else{
        return null;
    }
}

function getStr(jsonArray){
    var getSting = JSON.stringify(jsonArray);
    return getSting ;
}
function QueryBuilder() {
    this.build = function(elementKey, elementValue, elementOperator) {
        if(elementKey != null && elementValue != null && elementValue != null){
            elementKey = elementKey.trim();
            elementOperator = elementOperator.trim();
        }
        if(elementKey == "" || elementOperator == "" || elementKey == null|| elementValue == null|| elementOperator == null){
            App42Fault.throwExceptionIfNullOrBlank(elementKey, "key")
            App42Fault.throwExceptionIfNullOrBlank(elementValue, "value")
            App42Fault.throwExceptionIfNullOrBlank(elementOperator, "operator")
            return ;
        }
        var buildObj = [];
        var buildElement = {
            key: elementKey, 
            operator: elementOperator, 
            value:elementValue
        }
        buildObj.push(buildElement);
        return buildObj ;
    };
	
	
    this.buildGeoQuery = function(geoTag, elementOperator,maxDistance) {
	checkGeoOperatorType(elementOperator)
        var buildObj = [];
        var buildElement = {
            lat: geoTag.getLat(), 
            lng: geoTag.getLng(), 
			operator: elementOperator, 
            maxDistance: maxDistance
        }
		
        buildObj.push(buildElement);
		
        return buildObj ;
    };
	
	
    this.compoundOperator = function(query1, operator, query2) {
        var compoundObj = []; 
        var compoundString = {
            compoundOpt: operator 
        }
        for(var i=0; i<query1.length;i++){
            compoundObj.push(query1[i]) 
        }
        compoundObj.push(compoundString)
        for(var j=0; j<query2.length;j++){
            compoundObj.push(query2[j]) 
        }
        return compoundObj;
    };
	
}

/*
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

// http://nerds-central.blogspot.com/2007/01/fast-scalable-javascript-and-vbscript.html
/** CopyRight: Dr Alexander J Turner - all rights reserved.
  * Please feel free to use this any way you want as long as you
  * mention I wrote it!
  */
var Base64 = (function() {
    var maxLineLength = 76;
    var base64chars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

   var decode = function(encStr) {
        var base64charToInt = {};
        for (var i = 0; i < 64; i++) base64charToInt[base64chars.substr(i,1)] = i;
        encStr = encStr.replace(/\s+/g, "");
        var decStr = "";
        var decArray=new Array();
        var linelen = 0
        var el=encStr.length;
        var bits24;
        for (var i = 0; i < el; i += 4) {
            bits24  = ( base64charToInt[encStr.charAt(i)] & 0xFF  ) <<  18;
            bits24 |= ( base64charToInt[encStr.charAt(i+1)] & 0xFF  ) <<  12;
            bits24 |= ( base64charToInt[encStr.charAt(i+2)] & 0xFF  ) <<   6;
            bits24 |= ( base64charToInt[encStr.charAt(i+3)] & 0xFF  ) <<   0;
            decStr += String.fromCharCode((bits24 & 0xFF0000) >> 16);
            if (encStr.charAt(i + 2) != '=')  // check for padding character =
                decStr += String.fromCharCode((bits24 &   0xFF00) >>  8);
            if (encStr.charAt(i + 3) != '=')  // check for padding character =
                decStr += String.fromCharCode((bits24 &     0xFF) >>  0);
            if(decStr.length>1024)
            {
                decArray.push(decStr);
                decStr='';
            }
        }
        if(decStr.length>0)
        {
            decArray.push(decStr);
        }

        var ar2=new Array();
        for(;decArray.length>1;)
        {
            var l=decArray.length;
            for(var c=0;c<l;c+=2)
            {
                if(c+1==l)
                {
                    ar2.push(decArray[c]);
                }
                else
                {
                    ar2.push(''+decArray[c]+decArray[c+1]);
                }
            }
            decArray=ar2;
            ar2=new Array();
        }
        return decArray[0];
    };

    var encode = function(decStr)
    {
        var encArray=new Array();
        var bits, dual, i = 0, encOut = "";
        var linelen = 0;
        var encOut='';
        while(decStr.length >= i + 3){
            bits =    (decStr.charCodeAt(i++) & 0xff) <<16 |
                (decStr.charCodeAt(i++) & 0xff) <<8 |
                decStr.charCodeAt(i++) & 0xff;
            encOut +=
                base64chars.charAt((bits & 0x00fc0000) >>18) +
                base64chars.charAt((bits & 0x0003f000) >>12) +
                base64chars.charAt((bits & 0x00000fc0) >> 6) +
                base64chars.charAt((bits & 0x0000003f));
            linelen += 4;
            if (linelen>maxLineLength-3) {
                encOut += "\n";
                encArray.push(encOut);
                encOut='';
                linelen = 0;
            }
        }
        if(decStr.length -i > 0 && decStr.length -i < 3) {
            dual = Boolean(decStr.length -i -1);
            bits =
                ((decStr.charCodeAt(i++) & 0xff) <<16) |
                (dual ? (decStr.charCodeAt(i) & 0xff) <<8 : 0);
            encOut +=
                base64chars.charAt((bits & 0x00fc0000) >>18) +
                base64chars.charAt((bits & 0x0003f000) >>12) +
                      (dual ? base64chars.charAt((bits & 0x00000fc0) >>6) : '=') +
                      '=';
        }

        encArray.push(encOut);
        // this loop progressive concatonates the
        // array elements entil there is only one
        var ar2=new Array();
        for(;encArray.length>1;)
        {
            var l=encArray.length;
            for(var c=0;c<l;c+=2)
            {
                if(c+1==l)
                {
                    ar2.push(encArray[c]);
                }
                else
                {
                    ar2.push(''+encArray[c]+encArray[c+1]);
                }
            }
            encArray=ar2;
            ar2=new Array();
        }
        return encArray[0];
    };
    return {"encode": encode, "decode": decode};
})();



function App42User() {
    userProfile = {};
    App42Service.call(this);
    var __user=this;
    /**
	* Create user for the App
	*
   *@param userName - Name of the User.
   *@param pwd - Password for the User.
   *@param email - Email address of the user.
   *@param request - An object with success and error callbacks.
   *@return - User instance.
   *@throws App42Exception
   */
    this.createUser = function(userName,pwd,email,request) {
        var URL = App42.URL("user");
        if(userName != null && pwd != null && email != null ){
            userName = userName.trim();
            pwd =pwd.trim();
            email =email.trim();
        }
        if(userName == "" || pwd == "" || email == "" || userName == null || pwd == null|| email == null){
            App42Fault.throwExceptionIfNullOrBlank(pwd, "pwd")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(email, "email")
            return ;
        }
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        var body = '{"app42":{"user":{"userName":"'+userName+'","password":"'+pwd+'","email":"'+email+'"}}}';
        params.body = body;
        sessionRequest = true;
        App42Connection.post(URL, params, body, request, hearedParams);
    };
	
    /**
	* Create user for the App
	*
   *@param userName - Name of the User.
   *@param pwd - Password for the User.
   *@param email - Email address of the user.
   *@param request - An object with success and error callbacks.
   *@return - User instance.
   *@throws App42Exception
   */
    this.createOrUpdateProfile = function(userName,request) {
        var URL = App42.URL("user/profile");
        if(userName != null ){
            userName = userName.trim();
        }
        if(userName == "" || userName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        var getProfile = __createProfileObj(userProfile);
        var body = '{"app42":{"user":{"userName":"'+userName+'","profileData":'+getProfile+'}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, hearedParams);
    };
	
    /**
	* Gets user details based on userName
	
   *@param userName - Name of the User.
   *@param request - An object with success and error callbacks.
   *@return User instance.
   *@throws App42Exception
   */
    this.getUser = function(userName,request) {
        
        if(userName != null){
            userName = userName.trim();
        }
        if (userName == "" || userName == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var URL = App42.URL("user/"+userName);
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params, request,null, hearedParams);
    };
    /**
	* Gets user details based on Email Id.
    *@param emailId -  EmailId of the user to be retrieved
   *@param request - An object with success and error callbacks.
   *@return User instance.
   *@throws App42Exception
   */
      
    this.getUserByEmailId = function(emailId,request) {
        if(emailId != null){
            emailId = emailId.trim();
        }
        if (emailId == "" || emailId == null ){
            App42Fault.throwExceptionIfNullOrBlank(emailId, "emailId")
            return ;
        }
        var URL = App42.URL("user/email/"+emailId);
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
        params.emailId = emailId;
        App42Connection.get(URL, params,request, null, hearedParams);
    };
	
    /**
	* Gets All users details.
	*
    *@param request - An object with success and error callbacks.
    *@return User instance.
    *@throws App42Exception
    */
    this.getAllUsers = function(request) {
        var URL = App42.URL("user");
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request,null,headerParams);
    };
	
    /**
	* Change the password for user based on the userName. If the old password is valid.
	*
    *@param userName - UserName which should be unique for the App 
	*@param oldPwd - Old Password for the user for authentication 
	*@param newPwd - New Password for the user to change
	*@param  request - An object with success and error callbacks.
    *@return User instance.
    *@throws App42Exception
	*/
    this.changeUserPassword  = function(userName,oldPwd,newPwd,request) {
        if(userName != null && oldPwd != null && newPwd != null){
            userName = userName.trim();
            oldPwd = oldPwd.trim();
            newPwd = newPwd.trim();
        }
        if(userName == "" || oldPwd == "" || newPwd == "" || userName == null || oldPwd == null|| newPwd == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(oldPwd, "oldPwd")
            App42Fault.throwExceptionIfNullOrBlank(newPwd, "newPwd")
            return ;
        }
        var URL = App42.URL("user/changeUserPassword");
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"user":{"userName":"'+userName+'","newPassword":"'+newPwd+'","oldPassword":"'+oldPwd+'"}}}'
        params.body = body;
        App42Connection.put(URL, params, body,request, headerParams);
    };
	
    /**
	* Authenticate user based on userName and password.
    *@param uName - UserName which should be unique for the App 
	*@param pwd - Password for the user to change
	*@param  request - An object with success and error callbacks.
    *@return User instance.
    *@throws App42Exception
     *
	*/
    this.authenticate = function(uName, pwd,request) {
        if(uName != null && pwd != null){
            uName = uName.trim();
            pwd = pwd.trim();
        }
        if(uName == "" || pwd == "" || uName == null || pwd == null){
            App42Fault.throwExceptionIfNullOrBlank(uName, "uName")
            App42Fault.throwExceptionIfNullOrBlank(pwd, "pwd")
            return ;
        }
        var URL = App42.URL("user/authenticate");
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"user":{"userName":"' +uName+ '","password":"' + pwd + '"}}}';
        params.body = body;
        sessionRequest = true;
        App42Connection.post(URL, params, body, request, headerParams);
    };
	
    /**
	* Delete a particular user based on userName.
	*
    *@param userName - UserName which should be unique for the App 
	*@param  request - An object with success and error callbacks.
    *@return User instance.
    *@throws App42Exception
	*/
    
    this.deleteUser = function(userName,request) {
        if(userName != null){
            userName = userName.trim();
        }
        if(userName == null || userName== ""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var URL = App42.URL("user/"+userName);
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.del(URL, params, request, headerParams);
    };
	
    this.resetUserPassword = function(userName,request) {
        var URL = App42.URL("user/"+ "resetAppUserPassword");
        if(userName != null){
            userName = userName.trim();
        }
        if(userName == null || userName== ""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return;
        }
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"user":{"userName":"' +userName+'"}}}';
        params.body = body;
        App42Connection.put(URL, params, body, request, headerParams);
    };
	
	
	this.logout = function(sessionId,request) {
        var URL = App42.URL("session");
        var params =  __user.populateSignParams(),
        metaHeader = __user.populateMetaHeaderParams(),
        hearedParams = __merge(params,metaHeader);
		var body = '{"app42":{"session":{"id":"' + sessionId + '"}}}';
		params.body = body;
		sessionInvalidate = true;
        App42Connection.put(URL, params, body, request, hearedParams);
    };
	
    // create profile object
    this.setFirstName = function(firstName){
        userProfile.firstName  = firstName
    }
    this.setLastName = function(lastName){
        userProfile.lastName = lastName
    }
    this.setSex = function(sex){
        userProfile.sex = sex
    }
    this.setState = function(state){
        userProfile.state = state
    }
    this.setDateOfBirth = function(dateOfBirth){
        userProfile.dateOfBirth = getODataUTCDateFilter(dateOfBirth);
    }
    this.setOfficeLandLine = function(officeLandLine){
        userProfile.officeLandLine = officeLandLine
    }
    this.setCountry = function(country){
        userProfile.country = country
    }
    this.setCity = function(city){
        userProfile.city = city
    }
    this.setMobile = function(mobile){
        userProfile.mobile = mobile
		
    }
    this.setHomeLandLine = function(homeLandLine){
        userProfile.homeLandLine = homeLandLine
		
    }
    var userProfile = {};
    function __createProfileObj(profile){
        var profileData = {};
        profileData.dateOfBirth =profile.dateOfBirth 
        profileData.lastName = profile.lastName
        profileData.sex = profile.sex
        profileData.officeLandLine = profile.officeLandLine
        profileData.homeLandLine = profile.homeLandLine
        profileData.state = profile.state
        profileData.firstName = profile.firstName
        profileData.country = profile.country
        profileData.city = profile.city
        profileData.mobile = profile.mobile
		
        return JSON.stringify(profileData);
    }
	
	
}



var myObject = {
    AUDIO :"AUDIO",
    VIDEO : "VIDEO",
    IMAGE :"IMAGE",
    BINARY :"BINARY",
    TXT :   "TXT",
    XML :   "XML",
    CSV : "CSV",
    JSON : "JSON",
    OTHER :"OTHER"
};

function checkFileType(FileType){
    if(myObject.AUDIO == FileType || myObject.VIDEO == FileType || myObject.IMAGE == FileType || myObject.BINARY == FileType || myObject.TXT == FileType || myObject.XML == FileType || myObject.CSV == FileType || myObject.JSON == FileType || myObject.OTHER == FileType){
        return FileType;
    }
    else{
        throw new App42Exception("FileType", FileType);
    }
}

function App42Upload() {
    App42Service.call(this);
    var __upload=this;   
    
    this.uploadFile = function(name,filePath, fileType, description, request) {
        var URL = App42.URL("upload");
		checkFileType(fileType);
        if(name != null && fileType != null && description != null){
            name = name.trim();
            fileType = fileType.trim();
            description = description.trim();
        }
        if(name == ""  || name == null || description == null|| description == "" || filePath == null|| filePath == "" || fileType == "" || fileType == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.type = fileType;
        params.description = description;
        App42Connection.multipart(URL, params, filePath, request, headerParams);
    };

    this.uploadFileForUser = function(name,userName,filePath, fileType, description, request) {
        var URL = App42.URL("upload" + "/" + userName);
		checkFileType(fileType);
        if(name != null && userName != null && fileType != null && description != null){
            name = name.trim();
            userName = userName.trim();
            fileType = fileType.trim();
            description = description.trim();
        }
        if(name == ""  || name == null || userName == "" || userName == null || description == null|| description == "" || filePath == null|| filePath == "" || fileType == "" || fileType == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.userName= userName;
        params.type = fileType;
        params.description = description;
        App42Connection.multipart(URL,params,filePath,request, headerParams);
        
    };

    this.getAllFiles = function(request) {
        var URL = App42.URL("upload");
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params, request, null, headerParams);
    };
	
    this.getAllFilesByPaging = function(max,offset,request) {
        var URL = App42.URL("upload" + "/" + "paging" + "/" + max + "/" + offset);
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL,params,request, null, headerParams);
    };

    this.getFileByUser = function(fileName,userName,request) {
        var URL = App42.URL("upload" + "/" + userName + "/" + fileName);
        if(fileName != null && userName != null){
            fileName = fileName.trim();
            userName = userName.trim();
        }
		
        if(fileName == ""  || fileName == null || userName == null|| userName == ""){
            App42Fault.throwExceptionIfNullOrBlank(fileName, "fileName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = fileName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
	

    this.getFileByName = function(fileName,request) {
        var URL = App42.URL("upload" + "/" + fileName);
        if(fileName != null){
            fileName = fileName.trim();
        }
        if(fileName == ""  || fileName == null){
            App42Fault.throwExceptionIfNullOrBlank(fileName, "fileName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = fileName;
        App42Connection.get(URL, params,request, null, headerParams);
    };

    this.getFilesByType = function(fileType,request) {
        var URL = App42.URL("upload" + "/" + "type"+ "/"+ checkFileType(fileType));
		checkFileType(fileType);
        if(fileType != null){
            fileType = fileType.trim();
        }
        if(fileType == ""  || fileType == null){
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.type = checkFileType(fileType);
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getFilesCountByType = function(fileType,request) {
		checkFileType(fileType);
        var URL = App42.URL("upload" + "/" + "type"+ "/"+ checkFileType(fileType)+ "/count");
        if(fileType != null){
            fileType = fileType.trim();
        }
        if(fileType == ""  || fileType == null){
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.type = checkFileType(fileType);
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getFilesByTypeByPaging = function(fileType,max,offset,request) {
        var URL = App42.URL("upload" + "/" + "type"+ "/"+ checkFileType(fileType)+ "/" + max + "/" + offset);
        if(fileType != null && max != null && offset != null){
            fileType = fileType.trim();
        }
        if(fileType == ""  || fileType == null || max == ""  || max == null || offset == ""  || offset == null){
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            App42Fault.throwExceptionIfNullOrBlank(max, "max")
            App42Fault.throwExceptionIfNullOrBlank(offset, "offset")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.type = checkFileType(fileType);
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params, request, null, headerParams);
    };
	
    /**
     *Gets the count of file based on user name.
     *@param userName- The name of the user for which count of the file has to be retrieved
     *@param request - An object with success and error callbacks.
     *@return App42Response object
     *@throws App42Exception
     */
    this.getAllFilesCountByUser = function(userName,request) {
        var URL = App42.URL("upload" + "/" + "user" + "/" + userName+ "/" + "count");
        if(userName != null){
            userName = userName.trim();
        }
        if(userName == null|| userName == ""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
     *Removes all the files for the App
     *@param request - An object with success and error callbacks.
     *@return App42Response if deleted successfully
     *@throws App42Exception
     */

    this.removeAllFiles = function(request) {
        var URL = App42.URL("upload");
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.del(URL, params,request, headerParams);
    };
	
    /**
     *Removes the file based on file name.
     *@param fileName - The name of the file which has to be removed
     *@param request - An object with success and error callbacks.
     *@return App42Response if deleted successfully
     *@throws App42Exception
     */

	 
    this.removeFileByName = function(name,request) {
        var URL = App42.URL("upload" + "/" + name);
        if(name != null){
            name = name.trim();
        }
        if(name == null|| name == ""){
            App42Fault.throwExceptionIfNullOrBlank(name, "file Name")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    /**
     * Removes the files based on user name.
     * @param userName - The name of the user for which files has to be removed
     * @param request - An object with success and error callbacks.
     * @return App42Response if deleted successfully
     * @throws App42Exception
     */
	 
    this.removeAllFilesByUser = function(userName,request) {
        var URL = App42.URL("upload" + "/" + "user" + "/" + userName);
        if(userName != null){
            userName = userName.trim();
        }
        if(userName == null|| userName == ""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    /**
     * Removes the file based on file name and user name.
     * @param fileName - The name of the file which has to be removed
     * @param userName - The name of the user for which file has to be removed
     * @param request - An object with success and error callbacks.
     * @return App42Response if deleted successfully
     * @throws App42Exception
     */
    this.removeFileByUser = function(fileName , userName,request) {
        var URL = App42.URL("upload" + "/" + userName+ "/" + fileName);
        if(userName != null && fileName != null){
            fileName = fileName.trim();
            userName = userName.trim();
        }
        if(fileName == null|| fileName == "" || userName == null|| userName == ""){
            App42Fault.throwExceptionIfNullOrBlank(fileName, "fileName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = fileName;
        params.userName = userName;
        App42Connection.del(URL, params,request, headerParams);
    };

    this.getAllFilesByUser = function(userName,request) {
        var URL = App42.URL("upload" + "/" + "user" + "/" + userName);
        if(userName != null){
            userName = userName.trim(); 
           
        }
        if(userName == null|| userName == ""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
		
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
   
    };
	
    /**
     * Gets count of all the files for the App
     * @param request - An object with success and error callbacks.
     * @return App42Response object
     * @throws App42Exception
     */
	 
    this.getAllFilesCount = function(request) {
        var URL = App42.URL("upload" + "/" + "count");
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL,params,request, null, headerParams);
    };
	
    this.getAllFilesByUserWithPaging = function(userName,max,offset,request) {
        var URL = App42.URL("upload" + "/" + "user" + "/" + userName + "/" +max + "/" + offset);
        if(userName != null){
            userName = userName.trim(); 
        }
        if(userName == null|| userName == ""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params,request, null, headerParams);
   
    };
	
    this.grantAccess = function(fileName, userName,aclList,request) {
        var URL = App42.URL("upload/grantAccess/"+userName+"/"+fileName);
        if(userName != null && fileName != null){
            userName = userName.trim();
            fileName = fileName.trim();
        }
        if(userName == "" || fileName == "" || userName == null || fileName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(fileName, "fileName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.fileName = fileName;
        params.userName = userName;
        var uploadAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray,
                };
                uploadAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission,
            };
            uploadAclList.push(array)
        }
        var encodeJSON = JSON.stringify(uploadAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"upload":{"acls":' + stringfy + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
	
	
    this.revokeAccess = function(fileName, userName,aclList,request) {
        var URL = App42.URL("upload/revokeAccess/"+userName+"/"+fileName);
        if(userName != null && fileName != null){
            userName = userName.trim();
            fileName = fileName.trim();
        }
        if(userName == "" || fileName == "" || userName == null || fileName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(fileName, "fileName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.fileName = fileName;
        params.userName = userName;
        var uploadAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray
                };
                uploadAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission
            };
            uploadAclList.push(array)
        }
        var encodeJSON = JSON.stringify(uploadAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"upload":{"acls":' + stringfy + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
    this.uploadFileForGroup = function(name,userName,ownerName,groupName, filePath, fileType, description, request) {
		checkFileType(fileType);
        var URL = App42.URL("upload"+ "/group/" + userName);
        if(name != null && userName != null && ownerName != null && groupName != null && fileType != null && description != null){
            name = name.trim();
            userName = userName.trim();
            ownerName = ownerName.trim();
            groupName = groupName.trim();
            fileType = fileType.trim();
            description = description.trim();
        }
        if(userName == ""  || userName == null || ownerName == ""  || ownerName == null || groupName == null|| groupName == "" || name == ""  || name == null || description == null|| description == "" || filePath == null|| filePath == "" || fileType == "" || fileType == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(ownerName, "ownerName")
            App42Fault.throwExceptionIfNullOrBlank(groupName, "groupName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.userName = userName;
        params.ownerName = ownerName;
        params.groupName = groupName;
        checkFileType(fileType);
        params.type = fileType;
        params.description = description;
        App42Connection.multipart(URL,params,filePath,request, headerParams);
        
    };
	
    this.uploadFileForFriend = function(name,userName,buddyName, filePath, fileType, description, request) {
        var URL = App42.URL("upload"+ "/friend/" + userName);
		checkFileType(fileType);
        if(name != null && userName != null && buddyName != null && fileType != null && description != null){
            name = name.trim();
            userName = userName.trim();
            buddyName = buddyName.trim();
            fileType = fileType.trim();
            description = description.trim();
        }
        if(userName == ""  || userName == null || buddyName == ""  || buddyName == null || name == ""  || name == null || description == null|| description == "" || filePath == null|| filePath == "" || fileType == "" || fileType == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.userName = userName;
        params.buddyName = buddyName;
        checkFileType(fileType);
        params.type = fileType;
        params.description = description;
        App42Connection.multipart(URL,params,filePath,request, headerParams);
        
    };
	
    this.uploadFileForFriends = function(name,userName, filePath, fileType, description, request) {
        var URL = App42.URL("upload"+ "/friend/" + userName);
		checkFileType(fileType);
        if(name != null && userName != null && fileType != null && description != null){
            name = name.trim();
            userName = userName.trim();
            fileType = fileType.trim();
            description = description.trim();
        }
        if(userName == ""  || userName == null || name == ""  || name == null || description == null|| description == "" || filePath == null|| filePath == "" || fileType == "" || fileType == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(fileType, "fileType")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __upload.populateSignParams(),
        metaHeader = __upload.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.userName = userName;
        checkFileType(fileType);
        params.type = fileType;
        params.description = description;
        App42Connection.multipart(URL, params, filePath, request, headerParams);
        
    };
}

var OrderByType = {
    ASCENDING :"ASCENDING",
    DESCENDING : "DESCENDING"
};
function checkOrderByType(orderType){
    if(OrderByType.ASCENDING == orderType){
        return "ASCENDING"
    }else if(OrderByType.DESCENDING == orderType){
        return "DESCENDING"
    }
    else{
        return App42Exception;
    }
}


function App42Storage() {
    App42Service.call(this);
    var __storage=this;
    
    /**
     * This function allows you to save a JSON document in given database and collection .
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName - Name of collection in which JSON document is to be saved.
     * @param json - Target JSON document to be saved.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.insertJSONDocument = function(dbName, collectionName, json,request) {
        var URL = App42.URL("storage/insert/dbName/"+dbName+"/"+"collectionName"+"/"+collectionName);
        if(dbName != null && collectionName != null && json != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || json == "" || dbName == null|| collectionName == null|| json == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(json, "json")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
		if(json instanceof Object){
			json = JSON.stringify(json)
		}
        var body = '{"app42":{"storage":{"jsonDoc":'+ json +'}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
        
    };
    /**
     * This function finds all documents stored in given database and collection
     * starting from a specific index location till the maximum number of records
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.findAllDocuments = function(dbName, collectionName, request) {
        if(dbName != null && collectionName != null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            
        }
        if(dbName == "" || collectionName == "" || dbName == null|| collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
       
        var URL = App42.URL("storage/findAll/dbName/"+dbName+"/"+"collectionName"+"/"+collectionName);
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        App42Connection.get(URL, params, request, null, headerParams);
    };
    /**
     * Find all collections stored in given database.
     * 
     * @param dbName
     *            - Unique handler for storage name
     * 
     * @return Storage object
     * 
     * @throws App42Exception
     * 
     */
    this.findAllCollections = function(dbName,request) {
        var URL = App42.URL("storage/findCollections/dbName/"+dbName);
        if(dbName != null){
            dbName = dbName.trim(); 
        }
        if(dbName == "" || dbName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.findAllDocumentsCount = function(dbName,collectionName,request) {
        var URL = App42.URL("storage"+ "/findAll/count/dbName/" + dbName + "/collectionName/"+ collectionName);
        if(dbName != null && collectionName!= null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();			
        }
        if(dbName == "" || dbName == null || collectionName == "" || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        App42Connection.get(URL, params,request,null, headerParams);
		
    };
	
    this.findAllDocumentsByPaging = function(dbName, collectionName, max, offset,request) {
        if(dbName != null && collectionName != null && max != null && offset != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            
        }
        if(dbName == "" || collectionName == "" || dbName == null|| collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var URL_r = App42.URL("storage/findAll/dbName"+"/"+dbName+"/"+"collectionName"+"/"+collectionName+"/"+max+"/"+offset);
        var params_r =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params_r, metaHeader);
        params_r.dbName = dbName;
        params_r.collectionName = collectionName;
        params_r.max = max;
        params_r.offset = offset;
        App42Connection.get(URL_r, params_r, request, null, headerParams);
    };
       
 
    /**
     * This function returns the desired document for a given unique object id.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param docId - Unique Object Id handler.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.findDocumentById = function(dbName, collectionName, docId,request) {
        var URL = App42.URL("storage/findDocById/dbName"+"/"+dbName+"/collectionName/"+collectionName+"/docId/"+docId);
        if(dbName != null && collectionName != null && docId != null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == ""  || dbName == null|| collectionName == null|| docId == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	

	
    /**
	 * Find target document using Custom Query.
	 * @param dbName - Unique handler for storage name
	 * @param collectionName - Name of collection under which JSON doc needs to be searched
	 * @param query - Query Object containing custom query for searching docs
         * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.findDocumentsByQuery = function(dbName, collectionName, query, request) {
        var URL = App42.URL("storage/findDocsByQuery/dbName/"+dbName+"/collectionName/"+collectionName);
        if(dbName != null && collectionName != null && query != null){
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        params.dbName = dbName;
        params.collectionName = collectionName;
	    App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * Find target document using Custom Query with paging.
     * @param dbName - Unique handler for storage name
     * @param collectionName - Name of collection under which JSON doc needs to be searched
     * @param query - Query Object containing custom query for searching docs
     * @param max - max result parameter
     * @param offset - offset result parameter
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     */
    this.findDocumentsByQueryWithPaging = function(dbName, collectionName, query, max, offset, request) {
        var URL = App42.URL("storage/findDocsByQuery/dbName/"+dbName+"/collectionName/"+collectionName+ "/" + max + "/" + offset);
        if(dbName != null && collectionName != null && query != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params, request, null, headerParams);
    };
    /**
     * Find target document using Custom Query with paging and orderby.
     * @param dbName - Unique handler for storage name
     * @param collectionName - Name of collection under which JSON doc needs to be searched
     * @param query - Query Object containing custom query for searching docs
     * @param max - max result parameter
     * @param offset - offset result parameter
     * @param orderByKey  - Name of Key on which order by has to be applied
     * @param type - ASCENDING/DESCENDING mode
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     */
    this.findDocsWithQueryPagingOrderBy = function(dbName, collectionName, query, max, offset, orderByKey, type, request) {
        var URL = App42.URL("storage/findDocsByQuery/dbName/"+dbName+"/collectionName/"+collectionName+ "/" + max + "/" + offset);
        if(dbName != null && collectionName != null && query != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var queryParams = {};
        params.apiKey = apiKey;
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        if (orderByKey != null){
            queryParams.orderByKey= orderByKey;
        }
        if (type != null){
            queryParams.orderByType= type;
        }
        if(fbAccessToken != null) {
            params.fbAccessToken = fbAccessToken;
        }
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.max = max;
        params.offset = offset;
        
        App42Connection.get(URL, params,request,queryParams, headerParams);
    };
    /**
     * This function locates the desired document using given key value as search parameter. This key value pair will be searched in the
     * JSON doc stored on the cloud and the respective doc will be returned as a result of this function.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param key - Key to be searched in a JSON doc
     * @param value - Value to be searched
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.findDocumentByKeyValue = function(dbName, collectionName, key, value, request) {
        var URL = App42.URL("storage/findDocByKV/dbName/"+dbName+"/collectionName/"+collectionName+"/"+key+"/"+value);
        if(dbName != null && collectionName != null && key != null && value != null ){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            key = key.trim();
            value = value.trim();
        }
        if(dbName == "" || collectionName == "" || key == ""  || value == ""  || dbName == null|| collectionName == null|| key == null || value == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(key, "key")
            App42Fault.throwExceptionIfNullOrBlank(value, "value")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.key = key;
        params.value = value;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * This function updates a JSON document using key value as search parameter. This key value pair will be
     * searched in the JSON doc stored in the cloud and matching doc will be updated with new specified value.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param key - Key to be searched in the JSON doc.
     * @param value - Value to be searched in the JSON doc.
     * @param newJsonDoc - New JSON document to be added.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.updateDocumentByKeyValue = function(dbName, collectionName, key, value, newJsonDoc, request) {
        var URL = App42.URL("storage/update/dbName/"+dbName+"/collectionName/"+collectionName+"/"+key+"/"+value);
        if(dbName != null && collectionName != null && key != null && value != null && newJsonDoc != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            key = key.trim();
            value = value.trim();
        }
        if(dbName == "" || collectionName == "" || key == ""  || value == "" || newJsonDoc == ""  || dbName == null|| collectionName == null|| key == null || value == null || newJsonDoc == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(key, "key")
            App42Fault.throwExceptionIfNullOrBlank(value, "value")
            App42Fault.throwExceptionIfNullOrBlank(newJsonDoc, "newJsonDoc")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.key = key;
        params.value = value
		if(newJsonDoc instanceof Object){
			newJsonDoc = JSON.stringify(newJsonDoc)
		}
        var body = '{"app42":{"storage":{"jsonDoc":' + newJsonDoc + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
    /**
     * This function allows updating a JSON document with specified document id.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param docId - Id of the document to be updated.
     * @param newJsonDoc - New JSON document to be added.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.updateDocumentByDocId = function(dbName, collectionName, docId, newJsonDoc,request) {
        var URL = App42.URL("storage/updateByDocId/dbName/"+dbName+"/collectionName/"+collectionName+"/docId/"+docId);
        if(dbName != null && collectionName != null && docId != null && newJsonDoc != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == "" || newJsonDoc == ""  || dbName == null|| collectionName == null|| docId == null || newJsonDoc == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            App42Fault.throwExceptionIfNullOrBlank(newJsonDoc, "newJsonDoc")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
		if(newJsonDoc instanceof Object){
			newJsonDoc = JSON.stringify(newJsonDoc)
		}
        var body = '{"app42":{"storage":{"jsonDoc":' + newJsonDoc + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
        
    };
    /**
     * This function deletes a JSON document with specified Object Id in a given database and collection.
     * The Object Id will be searched in the JSON doc stored on the cloud and the respective doc will be deleted.
     *
     * @param dbName - Unique handler for storage name.
     * @param collectionName  - Name of collection in which JSON doc is to be searched.
     * @param docId - Unique Object Id handler.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.deleteDocumentById = function(dbName, collectionName, docId, request) {
        var URL = App42.URL("storage/deleteDocById/dbName/"+dbName+"/collectionName/"+collectionName+"/docId/"+docId);
        if(dbName != null && collectionName != null && docId != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == null|| docId == "" || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    this.grantAccessOnDoc = function(dbName, collectionName, docId,aclList,request) {
        var URL = App42.URL("storage/grantAccessOnDoc/"+dbName+"/"+collectionName+"/"+docId);
        if(dbName != null && collectionName != null && docId != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == null|| docId == "" || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
        var storageAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray
                };
                storageAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission
            };
            storageAclList.push(array)
        }
        var encodeJSON = JSON.stringify(storageAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"storage":{"acls":' + stringfy + '}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
    this.revokeAccessOnDoc = function(dbName, collectionName, docId,aclList,request) {
        var URL = App42.URL("storage/revokeAccessOnDoc/"+dbName+"/"+collectionName+"/"+docId);
        if(dbName != null && collectionName != null && docId != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            docId = docId.trim();
        }
        if(dbName == "" || collectionName == "" || docId == null|| docId == "" || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(docId, "docId")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.docId = docId;
		
        var storageAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray
                };
                storageAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission
            };
            storageAclList.push(array)
        }
        var encodeJSON = JSON.stringify(storageAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"storage":{"acls":' + stringfy + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
	
    this.deleteDocumentsByKeyValue = function(dbName, collectionName, key , value , request) {
        var URL = App42.URL("storage/deletebykey/dbName/"+dbName+"/collectionName/"+collectionName+"/" + key);
        var getKey = '{"key":"' + value + '"}'
        if(dbName != null && collectionName != null  && key != null && value != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
            key = key.trim();
            value = value.trim();
        }
        if(dbName == "" || collectionName == ""  || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.value = getKey;
        params.dbName = dbName;
        params.collectionName = collectionName;
        params.key = key;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    this.deleteAllDocuments = function(dbName, collectionName , request) {
        var URL = App42.URL("storage/deleteAll/dbName/" + dbName + "/collectionName/"+ collectionName);
        if(dbName != null && collectionName != null){
            dbName = dbName.trim();
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == ""  || dbName == null || collectionName == null){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
		params.dbName = dbName;
		params.collectionName = collectionName;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    this.findDocumentsByLocation = function(dbName, collectionName, query, request) {
        var URL = App42.URL("storage/findDocsBylocation/dbName/" + dbName
					+ "/collectionName/" + collectionName);
        if(dbName != null && collectionName != null && query != null){
            collectionName = collectionName.trim();
        }
        if(dbName == "" || collectionName == "" || query == "" || dbName == null|| collectionName == null|| query == null ){
            App42Fault.throwExceptionIfNullOrBlank(dbName, "dbName")
            App42Fault.throwExceptionIfNullOrBlank(collectionName, "collectionName")
            App42Fault.throwExceptionIfNullOrBlank(query, "query")
            return ;
        }
        var params =  __storage.populateSignParams(),
        metaHeader =  __storage.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.jsonQuery = getStr(query);
        params.dbName = dbName;
        params.collectionName = collectionName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
}


function App42Social() {
    App42Service.call(this);
    var __social=this;
    
    /**
   * Links the User Facebook access credentials to the App User account.
   *@param userName - Name of the User.
   *@param accessToken - Facebook Access Token that has been received after authorization
   *@param request - An object with success and error callbacks.
   *@throws App42Exception
   */
    this.linkUserFacebookAccount = function(userName,accessToken, request) {
        if(userName != null && accessToken != null){
            userName = userName.trim();
            accessToken = accessToken.trim();
        }
        if(userName == "" || accessToken == "" || userName == null || accessToken == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            
            return ;
        }
        var URL = App42.URL("social/facebook/linkuser/accesscredentials");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","accessToken":"' + accessToken + '"}}}';
        params.body = body;
        if(localStorage != undefined){
            localStorage.removeItem("_App42_SessionId");
            localStorage.setItem("_App42_FbAccessToken",accessToken);
            fbAccessToken = accessToken;
        }
		
        else if(localStorage = undefined){
            localStorage.setItem("_App42_FbAccessToken",accessToken);
            fbAccessToken = accessToken;
        }
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    /**
	* Links the User Facebook access credentials to the App User account.
	
   *@param userName - Name of the User.
   *@param accessToken - Facebook Access Token that has been received after authorization
   *@param appId  Facebook App Id 
   *@param appSecret Facebook App Secret
   *@param request - An object with success and error callbacks.
   *@return  The Social object.
   *@throws App42Exception
   */
    this.linkUserFacebookAccountWithCredentials = function(userName,accessToken,appId,appSecret, request) {
        if(userName != null && accessToken != null && appId != null && appSecret != null ){
            userName = userName.trim();
            accessToken = accessToken.trim();
            appId = appId.trim();
            appSecret = appSecret.trim();
        }
        if(userName == "" || accessToken == "" || appId == "" || appSecret == ""  || userName == null || accessToken == null || appId == null || appSecret == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName") 
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(appId, "appId")
            App42Fault.throwExceptionIfNullOrBlank(appSecret, "appSecret")
            return ;
        }
        var URL = App42.URL("social/facebook/linkuser");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","accessToken":"' + accessToken + '","appId":"' + appId + '","appSecret":"' + appSecret + '"}}}';
        params.body = body;
        if(localStorage != undefined){
            localStorage.removeItem("_App42_SessionId");
            localStorage.setItem("_App42_FbAccessToken",accessToken);
            fbAccessToken = accessToken;
        }
		
        else if(localStorage = undefined){
			
            localStorage.setItem("_App42_FbAccessToken",accessToken);
            fbAccessToken = accessToken;
            console.log("here")
        }
        App42Connection.post(URL, params,body,request, headerParams);
    };

    /**
	* Updates the Facebook status of the specified user.
   *@param userName -  Name of the user for whom the status needs to be updated 
   *@param status - Status that has to be updated
   *@param request - An object with success and error callbacks.
   *@return  The Social object.
   *@throws App42Exception
   */
    this.updateFacebookStatus = function(userName,status, request) {
        if(userName != null && status != null){
            userName = userName.trim();
            status = status.trim();
        }
        if(userName == "" || status == "" || userName == null || status == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(status, "status")
            
            return ;
        }
        var URL = App42.URL("social/facebook/updatestatus");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","status":"' + status + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };

    /**
	 * Links the User Twitter access credentials to the App User account.
	 
   *@param userName - Name of the user whose Twitter account to be linked 
   *@param accessToken - Twitter Access Token that has been received after authorization
   *@param accessTokenSecret  Facebook App Id 
   *@param request - An object with success and error callbacks.
   *@return  The Social object.
   *@throws App42Exception
   */
    this.linkUserTwitterAccount = function(userName,accessToken,accessTokenSecret, request) {
        if(userName != null && accessToken != null && accessTokenSecret != null ){
            userName = userName.trim();
            accessToken = accessToken.trim();
            accessTokenSecret = accessTokenSecret.trim();
        }
        if(userName == "" || accessToken == "" || accessTokenSecret == "" || userName == null || accessToken == null || accessTokenSecret == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(accessTokenSecret, "accessTokenSecret")
            return ;
        }
        var URL = App42.URL("social/twitter/linkuser/accesscredentials");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","accessToken":"' + accessToken + '" ,"accessTokenSecret":"' + accessTokenSecret + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };

    /**
	*Links the User Twitter access credentials to the App User account.
	
    *@param userName - Name of the user whose Twitter account to be linked 
    *@param accessToken - Twitter Access Token that has been received after authorization
    *@param accessTokenSecret  Facebook App Id 
    *@param consumerSecret  Twitter App Consumer Secret
    *@param consumerKey Twitter App Consumer Key 
	*@param request - An object with success and error callbacks.
    *@return  The Social object.
    *@throws App42Exception
    */ 
    this.linkUserTwitterAccountWithCredentials = function(userName,accessToken,accessTokenSecret,consumerKey,consumerSecret, request) {
        if(userName != null && accessToken != null && accessTokenSecret != null && consumerKey != null && consumerSecret != null ){
            userName = userName.trim();
            accessToken = accessToken.trim();
            accessTokenSecret = accessTokenSecret.trim();
            consumerKey = consumerKey.trim();
            consumerSecret = consumerSecret.trim();
        }
        if(userName == "" || accessToken == "" || consumerKey == "" || consumerSecret == "" || accessTokenSecret == "" ||  userName == null || accessToken == null || consumerKey == null || consumerSecret == null || accessTokenSecret == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(consumerKey, "consumerKey")
            App42Fault.throwExceptionIfNullOrBlank(consumerSecret, "consumerSecret")
            App42Fault.throwExceptionIfNullOrBlank(accessTokenSecret, "accessTokenSecret")
            return ;
        }
        var URL = App42.URL("social/twitter/linkuser");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","consumerKey":"' + consumerKey + '" ,"consumerSecret":"' + consumerSecret + '","accessToken":"' + accessToken + '" ,"accessTokenSecret":"' + accessTokenSecret + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    /**
   * Updates the Twitter status of the specified user.

   *@param userName - Name of the user whose Twitter account to be linked 
   *@param status Status that has to be updated
   *@param request - An object with success and error callbacks.
   *@return  The Social object.
   *@throws App42Exception
   */ 
    this.updateTwitterStatus = function(userName,status, request) {
        if(userName != null && status != null){
            userName = userName.trim();
            status = status.trim();
        }
        if(userName == "" || status == "" || userName == null || status == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(status, "status")
            
            return ;
        }
        var URL = App42.URL("social/twitter/updatestatus");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","status":"' + status + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    /**
	* Links the User LinkedIn access credentials to the App User account.
	
    *@param userName -  Name of the user whose LinkedIn account to be linked
    *@param accessToken - LinkedIn Access Token that has been received after authorization
    *@param accessTokenSecret - LinkedIn Access Token Secret that has been received after authorization 
    *@param secretKey - LinkedIn App Secret Key
    *@param apiKey LinkedIn App API Key
	*@param request An object with success and error callbacks.
    *@return  The Social object.
    *@throws App42Exception
    */ 
    this.linkUserLinkedInAccountWithCredentials = function(userName,accessToken,accessTokenSecret,apiKey,secretKey, request) {
        if(userName != null && accessToken != null && accessTokenSecret != null && apiKey != null && secretKey != null ){
            userName = userName.trim();
            accessToken = accessToken.trim();
            accessTokenSecret = accessTokenSecret.trim();
            apiKey = apiKey.trim();
            secretKey = secretKey.trim();
        }
        if(userName == "" || accessToken == "" || accessTokenSecret == "" || apiKey == "" || secretKey == "" ||   userName == null || accessToken == null || accessTokenSecret == null || apiKey == null || secretKey == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(accessTokenSecret, "accessTokenSecret")
            App42Fault.throwExceptionIfNullOrBlank(apiKey, "apiKey")
            App42Fault.throwExceptionIfNullOrBlank(secretKey, "secretKey")
            return ;
        }
        var URL = App42.URL("social/linkedin/linkuser");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","apiKey":"' + apiKey + '" ,"secretKey":"' + secretKey + '","accessToken":"' + accessToken + '" ,"accessTokenSecret":"' + accessTokenSecret + '"}}}';
        params.body = body;
        App42Connection.post(URL,params,body,request, headerParams);
    };
	
    /**
	*Links the User LinkedIn access credentials to the App User account.
	
    *@param userName Name of the user whose LinkedIn account to be linked
    *@param accessToken LinkedIn Access Token that has been received after authorization
    *@param accessTokenSecret   LinkedIn Access Token Secret that has been received after authorization
   	*@param request An object with success and error callbacks.
    *@return  The Social object.
    *@throws App42Exception
    */ 
    this.linkUserLinkedInAccount = function(userName,accessToken,accessTokenSecret, request) {
        if(userName != null && accessToken != null && accessTokenSecret != null ){
            userName = userName.trim();
            accessToken = accessToken.trim();
            accessTokenSecret = accessTokenSecret.trim();
        }
        if(userName == "" || accessToken == "" || accessTokenSecret == "" || userName == null || accessToken == null || accessTokenSecret == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(accessTokenSecret, "accessTokenSecret")
            return ;
        }
        var URL = App42.URL("social/linkedin/linkuser/accesscredentials");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","accessToken":"' + accessToken + '" ,"accessTokenSecret":"' + accessTokenSecret + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    /**
	* Updates the LinkedIn status of the specified user
	
    *@param userName Name of the user whose LinkedIn account to be linked
    *@param status status that has to be updated
   	*@param request An object with success and error callbacks.
    *@return  The Social object.
    *@throws App42Exception
    */ 
    this.updateLinkedInStatus = function(userName,status, request) {
        if(userName != null && status != null){
            userName = userName.trim();
            status = status.trim();
        }
        if(userName == "" || status == "" || userName == null || status == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(status, "status")
            
            return ;
        }
        var URL = App42.URL("social/linkedin/updatestatus");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","status":"' + status + '"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };
	
    /**
	* Updates the status for all linked social accounts of the specified user.
	
    *@param userName  Name of the user for whom the status needs to be updated 
    *@param status status that has to be updated
   	*@param request An object with success and error callbacks.
    *@return  The Social object.
    *@throws App42Exception
    */ 
    this.updateSocialStatusForAll = function(userName,status, request) {
        if(userName != null && status != null){
            userName = userName.trim();
            status = status.trim();
        }
        if(userName == "" || status == "" || userName == null || status == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(status, "status")
            
            return ;
        }
        var URL = App42.URL("social/social/updatestatus/all");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"userName":"' + userName + '","status":"' + status + '"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };

    /**
	 * This function returns a list of facebook friends of the specified user by accessing the facebook account.
	 
    *@param userName   Name of the user whose Facebook friends account has to be retrieve
    *@param request  An object with success and error callbacks.
    *@return  The Social object.
    *@throws App42Exception
    */ 
    this.getFacebookFriendsFromLinkUser = function(userName, request) {
        if(userName != null){
            userName = userName.trim();
            
        }
        if(userName == ""  || userName == null ){
           
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            
            return ;
        }
        var URL = App42.URL("social/facebook/friends/" + userName);
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params, request, null, headerParams);
    };
	

    /**
	*This function returns a list of facebook friends of the specified user using a given authorization token.
	 To get the friend list here, user needs not to log into the facebook account.
	 
    *@param accessToken  Facebook Access Token that has been received after authorization
    *@param request  An object with success and error callbacks.
    *@return  The Social object.
    *@throws App42Exception
    */ 
    this.getFacebookFriendsFromAccessToken = function(accessToken, request) {
	
        if(accessToken != null){
            accessToken = accessToken.trim();
        }
        if(accessToken == ""  || accessToken == null ){
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            return ;
        }
        var URL = App42.URL("social/facebook/friends/OAuth/" + accessToken);
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.accessToken = accessToken;
        App42Connection.get(URL, params, request, null, headerParams);
    };
	
    this.facebookPublishStream = function(accessToken,name, filePath, message, request) {
	
        if(accessToken != null && name != null && message != null){
            accessToken = accessToken.trim();
            name = name.trim();
            message = message.trim();
        }
        if(accessToken == ""  || accessToken == null || name == ""  || name == null || filePath == ""  || filePath == null || message == ""  || message == 		null ){
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(filePath, "filePath")
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
		
        var URL = App42.URL("social" + "/facebook/wallpost");
        var params =  __social.populateSignParams(),
        metaHeader = __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.accessToken = accessToken;
        params.message = message;
        App42Connection.multipart(URL, params, filePath, request, headerParams);
    };
	
	
    this.facebookLinkPost = function(accessToken,link,message, request) {
	
        if(accessToken != null && message != null){
            accessToken = accessToken.trim();
            message = message.trim();
        }
        if(accessToken == ""  || accessToken == null || link == ""  || link == null || message == ""  || message == null ){
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(link, "link")
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
	
        var URL = App42.URL("social" + "/facebook/publishstream");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"link":"' + link + '","accessToken":"' + accessToken + '","message":"' + message + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.facebookLinkPostWithCustomThumbnail = function(accessToken,link,message,pictureUrl,name,description, request) {
	
        if(accessToken != null && link != null && message != null && name != null && description != null){
            accessToken = accessToken.trim();
            link = link.trim();
            name = name.trim();
            message = message.trim();
            description = description.trim();
        }
        if(accessToken == ""  || accessToken == null || link == ""  || link == null || name == ""  || name == null || filePath == ""  || filePath == null || 	message == ""  || message == null || pictureUrl == ""  || pictureUrl == null || description == ""  || description == null ){
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(friendFacebookId, "friendFacebookId")
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(filePath, "filePath")
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
        
        var URL = App42.URL("social" + "/facebook/publishstream");
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"social":{"link":"' + link + '","accessToken":"' + accessToken + '","message":"' + message + '","picture":"' + pictureUrl + '","name":"' + name + '","description":"' + description + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.getFacebookProfile= function(accessToken,request) {
        
        if(accessToken != null){
            accessToken = accessToken.trim();
        }
        if(accessToken == ""  || accessToken == null ){
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            return ;
        }
        
        var URL = App42.URL("social" + "/" + "facebook/me/OAuth/" + accessToken);
        var params =  __social.populateSignParams(),
        metaHeader =  __social.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.accessToken = accessToken;
        App42Connection.get(URL, params, request, null, headerParams);
    };
	
	this.getFacebookProfilesFromIds= function(facebookIds,request) {
        if(facebookIds == ""  || facebookIds == null ){
            App42Fault.throwExceptionIfNullOrBlank(facebookIds, "facebookIds")
            return ;
        }
        var URL = App42.URL("social" + "/" + "facebook/ids");
        var params =  __social.populateSignParams();
        var metaHeader =  __social.populateMetaHeaderParams();
        var headerParams = __merge(params,metaHeader);
        headerParams.userList = "["+facebookIds+"]";
        App42Connection.get(URL, params, request, null, headerParams);
    };
}


function App42Session() {
    App42Service.call(this);
    var __session=this;
    /**
     * This function creates a session for the existing App user.
     *
     * @param userName - UserName for which the session is to be created
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getSession = function(userName, request) {
        var URL = App42.URL("session");
        if(userName != null ){
            userName = userName.trim();
        }
        if(userName == "" ||  userName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __session.populateSignParams(),
        metaHeader =  __session.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"session":{"userName":"' + userName + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
     * This function invalidates the specified  based on the session id.
     * Note that on invalidating a session, all the attributes store in the session will be lost.
     *
     * @param sessionId - Session id  to be invalidated.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.invalidate = function(sessionId,request) {
        var URL = App42.URL("session");
        if(sessionId != null ){
            sessionId = sessionId.trim();
        }
        if(sessionId == "" ||  sessionId == null){
            App42Fault.throwExceptionIfNullOrBlank(sessionId, "sessionId")
            return ;
        }
        var params =  __session.populateSignParams(),
        metaHeader =  __session.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"session":{"id":"' + sessionId + '"}}}';
        params.body = body;
        sessionInvalidate = true;
        App42Connection.put(URL, params,body,request, headerParams);
    };
    /**
     * This function allows you to sets value of a given attribute for the specified session id.
     * All the attributes are stored in a key value pair.
     *
     * @param sessionId - Session id for which the attribute  is to be saved.
     * @param attributeName - Attribute name to be stored.
     * @param attributeValue - Attribute value to be stored.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.setAttribute = function(sessionId, attributeName, attributeValue,request) {
        var URL = App42.URL("session/id/" + sessionId);
        if(sessionId != null && attributeName != null && attributeValue != null ){
            sessionId = sessionId.trim();
            attributeName = attributeName.trim();
            attributeValue = attributeValue.trim();
        }
        if(sessionId == "" || attributeName == "" || attributeValue == "" || sessionId == null || attributeName == null || attributeValue == null){
            App42Fault.throwExceptionIfNullOrBlank(sessionId, "sessionId")
            App42Fault.throwExceptionIfNullOrBlank(attributeName, "attributeName")
            App42Fault.throwExceptionIfNullOrBlank(attributeValue, "attributeValue")
            return ;
        }
        var params =  __session.populateSignParams(),
        metaHeader =  __session.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.sessionId = sessionId;
        var body = '{"app42":{"session":{"name":"' + attributeName + '","value":"' + attributeValue + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
     * This function returns value of the specified attribute for a specific session id.
     *
     * @param sessionId - Session id for which the attribute value is to be fetched.
     * @param attributeName - Attribute name to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getAttribute = function(sessionId, attributeName,request) {
        var URL = App42.URL("session/id/" + sessionId + "/" + attributeName);
        if(sessionId != null && attributeName != null ){
            sessionId = sessionId.trim();
            attributeName = attributeName.trim();
        }
        if(sessionId == "" || attributeName == "" || sessionId == null || attributeName == null ){
            App42Fault.throwExceptionIfNullOrBlank(sessionId, "sessionId")
            App42Fault.throwExceptionIfNullOrBlank(attributeName, "attributeName")
            return ;
        }
        var params =  __session.populateSignParams(),
        metaHeader =  __session.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.sessionId = sessionId;
        params.name = attributeName;
        App42Connection.get(URL, params, request, null, headerParams);
    };
    /**
     * This function returns all the attributes along with their set values for the specified session id.
     *
     * @param sessionId - The session id for which the attribute list is to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getAllAttributes = function(sessionId,request) {
        var URL = App42.URL("session/id/" + sessionId);
        if(sessionId != null ){
            sessionId = sessionId.trim();
        }
        if(sessionId == "" || sessionId == null ){
            App42Fault.throwExceptionIfNullOrBlank(sessionId, "sessionId")
            return ;
        }
        var params =  __session.populateSignParams(),
        metaHeader =  __session.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.sessionId = sessionId;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * This function removes the specified attribute from a session whose session id is provided.
     *
     * @param sessionId - Session id for which  attribute is to be removed.
     * @param attributeName - Attribute name to be removed.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.removeAttribute = function(sessionId, attributeName,request) {
        var URL = App42.URL("session/id/" + sessionId + "/" + attributeName);
        if(sessionId != null && attributeName != null ){
            sessionId = sessionId.trim();
            attributeName = attributeName.trim();
        }
        if(sessionId == "" || attributeName == "" || sessionId == null || attributeName == null ){
            App42Fault.throwExceptionIfNullOrBlank(sessionId, "sessionId")
            App42Fault.throwExceptionIfNullOrBlank(attributeName, "attributeName")
            return ;
        }
        var params =  __session.populateSignParams(),
        metaHeader =  __session.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.sessionId = sessionId;
        params.name = attributeName;
        App42Connection.del(URL, params,request, headerParams);
    };
    /**
     * This function removes all the attributes for the specified session id.
     *
     * @param sessionId -Session id for which  attributes are to be removed.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.removeAllAttributes = function(sessionId, request) {
        var URL = App42.URL("session/id/" + sessionId);
        if(sessionId != null ){
            sessionId = sessionId.trim();
        }
        if(sessionId == "" || sessionId == null ){
            App42Fault.throwExceptionIfNullOrBlank(sessionId, "sessionId")
            return ;
        }
        var params =  __session.populateSignParams(),
        metaHeader =  __session.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.sessionId = sessionId;
        App42Connection.del(URL, params, request, headerParams);
    };
}

function App42Service() {
    // Initializing Variables.
    var sessionId=null,adminKey=null,fbAccessToken=null,
    geoTag=null,aclList=null,selectKeys=[],pageOffset=-1,pageMaxRecords=-1,otherMetaHeaders={},event=null;
    
    this.setPageOffset = function(page_offset) {
        pageOffset = page_offset;
    };
    
    this.getPageOffset = function() {
        return pageOffset;
    };
    
    this.setPageMaxRecords = function(page_maxRecords) {
        pageMaxRecords = page_maxRecords;
    };
    
    this.getPageMaxRecords = function() {
        return pageMaxRecords;
    };
    
    this.setOtherMetaHeaders = function(other_metaHeaders) {
        otherMetaHeaders = other_metaHeaders;
    };
    
    this.getOtherMetaHeaders = function() {
        return otherMetaHeaders;
    };
    
    this.setSessionId = function(session_Id) {
        sessionId = session_Id;
    };
    
    this.getSessionId = function() {
        return sessionId;
    };
	
	 this.setModuleEvent = function(event) {
        event = event;
    };
    
    this.getEvent = function() {
        return event;
    };
	
    this.setAdminKey = function(admin_key) {
        adminKey = admin_key ;
    };
    
    this.getAdminKey = function() {
        return adminKey;
    };
	
    this.setFbAccessToken = function(fbAccess_Token) {
        fbAccessToken = fbAccess_Token;
    };
    
    this.getFbAccessToken = function() {
        return fbAccessToken;
    };
    
    this.setGeoTag = function(geo_Tag) {
        if(geo_Tag instanceof GeoTag){
            var __geo = {};
            if(geo_Tag.getLat() !=null && geo_Tag.getLng()!=null){
                __geo.lat = geo_Tag.getLat();
                __geo.lng = geo_Tag.getLng();
                geoTag = __geo;
            }
        }
    };
    this.getGeoTag = function() {
        return geoTag;
    };
    
    this.setAclList = function(acl_List) {
        var __aclList = new Array();
        var createPer;
        if(acl_List instanceof Array){
            for (var i=0;  i<acl_List.length; i++){
                var userInArray = acl_List[i].user;
                var permissionInArray;
                createPer = {};
                permissionInArray = acl_List[i].permission;
                createPer[userInArray] = permissionInArray
                __aclList.push(createPer)
            }
        }else{
            createPer = {};
            var user = acl_List.user;
            var permission;
            permission = acl_List.permission;
            createPer[user] = permission
            __aclList.push(createPer)
	}
        aclList = __aclList;
    };
    this.getAclList = function() {
        return aclList;
    };
	
    this.setSelectKeys = function(select_keys) {
        selectKeys = select_keys;
    };
    this.getSelectKeys = function() {
        return selectKeys;
    };
    
    this.populateSignParams = function(){
        var params = {};
        params.apiKey = apiKey;
        params.version = version;
        var now = new Date();
        params.timeStamp = getODataUTCDateFilter(now);
        if(sessionId != null){
            params.sessionId = sessionId;
        }
        if(adminKey != null){
            params.adminKey = adminKey;
        }
        if(fbAccessToken != null){
            params.fbAccessToken = fbAccessToken;
        }
        if(localStorage != undefined){
            if(sessionId ==null && localStorage.getItem("_App42_SessionId") != undefined){
                var _sessionId = localStorage.getItem("_App42_SessionId");
                params.sessionId = _sessionId;
            }
        }
        if(localStorage != undefined){
            if(fbAccessToken ==null && localStorage.getItem("_App42_FbAccessToken") != undefined){
                var _fbAccessToken = localStorage.getItem("_App42_FbAccessToken");
                params.fbAccessToken = _fbAccessToken;
            }
        }
		 if(event != null && event != ""){
            params.event = event;
        }
		
        return params;
    }
    
    this.populateMetaHeaderParams = function(){
        var params = {};
        if(aclList !=null){
            var __acl = JSON.stringify(aclList)
            params.dataACL = __acl;
        }
        if(pageOffset != -1 && !isNaN(pageMaxRecords)){
            params.pageOffset = pageOffset;
        }
        if(pageMaxRecords != -1 && !isNaN(pageMaxRecords)){
            params.pageMaxRecords = pageMaxRecords;
        }
        
        if(geoTag != null && Object.prototype.toString.call(geoTag) == "[object Object]"){
            var geoString = JSON.stringify(geoTag)
            params.geoTag = geoString;
        }
        if(selectKeys.length > 0){
            var selectJSONKeys = {}
            for (var i=0; i<selectKeys.length;i++) {
                selectJSONKeys[selectKeys[i]] = "1";
            }
            var selectKeysString = JSON.stringify(selectJSONKeys)
            params.selectKeys = selectKeysString 
            
        }
        if(otherMetaHeaders.length > 0){
            for (var key in otherMetaHeaders) {
                var value = otherMetaHeaders[key];
                if (key != null && key !="" && value != null
                    && value != "") {
                    params.key = value;
                }
            }
        }
        if(localStorage != undefined){
            if(localStorage.getItem("_App42_DeviceId") != undefined){
                var uuid = localStorage.getItem("_App42_DeviceId");
                params.deviceId = uuid
            }
        }
		if(App42.getLoggedInUser()!=null && App42.getLoggedInUser() != "") {
			params.loggedInUser = App42.getLoggedInUser();
		}
		
		params.SDKName = "javascript";
        return params;
		
    }
}

function GeoTag() {
    var lat=null,lng=null;
    this.setLat = function(latitude) {
        lat = latitude;
    };
    
    this.getLat = function() {
        return lat;
    };
	
    this.setLng = function(longtitude) {
        lng = longtitude;
    };
    
    this.getLng = function() {
        return lng;
    };
    
   
}

function ItemData() {
    var item=null,name=null,description=null,image=null, price =null, imageName =null;

    this.getItemId = function() {
        return item;
    };
	
	this.setItemId = function(itemId) {
        item = itemId;
    };
    
    this.getName = function() {
        return name;
    };
    
    this.setName = function(itemName) {
        name = itemName;
    };
    
    this.getDescription = function() {
        return description;
    };
	
	this.setDescription = function(descrip) {
        description = descrip;
    };
    
    this.getImage = function() {
        return image;
    };
    
    this.setImage = function(itemImage) {
        image = itemImage;
    };
   
    this.getPrice = function() {
        return price;
    };
    
    this.setPrice = function(itemPrice) {
        price = itemPrice;
    };
   
    this.getImageName = function() {
        return imageName;
    };
    
    this.setImageName = function(itemImageName) {
        imageName = itemImageName;
    };
   
}
function __merge(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}


function App42ScoreBoard() {
    App42Service.call(this);
    var __scoreBoard=this;
    
    /**
     * This function enables you to save game score of the specified user in a specific game.
     *
     * @param gameName - Game for which score is to be saved.
     * @param gameUserName - User whose score is to be saved.
     * @param gameScore - Score  to be saved.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.saveUserScore = function(gameName,gameUserName, gameScore,request) {
        var URL = App42.URL("game/scoreboard");
        if(gameName != null && gameUserName != null && gameScore != null){
            gameName = gameName.trim();
            gameUserName = gameUserName.trim();
        }
        if(gameName == "" || gameUserName == "" || gameScore == "" || gameName == null|| gameUserName == null|| gameScore == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(gameUserName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(gameScore, "gameScore")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"game":{"name":"'+gameName+'", "scores":{"score":{"value":"'+gameScore+'","userName":"'+gameUserName+'"}}}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
     * This function retrieves the scores for the specified user of a specific game.
     *
     * @param gameName - Name of the game for which scores are to be fetched.
     * @param userName - User for which scores are to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getScoresByUser = function(gameName, userName,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/"+userName);
        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameName == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
        
       
    };
    /**
     * This function returns the highest game score for the specified user in a specific game.
     *
     * @param gameName - Game for which highest score is to be fetched.
     * @param userName - User for which highest score is to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getHighestScoreByUser = function(gameName, userName,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/"+userName+"/"+"highest");
        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameName == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * This function returns the lowest game score for the specified user in a specific game.
     *
     * @param gameName - Game for which lowest score is to be fetched.
     * @param userName - User for which lowest score is to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getLowestScoreByUser = function(gameName, userName,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/"+userName+"/"+"lowest");
        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameName == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
       
    };
    /**
     * This function provides the top ranking for the specified game.
     *
     * @param gameName - Game for which ranks are to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getTopRankings = function(gameName,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/ranking");
        if(gameName != null){
            gameName = gameName.trim();
        }
        if(gameName == "" || gameName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getTopRankingsByDate = function(gameName, startDate, endDate, request) {
        strStartDate = getODataUTCDateFilter(startDate) ;
        strEndDate = getODataUTCDateFilter(endDate);
        if(gameName != null && startDate!=null && endDate!=null  ){
            gameName = gameName.trim();
				
        }
        if(gameName == "" || gameName == null || startDate == "" || startDate == null || endDate == "" || endDate == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(startDate, "startDate")
            App42Fault.throwExceptionIfNullOrBlank(endDate, "endDate")
			
        
        }
        var URL = App42.URL("game/scoreboard/"+gameName+ "/ranking" + "/" + strStartDate + "/" + strEndDate);
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.startDate = strStartDate;
        params.endDate = strEndDate;
       
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
     * This function returns specified number of top rankings for a specific game.
     *
     * @param gameName - Game for which ranks are to be fetched.
     * @param max - Maximum number of records to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getTopNRankings = function(gameName, max,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/ranking/"+max);
        if(gameName != null){
            gameName = gameName.trim();
        }
        if(gameName == "" ||gameName == null ){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.max = max;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getTopNRankersBetweenDate = function(gameName,startDate,endDate,max,request) {
        strStartDate = getODataUTCDateFilter(startDate) ;
        strEndDate = getODataUTCDateFilter(endDate);
        var URL = App42.URL("game/scoreboard/"+gameName+ "/rankers" + "/" + strStartDate + "/" + strEndDate + "/" + max);
        if(gameName != null && startDate!=null && endDate!=null && max != null ){
            gameName = gameName.trim();
				
        }
        if(gameName == "" || gameName == null || startDate == "" || startDate == null || endDate == "" || endDate == null || max == null || max == ""){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(startDate, "startDate")
            App42Fault.throwExceptionIfNullOrBlank(endDate, "endDate")
            App42Fault.throwExceptionIfNullOrBlank(max, "max")
        
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.startDate = strStartDate;
        params.endDate = strEndDate;
        params.max = max;
       
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getTopNRankers = function(gameName,max,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+ "/rankers" + "/"+ max);
        if(gameName != null && max != null ){
            gameName = gameName.trim();
				
        }
        if(gameName == "" || gameName == null || max == null || max == ""){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(max, "max")
        
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.max = max;
       
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
	
	
    /**
     * This function provides top rankings for the specified user in a specific game.
     *
     * @param gameName - Name of the game for which ranks are to be fetched.
     * @param userName - Name of the user for which ranks are to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getUserRanking = function(gameName, userName,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/"+userName+"/ranking");
        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameName == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * This function returns the average score for the specified user in a specific game.
     *
     * @param gameName - Game for which average score is to be fetched.
     * @param userName - User for which average score is to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getAverageScoreByUser = function(gameName, userName, request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/"+userName+"/average");
        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameName == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getLastScoreByUser = function(gameName, userName,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/"+userName+"/lastscore");
        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameName == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getLastGameScore = function(userName,request) {
        var URL = App42.URL("game/scoreboard/"+userName+"/lastgame");
        if(userName != null){
            
            userName = userName.trim();
        }
        if(userName == "" || userName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.editScoreValueById = function(scoreId,gameScore,request) {
        var URL = App42.URL("game/scoreboard"+ "/editscore");
        
        if(scoreId == "" || scoreId == null || gameScore == "" || gameScore == null ){
            App42Fault.throwExceptionIfNullOrBlank(scoreId, "scoreId")
            App42Fault.throwExceptionIfNullOrBlank(gameScore, "gameScore")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"game":{"scores":{"score":{"scoreId":"'+scoreId+'","value":"'+gameScore+'"}}}}}';
        params.body =body;
        App42Connection.put(URL,params, body,request, headerParams);
    };
	
    this.getTopRankingsByGroup = function(gameName, userList,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/" +"group");
        if(gameName != null){
            gameName = gameName.trim();
        }
        if(gameName == "" ||gameName == null ){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            return ;
        }
		
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userList ="["+userList.toString()+"]";
        params.name = gameName;
        
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getTopNRankersByGroup = function(gameName, userList,request) {
        var URL = App42.URL("game/scoreboard/"+gameName+"/rankers/group");
        if(gameName != null){
            gameName = gameName.trim();
        }
        if(gameName == "" ||gameName == null ){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            return ;
        }
		
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userList ="["+userList.toString()+"]";
        params.name = gameName;
        
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
	
    this.getTopRankersFromBuddyGroup = function(gameName,userName,ownerName,groupName,request) {
        var URL = App42.URL("game/scoreboard/"+ gameName + "/rankers" + "/" + userName + "/group/"+ ownerName + "/" + groupName);
        if(gameName != null && userName != null && ownerName != null && groupName != null){
            
            gameName = gameName.trim();
            userName = userName.trim();
            ownerName = ownerName.trim();
            groupName = groupName.trim();
        }
        if(gameName == "" || gameName == null || userName == "" || userName == null || ownerName == "" || ownerName == null || groupName == "" || groupName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(ownerName, "ownerName")
            App42Fault.throwExceptionIfNullOrBlank(groupName, "groupName")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.userName = userName;
        params.ownerName = ownerName;
        params.groupName = groupName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
	
	this.getTopNRankersFromFacebook = function(gameName,fbAccessToken,max,request) {
		 localStorage.setItem("_App42_FbAccessToken",fbAccessToken);
        var URL = App42.URL("game/scoreboard/"+ gameName + "/rankers/facebook/" + max);
        if(gameName != null && fbAccessToken != null){
            
            gameName = gameName.trim();
            fbAccessToken = fbAccessToken.trim();
        }
        if(gameName == "" || gameName == null || fbAccessToken == "" || fbAccessToken == null || max == "" || max == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(fbAccessToken, "fbAccessToken")
            App42Fault.throwExceptionIfNullOrBlank(max, "max")
            return ;
        }
        var params =  __scoreBoard.populateSignParams(),
        metaHeader =  __scoreBoard.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        params.max = max;
        App42Connection.get(URL, params,request, null, headerParams);
    };
}


function App42Score() {
    App42Service.call(this);
    var __score=this;
    
    /**
     * This function allows you to add current game session score to the previous session score for the specified user in a specific game.
     *
     * @param gameName - Game for which score is to be added.
     * @param userName - User whose score is to be added.
     * @param gameScore - Score to be added.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.addScore = function(gameName,userName, gameScore,request) {
        var URL = App42.URL("game/score/add");

        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameScore == "" || gameName == null || userName == null || gameScore == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(gameScore, "gameScore")
            return ;
        }
        var params =  __score.populateSignParams(),
        metaHeader =  __score.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"game":{"name":"' + gameName + '","scores":{"score":{"userName":"' + userName + '","value":"' + gameScore + '"}}}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };
    /**
     * This function deducts the score from the specified user’s account for a particular game.
     *
     * @param gameName - Game for which scores are to be deducted.
     * @param userName - User whose scores are to be deducted.
     * @param gameScore - Scores to be deducted.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.deductScore = function(gameName,userName, gameScore,request) {
        var URL = App42.URL("game/score/deduct");

        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameScore == "" || gameName == null || userName == null || gameScore == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(gameScore, "gameScore")
            return ;
        }
        var params =  __score.populateSignParams(),
        metaHeader =  __score.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"game":{"name":"' + gameName + '", "scores":{"score":{"userName":"' + userName + '","value":"' + gameScore + '"}}}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };
}


function App42Reward() {
    App42Service.call(this);
    var __reward=this;
    /**
     * This function allows you to create rewards in a game. Reward can be sword, energy etc.
     * When reward points are to be added, the reward name created using this method is to be specified.
     *
     * @param rewardName - Reward to be created.
     * @param rewardDescription - Description of the reward to be created.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.createReward = function(rewardName, rewardDescription, request) {
        var URL = App42.URL("game/reward");
        if(rewardName != null && rewardDescription != null){
            rewardName = rewardName.trim();
            rewardDescription = rewardDescription.trim();
        }
        if(rewardName == "" || rewardDescription == "" || rewardName == null || rewardDescription == null){
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
            App42Fault.throwExceptionIfNullOrBlank(rewardDescription, "rewardDescription")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"rewards":{"reward":{"name":"' + rewardName + '","description":"' + rewardDescription + '"}}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
     * This function returns all the rewards in the App starting from the specified index location till maximum number of records.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getAllRewards = function(request) {
        var URL = App42.URL("game/reward");
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request, null, headerParams);
    };
			
    this.getAllRewardsWithPaging = function(max,offset,request){
		
        var URL_r = App42.URL("game/reward/paging/"+max+"/"+offset);

        var params_r =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params_r,metaHeader);
        params_r.max = max;
        params_r.offset = offset;
        App42Connection.get(URL_r, params_r,request, null, headerParams);
       
    };
    /**
     * This function returns the total number of all the rewards created in the gaming App.
     *
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getAllRewardsCount = function(request) {
        var URL = App42.URL("game/reward/count");
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * This function located a reward with specified name.
     *
     * @param rewardName - Name of the reward  to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getRewardByName = function(rewardName,request) {
        var URL = App42.URL("game/reward/"+rewardName);
        if(rewardName != null){
            rewardName = rewardName.trim();
        }
        if(rewardName == "" || rewardName == null){
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = rewardName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
     * This function allows you to add the reward points to a user’s account in the specified game.
     * Reward Points can be earned by the user, which can be redeemed later.
     *
     * @param gameName - Game for which reward points are to be added.
     * @param userName - User whose reward points are to be added.
     * @param rewardName - Rewards for which points are to be added.
     * @param rewardPoints - Reward points to be added.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.earnRewards = function(gameName,userName, rewardName, rewardPoints,request) {
        var URL = App42.URL("game/reward/earn");
        if(gameName != null && userName != null && rewardName != null && rewardPoints != null){
            gameName = gameName.trim();
            userName = userName.trim();
            rewardName = rewardName.trim();
        }
        if(gameName == "" || userName == ""|| rewardName == ""  || rewardPoints == "" || gameName == null || userName == null|| rewardName == null || rewardPoints == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
            App42Fault.throwExceptionIfNullOrBlank(rewardPoints, "rewardPoints")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"rewards":{"reward":{"gameName":"' + gameName + '","userName":"' + userName + '","name":"' + rewardName + '","points":"' + rewardPoints + '"}}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
     * This function deducts the reward points from the earned rewards by the specified user in a specific user.
     *
     * @param gameName - Game for which reward points are to be deducted.
     * @param userName - User whose reward points are to be deducted.
     * @param rewardName - Rewards from which points are to be deducted.
     * @param rewardPoints - Reward points to be deducted.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.redeemRewards = function(gameName,userName, rewardName, rewardPoints,request) {
        var URL = App42.URL("game/reward/redeem");
        if(gameName != null && userName != null && rewardName != null && rewardPoints != null){
            gameName = gameName.trim();
            userName = userName.trim();
            rewardName = rewardName.trim();
        }
        if(gameName == "" || userName == ""|| rewardName == ""  || rewardPoints == "" || gameName == null || userName == null|| rewardName == null || rewardPoints == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
            App42Fault.throwExceptionIfNullOrBlank(rewardPoints, "rewardPoints")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"rewards":{"reward":{"gameName":"' + gameName + '","userName":"' + userName + '","name":"' + rewardName + '","points":"' + rewardPoints + '"}}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
     * This function provides the information about reward points available for a particular user in the specified game.
     *
     * @param gameName - Game for which reward points are to be fetched.
     * @param userName - User whose reward points are to be fetched.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */
    this.getGameRewardPointsForUser = function(gameName, userName,request) {
        var URL = App42.URL("game/reward/"+gameName+"/"+userName);
        if(gameName != null && userName != null){
            gameName = gameName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || userName == "" || gameName == null || userName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.gameName = gameName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
	 * This function provides a list of specified number of top reward earners
	 * for a specific game.
	 * @param gameName - Name of the game for which reward earners are to be fetched
	 * @param rewardName  - Name of the reward for which list of earners is to be fetched
	 * @param max - Specifies the number of top earners to be fetched
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getTopNRewardEarners = function(gameName, rewardName, max, request) {
        var URL = App42.URL("game/reward/"+gameName + "/" +rewardName + "/" + max);
        if(gameName != null && rewardName != null){
            gameName = gameName.trim();
            rewardName = rewardName.trim();
        }
        if(gameName == "" || gameName == null ||rewardName== "" || rewardName == null || max == null || max == ""){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
            App42Fault.throwExceptionIfNullOrBlank(max, "max")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.gameName = gameName;
        params.rewardName = rewardName;
        params.max = max;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
	 * This function returns you the details of all the specific rewards earned by the specified user.
	 * @param userName - Name of the user whose rewards are to be fetched
	 * @param rewardName - Name of the reward for which details are to be fetched
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getAllRewardsByUser = function(userName, rewardName, request) {
        var URL = App42.URL("game/reward/"+ userName + "/points/" +rewardName);
        if(userName != null && rewardName != null){
            userName = userName.trim();
            rewardName = rewardName.trim();
        }
        if(userName == "" || userName == null ||rewardName== "" || rewardName == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
			
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.rewardName = rewardName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getUserRankingOnReward = function(gameName,rewardName,userName,request) {
        var URL = App42.URL("game/reward/"+ gameName + "/" +rewardName + "/"+"rank"+"/" + userName);
        if(gameName != null && rewardName != null && userName != null){
            gameName = gameName.trim();
            rewardName = rewardName.trim();
            userName = userName.trim();
        }
        if(gameName == "" || gameName == null ||rewardName== "" || rewardName == null || userName == null || userName == ""){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.gameName = gameName;
        params.rewardName = rewardName;
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
	 * This function returns you a list of group wise users who earned the top
	 * rewards in the specified game .
	 * @param gameName - Name of the game for which top reward earners are to be fetched
	 * @param rewardName - Name of the reward for which top earners are to be listed
	 * @param userList - List of group wise users earning specified rewards
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getTopNRewardEarnersByGroup = function(gameName,rewardName,userList,request) {
        var URL = App42.URL("game/reward/"+ gameName + "/" +rewardName + "/group/points");
        if(gameName != null && rewardName != null && userList != null ){
			
            gameName = gameName.trim();
            rewardName = rewardName.trim();
        }
        if(gameName == "" || gameName == null ||rewardName== "" || rewardName == null || userList == null || userList == ""){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(rewardName, "rewardName")
            App42Fault.throwExceptionIfNullOrBlank(userList, "userList")
            return ;
        }
        var params =  __reward.populateSignParams(),
        metaHeader =  __reward.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userList = "["+userList.toString()+"]";
        params.gameName = gameName;
        params.rewardName = rewardName;
        App42Connection.get(URL, params, request, null, headerParams);
    };
}


/**
	 * Creates review for the specified item on the cloud
	 * @param userID - The user who has created the review
	 * @param itemID - The item for which the review has to be created
	 * @param reviewComment - The review comment
	 * @param reviewRating - Review rating in double
	 * @return Review object containing the review which has been created
	 * @throws App42Exception
	 * 
	 */
function App42Review() {
    App42Service.call(this);
    var __review=this;    
        
    this.createReview = function(userID,itemID,reviewComment,reviewRating,request) {
        var URL = App42.URL("review");
        if(userID != null && itemID != null && reviewComment != null ){
            userID = userID.trim();
            itemID =itemID.trim();
            reviewComment =reviewComment.trim();
        }
        if(userID == "" || itemID == "" || reviewComment == "" || userID == null || itemID == null|| reviewComment == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            App42Fault.throwExceptionIfNullOrBlank(userID, "userID")
            App42Fault.throwExceptionIfNullOrBlank(reviewComment, "reviewComment")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"review":{"userId":"' + userID + '","itemId":"' +itemID + '","comment":"'+reviewComment + '","rating":"'+ reviewRating + '"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
		
    };
	
    this.addComment = function(userID,itemID,comment,request) {
        var URL = App42.URL("review"+"/comment");
        if(userID != null && itemID != null && comment != null ){
            userID = userID.trim();
            itemID =itemID.trim();
            comment =comment.trim();
        }
        if(userID == "" || itemID == "" || comment == "" || userID == null || itemID == null|| comment == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            App42Fault.throwExceptionIfNullOrBlank(userID, "userID")
            App42Fault.throwExceptionIfNullOrBlank(comment, "comment")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"review":{"userId":"' + userID + '","itemId":"' +itemID + '","comment":"'+comment + '"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
		
    };
	
    /**
	 * Fetches all reviews for the App
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 * 
	 */
    this.getAllReviewsByPaging = function(max, offset, request) {
        var URL = App42.URL("review"  + "/paging" + "/" + max + "/" + offset);
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getAllReviews = function(request) {
        var URL = App42.URL("review");
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
	 * Fetches count of all reviews for the App
	 * @return App42Response containing count of all the reviews for the App
	 * @throws App42Exception
	 */
    this.getAllReviewsCount = function(request) {
        var URL = App42.URL("review"+ "/" +"count");
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params, request, null, headerParams);
    }; 
    /**
	 * Fetches All Reviews based on the itemId
	 * @param itemID - The item for which reviews have to be fetched
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getReviewsByItem = function(itemID, request) {
        var URL = App42.URL("review" + "/item" + "/" + itemID);
        if(itemID != null){
            itemID =itemID.trim();
        }
        if(itemID == "" || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        App42Connection.get(URL, params,request, null, headerParams);        
    };
	
    this.getReviewsByItemByPaging = function(itemID, max, offset, request) {
        var URL = App42.URL("review" + "/item" + "/" + itemID+ "/" + max + "/" + offset);
        if(itemID != null && max != null && offset != null){
            itemID =itemID.trim();
        }
        if(itemID == "" || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params, request, null, headerParams);        
    };
	
    this.getCommentsByItem = function(itemId,request){
        var URL = App42.URL("review" + "/comment/item"	+ "/" + itemId);
        if(itemId != null){
            itemId =itemId.trim();
        }
        if(itemId == "" || itemId == null){
            App42Fault.throwExceptionIfNullOrBlank(itemId, "itemId")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemId;
        App42Connection.get(URL, params,request, null, headerParams);        
    };
	
	
    /**
	 * Fetches count of All Reviews based on the itemId
	 * @param itemID - The item for which count of reviews have to be fetched
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getReviewsCountByItem = function(itemID,request) {
        var URL = App42.URL("review"+ "/item" + "/" + itemID +"/" +"count");
        if(itemID != null){
            itemID =itemID.trim();
        }
        if(itemID == "" || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        App42Connection.get(URL, params,request, null, headerParams);
		
    };
    /**
	 * Fetches the highest review for the specified itemId
	 * @param itemID - The item for which the highest review has to be fetched
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getHighestReviewByItem = function(itemID,request) {
        var URL = App42.URL("review"+"/" + itemID + "/highest");
        if(itemID != null){
            itemID =itemID.trim();
        }
        if(itemID == "" || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
	 * Fetches the lowest review for the specified itemId
	 * @param itemID - The item for which the lowest review has to be fetched
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getLowestReviewByItem = function(itemID,request) {
        var URL = App42.URL("review"+"/" + itemID + "/lowest");
        if(itemID != null){
            itemID =itemID.trim();
        }
        if(itemID == "" || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        App42Connection.get(URL, params,request, null, headerParams);
		
    };
    /**
	 * Fetches the average review for the specified itemId
	 * @param itemID - The item for which the average review has to be fetched
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.getAverageReviewByItem = function(itemID,request) {
        var URL = App42.URL("review"+"/" + itemID + "/average");
        if(itemID != null){
            itemID =itemID.trim();
        }
        if(itemID == "" || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        App42Connection.get(URL, params,request, null, headerParams);
		
    };
    /**
	 * Mutes the specified review
	 * 
	 * @param reviewId
	 *            - The Id of the review which has to be muted
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */
    this.mute = function(reviewId, request) {
        var URL = App42.URL("review"+ "/mute");
        if(reviewId != null){
            reviewId =reviewId.trim();
        }
        if(reviewId == "" || reviewId == null){
            App42Fault.throwExceptionIfNullOrBlank(reviewId, "reviewId")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"review":{"id":"' + reviewId + '"}}}';
        params.body = body;
        App42Connection.put(URL, params, body, request, headerParams);

    };
    /**
	 * UnMutes the specified review
	 * @param reviewId - The Id of the review which has to be unmuted
	 * @param request - An object with success and error callbacks.
	 * @throws App42Exception
	 */
    this.unmute = function(reviewId,request) {
        var URL = App42.URL("review"+"/unmute");
        if(reviewId != null){
            reviewId =reviewId.trim();
        }
        if(reviewId == "" || reviewId == null){
            App42Fault.throwExceptionIfNullOrBlank(reviewId, "reviewId")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"review":{"id":"' + reviewId + '"}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);

    };
	
    this.getReviewsCountByItemAndRating = function(itemID,rating,request) {
        var URL = App42.URL("review" + "/item"+ "/" + itemID + "/rating" + "/" + rating);
        if(itemID != null && rating != null ){
            itemID =itemID.trim();
			
        }
        if(itemID == "" || itemID == null || rating == null || rating == "" ){
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            App42Fault.throwExceptionIfNullOrBlank(rating, "rating")
            return ;
        }
        var params =  __review.populateSignParams(),
        metaHeader =  __review.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        params.rating = rating;

        App42Connection.get(URL, params,request, null, headerParams);
    };
	
}



function App42Photo() {
    App42Service.call(this);
    var __photo=this;

    this.addPhoto = function(userName,albumName,photoName,photoDescription,filePath,request) {
        var URL = App42.URL("gallery"+"/" + userName);
        if(userName != null && albumName != null && photoDescription  != null && photoName != null && filePath != null  ){
            userName = userName.trim();
            albumName =albumName.trim();
            photoName =photoName.trim();
            photoDescription =photoDescription.trim();
        }
        if(userName == "" || albumName == "" || photoDescription == "" || filePath == null || filePath == "" || userName == null|| albumName == null|| photoDescription == null || photoName == null ||photoName ==""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            App42Fault.throwExceptionIfNullOrBlank(photoName, "photoName")
            App42Fault.throwExceptionIfNullOrBlank(photoDescription, "photoDescription")
            App42Fault.throwExceptionIfNullOrBlank(filePath, "filePath")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader =  __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.albumName = albumName;
        params.name = photoName;
        params.description = photoDescription;
        App42Connection.multipart(URL, params, filePath, request, headerParams);
		
    };
	
    this.addTagToPhoto = function(userName,albumName,photoName,tagList,request) {
        var URL = App42.URL("gallery"+"/" + "tag");
        if(userName != null && albumName != null && photoName != null && tagList != null  ){
            userName = userName.trim();
            albumName =albumName.trim();
			
        }
        if(userName == "" || albumName == "" || userName == null || albumName == null|| photoName == null ||photoName ==""){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            App42Fault.throwExceptionIfNullOrBlank(photoName, "photoName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        //params.tagList ="["+tagList.toString()+"]";
        var encodeJSON = JSON.stringify(tagList);
        var signify = '{"tag":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"photo":{"userName":"' + userName + '","albumName":"' + albumName + '","photoName":"' + photoName + '","tags":' + stringfy + '}}}'
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
		
    };
    this.getPhotos = function(userName,request) {
        var URL = App42.URL("gallery"+ "/" + userName);
        if(userName != null ){
            userName = userName.trim();
			
        }
        if(userName == ""  || userName == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getPhotosByAlbumName = function(userName,albumName,request) {
        var URL = App42.URL("gallery"+ "/" + userName+ "/" + albumName);
        if(userName != null && albumName != null  ){
            userName = userName.trim();
            albumName =albumName.trim();
        }
        if(userName == "" || albumName == ""  || userName == null || albumName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.albumName = albumName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getPhotosCountByAlbumName = function(userName,albumName,request) {
        var URL = App42.URL("gallery"+"/" + userName + "/" + albumName + "/count");
        if(userName != null && albumName != null  ){
            userName = userName.trim();
            albumName =albumName.trim();
        }
        if(userName == "" || albumName == ""  || userName == null || albumName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.albumName = albumName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getPhotosByAlbumNameByPaging = function(userName,albumName,max,offset,request) {
        var URL = App42.URL("gallery/album"+"/" + userName + "/" + albumName  + "/paging"+ "/" + max + "/" + offset);
        if(userName != null && albumName != null  ){
            userName = userName.trim();
            albumName =albumName.trim();
        }
        if(userName == "" || albumName == ""  || userName == null || albumName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.albumName = albumName;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getTaggedPhotos = function(userName,tag,request) {
        var URL = App42.URL("gallery"+ "/"+ "tag" + "/" + tag + "/userName/" + userName);
        if(userName != null && tag != null  ){
            userName = userName.trim();
        }
        if(userName == "" || tag == ""  || userName == null || tag == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.tag = tag;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getPhotosByAlbumAndPhotoName = function(userName,albumName,photoName,request) {
        var URL = App42.URL("gallery"+ "/"+ userName + "/" + albumName + "/" + photoName);
		
        if(userName != null && albumName != null && photoName != null ){
            userName = userName.trim();
            albumName =albumName.trim();
            photoName =photoName.trim();
        }
        if(userName == "" || albumName == "" || photoName == "" || userName == null || albumName == null|| photoName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            App42Fault.throwExceptionIfNullOrBlank(photoName, "photoName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.albumName = albumName;
        params.name = photoName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.removePhoto = function(userName,albumName,photoName,request) {
        var URL = App42.URL("gallery"+ "/"+ userName + "/" + albumName + "/" + photoName);
		
        if(userName != null && albumName != null && photoName != null ){
            userName = userName.trim();
            albumName =albumName.trim();
            photoName =photoName.trim();
        }
        if(userName == "" || albumName == "" || photoName == "" || userName == null || albumName == null|| photoName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            App42Fault.throwExceptionIfNullOrBlank(photoName, "photoName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.albumName = albumName;
        params.name = photoName;
        App42Connection.del(URL, params,request, headerParams);
    };
	
	
    this.grantAccess = function(albumName,photoName, userName,aclList,request) {
        var URL = App42.URL("gallery/grantAccess/"+userName+"/"+albumName+"/"+photoName);
        if(albumName != null && photoName != null && userName != null){
            albumName = albumName.trim();
          
        }
        if(albumName == "" || photoName == "" || userName == "" || albumName == null || photoName == null || userName == null){
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            App42Fault.throwExceptionIfNullOrBlank(photoName, "photoName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.albumName = albumName;
        params.photoName = photoName;
        params.userName = userName;
        var uploadAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray
                };
                uploadAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission
            };
            uploadAclList.push(array)
        }
        var encodeJSON = JSON.stringify(uploadAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"photo":{"acls":' + stringfy + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
	
	
	
    this.revokeAccess = function(albumName,photoName, userName,aclList,request) {
        var URL = App42.URL("gallery/revokeAccess/"+userName+"/"+albumName+"/"+photoName);
        if(albumName != null && photoName != null && userName != null){
            albumName = albumName.trim();
           
        }
        if(albumName == "" || photoName == "" || userName == "" || albumName == null || photoName == null || userName == null){
            App42Fault.throwExceptionIfNullOrBlank(albumName, "albumName")
            App42Fault.throwExceptionIfNullOrBlank(photoName, "photoName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __photo.populateSignParams(),
        metaHeader = __photo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.albumName = albumName;
        params.photoName = photoName;
        params.userName = userName;
        var uploadAclList = new Array();
        if(aclList instanceof Array){
            for (var i=0;  i<aclList.length; i++){
                var userInArray = aclList[i].user;
                var permissionInArray;
                checkPermissionType(permissionInArray);
                permissionInArray = aclList[i].permission;
                var arrayInArray={
                    user:userInArray,
                    permission:permissionInArray
                };
                uploadAclList.push(arrayInArray)
            }
        }else{
            var user = aclList.user;
            var permission ;
            checkPermissionType(permission);
            permission = aclList.permission;
            var array={
                user:user,
                permission:permission
            };
            uploadAclList.push(array)
        }
        var encodeJSON = JSON.stringify(uploadAclList);
        var signify = '{"acl":' + encodeJSON + '}'
        var stringfy = JSON.stringify(signify)
        var body = '{"app42":{"photo":{"acls":' + stringfy + '}}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
    
}
	
	
/**
	 * Builds and Logs the message
	 * 
	 * @param msg
	 *            - Message to be logged
	 * @param module
	 *            - Module name for which the message is getting logged
	 * @param level
	 *            - The level on which the message is getting logged
	 * @param request - An object with success and error callbacks.
         *  
	 * @throws App42Exception
	 * 
	 */



function buildAndSend(msg, module, level, request) {
    App42Service.call(this);
    var __log=this;
    var URL = App42.URL("log"+ "/" + level)
    if(msg != null && module != null && level != null){
        msg = msg.trim();
        module = module.trim();
        level = level.trim();
    }
    if(msg == "" || module == "" || level == "" || msg == null || module == null || level == null){
        App42Fault.throwExceptionIfNullOrBlank(msg, "msg")
        App42Fault.throwExceptionIfNullOrBlank(module, "module")
        App42Fault.throwExceptionIfNullOrBlank(level, "level")
        return ;
    }
     var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);

    var body = '{"app42":{"log":{"message":"' + msg + '","appModule":"' + module + '"}}}';
    params.body = body;
    App42Connection.post(URL, params, body, request, headerParams);
}

/**
	 * Fetch the log messages based on the Level
	 * 
	 * @param level
	 *            - The level on which logs have to be searched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

function fetchLogsByLevel(level,request) {
    App42Service.call(this);
    var __log=this;
    if(level != null){
        level = level.trim();
    }
    if(level == "" || level == null){
        App42Fault.throwExceptionIfNullOrBlank(level, "level")
        return ;
    }
    var URL = App42.URL("log"+ "/"+ "type" + "/" + level)
    var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
    params.type = level;
    App42Connection.get(URL, params,request, null, headerParams);
}

/**
	 * Fetch the log messages based on the Level by paging.
	 * 
	 * @param level
	 *            - The level on which logs have to be searched
	 * @param max
	 *            - Maximum number of records to be fetched
	 * @param offset
	 *            - From where the records are to be fetched
	 * 
	* @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

function fetchLogsByLevelByPaging(level, max, offset,request) {
    App42Service.call(this);
    var __log=this;
    if(level != null){
        level = level.trim();
    }
    if(level == "" || level == null){
        App42Fault.throwExceptionIfNullOrBlank(level, "level")
        return ;
    }
    var URL = App42.URL("log"+ "/"+ "paging" + "/" + "type" + "/" + level + "/" + max + "/"+ offset)
    var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
    params.type = level;
    params.max = max;
    params.offset = offset;
    App42Connection.get(URL, params,request, null, headerParams);
}

/**
	 * Fetch the count of log messages based on the Level
	 * 
	 * @param level
	 *            - The level on which count of logs have to be searched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

function fetchLogsCountByLevel(level, request) {
    App42Service.call(this);
    var __log=this;
    if(level != null){
        level = level.trim();
    }
    if(level == "" || level == null){
        App42Fault.throwExceptionIfNullOrBlank(level, "level")
        return ;
    }
    var URL = App42.URL("log"+ "/"+ "type" + "/" + level + "/count")
    var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
    params.type = level;
    App42Connection.get(URL, params,request, null, headerParams);
}


function App42Log() {
    App42Service.call(this);
    var __log=this;

    /**
	 * Logs the info message
	 * 
	 * @param msg
	 *            - Message to be logged
	 * @param module
	 *            - Module name for which the message is getting logged
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.info = function(msg, module, request) {
        return buildAndSend(msg, module, "info", request);
    };
	
    /**
	 * Logs the debug message
	 * 
	 * @param msg
	 *            - Message to be logged
	 * @param module
	 *            - Module name for which the message is getting logged
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.debug = function(msg, module,request) {
        return buildAndSend(msg, module, "debug", request);
    };
	
    /**
	 * Logs the fatal message
	 * 
	 * @param msg
	 *            - Message to be logged
	 * @param module
	 *            - Module name for which the message is getting logged
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fatal = function(msg, module,request) {
        return buildAndSend(msg, module, "fatal", request);
    };
	
    /**
	 * Logs the error message
	 * 
	 * @param msg
	 *            - Message to be logged
	 * @param module
	 *            - Module name for which the message is getting logged
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.error = function(msg, module,request) {
        return buildAndSend(msg, module, "error", request);
    };
	
    /**
	 * Fetch the log messages based on the Module
	 * 
	 * @param moduleName
	 *            - Module name for which the messages has to be fetched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByModule = function(moduleName,request) {
        if(moduleName != null){
            moduleName = moduleName.trim();
        }
        if(moduleName == "" || moduleName == null){
            App42Fault.throwExceptionIfNullOrBlank(moduleName, "moduleName")
            return ;
        }
        var URL = App42.URL("log"+ "/"+ "module" + "/" + moduleName)
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.moduleName = moduleName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
	 * Fetch the log messages based on the Module by paging.
	 * 
	 * @param moduleName
	 *            - Module name for which the messages has to be fetched
	 * @param max
	 *            - Maximum number of records to be fetched
	 * @param offset
	 *            - From where the records are to be fetched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByModuleByPaging = function(moduleName, max, offset,request) {
        if(moduleName != null){
            moduleName = moduleName.trim();
        }
        if(moduleName == "" || moduleName == null){
            App42Fault.throwExceptionIfNullOrBlank(moduleName, "moduleName")
            return ;
        }
        var URL = App42.URL("log"+ "/"+ "paging" + "/" + "module" + "/" + moduleName + "/" + max+ "/" + offset)
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.moduleName = moduleName;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params, request, null, headerParams);
    };
	
    /**
	 * Fetch the count of log messages based on the Module
	 * 
	 * @param moduleName
	 *            - Module name for which the count of messages has to be fetched
	 *      
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */
	 
    this.fetchLogsCountByModule = function(moduleName,request) {
        if(moduleName != null){
            moduleName = moduleName.trim();
        }
        if(moduleName == "" || moduleName == null){
            App42Fault.throwExceptionIfNullOrBlank(moduleName, "moduleName")
            return ;
        }
        var URL = App42.URL("log"+ "/"+"module" + "/" + moduleName + "/count")
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.moduleName = moduleName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
	 * Fetch log messages based on the Module and Message Text
	 * 
	 * @param moduleName
	 *            - Module name for which the messages has to be fetched
	 * @param text
	 *            - The log message on which logs have to be searched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByModuleAndText = function(moduleName, text,request) {
        if(moduleName != null || moduleName != null){
            moduleName = moduleName.trim();
            text = text.trim();
        }
        if(moduleName == "" || moduleName == null  || text == "" || text == null){
            App42Fault.throwExceptionIfNullOrBlank(moduleName, "moduleName")
            App42Fault.throwExceptionIfNullOrBlank(text, "text")
            return ;
        }
        var URL = App42.URL("log"+ "/"+ "module" + "/" + moduleName + "/" + "text" + "/" + text);
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.moduleName = moduleName;
        params.text = text;
        App42Connection.get(URL, params, request, null, headerParams);
    }
	
    /**
	 * Fetch log messages based on the Module and Message Text by paging.
	 * 
	 * @param moduleName
	 *            - Module name for which the messages has to be fetched
	 * @param text
	 *            - The log message on which logs have to be searched
	 * 
	 * @param max
	 *            - Maximum number of records to be fetched
	 * @param offset
	 *            - From where the records are to be fetched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByModuleAndTextByPaging = function(moduleName, text,max, offset,request) {
        if(moduleName != null || moduleName != null){
            moduleName = moduleName.trim();
            text = text.trim();
        }
        if(moduleName == "" || moduleName == null  || text == "" || text == null){
            App42Fault.throwExceptionIfNullOrBlank(moduleName, "moduleName")
            App42Fault.throwExceptionIfNullOrBlank(text, "text")
            return ;
        }
        var URL = App42.URL("log"+ "/"+ "paging" + "/" + "module" + "/" + moduleName + "/"+ "text" + "/" + text + "/" + max + "/" + offset);
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.moduleName = moduleName;
        params.text = text;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params, request, null, headerParams);
    }
	
    /**
	 * Fetch count of log messages based on the Module and Message Text
	 * 
	 * @param moduleName
	 *            - Module name for which the count of messages has to be
	 *            fetched
	 * @param text
	 *            - The log message on which count of logs have to be searched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsCountByModuleAndText = function(moduleName, text,request) {
        if(moduleName != null || moduleName != null){
            moduleName = moduleName.trim();
            text = text.trim();
        }
        if(moduleName == "" || moduleName == null  || text == "" || text == null){
            App42Fault.throwExceptionIfNullOrBlank(moduleName, "moduleName")
            App42Fault.throwExceptionIfNullOrBlank(text, "text")
            return ;
        }
        var URL = App42.URL("log"+ "/"+ "module" + "/" + moduleName + "/" + "text" + "/" + text+ "/count" );
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.moduleName = moduleName;
        params.text = text;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
	 * Fetch count of log messages based on Info Level
	 * 
	 * @return App42Response object containing count of fetched info messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsCountByInfo = function(request) {
        return fetchLogsCountByLevel("INFO", request);
    };
	
    /**
	 * Fetch count of log messages based on Debug Level
	 * 
	 * @return App42Response object containing count of fetched debug messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsCountByDebug = function(request) {
        return fetchLogsCountByLevel("DEBUG",request);
    };
	
    /**
	 * Fetch count of log messages based on Error Level
	 * 
	 * @return App42Response object containing count of fetched error messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsCountByError = function(request) {
        return fetchLogsCountByLevel("ERROR",request);
    };
	
    /**
	 * Fetch count of log messages based on Fatal Level
	 * 
	 * @return App42Response object containing count of fetched Fatal messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsCountByFatal = function(request) {
        return fetchLogsCountByLevel("FATAL",request);
    };
	
    /**
	 * Fetch log messages based on Info Level
	 * 
	 * @return Log object containing fetched info messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByInfo = function(request) {
        return fetchLogsByLevel("INFO",request);
    };

    this.fetchLogsByInfoByPaging = function(max,offset,request) {
        return fetchLogsByLevelByPaging("INFO",max,offset,request);
    };
	
    /**
	 * Fetch log messages based on Debug Level
	 * 
	 * @return Log object containing fetched debug messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByDebug = function(request) {
        return fetchLogsByLevel("DEBUG",request);
    };
	
    /**
	 * Fetch log messages based on Debug Level by paging.
	 * 
	 * @param max
	 *            - Maximum number of records to be fetched
	 * @param offset
	 *            - From where the records are to be fetched
	 * @param request - An object with success and error callbacks.
	 * @return Log object containing fetched debug messages
	 * 
	 * @throws App42Exception
	 * 
	 */
	 
    this.fetchLogsByDebugByPaging = function(max, offset,request) {
        return fetchLogsByLevelByPaging("DEBUG",max,offset,request);
    };
	
    /**
	 * Fetch log messages based on Error Level
	 * 
	 * @return Log object containing fetched error messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByError = function(request) {
        return fetchLogsByLevel("ERROR",request);
    };
	
    /**
	 * Fetch log messages based on Error Level by paging.
	 * 
	 * @param max
	 *            - Maximum number of records to be fetched
	 * @param offset
	 *            - From where the records are to be fetched
	 * @param request - An object with success and error callbacks.
	 * @return Log object containing fetched error messages
	 * 
	 * @throws App42Exception
	 * 
	 */
	 
    this.fetchLogsByErrorByPaging = function(max,offset,request) {
        return fetchLogsByLevelByPaging("ERROR",max,offset,request);
    };
	
    /**
	 * Fetch log messages based on Fatal Level
	 * @param request - An object with success and error callbacks.
	 * @return Log object containing fetched Fatal messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByFatal = function(request) {
        return fetchLogsByLevel("FATAL",request);
    };
	
    /**
	 * Fetch log messages based on Fatal Level by paging.
	 * 
	 * @param max
	 *            - Maximum number of records to be fetched
	 * @param offset
	 *            - From where the records are to be fetched
	 * @param request - An object with success and error callbacks.
         * 
	 * @return Log object containing fetched Fatal messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogsByFatalByPaging = function(max, offset,request) {
        return fetchLogsByLevelByPaging("FATAL",max,offset,request);
    };
	
    /**
	 * Fetch log messages based on Date range
	 * 
	 * @param startDate
	 *            - Start date from which the log messages have to be fetched
	 * @param endDate
	 *            - End date up to which the log messages have to be fetched
	 * @param request - An object with success and error callbacks.
	 * @return Log object containing fetched messages
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogByDateRange = function(startDate, endDate,request) {
        if(startDate != null || endDate != null){
			
        }
        if(startDate == "" || startDate == null  || endDate == "" || endDate == null){
            App42Fault.throwExceptionIfNullOrBlank(startDate, "startDate")
            App42Fault.throwExceptionIfNullOrBlank(endDate, "endDate")
            return ;
        }
        strStartDate = getODataUTCDateFilter(startDate) ;
        strEndDate = getODataUTCDateFilter(endDate);
        var URL = App42.URL("log"+ "/"+ "startDate" + "/" + strStartDate + "/" + "endDate" + "/"+ strEndDate);
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.startDate = strStartDate;
        params.endDate = strEndDate;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
	 * Fetch log messages based on Date range by paging.
	 * 
	 * @param startDate
	 *            - Start date from which the log messages have to be fetched
	 * @param endDate
	 *            - End date up to which the log messages have to be fetched
	 * 
	 * @param max
	 *            - Maximum number of records to be fetched
	 * @param offset
	 *            - From where the records are to be fetched
	 * 
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogByDateRangeByPaging = function(startDate, endDate, max, offset,request){
        if(startDate != null || endDate != null){
			
        }
        if(startDate == "" || startDate == null  || endDate == "" || endDate == null){
            App42Fault.throwExceptionIfNullOrBlank(startDate, "startDate")
            App42Fault.throwExceptionIfNullOrBlank(endDate, "endDate")
            return ;
        }
        strStartDate = getODataUTCDateFilter(startDate) ;
        strEndDate = getODataUTCDateFilter(endDate);
        var URL = App42.URL("log"+ "/"+ "paging" + "/" + "startDate" + "/" + strStartDate + "/"+ "endDate" + "/" + strEndDate + "/" + max + "/" + offset);
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.startDate = strStartDate;
        params.endDate = strEndDate;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
	 * Fetch count of log messages based on Date range
	 * 
	 * @param startDate
	 *            - Start date from which the count of log messages have to be fetched
	 *            
	 * @param endDate
	 *            - End date up to which the count of log messages have to be fetched
	 *
	 * @param request - An object with success and error callbacks.
	 * 
	 * @throws App42Exception
	 * 
	 */

    this.fetchLogCountByDateRange = function(startDate, endDate, request) {
        if(startDate != null || endDate != null){
			
        }
        if(startDate == "" || startDate == null  || endDate == "" || endDate == null){
            App42Fault.throwExceptionIfNullOrBlank(startDate, "startDate")
            App42Fault.throwExceptionIfNullOrBlank(endDate, "endDate")
            return ;
        }
        strStartDate = getODataUTCDateFilter(startDate) ;
        strEndDate = getODataUTCDateFilter(endDate);
        var URL = App42.URL("log"+ "/"+ "startDate" + "/" + strStartDate + "/" + "endDate" + "/"+ strEndDate + "/count");
        var params =  __log.populateSignParams(),
        metaHeader =  __log.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.startDate = strStartDate;
        params.endDate = strEndDate;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
	this.setEventWithModuleName = function(moduleName, eventName, request) {
	if(eventName != null){
        eventName = eventName.trim();
    }
    if(eventName == "" || eventName == null){
        App42Fault.throwExceptionIfNullOrBlank(eventName, "eventName")
        return ;
    }
		__log.setModuleEvent(eventName);
       return this.info("EventMessage", moduleName, request)
    };
	
	this.setEvent = function(eventName, request) {
       return this.info(eventName,"_App42_Event", request)
    };
}

function App42ImageProcessor() {
    App42Service.call(this);
    var __image=this;

    this.resize = function(name,imagePath,width,height,request) {
        var URL = App42.URL("image"+"/" + "resize");
        if(name != null && imagePath != null && width  != null && height != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || width == "" || height == null || height == "" || name == null|| imagePath == null|| width == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(width, "width")
            App42Fault.throwExceptionIfNullOrBlank(height, "height")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.width = width ;
        params.height = height;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
	
    this.thumbnail = function(name,imagePath,width,height,request) {
        var URL = App42.URL("image"+"/" + "thumbnail");
        if(name != null && imagePath != null && width  != null && height != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || width == "" || height == null || height == "" || name == null|| imagePath == null|| width == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(width, "width")
            App42Fault.throwExceptionIfNullOrBlank(height, "height")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.width = width ;
        params.height = height;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
	
    this.scale = function(name,imagePath,width,height,request) {
        var URL = App42.URL("image"+"/" + "scale");
        if(name != null && imagePath != null && width  != null && height != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || width == "" || height == null || height == "" || name == null|| imagePath == null|| width == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(width, "width")
            App42Fault.throwExceptionIfNullOrBlank(height, "height")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.width = width ;
        params.height = height;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
	
    this.crop = function(name,imagePath,width,height,x,y,request) {
        var URL = App42.URL("image"+"/" + "crop");
        if(name != null && imagePath != null && width  != null && height != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || width == "" || height == null || height == "" || name == null|| imagePath == null|| width == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(width, "width")
            App42Fault.throwExceptionIfNullOrBlank(height, "height")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.width = width ;
        params.height = height;
        params.x = x;
        params.y = y;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
	
    this.resizeByPercentage = function(name,imagePath,percentage,request) {
        var URL = App42.URL("image"+"/" + "resizePercentage");
        if(name != null && imagePath != null && percentage != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || name == null|| imagePath == null ){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(percentage, "percentage")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.percentage = percentage ;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
	
    this.thumbnailByPercentage = function(name,imagePath,percentage,request) {
        var URL = App42.URL("image"+"/" + "thumbnailPercentage");
        if(name != null && imagePath != null && percentage != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || name == null|| imagePath == null ){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(percentage, "percentage")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.percentage = percentage ;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
	
    this.scaleByPercentage = function(name,imagePath,percentage,request) {
        var URL = App42.URL("image"+"/" + "scalePercentage");
        if(name != null && imagePath != null && percentage != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || name == null|| imagePath == null ){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(percentage, "percentage")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.percentage = percentage ;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
	
    this.convertFormat = function(name,imagePath,formatToConvert,request) {
        var URL = App42.URL("image"+"/" + "convertformat");
        if(name != null && imagePath != null && formatToConvert != null){
            name = name.trim();
        }
        if(name == "" || imagePath == "" || formatToConvert == "" ||  formatToConvert == null ||  name == null|| imagePath == null ){
            App42Fault.throwExceptionIfNullOrBlank(name, "name")
            App42Fault.throwExceptionIfNullOrBlank(imagePath, "imagePath")
            App42Fault.throwExceptionIfNullOrBlank(formatToConvert, "formatToConvert")
            return ;
        }
        var params =  __image.populateSignParams(),
        metaHeader =  __image.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = name;
        params.formatToConvert = formatToConvert ;
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
}
	
	/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
    function clean_hex(input, remove_0x) {
        input = input.toUpperCase();

        if (remove_0x) {
          input = input.replace(/0x/gi, "");
        }

        var orig_input = input;
        input = input.replace(/[^A-Fa-f0-9]/g, "");
        if (orig_input != input)
            alert ("Warning! Non-hex characters in input string ignored.");
        return input;
    }

    var base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    function binary_to_base64(input) {
      var ret = new Array();
      var i = 0;
      var j = 0;
      var char_array_3 = new Array(3);
      var char_array_4 = new Array(4);
      var in_len = input.length;
      var pos = 0;

      while (in_len--)
      {
          char_array_3[i++] = input[pos++];
          if (i == 3)
          {
              char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
              char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
              char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);
              char_array_4[3] = char_array_3[2] & 0x3f;

              for (i = 0; (i <4) ; i++)
                  ret += base64_chars.charAt(char_array_4[i]);
              i = 0;
          }
      }

      if (i)
      {
          for (j = i; j < 3; j++)
              char_array_3[j] = 0;

          char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
          char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
          char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);
          char_array_4[3] = char_array_3[2] & 0x3f;

          for (j = 0; (j < i + 1); j++)
              ret += base64_chars.charAt(char_array_4[j]);

          while ((i++ < 3))
              ret += '=';

      }

      return ret;
    }

    function Convert(hexString) {
      var cleaned_hex = clean_hex(hexString, false);
      if (cleaned_hex.length % 2) {
        alert ("Error: cleaned hex string length is odd.");
        document.frmConvert.base64.value = "";
        return false;
      }
      var binary = new Array();
      for (var i=0; i<cleaned_hex.length/2; i++) {
        var h = cleaned_hex.substr(i*2, 2);
        binary[i] = parseInt(h,16);
      }
      return binary_to_base64(binary);
      //document.frmConvert.base64.value = binary_to_base64(binary);
    }



function App42Geo() {
    App42Service.call(this);
    var __geo=this;
    
    this.createGeoPoints = function(geoStorageName,geoPointsList,request) {
        var URL = App42.URL("geo" + "/" + "createGeoPoints");
        if(geoStorageName != null){
            geoStorageName = geoStorageName.trim();
        }
        if(geoStorageName == ""  || geoStorageName == null || geoPointsList == null|| geoPointsList == "" ){
            App42Fault.throwExceptionIfNullOrBlank(geoStorageName, "geoStorageName")
            App42Fault.throwExceptionIfNullOrBlank(geoPointsList, "geoPointsList")
            return ;
        }
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var pointList = new Array();
        if(geoPointsList instanceof Array){
            for (var i=0;  i<geoPointsList.length; i++){
                var latInArray = geoPointsList[i].lat;
                var lngInArray = geoPointsList[i].lng;
                var markerInArray = geoPointsList[i].marker;
                var arrayInArray={
                    lat:latInArray,
                    lng:lngInArray,
                    marker:markerInArray
                };
                pointList.push(arrayInArray)
            }
        }else{
            var lat = geoPointsList.lat;
            var lng = geoPointsList.lng;
            var marker = geoPointsList.marker;
            var array={
                lat:lat,
                lng:lng,
                marker:marker
            };
            pointList.push(array)
        }
        var encodeJSON = JSON.stringify(pointList);
        var body = '{"app42":{ "geo": {"storage":{"storageName":"'+ geoStorageName + '" , "points": { "point": ' + encodeJSON + '}}}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
        
    };
    
    this.getNearByPointsByMaxDistance = function(storageName, lat, lng, distanceInKM,request) {
        var URL = App42.URL("geo" + "/" + "getNearByPoints" + "/" +"storageName" + "/" + storageName + "/" + "lat" + "/" + lat+ "/" + "lng"+ "/"+ lng + "/" + "distanceInKM" + "/"+distanceInKM);
        if(storageName != null && lat != null && lng != null && distanceInKM != null){
            storageName = storageName.trim();
            
        }
        if(storageName == ""  || storageName == null || lat == null|| lat == "" || lng == null|| lng == "" || distanceInKM == "" || distanceInKM == null){
            App42Fault.throwExceptionIfNullOrBlank(storageName, "storageName")
            App42Fault.throwExceptionIfNullOrBlank(lat, "lat")
            App42Fault.throwExceptionIfNullOrBlank(lng, "lng")
            App42Fault.throwExceptionIfNullOrBlank(distanceInKM, "distanceInKM")
            return ;
        }
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.storageName = storageName;
        params.lat = lat;
        params.lng = lng;
        params.distanceInKM = distanceInKM;
        App42Connection.get(URL, params,request, null, headerParams);
      
    };
    
    this.getNearByPoint = function(storageName, lat, lng, resultLimit,request) {
        var URL = App42.URL("geo" +"/" +"getNearByPoint" + "/" + "storageName" + "/" + storageName + "/" + "lat" + "/" + lat + "/" + "lng" + "/" + lng + "/" + "limit" + "/" + resultLimit);
        if(storageName != null && lat != null && lng != null && resultLimit != null){
            storageName = storageName.trim();
           
        }
        if(storageName == ""  || storageName == null || lat == null|| lat == "" || lng == null|| lng == "" || resultLimit == "" || resultLimit == null){
            App42Fault.throwExceptionIfNullOrBlank(storageName, "storageName")
            App42Fault.throwExceptionIfNullOrBlank(lat, "lat")
            App42Fault.throwExceptionIfNullOrBlank(lng, "lng")
            App42Fault.throwExceptionIfNullOrBlank(resultLimit, "resultLimit")
            return ;
        }
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.storageName = storageName;
        params.lat = lat;
        params.lng = lng;
        params.resultLimit = resultLimit;
        App42Connection.get(URL, params,request, null, headerParams);
        
       
    };
    
    this.getPointsWithInCircle = function(storageName, lat, lng,radiusInKM, resultLimit, request) {
        var URL = App42.URL("geo" +"/"+ "getPointsWithInCircle"+ "/" + "storageName" + "/" + storageName + "/" + "lat" + "/" + lat + "/" + "lng" + "/" + lng + "/" + "radiusInKM" + "/" + radiusInKM + "/" + "limit" + "/" + resultLimit);
        if(storageName != null && lat != null && lng != null && radiusInKM !=null && resultLimit != null){
            storageName = storageName.trim();
            
        }
        if(storageName == ""  || storageName == null || lat == null|| lat == "" || lng == null|| lng == "" || radiusInKM == "" || radiusInKM == null || resultLimit == "" || resultLimit == null){
            App42Fault.throwExceptionIfNullOrBlank(storageName, "storageName")
            App42Fault.throwExceptionIfNullOrBlank(lat, "lat")
            App42Fault.throwExceptionIfNullOrBlank(lng, "lng")
            App42Fault.throwExceptionIfNullOrBlank(radiusInKM, "radiusInKM")
            App42Fault.throwExceptionIfNullOrBlank(resultLimit, "resultLimit")
            return ;
        }
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.storageName = storageName;
        params.lat = lat;
        params.lng = lng;
        params.resultLimit = resultLimit;
        params.radiusInKM = radiusInKM;
        App42Connection.get(URL, params,request, null, headerParams);
     
    };
    
    this.getAllPoints = function(storageName,request) {
        var URL = App42.URL("geo" + "/" + "points" + "/" + storageName);
        if (storageName != null){
            storageName = storageName.trim();
        }
        if (storageName == "" || storageName == null ){
            App42Fault.throwExceptionIfNullOrBlank(storageName, "storageName")
            return ;
        }
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.storageName = storageName;
        App42Connection.get(URL, params,request, null, headerParams);
        
    };
    
    this.getAllStorage = function(request) {
        var URL = App42.URL("geo" + "/" + "storage");
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request, null, headerParams);
       
    };
	
    this.getAllStorageByPaging = function(max,offset,request) {
        var URL = App42.URL("geo" + "/paging"+ "/" + max + "/" + offset);
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params,request, null, headerParams);
       
    };
    
    this.deleteStorage = function(storageName, request) {
        var URL = App42.URL("geo" + "/storage" + "/" + storageName);
        if (storageName != null){
            storageName = storageName.trim();
        }
        if (storageName == "" || storageName == null ){
            App42Fault.throwExceptionIfNullOrBlank(storageName, "storageName")
            return ;
        }
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.storageName = storageName;
        App42Connection.del(URL, params, request, headerParams);
    };
	
    this.deleteGeoPoints = function(storageName,geoPointsList,request) {
        var URL = App42.URL("geo" + "/" + "points" + "/" + storageName);
        if (storageName != null){
            storageName = storageName.trim();
        }
        if (storageName == "" || storageName == null ){
            App42Fault.throwExceptionIfNullOrBlank(storageName, "storageName")
            return ;
        }
        var pointList = new Array();
        if(geoPointsList instanceof Array){
            for (var i=0;  i<geoPointsList.length; i++){
                var latInArray = geoPointsList[i].lat;
                var lngInArray = geoPointsList[i].lng;
                var markerInArray = geoPointsList[i].marker;
                var arrayInArray={
                    lat:latInArray,
                    lng:lngInArray,
                    marker:markerInArray
                };
                pointList.push(arrayInArray)
            }
        }else{
            var lat = geoPointsList.lat;
            var lng = geoPointsList.lng;
            var marker = geoPointsList.marker;
            var array={
                lat:lat,
                lng:lng,
                marker:marker
            };
            pointList.push(array)
        }
		
        var encodeJSON = JSON.stringify(pointList);
        var poit = '{ "point": ' + encodeJSON + '}'
        var getSting = JSON.stringify(poit);
        var body = '{"app42":{ "geo": {"storage":{"points": '+ getSting +'}}}}';
        var params =  __geo.populateSignParams(),
        metaHeader =  __geo.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.geoPoints = body;
        App42Connection.del(URL, params,request, headerParams);
        
    };
    
}


function App42Game() {
    App42Service.call(this);
    var __game=this;
    /**
     * This function lets you create a game on the cloud.
     * @param gameName - Game name to be created.
     * @param gameDescription - Description of the game to be created.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     */
    this.createGame = function(gameName, gameDescription,request) {
        var URL = App42.URL("game");
        if(gameName != null && gameDescription != null){
            gameName = gameName.trim();
            gameDescription = gameDescription.trim();
        }
        if(gameName == "" || gameDescription == "" || gameName == null || gameDescription == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            App42Fault.throwExceptionIfNullOrBlank(gameDescription, "gameDescription")
            return ;
        }
        var params =  __game.populateSignParams(),
        metaHeader =  __game.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"game":{"name":"' + gameName + '","description":"' + gameDescription + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
     * This function provides details of all existing games in the App .
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     */
    this.getAllGames = function(request) {

        var URL = App42.URL("game");
        var params =  __game.populateSignParams(),
        metaHeader =  __game.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    /**
     * This function provides details of all existing games in the App starting from the specified index location till maximum number of records.
     * @param max - Maximum number of records to be fetched.
     * @param offset - Starting index location.
     * @param request - An object with success and error callbacks.
     * @throws App42Exception
     *
     */	
    this.getAllGamesWithPaging = function(max, offset,request) {
        var URL = App42.URL("game/paging/"+max+"/"+offset);
        var params =  __game.populateSignParams(),
        metaHeader =  __game.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params,request, null, headerParams);
    };
      
    /**
     * This function retrieves the game details for  the specified game name.
     *
     * @param gameName - Name of the game to be fetched.
     * @param request - An object with success and error callbacks.
     * @param return - Game instance.
     * @throws App42Exception
     *
     */
    this.getGameByName = function(gameName,request) {
        var URL = App42.URL("game/"+gameName);
        if(gameName != null){
            gameName = gameName.trim();
        }
        if(gameName == "" || gameName == null){
            App42Fault.throwExceptionIfNullOrBlank(gameName, "gameName")
            return ;
        }
        var params =  __game.populateSignParams(),
        metaHeader =  __game.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.name = gameName;
        App42Connection.get(URL, params,request, null, headerParams);
       
    };
    this.getAllGamesCount = function(request) {
        var URL = App42.URL("game"+"/count");
        var params =  __game.populateSignParams(),
        metaHeader =  __game.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request, null, headerParams);
		
    };
    
}


function App42Catalogue() {
    App42Service.call(this);
    var __catalogue=this; 

    this.createCatalogue = function(catalogueName, catalogueDescription,request) {
        var URL = App42.URL("catalogue");
        if(catalogueName != null && catalogueDescription != null ){
            catalogueName = catalogueName.trim();
            catalogueDescription =catalogueDescription.trim();
        }
        if(catalogueName == "" || catalogueDescription == "" || catalogueName == null || catalogueDescription == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(catalogueDescription, "catalogueDescription")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body =  '{"app42":{"catalogue":{"name":"' + catalogueName + '","description":"' + catalogueDescription + '"}}}';
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
	   
    };
    
    this.createCategory = function(catalogueName,categoryName, categoryDescription,request) {
        var URL = App42.URL("catalogue" + "/" +catalogueName + "/" + "category");
        if(catalogueName != null && categoryName != null && categoryDescription != null ){
            catalogueName = catalogueName.trim();
            categoryName = categoryName.trim();
            categoryDescription =categoryDescription.trim();
        }
        if(catalogueName == "" || categoryDescription == "" || categoryName == "" || catalogueName == null || categoryDescription == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(categoryDescription, "categoryDescription")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body =  '{"app42":{"catalogue":{"categories":{"category":{"name":"' + categoryName + '","description":"' + categoryDescription + '"}}}}}';
        params.catalogueName = catalogueName;       
        params.body = body;
        App42Connection.post(URL, params, body, request, headerParams);
    };
   
    this.addItem = function(catalogueName,categoryName, itemData,request) {
        var URL = App42.URL("catalogue"+ "/" + catalogueName + "/" + categoryName	+ "/item");
        if(catalogueName != null && categoryName != null ){
            catalogueName = catalogueName.trim();
            categoryName =categoryName.trim();
        }
        if(catalogueName == "" || categoryName == "" || catalogueName == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        params.itemId = itemData.getItemId();
        params.name = itemData.getName();
        params.description = itemData.getDescription();
        params.price = itemData.getPrice();
        var  imagePath = itemData.getImage();
        App42Connection.multipart(URL, params, imagePath, request, headerParams);
    };
    
    this.getItems = function(catalogueName,request) {
        var URL = App42.URL("catalogue" + "/" +catalogueName );
        if(catalogueName != null ){
            catalogueName = catalogueName.trim();
        }
        if(catalogueName == "" || catalogueName == null ){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    
    this.getItemsByCategory = function(catalogueName, categoryName,request) {
        var URL = App42.URL("catalogue" + "/" +catalogueName +"/"+categoryName );
        if(catalogueName != null && categoryName != null ){
            catalogueName = catalogueName.trim();
            categoryName =categoryName.trim();
        }
        if(catalogueName == "" || categoryName == "" || catalogueName == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
		
    this.getItemsByCategoryWithPaging = function(catalogueName, categoryName, max, offset,request)	{
        var URL = App42.URL("catalogue" +"/"+"paging" + "/" +catalogueName +"/"+categoryName+"/"+max+"/"+offset) ;
        if(catalogueName != null && categoryName != null ){
            catalogueName = catalogueName.trim();
            categoryName =categoryName.trim();
        }
        if(catalogueName == "" || categoryName == "" || max == ""  || max == null || offset == ""  || offset == null || catalogueName == null || categoryName == null ){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            App42Fault.throwExceptionIfNullOrBlank(max, "max")
            App42Fault.throwExceptionIfNullOrBlank(offset, "offset")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        params.max = max;
        params.offset = offset;
        App42Connection.get(URL, params,request, null, headerParams);
    };
        

    
    this.getItemsCountByCategory = function(catalogueName, categoryName,request) {
        var URL = App42.URL("catalogue" + "/" +catalogueName +"/"+categoryName +"/count");
        if(catalogueName != null && categoryName != null ){
            catalogueName = catalogueName.trim();
            categoryName =categoryName.trim();
        }
        if(catalogueName == "" || categoryName == "" || catalogueName == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    
    this.getItemById = function(catalogueName, categoryName, itemId,request) {
        var URL = App42.URL("catalogue" + "/" +catalogueName +"/"+categoryName +"/"+itemId);
        if(catalogueName != null && categoryName != null && itemId != null ){
            catalogueName = catalogueName.trim();
            categoryName = categoryName.trim();
            itemId =itemId.trim();
        }
        if(catalogueName == "" || itemId == "" || categoryName == "" || catalogueName == null || itemId == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(itemId, "itemId")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        params.itemId = itemId;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    
    this.removeAllItems = function(catalogueName,request) {
        var URL = App42.URL("catalogue" + "/" +catalogueName );
        if(catalogueName != null ){
            catalogueName = catalogueName.trim();
        }
        if(catalogueName == "" || catalogueName == null ){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        App42Connection.del(URL, params,request, headerParams);
    };
    
    this.removeItemsByCategory = function(catalogueName, categoryName,request) {
        var URL = App42.URL("catalogue" + "/" +catalogueName+"/"+categoryName) ;
        if(catalogueName != null && categoryName != null ){
            catalogueName = catalogueName.trim();
            categoryName =categoryName.trim();
        }
        if(catalogueName == "" || categoryName == "" || catalogueName == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        App42Connection.del(URL, params,request, headerParams);
    };
    
    this.removeItemById = function(catalogueName, categoryName, itemId,request) {
        var URL = App42.URL("catalogue" +"/" +catalogueName+"/"+categoryName+"/"+itemId) ;
        if(catalogueName != null && categoryName != null && itemId != null ){
            catalogueName = catalogueName.trim();
            categoryName = categoryName.trim();
            itemId =itemId.trim();
        }
        if(catalogueName == "" || itemId == "" || categoryName == "" || catalogueName == null || itemId == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(itemId, "itemId")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        params.itemId = itemId;
        App42Connection.del(URL, params,request, headerParams);
    };
	
    this.deleteCategory = function(catalogueName, categoryName,request) {
        var URL = App42.URL("catalogue" +"/"+ catalogueName + "/category" + "/" + categoryName) ;
        if(catalogueName != null && categoryName != null ){
            catalogueName = catalogueName.trim();
            categoryName =categoryName.trim();
        }
        if(catalogueName == "" || categoryName == "" || catalogueName == null || categoryName == null){
            App42Fault.throwExceptionIfNullOrBlank(catalogueName, "catalogueName")
            App42Fault.throwExceptionIfNullOrBlank(categoryName, "categoryName")
            return ;
        }
        var params =  __catalogue.populateSignParams(),
        metaHeader =  __catalogue.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.catalogueName = catalogueName;
        params.categoryName = categoryName;
        App42Connection.del(URL, params,request, headerParams);
    };
    
}


var _status = {
    DECLINED :"DECLINED",
    AUTHORIZED : "AUTHORIZED",
    PENDING :"PENDING"
};
function checkStatus(PaymentStatus){
    if(_status.DECLINED == PaymentStatus || _status.AUTHORIZED == PaymentStatus || _status.PENDING == PaymentStatus){
        return PaymentStatus;
    }
    else{
        throw new App42Exception("PaymentStatus", PaymentStatus);
    }
}

function App42Cart() {
    App42Service.call(this);
    var __cart=this;  
	
    this.createCart = function(user,request) {
        var URL = App42.URL("cart");
        if(user != null){
            user = user.trim();
        }
        if(user == ""|| user == null){
            App42Fault.throwExceptionIfNullOrBlank(user, "user")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body =  '{"app42":{"cart":{"userName":"'+ user + '"}}}';
        params.body = body;
        App42Connection.post(URL, params, body,request, headerParams);
    };
    
    this.getCartDetails = function(cartId,request) {
        if(cartId != null){
            cartId = cartId.trim();
           
        }
        if(cartId == ""|| cartId == null){
            App42Fault.throwExceptionIfNullOrBlank(cartId, "cartId")
            return ;
        }
        var URL = App42.URL("cart" + "/" + cartId + "/details");
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.cartId = cartId;
        App42Connection.get(URL, params,request, null, headerParams);
        
    };
	
    this.addItem = function(cartID,itemID,itemQuantity,price,request) {
        var URL = App42.URL("cart" + "/item/" + itemID);
        if(cartID != null && itemID != null ){
            cartID = cartID.trim();
            itemID =itemID.trim();
        }
        if(cartID == "" || itemID == "" || cartID == null || itemID == null || itemQuantity == "" || itemQuantity == null || price == "" || price == null ){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            App42Fault.throwExceptionIfNullOrBlank(itemQuantity, "itemQuantity")
            App42Fault.throwExceptionIfNullOrBlank(price, "price")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.itemId = itemID;
        var body  =  '{"app42":{"cart":{"cartId":"'+ cartID + '", "item":{"quantity":"'+ itemQuantity +  '","amount":"'+ price+'"}}}}';
        params.body = body;
        App42Connection.post(URL, params, body,request, headerParams);
        
        
    };
    this.getItems = function(cartID,request) {
        var URL = App42.URL("cart" + "/"+ cartID);
        if(cartID != null){
            cartID = cartID.trim();
           
        }
        if(cartID == ""|| cartID == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.cartId = cartID;
        App42Connection.get(URL, params,request ,null, headerParams);
        
    };
    this.getItem = function(cartID,itemID,request) {
        var URL = App42.URL("cart" + "/"+ cartID + "/" + itemID);
        if(cartID != null && itemID != null ){
            cartID = cartID.trim();
            itemID =itemID.trim();
        }
        if(cartID == "" || itemID == "" || cartID == null || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.cartId = cartID;
        params.itemId = itemID;
        App42Connection.get(URL, params,request , null, headerParams);
        
    };
    this.removeAllItems = function(cartID,request) {
        var URL = App42.URL("cart" + "/"+ cartID);
        if(cartID != null){
            cartID = cartID.trim();
           
        }
        if(cartID == ""|| cartID == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.cartId = cartID;
        App42Connection.del(URL, params,request, headerParams);
        
    };
    this.removeItem = function(cartID,itemID,request) {
        var URL = App42.URL("cart" + "/"+ cartID + "/" + itemID);
        if(cartID != null && itemID != null ){
            cartID = cartID.trim();
            itemID =itemID.trim();
        }
        if(cartID == "" || itemID == "" || cartID == null || itemID == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.cartId = cartID;
        params.itemId = itemID;
        App42Connection.del(URL, params,request, headerParams);
    };
    this.isEmpty = function(cartID,request) {
        var URL = App42.URL("cart" +"/"+ cartID + "/isEmpty");
        if(cartID != null){
            cartID = cartID.trim();
           
        }
        if(cartID == ""|| cartID == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.cartId = cartID;
        App42Connection.get(URL, params,request , null, headerParams);
       
    };
    this.checkOut = function(cartID,request) {
        var URL = App42.URL("cart" + "/checkOut")
        if(cartID != null){
            cartID = cartID.trim();
           
        }
        if(cartID == ""|| cartID == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body =  '{"app42":{"cart":{"cartId":"'+ cartID +'"}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);

        
    };
    this.payment = function(cartID,transactionID,paymentStatus,request) {
        var URL = App42.URL("cart" + "/payment");
        if(cartID != null && transactionID != null ){
            cartID = cartID.trim();
            transactionID =transactionID.trim();
        }
        if(cartID == "" || transactionID == "" || paymentStatus == "" || cartID == null || transactionID == null || paymentStatus == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            App42Fault.throwExceptionIfNullOrBlank(transactionID, "transactionID")
            App42Fault.throwExceptionIfNullOrBlank(paymentStatus, "paymentStatus")
            return ;
        }
        checkStatus(paymentStatus);
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"cart":{"cartId":"' + cartID +  '","transactionId":"' + transactionID + '","status":"'+ paymentStatus +'"}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
  
    };
    this.getPaymentsByUser = function(userID,request) {
        var URL = App42.URL("cart" +"/payments" + "/user" + "/" + userID);
        if(userID != null){
            userID = userID.trim();
           
        }
        if(userID == ""|| userID == null){
            App42Fault.throwExceptionIfNullOrBlank(userID, "userID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userId = userID;
        App42Connection.get(URL, params,request , null, headerParams);
        
    };
    
    this.getPaymentByCart = function(cartID,request) {
        var URL = App42.URL("cart" + "/payments/cart/" + cartID);
        if(cartID != null){
            cartID = cartID.trim();
        }
        if(cartID == ""|| cartID == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.cartId = cartID;
        App42Connection.get(URL, params,request , null, headerParams);
        
    };
    
    this.getPaymentsByUserAndStatus = function(userID,paymentStatus,request) {
        var URL = App42.URL("cart" +"/payments" + "/user" + "/" + userID + "/"+ paymentStatus);
        if(userID != null){
            userID = userID.trim();
        }
        if(userID == ""|| userID == null || paymentStatus == ""|| paymentStatus == null){
            App42Fault.throwExceptionIfNullOrBlank(userID, "userID")
            App42Fault.throwExceptionIfNullOrBlank(paymentStatus, "paymentStatus")
            return ;
        }
        checkStatus(paymentStatus);
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userId = userID;
        params.status = paymentStatus;
        App42Connection.get(URL, params,request , null, headerParams);
        
    };
    this.getPaymentsByStatus = function(paymentStatus,request) {
        var URL = App42.URL("cart" + "/payments" + "/status" + "/" + paymentStatus);
        if(paymentStatus == ""|| paymentStatus == null){
            App42Fault.throwExceptionIfNullOrBlank(paymentStatus, "paymentStatus")
            return ;
        }
        checkStatus(paymentStatus);
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.status = paymentStatus;
        App42Connection.get(URL, params,request , null, headerParams);
    };
    
    this.getPaymentHistoryByUser = function(userID,request) {
        var URL = App42.URL("cart" + "/payment" + "/history" + "/" + userID);
        if(userID != null){
            userID = userID.trim();
        }
        if(userID == ""|| userID == null){
            App42Fault.throwExceptionIfNullOrBlank(userID, "userID")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userId = userID;
        App42Connection.get(URL, params,request , null, headerParams);
    };
    
    this.getPaymentHistoryAll = function(request) {
        var URL = App42.URL("cart" + "/payment" + "/history");
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        App42Connection.get(URL, params,request, null, headerParams);
        
    };
    
    this.increaseQuantity = function(cartID,itemID,itemQuantity,request) {
        var URL = App42.URL("cart" + "/increaseQuantity");
        if(cartID != null && itemID != null ){
            cartID = cartID.trim();
            itemID =itemID.trim();
        }
        if(cartID == "" || itemID == "" || itemQuantity == "" || cartID == null || itemID == null || itemQuantity == null){
            App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
            App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
            App42Fault.throwExceptionIfNullOrBlank(itemQuantity, "itemQuantity")
            return ;
        }
        var params =  __cart.populateSignParams(),
        metaHeader =  __cart.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"cart":{"cartId":"'+ cartID + '","itemId":"'+ itemID + '","quantity":"'+ itemQuantity + '"}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
        
    };
    
    this.decreaseQuantity = function(cartID,itemID,itemQuantity,request) {
        var URL = App42.URL("cart" + "/decreaseQuantity");
        if(cartID != null && itemID != null ){
            cartID = cartID.trim();
            itemID =itemID.trim();
            if(cartID == "" || itemID == "" || itemQuantity == "" || cartID == null || itemQuantity == null){
                App42Fault.throwExceptionIfNullOrBlank(cartID, "cartID")
                App42Fault.throwExceptionIfNullOrBlank(itemID, "itemID")
                App42Fault.throwExceptionIfNullOrBlank(itemQuantity, "itemQuantity")
                return ;
            }
            var params =  __cart.populateSignParams(),
            metaHeader =  __cart.populateMetaHeaderParams(),
            headerParams = __merge(params,metaHeader);
            var body = '{"app42":{"cart":{"cartId":"'+ cartID + '","itemId":"'+ itemID + '","quantity":"'+ itemQuantity + '"}}}';
            params.body = body;
            App42Connection.put(URL, params,body,request, headerParams);
        };
    }
}


function App42Buddy() {
    App42Service.call(this);
    var __buddy=this;
    /**
	 * Send friend request allow you to send the buddy request to the user.
	 * @param userName - Name of the user who wanted to send the request to the buddy.
	 * @param buddyName - Name of buddy for whom you sending the request.
	 * @param message - Message to the user.
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.sendFriendRequest = function(userName, buddyName, message, request) {
        var URL = App42.URL("buddy")
        if(userName != null && buddyName != null){
            userName = userName.trim();
            buddyName = buddyName.trim();
        }
        if(userName == "" || buddyName == "" || userName == null || buddyName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","buddyName":"'+ buddyName + '","message":"'+ message + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    /**
	 * Fetch all the friend request for the user.
	 * @param userName - Name of user for which request has to be fetched.
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.getFriendRequest = function(userName,request) {
        var URL = App42.URL("buddy" +"/" + userName)
        if(userName != null ){
            userName = userName.trim();
        }
        if(userName == "" || userName == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    /**
	 * Accept the friend request of the user.
	 * @param userName - Name of the user who is going to accept the request.
	 * @param buddyName - Name of the buddy whose request has to be accepted.
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.acceptFriendRequest = function(userName,buddyName,request) {
        var URL = App42.URL("buddy")
        if(userName != null && buddyName != null){
            userName = userName.trim();
            buddyName = buddyName.trim();
        }
        if(userName == "" || buddyName == "" || userName == null || buddyName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","buddyName":"'+ buddyName + '"}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
    /**
	 * Reject the friend request of the user. 
	 * @param userName - Name of the user who is going to reject the request.
	 * @param buddyName - Name of the buddy whose request has to be rejected.
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.rejectFriendRequest = function(userName,buddyName,request) {
        var URL = App42.URL("buddy"+ "/userName/" + userName + "/buddyName/" + buddyName)
        if(userName != null && buddyName != null){
            userName = userName.trim();
            buddyName = buddyName.trim();
        }
        if(userName == "" || buddyName == "" || userName == null || buddyName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.buddyName = buddyName;
        App42Connection.del(URL, params,request, headerParams);
    };
    /**
	 * Fetch All the friends of the the user. 
	 * @param userName - Name of the user for which friends have to be fetched.
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.getAllFriends = function(userName,request) {
        var URL = App42.URL("buddy" + "/friends/" + userName);
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.createGroupByUser = function(userName,groupName,request) {
        var URL = App42.URL("buddy" + "/group")
        if(userName != null && groupName != null){
            userName = userName.trim();
            groupName = groupName.trim();
        }
        if(userName == "" || groupName == "" || userName == null || groupName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(groupName, "groupName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","groupName":"'+ groupName + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.addFriendToGroup = function(userName,groupName,friends,request) {
        var URL = App42.URL("buddy" + "/group/friends")
        if(userName != null && groupName != null){
            userName = userName.trim();
            groupName = groupName.trim();
        }
        if(userName == "" || groupName == "" || userName == null || groupName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(groupName, "groupName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var stringfy = JSON.stringify(friends)
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","groupName":"'+ groupName + '","friends":{"friend":' + stringfy + '}}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.checkedInGeoLocation = function(userName,geoPointsList,request) {
        var URL = App42.URL("buddy" + "/checkedIn")
        
        if(userName != null){
            userName = userName.trim();
        }
        if(userName == "" || geoPointsList == "" || userName == null || geoPointsList == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(geoPointsList, "geoPointsList")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var arrayInArray ={};
        var lat = geoPointsList.lat;
        var lng = geoPointsList.lng;
        var marker = geoPointsList.marker;
        var array={
            lat:lat,
            lng:lng,
            marker:marker
        };
        var stringfy = JSON.stringify(array)
        var signify = '{"point":' + stringfy + '}'
        
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","points":' + signify + '}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.getFriendsByLocation = function(userName, latitude,longitude, maxDistance, max,request) {
        var URL = App42.URL("buddy" + "/friends/location/" + userName + "/" + maxDistance + "/"	+ latitude + "/" + longitude + "/" + max);
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;		
        params.maxDistance = maxDistance;
        params.latitude = latitude;		
        params.longitude = longitude;		
        params.max = max;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getAllGroups = function(userName,request) {
        var URL = App42.URL("buddy" + "/groupall/" + userName);
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getAllFriendsInGroup = function(userName,ownerName,groupName,request) {
        var URL = App42.URL("buddy" + "/friends/" + userName + "/group/" + ownerName + "/" + groupName);
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.ownerName = ownerName;
        params.groupName = groupName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    
    this.blockFriendRequest = function(userName, buddyName, request) {
        var URL = App42.URL("buddy" + "/block/userName/" + userName + "/buddyName/" + buddyName);
        if (buddyName != null && userName != null){
            buddyName = buddyName.trim();
            userName = userName.trim();
        }
        if (userName == "" || userName == null || buddyName == "" || buddyName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.buddyName = buddyName;
        App42Connection.del(URL, params ,request, headerParams);
    };
	
    this.blockUser = function(userName,buddyName,request) {
        var URL = App42.URL("buddy" + "/block")
        if(userName != null && buddyName != null){
            userName = userName.trim();
            buddyName = buddyName.trim();
        }
        if(userName == "" || buddyName == 
            +"" || userName == null || buddyName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","buddyName":"'+ buddyName + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.unblockUser = function(userName,buddyName,request) {
        var URL = App42.URL("buddy" + "/unblock")
        if(userName != null && buddyName != null){
            userName = userName.trim();
            buddyName = buddyName.trim();
        }
        if(userName == "" || buddyName == 
            +"" || userName == null || buddyName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","buddyName":"'+ buddyName + '"}}}';
        params.body = body;
        App42Connection.put(URL, params,body,request, headerParams);
    };
    this.sendMessageToGroup = function(userName,ownerName,groupName,message,request) {
        var URL = App42.URL("buddy" + "/groupmessage")
        if(userName != null && ownerName != null && groupName != null && message != null){
            userName = userName.trim();
            ownerName = ownerName.trim();
            groupName = groupName.trim();
            message = message.trim();
        }
        if(userName == "" || ownerName == "" || groupName == null || message == null || userName == "" || ownerName == "" || groupName == null || message == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(ownerName, "ownerName")
            App42Fault.throwExceptionIfNullOrBlank(groupName, "groupName")
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","ownerName":"'+ ownerName + '","groupName":"' + groupName + '","message":"'+ message + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
    this.sendMessageToFriend= function(userName,buddyName,message,request) {
        var URL = App42.URL("buddy" + "/friendmessage")
        if(userName != null && buddyName != null && message != null){
            userName = userName.trim();
            buddyName = buddyName.trim();
            message = message.trim();
        }
        if(userName == "" || buddyName == "" || message == null || userName == "" || buddyName == "" || message == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(buddyName, "buddyName")
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","buddyName":"'+ buddyName + '","message":"'+ message + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.sendMessageToFriends= function(userName,message,request) {
        var URL = App42.URL("buddy" + "/messageAll")
        if(userName != null &&  message != null){
            userName = userName.trim();
            message = message.trim();
        }
        if(userName == "" || message == null || userName == "" || message == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"buddy":{"userName":"' + userName + '","message":"'+ message + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
    this.getAllMessages = function(userName,request) {
        var URL = App42.URL("buddy" + "/message/" + userName);
        if(userName != null ){
            userName = userName.trim();
        }
        if(userName == "" || userName == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getAllMessagesFromBuddy = function(userName,buddyName,request) {
        var URL = App42.URL("buddy" + "/buddyMessage/" + userName + "/" + buddyName);
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.buddyName = buddyName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
    this.getAllMessagesFromGroup = function(userName,groupOwner,groupName,request) {
        var URL = App42.URL("buddy" + "/"+ userName + "/groupMassaage/" + groupOwner + "/"+ groupName);
        if(userName != null && groupOwner != null && groupName != null){
            userName = userName.trim();
            groupOwner = groupOwner.trim();
            groupName = groupName.trim();
        }
        if(userName == "" || groupOwner == "" || groupName == null  || userName == "" || groupOwner == "" || groupName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(groupOwner, "groupOwner")
            App42Fault.throwExceptionIfNullOrBlank(groupName, "groupName")
            return ;
        }
        var params =  __buddy.populateSignParams(),
        metaHeader =  __buddy.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.ownerName = groupOwner;
        params.groupName = groupName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
	
}


function App42Avatar() {
    App42Service.call(this);
    var __avatar=this;
    
    /**
 * Creates Avatar.
 * @param name
 * @param userName
 * @param filePath
 * @param description
 * @param request - request for callback.
 * @throws App42Exception
 */
    this.createAvatar = function(name, userName, filePath, description, request) {
        var URL = App42.URL("avatar" + "/file/" + userName)
        if(name != null && userName != null){
            name = name.trim();
            userName = userName.trim();
        }
        if(name == "" || userName == "" || filePath == "" || description == "" || name == null|| userName == null || filePath == null || description == null){
            App42Fault.throwExceptionIfNullOrBlank(name, "AvatarName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(filePath, "filePath")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            return ;
        }
        var params =  __avatar.populateSignParams(),
        metaHeader =  __avatar.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.avatarName = name;
        params.userName = userName;
        params.description = description;
        App42Connection.multipart(URL,params,filePath,request, headerParams);
    };
	     
             
	
	this.createAvatarFromFacebook = function(avatarName,userName,accessToken, description, request) {
		if(avatarName != null && userName != null){
            name = name.trim();
            userName = userName.trim();
        }
        if(avatarName == "" || userName == "" || accessToken == "" || description == "" || avatarName == null|| userName == null || accessToken == null || 			description == null){
            App42Fault.throwExceptionIfNullOrBlank(avatarName, "avatarName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(accessToken, "accessToken")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            return ;
        }
	
        var URL = App42.URL("avatar" + "/facebook")
        var params =  __avatar.populateSignParams(),
        metaHeader =  __avatar.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"avatar":{"userName":"' + userName + '","avatarName":"'+ avatarName + '","accessToken":"'+ accessToken + '","description":"'+ description + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
	
	
	this.createAvatarFromWebURL = function(avatarName,userName,webUrl, description, request) {
		if(avatarName != null && userName != null){
            name = name.trim();
            userName = userName.trim();
        }
        if(avatarName == "" || userName == "" || webUrl == "" || description == "" || avatarName == null|| userName == null || webUrl == null || 			description == null){
            App42Fault.throwExceptionIfNullOrBlank(avatarName, "avatarName")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(webUrl, "webUrl")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            return ;
        }
	
        var URL = App42.URL("avatar" +"/weburl")
        var params =  __avatar.populateSignParams(),
        metaHeader =  __avatar.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"avatar":{"userName":"' + userName + '","avatarName":"'+ avatarName + '","webUrl":"'+ webUrl + '","description":"'+ description + '"}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
	
    
    /**
	 * Gets a particular avatar by name.
	 * @param userName
	 * @param avatarName
	 * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.getAvatarByName = function(avatarName, userName, request) {
        var URL = App42.URL("avatar" +"/" + userName +"/" + avatarName)
        if(userName != null && avatarName != null ){
            userName = userName.trim();
            avatarName = avatarName.trim();
        }
        if(userName == "" || avatarName == "" || userName == null || avatarName == null ){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(avatarName, "avatarName")
            return ;
        }
        var params =  __avatar.populateSignParams(),
        metaHeader =  __avatar.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        params.avatarName = avatarName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    
    /**
	 * Gets All Avatar Created By Given UserName.
	 * @param userName 
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.getAllAvatars = function(userName,request) {
        var URL = App42.URL("avatar" +"/" + userName)
        if(userName != null){
            userName = userName.trim();
        }
        if(userName == "" || userName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __avatar.populateSignParams(),
        metaHeader =  __avatar.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    
    /**
	 * Gets Current Avatar.
	 * @param userName.
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.getCurrentAvatar = function(userName,request) {
        var URL = App42.URL("avatar" + "/current/" + userName)
        if(userName != null){
            userName = userName.trim();
        }
        if(userName == "" || userName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __avatar.populateSignParams(),
        metaHeader =  __avatar.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        params.userName = userName;
        App42Connection.get(URL, params,request, null, headerParams);
    };
    
    /**
	 * Updates Avatar.
	 * @param userName
	 * @param avatarName
         * @param request - request for callback.
	 * @throws App42Exception
	 */
    this.changeCurrentAvatar = function(userName, avatarName, request) {
        var URL = App42.URL("avatar");
        if(userName != null && avatarName != null){
            userName = userName.trim();
            avatarName = avatarName.trim();
        }
        if(userName == "" || avatarName == "" || userName == null || avatarName == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(avatarName, "avatarName")
            return ;
        }
        var params =  __avatar.populateSignParams(),
        metaHeader =  __avatar.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"avatar":{"userName":"'+userName+'","avatarName":"'+avatarName+'"}}}'
        params.body = body;
        App42Connection.put(URL, params, body,request, headerParams);
    };
	
}




var myObject = {
    ANDROID :"ANDROID",
    iOS : "iOS",
    WP7 :"WP7",
    
};
function checkDeviceType(DeviceType){
    if(myObject.ANDROID == DeviceType || myObject.iOS == DeviceType || myObject.WP7 == DeviceType){
        return DeviceType;
    }
    else{
        throw new App42Exception("DeviceType", DeviceType);
    }
}


function App42Push() {
		
		App42Service.call(this);
		var __push=this;
	
    this.storeDeviceToken = function(userName,deviceToken,deviceType,request) {
        var URL = App42.URL("push"+ "/storeDeviceToken/"+userName);
		checkDeviceType(deviceType);
        if(userName != null && deviceToken != null && deviceType != null){
            userName = userName.trim();
            deviceToken = deviceToken.trim();
            deviceType = deviceType.trim();
        }
        if(userName == "" || deviceToken == "" || deviceType == "" || userName == null|| deviceToken == null|| deviceType == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(deviceToken, "deviceToken")
            App42Fault.throwExceptionIfNullOrBlank(deviceType, "deviceType")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"userName":"' + userName + '","deviceToken":"' + deviceToken + '","type":"' + deviceType + '"}}}';
        params.body = body;
		App42Connection.post(URL, params,body,request, headerParams);
    };

    this.createChannelForApp = function(channel,description,request) {
        var URL = App42.URL("push"+ "/createAppChannel");
        if(channel != null && description != null){
            channel = channel.trim();
            description = description.trim();
        }
        if(channel == "" || description == "" || channel == null|| description == null){
            App42Fault.throwExceptionIfNullOrBlank(channel, "channel")
            App42Fault.throwExceptionIfNullOrBlank(description, "description")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"channel":{"name":"' + channel + '","description":"' + description + '"}}}}';
        params.body = body;
       App42Connection.post(URL, params,body,request, headerParams);
    };

    this.subscribeToChannel = function(channel,userName,request) {
        var URL = App42.URL("push"+ "/subscribeToChannel/" + userName);
        if(channel != null && userName != null){
            channel = channel.trim();
            userName = userName.trim();
        }
        if(channel == "" || userName == "" || channel == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(channel, "channel")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"push":{"channel":{"userName":"' + userName + '","name":"' + channel + '"}}}';
        params.body = body;
		console.log(body)
        App42Connection.post(URL, params,body,request, headerParams);
    };

    this.unsubscribeFromChannel = function(channel,userName,request) {
        var URL = App42.URL("push"+ "/unsubscribeToChannel/" + userName);
        if(channel != null && userName != null){
            channel = channel.trim();
            userName = userName.trim();
        }
        if(channel == "" || userName == "" || channel == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(channel, "channel")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
         var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"push":{"channel":{"userName":"' + userName + '","name":"' + channel + '"}}}';
        params.body = body;
       App42Connection.put(URL,params, body,request, headerParams);
    };

    this.sendPushMessageToChannel = function(channel,message,request) {
        var URL = App42.URL("push"+ "/sendPushMessageToChannel/" + channel);
        if(channel != null && message != null){
            channel = channel.trim();
            message = message.trim();
        }
        if(channel == "" || message == "" || channel == null|| message == null){
            App42Fault.throwExceptionIfNullOrBlank(channel, "channel")
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"message":{"channel":"' + channel + '","payload":"' + message + '","expiry":"' + getODataUTCDateFilter(new Date()) + '"}}}}';
        params.body = body;
         App42Connection.post(URL, params,body,request, headerParams);
    };

    this.sendPushMessageToAllByType = function(message,deviceType,request) {
        var URL = App42.URL("push"+ "/sendMessageToAllByType");
		checkDeviceType(deviceType);
        if(message != null && deviceType != null){
            message = message.trim();
            deviceType = deviceType.trim();
        }
        if(message == "" || deviceType == "" || message == null|| deviceType == null){
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            App42Fault.throwExceptionIfNullOrBlank(deviceType, "deviceType")
            return ;
        }
		var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"message":{"payload":"' + message + '","type":"' + deviceType + '","expiry":"' + getODataUTCDateFilter(new Date()) + '"}}}}';
        params.body = body;
          App42Connection.post(URL, params,body,request, headerParams);
    };

    this.sendPushMessageToUser = function(userName,message,request) {
        var URL = App42.URL("push"+ "/sendMessage/" + userName);
        if(message != null && userName != null){
            message = message.trim();
            userName = userName.trim();
        }
        if(message == "" || userName == "" || message == null|| userName == null){
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            return ;
        }
       var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"message":{"userName":"' + userName + '","payload":"' + message + '","expiry":"' + getODataUTCDateFilter(new Date()) + '"}}}}';
        params.body = body;
       App42Connection.post(URL, params,body,request, headerParams);
    };

    this.sendPushMessageToAll = function(message,request) {
        var URL = App42.URL("push"+ "/sendPushMessageToAll");
        if(message != null){
            message = message.trim();
        }
        if(message == "" || message == null){
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"message":{"payload":"' + message + '","expiry":"' + getODataUTCDateFilter(new Date()) + '"}}}}';
        params.body = body;
       App42Connection.post(URL, params,body,request, headerParams);
    };
	
	
	this.registerAndSubscribe = function(userName,channel,deviceToken,deviceType,request) {
        var URL = App42.URL("push"+ "/subscribeDeviceToChannel/");
		checkDeviceType(deviceType);
        if(channel != null && userName != null && deviceToken != null){
            channel = channel.trim();
            userName = userName.trim();
			deviceToken = deviceToken.trim();
        }
        if(channel == "" || userName == "" || channel == null|| userName == null || deviceToken == "" || deviceType == "" || deviceToken == null|| deviceType == null){
			App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(channel, "channel")
            App42Fault.throwExceptionIfNullOrBlank(deviceToken, "deviceToken")
			App42Fault.throwExceptionIfNullOrBlank(deviceType, "deviceType")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"userName":"' + userName + '","channelName":"' + channel + '","deviceToken":"' + deviceToken + '","type":"' + deviceType +'"}}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
	
	this.unsubscribeDeviceToChannel = function(userName,channel,deviceToken,request) {
        var URL = App42.URL("push"+ "/unsubscribeDeviceToChannel/");
        if(channel != null && userName != null && deviceToken != null){
            channel = channel.trim();
            userName = userName.trim();
			deviceToken = deviceToken.trim();
        }
        if(channel == "" || userName == "" || channel == null|| userName == null || deviceToken == ""  || deviceToken == null){
			App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(channel, "channel")
            App42Fault.throwExceptionIfNullOrBlank(deviceToken, "deviceToken")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
        var body = '{"app42":{"push":{"userName":"' + userName + '","channelName":"' + channel + '","deviceToken":"' + deviceToken + '"}}}}';
        params.body = body;
        App42Connection.post(URL, params,body,request, headerParams);
    };
	
	this.deleteDeviceToken = function(userName,deviceToken,request) {
        var URL = App42.URL("push" );
        if(userName != null && deviceToken != null){
            userName = userName.trim();
            deviceToken = deviceToken.trim();
           
        }
        if(userName == "" || deviceToken == "" || userName == null|| deviceToken == null){
            App42Fault.throwExceptionIfNullOrBlank(userName, "userName")
            App42Fault.throwExceptionIfNullOrBlank(deviceToken, "deviceToken")
            return ;
        }
        var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
		params.userName = userName;
		params.deviceToken = deviceToken;
		App42Connection.del(URL, params, request, headerParams);
		 
    };
	
	this.sendPushMessageToGroup = function(message,userList,request) {
        var URL = App42.URL("push"+ "/sendPushMessageToGroup/");
        if(message != null ){
            message = message.trim();
        }
        if(message == "" || userList == "" || message == null|| userList == null){
            App42Fault.throwExceptionIfNullOrBlank(message, "message")
            App42Fault.throwExceptionIfNullOrBlank(userList, "userList")
            return ;
        }
       var params =  __push.populateSignParams(),
        metaHeader =  __push.populateMetaHeaderParams(),
        headerParams = __merge(params,metaHeader);
		var stringfy = JSON.stringify(userList)
		var body = '{"app42":{"push":{"message":{"payload":"' + message + '","expiry":"' + getODataUTCDateFilter(new Date()) + '","users":{"user":' + stringfy + '}}}}}';
        params.body = body;
       App42Connection.post(URL, params,body,request, headerParams);
    };

}
