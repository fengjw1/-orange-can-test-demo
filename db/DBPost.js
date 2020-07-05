class DBPost{
    constructor(postId){
        this.storageKeyName = 'postList';
        this.postId = postId;
    }

    getAllPostData(){
        var res = wx.getStorageSync(this.storageKeyName);
        if(!res){
            res = require('../data/data.js').postList;
            this.execSetStorageSync(res);
        }
        return res;
    }

    execSetStorageSync(data){
        wx.setStorageSync(this.storageKeyName, data)
    }

    getPostItemById(){
        var postsData = this.getAllPostData();
        var len = postsData.length;
        for (let i = 0; i < len; i++) {
            if (postsData[i].postId == this.postId) {
                return{
                    index: i,
                    data:postsData[i]
                }
            }
            
        }
    }

}

export{
    DBPost
}
