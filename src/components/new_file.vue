<template>
  <div>
    <div class="box">
      <ul class="image">
        <li><img src="../assets/2222_02.png"/></li>
      </ul>
    </div>
     <div class="y">
       <div class="u">
         <h1>{{list[1].title}}</h1>
         <div class="con">
           <div class="left">
           	<img src="../assets/111_06.jpg"/>
           </div>
           <div class="right">
             <ul>
               <li><span></span>{{list[1].text2}}</li>
               <li style="margin-top: 30px;">
                  <div class="L">
                  	<img src="../assets/111_09.jpg"/>
                  </div>
                   <div class="R">
                     <p>{{list[1].text4}}</p>
                     <p  style="margin-top: 20px;">{{list[1].text5}}</p>
                   </div>
               </li>
               <li style="margin-top: 38px;">
                  <div class="L">
                  	<img src="../assets/111_09.jpg"/>
                  </div>
                   <div class="R">
                     <p>{{list[1].text4}}</p>
                     <p style="margin-top: 20px;">{{list[1].text5}}</p>
                   </div>
               </li>
               <li style="margin-top: 38px;">
                  <div class="L">
                  	<img src="../assets/111_09.jpg"/>
                  </div>
                   <div class="R">
                     <p>{{list[1].text4}}</p>
                     <p  style="margin-top: 20px;">{{list[1].text5}}</p>
                   </div>
               </li>
             </ul>
           </div>
         </div>
       </div>

       <div class="u">
         <h1>{{list[2].title}}</h1>
         <div class="cont">
            <ul>
              <li><img src="../assets/111_14.jpg"/></li>
              <li>{{list[2].text1}}</li>
              <li>{{list[2].text2}}</li>
              <li>{{list[2].text3}}</li>
            </ul>
         
          <ul>
              <li><img src="../assets/111_14.jpg"/></li>
              <li>{{list[2].text1}}</li>
              <li>{{list[2].text2}}</li>
              <li>{{list[2].text3}}</li>
            </ul>
             <ul>
              <li><img src="../assets/111_14.jpg"/></li>
              <li>{{list[2].text1}}</li>
              <li>{{list[2].text2}}</li>
              <li>{{list[2].text3}}</li>
            </ul>
             <ul>
              <li><img src="../assets/111_14.jpg"/></li>
              <li>{{list[2].text1}}</li>
              <li>{{list[2].text2}}</li>
              <li>{{list[2].text3}}</li>
            </ul>
             <ul>
              <li><img src="../assets/111_14.jpg"/></li>
              <li>{{list[2].text1}}</li>
              <li>{{list[2].text2}}</li>
              <li>{{list[2].text3}}</li>
            </ul>
             <ul>
              <li><img src="../assets/111_14.jpg"/></li>
              <li>{{list[2].text1}}</li>
              <li>{{list[2].text2}}</li>
              <li>{{list[2].text3}}</li>
            </ul>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
  import {
    lun
  } from '../assets/new_file.js'
  export default {
    data(){
      return{
        
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
  .image:after{
    content: "";
    clear: both;
    display: block;
  }
  
  .image li {
    width: 100%;
   height: 100%;
    float: left;
  }
  .image img{
  	width: 100%;
  	height: 100%;
  }
.y{
  width: 1350px;
  margin: 0 auto;
}
.u{
  padding-top: 50px;
}
.con{
  margin-top: 40px;
  display: flex;
}
.left{
  width: 790px;
  height: 510px;
}
.left img{
	width: 100%;
}
.right{
  border: 1px solid #666666;
  color: #666666;
  margin-left: 16px;
  box-sizing: border-box;
  padding: 20px 30px;
  padding-right: 0;
}
.right ul li:first-child{
  font-size: 28px;
}
.right ul li{
  display: flex;
}
.L{
  width: 160px;
  height: 100px;
  background-color: antiquewhite;
}
.R{
  margin-left: 12px;
  width: 210px;
  word-wrap: break-word;
}
.cont{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cont ul li:first-child{
  width: 380px;
  height: 240px;
  background-color: aquamarine;
}
.cont ul li{
  margin: 20px 0;
  color: #666666;
}
.cont ul li:nth-child(2){
  font-size: 28px;
  font-weight: 600;
  color: #000000;
}
.cont ul li:nth-child(3){
  font-size: 20px;
}
.cont ul li:nth-child(4){
font-size: 26px;
}
.cont{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.cont ul{
	width: 380px;
	margin-bottom: 20px;
}
</style>
