<template>
  <div class="hello">
    {{qwe}}
    <div class="alert alert-success" role="alert">
      <span class="badge badge-primary">В процессе</span>
      <span class="badge badge-success">Сделано</span>
      <span class="badge badge-danger">Не сделано</span>
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['qwe'],
}
</script>


