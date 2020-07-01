// pages/post/post.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        var iceCreamData = {
            object:{
                date:"Jan 28 2017"
            },
            title:"小时候的冰棍儿与雪糕",
            postImg:"/images/post/post-4.jpg",
            avatar:"/images/avatar/avatar-5.png",
            content:"冰棍与雪糕绝对不是同一个东西。3到5毛的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棍。时过境迁，...",
            readingNum:92,
            collectionNum:{
                array:[108]
            },
            commentNum:7
        }

        // this.setData({
        //     title:"一根冰棍的哲学"
        // })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})