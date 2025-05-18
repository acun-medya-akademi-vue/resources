<script>
export default {
  name: "Modal",
  props: {
    title: String
  }
}
</script>

<template>
  <div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="header">{{ title }}</div>
      <div class="body">
        <slot name="body" />
      </div>
      <div class="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 800px;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index:999999;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.header {
  padding: 16px;
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
.body {
  padding: 16px;
  font-size: 1em;
}
.footer {
  padding: 16px;
  text-align: right;
  margin-top: auto;
}

.modal-overlay{
  position: absolute;
  width: 100vw ;
  height: 100vh;
  z-index:99999;
  top: 0;
  left:0;
  background-color: rgba(0, 0, 0, 0.5);
}


</style>
