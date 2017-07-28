<template>
  <div class="home">
    <div class="header">
      <text class="title">Alan Mathison Turing</text>
    </div>
  
    <div style="position: relative;z-index: 1;display: block;">
      <a class="btn">
        <image class="icon" src="https://png.icons8.com/language/color/96" title="Language"></image>
      </a>
    </div>
    <textarea class="textarea" placeholder="Text"></textarea>

    <a class="bottom">
      <image class="icon" src="https://png.icons8.com/camera/ultraviolet/100" title="Camera" width="100" height="100"></image>
    </a>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
}

.icon {
  width: 96px;
  height: 96px;
  text-align: center;
  margin: auto;
}

.header {
  height: 50%;
  background-color: #26a2ff;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 60px;
  color: white;
  text-align: center;
}

.btn {
  border-radius: 50%;
  margin-top: -80px;
  float: right;
  margin-right: 30px;
  width: 160px;
  height: 160px;
  box-shadow: 0px 7px 34px 4px rgba(41, 178, 255, 0.14);
  background-color: rgba(255, 255, 255, 0.95);
  text-align: center;
}

.textarea {
  height: 25%;
  font-size: 50px;
  max-width: 650px;
  margin-top: 50px;
  margin-left: 50px;
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: #666666;
  border-width: 2px;
  border-style: solid;
  border-color: #26a2ff;
  text-align: center;
}

.bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 10%;
  background-color: #26a2ff;
}
</style>


