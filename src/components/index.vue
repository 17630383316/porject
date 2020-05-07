<template>
  <div>
    <header>
      <div>
        <p><img src="../assets/a1.png" /></p>
        <ul>
          <li>
              {{list[0].txt1}}
          </li>
           <li>
              {{list[0].text2}}
          </li>
           <li>
              {{list[0].text3}}
          </li>
          <li>
              {{list[0].text4}}
          </li>
        </ul>
        <p>
          <span> <img src="../assets/search.png" /></span>
          <input type="text" placeholder="请输入您的目的地" />
          </p>
          <p>登录/注册</p>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:[132,3213213,2123,132],
        list:[]
      }
    },
		mounted(){
			var _this=this;
			this.$axios.get('http://47.93.99.158:3000/mock/70/path').then(function(res){
				console.log(res.data)
				_this.list=res.data
			}).catch(function(error){
				console.log(error)
			})
		}
  }
</script>

<style scoped="scoped">
  header{
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 22px 0;
  }
  header div{
  display: flex;
  width: 1350px;
  }
  header div p{
     display: flex;
     align-items: center;
   }
  header div ul{
    margin-left: 90px;
    display: flex;
    width: 450px;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: #666666;
  }
  header div ul li:first-child{
    color: black;
  }
  header div p:nth-child(3){
    position: relative;
    margin-left: 110px;
  }
  header div p:nth-child(3) span img{
    width: 24px;
    height: 24px;
  }
  header div p:nth-child(3) span{
    position: absolute;
    left: 11px;
  }
  header div p:nth-child(3) input{
    width: 320px;
    height: 38px;
    box-sizing: border-box;
    padding-left: 46px;
    font-size: 16px;
  }
  header div p:nth-child(3) input::placeholder{
    font-size: 16px;
  }
  header div p:nth-child(4){
    margin-left: 10px;
    font-size: 24px;
    color: #666666;
  }
</style>
