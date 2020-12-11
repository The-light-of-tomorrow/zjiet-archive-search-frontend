Page({
  data: {
    loading:false,
    department:null,
    graduationYear:null,
    name:null,
    major:'专业班级：None',
    location:'档案位置：None',
    message:'提示：None',
    flag:true,
  },
  onLoad:function(options){

  },
  upper:function(e){
    console.log(e);

  },
  //事件处理函数
  searchTap:function() {
    
    this.setData({
      loading: true,
    } ) 
    wx.request({
      url:'https://nx.abu.pub:50443/get_msg',
      data:{
        department: this.data.department,
        graduationYear: this.data.graduationYear,
        name: this.data.name
      },
      success:function(res){
        console.log(res.data);
        this.setData({
          major: '专业班级：' + res.data.major,
          location: '档案位置：' + res.data.location,
          message: '提示：' + res.data.message,
          flag: res.data.flag,
          //  value: null,, /*查询成功后自动清除输入框*/
          loading:false,
        })
      }.bind(this),
    })
  },
  departmentInput:function(e){
    this.setData({
      department:e.detail.value
    })
  },
  graduationYearInput:function(e){
    this.setData({
      graduationYear:e.detail.value
    })
  },
  nameInput:function(e){
    this.setData({
      name:e.detail.value
    })
  }
})
